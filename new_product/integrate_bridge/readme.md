<h1 align="center">Build New Bridges</h1>

Except for building a new chain, you may want to join 
poly cross-chain ecosystem via just connecting with `Poly Bridge` or integrating the [APIs](bridge.md) provided by `Poly Bridge` into your own cross-chain bridge.
Then, the listed information will be helpful for you. 

## 1. Main Functions of `Poly Bridge`:

* Monitor cross-chain event  
During transaction, `Poly Bridge` will monitor the wrapper events emitted by the wrapper contract on the source chain, the lock event (on source chain) and unlock event (on target chain) emitted by CCM contracts.


* Link cross-chain events  
`Poly Bridge` links the events monitored from source chain, poly chain and target chain depending on the transaction key, and update the status of the cross-chain transaction simultaneously.


* Synchronize cross-chain fee  
`Poly Bridge` will synchronize the transaction fee of target chain to facilitate users when they initiate a cross-chain transaction. 


* Synchronize cross-chain token price  
`Poly Bridge` also synchronizes the price of tokens both on source chain and target chain from the market, making users be informed about the exchange rate and accurately calculate transaction fee.

> [!NOTE]
> For now, `Poly Bridge` is deployed by the poly team.

## 2. Integrate `Poly Bridge` APIs into Other Cross-chain Bridge.
Even if you want to implement your own cross-chain bridge, you need to realize the four main functions mentioned above.  
And for your convenience, `Poly Bridge`  also provides some API for you to integrate into your own cross-chain bridge.
You can find them in [here](bridge.md).



