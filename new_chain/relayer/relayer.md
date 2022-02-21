<h1 align="center">Develop for Relayer</h1>

## Development Specifications for Relayer

Poly relayer plays the role to relay cross chains messages and interact with cross chain manager contracts. There are two components in the implementation:
<div align=center><img src="resources/develop_for_relayer.png" alt=""/></div>


### Step1. Implement Chain Listener
Chain listener is used to fetch data from the chain (as source chain), including block headers, cross chain events emitted from cross chain manager contract and merkle proofs when it's used to verify the cross chain message in the `Poly` chain.

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

### Step2. Implement Chain Submitter
Chain submitter is used to submit messages/transactions to the chain, including  bookkeeper changes of the poly chain and cross chain message to finalize as the last step.

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

The `poly-relayer` project depends on the `bridge-common` library. Listed steps can be followed to register a new chain.

- Add chain ID in the `bridge-common` project [here](https://github.com/polynetwork/bridge-common/base).
- Add chain client SDK [here](https://github.com/polynetwork/bridge-common/tree/main/chains) for common usage.
- Add chain wallet [here](https://github.com/polynetwork/bridge-common/tree/main/wallet) for common usage.
- Implement interface `IChainListener` and `IChainSubmitter` for the new chain.
- Register `ChainListener` and `ChainSubmitter` in [selectors](https://github.com/polynetwork/poly-relayer/blob/main/relayer/relayer.go#L73) located in the `relayer.go` file.

## Subcommands
- `settxblock` set the scan initial height.
  ```bash
  ./relayer_main settxblock --height 100210 --chain 7
  ```
- `setheaderblock` set the header sync height.
  ```bash
  ./relayer_main setheaderblock --height 100210 --chain 7
  ```
- `status` shows the current relayer status.
  ```bash
  ./relayer_main status
  ```
  Sample output:
  ```
  Status Bsc:
  Latest node height: 16656699
  Latest sync height: 16656696
  Header sync height: 16656696
  Header mark height: 16656696
  tx listen height  : 16656682
  header sync height diff: 3
  tx listen height diff  : 17
  src tx queue size : 0
  poly tx queue size: 0
  ```

## Other Notes
- Please follow guide [here](new_chain/launch_and_test/launch.md#3-deploy-relayers) for deployment.
- Wallet balance should be checked regularly to avoid out of fee balance issue.
- Mulitple wallet accounts can be created to increase message relay throughout.
- Poly chain wallet signer address is permission controlled, so before run the relayer, the poly chain wallet should be requested.



