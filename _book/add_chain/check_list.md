<h1 align="center">Essential Chain Elements Need to be Clarified</h1>

## Introduction

There are two solutions for adding a new chain to the poly cross-chain ecosystem: **Header Sync** and **Consensus Vote**. While Header Sync is more trustworthy and scalable, Consensus Vote is a backup plan when Header Sync is not applicable. **Consensus Vote** is not suggested for security and scalability reasons unless **Header Sync** can not be achieved.



Some features and attributes need to be clarified for joining the cross-chain ecosystem. These features are the critical elements for implementing the interface method for handling block headers and cross-chain events.

### Pros and cons of Header Sync

1. Scalability
2. Efficiency
3. Security
   Are there any reasons for convincing the developers to use header sync? All of these reasons are for the interests of poly, not a customer or another chain

### Header Sync  VS Consensus Vote

Scalability is better. Only one consensus node is synchronizing the block at one time in Header Sync.

It is crucial to know whether a chain can join poly using Header Sync. The key is whether this chain has a mechanism for nodes like **ethereum light client** to verify transactions using **block header** information. A more detailed explanation is in the first chapter of this section.

 Here are the factors that determine the cross-chain event can be verified based on Header Sync:

## Check List

**Consensus Vote** is not suggested for security and scalability reasons unless **Header Sync** can not be achieved. Here are the factors that determine the cross-chain event can be verified based on Header Sync:

- The blockchain support **Merkle proof** for verifying transactions; It has Merkle tree generation and verification method for the ledger records or transactions and has state root hash stored in the block header. This allows the relay chain to determine the legitimacy of the transaction records.
- The block headers have sufficient information, such as the validator set and their signature for verification. In other words, relayers who act as **light clients** can obtain the **validator sets** and their signature from only the block header information and ensure the legitimacy of the block headers. 

## Requirement List

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





