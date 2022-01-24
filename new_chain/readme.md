<h1 align="center">Add New Side Chain to Poly Cross-Chain Ecosystem</h1>

The poly cross-chain ecosystem provides a platform for various chains to interact and transfer data and conduct cross-chain transactions. Any chain can freely join the ecosystem following the steps in this section. This section is intended for developers who want to help add a new side chain to the poly cross-chain ecosystem. 

<div align=center><img src="relay_chain/resources/add_chain_flow.png" alt=""/></div>

## Preparation

Some features and attributes need to be clarified for joining the cross-chain ecosystem. These features are the critical elements for implementing the interface method for handling block headers and cross-chain events.

#### Light Client Verification

It is crucial to know whether a chain can join poly using Light Client Verification, and the block header must contain the following information：

- The hash of the previous block header
- Merkle state root hash
- The necessary information to prove the legitimacy of the block header varies from different consensus mechanisms.

> [!NOTE]
> Please get in touch with the poly team Via <a href="mailto:contact@poly.network">contact@poly.network</a> Or https://t.me/polynetworkgroup for more support if your chain doesn't support techniques like Simple Payment Verification (SPV) protocol in Bitcoin or  Light Ethereum Subprotocol (LES) in Ethereum.

#### Consensus Algorithm

The Consensus Algorithm determines how blockchains select consensus validators,  voters, and block producers for minting new blocks and bookkeeping block transactions. Developers need to clearly understand the consensus protocol of the blockchain to get sufficient information for validating block headers.

For instance, for blockchains that use POS, one of the essential elements for verifying blocks are signatures from validator nodes, which requires the developers Know the consensus nodes' election process, and who are the consensus nodes in the next epoch.

#### Block Header Structure and Verification Methods

The block header verification and processing method together with **block header format**, the **serialization**, and the **deserialization methods** are necessary for implementing the interface method of header sync solution

#### Merkle Tree Structure, Generation and Verification Methods

The Merkle tree structure, generation, and verification methods for the ledger records or transactions are necessary to verify cross-chain transactions.  Given the trusted block header, its application **state root** can help confirm the validity of **transaction proof** and obtain the actual cross-chain transaction message. 

By having a Merkle proof and the correct block header, we can prove that a particular transaction or event occurred on the chain with certainty.

