<h1 align="center">Technical Flow of Header Sync Scenario</h1>


## Overview

Adding a new chain to poly involves three main parts:

- **Initialization** includes smart contract deployment and new chain registration. 
- **Interface methods registration** to poly relayer.
- **Genesis header synchronization** involves synchronizing a  side chain initial header to the relay chain and synchronizing a genesis header from the relay chain to the ccm contract deployed on the side chain.

Most of the operations such as smart contract deployment, side chain registration, and relayer setup are now proceeded only by the poly team following general specifications. For how developers contribute, see [Develop Guideline for Header Sync](guideline.md).

## Initialization

### Deploy Smart Contract

The Poly Cross-Chain Smart Contract such as CCM, CCMP, CCD can be found in(Attach a Link to Core smart contract).

### New Chain Registration

After the registration process is complete and the Cross Chain Council approves the application, the chain officially becomes a part of the cross-chain ecosystem. The registration is accomplished using the trusted registered account by the poly team.

### Update Registered Chain

The registered account needs to send an update application to the relay chain. The **updateSideChain** method is used to send an application to update the registered information of a particular blockchain.



## Interface Methods Registration

Register header sync and cross-chain management method to relayer. So that relayer can call them for every cross-chain event. The interface method can be found in [Develop Guideline for Header Sync](guideline.md).

### Register block Sync Method to Relayer

Block header synchronization includes two interface methods: **SyncGenesisHeader** and **SyncBlockHeader**. The former method will only be called once, while the latter is the core method for conducting the cross-chain event and will be called consistently by the relayer.

### Register Cross Chain Transaction management method to Relayer

Register the interface method **MakeDepositProposal** to relayer. This method is the key for handling cross-chain transactions, and it tells the relayers how to ensure the legitimacy of cross-chain transactions by Merkle proof.

## Genesis Header Synchronization 

###  Synchronize Target Chain's Genesis Header to Poly

For Initializing side chain, the side chain's initial block header should be synchronized to the poly relay chain so that the consequent block headers of blocks that contain cross-chain events can be verified and synchronized.

### Synchronize Poly's Genesis Header to Target Chain

Poly chain's initial header should be synchronized to the side chain's CCM contract. The initial block header should include epoch switching information of consensus nodes, from which height the cross-chain transaction from or to Cosmos subchain will be effective.













