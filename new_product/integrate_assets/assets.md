### Step1. Download Asset Template 
- [Download](resources/ImportAssetTemplate.xlsx) the asset template of Poly Network.

### Step2. Fill in the Asset Information
- Fill in the asset information according to eg in excel

### Step3. Connect Poly Network
   1. Contact the poly administrator at TG: *https://t.me/joinchat/Hjv5NBrfO1C2LyODQfxVDw*
   2. Send asset information.
   3. Tell administrators which chains have no asset contracts.

> [!Note]
>    - If there is no asset on the target chain, poly will deploy a mapped asset to the target chain, and at the same time, it will enter all the assets into the lockproxy contract of the target chain.That is to say, the mapped assets are only valuable when they are unlocked.

> [!Note]
>    - If you already have a corresponding asset contract on the target chain, then Poly Network will use the pip4 contract to cross-chain. When you add liquidity, it will give you a corresponding LP-asset, and LP-asset can cross-chain. When the liquidity is insufficient , requires you to continue to add liquidity.


### Step4. Cross-chain testing
   - You can see your assets on the [Poly Bridge](https://bridge.poly.network/testnet), and then you can perform cross-chain testing.
   <div align=center><img src="resources/polybridge.jpg" alt=""/></div>