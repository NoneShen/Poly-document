<h1 align="center">Integrate with Poly Bridge</h1>

When a chain uses `PolyNetwork` protocol to implement asset cross-chain function, it can choose to integrate into the `Poly Bridge` or use the [Poly Bridge API](#Poly-Bridge-API) to realize the cross-chain bridge.

This reference documents all the APIs provided by `Poly Bridge` and explains in detail how these api work.

## Poly Bridge API

* [POST getfee](#getfee)
* [POST transactionofhash](#transactionofhash)
* [POST transactionsofaddress](#transactionsofaddress)


### getfee

Get the cross-chain fee, the amount of assets that needs to be charged on the source chain when crossing to the target chain. When the user performs a cross-chain operation, the user's fee is charged on the source chain transaction.If SwapTokenHash is specified, the available balance is returned.

Request
```
https://bridge.poly.network/v1/getfee
```

BODY raw
```json
{
    "SrcChainId": 3,
    "SwapTokenHash": "ac654837a90eee8fccabd87a2d4fc7637484f01a", 
    "Hash": "ac654837a90eee8fccabd87a2d4fc7637484f01a",
    "DstChainId": 2
}
```
Example Request
```bash
curl POST 'https://bridge.poly.network/v1/getfee' \
--header 'Content-Type: application/json' \
--data-raw '{
    "SrcChainId": 3,
    "SwapTokenHash": "ac654837a90eee8fccabd87a2d4fc7637484f01a",
    "Hash": "ac654837a90eee8fccabd87a2d4fc7637484f01a",
    "DstChainId": 2
}'
```
Example Response
```json
{
    "SrcChainId": 3,
    "Hash": "ac654837a90eee8fccabd87a2d4fc7637484f01a",
    "DstChainId": 2,
    "UsdtAmount": "129.39344154493147826420255",
    "TokenAmount": "129.29900284",
    "TokenAmountWithPrecision": "1.2929900284624261112346408e+08",
    "SwapTokenHash": "ac654837a90eee8fccabd87a2d4fc7637484f01a",
    "Balance": "9.621970793238e+06",
    "BalanceWithPrecision": "9.621970793238e+12"
}
```
### transactionofhash
Get the cross-chain transaction details of the specified hash, and you can view the current cross-chain progress through the returned TransactionState.
Request
```
https://bridge.poly.network/v1/transactionofhash
```

BODY raw
```json
{
    "Hash": "4496cdb2905c148c06039a83d4130f04ddae498aa1065b06430ccd2766b08f78"
}
```
Example Request
```bash
curl POST 'https://bridge.poly.network/v1/transactionofhash' \
--header 'Content-Type: application/json' \
--data-raw '{
    "Hash": "4496cdb2905c148c06039a83d4130f04ddae498aa1065b06430ccd2766b08f78"
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
### transactionsofaddress

Get historical cross-chain transactions at the specified address.

Request
```
https://bridge.poly.network/v1/transactionsofaddress
```

BODY raw
```json
{
    "Addresses": [
        "6ac449ade24174238df325749bd5ea87b02bf7f6"
    ],
    "PageNo": 0,
    "PageSize": 10
}
```
Example Request
```bash
curl POST 'https://bridge.poly.network/v1/transactionsofaddress' \
--header 'Content-Type: application/json' \
--data-raw '{
    "Addresses": [
        "6ac449ade24174238df325749bd5ea87b02bf7f6"
    ],
    "PageNo": 0,
    "PageSize": 10
}'
```
Example Response
```json
{
    "PageSize": 10,
    "PageNo": 0,
    "TotalPage": 1,
    "TotalCount": 4,
    "Transactions": [
        {
            "Hash": "5cc2f4d6d1636ede5e9755326e160f9519a85d7dc86d110f8f86ae2ce6d71763",
            "User": "6ac449ade24174238df325749bd5ea87b02bf7f6",
            "SrcChainId": 6,
            "BlockHeight": 14518413,
            "Time": 1642647015,
            "DstChainId": 12,
            "FeeAmount": "0.00000428",
            "TransferAmount": "10",
            "DstUser": "6ac449ade24174238df325749bd5ea87b02bf7f6",
            "ServerId": 0,
            "State": 0,
            "Token": {
                "Hash": "34ba3af693d6c776d73c7fa67e2b2e79be8ef4ed",
                "ChainId": 6,
                "Name": "BALA",
                "Property": 1,
                "TokenBasicName": "BALA",
                "Precision": 18,
                "AvailableAmount": "312652822265190520569813011927",
                "TokenBasic": {
                    "Name": "BALA",
                    "Precision": 18,
                    "Price": "1.2e-07",
                    "Ind": 1,
                    "Time": 1644508861,
                    "Property": 1,
                    "Meta": "https://app.ont.io/poly/BALA.jpg",
                    "PriceMarkets": null,
                    "Tokens": null
                },
                "TokenMaps": null
            },
            "FeeToken": {
                "Hash": "0000000000000000000000000000000000000000",
                "ChainId": 6,
                "Name": "BNB",
                "Property": 1,
                "TokenBasicName": "BNB",
                "Precision": 18,
                "AvailableAmount": "8418401211022837352345",
                "TokenBasic": null,
                "TokenMaps": null
            },
            "TransactionState": [
                {
                    "Hash": "5cc2f4d6d1636ede5e9755326e160f9519a85d7dc86d110f8f86ae2ce6d71763",
                    "ChainId": 6,
                    "Blocks": 21,
                    "NeedBlocks": 21,
                    "Time": 1642647015
                },
                {
                    "Hash": "14260d677eea57af0afc20b27dd417616b8b8d5a58fc173100244edfe6752b34",
                    "ChainId": 0,
                    "Blocks": 1,
                    "NeedBlocks": 1,
                    "Time": 1642647093
                },
                {
                    "Hash": "5602281b697bf3d8064aa01cc82184d5fff56b732932d0cfc509c3deb6c95230",
                    "ChainId": 12,
                    "Blocks": 1,
                    "NeedBlocks": 1,
                    "Time": 1642647140
                }
            ]
        }
    ]
}
```
