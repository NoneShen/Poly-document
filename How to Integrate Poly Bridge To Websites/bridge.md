<h1 align="center">Create dApp using the Poly Network protocol</h1>

## Overview
Poly Network is a fully decentralized cross chain swap protocol for implementing blockchain interoperability and building the Web 3.0 infrastructure.

Based on the Poly Network protocol, anyone can create their own dApp to interact and transfer data and conduct cross-chain transactions.  

Poly bridge is a decentralized application based on poly Network protocol.
This chapter takes poly bridge as an example to show developers how to use poly network protocol to realize token and NFT cross-chain.

## Development Specifications
Poly bridge has the following functions:
1. Cross-chain event monitoring
2. Concatenation of cross-chain events 
3. Cross-chain fee refresh
4. Cross-chain token price refresh

### 1. Cross-chain event monitoring (original chain, relay chain, target chain)
跨链事件监听  
Cross-chain event monitoring used to monitor cross-chain events on each chain and scan the wrapper events emitted by the wrapper contract on the original chain
Scan the lock event (original chain) and unlock event (target chain) emitted by the CCM contracts of the original chain and the target chain, as well as the cross-chain events emitted by the relay chain CCM.  
```
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

### 2. Concatenation of cross-chain events (original chain, relay chain, target chain)
The concatenation of cross-chain events is used to connect the events monitored from the original chain, the relay chain, and the target chain according to the transaction key, and update the status of the cross-chain transaction.  
```
type Effect interface {
  // Concatenat cross chain events
	Effect() error
  // Interval of concatenated events
	GetEffectSlot() int64
}
```

### 3. Cross-chain fee refresh (target chain)
Refresh the cross-chain transaction fee of the target chain, and provide cross-chain transaction fee when the user initiates a cross-chain transaction.  
```
type ChainFee interface {
  // Get cross-chain transaction fee
	GetFee() (*big.Int, *big.Int, *big.Int, error)
  // Chain name
	GetChainId() uint64
  // Chain id
	Name() string
}
```

### 4. Cross-chain token price refresh
Obtain the price of the token from the market, and provide the conversion between the cross-chain transaction fee and the token when the user initiates a cross-chain transaction.  
```
type PriceMarket interface {
  // Obtain token price from the market
	GetCoinPrice(coins []models.NameAndmarketId) (map[string]float64, error)
  // market name
	GetMarketName() string
}
```
