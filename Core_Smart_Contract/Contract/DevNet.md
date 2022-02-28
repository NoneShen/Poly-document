<a id="menu"></a>

# [MainNet](MainNet.md) | [TestNet](TestNet.md) | DevNet 

Here are cross chain contracts ONLY working in <strong>DevNet</strong> node, which are used to bind asset mapping in different chains. It refers to that the asset is mapping if the name ends with (s).


### Contract Index (Chain-Chain ID)

| **[Bitcoin-1](DevNet.md#Btc)**     | **[Ethereum-2](DevNet.md#Ethereum)** | **[Ontology-3](DevNet.md#Ontology)**       | **[Neo Legacy-217](DevNet.md#Neo-Legacy)** | **Switcheo-182**   |
|------------------------------------|--------------------------------------|--------------------------------------------|--------------------------------------------|--------------------|
| **[Neo N3-220](DevNet.md#Neo-N3)** | **[Pixie-321](DevNet.md#Pixie)**     | **[Cosmos-gaia-8](DevNet.md#Cosmos-Gaia)** |                                            |                    |

### Quick Index
| **[Router And Chain ID](DevNet.md#Router-And-Chain-ID)** |
|----------------------------------------------------------|
## Btc  <a id="Btc"></a>


BTCx Redeem Script: 
- 522103c4564b837674de2482961a8d5f2a24a7e11e8a97aac5e92ac2e64500219144512102ccc07d3df7da58bb6fa5cfe5d7be415ff9463171b2600c93c080fcd0d49576a721036ec6299c1b14e57b45f1ad85eecbc48ad5447a05158a1bfb2ffb689ad69490d353ae

BTCx Redeem Key: 
- c737784e5fdae8860fb461d4d30ffd0b34701d5a
###### [Back to top](DevNet.md#menu)

## Ethereum  <a id="Ethereum"></a>


| Type       | Contract                                    | Desc                                |
|------------|---------------------------------------------|-------------------------------------|
 | CCMP       | 0x7087E66D6874899A331b926C261fa5059328d95F  | Cross Chain Manager Proxy contract  |
| Lock Proxy | 0x46DE64740cf839374afB264970f8D437732649cA  | Asset Proxy contract                |

###### [Back to top](DevNet.md#menu)

## Ontology  <a id="Ontology"></a>


| Type        | Contract                                                                                       | Desc                   |
|-------------|------------------------------------------------------------------------------------------------|------------------------|
|  Lock Proxy | B: ebad45b887c6bf7cc4c1df8f72da156bc91b04b7 <br> L: b7041bc96b15da728fdfc1c47cbfc687b845adeb   | Asset Proxy contract   |

###### [Back to top](DevNet.md#menu)

## Neo Legacy  <a id="Neo-Legacy"></a>


| Type       | Contract                                                                                          | Desc                         |
|------------|---------------------------------------------------------------------------------------------------|------------------------------|
 | CCM        | B: 0x3135a1a4668688a3e15b004af3a718f2d67141ca  <br> L: ca4171d6f218a7f34a005be1a3888666a4a13531   | Cross Chain Manager contract |
 | Lock Proxy | B: 0x3fef7ac6598ad83f5e4d4338e65530eba2173294 <br> L: 943217a2eb3055e638434d5e3fd88a59c67aef3f    | Asset Proxy contract         |

Receiver:A: AZXRTygHgRbPu9o16K6en4BaZD11tXCmN1 <br>B: 0x4fd83a49df40c0a7de2671da20c2a8dfe495b6c2 <br>L: c2b695e4dfa8c220da7126dea7c040df493ad84f
###### [Back to top](DevNet.md#menu)


## Neo N3  <a id="Neo-N3"></a>


| Type       | Contract                                                                                          | Desc                         |
|------------|---------------------------------------------------------------------------------------------------|------------------------------|
 | CCM        | B: 0x7c842f3900ceba5bcdeeeec05c9b41ba63ad6cd2  <br> L: d26cad63ba419b5cc0eeeecd5bbace00392f847c   | Cross Chain Manager contract |
 | Lock Proxy | B: 0x5376f41082a84fb000c944b6d44ba85b14e20fe5 <br> L: e50fe2145ba84bd4b644c900b04fa88210f47653    | Asset Proxy contract         |

Receiver: A: NLKpYEDmyGMWQVeqcoyZr9Lyo8P5Mrozba <br>B: 0x67ce818168a75d3bedb7d295bf11c060d1c38204 <br>L: 0482c3d160c011bf95d2b7ed3b5da7688181ce67
###### [Back to top](DevNet.md#menu)
## Note
`B` means big-endian, we can search the contract transaction history in corresponding explorer.

`L` means little-endian, we usually use it as the asset hash input when we do binding asset hash operation.
###### [Back to top](DevNet.md#menu)

## Cosmos-Gaia  <a id="Cosmos-Gaia"></a>


| Type       | Denom (coin name) | Asset/Contract                           | Desc                     |
|------------|-------------------|------------------------------------------|--------------------------|
 | Lock Proxy |                   | f71b55ef55cedc91fd007f7a9ba386ec978f3aa8 | Asset Proxy contract     |



###### [Back to top](DevNet.md#menu)

## Pixie  <a id="Pixie"></a>


| Type           | Contract                                   | Desc                                     |
|----------------|--------------------------------------------|------------------------------------------|
| CCD            | 0x25BB8E9C0Cc03B30d09769735208a47d389Ff36c | Cross Chain Data contract                |
 | CCM            | 0x6fd13dd4181dDb0f7463e19caC659FD3e9FB8a82 | Cross Chain Manager contract             |
 | CCMP           | 0x9bEF1AE7304D3d2F344ea00e796ADa18cE1beb03 | Cross Chain Manager Proxy contract       |
 | Lock Proxy     | 0xa85c9FC8F2c9060d674E0CA97F703a0A30619305 | Asset Proxy contract                     |   
 | WrapperV2      | 0x455B51D882571E244d03668f1a458ca74E70d196 | WrapperV2 that takes native asset as fee | 
 | NFT Lock Proxy | 0x6Bc728a0ce7e189CBfb8AD932fb57928106D2674 | NFT Lock Proxy contract                  |
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
