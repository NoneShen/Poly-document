<h1 align="center">Poly Bridge</h1>

> [!Note|style:flat|label:Notice]
> When a chain uses `PolyNetwork` protocol to implement asset cross-chain function, it can choose to integrate into the `Poly Bridge` or use the [APIs](bridge.md) provided by `Poly Bridge` to realize the cross-chain bridge.

## 1. Main functions of `Poly Bridge`:
[!NOTE] For now, Poly Bridge is deployed by the poly team.

* Monitor cross-chain event  
Monitor the wrapper events emitted by the wrapper contract on the source chain
Monitor the lock event (source chain) and unlock event (target chain) emitted by the CCM contracts of the source chain and the target chain


* Link cross-chain events  
Link the events monitored from source chain, relay chain and target chain according to the transaction key, and update the status of the cross-chain transaction.


* Refresh cross-chain fee  
Refresh the cross-chain transaction fee of the target chain in order to provide cross-chain transaction fee when user initiates a cross-chain transaction.


* Refresh cross-chain token price  
Refresh the price of the token from the market in order to conversion to the cross-chain transaction fee when user initiates a cross-chain transaction.


## 2. Using `Poly Bridge` [APIs](bridge.md) to realize the cross-chain bridge.
Developers can use the [Poly Bridge APIs](bridge.md) provided by `Poly Bridge` to realize the cross-chain bridge.



