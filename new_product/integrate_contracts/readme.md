<h1 align="center">Customizing Business Logic Contracts</h1>

- List of contracts
  - [Cross Chain Manager Contract](https://github.com/polynetwork/eth-contracts/blob/master/contracts/core/cross_chain_manager/logic/EthCrossChainManager.sol): On source chain, it creates the cross chain transactions that are transferred to the Poly; On target chain, it verifies the legitimacy of transactions and executes the method on target business logic contract. In the following context, it may be referred to as CCM contract.
  - [Cross Chain Data Contract](https://github.com/polynetwork/eth-contracts/blob/master/contracts/core/cross_chain_manager/data/EthCrossChainData.sol): It serves as a database of cross chain transactions. In the following context, it may be referred to as CCD contract.
  - [Cross Chain Manager Proxy Contract](https://github.com/polynetwork/eth-contracts/blob/master/contracts/core/cross_chain_manager/upgrade/EthCrossChainManagerProxy.sol): It serves as a proxy of CCM contract. When there is any need to upgrade the CCM contract, it would pause old CCM contract and set new CCM contract to CCD contract. 
  - Business Logic Contract: It executes the business logic of cross chain projects. It interacts with users and CCM contract both on source chain and target chain. Here we offer examples of business logic contract to realize cross chain features. 
- Interactions between contracts
<div align=center><img src="resources/contracts_interaction.jpeg" alt=""/></div>
