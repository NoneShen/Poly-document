<h1 align="center">Relay Chain Development</h1>

## Development Requirements

### 1. Make sure the side chain support Light Client Verification

The block header must contain the following information：
- The hash of the previous block header
- Merkle state root hash
- The necessary information to prove the legitimacy of the block header varies from different consensus mechanisms.

> [!Note|style:flat|label:Note]
> Please get in touch with the poly team Via <a href="mailto:contact@poly.network">contact@poly.network</a> Or https://t.me/polynetworkgroup for more support if your chain doesn't support techniques like Simple Payment Verification (SPV) protocol in Bitcoin or  Light Ethereum Subprotocol (LES) in Ethereum.

### 2. Understand the consensus algorithm

- How does the chain select consensus validators, voters, and block producers for minting new blocks and bookkeeping block transactions. 

### 3. Offer the block header structure and verification methods
- Block header structure
- Serialization and Deserilization methods
- Block header verification mehtods

### 4. Offer the merkle tree structure, generation and verification methods

- The Merkle tree structure
- State root generation, and verification methods
- are necessary to verify cross-chain transactions

## Development Specifications

This chapter shows the interface methods that are necessary for handling block data in the poly relay chain during the cross-chain process. Here are two main steps:
<div align=center><img src="resources/relay_chain_development.png" alt=""/></div>

### 1. Implement the methods of block data verification

#### Block Header Synchronization Methods

| Method                | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| **SyncGenesisHeader** | Synchronizes the side chain's genesis block header (or canonical block header that has sufficient information to verify subsequent block headers) to the relay chain. The method is called one time only when initializing the side chain. It stores and handles the initial block header so that the subsequent block headers of blocks that contain cross-chain events can be verified and synchronized; please refer to the [code](https://github.com/polynetwork/poly/blob/master/native/service/header_sync/eth/header_sync.go#L61) for more details. |
| **SyncBlockHeader**   | Consistently synchronizes block cycle change and cross-chain transaction block headers from the side chain to the relay chain; the relayers use this interface method to synchronize block headers, stores, and process block headers, fetches the consensus node info if block generation cycle changes; please refer to the [code](https://github.com/polynetwork/poly/blob/master/native/service/header_sync/eth/header_sync.go#L99) for more details. |


#### Block Header Synchronization Entrance Method

| Method                         | Description                                                  |
| ------------------------------ | ------------------------------------------------------------ |
| **SyncSideChainGenesisHeader** | It is the entrance method for synchronizing the genesis block header of the side chain to poly chain and synchronizing the genesis header of the poly chain to ccm contract of the side chain; please refer to the [code](https://github.com/polynetwork/poly-io-test/blob/master/cmd/tools/run.go#L607) for more details. |

The Key information for this method(submitted by .config):

- Service provider(endpoint) Url of side chain

- Selected genesis block height

- Essential information for verifying genesis headers may exist in header information already or need to be fetched from block headers from other block height

- Information required for the side chain block header verification


### 2. Implement methods of cross-chain transaction verification

### Cross Chain Management

| Method                  | Description                                                  |
| ----------------------- | :----------------------------------------------------------- |
| **MakeDepositProposal** | Acts as the entrance of verifyFromTx, verifying, storing, and returning MakeTxParam for processing cross-chain steps. Verifies cross-chain transactions and store legitimate transactions to relay chain.  Please refer to the [code](https://github.com/polynetwork/poly/blob/master/native/service/cross_chain_manager/eth/eth_handler.go#L34) for details. |

```go
MakeDepositProposal:
Requires:
service *native.NativeService   //Native Service that carries values of information of cross-chain events
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
| Method           | Description                                                  |
| ---------------- | :----------------------------------------------------------- |
| **verifyFromTx** | Prepare block header and deserialized proof for verifyMerkleProof, decode the extra data from tx and construct MakeTxParam. Please refer to the [code](https://github.com/polynetwork/poly/blob/4323af5cfcd2a3277653d5bdc4db015cd9755fee/native/service/cross_chain_manager/eth/utils.go#L41) for details. |

```go
verifyFromTx:
Requires:
service               *native.NativeService  
proof                 []byte    //the proof to be serialized and verified
extra                 []byte    //the transaction information that will be used for constructing verifyFromTx
fromChainID           uint64,   //ChainId of source chain
height                uint32,   //the block height corresponding to current transaction event
sideChain             *side_chain_manager.SideChain //source chain information that contains ccm contract address
Returns:
txParam               *scom.MakeTxParam 
```
| Method                | Description                                                  |
| --------------------- | :----------------------------------------------------------- |
| **verifyMerkleProof** | Verify the Merkle proof obtained by the relayer generated from the source chain to ensure that all transactions included in this block header have been created and have occurred on the relay chain. Please refer to the [code](https://github.com/polynetwork/poly/blob/4323af5cfcd2a3277653d5bdc4db015cd9755fee/native/service/cross_chain_manager/eth/utils.go#L88) for details. |

```go
verifyMerkleProof:
Requires:
blockData             *types.Header //the blockheader corresponding to current transaction event  
proof                 []byte    //the serialized proof
Returns:
Val                   []byte    //the proof result for checking extra before constructing verifyFromTx
```
