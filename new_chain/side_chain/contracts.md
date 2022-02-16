<h1 align="center">Develop for New Chain</h1>

> [!Note|style:flat|label:Notice]
> Cross Chain Manager module can work as a set of smart contracts. In some cases, it can also work as a native module of blockchain. If the chain integrated to Poly Network supports EVM, developers could freely use our Cross-chain contracts as templates. On the opposite, you may need to develop your own contracts which contains the main features as shown in following guidelines. To help you develop it, here we offer the examples in `Solidity` for each main method. You may refer to the full [code](https://github.com/polynetwork/eth-contracts/blob/master/contracts/core/cross_chain_manager) of these contracts.

## 1. Introduction to Cross-chain Contracts

- List of contracts 
  - [Cross Chain Manager Contract](https://github.com/polynetwork/eth-contracts/blob/master/contracts/core/cross_chain_manager/logic/EthCrossChainManager.sol): On source chain, it creates the cross chain transactions that are transferred to the Poly; On target chain, it verifies the legitimacy of transactions and executes the method on target business logic contract. In the following context, it may be referred to as CCM contract.
  - [Cross Chain Data Contract](https://github.com/polynetwork/eth-contracts/blob/master/contracts/core/cross_chain_manager/data/EthCrossChainData.sol): It serves as a database of cross chain transactions. In the following context, it may be referred to as CCD contract.
  - [Cross Chain Manager Proxy Contract](https://github.com/polynetwork/eth-contracts/blob/master/contracts/core/cross_chain_manager/upgrade/EthCrossChainManagerProxy.sol): It serves as a proxy of CCM contract. When there is any need to upgrade the CCM contract, it would pause old CCM contract and set new CCM contract to CCD contract.
  - Business Logic Contract: It executes the business logic of cross chain projects. It interacts with users and CCM contract both on source chain and target chain. We also offer the [guidelines](http://81.69.45.203/new_product/integrate_contracts/Customizing%20Business%20Logic%20Contract.html) of developing business logic contract.
- Interactions between contracts

<div align=center><img src="resources/contracts_interaction.png" alt=""/></div>

> [!Note|style:flat|label:Notice]
> In this guidelines, we realize the upgradable contracts through split the Cross chain contracts into data contract, logic contract and proxy contract. You could follow this method or choose the most suitable way for your project.

## 2. Develop Cross Chain Manager Contracts

To guarantee the safety of CCM contract, we keep whitelists of contract addresses and methods to prevent invalid call. Meanwhile, we also set `whiteLister` to manage these whitelists of CCM contract. We highly encourage developers to develop the similar features of authority management in personal projects.

### Step1. Develop Method to synchronize Genesis Block Header

#### Example:

```solidity
/*  @notice                       sync Poly chain genesis block header to smart contrat
 *  @dev                          this function can only be called once, nextbookkeeper of rawHeader can't be empty
 *  @param rawHeader              Poly chain genesis block raw header or raw Header including switching consensus peers info
 *  @return                       true or false
*/
function initGenesisBlock(bytes memory rawHeader, bytes memory pubKeyList) whenNotPaused public returns(bool) {
    // Load Ethereum cross chain data contract
    IEthCrossChainData eccd = IEthCrossChainData(EthCrossChainDataAddress);
        
    // Make sure the contract has not been initialized before
    require(eccd.getCurEpochConPubKeyBytes().length == 0, "EthCrossChainData contract has already been initialized!");
        
    // Parse header and convit the public keys into nextBookKeeper and compare it with header.nextBookKeeper to verify the validity of signature
    ECCUtils.Header memory header = ECCUtils.deserializeHeader(rawHeader);
    (bytes20 nextBookKeeper, address[] memory keepers) = ECCUtils.verifyPubkey(pubKeyList);
    require(header.nextBookkeeper == nextBookKeeper, "NextBookers illegal");
        
    // Record current epoch start height and public keys (by storing them in address format)
    require(eccd.putCurEpochStartHeight(header.height), "Save Poly chain current epoch start height to Data contract failed!");
    require(eccd.putCurEpochConPubKeyBytes(ECCUtils.serializeKeepers(keepers)), "Save Poly chain current epoch book keepers to Data contract failed!");
        
    // Fire the event
    emit InitGenesisBlockEvent(header.height, rawHeader);
    return true;
}
```

- This function is meant to sync Poly chain genesis block header to CCM contract. This method should be called at the very beginning and can only be called once. For the input data `rawHeader`, the nextbookkeeper can not be empty.
- First this function needs to make sure that the CCM contract has not been initialized through checking the public key of the current epoch. 
- Then we will parse the raw header to get the `header.nextBookKeeper`. Comparing it with the `nextBookKeeper` which is converted from `pubKeyList`, we could verify the validity of signature.
- After verifying the signature, we could record current epoch start height and the public keys by storing them in address format. And then emit the event `InitGenesisBlockEvent`.   

### Step2. Develop Method to Change Consensus Validator

#### Example:

```solidity
/*  @notice                       change Poly chain consensus book keeper
 *  @param rawHeader              Poly chain change book keeper block raw header
 *  @param pubKeyList             Poly chain consensus nodes public key list
 *  @param sigList                Poly chain consensus nodes signature list
 *  @return                       true or false
*/
function changeBookKeeper(bytes memory rawHeader, bytes memory pubKeyList, bytes memory sigList) whenNotPaused public returns(bool) {
    // Load Ethereum cross chain data contract
    ECCUtils.Header memory header = ECCUtils.deserializeHeader(rawHeader);
    IEthCrossChainData eccd = IEthCrossChainData(EthCrossChainDataAddress);
        
    // Make sure rawHeader.height is higher than recorded current epoch start height
    uint64 curEpochStartHeight = eccd.getCurEpochStartHeight();
    require(header.height > curEpochStartHeight, "The height of header is lower than current epoch start height!");
        
    // Ensure the rawHeader is the key header including info of switching consensus peers by containing non-empty nextBookKeeper field
    require(header.nextBookkeeper != bytes20(0), "The nextBookKeeper of header is empty");
        
    // Verify signature of rawHeader comes from pubKeyList
    address[] memory polyChainBKs = ECCUtils.deserializeKeepers(eccd.getCurEpochConPubKeyBytes());
    uint n = polyChainBKs.length;
    require(ECCUtils.verifySig(rawHeader, sigList, polyChainBKs, n - (n - 1) / 3), "Verify signature failed!");
        
    // Convert pubKeyList into ethereum address format and make sure the compound address from the converted ethereum addresses
    // equals passed in header.nextBookKeeper
    (bytes20 nextBookKeeper, address[] memory keepers) = ECCUtils.verifyPubkey(pubKeyList);
    require(header.nextBookkeeper == nextBookKeeper, "NextBookers illegal");
        
    // update current epoch start height of Poly chain and current epoch consensus peers book keepers addresses
    require(eccd.putCurEpochStartHeight(header.height), "Save MC LatestHeight to Data contract failed!");
    require(eccd.putCurEpochConPubKeyBytes(ECCUtils.serializeKeepers(keepers)), "Save Poly chain book keepers bytes to Data contract failed!");
        
    // Fire the change book keeper event
    emit ChangeBookKeeperEvent(header.height, rawHeader);
    return true;
}
```

- This function is meant to change Poly Chain consensus book keeper. 
- First we need to make sure the `rawHeader.height` is higher than recorded current epoch start height. Then we need to ensure that the rawHeader is the key header including info of switching consensus peers by containing non-empty `nextBookKeeper` field.
- Analogous to `initGenesisBlock()`, we also need to parse the raw header to get the `header.nextBookKeeper`. Comparing it with the `nextBookKeeper` which is converted from `pubKeyList`, we could verify the validity of signature.
- After verifying the signature, we could record current epoch start height and current epoch consensus peers book keepers by storing them in address format. And then emit the event `ChangeBookKeeperEvent`.   

### Step3. Develop Method to Push Cross-chain Transactions to Poly Chain

#### Example:

````solidity
/*  
 *  @param toChainId              The target chain id
 *  @param toAddress              The address in bytes format to receive same amount of tokens in target chain
 *  @param toContract             Target smart contract address in bytes in target block chain
 *  @param txData                 Transaction data for target chain, include toAssetHash, toAddress, amount
 *  @return                       true or false 
*/
function crossChain(uint64 toChainId, bytes calldata toContract, bytes calldata method, bytes calldata txData) whenNotPaused external returns (bool) {
    // Only allow whitelist contract to call
    require(whiteListFromContract[msg.sender],"Invalid from contract");
        
    // Load Ethereum cross chain data contract
    IEthCrossChainData eccd = IEthCrossChainData(EthCrossChainDataAddress);
        
    // To help differentiate two txs, the ethTxHashIndex is increasing automatically
    uint256 txHashIndex = eccd.getEthTxHashIndex();
        
    // Convert the uint256 into bytes
    bytes memory paramTxHash = Utils.uint256ToBytes(txHashIndex);
        
    // Construct the makeTxParam, and put the hash info storage, proving tx existence
    bytes memory rawParam = abi.encodePacked(ZeroCopySink.WriteVarBytes(paramTxHash),
        ZeroCopySink.WriteVarBytes(abi.encodePacked(sha256(abi.encodePacked(address(this), paramTxHash)))),
        ZeroCopySink.WriteVarBytes(Utils.addressToBytes(msg.sender)),
        ZeroCopySink.WriteUint64(toChainId),
        ZeroCopySink.WriteVarBytes(toContract),
        ZeroCopySink.WriteVarBytes(method),
        ZeroCopySink.WriteVarBytes(txData)
    );
        
    // Must save it in the storage to be included in the proof to be verified.
    require(eccd.putEthTxHash(keccak256(rawParam)), "Save ethTxHash by index to Data contract failed!");
        
    // Fire the cross chain event denoting there is a cross chain request from Ethereum network to other public chains through Poly chain network
    emit CrossChainEvent(tx.origin, paramTxHash, msg.sender, toChainId, toContract, rawParam);
    return true;
}
````

- This method can only be called by the contracts in whitelist.
- This method creates cross chain transactions, invoked by service contracts when a cross chain function is carried out in the logic contract.
- This method constructs the `rawParam`, which contains transaction hash, `msg.sender`, target chain id, business logic contract to be invoked on target chain, the target method to be invoked and the serialized transaction data which has been already constructed in business logic contract. 
- Then put the hash of `rawParam` into storage, proving the existence of transaction .

### Step4. Develop Method to Verify & Execute Transaction

#### Example:

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
function verifyHeaderAndExecuteTx(bytes memory proof, bytes memory rawHeader, bytes memory headerProof, bytes memory curRawHeader,bytes memory headerSig) whenNotPaused public returns (bool){
    ECCUtils.Header memory header = ECCUtils.deserializeHeader(rawHeader);
    // Load ehereum cross chain data contract
    IEthCrossChainData eccd = IEthCrossChainData(EthCrossChainDataAddress);
        
    // Get stored consensus public key bytes of current poly chain epoch and deserialize Poly chain consensus public key bytes to address[]
    address[] memory polyChainBKs = ECCUtils.deserializeKeepers(eccd.getCurEpochConPubKeyBytes());

    uint256 curEpochStartHeight = eccd.getCurEpochStartHeight();

    uint n = polyChainBKs.length;
    if (header.height >= curEpochStartHeight) {
        // It's enough to verify rawHeader signature
        require(ECCUtils.verifySig(rawHeader, headerSig, polyChainBKs, n - ( n - 1) / 3), "Verify poly chain header signature failed!");
    } else {
        // We need to verify the signature of curHeader 
        require(ECCUtils.verifySig(curRawHeader, headerSig, polyChainBKs, n - ( n - 1) / 3), "Verify poly chain current epoch header signature failed!");

        // Then use curHeader.StateRoot and headerProof to verify rawHeader.CrossStateRoot
        ECCUtils.Header memory curHeader = ECCUtils.deserializeHeader(curRawHeader);
        bytes memory proveValue = ECCUtils.merkleProve(headerProof, curHeader.blockRoot);
        require(ECCUtils.getHeaderHash(rawHeader) == Utils.bytesToBytes32(proveValue), "verify header proof failed!");
    }
        
    // Through rawHeader.CrossStatesRoot, the toMerkleValue or cross chain msg can be verified and parsed from proof
    bytes memory toMerkleValueBs = ECCUtils.merkleProve(proof, header.crossStatesRoot);
        
    // Parse the toMerkleValue struct and make sure the tx has not been processed, then mark this tx as processed
    ECCUtils.ToMerkleValue memory toMerkleValue = ECCUtils.deserializeMerkleValue(toMerkleValueBs);
    require(!eccd.checkIfFromChainTxExist(toMerkleValue.fromChainID, Utils.bytesToBytes32(toMerkleValue.txHash)), "the transaction has been executed!");
    require(eccd.markFromChainTxExist(toMerkleValue.fromChainID, Utils.bytesToBytes32(toMerkleValue.txHash)), "Save crosschain tx exist failed!");
        
    // Ethereum ChainId is 2, we need to check the transaction is for Ethereum network
    require(toMerkleValue.makeTxParam.toChainId == chainId, "This Tx is not aiming at this network!");
        
    // Obtain the target contract, so that Ethereum cross chain manager contract can trigger the executation of cross chain tx on Ethereum side
    address toContract = Utils.bytesToAddress(toMerkleValue.makeTxParam.toContract);
        
    // only invoke PreWhiteListed Contract and method For Now
    require(whiteListContractMethodMap[toContract][toMerkleValue.makeTxParam.method],"Invalid to contract or method");

    //TODO: check this part to make sure we commit the next line when doing local net UT test
    require(_executeCrossChainTx(toContract, toMerkleValue.makeTxParam.method, toMerkleValue.makeTxParam.args, toMerkleValue.makeTxParam.fromContract, toMerkleValue.fromChainID), "Execute CrossChain Tx failed!");

    // Fire the cross chain event denoting the executation of cross chain tx is successful,
    // and this tx is coming from other public chains to current Ethereum network
    emit VerifyHeaderAndExecuteTxEvent(toMerkleValue.fromChainID, toMerkleValue.makeTxParam.toContract, toMerkleValue.txHash, toMerkleValue.makeTxParam.txHash);

    return true;
}

/* 
 *  @notice                       Dynamically invoke the target contract, and trigger executation of cross chain tx 
                                  on Ethereum side
 *  @param _toContract            The target contract that will be invoked by the Ethereum Cross Chain Manager contract
 *  @param _method                At which method will be invoked within the target contract
 *  @param _args                  The parameter that will be passed into the target contract
 *  @param _fromContractAddr      From chain smart contract address
 *  @param _fromChainId           Indicate from which chain current cross chain tx comes 
 *  @return                       true or false
*/
function _executeCrossChainTx(address _toContract, bytes memory _method, bytes memory _args, bytes memory _fromContractAddr, uint64 _fromChainId) internal returns (bool){
    // Ensure the target contract gonna be invoked is indeed a contract rather than a normal account address
    require(Utils.isContract(_toContract), "The passed in address is not a contract!");
    bytes memory returnData;
    bool success;
        
    // The returnData will be bytes32, the last byte must be 01;
    (success, returnData) = _toContract.call(abi.encodePacked(bytes4(keccak256(abi.encodePacked(_method, "(bytes,bytes,uint64)"))), abi.encode(_args, _fromContractAddr, _fromChainId)));
        
    // Ensure the executation is successful
    require(success == true, "EthCrossChain call business contract failed");
        
    // Ensure the returned value is true
    require(returnData.length != 0, "No return value from business contract!");
    (bool res,) = ZeroCopySource.NextBool(returnData, 31);
    require(res == true, "EthCrossChain call business contract return is not true");
        
    return true;
}
````

- This method is meant to be invoked by relayer. In some cases, users could invoke this method by themselves if they get the valid block information from Poly. 
- This method fetches and processes cross chain transactions, finds the merkle root of a transaction based on the block height (in the block header), verifies the legitimacy of transaction using the transaction parameters.
- After verifying Poly chain block header and proof, we still need to check if the parameters `toContract` and `toMerkleValue.makeTxParam.method` have been pre listed in whitelists.
- Then it will invoke the business logic contract deployed on the target chain. Invoking will be processed through the internal method `_executeCrossChainTx()`: 
  - This method is meant to invoke the target contract, and trigger executation of cross chain tx on target chain. Firstly, we need to ensure the target contract gonna be invoked is indeed a contract rather than a normal account address. 
  - Then we construct a method call on target business logic contract: first we need to `encodePacked` the `_method` and the format of input data `"(bytes,bytes,uint64)"`. 
  - Then it would `keccak256` the encoded string, use `bytes4` to take the first four bytes of the call data for a function call specifies the function to be called. Parameter `_method`  is from the `toMerkleValue` , which is parsed from `proof`. And the input parameters format is restricted as (bytes `_args`, bytes `_fromContractAddr`, uint64 `_fromChainId`). These two parts are encodePacked as a method call.  
  - After calling the method, we need to check the return value. Only if the return value is true, will the whole cross chain transaction be executed successfully. 
