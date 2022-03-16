<h1 align="center">Test and Launch</h1>

Till now, you may have completed the above three parts and waiting to run your module. Then you can execute launch and test by following the listed steps according to the needs of your project.  

> [!NOTE]
> Deployment and test are carried on test-net, dev-net, and main-net successively.

<div align=center><img src="resources/launch_and_testing.png" alt=""/></div>

## 1. Deploy Contracts

If you want to take templates provided by Poly as your CCM module, deploy three contracts listed below:
- Deploy [Cross Chain Data contract](https://github.com/polynetwork/eth-contracts/blob/master/contracts/core/cross_chain_manager/data/EthCrossChainData.sol) and get the address of it.
- Deploy [Cross Chain Manager contract](https://github.com/polynetwork/eth-contracts/blob/master/contracts/core/cross_chain_manager/logic/EthCrossChainManager.sol) and input the address of Cross Chain Data contract.
- Deploy [Cross Chain Manager Proxy contract](https://github.com/polynetwork/eth-contracts/blob/master/contracts/core/cross_chain_manager/upgrade/EthCrossChainManagerProxy.sol) and input the address of Cross Chain Manager contract.

## 2. Register Chain

For chain registration, you need to complete the following two functions: 

### Step 1. Call chain registration functions
Registration is the prerequisite of monitoring and processing block information and checking the execution of cross-chain transactions. The chain will be officially involved into the cross-chain ecosystem after completing **registration** and being **approved** by the Cross Chain Council.

- Call entry function `RegisterSideChain`
- Call entry function `ApproveRegisterSideChain`

> [!NOTE]
> Chain registration is currently completed by `poly team`  with the trusted account.

### Step 2. Call the genesis block header synchronize functions

Genesis block header synchronization is the prerequisite of synchronizing and processing the subsequent block header information. It involves Synchronizing the genesis block header of the new chain to poly chain and synchronizing the genesis header of the poly chain to ccm contract of the new chain.
- Call entry function `SyncSideChainGenesisHeader` 

> [!NOTE]
> Synchronization is currently completed by `poly team`  with the trusted account.


## 3. Deploy Relayers
Deployment of relayer involves two critical procedures: execute relayer subcommands below and deploy relayer. You can follow the listed commands and steps to complete your deployment. 
### 3.1 Relayer Subcommands

- Execute `settxblock` to set the scan initial height.
  ```bash
  ./relayer_main settxblock --height 100210 --chain 7
  ```
- Execute`setheaderblock` to set the header sync height.
  ```bash
  ./relayer_main setheaderblock --height 100210 --chain 7
  ```
- Execute`status` to show the current relayer status.
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

### 3.2 Deployment steps:
Now you can actually deploy your relayer with the following three steps:
#### Step 1. Build the Binary

To build the binary, switch to the right branch through [Branch Select](https://github.com/polynetwork/poly-relayer/blob/main/README.md#supported-chains), then run:


```bash
./build.sh devnet/testnet/mainnet
```


#### Step 2. Write the Configuration

* Make sure necessary configuration is specified in `config.json` [Sample](https://github.com/polynetwork/poly-relayer/blob/main/config.sample.json).

* Specify roles to enable in `roles.json` [Sample](https://github.com/polynetwork/poly-relayer/blob/main/roles.sample.json)


| Roles      | Quantity Demand                 | Description                                                                                     |
|------------|---------------------------------|-------------------------------------------------------------------------------------------------|
| HeaderSync | One or multiple for each chain  | It submits chain headers to poly chain.                                                         |
| TxListen   | Only one for each chain         | It observes cross chain transactions from source chain, and push them to message queue.         |
| TxCommit   | One or multiple for each chain  | It consumes the message queue, and submit the cross chain transactions to poly.                 |
| PolyListen | Only One for poly chain         | It observes cross chain transactions from poly chain and push them to message queue.            |
| PolyCommit | One or multiple for poly chain  | It consumes the message queue, and submit the cross chain transaction to the destination chain. |

For Poly public nodes and contract addresses, check [here](Core_Smart_Contract/Contract/MainNet.md).

#### Step 3. Run the Relayer Process

Now call the command:

```
./server --config ./config.json --roles ./roles.json
```

> [!Note]
> - Check your wallet balance regularly to avoid problems caused by insufficient balance.
>
> - Creating multiple wallet accounts can speed up cross chain transaction.
> 
> - Register a poly chain wallet before run the relayer, as signature in poly chain wallet is permitted by assigned accounts.


## 4. Test the Project 
There are three steps for you to test the interaction between your chain and poly chain.

### Step 1. Debug on DevNet 	
Here is [DevNet](Core_Smart_Contract/Contract/DevNet.md) provided for developers to debug and test their codes.The access steps are as follows:

- Propose a request to submit code developed for poly chain to [github](https://github.com/polynetwork/poly.git ), wait for code review.
- Propose a request to submit code developed for new chain to [github](https://github.com/polynetwork/eth-contracts), wait for code review.
- Provide the Cross-chain Contracts hash you have deployed, the RPC that can connect your chain, wait for allocating chain ID and router number.
- Register to Poly Chain and sync genesis block header. The details are as follows:

  - Call entry function `RegisterSideChain`
  - Call entry function `ApproveRegisterSideChain`
  Sync genesis block header
  - Call entry function `SyncSideChainGenesisHeader`

> [!Note]
> This step is currently completed by `poly team`  with the trusted account.

- Launch your relayer.
- Notes on debugging:
  - Make sure relayer can work correctly, based on whether the block header can be correctly and continuously synchronized in both poly chain and your chain. Synchronization is the prerequisite of processing the cross-chain information.
  - Check the cross-chain transaction can be verified correctly. Here suggest  to depoly a simple business logic contract logic to call the cross-chain function and test if the three parts(poly chain,your contract and relayer) work well together.

> [!Note]
> Here you are recommended to interact with your own chain on dev-net, that means when you call the cross-chain function,the "toChainId" (the input parameter of cross chain function,)is your chain ID registered in Poly Chain.

### Step 2. Test on TestNet
Here is [TestNet](Core_Smart_Contract/Contract/TestNet.md) provided for developers to test for interacting with other chain.The access to TestNet is almost the same as that of DevNet,
- Propose a request to submit code developed for poly chain to [github](https://github.com/polynetwork/poly.git ), wait for code review.
- Propose a request to submit code developed for new chain to [github](https://github.com/polynetwork/eth-contracts.git), wait for code review.
- Submit the cross-chain contract hash ,rpc,chain name to [docs](https://github.com/polynetwork/docs.git)
- Register to Poly Chain and sync genesis block header on Poly TestNet. The detail is consistent with DevNet, and is also completed by Poly Network.
- Deploy a business contract on the chain you want to interact and provide the function called by target chain to Poly Network.
- Launch your relayer.
- Note on test:
   - The transaction has been completed on the source chain, but not completed on Poly: 
   1) Is the block header synchronization normal？
   2) Is the transaction caught by relayer? 
   3) Is the input parameter "toChainId" (the input parameter of cross chain function, i.e., the target chain ID) is correct?
  
   - The transaction hasn't been completed on the target chain: 
   1) Is the "method" (the function of your contract called by target chain) allowed to be called by CCM contract on target chain? 
   2) Can "txData" (the input parameter of cross chain function) can be parsed correctly by "method" on target chain？

### Step 3. Launch on MainNet
Now you can follow the processes to launch your project on MainNet：
- Notify Poly Network to merge the final code (include contract and poly code)into the MainNet, which takes about a week in advance.
- Submit the cross-chain contract hash deployed on MainNet ,MainNet rpc,chain name to [docs](https://github.com/polynetwork/docs.git). Please verify your contract code on scan.
- Register to Poly Chain and sync genesis block header on Poly MainNet. The detail is consistent with TestNet and DevNet, and is also completed by Poly Network.
- Launch your relayer.


Congratulations! You have integrated your chain in Poly Network.If you want to depoly some products ,please refer to other guide we provide:
- [Build New Bridges](new_product/integrate_bridge/readme.md)
- [Customize Business Logic Contract](new_product/integrate_contracts/readme.md)
