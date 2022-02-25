<h1 align="center">Poly Docs</h1>

> [!Note|style:flat|label:Notice]
> When a chain uses `Poly Network` protocol to implement asset cross-chain function, 
> it can choose to integrate into the `Poly Bridge` 
> or  implement their own cross-chain bridge and integrate the [APIs](bridge.md) provided by `Poly Bridge`.

## 1. Main functions of `Poly Bridge`:

> [!NOTE]
> For now, Poly Bridge is deployed by the poly team.

* Monitor cross-chain event  
Monitor the wrapper events emitted by the wrapper contract on the source chain
Monitor the lock event (source chain) and unlock event (target chain) emitted by the CCM contracts of the source chain and the target chain


* Link cross-chain events  
Link the events monitored from source chain, poly chain and target chain according to the transaction key, and update the status of the cross-chain transaction.


* Refresh cross-chain fee  
Refresh the cross-chain transaction fee of the target chain in order to provide cross-chain transaction fee when user initiates a cross-chain transaction.


* Refresh cross-chain token price  
Refresh the price of the token from the market in order to conversion to the cross-chain transaction fee when user initiates a cross-chain transaction.


## 2. Integrate `Poly Bridge` APIs to your own cross-chain bridge.
If developers want to implement their own cross-chain bridge, they need to implement the main functions of the poly bridge above.  
`Poly Bridge`  also opens up some APIs for developers to use to integrate into their cross-chain bridge, APIs can be found [here](bridge.md).


