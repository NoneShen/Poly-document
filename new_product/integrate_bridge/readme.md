<h1 align="center">Poly Bridge</h1>

## Overview
[Poly Bridge](https://bridge.poly.network) is a decentralized cross chain application based on `Poly Network` protocol.  
Poly bridge has integrated over 15 blockchains, including Ethereum, Polygon, Avalanche, Fantom, BSC, Arbitrum, Optimism, Heco, OEC, Neo, Ontology, Zilliqa, Elrond, xDai, etc.
Since the launch, the protocol has enabled cross-chain asset transfer of more than $15 billion USD, and its TVL surpasses $1 billion USD.

The following introduces the main functions of `Poly Bridge` and the work that needs to be done to integrate with `Poly Bridge`.

## 1. main functions of `Poly Bridge`
- Monitor cross-chain event
- Link cross-chain events
- Refresh cross-chain fee
- Refresh cross-chain token price

### Monitor cross-chain event
Monitor the wrapper events emitted by the wrapper contract on the source chain
Monitor the lock event (source chain) and unlock event (target chain) emitted by the CCM contracts of the source chain and the target chain

```go
// Interface
type ChainHandle interface {
  // Current chain height
	GetLatestHeight() (uint64, error)
  // Scan cross chain events included in the block
	HandleNewBlock(height uint64) ([]*models.WrapperTransaction, []*models.SrcTransaction, []*models.PolyTransaction, []*models.DstTransaction, int, int, error)
  // Chain listening interval
	GetChainListenSlot() uint64
  // Chain id
	GetChainId() uint64
  // Chain name
	GetChainName() string
  // Blocks to confirm
	GetDefer() uint64
}
```

### Link cross-chain events
Link the events monitored from source chain, relay chain and target chain according to the transaction key, and update the status of the cross-chain transaction.
```go
// Interface
type Effect interface {
  // Link cross chain events
	Effect() error
  // Interval of link events
	GetEffectSlot() int64
}
```

### Refresh cross-chain fee
Refresh the cross-chain transaction fee of the target chain in order to provide cross-chain transaction fee when user initiates a cross-chain transaction.
```go
// Interface
type ChainFee interface {
  // Get cross-chain transaction fee
	GetFee() (*big.Int, *big.Int, *big.Int, error)
  // Chain name
	GetChainId() uint64
  // Chain id
	Name() string
}
```

### Refresh cross-chain token price
Refresh the price of the token from the market in order to conversion to the cross-chain transaction fee when user initiates a cross-chain transaction.
```go
// Interface
type PriceMarket interface {
  // Obtain token price from the market
	GetCoinPrice(coins []models.NameAndmarketId) (map[string]float64, error)
  // market name
	GetMarketName() string
}
```

## 2. Integrate with `Poly Bridge`
When a chain uses `PolyNetwork` protocol to implement asset cross-chain function, it can choose to integrate into the `Poly Bridge` or use the [Poly Bridge APIs](bridge.md) provided by `Poly Bridge` to realize the cross-chain bridge.



