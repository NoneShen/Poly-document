<h1 align="center">Test and Launch</h1>


## 1. Test the Project 

There are two steps for you to test the interaction between your chain and Poly chain.

### 1.1 Debugging on DevNet 	
Here is DevNet provided for developers to debug and test your codes.The access steps are as follows:

- Propose a request to submit code developed for Poly chain to [github](https://github.com/polynetwork/poly.git ), and wait for code review.
- Propose a request to submit code developed for new chain to [github](https://github.com/polynetwork/eth-contracts), and wait for code review.
- [Submit](https://docs.google.com/forms/d/e/1FAIpQLSezACsGdL9p5GZw-xV1c4V-akoNB4kRR53Q6ZJQPy9QetcWOw/viewform) the Cross-chain contracts hash you have deployed and the RPC that can connect your chain, then waiting Poly team allocating chain ID and router number.
- Register to Poly Chain and sync genesis block header. The details are as follows:
  
  - **Register to Poly Chain**
   1. Call entry function `RegisterSideChain`
   2. Call entry function `ApproveRegisterSideChain`
  - **Sync genesis block header**
   1. Call entry function `SyncSideChainGenesisHeader`

> [!Note|style:flat|label:Notice]
> Registration is currently completed by Poly team with the trusted account.

- Launch your relayer. 

  If you choose to develop based on poly relayer, please propose a request to submit code developed to [github](https://github.com/polynetwork/poly-relayer), and execute the subcommands below:
  - Generate a poly chain wallet, and contact Poly team via <a class="fab fa-discord" href= "https://discord.com/invite/y6MuEnq"></a> to add whitelist.
  - Compile the branch you developed.
  ```bash
   ./build.sh devnet/testnet/mainnet
  ```
  - Execute `settxblock` to set the scan initial height.
  ```bash
   ./relayer_main settxblock --height <the height> --chain <chainid>
  ```
  - Execute`setheaderblock` to set the header sync height (This command is optional. If it fails, `header sync` will start from the registered height).
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

> [!Note|style:flat|label:Notice]
> If you develop relayer independent from Poly relayer, just complete the corresponding actions.
 
- Notes on debugging:
  - Check your wallet balance regularly to avoid problems caused by insufficient balance.
  - Create multiple wallet accounts, which can speed up cross chain transaction.
  - Make sure the chain has been registered before launching relayer.
  - Make sure relayer can work correctly, and check whether the block header can be correctly and continuously synchronized in both poly chain and your chain. Synchronization is the prerequisite of processing the cross-chain information.
  - Check whether the cross-chain transaction can be verified correctly. You are suggested to deploy a simple business logic contract logic to call the cross-chain function and test if the three parts (Poly chain, your contract and relayer) work well together.

> [!Note|style:flat|label:Notice]
> Here you are recommended to interact with your own chain on DevNet, that means when you call the cross-chain function, 
> the "toChainId" (the input parameter of cross chain function) is your chain ID registered in Poly Chain.

### 1.2 Test on TestNet
Here is TestNet provided for developers to test interaction between chains. The access to TestNet is almost the same as that of DevNet,
- Propose a request to submit code developed for poly chain to [github](https://github.com/polynetwork/poly.git ), and wait for code review.
- Propose a request to submit code developed for new chain to [github](https://github.com/polynetwork/eth-contracts.git), and wait for code review.
- [Submit](https://docs.google.com/forms/d/e/1FAIpQLSdsGcfwRfp_5hdB2n0jqXY817nTgQ_ME3PT-B8P6eO0XGHsKw/viewform) the cross-chain contract hash, rpc, chain name to Poly.
- Register to Poly Chain and `sync genesis block header` on Poly TestNet. The detail is consistent with DevNet, and is also completed by Poly Network.
- Deploy a business contract on the chain you want to interact with and provide the function called by target chain to Poly Network.
- Launch your relayer, which is the same as what on DevNet.
- Notes on test:
    
   - The transaction has been completed on the source chain, but not completed on Poly: 
    1. Is the block header synchronization normal？
    2. Is the transaction caught by relayer? 
    3. Is the input parameter "toChainId" (the input parameter of cross chain function, i.e., the target chain ID) is correct?
   - The transaction hasn't been completed on the target chain: 
    1. Is the "method" (the function of your contract called by target chain) allowed to be called by CCM contract on target chain? 
    2. Can "txData" (the input parameter of cross chain function) be parsed correctly by "method" on target chain？

## 2. Launch on MainNet
Now you can follow the processes to launch your project on MainNet：
- Notify Poly team via <a class="fab fa-discord" href= "https://discord.com/invite/y6MuEnq"></a> to merge the final code (including contracts and Poly code) into the MainNet, which should be taken about one week ahead of your launch schedule.
- [Submit](https://docs.google.com/forms/d/e/1FAIpQLSdQHIylyhuga28TF3ChIaaxqt9JLRmzTCYXRlgxDAbrIr2DsQ/viewform) the cross-chain contract hash deployed on MainNet, MainNet rpc,chain name to Poly. Please verify your contract code.
- Register to Poly Chain and `sync genesis block header` on Poly MainNet. The detail is consistent with TestNet and DevNet, and is also completed by Poly Network.
- Launch your relayer.


Congratulations! You have integrated your chain in Poly Network. If you want to deploy products, please refer to other guides we provide:
- [Build New Bridges](../../new_product/integrate_bridge/readme.md)
- [Customize Business Logic Contract](../../new_product/integrate_contracts/readme.md)
