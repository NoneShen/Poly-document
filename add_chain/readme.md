<h1 align="center">How to Join the Cross-Chain Ecosystem</h1>

The poly cross-chain ecosystem provides a platform for various chains to interact and transfer data and conduct cross-chain transactions. Any chain can freely join the ecosystem. However, the chains that support smart contracts can interact and share all kinds of information between chains, while the chains that do not support smart contracts are limited to cross-chain asset transfer. 

<div align=center><img src="resources/flow_chart2.png" alt="loading"/></div>

## Overview

Adding a new chain to poly involves three main parts:

- **Initialization** includes smart contract deployment and new chain registration. 
- **Interface methods registration** to poly relayer.
- **Genesis header synchronization** involves synchronizing a  side chain initial header to the relay chain and synchronizing a genesis header from the relay chain to the ccm contract deployed on the side chain.

Most of the operations such as smart contract deployment, side chain registration, and relayer setup are now proceeded only by the poly team following general specifications. For how developers contribute, see [Develop Guideline for Header Sync](guideline.md).

## 



This section is intended for developers who want to help add a new chain to the poly cross-chain ecosystem, mainly for **Header Sync** Scenario because the **Consensus Vote** hardly needs any additional targeted development. Here is the outline that will be introduced:

- [The overview of two solutions for handling cross-chain events](scenario.md)
- [The essential elements for adding a new side chain to the poly cross-chain ecosystem in header sync scenario](elements.md)
- [The technical flow for adding a new side chain to the poly cross-chain ecosystem in header sync scenario](steps.md)
- [The develop guideline in header sync scenario](guideline.md)





