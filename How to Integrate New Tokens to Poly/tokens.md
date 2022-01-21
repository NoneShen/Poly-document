<h1 align="center">ADD TOKEN</h1>

### Token Data

|        Method           | Description                                                  |
| ----------------------- | :----------------------------------------------------------- :|
|     **AddTokens**       | Here is all the data information of the token. It includes the precision, type, and coinmarketcap data of the token|

```
    type TokenBasic struct {
	TokenBasicName  string         // Token`s name (bridge's view token name)
	Precision       uint64         // Token`s precision
	IcoChainId      uint64         // If lockproxy:Token`s ico chainId;If pip4: 0
	Property        int64          // ON: 1; OFF: 2
	Standard        uint8          // Erc20: 0, erc721: 1
	PriceMarkets    PriceMarket    // If erc20: cionmarketcap data, If erc721: nil
	Tokens          []Token        // Every chain info
    }

    type PriceMarket struct {
	TokenBasicName string          // Token`s name
	Name           string          // Token name on coinmarket
	CoinMarketId   int             // Token`s id on coinMarket
    }
    
    type Token struct {
	Hash            string          // Token`s hash
	ChainId         uint64          // Token`s chain
	Name            string          // Token`s name
	Precision       uint64          // Token`s precison on this chain
	DstChainId      []uint64        // Cross-Chain dst chain list
    }
    
```
### Check Data

Check if the token data is correct
- Token hash and chain information
- CoinMarket data

### Bind Contract And Check

Check whether the contract is bound to these tokens

### Add Token To Bridge
1. If tokenBasicName has been added to the bridge, delete it first and then add it
2. If there are no records, insert directly

### Token Map
According to the DstChainId of each token, add a cross-chain map to it
