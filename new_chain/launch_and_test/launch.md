<h1 align="center">Launch and Test</h1>

<div align=center><img src="resources/launch_and_testing.png" alt=""/></div>

## 1. Register Chain
Registration is the basis for monitoring and processing block information and checking the execution of cross-chain transactions. The chain officially becomes a part of the cross-chain ecosystem after the registration process is complete and the Cross Chain Council approves the application.

> [!NOTE]
> For now, chain registration are usually completed by the `poly team` using the trusted account.


## 2. Deploy Contracts

Choosing to use our templates as your Cross Chain Manager module, you need to deploy the three contracts as following steps:
1. Deploy [Cross Chain Data contract](https://github.com/polynetwork/eth-contracts/blob/master/contracts/core/cross_chain_manager/data/EthCrossChainData.sol) and get the address of it.
2. Deploy [Cross Chain Manager contract](https://github.com/polynetwork/eth-contracts/blob/master/contracts/core/cross_chain_manager/logic/EthCrossChainManager.sol) and input the address of Cross Chain Data contract.
3. Deploy [Cross Chain Manager Proxy contract](https://github.com/polynetwork/eth-contracts/blob/master/contracts/core/cross_chain_manager/upgrade/EthCrossChainManagerProxy.sol) and input the address of Cross Chain Manager contract.

## 3. Deploy Relayers

### About Relayer Roles to run

> * Header Sync
> 
> Some chains require `HeaderSync` process to run to submit chain headers to poly chain. 
> 
> * Source Chain -> Poly
> 
> `TxListen` observes cross chain transactions from source chain, and push them to message queue.
> 
> `TxCommit` consumes the message queue, and submit the cross chain transactions to poly.
> 
> * Poly -> Destination Chain
> 
> `PolyListen` observes cross chain transactions from poly chain and push them to message queue.
> 
> **ONLY ONE `PolyListen` PROCESS IS NEEDED FOR ALL CHAINS!**
> 
> `PolyCommit` consumes the message queue, and submit the cross chain transaction to the destination chain.

### Relayer Subcommands

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

Deployment steps:

### Step 1. Build the Binary

To build the binary, switch to the right branch [Branch Select](https://github.com/polynetwork/poly-relayer/blob/main/README.md#supported-chains), then run:


```bash
./build.sh devnet/testnet/mainnet
```


### Step 2. Write the Configuration

* Make sure necessory configuration is specifed in `config.json` [Sample](https://github.com/polynetwork/poly-relayer/blob/main/config.sample.json).

* Specify roles to enable in `roles.json` [Sample](https://github.com/polynetwork/poly-relayer/blob/main/roles.sample.json)

For Poly public nodes, contract addresses, please check [here](Core_Smart_Contract/Contract/MainNet.md).

### Step 3. Run the Relayer Process

```
./server --config ./config.json --roles ./roles.json
```

> [!Note|style:flat|label:Notice]
> - Wallet balance should be checked regularly to avoid out of fee balance issue.
> 
> - Mulitple wallet accounts can be created to increase message relay throughout.
> 
> - Poly chain wallet signer address is permission controlled, so before run the relayer, the poly chain wallet should be requested.



## 4. Test

#### Cross-chain using Lock proxy

#### Cross-chain using Wrapper

