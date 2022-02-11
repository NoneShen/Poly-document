<h1 align="center">Launch Poly Bridge</h1>

## 1. Environmental Requirements

- The computer where poly bridge is deployed needs to have access to the Internet;
- The computer where poly bridge is deployed needs to have the following software installed: golang>=1.17 and git.

## 2. Deploy Bridge Server and Bridge Http
The poly bridge backend consists of two parts, bridge server and bridge http, which are deployed independently.

### Step 1. Clone code
```bash
git clone https://github.com/polynetwork/poly-bridge.git
```

### Step 2. Build binaries
```bash
# Compile the bridge server
go build -o bridge_server -tags testnet/mainnet ./cmd/

# Compile the bridge http
go build -o bridge_http -tags testnet/mainnet ./
```

### Step 3. Configuration 
* Make sure necessary configuration is specifed in `config.json` [Sample](https://github.com/polynetwork/poly-bridge/blob/master/conf/config_testnet.json)
1. DBConfig
2. RedisConfig
3. ChainNodes
4. ChainListenConfig
5. FeeListenConfig
6. CoinPriceListenConfig

### Step 4. Run
```bash
./bridge_server --config config.json
./bridge_http --config config.json
```


