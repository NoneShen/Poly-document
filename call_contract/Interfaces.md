<h1 align="center">Interfaces Offered by Cross Chain Manager</h1>

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
