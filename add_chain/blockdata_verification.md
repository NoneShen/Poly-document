<h1 align="center">Block Data Verification</h1>

## Poly Block Data Verification Solutions

There are two solutions for adding a new chain to the poly cross-chain ecosystem: **Header Sync** and **Consensus Vote**. While Header Sync is more trustworthy and scalable, Consensus Vote is a backup plan when Header Sync is not applicable. **Consensus Vote** is not suggested for security and scalability reasons unless **Header Sync** can not be achieved.

Some features and attributes need to be clarified for joining the cross-chain ecosystem. These features are the critical elements for implementing the interface method for handling block headers and cross-chain events.

There are two solutions for verifying the transaction block and the cross-chain transaction information:

- **Header Sync**: Verify the block header based on the critical blockchain data such as mining difficulties, validator set, and signature. Then, verify the cross-chain transaction based on the corresponding Merkle proof.
- **Consensus vote**: Every Poly node act as a full node of the target blockchain, validating the blocks and cross-chain transactions following the rules of the side chain. The success of the cross-chain request depends on the consensus vote result of poly nodes.

## Check List

It is crucial to know whether a chain can join poly using Header Sync. The key is whether this chain has a mechanism for nodes like **ethereum light client** to verify transactions using **block header** information.

**Consensus Vote** is not suggested for security and scalability reasons unless **Header Sync** can not be achieved. Here are the factors that determine the cross-chain event can be verified based on Header Sync:

- The blockchain support **Merkle proof** for verifying transactions; It has Merkle tree generation and verification method for the ledger records or transactions and has state root hash stored in the block header. This allows the relay chain to determine the legitimacy of the transaction records.
- The block headers have sufficient information, such as the validator set and their signature for verification. In other words, relayers who act as **light clients** can obtain the **validator sets** and their signature from only the block header information and ensure the legitimacy of the block headers. 

## Essential Chain Elements Need to be Clarified

### Consensus Algorithm

The Consensus Algorithm determines how blockchains select consensus validators,  voters, and block producers for minting new blocks and bookkeeping block transactions. Developers need to clearly understand the consensus protocol of the blockchain to get sufficient information for validating block headers.

For instance, for blockchains that use POS, one of the essential elements for verifying blocks are signatures from validator nodes, which requires the developers Know the consensus nodes' election process, and who are the consensus nodes in the next epoch.

### Genesis Block of the Chain

The genesis block's block header needs to be submitted to the consortium chain of the cross-chain ecosystem to verify the consequent transactions and block headers on this chain.

### Block Header Structure and Verification Method

The block header verification and processing method and the block structure need to be submitted so that the relay chain can verify the block headers that will be transferred from this chain.

The side chains need to provide their block header format, the serialization, and the deserialization methods. The mode of signature verification allows the relay chain to process and verify block headers.

### Merkle Tree Structure and Verification Method

The Merkle tree structure, the Merkle tree generation, and the verification method for the ledger records or transactions need to be submitted to the relay chain to verify cross-chain transactions from this chain.

The source chain stores cross-chain information and construct a Merkle tree, and then sends the Merkle tree root and the Merkle proof of the information to the side chain. The side chain verifies the proof using the Merkle root and confirms the validity of the cross-chain information.

Merkle proofs are a solution. When events and transactions are recorded on the blockchain, a corresponding Merkle proof, by having a Merkle proof and the correct block header, we can prove that a particular transaction or event did occur on the chain with certainty.

The information relayed by the relayer includes cross-chain transaction proof and the block header containing the **state root** of transaction proof. The poly chain will first verify the block header. Then the application **state root** within the block header can help confirm the validity of **transaction proof** (indicating the cross-chain request is successfully executed on the side chain) and obtain the actual cross-chain transaction message. 



### Header Sync

The general steps for joining poly cross-chain ecosystem using header sync are as follows:

- Deploy CCM/CCMP/CCD/LockProxy/Wrapper Contracts or develop a specific interface with the same functionality as a contract. For more details, see Chapter "Core Smart Contract List"(Attach a Link to smartcontractList.MD)
- Register the chain, check and approve the registration by consensus vote among Poly consensus nodes. To update the registered chain information, the registered account needs to send an application to the relay chain when updating side chain information. An application needs to be approved by at least two-thirds of the current consensus nodes to carry out the update action successfully.
- Synchronize an initial block header of the side chain to poly chain, and synchronize an initial block header of poly chain to the side chain's ccm smart contract.
- Synchronize all the consequent blocks of the side chain to poly chain. Synchronize some of the valuable blocks of the relay chain to the ccm contract of the side chain.
- Verify cross-chain transaction using Merkle state root hash of block header and Merkle proof generated by source chain.

### Consensus Vote

The general steps for joining poly cross-chain ecosystem using header sync are as follows:

- Deploy CCM/CCMP/CCD/LockProxy/Wrapper Contracts or develop a specific interface that has the same functionality as a contract, for more details, see Chapter "Core Smart Contract List"(Attach a Link to smartcontractList.MD)
- Register the chain, check and approve the registration by consensus vote among Poly consensus nodes. To update the registered chain information, the registered account needs to send an application to the relay chain when updating side chain information. An application needs to be approved by at least two-thirds of the current consensus nodes to carry out the update action successfully.
- Every Poly node acts as a full node of the side chain, validating the blocks and cross-chain transactions following the side chain rules and submitting them to the poly chain.
- Verify cross-chain events and transactions using consensus vote of poly consensus nodes.

Only the code for holding a full blockchain node of the side chain is needed for joining the poly cross-chain ecosystem. 



# Header Sync Development Specifications

This chapter shows developers how to cooperate with the poly network team to add a chain into the poly cross-chain ecosystem. The methods that developers need to implement:

- Block Header Synchronization Method, including header sync functions and their corresponding entrance functions.
- Handler for handling the cross-chain transaction with Merkle proof.

## Block Header Synchronization

To implement cross-chain features for any chain, say Ethereum, there are two kinds of contracts that need to be deployed-

Block header synchronization contract: This contract maintains the record of block headers of the relay chain on this chain. These block headers serve as means to verify cross-chain transactions.

The interface methods that need to be implemented by the respective contracts are as follows:

### Block Header Synchronization Method to be registered to relayer

| Interface Method      | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| **SyncGenesisHeader** | Synchronizes the relay chain's genesis block header (or another block header where a change in block generation cycle occurred). The method is called one time only when initializing the side chain. It stores and handles the genesis block header, then fetches the consensus node info of the relay chain; please refer to the [code](https://github.com/polynetwork/poly/blob/master/native/service/header_sync/eth/header_sync.go#L61) for more details. |
| **SyncBlockHeader**   | Consistently synchronizes block cycle change and cross-chain transaction block headers from the relay chain; the relayers use this interface method to synchronize block headers, stores, and process block headers, fetches the consensus node info if block generation cycle changes; please refer to the [code](https://github.com/polynetwork/poly/blob/master/native/service/header_sync/eth/header_sync.go#L99) for more details. |


### Block Header Synchronization Entrance Method

| Interface Method               | Description                                                  |
| ------------------------------ | ------------------------------------------------------------ |
| **SyncSideChainGenesisHeader** | It is the entrance method for synchronizing the genesis block header of the side chain to poly chain and synchronizing the genesis header of the poly chain to ccm contract of the side chain; please refer to the [code](https://github.com/polynetwork/poly-io-test/blob/master/cmd/tools/run.go#L607) for more details. |

The Key information for this method:

- Service provider(endpoint) Url of side chain

- Selected genesis block height

- validators information for verifying genesis headers, it may exist in header information already or need to be fetched from block headers from other block height

- Other parameters that required for the side chain block header verification

  

## Cross-Chain Management

Cross-chain management contract: Every chain can have no more than one management contract. It creates cross-chain transactions that are transferred to the relay chain. All the service contracts that contain the business logic need to communicate with the management contract.

The interface methods that need to be implemented by the respective contracts are as follows:

### Cross Chain Management

| Interface Method        | Description                                                  |
| ----------------------- | :----------------------------------------------------------- |
| **MakeDepositProposal** | Creates cross-chain transactions invoked by service contracts. When a cross-chain function is carried out in the logic, a transaction includes a unique chain ID; the transaction is recorded in the Merkle tree. Act as the entrance of verifyFromTx, verifying, storing, and returning MakeTxParam for processing cross-chain steps. Please refer to the [code](https://github.com/polynetwork/poly/blob/master/native/service/cross_chain_manager/eth/eth_handler.go#L34) for details. |
| **verifyFromTx**        | Prepare block header and deserialized proof for verifyMerkleProof, decode the extra data from tx and construct MakeTxParam. Please refer to the [code](https://github.com/polynetwork/poly/blob/4323af5cfcd2a3277653d5bdc4db015cd9755fee/native/service/cross_chain_manager/eth/utils.go#L41) for details. |
| **verifyMerkleProof**   | Verify the Merkle proof obtained by the relayer generated from the source chain to ensure that all transactions included in this block header have been created and have occurred on the relay chain. Please refer to the [code](https://github.com/polynetwork/poly/blob/4323af5cfcd2a3277653d5bdc4db015cd9755fee/native/service/cross_chain_manager/eth/utils.go#L88) for details. |

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
