<a id="menu"></a>

# MainNet | [TestNet](TestNet.md) | [DevNet](DevNet.md) 

Here are cross chain contracts ONLY working in <strong>MAINNET</strong> node, which are used to bind asset mapping in different chains. It refers to that the asset is mapping if the name ends with (s).

### Contract Index (Chain-Chain ID)

| **[Bitcoin-1](MainNet.md#BTC)**    | **[Ethereum-2](MainNet.md#Ethereum)**    | **[Ontology-3](MainNet.md#Ontology)** | **[Neo Legacy-4](MainNet.md#Neo)**         | **[Switcheo-5](MainNet.md#Switcheo)**  |
|:-----------------------------------|:-----------------------------------------|:--------------------------------------|:-------------------------------------------|:---------------------------------------|
| **[BSC-6](MainNet.md#BSC)**        | **[Heco-7](MainNet.md#HECO)**            | **[Palette-8](MainNet.md#Palette)**   | **[Curve-10](MainNet.md#Curve)**           | **[OKEx-12](MainNet.md#OKEx)**         | 
| **[Neo N3-14](MainNet.md#Neo-N3)** | **Heimdall-15**                          | **[Polygon-17](MainNet.md#Polygon)**  | **[Zilliqa-18](MainNet.md#Zilliqa)**       | **[Arbitrum-19](MainNet.md#Arbitrum)** |
| **[xDAI-20](MainNet.md#xDAI)**     | **[Avalanche-21](MainNet.md#Avalanche)** | **[Fantom-22](MainNet.md#Fantom)**    | **[Optimistic-23](MainNet.md#Optimistic)** | **[Metis-24](MainNet.md#Metis)**       | 

### Quick Index
| **[Router And Chain ID](MainNet.md#Router-And-Chain-ID)** |
|-----------------------------------------------------------|

## BTC <a id="BTC"></a>
| Type | Contract | Desc |
|------|----------|------|
|      |          |      |


###### [Back to top](MainNet.md#menu)
## Ethereum <a id="Ethereum"></a>

| Type                          | Contract                                     | Desc                                                   |
|-------------------------------|----------------------------------------------|--------------------------------------------------------|
| CCM                           |    | Ethereum Cross Chain Manager contract                  |
| Lock Proxy                    |    | Ethereum Asset Proxy contract                          |
| NFT Lock Proxy                |    | NFT Lock Proxy contract                                |


###### [Back to top](MainNet.md#menu)
## Ontology <a id="Ontology"></a>

| Type        | Contract                                                                                      | Desc                                          |
|-------------|-----------------------------------------------------------------------------------------------|-----------------------------------------------|
| Lock Proxy  |  | ONT with 9 decimal contract                   |
| Wrapper     | B: c93837e82178d406af8c84e1841c6960af251cb5 <br> L: b51c25af60691c84e1848caf06d47821e83738c9  | WrapperV1 that takes transferred asset as fee | 


###### [Back to top](MainNet.md#menu)
## Neo <a id="Neo"></a>
| Type       | Contract                                                                                        | Desc                             |
|------------|-------------------------------------------------------------------------------------------------|----------------------------------|
| CCM        || Neo Cross Chain Manager contract |
| Lock Proxy |         |


###### [Back to top](MainNet.md#menu)
## Neo N3 <a id="Neo-N3"></a>
| Type        | Contract                                                                                         | Desc                                |
|-------------|--------------------------------------------------------------------------------------------------|-------------------------------------|
| CCM         |    | Neo N3 Cross Chain Manager contract |
| Nep17 Proxy | B: 0x385501cb0288b2953db767b0dc971478539456cb <br> L: cb569453781497dcb067b73d95b28802cb015538   | Neo N3 Asset Proxy contract         |

###### [Back to top](MainNet.md#menu)
## Note
`B` means big-endian, we can search the contract transaction history in corresponding explorer.

`L` means little-endian, we usually use it as the asset  input when we do binding asset  operation.

###### [Back to top](MainNet.md#menu)
## BSC <a id="BSC"></a>
| Type            | Contract                                   | Desc                                            |
|-----------------|--------------------------------------------|-------------------------------------------------|
| CCMP            |  | BSC Cross Chain Manager Proxy contract          |
| CCD             |  | BSC Cross Chain Data contract                   |
| CCM             |  | BSC Cross Chain Manager contract                |
| Lock Proxy      |  | BSC Asset Proxy contract                        |
| Lock Proxy_1    | 0xfB571d4dd7039f96D34bB41E695AdC92dF4A332f | BSC Asset Proxy contract                        |
| Lock Proxy-PIP4 | 0x960Ff3132b72E3F0b1B9F588e7122d78BB5C4946 | BSC Asset Proxy with LP contract                |
| Wrapper         | 0xE3D0FB6E3cB5DA61EB18b06D035052441009d1E6 | WrapperV1 that takes transferred asset as fee   |
| WrapperV2       | 0x4b0CFdb5e1Ca898a225F9E14AfF9e4eF178a10d2 | WrapperV2 that takes native asset as fee        |
| WrapperV3       | 0xbc3B4E7517c06019F30Bf2f707eD2770b85f9928 | WrapperV3 that takes native asset as fee        |
| Swapper         | 0x00b93851e3135663AAeC351555EddEE5B01325e6 | Curve entrance for auto cross chain tx with fee |
| NFT Lock Proxy  |  | NFT Lock Proxy contract                         | 
| NFT Wrapper     | 0xe2bD9dD8FAF5C4C2087Ab82eC7E63F619CcAa152 | NFT Wrapper contract                            |
| NFT Query       | 0x02015dBb2Dc25Cc7313D7EDb4785c2C46F3B7FD2 | NFT profile query contract                      |



###### [Back to top](MainNet.md#menu)
## HECO <a id="HECO"></a>
| Type           | Contract                                   | Desc                                            |
|----------------|--------------------------------------------|-------------------------------------------------|
| CCMP           |  | Heco Cross Chain Manager Proxy contract         |
| CCD            |  | Heco Cross Chain Data contract                  |
| CCM            |  | Heco Cross Chain Manager contract               |
| Lock Proxy     |  | Heco Asset Proxy contract                       |
| Wrapper        | 0x4fE451186c0D69205ACc1fA00FD75fc6d71e47eE | WrapperV1 that takes transferred asset as fee   |
| WrapperV2      | 0x1B0C55be400e2a7D924032B257Fbc75Bbfd256E7 | WrapperV2 that takes native asset as fee        |
| Swapper        | 0xD98Ee7Ca1B33e60C75E3cd9493c566fc857592c8 | Curve entrance for auto cross chain tx with fee |
| NFT Lock Proxy |  | NFT Lock Proxy contract                         | 
| NFT Wrapper    | 0xe2bD9dD8FAF5C4C2087Ab82eC7E63F619CcAa152 | NFT Wrapper contract                            |
| NFT Query      | 0x56C9491F2aC2Bc623AB890D2Db16C98E1aBd1FBd | NFT profile query contract                      |



###### [Back to top](MainNet.md#menu)
## Curve <a id="Curve"></a>
| Type      | Contract                                   | Desc                                     |
|-----------|--------------------------------------------|------------------------------------------|
| CCMP      |  | Curve Cross Chain Manager Proxy contract |
| CCD       |  | Curve Cross Chain Data contract          |
| CCM       |  | Curve Cross Chain Manager contract       |
| SwapProxy | 0x34d4a23A1FC0C694f0D74DDAf9D8d564cfE2D430 | Curve Asset Proxy contract               |
| BindProxy | 0x46829549E0a5Eccb04737eEaC6cE8826169BA1f1 | Curver bindproxy contract                |
| Pool-1    | 0xa6157DaBDda80F8c956962AB7739f17F54BAAB7F | USDT-BUSD-HUSD pool address in Curve     |
| Pool-2    | 0x560470C9C6E45fBe47c792E90B691015f0614A9c | ETH pool address in Curve                |
| Pool-3    | 0xd709d95479Fe244b27A34441D497859960893Ec6 | BNB pool address in Curve                |
| Pool-4    | 0x6c27318a0923369de04df7Edb818744641FD9602 | BTC pool address in Curve                |
| Pool-5    | 0x6C12415f6Ca74e5D1F091415858de7E188B0884C | BTC pool address in Curve                |
| Pool-7    | 0x1EEcE3d9fD152b73728aba136BB6E1f3ebd2Afa2 | USDT pool address in Curve               |
| Pool-8    | 0x6a07A0520C122f247Df2Fa3129Cc85F70f5485Fc | USDC pool address in Curve               |
| Pool-10   | 0x58AD8FF9B7A9c85EeaDedCFdAD1f9bCfF7DA47f3 | USDT pool address in Curve               |



###### [Back to top](MainNet.md#menu)
## OKEx <a id="OKEx"></a>
| Type       | Contract                                   | Desc                                            |
|------------|--------------------------------------------|-------------------------------------------------|
| CCMP       |  | OKEx Cross Chain Manager Proxy contract         |
| CCD        |  | OKEx Cross Chain Data contract                  |
| CCM        |  | OKEx Cross Chain Manager contract               |
| Lock Proxy |  | OKEx Asset Proxy contract                       |
| Wrapper    | 0x11e2A718d46EBe97645b87F2363AFE1BF28c2672 | WrapperV1 that takes transferred asset as fee   |
| WrapperV2  | 0xbd4a08577476A521C41a21EF3f00b045b74175d5 | WrapperV2 that takes native asset as fee        |
| Swapper    | 0xb68C0D092842a4a0272867D89245FCD7e7fcA3Eb | Curve entrance for auto cross chain tx with fee |


###### [Back to top](MainNet.md#menu)
## Polygon <a id="Polygon"></a>
| Type           | Contract                                   | Desc                                            |
|----------------|--------------------------------------------|-------------------------------------------------|
| CCMP           |  | Polygon Cross Chain Manager Proxy contract      |
| CCD            |  | Polygon Cross Chain Data contract               |
| CCM            |  | Polygon Cross Chain Manager contract            |
| Lock Proxy     |  | Polygon Asset Proxy contract                    |
| Wrapper        | 0x4493fb5dc195900938CC23096C7EEdEfc434e283 | WrapperV1 that takes transferred asset as fee   |
| WrapperV2      | 0xB88f13682F3C602aCD84B4b2eEB96A9DD75Afd89 | WrapperV2 that takes native asset as fee        |
| NFT Lock Proxy |  | NFT Lock Proxy contract                         |
| NFT Wrapper    | 0x6cEB2EC1E82880812F6aA60DfA260679D6C8323d | NFT Wrapper contract                            |
| NFT Query      | 0x6AF09953541c7b4d0023c5E5a4241F82C68E986C | NFT profile query contract                      |
| Swapper        | 0xaC57280B3A657A2e8D1180493C519a476D208F61 | Curve entrance for auto cross chain tx with fee |

###### [Back to top](MainNet.md#menu)

## Switcheo <a id="Switcheo"></a>

Type | Denom (coin name) | Asset/Contract  | Desc
:-:|:-:|:-:|:-:

###### [Back to top](MainNet.md#menu)
## Palette <a id="Palette"></a>
| Type              | Contract                                   | Desc                                          |
|-------------------|--------------------------------------------|-----------------------------------------------|
| CCD               |  | Palette Cross Chain Data contract             |
| CCM               |  | Palette Cross Chain Manager contract          |
| CCMP              |  | Palette Cross Chain Manager Proxy contract    |
| PLT Wrapper       | 0x0A9C412633465fdeE4861CeE02987386100bEAe6 | WrapperV1 that takes transferred asset as fee |
| NFT Lock proxy    |  | NFT Lock Proxy contract                       |
| NFT Wrapper       | 0x41985E2A8826233618392e38d46d2060fbCC3F2A | NFT Wrapper contract                          |
| NFT Query         | 0x0F05299e6ab0FbB3258296d3Ae7bF6Ae53A0c414 | NFT profile query contract                    |
| NFT Fee Collector | 0x0E860F44d73F9FDbaF5E9B19aFC554Bf3C8E8A57 | Fee collector address of palette NFT wrapper  |

###### [Back to top](MainNet.md#menu)
## Zilliqa <a id="Zilliqa"></a>

| Type       | Contract                                   | Desc                                       |
|------------|--------------------------------------------|--------------------------------------------|
| CCMP       |  | Zilliqa Cross Chain Manager Proxy contract |
| CCM        |  | Zilliqa Cross Chain Manager contract       |
| Lock Proxy |  | Zilliqa Asset Proxy contract               |

###### [Back to top](MainNet.md#menu)
## Arbitrum <a id="Arbitrum"></a>

| Type       | Contract                                   | Desc                                          |
|------------|--------------------------------------------|-----------------------------------------------|
| CCMP       |  | Arbitrum Cross Chain Manager Proxy contract   |
| CCM        |  | Arbitrum Cross Chain Manager contract         |
| CCD        |  | Arbitrum Cross Chain Data contract            |
| Lock Proxy |  | Arbitrum Asset Proxy contract                 |
| Swapper    | 0x7E418a9926c8D1cbd09CC93E8051cC3BbdfE3854 | Arbitrum Swapper contract                     |
| Wrapper    | 0xCf018d59B4728d073bd961ABe6A8024A8F0A3cdB | WrapperV1 that takes transferred asset as fee |
| WrapperV2  | 0x0f8C16BA16E58525Eb2aDc231ff360cfa00bB527 | WrapperV2 that takes native asset as fee      | 

###### [Back to top](MainNet.md#menu)
## xDAI <a id="xDAI"></a>

| Type       | Contract                                   | Desc                                          |
|------------|--------------------------------------------|-----------------------------------------------|
| CCMP       |  | xDAI Cross Chain Manager Proxy contract       |
| CCM        |  | xDAI Cross Chain Manager contract             |
| CCD        |  | xDAI Cross Chain Data contract                |
| Lock Proxy |  | xDAI Asset Proxy contract                     |
| Swapper    | 0xb68C0D092842a4a0272867D89245FCD7e7fcA3Eb | xDAI Swapper contract                         |
| Wrapper    | 0xD5d63Dce45E0275Ca76a8b2e9BD8C11679A57D0D | WrapperV1 that takes transferred asset as fee |
| WrapperV2  | 0x74A7f2A3aFa8B0CB577985663B5811901A860619 | WrapperV2 that takes native asset as fee      |

###### [Back to top](MainNet.md#menu)
## Avalanche <a id="Avalanche"></a>

| Type       | Contract                                   | Desc                                          |
|------------|--------------------------------------------|-----------------------------------------------|
| CCMP       |  | Avalanche Cross Chain Manager Proxy contract  |
| CCM        |  | Avalanche Cross Chain Manager contract        |
| CCD        |  | Avalanche Cross Chain Data contract           |
| Lock Proxy |  | Avalanche Asset Proxy contract                |
| Swapper    | 0xb68C0D092842a4a0272867D89245FCD7e7fcA3Eb | Avalanche Swapper contract                    |
| Wrapper    | 0x287Bd66753f0cA8e9C2171D782DF39e4C28cfd65 | WrapperV1 that takes transferred asset as fee |
| WrapperV2  | 0xf06587dE89e289Ce480CDf21109A14547eb33A0d | WrapperV2 that takes native asset as fee      |

###### [Back to top](MainNet.md#menu)
## Fantom <a id="Fantom"></a>

| Type       | Contract                                   | Desc                                          |
|------------|--------------------------------------------|-----------------------------------------------|
| CCMP       |  | Fantom Cross Chain Manager Proxy contract     |
| CCM        |  | Fantom Cross Chain Manager contract           |
| CCD        |  | Fantom Cross Chain Data contract              |
| Lock Proxy |  | Fantom Asset Proxy contract                   |
| Swapper    | 0xb68C0D092842a4a0272867D89245FCD7e7fcA3Eb | Fantom Swapper contract                       |
| Wrapper    | 0x287Bd66753f0cA8e9C2171D782DF39e4C28cfd65 | WrapperV1 that takes transferred asset as fee |
| WrapperV2  | 0xf06587dE89e289Ce480CDf21109A14547eb33A0d | WrapperV2 that takes native asset as fee      |

###### [Back to top](MainNet.md#menu)
## Optimistic <a id="Optimistic"></a>

| Type       | Contract                                   | Desc                                          |
|------------|--------------------------------------------|-----------------------------------------------|
| CCMP       |  | Optimistic Cross Chain Manager Proxy contract |
| CCM        |  | Optimistic Cross Chain Manager contract       |
| CCD        |  | Optimistic Cross Chain Data contract          |
| Lock Proxy | | Optimistic Asset Proxy contract               |
| Swapper    | 0xD24BEcEdFCE7f95693Fa3938eaC6dd66725B4Bbf | Optimistic Swapper contract                   |
| Wrapper    | 0x287Bd66753f0cA8e9C2171D782DF39e4C28cfd65 | WrapperV1 that takes transferred asset as fee |
| WrapperV2  | 0xf06587dE89e289Ce480CDf21109A14547eb33A0d | WrapperV2 that takes native asset as fee      |

###### [Back to top](MainNet.md#menu)
## Metis <a id="Metis"></a>

| Type            | Contract                                   | Desc                                     |
|-----------------|--------------------------------------------|------------------------------------------|
| CCMP            |  | Metis Cross Chain Manager Proxy contract |
| CCM             |  | Metis Cross Chain Manager contract       |
| CCD             |  | Metis Cross Chain Data contract          |
| Lock Proxy      |  | Metis Asset Proxy contract               |
| Lock Proxy-PIP4 | 0xbE46E4c47958A79E7F789ea94C5D8071a0DeE31e | Metis Asset Proxy contract               |
| WrapperV3       | 0xFbFDfc95B8EAe4719Ae7D7b94e6F7aCC2DC2e0D7 | WrapperV3 that takes native asset as fee |


###### [Back to top](MainNet.md#menu)
## Router And Chain ID <a id="Router-And-Chain-ID"></a>
Type | Router Number | Chain ID 
:-:|:-:|:-:
Bitcoin | 1 | 1
Ethereum | 2 | 2
Ontology | 3 | 3
Neo Legacy | 4 | 4
Switcheo | 5 | 5
BSC | 6 | 6
Heco | 7 | 7
Palette | 8 | 8
Zilliqa | 17 | 18
Curve | 10 | 10
OKExChain | 12 | 12
Neo N3 | 14 | 14
Heimdall | 15 | 15
Polygon | 16 | 17
Arbitrum | 0 | 19
xDAI | 0 | 20
Avalanche | 0 | 21
Fantom | 0 | 22
Optimistic | 0 | 23
Metis | 0 | 24


###### [Back to top](MainNet.md#menu)
