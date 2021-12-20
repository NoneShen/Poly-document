<h1 align="center">Glossary</h1>

### Relayer

A relayer is a cross-chain information porter,  performs some of the most critical operations within the cross-chain. It acts as the medium of interaction between the side chain and the outside world. 

Each chain in the cross-chain ecosystem has a relayer associated with it. Relayer monitors its corresponding chain network for cross-chain transactions and forwards the respective block headers to the relay chain if detected, gaining available incentives in the process. At the same time, it also monitors for cross-chain transactions taking place on the relay chain and transfers them to the respective side chain.

### Side Chain

The term **side chain** refers to a chain that is interested in joining the cross-chain ecosystem

### Source Chain and Target Chain

Source chain and side chain are relative to a specific asset. A public chain is the source chain for a particular asset if the asset firstly appears in this public chain. Relatively, if we want to cross this asset into another public chain and issue a new token on this public chain, then this is the relative target chain. For instance:
```markdown
For the ether asset, Ethereum is the source chain. When we want to issue a new OEP4 token in 
Ontology network representing the ether, and the Ontology chain will be the side chain for 
the ether asset.
Vice versa, For the ONT token, the Ontology chain is the source chain. When we want to issue
a new ERC20 token in the Ethereum chain, Ethereum would be the side chain for the Ont network.
```

### Relay Chain/ Poly Chain/ Poly Relay Chain

PolyChain is one of the crucial components of the cross-chain ecosystem，Each different type of node is deployed and maintained by other individuals or organizations and has its unique governance and trust mechanism. The relay chain is responsible for connecting them, standardizing cross-chain data flow and interfaces, verifying the legitimacy of cross-chain data, etc.

### Canonical Block

A block is included in the primary blockchain and is directly or indirectly referenced by future blocks. Blocks that are not canonical may have been valid but were discarded in favor of the canonical block.

