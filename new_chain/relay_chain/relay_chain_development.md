<h1 align="center">Develop for Poly Chain</h1>

## Requirements

### 1. Make sure the new chain supports Light Client Verification

The block header must contain the following information：
- Hash of the previous block header
- Merkle state root hash
- Necessary information to prove the legitimacy of the block header varying from different consensus mechanisms.

> [!Note|style:flat|label:Notice]
> If your chain doesn't support techniques like `Simple Payment Verification` (SPV) protocol in Bitcoin or `Light Ethereum Subprotocol` (LES) in Ethereum, please get in touch with the `poly team` via <a href="mailto:contact@poly.network">contact@poly.network</a> or https://t.me/polynetworkgroup for more support.

### 2. Offer the block header structure and verification methods
- Block header structure
- Serialization and Deserilization methods
- Block header verification mehtods

### 3. Offer the merkle tree structure, generation and verification methods

- Merkle tree structure
- State root generation, and verification methods

## Development Specifications

<div align=center><img src="resources/relay_chain_development.png" alt=""/></div>

### 1. Implement methods of block data verification

#### Block Header Synchronization Methods

| Method                | Description                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------- |-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **SyncGenesisHeader** | It stores and handles the initial block header so that the subsequent block headers of blocks that contain cross-chain events can be verified and synchronized. The method will only be called once for initializing the new chain; please refer to the [code](https://github.com/polynetwork/poly/blob/master/native/service/header_sync/eth/header_sync.go#L61) for more details. |
| **SyncBlockHeader**   | Consistently synchronizes block cycle change and cross-chain transaction block headers from the new chain to the poly chain; please refer to the [code](https://github.com/polynetwork/poly/blob/master/native/service/header_sync/eth/header_sync.go#L99) for more details.                                                                                                        |


#### Block Header Synchronization Entrance Method

| Method                         | Description                                                                                                                                                                                                                                                                                                              |
| ------------------------------ |--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **SyncSideChainGenesisHeader** | It is the entrance method for synchronizing the genesis block header of the new chain to poly chain and synchronizing the genesis header of the poly chain to ccm contract of the new chain; please refer to the [code](https://github.com/polynetwork/poly-io-test/blob/master/cmd/tools/run.go#L607) for more details. |

The Key information for this method (submitted by .config):

- Service provider (endpoint) Url of the new chain

- Selected genesis block height

- Essential information for verifying genesis headers may exist in header information already or need to be fetched from block headers from other block height

- Information required for the new chain block header verification


### 2. Implement methods of cross-chain transaction verification

#### Cross Chain Management

| Method                  | Description                                                  |
| ----------------------- | :----------------------------------------------------------- |
| **MakeDepositProposal** | Acts as the entrance of verifyFromTx, verifying, storing, and returning MakeTxParam for processing cross-chain steps. Verifies cross-chain transactions and store legitimate transactions to poly chain.  Please refer to the [code](https://github.com/polynetwork/poly/blob/master/native/service/cross_chain_manager/eth/eth_handler.go#L34) for details. |

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
| **verifyMerkleProof** | Verify the Merkle proof obtained by the relayer generated from the source chain to ensure that all transactions included in this block header have been created and have occurred on the poly chain. Please refer to the [code](https://github.com/polynetwork/poly/blob/4323af5cfcd2a3277653d5bdc4db015cd9755fee/native/service/cross_chain_manager/eth/utils.go#L88) for details. |

```go
verifyMerkleProof:
Requires:
blockData             *types.Header //the blockheader corresponding to current transaction event  
proof                 []byte    //the serialized proof
Returns:
Val                   []byte    //the proof result for checking extra before constructing verifyFromTx
```
