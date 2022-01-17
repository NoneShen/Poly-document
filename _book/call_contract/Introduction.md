<h1 align="center">Introduction</h1>

Poly cross chain ecosystem provides a platform for various different chains to interact and transfer data along with carrying out cross chain transactions. Any chain can freely join the ecosystem. However, the chains that support smart contracts can interact and transfer all kinds of information between chains, while the chains that do not support smart contracts are limited to cross chain asset transfer. This part will introduce the contracts involved in the cross chain process and how they interact with each other.

## List of Contracts

- **Block header synchronization contract**: This contract maintains the record of block headers of the relay chain on this chain. These block headers serve as means to verify cross chain transactions. In the following context, it may be referred to as Header Sync Contract.
- **Cross chain management contract**: Every chain can have no more than one management contract. It creates the cross chain transactions that are transferred to the relay chain. All the service contracts that contain the business logic need to communicate with the management contract. In the following context, it may be referred to as CCM Contract.
- **Service contract**: It serves as business logic contract invoked by users both on source chain and target chain. This document offers an example of it, which is named as `LockProxy` Contract in the part [Example](./Example.md).

## Cross Chain Interaction

In general, in a full cross chain process, the user sends a cross chain request to the service contract on source chain by invoking a dApp's cross chain interface, and on the target chain the dApp's smart contract executes the necessary logic to produce the final result. source chain and target chain implement the two contracts (Header Sync Contract & CCM Contract) and other necessary interfaces, and anyone can develop an infrastructure for dApps around the CCM Contract. The contracts deployed on source chain and target chain make up a complete cross chain dApp.

You may refer to the complete process flow of cross chain interaction [here](./Interaction.md).