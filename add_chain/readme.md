<h1 align="center">How to Join the Cross-Chain Ecosystem</h1>

The poly cross-chain ecosystem provides a platform for various chains to interact and transfer data and conduct cross-chain transactions. Any chain can freely join the ecosystem. However, the chains that support smart contracts can interact and share all kinds of information between chains, while the chains that do not support smart contracts are limited to cross-chain asset transfer. 

There are two scenarios for adding a new chain to the poly cross-chain ecosystem: **Header Sync** and **Consensus Vote**. While Header Sync is more trustworthy and scalable, Consensus Vote is a backup plan when Header Sync is not applicable. It is crucial to know whether a chain can join poly using Header Sync. The key is whether this chain has a mechanism for nodes like **ethereum light client** to verify transactions using **block header** information. A more detailed explanation is in the first chapter of this section.

This section is intended for developers who want to help add a new chain to the poly cross-chain ecosystem, mainly for **Header Sync** Scenario because the **Consensus Vote** hardly needs any additional targeted development. Here is the outline that will be introduced:

- [The overview of two scenarios for handling cross-chain events](scenario.md)
- [The essential elements for adding a new side chain to the poly cross-chain ecosystem in header sync scenario](elements.md)
- [The technical flow for adding a new side chain to the poly cross-chain ecosystem in header sync scenario](steps.md)
- [The develop guideline in header sync scenario](guideline.md)





