<h1 align="center">Cross Chain Interaction Between Chains</h1>

<div align=center><img width="800" height="570" src="resources/ark.png"/></div>

The figure above illustrates the cross chain interaction between chain A to chain B. The user sends a cross chain request from chain A by invoking a dApp's cross chain interface, and on the target chain B the dApp's smart contract executes the necessary logic to produce the final result. Chain A and B implement the two contracts and other necessary interfaces, and anyone can develop an infrastructure for dApps around the cross chain management contract. The contracts deployed on chain A and chain B make up a complete cross chain dApp.

The complete process flow from chain A to chain B is as follows:

- The user invokes the service contract on chain A, which then in turn invokes the cross chain management contract. The management contract transfers the parameters to the target chain and a cross chain transaction is created by management contract which is sent to the target chain based on block generation on chain A;
- Since there is no means of automatic data exchange between two chains, a relayer needs to be set up to transfer block header details from chain A to the relay chain's block header synchronization contract. It also fetches the management contract's response event from chain A which encapsulates the parameters passed by the user, and also fetches the merkle proof. Next, it groups this information together and sends it to the cross chain management contract.
- The management contract fetches the block headers from chain A, verifies whether or not the cross chain parameters and the proof are valid, and then transmits the necessary information to chain B in the form of an event;
- Chain B's relayer transfers the relay chain's block headers to chain B's block header synchronization contract. The relevant chain B cross chain transaction parameters and respective merkle proofs are fetched from the ledger records of the relay chain and transmitted to chain B's cross chain management contract;
- The management contract of chain B determines the legitimacy of the cross chain transaction information and then invokes the relevant target contract and completes the cross chain contract invocation;

There are two different merkle proofs that are transferred to the relay chain:

1. The merkle proof that is used to verify the legitimacy of cross chain transactions from chain A
2. The merkle proof that is used to ensure that a transaction has been created and has occurred on the relay chain

These merkle proofs help establish a trust mechanism for the cross chain ecosystem. Any chain can join the cross chain ecosystem by setting up the communication interface with the relay chain.