<h1 align="center">Import NFT</h1>
Here the tutorial provides the importing methods and user manual to help you successfully import NFT. 

##1. Import Steps
In most cases you only needs to deploy a version of the NFT contract on the source chain, and Poly Network will deploy the NFT proxy contract on the target chain.

The source NFT contract must support the [EIP-721 standard](https://eips.ethereum.org/EIPS/eip-721). It should be noted here that the [EIP-721 standard](https://eips.ethereum.org/EIPS/eip-721) excludes the mint method.
  In our cross-chain process, when the newly generated asset on the source chain is transferred, Poly Network will determine whether this asset is in the target contract. If not, a new NFT will be minted.


### Step1. Provide contract address
- Firstly, you should provide a contract address with the NFT [template](https://github.com/polynetwork/nft-contracts/tree/main/contracts/erc721_template) provided by Poly Network.
- This contract implements minting interface using the Poly Network standard:
  `function mintWithURI(address to, uint256 tokenId, string memory uri) external`
- This method will be called in Poly Network’s PolyNFTLockProxy contract.

> [!Note]
>If you want to deploy the NFT contract on the target chain by yourself, please implement the above interface and ensure that the method name, parameters, and order are strictly consistent.

- If your contract does not implement `_safeMint`, `_setTokenURI`, etc., you should implement first. If you have implemented these methods, you can directly copy the following code:
    
  ```solidity 
  function mintWithURI(address to, uint256 tokenId, string memory uri) external {
  require(!_exists(tokenId), “token id already exist”);
  _safeMint(to, tokenId);
  _setTokenURI(tokenId, uri);
  }
  ```

### Step2. Provide baseUri
- Next you should provide the baseUri and see [here](https://api.seascape.network/nft/metadata/) for detailed requirements.

### Step3. Provide standard files according to the requirements above

- Now you can implement the required standard files with the following codes:

```json
{
“Name”:”SCAPES”,
“BaseURI”:”https://api.seascape.network/nft/metadata/",
“Assets”:[
{
“ChainName”:”eth”,
“Address”:”0x3680fb34F55030326659cd9AaEc522B6E355bdB6"
},
{
“ChainName”:”bsc”,
“Address”:”0x66638F4970C2ae63773946906922c07a583b6069"
},
{
“ChainName”:”heco”,
“Address”:”0xF9Dd424e64E9264632a564FBDcC87Ba8eA40B5Ba”
}
]
}
```

### Step4. Provide NFT profile data format and query interface 
- The query interface should include single query and batch query. 
- This step is not strictly required.

### Step5. Connect with Poly Network
- Finally, you can contact Poly Network at [TG](https://t.me/joinchat/Hjv5NBrfO1C2LyODQfxVDw) to further connect with Poly Network.

##2. NFT Bridge User Manual
You can follow the manual to check whether your NFT is successfully deployed.

### Step1. Opening the NFT page and connecting to the wallet
- Click “NFT Asset” on mainpage of [Poly Bridge](https://bridge.poly.network/) or directly click [here](https://bridge.poly.network/nft).
- If you connect with the wrong network, NFT won't be displayed, as shown in the figure.
- Then, you should click “connect Wallet” on the up right and connect to the wallet.
<div align=center><img src="resources/nft_step1.png" alt=""/></div>
 
  > [!NOTE]
  > If you have not connected any wallet, you will be required to connect your wallet first and see a guide interface when clicking any NFT image, as shown in the figure.

<div align=center><img src="resources/nft_step2.png" alt=""/></div>
  
  > [!NOTE]
  > If the selected chain does not match the current active chain in Metamask, the following error will occur. In this case, the chain in the wallet needs to be switched to the one selected in the Bridge.

<div align=center><img src="resources/nft_step3.png" alt=""/></div>

### Step2. Making an NFT cross-chain transaction
- After connecting to the wallet, the page will display the NFT assets owned by the user on the corresponding chain.
- Here we take the cross-chain transaction between ETH and HECO as an example, as shown in the two figures:
<div align=center><img src="resources/nft_step4.png" alt=""/></div>
<div align=center><img src="resources/nft_step5.png" alt=""/></div>

> [!Note:]
When making a cross-chain transaction for the first time, click “Approve” to verify.

<div align=center><img src="resources/nft_step6.png" alt=""/></div>

- After successfully approved, click “Next” on the page.
<div align=center><img src="resources/nft_step7.png" alt=""/></div>

- On the transaction confirmation page, the cross-chain bridge will charge the corresponding fee.
<div align=center><img src="resources/nft_step8.png" alt=""/></div>

- Next you can view the progress of the cross-chain transfer. Click on the transaction hash to open it in the [Poly Network](https://explorer.poly.network).

### Step3. Query NFT transaction history
- And now you can click "history" at the bottom of the page to view data on the history page, as shown in the following figures.
<div align=center><img src="resources/nft_step9.png" alt=""/></div>
<div align=center><img src="resources/nft_step10.png" alt=""/></div>
