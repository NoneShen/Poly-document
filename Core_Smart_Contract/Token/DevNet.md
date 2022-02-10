<a id="menu"></a>

# [MainNet](MainNet.md) | [TestNet](TestNet.md) | DevNet 

Here are cross chain tokens ONLY working in <strong>DevNet</strong> mode, which are used to bind asset mapping in different chains. It refers to that the asset is mapping if the name ends with (s).

### Token Index (Chain-Chain ID)

| **[Bitcoin-1](DevNet.md#Btc)**     | **[Ethereum-2](DevNet.md#Ethereum)** | **[Ontology-3](DevNet.md#Ontology)**       | **[Neo Legacy-217](DevNet.md#Neo-Legacy)** | **Switcheo-182**   |
|:-----------------------------------|:-------------------------------------|:-------------------------------------------|:-------------------------------------------|:-------------------|
| **[Neo N3-220](DevNet.md#Neo-N3)** | **[Pixie-321](DevNet.md#Pixie)**     | **[Cosmos-gaia-8](DevNet.md#Cosmos-Gaia)** |                                            |                    |


## Btc  <a id="Btc"></a>


BTCx Redeem Script: 
- 522103c4564b837674de2482961a8d5f2a24a7e11e8a97aac5e92ac2e64500219144512102ccc07d3df7da58bb6fa5cfe5d7be415ff9463171b2600c93c080fcd0d49576a721036ec6299c1b14e57b45f1ad85eecbc48ad5447a05158a1bfb2ffb689ad69490d353ae

BTCx Redeem Key: 
- c737784e5fdae8860fb461d4d30ffd0b34701d5a
###### [Back to top](DevNet.md#menu)

## Ethereum  <a id="Ethereum"></a>


| Name   | Token                                      | Desc                                  |
|--------|--------------------------------------------|---------------------------------------|
| ERC20  | 0x94566DB0987EcC816817F43d24E9d6bf29316392 | ERC asset in Ethereum                 |
| OEP4x  | 0x836c1Ad794F66A1a323567ae635D0Ce66Ed045D5 |                                       |
| ONGx   | 0xfC89307C880B203894cc7e1193fBf0bebd62c233 |                                       |
| ONTx   | 0xc0Be30D534e00bd485e10688023c9Cd9D523eEF0 |                                       |
| ETH    | 0x0000000000000000000000000000000000000000 |                                       |
| BTCx   | TODO                                       |                                       |
| NEOx   |                                            | not included in the testing framework |
###### [Back to top](DevNet.md#menu)

## Ontology  <a id="Ontology"></a>


| Name   | Token                                                                                          | Desc                                  |
|--------|------------------------------------------------------------------------------------------------|---------------------------------------|
| ERC20x | B: 2bd086d90c282a26d021d01039b84a968ed57444 <br> L: 4474d58e964ab83910d021d0262a280cd986d02b   |                                       |
| OEP4   | B: d6967fa9b11b0836ec9dc8572f4bab6f65d710f9 <br> L: f910d7656fab4b2f57c89dec36081bb1a97f96d6   |                                       |
| ONG    | B: 0200000000000000000000000000000000000000 <br> L: 0000000000000000000000000000000000000002   |                                       |
| ONT    | B: 0100000000000000000000000000000000000000 <br> L: 0000000000000000000000000000000000000001   |                                       |
| ETHx   | B: d6b4cd930377e7e81d1ace85bbb9ce59f4dd9410 <br> L: 1094ddf459ceb9bb85ce1a1de8e7770393cdb4d6   |                                       |
| BTCx   | B: d177d904456479dd592d4ce368e5d97ec8ffbcee <br> L: eebcffc87ed9e568e34c2d59dd79644504d977d1   |                                       |
| NEOx   | B:  <br> L:                                                                                    | not included in the testing framework |
###### [Back to top](DevNet.md#menu)

## Neo Legacy  <a id="Neo-Legacy"></a>


| Name   | Token                                                                                           | Desc |
|--------|-------------------------------------------------------------------------------------------------|------|
| pnUSDT | B:  0x20bc5bbb4dde06e5ca02bef761a9fdca6a05fd77 <br>L: 77fd056acafda961f7be02cae506de4dbb5bbc20  |      |

Receiver:A: AZXRTygHgRbPu9o16K6en4BaZD11tXCmN1 <br>B: 0x4fd83a49df40c0a7de2671da20c2a8dfe495b6c2 <br>L: c2b695e4dfa8c220da7126dea7c040df493ad84f
###### [Back to top](DevNet.md#menu)


## Neo N3  <a id="Neo-N3"></a>


| Name   | Token                                                                                            | Desc |
|--------|--------------------------------------------------------------------------------------------------|------|
| pnUSDT | B:  0xc9505566e11660d239d987b5522a2232665bd0a8 <br>L: a8d05b6632222a52b587d939d26016e1665550c9   |      |

Receiver: A: NLKpYEDmyGMWQVeqcoyZr9Lyo8P5Mrozba <br>B: 0x67ce818168a75d3bedb7d295bf11c060d1c38204 <br>L: 0482c3d160c011bf95d2b7ed3b5da7688181ce67
###### [Back to top](DevNet.md#menu)
## Note
`B` means big-endian, we can search the contract transaction history in corresponding explorer.

`L` means little-endian, we usually use it as the asset hash input when we do binding asset hash operation.
###### [Back to top](DevNet.md#menu)

## Cosmos-Gaia  <a id="Cosmos-Gaia"></a>


| Name   | Denom (coin name)  | Asset/Token  | Desc                                  |
|--------|--------------------|--------------|---------------------------------------|
| ERC20  | erc20x             | 657263323078 |                                       |
| OEP4x  | oep4x              | 6f65703478   |                                       |
| ONGx   | ongx               | 6f6e6778     |                                       |
| ONTx   | ontx               | 6f6e7478     |                                       |
| ETHx   | ethx               | 65746878     |                                       |
| BTCx   | btcx               | 62746378     |                                       |
| NEOx   | neox               | 6e656f78     | not included in the testing framework |
| GASx   | gasx               | 67617378     | not included in the testing framework |
| Cosmos | stake              | 7374616b65   | not included in the testing framework |


###### [Back to top](DevNet.md#menu)

## Pixie  <a id="Pixie"></a>


| Name      | Token                                      | Desc                                                                                                               |
|-----------|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| P11008713 | 0x2B5bAB0C9D94C380cf87F5B3033258b673FEFa65 | NFT Source asset contract hash                                                                                     |
| P11008713 | 0x94aa42C5dAB9b1006f59FF5E311344CC460A2335 | NFT Dest asset contract hash, this asset only used for testing, pixie chain is both of source chain and dest chain |

pixie test net rpc: https://http-testnet.chain.pixie.xyz <br>
pixie test net explorer: https://scan-testnet.chain.pixie.xyz/

###### [Back to top](DevNet.md#menu)

