<a id="menu"></a>

# [MainNet](MainNet.md) | [TestNet](TestNet.md) | DevNet 

Here are cross chain contracts ONLY working in <strong>DevNet</strong> node, which are used to bind asset mapping in different chains. It refers to that the asset is mapping if the name ends with (s).


### Contract Index (Chain-Chain ID)


| **[Bitcoin-1](DevNet.md#Btc)**     | **[Ethereum-2](DevNet.md#Ethereum)** | **[Ontology-3](DevNet.md#Ontology)**       | **[Neo Legacy-217](DevNet.md#Neo-Legacy)** | **Switcheo-182** |
|------------------------------------|--------------------------------------|--------------------------------------------|--------------------------------------------|------------------|
| **[Neo N3-220](DevNet.md#Neo-N3)** | **[Pixie-321](DevNet.md#Pixie)**     | **[Cosmos-gaia-8](DevNet.md#Cosmos-Gaia)** |                                            |                  |


### Quick Index
| **[Router And Chain ID](DevNet.md#Router-And-Chain-ID)**  |
|-----------------------------------------------------------|


## Btc  <a id="Btc"></a>

BTCx Redeem Script: 
- 522103c4564b837674de2482961a8d5f2a24a7e11e8a97aac5e92ac2e64500219144512102ccc07d3df7da58bb6fa5cfe5d7be415ff9463171b2600c93c080fcd0d49576a721036ec6299c1b14e57b45f1ad85eecbc48ad5447a05158a1bfb2ffb689ad69490d353ae

BTCx Redeem Key: 
- c737784e5fdae8860fb461d4d30ffd0b34701d5a
###### [Back to top](DevNet.md#menu)

## Ethereum  <a id="Ethereum"></a>


| Type       | Contract                                    | Desc                                |
|------------|---------------------------------------------|-------------------------------------|
 | CCMP       |   | Cross Chain Manager Proxy contract  |
| Lock Proxy |   | Asset Proxy contract                |

###### [Back to top](DevNet.md#menu)

## Ontology  <a id="Ontology"></a>


| Type        | Contract                                                                                       | Desc                   |
|-------------|------------------------------------------------------------------------------------------------|------------------------|
|  Lock Proxy |   | Asset Proxy contract   |

###### [Back to top](DevNet.md#menu)

## Neo Legacy  <a id="Neo-Legacy"></a>


| Type       | Contract                                                                                          | Desc                         |
|------------|---------------------------------------------------------------------------------------------------|------------------------------|
 | CCM        || Cross Chain Manager contract |
 | Lock Proxy |    | Asset Proxy contract         |

Receiver:A: AZXRTygHgRbPu9o16K6en4BaZD11tXCmN1 <br>B: 0x4fd83a49df40c0a7de2671da20c2a8dfe495b6c2 <br>L: c2b695e4dfa8c220da7126dea7c040df493ad84f
###### [Back to top](DevNet.md#menu)


## Neo N3  <a id="Neo-N3"></a>


| Type       | Contract                                                                                          | Desc                         |
|------------|---------------------------------------------------------------------------------------------------|------------------------------|
 | CCM        |    | Cross Chain Manager contract |
 | Lock Proxy |     | Asset Proxy contract         |

Receiver: A: NLKpYEDmyGMWQVeqcoyZr9Lyo8P5Mrozba <br>B: 0x67ce818168a75d3bedb7d295bf11c060d1c38204 <br>L: 0482c3d160c011bf95d2b7ed3b5da7688181ce67
###### [Back to top](DevNet.md#menu)
## Note
`B` means big-endian, we can search the contract transaction history in corresponding explorer.

`L` means little-endian, we usually use it as the asset hash input when we do binding asset hash operation.
###### [Back to top](DevNet.md#menu)

## Cosmos-Gaia  <a id="Cosmos-Gaia"></a>


| Type       | Denom (coin name) | Asset/Contract                           | Desc                     |
|------------|-------------------|------------------------------------------|--------------------------|
 | Lock Proxy |                   |  | Asset Proxy contract     |



###### [Back to top](DevNet.md#menu)

## Pixie  <a id="Pixie"></a>


| Type           | Contract                                   | Desc                                     |
|----------------|--------------------------------------------|------------------------------------------|
| CCD            |  | Cross Chain Data contract                |
 | CCM            |  | Cross Chain Manager contract             |
 | CCMP           |  | Cross Chain Manager Proxy contract       |
 | Lock Proxy     |  | Asset Proxy contract                     |   
 | WrapperV2      | 0x455B51D882571E244d03668f1a458ca74E70d196 | WrapperV2 that takes native asset as fee | 
 | NFT Lock Proxy |  | NFT Lock Proxy contract                  |
 | NFT Wrapper    | 0x3237b7BC8283B4E07bAC017EAe52eBC34B278cE9 | NFT Wrapper contract                     |
| NFT Query      | 0x35EFCE8D79D6Cae30B38F6dAC3fc55C62c146b4c | NFT profile query contract               |

pixie test net rpc: https://http-testnet.chain.pixie.xyz <br>
pixie test net explorer: https://scan-testnet.chain.pixie.xyz/

###### [Back to top](DevNet.md#menu)
## Router And Chain ID <a id="Router-And-Chain-ID"></a>
Type | Router Number | Chain ID 
:-:|:-:|:-:
Bitcoin | 1 | 1
Ethereum | 2 | 2
Ontology | 3 | 3
NEO Legacy | 217 | 217
NEO N3 | 220 | 220
Cosmos-gaia | 5 | 8
Switcheo | 5 | 182
Pixie | 19 | 321
###### [Back to top](DevNet.md#menu)
