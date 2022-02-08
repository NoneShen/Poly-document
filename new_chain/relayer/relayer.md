<h1 align="center">Relayer</h1>





## Development Specifications for Relayer

Poly relayer plays the role to relay cross chains messages and interact with cross chain manager contracts. There are two components in the implementation:

## Chain Listener
Chain listener is used to fetch data from the chain (as source chain), including block headers, cross chain events emitted from cross chain manager contract and merkle proofs when it's used to verify the cross chain message in the `Poly` chain.

```
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

## Chain Submitter
Chain submitter is used to submit messages/transactions to the chain, including  bookkeeper changes of the poly chain and cross chain message to finalize as the last step.

```
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

- Add chain ID in the `bridge-common` project.
- Add chain client SDK here for common usage.
- Add chain wallet SDK here for common usage.
- Implement interface `IChainListener` and `IChainSubmitter` for the new chain.
- Register `ChainListener` and `ChainSubmitter` in [selectors](https://github.com/polynetwork/poly-relayer/blob/main/relayer/relayer.go#L73) located in the `relayer.go` file.

## Subcommands
- `settxblock` can set the scan initial height.
- `setheaderblock` can set the header sync height.
- `status` shows the current relayer status.

## Other Notes
- Please follow [here](https://github.com/polynetwork/poly-relayer/tree/main/docs) for deployment guide.
- Wallet balance should be checked regularly to avoid out of fee balance issue.
- Mulitple wallet accounts can be created to increase message relay throughout.



