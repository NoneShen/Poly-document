



### Register block Sync Method to Relayer

Block header synchronization includes two interface methods: **SyncGenesisHeader** and **SyncBlockHeader**. The former method will only be called once, while the latter is the core method for conducting the cross-chain event and will be called consistently by the relayer.

### Register Cross Chain Transaction management method to Relayer

Register the interface method **MakeDepositProposal** to relayer. This method is the key for handling cross-chain transactions, and it tells the relayers how to ensure the legitimacy of cross-chain transactions by Merkle proof.



