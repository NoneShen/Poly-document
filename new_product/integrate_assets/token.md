<h1 align="center">Importing Tokens</h1>

Here the tutorial provides the importing methods and user manual to help you successfully import tokens. 

##1. Import Steps
Follow the listed four steps to import your token into Poly Network. 

### Step1. Deploy a corresponding asset
- Deploy mapping contracts of corresponding asset on target chain using the [template](https://github.com/polynetwork/eth-contracts/blob/master/contracts/core/assets/erc20_template/ERC20Template.sol). 
- Make sure the total amount of contracts keeps consistent with the amount on the source chain.

### Step2. Transfer assets
- Then transfer the initialized assets to the target chain proxy [contract](../../Core_Smart_Contract/Contract/TestNet.md).

### Step3. Download the template Excel
- Now you should [download](http://81.69.45.203/new_product/integrate_assets/resources/import_asset_template.xlsx) the asset template provided by Poly Network.
- Fill in the asset information according to given example in the Excel.

### Step4. Connect to Poly Network
- Next contact Poly Network team at [TG](https://t.me/joinchat/Hjv5NBrfO1C2LyODQfxVDw) to send your asset Excel.

### Step5. Wait to import
- Now, just wait until the operators successfully add your contract address to the whitelist.
- And then you can click [here](https://bridge.poly.network/testnet) to complete the cross-chain transfer from source chain to target chain.

##2. Poly Bridge User Manual for Personal Computer

You can follow the manual to check whether your token is successfully deployed.

> [!Note|style:flat|label:Notice]
> Here we take the token $METIS as an example.

### Step1. Select asset
- Firstly, you need to select the token you want to transfer. Click “Asset”, then you can choose the token in the pop-window, as shown in the following three figures.
<div align=center><img src="resources/token_selectassect_step1.png" alt=""/></div>
<div align=center><img src="resources/token_selectassect_step2.png" alt=""/></div>
<div align=center><img src="resources/token_selectassect_step3.png" alt=""/></div>

### Step2. Select network
- After asset selection, click “From Network” and select the source network in which the chosen token locates in the pop-window. Select the target network in the same way.
  > [!Note|style:flat|label:Notice]
  > The optional networks shown in the picture are the network types supporting $METIS. The network should be switched according to different assets. Please choose the assigned network according to the corresponding asset.

<div align=center><img src="resources/token_selectnetwork_step1.png" alt=""/></div>

- Here the picture indicates that $METIS is transferred from Metis to the target network BSC.
<div align=center><img src="resources/token_selectnetwork_step2.png" alt=""/></div>

### Step3. Connect wallet
- Next, you can connect your wallet by clicking “Connect Wallet” at the bottom of the page or up right the corner. 
- After that, you can choose a wallet to connect with the source or the target network according to your needs. 
- The interface should be shown as the following figures.
<div align=center><img src="resources/token_connectwallet_step1.png" alt=""/></div>

<div align=center><img src="resources/token_connectwallet_step2.png" alt=""/></div>

  > [!Note|style:flat|label:Notice]
  > Each network supports specific wallet, and the current status is shown in the table.

<div align=center><img src="resources/token_connectwallet_step3.png" alt=""/></div>

  > [!Note|style:flat|label:Notice]
  > When the red warning “Please switch network” appears, you should switch the network of wallet to keep consistent with the source network.

<div align=center><img src="resources/token_connectwallet_step4.png" alt=""/></div>

### Step4. Submit transaction
- Now you can enter the value of input token, then click “Next”. 
- A pop-window will appear to show the details of the transaction. Please check it carefully. 
- After carefully checking, click “Confirm” to submit the transaction and confirm it in wallet again.
  > [!Note|style:flat|label:Notice]
  > If you are the first time to Swap, an approval operation is required before you submit transaction (approve Infinity or not according to your actual situation).

<div align=center><img src="resources/token_connectwallet_step5.png" alt=""/></div>

### Step5. Check the results
- After the submission, you can view the transaction result through “History”. 
- The transaction is completed when the transaction details are displayed.
<div align=center><img src="resources/token_connectwallet_step6.png" alt=""/></div>
 
  > [!Note|style:flat|label:Notice]
  > The processing time of Poly Network Swaps are limited by the amount of the transaction fee. 
  > In order to avoid network congestion, Poly Network defaults to the maximum gas fee which will be used as the transaction fee on the source chain. 
  > ATTENTION: Poly Network does NOT charge any gas fee.


