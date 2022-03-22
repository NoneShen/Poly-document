<h1 align="center">Develop for Relayer</h1>

## 1. Development Specifications for Relayer

This step shows how to develop a relayer for your chain or your project. The relayer plays a role to deliver message between different chains, which is a part of cross-chain ecosystem. 

There are two components required: **Chain Listener** and **Chain Submitter**. 
<div align=center><img src="resources/develop_for_relayer.png" alt=""/></div>

### 1.1 Chain Listener
Chain listener is used to fetch data from the source chain and poly chain, including block header, cross chain events emitted from CCM, transaction execution message from CCD and merkle proofs which are used to verify the cross chain message in the poly chain. Here is an interface provided for you.

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
Chain Submitter is used to deliver messages to the target chain, including  **validator changes** of poly chain to CCD and **cross chain messages**. Here is an interface provided for you.

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

##2. Develop on Poly-Relayer
Poly-Relayer is a relayer project maintained by Poly Network.If you choose to develop based on poly-relayer, the following will show the steps to join.

### Step1. Necessary for Develop
The [poly-relayer](https://github.com/polynetwork/poly-relayer) project depends on the [bridge-common](https://github.com/polynetwork/bridge-common) library. So you need to:
 - Add chain ID in the `bridge-common` project [here](https://github.com/polynetwork/bridge-common/base).
 - Add chain client SDK [here](https://github.com/polynetwork/bridge-common/tree/main/chains) for common usage.
 - Add chain wallet [here](https://github.com/polynetwork/bridge-common/tree/main/wallet) for common usage.

### Step2. Realize Chain Listener and Submitter
Implement interface `IChainListener` and `IChainSubmitter` for the new chain. 

### Step3. Register 
Register `ChainListener` and `ChainSubmitter` in [selectors](https://github.com/polynetwork/poly-relayer/blob/main/relayer/relayer.go#L73) located in the `relayer.go` file.

##3. Prepare for launch
The configs are required when launching relayer:

-Make sure necessary configuration is specified in `config.json` include 'CCM' contract,'CCD' contract and some details for chain.[Sample](https://github.com/polynetwork/poly-relayer/blob/main/config.sample.json).

> [!Note]
> - If you develop the relayer for the chain which has been integrated in Poly Network, check [here](Core_Smart_Contract/Contract/MainNet.md) to fetch the 'CCM' and 'CCD' contract .
> - If you develop the relayer for a new chain, please complete the contract by yourself.
> - For poly public nodes, check [here](Core_Smart_Contract/Contract/MainNet.md).

-Specify roles to enable in `roles.json` [Sample](https://github.com/polynetwork/poly-relayer/blob/main/roles.sample.json)

| Roles      | Quantity Demand                 | Description                                                                                     |
|------------|---------------------------------|-------------------------------------------------------------------------------------------------|
| HeaderSync | One or multiple for each chain  | It submits chain headers to poly chain.                                                         |
| TxListen   | Only one for each chain         | It observes cross chain transactions from source chain, and push them to message queue.         |
| TxCommit   | One or multiple for each chain  | It consumes the message queue, and submit the cross chain transactions to poly.                 |
| PolyListen | Only One for poly chain         | It observes cross chain transactions from poly chain and push them to message queue.            |
| PolyCommit | One or multiple for poly chain  | It consumes the message queue, and submit the cross chain transaction to the destination chain. |


Here are ready for the relayer, please see the chapter of 'test and launch' for details to launch.

