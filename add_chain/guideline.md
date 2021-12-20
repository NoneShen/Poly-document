<h1 align="center">Guideline for Developers</h1>


## Overview

This chapter shows the developer how to cooperate with the poly network team to add a chain into the poly cross-chain ecosystem. The functions and interfaces developers need to implement:

- Block Header Synchronization Interface Method， including the two sync header(native/service/header_sync/bsc/header_sync.go) function and the calling function whitch fetch genesis header info (cmd/tools/run.go syncbscgenesisheader)
- Handler for handel cross chain transaction with merkle proof (native/service/cross_chain_manager/bsc/bsc_handler.go)

The poly team will accomplish the remaining actions such as smart contract deployment, side chain registration, and relayer setup.

## Block Header Synchronization

To implement cross-chain features for any chain, say Ethereum, there are two kinds of contracts that need to be deployed-

Block header synchronization contract: This contract maintains the record of block headers of the relay chain on this chain. These block headers serve as means to verify cross-chain transactions.

The interface methods that need to be implemented by the respective contracts are as follows:

### Block Header Synchronization Method to be registered to relayer

| Interface Method      | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| **SyncGenesisHeader** | Synchronizes the relay chain's genesis block header (or another block header where a change in block generation cycle occurred). The method is called one time only when initializing the side chain. It stores and handles the genesis block header, then fetches the consensus node info of the relay chain; please refer to the [code](https://github.com/polynetwork/poly/blob/master/native/service/header_sync/bsc/header_sync.go#L59-L116) for more details. |
| **SyncBlockHeader**   | Consistently synchronizes block cycle change and cross-chain transaction block headers from the relay chain; the relayers use this interface method to synchronize block headers, stores, and process block headers, fetches the consensus node info if block generation cycle changes; please refer to the [code](https://github.com/polynetwork/poly/blob/master/native/service/header_sync/bsc/header_sync.go#L208-L314 ) for more details. |

Code Example for SyncGenesisHeader https://github.com/polynetwork/poly/blob/master/native/service/header_sync/bsc/header_sync.go#L59-L116 （加上详细注释）

Code Example for SyncBlockHeader https://github.com/polynetwork/poly/blob/master/native/service/header_sync/bsc/header_sync.go#L208-L314 （加上详细注释）

### Block Header Synchronization Entrance Method

| Interface Method                   | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **SyncSideChainGenesisHeader**     | It is the entrance method for synchronizing the genesis block header of the side chain to poly chain and synchronizing the genesis header of the poly chain to ccm contract of the side chain; please refer to the [code](https://github.com/polynetwork/poly-io-test/blob/master/cmd/tools/run.go#L1156-L1247) for more details. |
|                                ||

The Key information for this method:

- Service provider(endpoint) Url of side chain
- Selected genesis block height
- validators information for verifying genesis headers, it may exist in header information already or need to be fetched from block headers from other block height
- Other parameters that required for the side chain block header verification

Code Example https://github.com/polynetwork/poly-io-test/blob/master/cmd/tools/run.go#L1156-L1247 （加上详细注释）



## Cross-Chain Management

Cross-chain management contract: Every chain can have no more than one management contract. It creates cross-chain transactions that are transferred to the relay chain. All the service contracts that contain the business logic need to communicate with the management contract.

The interface methods that need to be implemented by the respective contracts are as follows:

### Cross Chain Management

| Interface Method        | Description                                                  |
| ----------------------- | :----------------------------------------------------------- |
| **MakeDepositProposal** | Creates cross-chain transactions invoked by service contracts. When a cross-chain function is carried out in the logic, a transaction includes a unique chain ID; the transaction is recorded in the Merkle tree. Act as the entrance of verifyFromTx, verifying, storing, and returning MakeTxParam for processing cross-chain steps. Please refer to the [code](https://github.com/polynetwork/poly/blob/master/native/service/cross_chain_manager/bsc/bsc_handler.go#L50-L73) for details |
| **verifyFromTx** | Prepare block header and deserialized proof for verifyMerkleProof, decode the extra data from tx and construct MakeTxParam. Please refer to the [code](https://github.com/polynetwork/poly/blob/master/native/service/cross_chain_manager/bsc/bsc_handler.go#L75-L121) for details |
| **verifyMerkleProof** | Verify the Merkle proof obtained by the relayer generated from the source chain to ensure that all transactions included in this block header have been created and have occurred on the relay chain. Please refer to the [code](https://github.com/polynetwork/poly/blob/master/native/service/cross_chain_manager/bsc/bsc_handler.go#L149-L222) for details |

Here are the parameters used in methods:

```go
MakeDepositProposal:
Requires:
service *native.NativeService   //Native Service that carries values of necessary information of  a cross-chain event
Returns:
type verifyFromTx struct {
	TxHash              []byte    
	CrossChainId        []byte    //ChainId of source chain
	FromContractAddress uint64    //Cross Chain Management Contarct address of source chain
	ToChainId           string    //ChainId of target chain
	ToContractAddress   uint64    //Cross Chain Management Contarct address of target chain
	Method              []byte    //Unlock or lock
	Args                []byte
}
```
```go
verifyFromTx:
Requires:
service               *native.NativeService  
proof                 []byte    //the proof to be serialized and verifyed
extra                 []byte    //the transaction information that will be used for contructing verifyFromTx
fromChainID           uint64,   //ChainId of source chain
height                uint32,   //the block height correspoding to current transaction event
sideChain             *side_chain_manager.SideChain //source chain information that contains ccm  contract address
Returns:
verifyFromTx
```
```go
verifyMerkleProof:
Requires:
blockData             *types.Header //the blockheader corresponding to current transaction event  
proof                 []byte    //the serilized proof
Returns:
Val                   []byte    //the proof result for checking extra before constructing verifyFromTx
```


## Test Module

Implement the function for sending cross-chain transactions to itself using lock proxy.  you can see it in Link to test cross-chain code 
