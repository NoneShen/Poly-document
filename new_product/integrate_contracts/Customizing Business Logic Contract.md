<h1 align="center">Customizing Business Logic Contract</h1>

### Introduction

- List of contracts
  - [Cross Chain Manager Contract](https://github.com/polynetwork/eth-contracts/blob/master/contracts/core/cross_chain_manager/logic/EthCrossChainManager.sol): On source chain, it creates the cross chain transactions that are transferred to the Poly; On target chain, it verifies the legitimacy of transactions and executes the method on target business logic contract. In the following context, it may be referred to as CCM contract.
  - [Cross Chain Data Contract](https://github.com/polynetwork/eth-contracts/blob/master/contracts/core/cross_chain_manager/data/EthCrossChainData.sol): It serves as a database of cross chain transactions. In the following context, it may be referred to as CCD contract.
  - [Cross Chain Manager Proxy Contract](https://github.com/polynetwork/eth-contracts/blob/master/contracts/core/cross_chain_manager/upgrade/EthCrossChainManagerProxy.sol): It serves as a proxy of CCM contract. When there is any need to upgrade the CCM contract, it would pause old CCM contract and set new CCM contract to CCD contract. 
  - Business Logic Contract: It executes the business logic of cross chain projects. It interacts with users and CCM contract both on source chain and target chain. Here we offer a [template](http://81.69.45.203/new_product/integrate_contracts/Example.md) of business logic contract to realize cross chain features. 
- Interactions between contracts
<div align=center><img src="resources/contracts_interaction.jpeg" alt=""/></div>

### Step 1: Developing Customized Business Logic Contract

To implement cross chain features for any chain, cross chain management contract is needed to be deployed. Every chain can have no more than one management contract. All the business logic contracts need to interact with the CCM contract. Following is the detailed description of two interfaces offered by CCM contract. You may refer to the full [code](https://github.com/polynetwork/eth-contracts/blob/master/contracts/core/cross_chain_manager/logic/EthCrossChainManager.sol) of CCM contract. 

#### Initiate a Cross-chain Request from the Source Chain

##### Interface:

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

##### Example of Calling the Interface `crossChain()`:

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

- This function is meant to be invoked by the user. The user requests an asset token cross chain transaction through the dApp which works in source chain, business logic contract gets the transaction information which contains the asset contract address on source chain, the target chain id, the target address and amount of token to be transfered. By calling this method, business logic contract will lock the certain amount to asset contract;
- Then the transaction data will be packed, which then in turn invokes the CCM contract. The management contract transfers the parameters of transaction data to the target chain and a cross chain transaction is created by management contract which is sent to the target chain based on block generation on source chain;
- The serialized transaction data, along with the chain id and business logic contract address of target chain and the method needed to be called on target chain, will be sent through `crossChain()` in CCM contract.

#### Verifying and Executing Cross Chain Transaction on the Target Chain

##### Interface:

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
- After verifying Poly chain block header and proof, it will invoke the business logic contract deployed on the target chain. Invoking will be processed through the internal method `_executeCrossChainTx()`: 
  - This method is meant to invoke the targeting contract, and trigger executation of cross chain tx on target chain. Firstly, we need to ensure the targeting contract gonna be invoked is indeed a contract rather than a normal account address. 
  - Then we construct a method call on target business logic contract: first we need to `encodePacked` the `_method` and the format of input data `"(bytes,bytes,uint64)"`. Then it would `keccak256` the encoded string, use `bytes4` to take the first four bytes of the call data for a function call specifies the function to be called. Parameter `_method`  is from the `toMerkleValue` , which is parsed from `proof`. And the input parameters format is restricted as (bytes `_args`, bytes `_fromContractAddr`, uint64 `_fromChainId`). These two parts are encodePacked as a method call.  
  - After calling the method, we need to check the return value. Only if the return value is true, will the whole cross chain transaction be executed successfully. 

##### Example of Calling the Interface `verifyHeaderAndExecuteTx()`:

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

- This functions is meant to be invoked by CCM contract. It deserializes the transaction data and invokes the asset contract to release the tokens to target address.
- `verifyHeaderAndExecuteTx()` in CCM contract determines the legitimacy of the cross chain transaction information and resolve the parameters of transaction data from the Poly chain transaction merkle proof and `crossStateRoot` contained in the block header. After verification through Poly, the packed transaction data could be executed on target chain.
- Then call the function `unlock()` to deserialize the transaction data and unlock (transfer) the certain amount of token to the target address on target chain and completes the cross chain contract invocation.

#### Binding the Mapping Relationship

Besides of the verifying the existence of transaction through CCM contract, business logic contract needs to make sure of the accuracy of the assets relationship in the transaction. Therefore, the business contract should maintain both the asset mapping and business logic contract mapping. Asset mapping is from the asset on source chain to the mapping of target chain id to the same kind of asset issued on target chain. CCM contract mapping is from the target chain id to the business logic contract address on target chain.

##### Example:

The asset mapping relationship which stored in business logic contract will help provide the completeness of transaction data. Binding actions also prevent the wrong input from users which may lead to transfer assets to wrong asset contract address.

```solidity
pragma solidity ^0.5.0;

import "./../../libs/ownership/Ownable.sol";

contract LockProxy is Ownable {
		address public managerProxyContract;
	  mapping(uint64 => bytes) public proxyHashMap;
	  mapping(address => mapping(uint64 => bytes)) public assetHashMap;
    
    // toChainId: the target chain id
    // targetProxyHash: the address of business logic contract on target chain
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

### Step 2: Deploying Contracts

To realize implementation of cross chain features, developers need to make sure that:

- The customized business logic contracts are deployed both on source chain and target chain
- The cross chain methods in your business logic contracts should allow our Cross Chain Manager Contract to call
- The mapping assets need to be bound before any cross chain transactions

### Step 3: Test Your Contracts

We highly encourage project developers to test the business logic contract on testnet before launching on mainnet. If you want to test your contract on mainnet directly, you need to provide us of the business logic contract addresses and cross-chain methods both on source chain and target chain. So that we could maintain the whitelist of CCM contract, which is meant to guarantee the safety of cross chain process. 

Following are the tests required to be done before launching project:

- 

 



