<h1 align="center">FAQ</h1>


## About PolyNetwork Ecosystem

- Q1: What is PolyNetwork? How does PolyNetwork work?
- A: 
####
- Q2: How many kinds of chains does PolyNetwork support?
- A: 
####
- Q3: How to integrate the chain to PolyNetwork ecosystem?
- A:
####
- Q4: How to establish the product on PolyNetwork ecosystem?
- A:
- subQ4: How to interact with PolyNetwork protocol?
- subA4: 
####
- Q5: What features PolyNetwork can provide?
- A:
####
- Q6: Is PolyNetwork a kind of open source?
- A: 

## About PolyBridge

####<img alt="img_7.png" height="35pcs" src="img_7.png" width="35pcs"/>When you first meet PolyBridge, you may concern:
- Q: What is PolyBridge? What functions does it provide? Where is the website?
- A: PolyBridge is a bridge through which you can transfer your asset (include tokens and NFTs) between different chains easily and quickly.

#### <img alt="img_4.png" height="35pcs" src="img_4.png" width="35pcs"/> If you are a developer, you may concern:

- Q1: What kind of pairs are available on the PolyBridge?
- A: Here is an interface (Link) provided for querying pairs on PolyBridge
####
- Q2: How to integrate token onto PolyBridge？
- A: Here is a tutorial (Link) instructing developers to integrate token onto PolyBridge.
####
- Q3: Any kind
- A:
####
- Q4: Where can I find the contract? 
- A: Here is an appendix (Link) that includes basic contracts and some business contracts deployed and used by PolyNetwork, please go to check it. 

 #### <img alt="img_8.png" height="35pcs" src="img_8.png" width="35pcs"/> If you are a user, you may concern:

- Q1: How to transfer my asset between two chains through PolyBridge?
- A: Here are detailed manuals (Link) for users to transfer asset, please go to check.
####
- Q2: How much will PolyBridge charge for per transaction?
- A: It depends upon the network you are sending from and to. The fee PolyBridge charges is just used for covering gas fee to target chain, no extra fee. The fee paid via PolyBridge is for covering gas fee charged by target chain. No extra fee charged by PolyBridge.
####
- Q3: How long does it take for per transaction?
- A: Average estimated time of arrival is 1-10 min. Irresistible factors might delay the transaction, such as network congestion. If your transaction hasn’t been competed for a long time, here is a solution provided for you, please see Q7.
####
- Q4: Where can I find my transaction before?
- A: You can check your transaction in "History".
####
- Q5: Is the bridge rate 1:1 ?
- A: Yes, but except for deflationary tokens, due to the characteristics of the token, not caused by PolyBridge.
####
- Q6：When I encounter an error in the wallet,what can I do?
- A: First, make sure you have approved enough amount for PolyBridge contract to use the token;
  Second, make sure you have sufficient native tokens to pay the gas fee on the source chain.It should be noted that the amount of native tokens should not be included in the fee you paid for PolyBridge and the amount you plan to transfer. For example, if you want to transfer $metis from metis chain to bsc chain, you may not transfer all $metis you own, you have to set aside two portion of the money, one to pay PolyBridge for target chain gas fee, the other to pay source chain gas fee. The rest is the money you can transfer.
  Third, if not the problem mentioned above, please contact PolyBridge team.
####
- Q7: I have waited a long time and still didn't receive my asset, what can I do?
- A: First, please check what step your transaction have reached. Different steps have different solution,see below.
- Transaction has not completed in src chain：For safety, Poly Bridge will not confirm your transaction immediately until subsequent blocks have been confirmed( the number of subsequent blocks according to different chains), please wait for blocks confirmation.
- Transaction has been completed in src chain, but not completed in Poly: if the transaction is stuck in this way over 5 min, please do not hesitate to contact the PolyBridge Team.
- Transaction has been completed in src chain and Poly, but not completed in target chain: the reason may be that the target chain transaction is congested, please wait, or refer to the accelerated transaction tutorial. If the accelerated tutorial doesn't work, please contact the PolyBridge team.
####
- Q8: How can I check what step my transaction goes?
- A: Click “History” in the PolyBridge to find the transaction and then click “Status” to check the progress.
####
- Q9: Why for the same token, src chain and the target chain, other people's transactions have arrived, but mine has not?
- A: First, if you are not through PolyBridge page to process your transaction, please make sure you have paid enough fee to PolyBridge, you can check it by calling “check fee” api; if you do not pay enough, it is recommended that you use the acceleration function to process target chain transaction.
  Second, if you have already paid or try to accelerate but fail, please contact the PolyBridge team.
####
- Q10:Why does the target chain have sufficient liquidity before sending the transaction, but after the transaction beinb sent, I have been told that the target chain has insufficient liquidity and that I needto wait?
- A:First, the liquidity shown on PolyBridge is shared for all users. This means that if there are serveral users making large transactions at the same time, there will be liquidity competition leading to insufficient liquidity. Thismay happens when the amount you are transferring is close to the max available amount. Under this occasion, PolyBridge will contact the relevent project for liquidity replenishment as soon as possible, please be patient.
####
- Q11:Can I use PolyBridge by mobile phone?
- A:Of course, here is a manual for mobile users.
####
- Q12: When here encounters an “unknow wallet error”,what can I do?
- A: First, check whether the currently connected network is stable, which can be observed by switching nodes.
####
- Q13:I encountered an error submitting an accelerated transaction, what can I do?
- A: First, please do not submit the error accelerated transaction. This error means the transaction has been completed in target chain. Please turn back to your wallet to check the balance. If not receiving, please contact with us.
####
#### <img alt="img_6.png" height="35pcs" src="img_6.png" width="105pcs"/> Some critical concerned:
- Q1: Are PolyBridge's smart contracts audited?
- A:
####
- Q2: Is the bridge decentralized?
- A:
####
- Q3: Who or where can I ask for help when I crush a problem?
- A:


