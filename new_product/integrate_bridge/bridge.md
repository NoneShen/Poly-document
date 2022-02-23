<h1 align="center">API</h1>

> [!Note|style:flat|label:Notice]
>The following APIs are used by developers who need to implement the bridge function themselves. If you want to integrate into the poly bridge, please get in touch with the `poly team` via <a href="mailto:contact@poly.network">contact@poly.network</a> or https://discord.com/invite/y6MuEnq for more support.


## Poly Bridge APIs:

- [Get cross chain fee](#Get-cross-chain-fee)
- [Get cross chain transaction status](#Get-the-cross-chain-transaction-status)
- [Get history transactions of address](#Get-history-transactions-of-address)
- [Get token basics information](#Get-token-basics-information)
- [Get token mapping relationship between different chains](#Get-token-mapping-relationship-between-different-chains)
- [Get the expected cross chain duration](#Get-the-expected-cross-chain-duration)


### Get cross chain fee

This API returns the amount of assets as cross-chain fee that needs to be charged on the source chain when crossing to the target chain.  
When the user performs a cross-chain operation, the user's fee is charged on the source chain transaction.If SwapTokenHash is specified, the available balance is returned.

API
```
Testnet: https://bridge.poly.network/testnet/v1/getfee
Mainnet: https://bridge.poly.network/v1/getfee
```

Parameter
```
/* @SrcChainId:    source chian id
 * @SwapTokenHash: the hahs of the cross-chain token on the source chain
 * @Hash: The token hash used to charge fees
 * @DstChainId: target chain id
*/
```
Example Request
```bash
curl --location --request POST 'https://bridge.poly.network/testnet/v1/getfee' \
--header 'Content-Type: application/json' \
--data-raw '{
    "SrcChainId": 2,
    "SwapTokenHash": "0d9c8723b343a8368bebe0b5e89273ff8d712e3c",
    "Hash": "0000000000000000000000000000000000000000",
    "DstChainId": 3
}'
```
Example Response
```json
{
  "SrcChainId": 2,
  "Hash": "0000000000000000000000000000000000000000",
  "DstChainId": 3,
  "UsdtAmount": "0.1874142096",
  "TokenAmount": "0.00006131",
  "TokenAmountWithPrecision": "6.1318011405463236515e+13",
  "SwapTokenHash": "0d9c8723b343a8368bebe0b5e89273ff8d712e3c",
  "Balance": "2.9553450781056623353e+41",
  "BalanceWithPrecision": "2.9553450781056623352e+47"
}
```
### Get the cross chain transaction status
This API returns the details of the specified hash, you can view the cross-chain progress through the `TransactionState` in the response.  

API
```
Testnet: https://bridge.poly.network/testnet/v1//transactionofhash
Mainnet: https://bridge.poly.network/v1/transactionofhash
```

Parameter
```
/*
 * @Hash: the cross chain transaction hash
*/


```
Example Request
```bash
curl --location --request POST 'https://bridge.poly.network/testnet/v1//transactionofhash' \
--header 'Content-Type: application/json' \
--data-raw '{
    "Hash": "0b2c42b35e811b973c1d9258214cc68e63059271256bfb89239198cd1a7bda98"
}'
```
Example Response
```json
{
    "Hash": "4496cdb2905c148c06039a83d4130f04ddae498aa1065b06430ccd2766b08f78",
    "User": "547f1e7f552ec9701a8a4b4c30c6bbf3fff513cf",
    "SrcChainId": 7,
    "BlockHeight": 12538043,
    "Time": 1644508161,
    "DstChainId": 6,
    "FeeAmount": "2.59436134",
    "TransferAmount": "21926.387813549774936158",
    "DstUser": "bc7128144f31da5a1eff7c79e86d6c0b01af3de6",
    "ServerId": 0,
    "State": 0,
    "Token": {
        "Hash": "25d2e80cb6b86881fd7e07dd263fb79f4abe033c",
        "ChainId": 7,
        "Name": "MDX",
        "Property": 1,
        "TokenBasicName": "MDX",
        "Precision": 18,
        "AvailableAmount": "21578714598525328008311694",
        "TokenBasic": {
            "Name": "MDX",
            "Precision": 18,
            "Price": "0.28673118",
            "Ind": 1,
            "Time": 1644508861,
            "Property": 1,
            "Meta": "https://app.ont.io/poly/mdx.svg",
            "PriceMarkets": null,
            "Tokens": null
        },
        "TokenMaps": null
    },
    "FeeToken": {
        "Hash": "25d2e80cb6b86881fd7e07dd263fb79f4abe033c",
        "ChainId": 7,
        "Name": "MDX",
        "Property": 1,
        "TokenBasicName": "MDX",
        "Precision": 18,
        "AvailableAmount": "21578714598525328008311694",
        "TokenBasic": null,
        "TokenMaps": null
    },
    "TransactionState": [
        {
            "Hash": "4496cdb2905c148c06039a83d4130f04ddae498aa1065b06430ccd2766b08f78",
            "ChainId": 7,
            "Blocks": 21,
            "NeedBlocks": 21,
            "Time": 1644508161
        },
        {
            "Hash": "e93416eac8f52b9e1d7523ebecceb901b6cddb08d6c0e851903e52094f92cb77",
            "ChainId": 0,
            "Blocks": 1,
            "NeedBlocks": 1,
            "Time": 1644508259
        },
        {
            "Hash": "8d9cfefed98e22015f6baab9ab5abb9b33e8ca2b70003a774f12a90a8bb65273",
            "ChainId": 6,
            "Blocks": 1,
            "NeedBlocks": 1,
            "Time": 1644508270
        }
    ]
}
```
### Get history transactions of address

This api returns the cross-chain history of the specified address

API
```
Testnet: https://bridge.poly.network/testnet/v1/transactionsofaddress
Mainnet: https://bridge.poly.network/v1/transactionsofaddress
```

Parameter
```
/* @Addresses: wallet address
 * @PageNo: start page
 * @PageSize: size of displays per page
*/
```
Example Request
```bash
curl --location --request POST 'https://bridge.poly.network/testnet/v1/transactionsofaddress' \
--header 'Content-Type: application/json' \
--data-raw '{
    "Addresses": [
        "93aea6537acd6c10ed76ea8eb367c2ae4cfa2282"
    ],
    "PageNo": 0,
    "PageSize": 10
}'
```
Example Response
```json
{
  "PageSize": 1,
  "PageNo": 0,
  "TotalPage": 1,
  "TotalCount": 1,
  "Transactions": [
    {
      "Hash": "0b2c42b35e811b973c1d9258214cc68e63059271256bfb89239198cd1a7bda98",
      "User": "aecb8dff86f198ad3a812a00035438e553b230bd",
      "SrcChainId": 88,
      "BlockHeight": 1163947,
      "Time": 1644997356,
      "DstChainId": 7,
      "FeeAmount": "0.00023409",
      "TransferAmount": "1.23",
      "DstUser": "93aea6537acd6c10ed76ea8eb367c2ae4cfa2282",
      "ServerId": 0,
      "State": 0,
      "Token": {
        "Hash": "d2a4cff31913016155e38e474a2c06d08be276cf",
        "ChainId": 88,
        "Name": "GAS",
        "Property": 1,
        "TokenBasicName": "GAS",
        "Precision": 8,
        "AvailableAmount": "39455668193977",
        "TokenBasic": {
          "Name": "GAS",
          "Precision": 8,
          "Price": "5.50686187",
          "Ind": 1,
          "Time": 1645095305,
          "Property": 1,
          "Meta": "",
          "PriceMarkets": null,
          "Tokens": null
        },
        "TokenMaps": null
      },
      "FeeToken": {
        "Hash": "d2a4cff31913016155e38e474a2c06d08be276cf",
        "ChainId": 88,
        "Name": "GAS",
        "Property": 1,
        "TokenBasicName": "GAS",
        "Precision": 8,
        "AvailableAmount": "39455668193977",
        "TokenBasic": null,
        "TokenMaps": null
      },
      "TransactionState": [
        {
          "Hash": "0b2c42b35e811b973c1d9258214cc68e63059271256bfb89239198cd1a7bda98",
          "ChainId": 88,
          "Blocks": 1,
          "NeedBlocks": 1,
          "Time": 1644997356
        },
        {
          "Hash": "331287ddc15029faa160dcf3846a57471d21b7b817fabbcd87e3fe4b80d89130",
          "ChainId": 0,
          "Blocks": 1,
          "NeedBlocks": 1,
          "Time": 1644997377
        },
        {
          "Hash": "42e45d1bdddc9bd3b63979676fd99f928fa741ea28a806cf385c001ac36ba101",
          "ChainId": 7,
          "Blocks": 1,
          "NeedBlocks": 1,
          "Time": 1644997384
        }
      ]
    }
  ]
}
```
### Get token basics information

This api returns the basic information of the token, including price, precision, meta data and the token information mapped on each chain.

API
```
Testnet: https://bridge.poly.network/testnet/v1/tokenbasics
Mainnet: https://bridge.poly.network/v1/tokenbasics
```

Parameter
```
none
```
Example Request
```bash
curl --location --request POST 'https://bridge.poly.network/testnet/v1/tokenbasics'
```
Example Response
```json
{
  "TotalCount": 2,
  "TokenBasics": [
    {
      "Name": "8PAY",
      "Precision": 18,
      "Price": "1",
      "Ind": 1,
      "Time": 0,
      "Property": 1,
      "Meta": "https://app.ont.io/poly/8pay.jpg",
      "PriceMarkets": null,
      "Tokens": [
        {
          "Hash": "48abb7954b5bc46be41cc444e731f9d03aa33feb",
          "ChainId": 79,
          "Name": "8pay",
          "Property": 1,
          "TokenBasicName": "8PAY",
          "Precision": 18,
          "AvailableAmount": "28254867780000000000",
          "TokenBasic": null,
          "TokenMaps": null
        },
        {
          "Hash": "aa00fbcface6ff4913cc8322b12f63e2ad45d448",
          "ChainId": 2,
          "Name": "8pay",
          "Property": 1,
          "TokenBasicName": "8PAY",
          "Precision": 18,
          "AvailableAmount": "71745132220000000000",
          "TokenBasic": null,
          "TokenMaps": null
        }
      ]
    }
  ]
}
```

### Get token mapping relationship between different chains

This api returns the target chain mapping relationship of the token on the source chain.
API
```
Testnet: https://bridge.poly.network/testnet/v1/tokenmap
Mainnet：https://bridge.poly.network/v1/tokenmap
```

Parameter
```
/* @ChainId: source chain id
 * @Hash: source token hash
*/
```
Example Request
```bash
curl --location --request POST 'https://bridge.poly.network/testnet/v1/tokenmap' \
--header 'Content-Type: application/json' \
--data-raw '{
    "ChainId": 79,
    "Hash": "48abb7954b5bc46be41cc444e731f9d03aa33feb"
}'
```
Example Response
```json
{
  "TotalCount": 1,
  "TokenMaps": [
    {
      "SrcTokenHash": "48abb7954b5bc46be41cc444e731f9d03aa33feb",
      "SrcToken": {
        "Hash": "48abb7954b5bc46be41cc444e731f9d03aa33feb",
        "ChainId": 79,
        "Name": "8pay",
        "Property": 1,
        "TokenBasicName": "8PAY",
        "Precision": 18,
        "AvailableAmount": "28254867780000000000",
        "TokenBasic": null,
        "TokenMaps": null
      },
      "DstTokenHash": "aa00fbcface6ff4913cc8322b12f63e2ad45d448",
      "DstToken": {
        "Hash": "aa00fbcface6ff4913cc8322b12f63e2ad45d448",
        "ChainId": 2,
        "Name": "8pay",
        "Property": 1,
        "TokenBasicName": "8PAY",
        "Precision": 18,
        "AvailableAmount": "71745132220000000000",
        "TokenBasic": null,
        "TokenMaps": null
      },
      "Property": 1
    }
  ]
}
```


### Get the expected cross chain duration

This api returns the expected duration from the source chain to the target chain

API
```
Testnet: https://bridge.poly.network/testnet/v1/expecttime
Mainnet：https://bridge.poly.network/v1/expecttime
```

Parameter
```
/* @SrcChainId: source chain id
 * @DstChainId: target token hash
*/
```
Example Request
```bash
curl --location --request POST 'https://bridge.poly.network/testnet/v1/expecttime' \
--header 'Content-Type: application/json' \
--data-raw '{
    "SrcChainId": 79,
    "DstChainId": 2
}'
```
Example Response
```json
{
  "TotalCount": 1,
  "TokenMaps": [
    {
      "SrcTokenHash": "48abb7954b5bc46be41cc444e731f9d03aa33feb",
      "SrcToken": {
        "Hash": "48abb7954b5bc46be41cc444e731f9d03aa33feb",
        "ChainId": 79,
        "Name": "8pay",
        "Property": 1,
        "TokenBasicName": "8PAY",
        "Precision": 18,
        "AvailableAmount": "28254867780000000000",
        "TokenBasic": null,
        "TokenMaps": null
      },
      "DstTokenHash": "aa00fbcface6ff4913cc8322b12f63e2ad45d448",
      "DstToken": {
        "Hash": "aa00fbcface6ff4913cc8322b12f63e2ad45d448",
        "ChainId": 2,
        "Name": "8pay",
        "Property": 1,
        "TokenBasicName": "8PAY",
        "Precision": 18,
        "AvailableAmount": "71745132220000000000",
        "TokenBasic": null,
        "TokenMaps": null
      },
      "Property": 1
    }
  ]
}
```