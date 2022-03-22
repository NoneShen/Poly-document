<h1 align="center">Import NFT</h1>

In most cases you only needs to deploy a version of the NFT contract on the source chain, and Poly Network will deploy the NFT proxy contract on the target chain.
The source NFT contract must support the [EIP-721 standard](https://eips.ethereum.org/EIPS/eip-721). It should be noted here that the [EIP-721 standard](https://eips.ethereum.org/EIPS/eip-721) excludes the mint method.

In our cross-chain process, when the newly generated asset on the source chain is transferred, Poly Network will determine whether this asset is in the target contract. If not, a new NFT will be minted.

Here are three steps listed for you to import NFT. 
### Step1. Develop and deploy contracts
- Develop a contract follows the NFT [template](https://github.com/polynetwork/nft-contracts/tree/main/contracts/erc721_template) provided by Poly Network.
- This contract implements minting interface using the Poly Network standard:
  `function mintWithURI(address to, uint256 tokenId, string memory uri) external`
- This method will be called in Poly Network’s PolyNFTLockProxy contract.

> [!Note|style:flat|label:Notice]
>If you want to deploy the NFT contract on the target chain by yourself, please implement the interface below and ensure that the method name, parameters, and order are strictly consistent.

- If your contract does not implement `_safeMint`, `_setTokenURI`, etc., you should implement first. If you have implemented these methods, you can directly copy the following code:
    
  ```solidity 
  function mintWithURI(address to, uint256 tokenId, string memory uri) external {
  require(!_exists(tokenId), "token id already exist");
  _safeMint(to, tokenId);
  _setTokenURI(tokenId, uri);
  }
  ```
  
### Step2. Submit necessary information to Poly
- [Download](http://81.69.45.203/new_product/integrate_assets/resources/nft_import_template.xlsx) the asset template and fill in the information according to given example in the Excel.
- [Submit](https://docs.google.com/forms/d/e/1FAIpQLSedb7y1JZVRvv-NIbHOhSzOLcr9u1fGqyJGkMybVkEmCLyU5Q/viewform?usp=sf_link) the .xlsx file to poly.
- Contact Poly Network via <a class="fab fa-discord" href= "https://discord.com/invite/y6MuEnq"></a>

### Step3. Test follow user manual
- Wait until the operators successfully add your contract address to the whitelist.
- Click [here](https://bridge.poly.network/nft) to test the NFT cross-chain transfer.
