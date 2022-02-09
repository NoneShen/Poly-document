<h1 align="center">Launch and Testing</h1>

<div align=center><img src="resources/launch_and_testing.png" alt=""/></div>

## 1. Register Chain
Registration is the basis for monitoring and processing block information and checking the execution of cross-chain transactions. The chain officially becomes a part of the cross-chain ecosystem after the registration process is complete and the Cross Chain Council approves the application.

> [!NOTE]
> For now, chain registration are usually completed by the poly team using the trusted account.


## 2. Deploy Contracts

## 3. Deploy Relayers

### Step 1. Build and binaries

To build the binary, switch to the right branch [Branch Select](https://github.com/polynetwork/poly-relayer/blob/main/README.md#supported-chains), then run:


```
./build.sh testnet/mainnet
```


### Step 2. Configuration

* Make sure necessory configuration is specifed in `config.json` [Sample](https://github.com/polynetwork/poly-relayer/blob/main/config.sample.json).

* Specify roles to enable in `roles.json` [Sample](https://github.com/polynetwork/poly-relayer/blob/main/roles.sample.json)


### Step 3. Run


```
./server --config ./config.json --roles ./roles.json
```


### Step 4. About Roles 

* Header Sync

Some chains require `HeaderSync` process to run to submit chain headers to poly chain. 


* Source Chain -> Poly

`TxListen` observes cross chain transactions from source chain, and push them to message queue.


`TxCommit` consumes the message queue, and submit the cross chain transactions to poly.


* Poly -> Destination Chain

`PolyListen` observes cross chain transactions from poly chain and push them to message queue.

**ONLY ONE `PolyListen` PROCESS IS NEEDED FOR ALL CHAINS!**


`PolyCommit` consumes the message queue, and submit the cross chain transaction to the destination chain.



## 4. Testing

#### Cross-chain using Lock proxy

#### Cross-chain using Wrapper

