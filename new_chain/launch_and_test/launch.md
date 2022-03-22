<h1 align="center">Test and Launch</h1>


## 1. Test the Project 

There are three steps for you to test the interaction between your chain and poly chain.

### 1.1 Debug on DevNet 	
Here is [DevNet](../../Core_Smart_Contract/Contract/DevNet.md) provided for developers to debug and test their codes.The access steps are as follows:

- Propose a request to submit code developed for poly chain to [github](https://github.com/polynetwork/poly.git ), wait for code review.
- Propose a request to submit code developed for new chain to [github](https://github.com/polynetwork/eth-contracts), wait for code review.
- Provide the Cross-chain Contracts hash you have deployed, the RPC that can connect your chain, wait for allocating chain ID and router number.
- Register to Poly Chain and sync genesis block header. The details are as follows:
  Register to Poly Chain
  - Call entry function `RegisterSideChain`
  - Call entry function `ApproveRegisterSideChain`
  Sync genesis block header
  - Call entry function `SyncSideChainGenesisHeader`

> [!Note|style:flat|label:Notice]
> This step is currently completed by `poly team`  with the trusted account.

- Launch your relayer. 

  If you choose to develop based on poly-relayer,please propose a request to submit code developed to [github](https://github.com/polynetwork/poly-relayer) ,and execute the subcommands follows:
> [!Note]
> If you develop relayer apart from poly-relayer, just complete the corresponding actions.
  - Generate a poly chain wallet,and turn to Poly Network to add  whitelist.
  - Compile the branch you developed.
  ```bash
   ./build.sh devnet/testnet/mainnet
  ```
  - Execute `settxblock` to set the scan initial height.
  ```bash
   ./relayer_main settxblock --height <the height> --chain <chainid>
  ```
  - Execute`setheaderblock` to set the header sync height (This command is optional.If not done, header sync will start from the registered height).
  ```bash
   ./relayer_main setheaderblock --height <the height> --chain <chainid>
  ```
  - Start the serve.
  ```bash
  ./server --config ./config.json --roles ./roles.json
  ```
  - Execute`status` to show how relayer works.
  ```bash
  ./relayer_main status
  ```
- Notes on debugging:
  - Check your wallet balance regularly to avoid problems caused by insufficient balance.
  - Create multiple wallet accounts which can speed up cross chain transaction.
  - Make sure the chain has been registered before launching relayer,
  - Make sure relayer can work correctly, based on whether the block header can be correctly and continuously synchronized in both poly chain and your chain. Synchronization is the prerequisite of processing the cross-chain information.
  - Check the cross-chain transaction can be verified correctly. Here suggest  to depoly a simple business logic contract logic to call the cross-chain function and test if the three parts(poly chain,your contract and relayer) work well together.

> [!Note|style:flat|label:Notice]
> Here you are recommended to interact with your own chain on dev-net, that means when you call the cross-chain function,the "toChainId" (the input parameter of cross chain function,)is your chain ID registered in Poly Chain.

### 1.2 Test on TestNet
Here is [TestNet](../../Core_Smart_Contract/Contract/TestNet.md) provided for developers to test for interacting with other chain.The access to TestNet is almost the same as that of DevNet,
- Propose a request to submit code developed for poly chain to [github](https://github.com/polynetwork/poly.git ), wait for code review.
- Propose a request to submit code developed for new chain to [github](https://github.com/polynetwork/eth-contracts.git), wait for code review.
- Submit the cross-chain contract hash , rpc, chain name to [docs](https://github.com/polynetwork/docs.git).
- Register to Poly Chain and sync genesis block header on Poly TestNet. The detail is consistent with DevNet, and is also completed by Poly Network.
- Deploy a business contract on the chain you want to interact and provide the function called by target chain to Poly Network.
- Launch your relayer,which way is the same on devnet.
- Note on test:
   - The transaction has been completed on the source chain, but not completed on Poly: 
   1) Is the block header synchronization normal？
   2) Is the transaction caught by relayer? 
   3) Is the input parameter "toChainId" (the input parameter of cross chain function, i.e., the target chain ID) is correct?
  
   - The transaction hasn't been completed on the target chain: 
   1) Is the "method" (the function of your contract called by target chain) allowed to be called by CCM contract on target chain? 
   2) Can "txData" (the input parameter of cross chain function) be parsed correctly by "method" on target chain？

### Step 3. Launch on MainNet
Now you can follow the processes to launch your project on [MainNet](../../Core_Smart_Contract/Contract/MainNet.md)：
- Notify Poly Network to merge the final code (include contract and poly code)into the MainNet, which takes about a week in advance.
- Submit the cross-chain contract hash deployed on MainNet ,MainNet rpc,chain name to [docs](https://github.com/polynetwork/docs.git). Please verify your contract code on scan.
- Register to Poly Chain and sync genesis block header on Poly MainNet. The detail is consistent with TestNet and DevNet, and is also completed by Poly Network.
- Launch your relayer.


Congratulations! You have integrated your chain in Poly Network.If you want to depoly some products ,please refer to other guide we provide:
- [Build New Bridges](../../new_product/integrate_bridge/readme.md)
- [Customize Business Logic Contract](../../new_product/integrate_contracts/readme.md)
