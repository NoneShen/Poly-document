<h1 align="center">Launch and Test</h1>

> [!NOTE]
> For now, `Poly Bridge` is deployed by the poly team.

## 1. Environmental Requirements:

- Make sure your device has got access to the Internet; 
- Make sure your device has installed and launched: golang>=1.17 and git.

## 2. Deploy Bridge Server and Bridge Http
Under the required environment, you can deploy bridge server and bridge http separately to launch your `Poly Bridge`.

### Step 1. Clone code
Firstly, you have to clone the core code from the remote repository of polynetwork. Run `git bash` in your assigned file and to do so:
```bash
git clone https://github.com/polynetwork/poly-bridge.git
```

### Step 2. Build binaries
Then build bridge server and bridge http binaries separately via:
```bash
# Compile the bridge server
go build -o bridge_server -tags testnet/mainnet ./cmd/

# Compile the bridge http
go build -o bridge_http -tags testnet/mainnet ./
```

### Step 3. Configuration
Make sure necessary configurations are specified in `config.json`
1. DBConfig
2. RedisConfig
3. ChainNodes
4. ChainListenConfig
5. FeeListenConfig
6. CoinPriceListenConfig

Here we provide a configuration example, and for more details, please refer to [here](https://github.com/polynetwork/poly-bridge/blob/master/conf/config_testnet.json)
```json
{
  "DBConfig": {
    "Debug": true,
    "URL": "localhost:3306",
    "Scheme": "poly",
    "User": "root",
    "Password": "123"
  },
  "RedisConfig": {
    "addr": "redis:6379",
    "password": "123",
    "proto": "tcp",
    "pool_size": 50,
    "min_idle_conns": 10,
    "dial_timeout": 2,
    "read_timeout": 2,
    "write_timeout": 2,
    "idle_timeout": 10,
    "expiration": 600
  },
  "ChainNodes": [
    {
      "ChainName": "Poly",
      "ChainId": 0,
      "Nodes": [
        {
          "Url": "http://124.156.226.204:20336"
        }
      ]
    },
    {
      "ChainName": "Ethereum",
      "ChainId": 2,
      "Nodes": [
        {
          "Url": "https://ropsten.infura.io/v3/xxx"
        }
      ]
    }
  ],
  "ChainListenConfig": [
    {
      "ChainName": "Poly",
      "ChainId": 0,
      "ListenSlot": 1,
      "Defer": 1,
      "BatchSize": 5,
      "CCMContract": "0300000000000000000000000000000000000000"
    },
    {
      "ChainName": "Ethereum",
      "ChainId": 2,
      "ListenSlot": 5,
      "Defer": 1,
      "BatchSize": 5,
      "WrapperContract": [
        "e498fb7D00468a67A79dE5D4Ca264d3350165280",
        "Dc37471Af6a8aB7f45F444c5a3Ef4758281bE32C"
      ],
      "CCMContract": "f989E80AAd477cB6059f366C0170a498909C4a55",
      "ProxyContract": [
        "D8aE73e06552E270340b63A8bcAbf9277a1aac99"
      ],
      "SwapContract": "1E7A3e54494F300dC66181621E23eE657E22D725",
      "NFTWrapperContract": [
        "940300dc3Fc26e3A330a300be766184C0b5Fe019"
      ],
      "NFTProxyContract": [
        "9bEF1AE7304D3d2F344ea00e796ADa18cE1beb03"
      ],
      "NFTQueryContract": "500674D603331C43ed2288834BAb284BF65fc076"
    }
  ],
  "FeeListenConfig": [
    {
      "ChainId": 2,
      "ChainName": "Ethereum",
      "GasLimit": 120000,
      "ProxyFee": 120,
      "MinFee": 80
    }
  ],
  "CoinPriceListenConfig": [
    {
      "MarketName": "coinmarketcap",
      "Nodes": [
        {
          "Url": "https://pro-api.coinmarketcap.com/v1/cryptocurrency/",
          "Key": "xxx"
        }
      ]
    },
    {
      "MarketName": "binance",
      "Nodes": [
        {
          "Url": "https://api1.binance.com/"
        }
      ]
    }
  ]
}
```

### Step 4. Run
Now you can launch and run the two functions:
```bash
./bridge_server --config config.json
./bridge_http --config config.json
```

### Step 5. Test
There are detailed unit tests in the code repository, which can be tested as needed before the service starts.
And after the service starts, you need to check the log for errors, such as program panic, node connection failure, etc. 
Additionally you need to pay attention to whether the monitoring height of the chain increases normally. 
