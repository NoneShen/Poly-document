<h1 align="center">Launch and Test</h1>

## Chain Registration
Registration is the basis for monitoring and processing block information and checking the execution of cross-chain transactions. After the registration process is complete and the Cross Chain Council approves the application, the chain officially becomes a part of the cross-chain ecosystem. 

> [!NOTE]
> Registration and update are usually completed by application in a transaction using the trusted registered account by the poly team.

#### Cross Chain Management

| Method                | Description                                                  |
| --------------------- | :----------------------------------------------------------- |
| **RegisterSideChain** | Pack essential information and send it as an application to the poly chain. please refer to the [code](https://github.com/polynetwork/poly-io-test/blob/035b7fadee297e6e1b5a0b3dcde80f22442d8fb1/cmd/tools/run.go#L1765) for more details. |
| **updateSideChain**   | Pack updated essential information and send it as an application to the poly chain. please refer to the [code](https://github.com/polynetwork/poly-io-test/blob/035b7fadee297e6e1b5a0b3dcde80f22442d8fb1/cmd/tools/run.go#L2248) for more details. |

The Key information for chain registration (submitted by .config):

- address of Cross-chain data contract

- Chain id assigned by poly team

- Router id assigned by poly team

- Chain name

- Number of confirmation blocks

##Contract Deployment

##Relayer Deployment

### 1. Build and binaries

To build the binary, switch to the right branch [Branch Select](https://github.com/polynetwork/poly-relayer/blob/main/README.md#supported-chains), then run:


```
./build.sh testnet/mainnet
```


### 2. Configuration

* Make sure necessory configuration is specifed in `config.json` [Sample](https://github.com/polynetwork/poly-relayer/blob/main/config.sample.json).

* Specify roles to enable in `roles.json` [Sample](https://github.com/polynetwork/poly-relayer/blob/main/roles.sample.json)


### 3. Run


```
./server --config ./config.json --roles ./roles.json
```


### 4. About Roles 

* Header Sync

Some chains require `HeaderSync` process to run to submit chain headers to poly chain. 


* Source Chain -> Poly

`TxListen` observes cross chain transactions from source chain, and push them to message queue.


`TxCommit` consumes the message queue, and submit the cross chain transactions to poly.


* Poly -> Destination Chain

`PolyListen` observes cross chain transactions from poly chain and push them to message queue.

**ONLY ONE `PolyListen` PROCESS IS NEEDED FOR ALL CHAINS!**


`PolyCommit` consumes the message queue, and submit the cross chain transaction to the destination chain.



## Testing

#### Cross-chain using Lock proxy

#### Cross-chain using Wrapper

