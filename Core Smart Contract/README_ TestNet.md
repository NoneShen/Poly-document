<div id="menu"></div>

# [MainNet](README.md) | TestNet | [DevNet](README_DevNet.md) | [Zion_DevNet](Zion_dev_contracts.md)

This's cross chain asset contract info on <strong>TESTNET</strong>, it's used to bind asset mapping in different chain, if the name ends with (s) on behalf of the asset is mapping.

### Contract Index(Chain-Chain Id)

| **Bitcoin-1**             | **[Ethereum-2](README_TestNet.md#Ethereum)**          | **[Ontology-3](README_TestNet.md#Ontology)**      | **[Neo N2-5](README_TestNet.md#NeoN2)**    | **Switcheo-** |
| :----------------------------------------- | :-------------------------------------------- | :---------------------------------------- | :------------------------------------ | :----------------------------------- |
| **[Bsc-79](README_TestNet.md#BSC)** | **[Heco-7](README_TestNet.md#HECO)** | **[Palette-107](README_TestNet.md#Palette)**        | **[Ok-200](README_TestNet.md#Ok)** | **Curve-82**  |
| **[Neo N3-88](README_TestNet.md#NeoN3)** | **[Polygon-202](README_TestNet.md#Polygon)**           | **[Zilliqa-111](README_TestNet.md#Zilliqa)**       | **[Arbitrum-205](README_TestNet.md#Arbitrum)** | **[xDAI-206](README_TestNet.md#xDAI)**        |
| **[Avalanche-209](README_TestNet.md#Avalanche)**    | **[Fantom-208](README_TestNet.md#Fantom)**             | **[Optimistic-207](README_TestNet.md#Optimistic)** | **[Metis-300](README_TestNet.md#Metis)**       | **[Goerli-502](README_TestNet.md#Goerli)** |
| **[Rinkeby-402](README_TestNet.md#Rinkeby)** | **[Kovan-302](README_TestNet.md#Kovan)** | **[Pixie-316](README_TestNet.md#Pixie)** |  **[Boba-400](README_TestNet.md#Boba)** | |  |

### Quick Index

| **[Router And ChainId](README_TestNet.md#Router-And-ChainId)** | **[Decentralized Application TestNet Nodes](README_TestNet.md#Decentralized-Application-TestNet-Nodes)** |
| :----------------------------------------------------------- | :----------------------------------------------------------- |

## Decentralized Application TestNet Nodes
| Chain | IP                              | Rpc Port |
| ----- | ------------------------------- | -------- |
| Poly  | ```http://beta1.poly.network``` | 20336    |
| Neo   | ```http://seed9.ngd.network```  | 20332    |


###### [Back to top](README_TestNet.md#menu)
## Ethereum

| Type           | Contract Hash                              | Desc                                                                                                              |
| -------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| CCMP           | 0xb600c8a2e8852832B75DB9Da1A3A1c173eAb28d8 | Cross Chain Manager Proxy contract hash                                                                           |
| ECCD           | 0xA38366d552672556CE82426Da5031E2Ae0598dcD | Ethereum Cross Chain Data contract hash                                                                           |
| ECCM           | 0xf989E80AAd477cB6059f366C0170a498909C4a55 | Ethereum Cross Chain Manager contract hash                                                                        |
| Lock Proxy     | 0xD8aE73e06552E270340b63A8bcAbf9277a1aac99 | The lock proxy bridge contract hash for asset not implementing the "lock" and "unlock" logic to do cross chain tx |
| Wrapper        | 0xDc37471Af6a8aB7f45F444c5a3Ef4758281bE32C | Ethereum Wrapper contract hash                                                                                    |
| PLT Asset      | 0x1AC77d322e3347B8de181304B7c118a7e89c6Bc1 | The palette asset hash                                                                                            |
| NFT Lock Proxy | 0x9bEF1AE7304D3d2F344ea00e796ADa18cE1beb03 | The NFT lock proxy contract hash                                                                                  |
| NFT Wrapper    | 0x940300dc3Fc26e3A330a300be766184C0b5Fe019 | The NFT Wrapper contract hash                                                                                     |
| NFT Query      | 0x500674D603331C43ed2288834BAb284BF65fc076 | The NFT profile query contract hash                                                                               |
| NFT SEASCAPE   | 0x3680fb34F55030326659cd9AaEc522B6E355bdB6 | The seascape NFT contracct hash                                                                                   |
| NFT cat1       | 0xa85c9FC8F2c9060d674E0CA97F703a0A30619305 | The NFT collection of `digitalCat1` contract hash                                                                 |
| ERC20          | 0x276788aF4a803781267c84692416311DE1F761f9 | ERC20 template contract hash in Ethereum chain                                                                    |
| EOEP4          | 0x3105A14F7956D33a51F12eF3AE50A3f1eF161Dff | OEP4x template contract hash in Ethereum chain                                                                    |
| EONG           | 0x42d9feF0Cbd9c3000CECe9764d99A4a6fE9E1B34 | ONGx contract hash in Ethereum chain                                                                              |
| EONT           | 0x530aae4C0859894023906e28467f2a7F111B6ff3 | ONTx contract hash in Ethereum chain                                                                              |
| EONTD          | 0x76130c293AA35bf7B3e5fED1E9aE1E5DF12C6A92 | ONTD ONT with decimals                                                                                            |
| ETH            | 0x0000000000000000000000000000000000000000 | The asset hash that we treat as the Ether asset                                                                   |
| USDT           | 0xad3f96ae966ad60347f31845b7e4b333104c52fb | USD Tether                                                                                                        |
| USDC           | 0x0d9c8723b343a8368bebe0b5e89273ff8d712e3c | USDC                                                                                                              |
| WBTC           | 0x557563dc4ed3fd256eBA55B9622f53331ab97c2f | WBTC                                                                                                              |
| DAI            | 0x8Cad2301F7348DFc10C65778197028F432d51e76 | DAI                                                                                                               |
| EBTC           | 0x92705a16815A3d1AEC3cE9Cc273C5aa302961FcC | Btcx contract hash corresponding with unique btc redeem script                                                    |
| ECNEO          | 0x7E269f2f33A97C64192e9889FAeEC72A6fcdB397 |
| RENBTC         | 0x239100e629a9Ca8e0BF45C7892b0fc72d78AA97A |
| pWING          | 0xB60e03E6973B1d0b90a763f5B64C48ca7cB8c2d1 | WING on ethereum                                                                                                  |
| pPAX           | 0x825c227B07153eA450a6607E35c2BF70a9B2fe47 |
| sUSD           | 0x21718C0FbD10900565fa57C76e1862cd3F6a4d8E | [How to get sUSD](https://developer.synthetix.io/integrations/testnets/)                                          |
| pOKB           | 0x776C8DB09367615BC741Be6e13Dec8EAbD2bD8bd |
| pUNI           | 0x1269d9940a2bfc5aC13c759E7ef1E35FEc7278f6 |
| pBNB           | 0x09c6a1B0B32a8B2c327532518C68F9B0C54255b8 |
| pHT            |                                            | 0x930B81bDdCd7A793D3541E41D85475a20E169092                                                                        |
| pHRC20         | 0x3FDd17AbFbB43D29e32746C273085C05d58e2e80 |
| pFLM           | 0xc4e419CC0945dC9860A73B3A2cAcAA12aD7CF3B8 |
| xWETH          | 0xd38fc89febb12e5d32faa72e07d486a268b9c63a |
| xWBTC          | 0x447b931cc604a30dc16c49002f35a7aab7888b78 |
| xUSDT          | 0xf15b5430321f4e51f5f534cedada7fbb78fa6680 |
| Cash           | 0x6678C7f809c699c9B1F7da6F263b5cF407b8EB1d | Cash                                                                                                              |
| Share          | 0x61ADf6f0D936C8602893228bbB83d1AC08eB60FB | Share                                                                                                             |
| CVT            | 0xe6DF8136171FA8C3D4eA450C4A86bA707AECFBba |
| REVO           | 0x155040625D7ae3e9caDA9a73E3E44f76D3Ed1409 |
| Essentia       | 0xdD5B6056744F7ECa6784cA09C2590004Ec67729D |

###### [Back to top](README_TestNet.md#menu)
## Bsc

| Type           | Contract Hash                              | Desc                                                                                                              |
| -------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| CCMP           | 0x441C035446c947a97bD36b425B67907244576990 | Cross Chain Manager Proxy contract hash                                                                           |
| ECCD           | 0xE815E5B52A659d78c91B747f7A3b358cc4F04794 | Cross Chain Data contract hash                                                                                    |
| ECCM           | 0x906bC93FF690d6D3D2C4E7A7dfA4dEbdEF2cD7CA | Cross Chain Manager contract hash                                                                                 |
| Lock Proxy     | 0x097Ae585BfEf78DDC8E266ABCb840dAF7265130c | The lock proxy bridge contract hash for asset not implementing the "lock" and "unlock" logic to do cross chain tx |
| Lock Proxy1.5  | 0xB4004B93f1ce1E63131413cA201D35D1F3f40e5D | The lock proxy 1.5 bridge contract hash for asset not implementing the "lock" and "unlock" logic to do cross chain tx |
| Wrapper        | 0x9f9F15CC407F7b26f55D71D43f993580a9107007 | wrapper contract hash                                                                                             |
| Wrapper3.0     | 0xfb717F8d478156fE7428369075bB2FaB4Ea659B5 | wrapper contract hash  used by lockproxy2.0                                                                       |
| NFT Lock Proxy | 0x9bEF1AE7304D3d2F344ea00e796ADa18cE1beb03 | The NFT lockc proxy contract hash                                                                                 |
| NFT Wrapper    | 0x61E289D43C1FEA7598786557A2F309979ad144D3 | The NFT Wrapper contract hash                                                                                     |
| NFT Query      | 0xAB3e1F13127bE931A71Fdc8940bd31506EFC6A70 | The NFT profile query contract hash                                                                               |
| NFT SEASCAPE   | 0x66638F4970C2ae63773946906922c07a583b6069 | The seascape NFT contracct hash                                                                                   |
| NFT cat1       | 0x455B51D882571E244d03668f1a458ca74E70d196 | The NFT collection of `digitalCat1` contract hash                                                                 |
| NFT Nobel Boss | 0x301294a9c7c218d439edd6d5ab16f9663fc10f3e | The NFT Nobel Boss Mint contract              | 
| Bnb            | 0x0000000000000000000000000000000000000000 | The asset hash that we treat as the Bnb asset                                                                     |
| USDT           | 0x23F5075740c2C99C569FfD0768c383A92d1a4aD7 | USD Tether                                                                                                        |
| USDC           | 0xeE8410B64aAed811d84c313b72E040Cb09840b80 | USDC                                                                                                              |
| WBTC           | 0xA3cE15f11D4427b6bad5630036f368a98e923E95 | WBTC                                                                                                              |
| DAI            | 0xe5750F0EE3DFD2e6a3Aca35ddC0E904188Fd571e | DAI                                                                                                               |
| WING           | 0x0a7BF54D2684885d731Dc63917A3178A2a1a8d4A | WING                                                                                                              |
| ONTd           | 0xAd21Ee6507E8Ee05E7A239163031d1853Bb8869f | ONTd                                                                                                              |
| pHT            | 0xFdE5B4D9B2D89b8DC11Bd83E1E1867a53F88695c | pHT                                                                                                               |
| pHRC20         | 0xdb82f10Ef81ed9E43f3F03Fd8d2D3b92C86F546b | pHRC20                                                                                                            |
| pEth           | 0x44c86e6b6B613f3471ad87dBfAeB92B320b71a23 | pEth                                                                                                              |
| pNeo           | 0xCe5b38C8B83428C5B4209a1866AA483De271Bd6c | pNeo                                                                                                              |
| pSUSD          | 0xFE9b30ed047bC43F1537140772f50969a29df5de | pSUSD                                                                                                             |
| Cash           | 0x62D475e25f7492027eB1888599f96f195B0D6065 | Cash                                                                                                              |
| Share          | 0x4a2f867152E5370fb026b768CaC4647750c5Ae02 | Share                                                                                                             |
| CVT            | 0x539DAAFE03Ff2685C8D7922a61C1A66f22807bb7 |
| REVO           | 0x155040625D7ae3e9caDA9a73E3E44f76D3Ed1409 |
| Essentia       | 0xcdA43a8EF603aC31DA6E104b481146374C53149C |
| Metis          | 0xdB2D16f61e3e1bD54Ba8068E04F5552e718d5b7c | Token
| LPToken        | 0xd6828c954E27Ae3929f098BA2Fb8Bf163817C40b | Metis LP Token

###### [Back to top](README_TestNet.md#menu)
## OK

| Type       | Contract Hash                              | Desc                                                                                                              |
| ---------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| CCMP       | 0x38917884b397447227fb45cbA0342F1bFf7A3470 | Cross Chain Manager Proxy contract hash                                                                           |
| ECCD       | 0xd1Acc7bc3BDA9a63eEF89357a6f4c705ee874f44 | Cross Chain Data contract hash                                                                                    |
| ECCM       | 0x296f7f9f0e65152965e9BE12b349c14c7cE8eE85 | Cross Chain Manager contract hash                                                                                 |
| Lock Proxy | 0x74cE7D56cd1b5AEe9A3345A490b5Ed768134C7D4 | The lock proxy bridge contract hash for asset not implementing the "lock" and "unlock" logic to do cross chain tx |
###### [Back to top](README_TestNet.md#menu)
## Heco
| Type           | Contract Hash                              | Desc                                                                                                              |
| -------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| CCMP           | 0xc5757b5d22984E534004cC7Fb1D59eD14EC510a5 | Cross Chain Manager Proxy contract hash                                                                           |
| ECCD           | 0x709D63f3d1a46B89cE4F6a61C8fb16aB29fD26F8 | Cross Chain Data contract hash                                                                                    |
| ECCM           | 0x40039148ce624B560e5F5c095DdA90fc13442Cf8 | Cross Chain Manager contract hash                                                                                 |
| Lock Proxy     | 0x4a76E52600C6285029c8f7c52183cf86282cA5b8 | The lock proxy bridge contract hash for asset not implementing the "lock" and "unlock" logic to do cross chain tx |
| Wrapper        | 0xCC8407Ee04AaC2AdC0E6A55E7E97176C701146cd | Wrapper contract hash                                                                                             |
| NFT Lock Proxy | 0x25BB8E9C0Cc03B30d09769735208a47d389Ff36c | The NFT lockc proxy contract hash                                                                                 |
| NFT Wrapper    | 0xbaBaAF5CF7f63437755aAAFE7a4106463c5cD540 | The NFT Wrapper contract hash                                                                                     |
| NFT Query      | 0xE1488842b15E0f084b254588f46e4C570065d6A0 | The NFT profile query contract hash                                                                               |
| NFT SEASCAPE   | 0xF9Dd424e64E9264632a564FBDcC87Ba8eA40B5Ba | The seascape NFT contracct hash                                                                                   |
| NFT cat1       | 0x0C3C33dA088ABeeE376418d3E384528c5AaDBA11 | The NFT collection of `digitalCat1` contract hash                                                                 |
| HT             | 0x0000000000000000000000000000000000000000 | Native Huobi token on huobi eco chain                                                                             |
| HRC20          | 0xFAddf0cfb08F92779560db57BE6b2C7303aaD266 | simple HRC20 token same as ERC20 in Ethereum                                                                      |
| pNEO           | 0x6ef070cB10fC9F66D04A4c387928B268f55b9198 | related to nNEO asset on Neo chain                                                                                |
| pONTd          | 0x01FaA7b4157f3a3672892c0ec2773f5400Dd2DCF |
| pFLM           | 0xb1203bDC2C60521DCbf73DCfc82eDBdA101EA0A2 |
| pBNB           | 0x33B89F811E8986C5b9D32114a21Cc1fd5FEB6C78 |
| pWING          | 0xb8033859be7553cf9c7657f664FC2243BA5f02Ef |
| pWBTC          | 0xB0FcB90b85Eab741ba28a132044E93344136cA36 |
| pDAI           | 0x6965731AfED27AdD95BE4b0D88AC895Ea3eaC7EF |
| pUSDC          | 0x63B79D3C4d1F7CBEFb80E4b0Ab7E8d1545Ba10c3 |
| pETH           | 0x0BC413bBde7855Ba8114596B6Dc53eD8A5c10774 |
| pUSDT          | 0x7698Da475B3132F37E40DE8C222d7D74d3A4172d |
| pSUSD          | 0x83e906D9fa217D4210DC339133812054eB8d5629 |
###### [Back to top](README_TestNet.md#menu)
## Ontology
#### Please donot send from or to Ontology network during upgrade of Ontology testnet

| Type       | Contract Hash                                                                                  | Desc                                                                                                   |
| ---------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Wrapper    | B:a5c101afa9e04e9dd2c912983795005a49e02efa L: fa2ee0495a0095379812c9d29d4ee0a9af01c1a5         |
| Lock Proxy | B: 33c439c502cb4b6ac5a1e8057a65fe1fa7c300e2 </br> L: e200c3a71ffe657a05e8a1c56a4bcb02c539c433  | The bridge contract hash for asset not implementing the "lock" and "unlock" logic to do cross chain tx |
| OERC20     | B: e930755b130dccb25dc3cfee2b2e30d9370c1a75  </br> L: 751a0c37d9302e2beecfc35db2cc0d135b7530e9 | ERC20 template contract hash in Ontology chain                                                         |
| OEP4       | B: 969850e009b5e2a061694f3479ec8e44bc68bcd3 </br> L: d3bc68bc448eec79344f6961a0e2b509e0509896  | OEP4 template contract hash in Ontology chain                                                          |
| ONG        | B: 0200000000000000000000000000000000000000 </br> L: 0000000000000000000000000000000000000002  | ONG asset hash in Ontology chain                                                                       |
| ONT        | B: 0100000000000000000000000000000000000000 </br> L: 0000000000000000000000000000000000000001  | ONT asset hash in Ontology chain                                                                       |
| OUSDC      | B:07a12c0a6bdce4df04ef4b2045d1b0fd63a56e25</br> L:256ea563fdb0d145204bef04dfe4dc6b0a2ca107     |
| ONTd       | B:869951e3397550e800d5faf579857cdb637a0051</br> L:51007a63db7c8579f5fad500e8507539e3519986     | ONT with 9 decimal contract hash                                                                       |
| oUSDT      | B: c6f91c11d740d39943b99a6b1c6fd2b5f476e2a3 </br>L: a3e276f4b5d26f1c6b9ab94399d340d7111cf9c6   | Ontology wrapped USDT (Ethereum) Cross Chain asset contract hash                                       |
| OWBTC      | B: aede525f05065306423a5522bfcd31b5847ffa52</br> L: 52fa7f84b531cdbf22553a42065306055f52deae   | Ontology wrapped WBTC (Ethereum) Cross Chain asset contract hash                                       |
| ODAI       | B: 96cf88356123592835a2fa75068a242260be1791</br> L: 9117be6022248a0675faa235285923613588cf96   |
| OETH       | B: 7009a2f7c8a2e45fa386a6078c7bfeaf518be487</br> L: 87e48b51affe7b8c07a686a35fe4a2c8f7a20970   |
| ONEO       | B: 13eef3e184d878038317d806796b3af2d9f9b36d</br> L: 6db3f9d9f23a6b7906d817830378d884e1f3ee13   |
| ORENBTC    | B: ec547bc4486dea97cb659f1fe73407922f9e63c8</br> L: c8639e2f920734e71f9f65cb97ea6d48c47b54ec   |
| WING       | B: ff31ec74d01f7b7d45ed2add930f5d2239f7de33</br> L: 33def739225d0f93dd2aed457d7b1fd074ec31ff   |
| pPAX       | B: 5cb420480614fc635f7bfa7f3bd2cd5484004545</br> L: 4545008454cdd23b7ffa7b5f63fc14064820b45c   |
| pSUSD      | B: 37f4497b6f5f511e73843a0bda1042777666f7ec</br> L:ecf76676774210da0b3a84731e515f6f7b49f437    |
| pOKB       | B: 0191f134a3ef0e1eb4f557b6aa0b8bdfd0a5db21</br> L: 21dba5d0df8b0baab657f5b41e0eefa334f19101   |
| pUNI       | B: b79d2064947f61070cb68ef26cbc12cbf3b98d9e</br> L: 9e8db9f3cb12bc6cf28eb60c07617f9464209db7   |
###### [Back to top](README_TestNet.md#menu)
## Neo(N2)

| Type              | Contract Hash                              | Desc                                     |
| ----------------- | ------------------------------------------ | ---------------------------------------- |
| Wrapper           | 0x0f4fad9ae3830585a9264e6ec0b1eff3e89c6558 | 58659ce8f3efb1c06e4e26a9850583e39aad4f0f |
| Nep5Proxy         | 0xedd2862dceb90b945210372d229f453f2b705f4f | 4f5f702b3f459f222d371052940bb9ce2d86d2ed | The lock proxy bridge contract hash for asset not implementing the "lock" and "unlock" logic to do cross chain tx |
| CCMC              | 0xe1695b1314a1331e3935481620417ed835669407 | 07946635d87e4120164835391e33a114135b69e1 | Cross Chain Manager Contract                                                                                      |
| pnWETH            | 0x23535b6fd46b8f867ed010bab4c2bd8ef0d0c64f | 4fc6d0f08ebdc2b4ba10d07e868f6bd46f5b5323 |
| nNEO              | 0x17da3881ab2d050fea414c80b3fa8324d756f60e | 0ef656d72483fab3804c41ea0f052dab8138da17 |
| cGAS              | 0x74f2dc36a68fdc4682034178eb2220729231db76 | 76db3192722022eb7841038246dc8fa636dcf274 |
| pONTd             | 0x658cabf9c1f71ba0fa64098a7c17e52b94046ece | ce6e04942be5177c8a0964faa01bf7c1f9ab8c65 |
| pnUSDT            | 0xb8f78d43ea9fe006c85a26b9aff67bcf69dd4fe1 | e14fdd69cf7bf6afb9265ac806e09fea438df7b8 |
| pnWBTC            | 0x69c57a716567a0f6910a0b3c1d4508fa163eb927 | 27b93e16fa08451d3c0b0a91f6a06765717ac569 |
| pnUNI_V2_ETH_WBTC | 0x7b95ed96fd45c0d5bf8341c26965249039740629 | 2906743990246569c24183bfd5c045fd96ed957b |
| FLM               | 0x083ea8071188c7fe5b5e4af96ded222670d76663 | 6366d7702622ed6df94a5e5bfec7881107a83e08 |
| pBNB              | 0xd2c9be183e9639dec881b577251d3a0d3f3bf1bb | bbf13b3f0d3a1d2577b581c8de39963e18bec9d2 |
| pWING             | 0x9612f09852522be3cf6e1a4db8b5a496a9036e40 | 406e03a996a4b5b84d1a6ecfe32b525298f01296 |
| pWBTC             | 0x039d8bdb37b7f42230bf5c6ea1ff8b348aa12c8b | 8b2ca18a348bffa16e5cbf3022f4b737db8b9d03 |
| pDAI              | 0xe26656daaa0c6a8ee6c4929acdb25ebf3b73011b | 1b01733bbf5eb2cd9a92c4e68e6a0caada5666e2 |
| pUSDC             | 0x63d3999d6d9b04d35c7c8aa9a450c9bb3b3db838 | 38b83d3bbbc950a4a98a7c5cd3049b6d9d99d363 |
| pHT               | 0x843e9f7a4ba7e062a53d7bbbe85cb35421704616 | 1646702154b35ce8bb7b3da562e0a74b7a9f3e84 |
| pHrc20            | 0xbb01ac51a4c49bd28676274726497ab27ae8f66c | 6cf6e87ab27a492647277686d29bc4a451ac01bb |
| pxWETH            | 0xebda3300da6b657641fe627e2a2ef3a893f9ceb8 | b8cef993a8f32e2a7e62fe4176656bda0033daeb |
| pxWBTC            | 0x3b772e350b8e1e48c95406c5d8051e2c3de0076a | 6a07e03d2c1e05d8c50654c9481e8e0b352e773b |
| pxUSDT            | 0xf6e02d506929c3f47be47bf60997a96a41c7b282 | 82b2c7416aa99709f67be47bf4c32969502de0f6 |
###### [Back to top](README_TestNet.md#menu)
## Neo(N3)

| Type           | Contract Hash                              | Desc                                     |
| -------------- | ------------------------------------------ | ---------------------------------------- |
| Wrapper        |                                            |                                          |
| Nep17Proxy     | 0x4487494dac2f7eb68bdae009cacd6de88243e542 | 42e54382e86dcdca09e0da8bb67e2fac4d498744 | The lock proxy bridge contract hash for asset not implementing the "lock" and "unlock" logic to do cross chain tx |
| CCMC           | 0x618d44dc3af16c6120dbf65402024f40a04f772a | 2a774fa0404f020254f6db20616cf13adc448d61 | Cross Chain Manager Contract                                                                                      |
| NFT Lock Proxy | 0x7acd03102216db84993710cafb924e48a2259e1a | 1a9e25a2484e92fbca10379984db16221003cd7a |
| NFT cat1       | 0xd74d35311c2a20ba78cd12056d3017da5bd352a6 | a652d35bda17306d0512cd78ba202a1c31354dd7 |
| NEO            | 0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5 | f563ea40bc283d4d0e05c48ea305b3f2a07340ef |
| GAS            | 0xd2a4cff31913016155e38e474a2c06d08be276cf | cf76e28bd0062c4a478ee35561011319f3cfa4d2 |
| bNEO            | 0x48c40d4666f93408be1bef038b6722404d9a4c2a | 2a4c9a4d4022678b03ef1bbe0834f966460dc448 |
| FLM            | 0x1415ab3b409a95555b77bc4ab6a7d9d7be0eddbd | bddd0ebed7d9a7b64abc775b55959a403bab1514 |
| fUSDT          | 0x83c442b5dc4ee0ed0e5249352fa7c75f65d6bfd6 | d6bfd6655fc7a72f3549520eede04edcb542c483 |
| fWBTC          | 0xad97a439b4a035184d1ab46a07ee75687f541237 | 3712547f6875ee076ab41a4d1835a0b439a497ad |
| fWETH          | 0x38a2aace91f92b979207c0dd50a857c117d4785b | 5b78d417c157a850ddc00792972bf991ceaaa238 |
| pONT          | 0x74ba424c768dbbb64ce02f7786137cdd4a5dc27b | 7bc25d4add7c1386772fe04cb6bb8d764c42ba74 |
###### [Back to top](README_TestNet.md#menu)
## Note 
`B` means big-endian, we can search the contract transaction history in corresponding explorer.

`L` means little-endian, we usually use it as the asset hash input when we do binding asset hash operation.

###### [Back to top](README_TestNet.md#menu)
## Cosmos

|    Type    | Denom (coin name) |           Asset/Contract Hash            |          Desc           |
| :--------: | :---------------: | :--------------------------------------: | :---------------------: |
| Lock Proxy |                   | f71b55ef55cedc91fd007f7a9ba386ec978f3aa8 |
|   ERC20    |      erc20x       |               657263323078               |
|   OEP4x    |       oep4x       |                6f65703478                |
|    ONGx    |       ongx        |                 6f6e6778                 |
|    ONTx    |       ontx        |                 6f6e7478                 |
|    ETHx    |       ethx        |                 65746878                 |
|    BTCx    |       btcx        |                 62746378                 |
|    NEOx    |       neox        |                 6e656f78                 | not including currently |
|    GASx    |       gasx        |                 67617378                 | not including currently |
|    ATOM    |       stake       |                7374616b65                | not including currently |

###### [Back to top](README_TestNet.md#menu)
## Polygon

| Type         | Contract Hash                              | Desc                                            |
| ------------ | ------------------------------------------ | ----------------------------------------------- |
| CCMP         | 0x15D3f62822a446b8C5fDBBef157f0b82b05c29Ab | Cross Chain Manager Proxy contract hash         |
| ECCD         | 0xd097cf11c0215563AaAE2d3bb49366C59FFFa144 | Cross Chain Data contract hash                  |
| ECCM         | 0xe6d97637EFb55d8c81154E29aC343Bc447F80c19 | Cross Chain Manager contract hash               |
| Lock Proxy   | 0x4e5eF0CA5A94b169Fb010fb40DBFD57c4830f446 | The lock proxy bridge contract hash             |
| Poly Wrapper | 0xD5d63Dce45E0275Ca76a8b2e9BD8C11679A57D0D | lock entrance for auto cross chain tx with fee  |
| Swapper      | 0x1B0C55be400e2a7D924032B257Fbc75Bbfd256E7 | Curve entrance for auto cross chain tx with fee |
| NFT Lock Proxy | 0x761fb099d021cf55ffe65f9bedd3e2bab52abccc | The NFT lockc proxy contract hash             |
| NFT Wrapper    | 0xea5b2a0cf4ca9bd5c72ea1fbee1ffe420e57f692 | The NFT Wrapper contract hash                 |                                                                  
| NFT Query      | 0x13227576c94119755bbad5bf01d8ac332f80e8ad | The NFT profile query contract hash           | 
| NFT Nobel Boss | 0xd0609f06ffa034a525d31fdc1a4ba94a457f4620 | The NFT Nobel Boss Mint contract              | 
###### [Back to top](README_TestNet.md#menu)
## Palette

| Type           | Contract Hash                                                                                                             | Desc                                                          |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| CCMP           | 0x309064768EBD4EeF8ce073888e2f1C7e1CCCa191                                                                                | Cross Chain Manager Proxy contract hash                       |
| ECCD           | 0x17d37a71986b7592dF8BAD1a9F0FB8Da9792d8D3                                                                                | Cross Chain Data contract hash                                |
| ECCM           | 0xB64EE4b7cf935C51233b6ED9b0732D3Bd26E3442                                                                                | Cross Chain Manager contract hash                             |
| PLT Wrapper    | 0x2D44Db62D82EE13ff7DD02C03CA37b240213175C                                                                                | lock entrance for plt(erc20) auto cross chain tx without fee  |
| NFT Wrapper    | 0xFeEbBc92365a203a2FDCc4B1bBDAA2489A9bb6Ac                                                                                | lock entrance for nft(erc721) auto cross chain tx without fee |
| NFT Lock Proxy | 0x6e5fB68D6B705A567d75135169cF69574225eBe6                                                                                | The NFT lock proxy bridge contract hash                       |
| NFT Query      | 0x34B5B0cC2b57d96d3930Ddc66084029170fE6BFD The NFT query contract hash which used to batch fetch token urls and token ids |
###### [Back to top](README_TestNet.md#menu)
## Zilliqa
| Type       | Contract Hash                              | Desc                                    |
| ---------- | ------------------------------------------ | --------------------------------------- |
| CCMP       | 0x6b95e35a3355df6d841127349f243ef4f017eaf2 | Cross Chain Manager Proxy contract hash |
| CCM        | 0x720a3fb587b670de99d94925b6f99c9a63d462c1 | Cross Chain contract hash               |
| Lock Proxy | 0xa5a43eecd29534edf80792a9889f52c77455245d | Lock proxy contract hash                |
| zETH       | 0x0e0cbcd97db4c94890b528ef3d33d5b5c1776eef | Zilliqa-bridged ETH token               |
| zDai       | 0x8f79cd968f0968565a157975f4fe406ea22d0571 | Zilliqa-bridged Dai Stablecoin          |
###### [Back to top](README_TestNet.md#menu)
## Arbitrum

| Type       | Contract Hash                              | Desc                                    |
| ---------- | ------------------------------------------ | --------------------------------------- |
| CCMP       | 0xeE96Aa05b320a570C489aBd5EEc546AE4Fb58Eb7 | Cross Chain Manager Proxy contract hash |
| ECCD       | 0x71c2003f90bA0D2ce8a79DE9a70E7dD41BBfB983 | Cross Chain Data contract hash          |
| ECCM       | 0x3A77dB10eAa7436e608a99643Ab2bEB2E901C72C | Cross Chain Manager contract hash       |
| Lock Proxy | 0x97f72bA888A26A0F98C67cf15d781dDBFE64B990 | The lock proxy bridge contract hash     |
| Wrapper    | 0x27eb74B4Db37517F1dC6dE67364e19782624402F |                                         |
###### [Back to top](README_TestNet.md#menu)
## Xdai

| Type       | Contract Hash                              | Desc                                    |
| ---------- | ------------------------------------------ | --------------------------------------- |
| CCMP       | 0x3E5ceC313CECaa37319e0F2C949656441103C429 | Cross Chain Manager Proxy contract hash |
| ECCD       | 0xAefD220aE393144dcb5EFD6Ab55ABDf6a3d0444d | Cross Chain Data contract hash          |
| ECCM       | 0xF87527a74215777391fE4AfD082FeeED3E5A0ca5 | Cross Chain Manager contract hash       |
| Lock Proxy | 0x52B3048eeF2E53bAF430B0bA4752999F244d1709 | The lock proxy bridge contract hash     |
| Wrapper    | 0xa7eDA65F94A2a334a0de42d479585b65D27b2249 |                                         |
| NB         | 0xFe1c7C8193FA9491c8790dF7f24174D88146873D | Token                                   |
###### [Back to top](README_TestNet.md#menu)
## Optimistic

| Type       | Contract Hash                              | Desc                                    |
| ---------- | ------------------------------------------ | --------------------------------------- |
| CCMP       | 0x0ca3f95c8f66C7B178414CCFd7a508d349b9f794 | Cross Chain Manager Proxy contract hash |
| ECCD       | 0xbA6F835ECAE18f5Fc5eBc074e5A0B94422a13126 | Cross Chain Data contract hash          |
| ECCM       | 0xC8042579D6b60E0e35161F228827E3Fa0F51d5B6 | Cross Chain Manager contract hash       |
| Lock Proxy | 0x8a85143cA6ec1e181C3A5Ae4042ca999bFbF571B | The lock proxy bridge contract hash     |
| Wrapper    | 0xE324EF8cd52833DD117e8ca87b483E78b30C3696 |                                         |
| NB         | 0x3fec290112c79e94f4813fd3f7cbac3391426f50 | Token                                   |
###### [Back to top](README_TestNet.md#menu)
## Fantom

| Type       | Contract Hash                              | Desc                                    |
| ---------- | ------------------------------------------ | --------------------------------------- |
| CCMP       | 0x74D67A4EFbA6Dbbb14DC574b6Db4F11f6b1C5af8 | Cross Chain Manager Proxy contract hash |
| ECCD       | 0x4Bf7b284De2999628CBBEf6fE9F74f8B8E5eBF16 | Cross Chain Data contract hash          |
| ECCM       | 0x1C84D74084c3C3301BE4777A568D78211189c871 | Cross Chain Manager contract hash       |
| Lock Proxy | 0x4a76E52600C6285029c8f7c52183cf86282cA5b8 | The lock proxy bridge contract hash     |
| Wrapper    | 0xFAddf0cfb08F92779560db57BE6b2C7303aaD266 |                                         |
| NB         | 0x82E9948acA92412b8094fE649C3f32bEfFFEDb7C | Token                                   |
###### [Back to top](README_TestNet.md#menu)
## Avalanche

| Type       | Contract Hash                              | Desc                                    |
| ---------- | ------------------------------------------ | --------------------------------------- |
| CCMP       | 0xcdd05Ebaa1FA06a5cE9eB67663aE9Ec78B37bd5B | Cross Chain Manager Proxy contract hash |
| ECCD       | 0x4d8BC48087b994AA419d4679069584a7C92586A8 | Cross Chain Data contract hash          |
| ECCM       | 0xf37D8C2d072b74d6532541B70319ef08f9F6a4a8 | Cross Chain Manager contract hash       |
| Lock Proxy | 0x80a53FD352597AbA3dD52c722119865a8ed82632 | The lock proxy bridge contract hash     |
| Wrapper    | 0xac0a6759696569B3729177ba6844D41FF6D57844 |                                         |
| NB         | 0x82E9948acA92412b8094fE649C3f32bEfFFEDb7C | Token                                   |
###### [Back to top](README_TestNet.md#menu)
## Metis

| Type       | Contract Hash                              | Desc                                    |
| ---------- | ------------------------------------------ | --------------------------------------- |
| CCMP       | 0xD5a240f7F755bCa2aE992E807b06d24eB6DF7C12 | Cross Chain Manager Proxy contract hash |
| ECCD       | 0x30e6ec356ceF1cfe3c7e14392EA08448382327bD | Cross Chain Data contract hash          |
| ECCM       | 0xd6fc5374649cea121395a4860FdB33F21783c4Af | Cross Chain Manager contract hash       |
| Lock Proxy | 0x0AF53d318De279C8e67FcC6914acF387CFaA8B7E | The lock proxy bridge contract hash     |
|LockProxyPIP4| 0xe6E89cde11B89D940D25c35eaec7aCB489D29820 | The lock proxy 1.5 bridge contract hash |
| Wrapper    | 0xc2d365475EEf3ec83e59D1BcDF3A291D7B23Ba99 |                                         |
| Wrapper3.0 | 0xA09E4d0406123d14CFB1d60D78C6Dc386b7de7F9 | The Wrapper used in lockProxy 1.5       |
| Wrapper2.0 | 0xb0354F5383839e163438Aa53dd58E5e70a548F2F |                                         |
| NB         | 0x82E9948acA92412b8094fE649C3f32bEfFFEDb7C | Token                                   |
| Metis      | 0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000 | Token                                   |
| LPToken    | 0x7A6EE6Aa417a420e2db416895501469fe3095971 | Metis LP Token                          |
###### [Back to top](README_TestNet.md#menu)
## Goerli
| Type       | Contract Hash                              | Desc                                    |
| ---------- | ------------------------------------------ | --------------------------------------- |
| CCMP       | 0xC8042579D6b60E0e35161F228827E3Fa0F51d5B6 | Cross Chain Manager Proxy contract hash |
| ECCD       | 0x10BCC4B6C2555fF48540571ebe5aBa6D32915250 | Cross Chain Data contract hash          |
| ECCM       | 0xbA6F835ECAE18f5Fc5eBc074e5A0B94422a13126 | Cross Chain Manager contract hash       |
| Lock Proxy | 0x509fB7A017e33f18101dDC0d28Ac06aEaf6Edb4B | The lock proxy bridge contract hash     |
| Wrapper2.0 | 0xA058FC5427d3E634698d1185C1BA01ADAf998E14 |                                         |
| NB         | 0x3AA03cD463D1e05e05F717a721bE1bC98dA54917 | Token                                   |
###### [Back to top](README_TestNet.md#menu)
## Rinkeby
| Type       | Contract Hash                              | Desc                                    |
| ---------- | ------------------------------------------ | --------------------------------------- |
| CCMP       | 0x0ca3f95c8f66C7B178414CCFd7a508d349b9f794 | Cross Chain Manager Proxy contract hash |
| ECCD       | 0xbA6F835ECAE18f5Fc5eBc074e5A0B94422a13126 | Cross Chain Data contract hash          |
| ECCM       | 0xC8042579D6b60E0e35161F228827E3Fa0F51d5B6 | Cross Chain Manager contract hash       |
| LockProxy | 0x8a85143cA6ec1e181C3A5Ae4042ca999bFbF571B | The lock proxy bridge contract hash     |
| LockProxyPIP4 | 0x30e6ec356ceF1cfe3c7e14392EA08448382327bD | The lock proxy PIP4 bridge contract hash     |
| WrappeV2| 0xE324EF8cd52833DD117e8ca87b483E78b30C3696 |                                         |
| WrapperV3 | 0xD5a240f7F755bCa2aE992E807b06d24eB6DF7C12 |                                         |
| NB         | 0x3AA03cD463D1e05e05F717a721bE1bC98dA54917 | Token                                   |
| Boba | 0x6A6676813d3D4317442CF84667425C13553F4a76|  Boba Token                                   |
| LP Boba | 0x0a80C08081dAa3B9786B9661F83123C2772c5Df1 |  LP Boba Token                                   |

###### [Back to top](README_TestNet.md#menu)
## Kovan
| Type       | Contract Hash                              | Desc                                    |
| ---------- | ------------------------------------------ | --------------------------------------- |
| CCMP       | 0x8a85143cA6ec1e181C3A5Ae4042ca999bFbF571B | Cross Chain Manager Proxy contract hash |
| ECCD       | 0x7D87b4C81B9efE1783E0524a6f475F9C526641C2 | Cross Chain Data contract hash          |
| ECCM       | 0x509fB7A017e33f18101dDC0d28Ac06aEaf6Edb4B | Cross Chain Manager contract hash       |
| Lock Proxy | 0x95a10b809c9Cfd51A46652C785ac73d7269834b9 | The lock proxy bridge contract hash     |
| Wrapper2.0 | 0xa2d97d1A123c6bD39AFD97F696B937fAcb024313 |                                         |
| NB         | 0x2dA279bD19AB7E8641c0EE1884Da56fb636Ca20f | Token                                   |
###### [Back to top](README_TestNet.md#menu)
## Pixie
| Type       | Contract Hash                              | Desc                                    |
| ---------- | ------------------------------------------ | --------------------------------------- |
| CCMP       | 0x8F967507Ae66ad78c12478E10cA07c9104eb24A7 | Cross Chain Manager Proxy contract hash |
| ECCD       | 0xF9Dd424e64E9264632a564FBDcC87Ba8eA40B5Ba | Cross Chain Data contract hash          |
| ECCM       | 0x2E830E0cf3dc8643B497F88C07c8A72EFE24B11f | Cross Chain Manager contract hash       |
| Lock Proxy | 0x46Fc99509c4Aab0c958B8b2175edAa9C4963Ac09 | The lock proxy bridge contract hash     |
| Wrapper2.0 | 0xE7Db150e4095Cbb35914b5dC980906C77B5990d2 |                                         |
| Nft Proxy  | 0xD54a267B2c983d883D39248Dd7002dc7405559E0 |                                         |
| Nft Query  | 0xbaBaAF5CF7f63437755aAAFE7a4106463c5cD540 |                                         |
| Nft Wrapper| 0x06e3d8Eeb9DC4732e474c26674e08213c6e11921 |                                         |
###### [Back to top](README_TestNet.md#menu)
## Boba
| Type       | Contract Hash                              | Desc                                    |
| ---------- | ------------------------------------------ | --------------------------------------- |
| CCMP       | 0x720aF2de5eA84b78AAC7BDFA812B47e41516D59c | Cross Chain Manager Proxy contract hash |
| ECCD       | 0x55a59c57a133d1c999b3Eaf5B16ad5c1F2e365c8 | Cross Chain Data contract hash          |
| ECCM       | 0xa65bD4431C38A4dD9c92ebE60dE3cb8C252c04E5 | Cross Chain Manager contract hash       |
| LockProxyPIP4| 0x46Fc99509c4Aab0c958B8b2175edAa9C4963Ac09 | The lock proxy bridge contract hash     |
| WrapperV3 | 0xF87527a74215777391fE4AfD082FeeED3E5A0ca5 |                                         |
| Boba | 0xF5B97a4860c1D81A1e915C40EcCB5E4a5E6b830 |  Boba Token                                   |
| LP Boba | 0x3D3828C8A071169f825EF0A10aFC53867B7DeE39 |  LP Boba Token                                   |


###### [Back to top](README_TestNet.md#menu)
## Router And ChainId
|   Type   | Router Number |   ChainId    |
| :------: | :-----------: | :----------: |
| Bitcoin  |       1       |      1       |
| Ethereum |       2       |      2       |
| Ontology |       3       |      3       |
| NEO(N2)  |       4       |      5       |
| Switcheo |       5       | release soon |
|   BSC    |       6       |      79      |
|   Heco   |       7       |      7       |
| Palette  |       8       |     107      |
| Zilliqa  |      111      |     111      |
|    OK    |      12       |     200      |
|  Curve   |      10       |      82      |
| Heimdall |      15       |     201      |
|Polygon   |      16       |     202      |
| NEO(N3)  |      88       |      88      |
| Arbitrum |       0       |     205      |
|   Xdai   |       0       |     206      |
|Optimistic|       0       |     207      |
|  Fantom  |       0       |     208      |
| Avalanche|       0       |     209      |
|  Metis   |       0       |     300      |
|  Goerli  |       0       |     502      |
|  Rinkeby |       0       |     402      |
|  Kovan   |       0       |     302      |
|  Pixie   |       0       |     316      |
|  Boba    |       0       |     400      |

###### [Back to top](README_TestNet.md#menu)
