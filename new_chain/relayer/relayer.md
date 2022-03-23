<h1 align="center">Develop for Relayer</h1>

## 1. Development Specifications

This step shows how to develop a relayer for your chain or project. The relayer plays a role in delivering messages between different chains, which is part of the cross-chain ecosystem. 

There are two components required: **Chain Listener** and **Chain Submitter**. 

### 1.1 Chain Listener
Chain listener fetches data from the source chain and poly chain, including block header, cross-chain events emitted from CCM, and Merkle proofs used to verify the cross-chain message in the poly chain.
And the interface listed is necessary.

```go
type IChainListener interface {
  // Initialize with config
  Init(*config.ListenerConfig, *poly.SDK) error
  // Blocks to confirm
  Defer() int
  // New block check interval
  ListenCheck() time.Duration
  // Chain Id
  ChainId() uint64
  // Optional: Fetch block header and header hash, used to submit to poly chain for verifications
  Header(height uint64) (header []byte, hash []byte, err error)
  // Optional: Last header sync state in poly chain.
  LastHeaderSync(uint64, uint64) (uint64, error)
  // Scan cross chain transactions included in the block
  Scan(uint64) ([]*msg.Tx, error)
  // Compose cross chain message before submit to poly chain
  Compose(*msg.Tx) error
  // Current chain height
  LatestHeight() (uint64, error)
}
```

### 1.2 Chain Submitter
Chain Submitter delivers messages to the target chain, including **validator changes** of poly chain to CCD and **cross-chain messages**.
Additionally, Chain Submitter will check whether the transaction has been verified in CCD.
And the interface listed is necessary.

```go
type IChainSubmitter interface {
  // Initialize with config
  Init(*config.SubmitterConfig) error
  // Submit message/transaction to the chain
  Submit(msg.Message) error
  // Start the thread
  Start(context.Context, *sync.WaitGroup, bus.TxBus, bus.DelayedTxBus, msg.PolyComposer) error  
  // Process the cross chain message from poly chain
  ProcessTx(*msg.Tx, msg.PolyComposer) error
}
```
##2. Develop Steps on Poly-Relayer
Poly-Relayer is a relayer project maintained by Poly Network.
If you choose to develop based on Poly-Relayer, please follow the listed steps.

### Step1. Prerequisites
The [Poly-Relayer](https://github.com/polynetwork/poly-relayer) project is based on the [bridge-common](https://github.com/polynetwork/bridge-common) library. So you need to:
 - Add chain ID in the `bridge-common` project [here](https://github.com/polynetwork/bridge-common/base).
 - Add chain client SDK [here](https://github.com/polynetwork/bridge-common/tree/main/chains) for common usage.
 - Add chain wallet [here](https://github.com/polynetwork/bridge-common/tree/main/wallet) for common usage.

### Step2. Interface implementation
Implement interface `IChainListener` and `IChainSubmitter` for the new chain. 

### Step3. Registration 
Register `ChainListener` and `ChainSubmitter` in [selectors](https://github.com/polynetwork/poly-relayer/blob/main/relayer/relayer.go#L73) located in the `relayer.go` file.

##3. Preparation for Launch
The configs are required when launching relayer:

- Make sure necessary configuration is specified in `config.json,` including CCM contract, CCD contract, and other details for the chain.
- You can see a [sample](https://github.com/polynetwork/poly-relayer/blob/main/config.sample.json) here.

> [!Note|style:flat|label:Notice]
>
> - If you develop the relayer for the chain integrated with Poly Network, you can directly fetch [CCD](../../Core_Smart_Contract/Contract/CCD.md) and [CCM](../../Core_Smart_Contract/Contract/CCM.md) contracts.
> - If you develop the relayer for a new chain, please complete the contract yourself.
> - Check Poly public [nodes](../../Core_Smart_Contract/Nodes/Nodes.md) in here.

- Specify roles to enable in `roles.json` and see a [sample](https://github.com/polynetwork/poly-relayer/blob/main/roles.sample.json) here. 

| Roles      | Quantity Demand                | Description                                                  |
| ---------- | ------------------------------ | ------------------------------------------------------------ |
| HeaderSync | One or multiple for each chain | It submits chain headers to the poly chain.                  |
| TxListen   | Only one for each chain        | It observes cross-chain transactions from the source chain and pushes them to the message queue. |
| TxCommit   | One or multiple for each chain | It consumes the message queue and submits the cross-chain transactions to poly. |
| PolyListen | Only One for poly chain        | It observes cross-chain transactions from the poly chain and pushes them to the message queue. |
| PolyCommit | One or multiple for poly chain | It consumes the message queue and submits the cross-chain transaction to the target chain. |


Now you are ready for the relayer, and please see the chapter of [Test and Launch](../../new_chain/launch_and_test/launch.md) for details to launch.

