<h1 align="center">Calling Cross Chain Manager Contrat</h1>

This Branch is intended for developers who want to develop your own business logic contract which interacted with the cross chain manager provided by Poly Network. 

This part introduces the contracts involved in the cross chain process and the interfaces interacted with business logic contract. Business logic serves as smart contract invoked by users both on source chain and target chain. Cross Chain Manager contract offers two interfaces to interact with business logic contract directly. In additionally, an example of business logic is offered to help understand the interaction more vividly.

## Introduction

Poly cross chain ecosystem provides a platform for various different chains to interact and transfer data along with carrying out cross chain transactions. Any chain can freely join the ecosystem. However, the chains that support smart contracts can interact and transfer all kinds of information between chains, while the chains that do not support smart contracts are limited to cross chain asset transfer. This part will introduce the contracts involved in the cross chain process and how they interact with each other.

#### List of Contracts

- **Block header synchronization contract**: This contract maintains the record of block headers of the relay chain on this chain. These block headers serve as means to verify cross chain transactions. In the following context, it may be referred to as Header Sync Contract.
- **Cross chain management contract**: Every chain can have no more than one management contract. It creates the cross chain transactions that are transferred to the relay chain. All the service contracts that contain the business logic need to communicate with the management contract. In the following context, it may be referred to as CCM Contract.
- **Service contract**: It serves as business logic contract invoked by users both on source chain and target chain. This document offers an example of it, which is named as `LockProxy` Contract in the part [Example](./Example.md).

#### Cross Chain Interaction

In general, in a full cross chain process, the user sends a cross chain request to the service contract on source chain by invoking a dApp's cross chain interface, and on the target chain the dApp's smart contract executes the necessary logic to produce the final result. source chain and target chain implement the two contracts (Header Sync Contract & CCM Contract) and other necessary interfaces, and anyone can develop an infrastructure for dApps around the CCM Contract. The contracts deployed on source chain and target chain make up a complete cross chain dApp.

## Interfaces

To implement cross chain features for any chain, cross chain management contract is needed to be deployed. Every chain can have no more than one management contract. On source chain, it creates the cross chain transactions that are transferred to the Poly; On target chain, it verifies the legitimacy of transactions and executes the method on target business logic contract. All the business logic smart contract need to communicate with the management contract. Following are the detailed description of two interfaces which interacts with the business logic contracts.

````solidity
/*  
 *  @param toChainId              The target chain id
 *  @param toAddress              The address in bytes format to receive same amount of tokens in target chain
 *  @param toContract             Target smart contract address in bytes in target block chain
 *  @param txData                 Transaction data for target chain, include toAssetHash, toAddress, amount
 *  @return                       true or false 
*/
function crossChain(uint64 toChainId, bytes calldata toContract, bytes calldata method, bytes calldata txData) whenNotPaused external returns (bool)
````

- This method creates cross chain transactions, invoked by service contracts when a cross chain function is carried out in the logic contract.
- This method constructs the `rawParam`, which contains transaction hash, `msg.sender`, target chain id, business logic contract to be invoked on target chain, the target method to be invoked and the serialized transaction data which has been already constructed in business logic contract. 
- Then put the hash of `rawParam` into storage, to help provide proof of transaction existence.

````solidity
/*  
 *  @param proof                  Poly chain transaction merkle proof
 *  @param rawHeader              The header containing crossStateRoot to verify the above tx merkle proof
 *  @param headerProof            The header merkle proof used to verify rawHeader
 *  @param curRawHeader           Any header in current epoch consensus of Poly chain
 *  @param headerSig              The coverted signature veriable for solidity derived from Poly chain consensus nodes' signature 
 *                                used to verify the validity of curRawHeader
 *  @return                       true or false
*/
function verifyHeaderAndExecuteTx(bytes memory proof, bytes memory rawHeader, bytes memory headerProof, bytes memory curRawHeader, bytes memory headerSig) whenNotPaused public returns (bool)
````

- This method is meant to be invoked by relayer, in some cases user could invoke this method by themselves if they get the valid block information from Poly. 
- This method fetches and processes cross chain transactions, finds the merkle root of a transaction based on the block height (in the block header), verifies the legitimacy of transaction using the transaction parameters.
- After verifying Poly chain header and proof, it will invoke the service contract on the target chain. The detailed invoking will be processed as `_executeCrossChainTx` method as following: 
  - This method is meant to invoke the targeting contract, and trigger executation of cross chain tx on target chain. Firstly, we need to ensure the targeting contract gonna be invoked is indeed a contract rather than a normal account address. 
  - Then we construct a method call on target business logic contract, first we need to `encodePacked` the `_method` and the format of input data `"(bytes,bytes,uint64)"` , then `keccak256` the encoded string, use `bytes4` to take the first four bytes of the call data for a function call specifies the function to be called. Parameter `_method`  is from the `toMerkleValue` , which is parsed from `proof`. And the input parameters format is restricted as (bytes `_args`, bytes `_fromContractAddr`, uint64 `_fromChainId`). These two parts are encodePacked as a call.  
  - After calling the method, we need to check that if the return value is true. Only if the return value is true, will the whole cross chain transaction be executed successfully. 

You may refer to the full [code](https://github.com/polynetwork/eth-contracts/blob/master/contracts/core/cross_chain_manager/logic/EthCrossChainManager.sol) of `EthCrossChainManager ` contract . 

## Example

This part provides an example of business logic contract, which provides a method to cross-chain transfer assets between two chains where already equipped with Cross-Chain Manager Contract and other required contracts mentioned before. In this example, the business logic contract is named as `LockProxy` contract.

#### Authority Management:

To ensure the security and integrity of the methods in contract, developers of business logic contracts need to manage the authority of invoking the methods. Here we provider a modifier which could modify the authority of these methods.

```solidity
// ethCCMProxyAddr: the address of cross chain manager proxy contract
function setManagerProxy(address ethCCMProxyAddr) onlyOwner public {
    managerProxyContract = ethCCMProxyAddr;
    emit SetManagerProxyEvent(managerProxyContract);
}

modifier onlyManagerContract() {
    IEthCrossChainManagerProxy ieccmp = IEthCrossChainManagerProxy(managerProxyContract);
    require(_msgSender() == ieccmp.getEthCrossChainManager(), "msgSender is not EthCrossChainManagerContract");
    _;
}
```

- Setting the manager contract and binding assets/chains pair should be stricted to only the owner of `LockProxy` contract.
- Releasing the assets on target chain should also be stricted to only the cross chain manager contract. 

#### Bind assets:

Besides of the verifying the existence of transaction through CCM contract, `LockProxy` contract needs to make sure of the accuracy of the assets relationship in the transaction. Therefore, the business contract should maintain the asset mapping and CCM proxy contract mapping. Asset mapping is from the asset on source chain to the mapping of target chain id to the same kind of asset issued on target chain. CCM contract mapping is from the target chain id to the `LockProxy` contract address on target chain.

The asset mapping relationship which stored in `LockProxy` contract will help provide the completeness of transaction data. Bind actions also prevent the wrong input from users which may lead to transfer assets to wrong asset contract address.

```solidity
pragma solidity ^0.5.0;

import "./../../libs/ownership/Ownable.sol";

contract LockProxy is Ownable {
	address public managerProxyContract;
	mapping(uint64 => bytes) public proxyHashMap;
	mapping(address => mapping(uint64 => bytes)) public assetHashMap;
    
    // toChainId: the target chain id
    // targetProxyHash: the address of lock proxy contract on target chain
    function bindProxyHash(uint64 toChainId, bytes memory targetProxyHash) onlyOwner public returns (bool) {
        proxyHashMap[toChainId] = targetProxyHash;
        emit BindProxyEvent(toChainId, targetProxyHash);
        return true;
    }
    
    // fromAssetHash: asset hash on source chain 
    // toAssetHash: asset hash on target chain
    function bindAssetHash(address fromAssetHash, uint64 toChainId, bytes memory toAssetHash) onlyOwner public returns (bool) {
        assetHashMap[fromAssetHash][toChainId] = toAssetHash;
        emit BindAssetEvent(fromAssetHash, toChainId, toAssetHash, getBalanceFor(fromAssetHash));
        return true;
    }
}
```

- After setting the CCM proxy contract, the two mapping relationships should be input through `bindProxyHash()` and `bindAssetHash()`.
- Both on source chain and target chain, the user needs to bind the asset hash and `LockProxy` contract, so that the `LockProxy` contract can maintain mappings: 
  - From asset contract address on source chain and that on target chain with target chain id.
  - From target chain id to  `LockProxy` contract address on target chain

- After finishing setting all above,  `LockProxy` contract will work properly as the business logic. 

#### Cross-Chain transaction:

One cross chain transaction can be divided into two parts: on source chain,  `LockProxy` contract will lock the asset to contract; on target chain,  `LockProxy` contract will unlock the same amount to the target address. The whole process needs to convey the transaction data. The relationships between two chain's transaction data parameters shows below:

<div align=center><img width="1200" height="360" src="resources/dataflow.jpeg"/></div>

```solidity
/*  
 *  @param fromAssetHash     The asset address in current chain
 *  @param toChainId         The target chain id
 *  @param toAddress         The address in bytes format to receive same amount of tokens in target chain 
 *  @param amount            The amount of tokens to be crossed from ethereum to the chain with chainId
*/
function lock(address fromAssetHash, uint64 toChainId, bytes memory toAddress, uint256 amount) public payable returns (bool) {
    require(amount != 0, "amount cannot be zero!");
    require(_transferToContract(fromAssetHash, amount), "transfer asset from fromAddress to lock_proxy contract failed!");
        
    bytes memory toAssetHash = assetHashMap[fromAssetHash][toChainId];
    require(toAssetHash.length != 0, "empty illegal toAssetHash");

    TxArgs memory txArgs = TxArgs({
        toAssetHash: toAssetHash,
        toAddress: toAddress,
        amount: amount
    });
    bytes memory txData = _serializeTxArgs(txArgs);
        
    IEthCrossChainManagerProxy eccmp = IEthCrossChainManagerProxy(managerProxyContract);
    address eccmAddr = eccmp.getEthCrossChainManager();
    IEthCrossChainManager eccm = IEthCrossChainManager(eccmAddr);
        
    bytes memory toProxyHash = proxyHashMap[toChainId];
    require(toProxyHash.length != 0, "empty illegal toProxyHash");
    require(eccm.crossChain(toChainId, toProxyHash, "unlock", txData), "EthCrossChainManager crossChain executed error!");

    emit LockEvent(fromAssetHash, _msgSender(), toChainId, toAssetHash, toAddress, amount);
        
    return true;

}
```

- This function is meant to be invoked by the user, a certain amount tokens will be locked immediately. Then the same amount of tokens will be unlocked from `LockProxy` contract on the target chain with chain id later;
- The user makes an asset token cross chain transaction request through the dApp which works in source chain, `LockProxy` contract gets the transation information which contains the asset contract address on source chain, the target chain id, the target address and amount of token to be transfered. By calling the function `lock()`, `LockProxy` contract will lock(transfer) the certain amount to asset contract;
- Then the transaction data will be packed, which then in turn invokes the CCM contract. The management contract transfers the parameters of transaction data to the target chain and a cross chain transaction is created by management contract which is sent to the target chain based on block generation on source chain;
- The serialized transaction data, along with the chain id and `LockProxy` contract address of target chain and the method needed to be called on target chain, will be sent through `crossChain()` in CCM contract.

```solidity
/*  
 *  @param argsBs            The argument bytes recevied by the lock proxy contract on source chain, 
 *                           need to be deserialized based on the way of serialization in the 
 *                           lock proxy contract on source chain .
 *  @param fromContractAddr  The source chain contract address
 *  @param fromChainId       The source chain id
*/
function unlock(bytes memory argsBs, bytes memory fromContractAddr, uint64 fromChainId) onlyManagerContract public returns (bool) {
    TxArgs memory args = _deserializeTxArgs(argsBs);
    require(fromContractAddr.length != 0, "from proxy contract address cannot be empty");
    require(Utils.equalStorage(proxyHashMap[fromChainId], fromContractAddr), "From Proxy contract address error!");
        
    require(args.toAssetHash.length != 0, "toAssetHash cannot be empty");
    address toAssetHash = Utils.bytesToAddress(args.toAssetHash);

    require(args.toAddress.length != 0, "toAddress cannot be empty");
    address toAddress = Utils.bytesToAddress(args.toAddress);

    require(_transferFromContract(toAssetHash, toAddress, args.amount), "transfer asset from lock_proxy contract to toAddress failed!");
        
    emit UnlockEvent(toAssetHash, toAddress, args.amount);
    return true;
}
```

- This functions is meant to be invoked by Cross-Chain manager contract. It deserializes the transaction data and invokes the asset contract to release the tokens to target address.
- After verification through Poly (detailed verification process shown in part Cross Chain Interaction Between Chains), the packed transaction data could be executed on target chain.
- `verifyHeaderAndExecuteTx()` in Cross Chain Manager contract determines the legitimacy of the cross chain transaction information and resolve the parameters of transaction data from the Poly chain transaction merkle proof and `crossStateRoot` contained in the block header. 
- Then call the function `unlock()` to deserialize the transaction data and unlock (transfer) the certain amount of token to the target address on target chain and completes the cross chain contract invocation. 

#### Serialize & deserialize transaction data

```solidity
function _serializeTxArgs(TxArgs memory args) internal pure returns (bytes memory) {
    bytes memory buff;
    buff = abi.encodePacked(
        ZeroCopySink.WriteVarBytes(args.toAssetHash),
        ZeroCopySink.WriteVarBytes(args.toAddress),
        ZeroCopySink.WriteUint255(args.amount)
    );
    return buff;
}

function _deserializeTxArgs(bytes memory valueBs) internal pure returns (TxArgs memory) {
    TxArgs memory args;
    uint256 off = 0;
    (args.toAssetHash, off) = ZeroCopySource.NextVarBytes(valueBs, off);
    (args.toAddress, off) = ZeroCopySource.NextVarBytes(valueBs, off);
    (args.amount, off) = ZeroCopySource.NextUint255(valueBs, off);
    return args;
}
```

- In the process of contract development, developers will always encounter serialization and deserialization problems, that is, how to save a struct type of data in the database and how to deserialize the byte array read from the database to obtain data of struct type. In the libs, `ZeroCopySource.sol` and `ZeroCopySink.sol` offered the interfaces to serialize and deserialize data. 
- When serializing various data types, for fixed-length data (for example: `bytes`, `uint16`, `uint32`, `uint64`, etc.), directly convert the data into a byte array; for data with variable length, serializing the length is required firstly, and then serialize the data (for example, unsigned integers of unknown size, including `uint16`, `uint32`, or `uint64`, etc.).
- Deserialization is the opposite of serialization. For all serialization methods, there are corresponding deserialization methods. When reading data of a specified type, if you know its length, you can read it directly; for data with an unknown length, read the length first, and then read the content. 

You may refer to the full [code](https://github.com/polynetwork/eth-contracts/blob/master/contracts/core/lock_proxy/LockProxy.sol) of `LockProxy` contract . 


