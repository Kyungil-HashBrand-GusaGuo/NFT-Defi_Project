# π’ ZOLARAND - NFT Defi Project

## π νλ‘μ νΈ μ§ν κΈ°κ°
2022.06.02(λͺ©) ~ 2022.07.25(μ) (54μΌκ° μ§ν)
</br>
κ²½μΌκ²μ μμΉ΄λ°λ―Έ λΈλ‘μ²΄μΈ 4κΈ° κΈ°μνμ½ νλ‘μ νΈ(with HashBrand)

</br>


## π ZOLALAND - νλ‘μ νΈ κ°μ
---
### NFT & DEFI & P2E   ν΅ν©νλ«νΌ
NFT Minting, Buy & Sell, Staking, κ°λ¨ν P2E μμ€νμ΄ μ λͺ©λ ν΅ν© BlockChain Dapp κ΅¬μΆ

### Holder BeneFit
NFT λ³΄μ μλ P2E, Staking μμ€νμ μ΄μ©νμ¬ λ°νλ ZLT, GZLT ν ν°μ νλ, μ΄λ‘ μΈν μ§μμ μΈ μμ΅ μ°½μΆμ΄ κ°λ₯   

### μ κ·Ήμ μΈ μ°Έμ¬ λ³΄μ
κ²μμ μ°Έμ¬νλ©΄μ μ»μ κ²μ ν¬μΈνΈλ‘ λ­νΉκΆ Holder μκ² λ§€μ£Ό λ€μν NFT λ³΄μ μ§κΈ
</br>

## π© μ£Όμ κΈ°λ₯
---
- ### KaiKas μ§κ°μ°κ²°
- ### PFP μνΈ μμ±
- ### NFT Minting
- ### NFT Marketplace
- ### NFT Staking System
- ### Token Swap
- ### P2E κ²μ μ°λ
- ### κ²μ Token Reward
- ### NFT AirDrop

</br>

## β μ£Όμ κΈ°μ 
---

**Backend - Express.js**
- Visual Studio Code
- Node.js 16.14
- MariaDB

**BlockChain - Ethereum**
- Solidity 0.4.22 < 0.9.0
- openzeppelin/contracts
- Truffle

**Storage**
- IPFS
- IPFS-Cluster

**Frontend**
- React
- Redux, Redux-thunk
- caver.js

## β νμ ν΄
---
- Github
- Notion
- Discord
- Gather Town

## β νλ‘μ νΈ κ΅¬μ‘°
---
![image](https://user-images.githubusercontent.com/93761302/180718765-a4208ff8-8e3d-45aa-ae85-57f61962bdf1.png)


## β νλ‘μ νΈ νμΌ κ΅¬μ‘°
---
### Frontend
```
ββfrontend
β  β  .gitignore
β  β  config-overrides.js
β  β  package-lock.json
β  β  package.json
β  β  yarn.lock
β  β
β  ββpublic
β  β  β  favicon.ico
β  β  β  index.html
β  β  β
β  β  ββimg
β  β          1.png
β  β          ...
β  β          cover.jpg
β  β
β  ββsrc
β      β  App.css
β      β  App.js
β      β  caverConfig.js
β      β  index.js
β      β  reportWebVitals.js
β      β  service-worker.js
β      β  serviceWorker.js
β      β
β      ββcomponents
β      β  β  index.js
β      β  β
β      β  ββAdminpage
β      β  β      AirdropModal.css
β      β  β      AirdropModal.js
β      β  β
β      β  ββAllMintPage
β      β  β      AllCardList.css
β      β  β      AllCardList.js
β      β  β
β      β  ββBuyPage
β      β  β      BuyModal.js
β      β  β
β      β  ββGamePage
β      β  β  β  SelectGameNftModal.css
β      β  β  β  SelectGameNftModal.js
β      β  β  β  Timer.js
β      β  β  β
β      β  β  ββBlackJackGame
β      β  β  β  ββButtons
β      β  β  β  β      buttons.js
β      β  β  β  β      Chip.css
β      β  β  β  β      Chip.js
β      β  β  β  β      StyledButton.js
β      β  β  β  β
β      β  β  β  ββCard
β      β  β  β  β      Card.css
β      β  β  β  β      Card.js
β      β  β  β  β      CardList.js
β      β  β  β  β      StarterCard.js
β      β  β  β  β
β      β  β  β  ββModal
β      β  β  β          BlackJackGameSetModal.js
β      β  β  β
β      β  β  ββCardGame
β      β  β  β      GameModal.css
β      β  β  β      GameOverModal.js
β      β  β  β      GameSetModal.js
β      β  β  β      SingleCard.css
β      β  β  β      SingleCard.js
β      β  β  β
β      β  β  ββHangmanGame
β      β  β          GameOutcome.js
β      β  β          Hangman.js
β      β  β          HangmanGameSetModal.js
β      β  β          WordAndAlphabet.js
β      β  β          wordBank.js
β      β  β
β      β  ββglobal
β      β  β      Footer.css
β      β  β      Footer.js
β      β  β      Navbar.css
β      β  β      Navbar.js
β      β  β      SwapActModal.css
β      β  β      SwapActModal.js
β      β  β      SwapGzltModal.js
β      β  β      SwapModal.css
β      β  β      SwapModal.js
β      β  β
β      β  ββMainPage
β      β  β      Gallery.css
β      β  β      Gallery.js
β      β  β      MainTitle.css
β      β  β      MainTitle.js
β      β  β      Partners.css
β      β  β      Partners.js
β      β  β      RoadMap.css
β      β  β      RoadMap.js
β      β  β      Story.css
β      β  β      Story.js
β      β  β      TeamIntro.css
β      β  β      TeamIntro.js
β      β  β
β      β  ββMarketPage
β      β  β      DropDown.js
β      β  β
β      β  ββMyPage
β      β  β      MyCardList.css
β      β  β      MyCardList.js
β      β  β
β      β  ββPreMintingpage
β      β  β      LeftMintingSection.css
β      β  β      LeftMintingSection.js
β      β  β      MintingModal.css
β      β  β      MintingModal.js
β      β  β      RightMintingSection.css
β      β  β      RightMintingSection.js
β      β  β
β      β  ββSellPage
β      β  β      CancelSellModal.js
β      β  β      SellModal.css
β      β  β      SellModal.js
β      β  β
β      β  ββStakingPage
β      β          ClaimModal.js
β      β          Modal.css
β      β          StakingModal.js
β      β          UnStakingModal.js
β      β
β      ββconstants
β      β      CardInfo.js
β      β
β      ββimages
β      β  β  10.png
β      β  β  ...
β      β  β  ThumNail1.png
β      β  β
β      β  ββblackjack
β      β  β      half.png
β      β  β      hundred.png
β      β  β      logo.png
β      β  β      onek.png
β      β  β      quart.png
β      β  β      ten.png
β      β  β
β      β  ββhangmang
β      β  β      0.png
β      β  β      ...
β      β  β      6.png
β      β  β
β      β  ββmainsilder
β      β          1.png
β      β          ...
β      β          20.png
β      β
β      ββpages
β      β      AdminPage.css
β      β      AdminPage.js
β      β      AllMintPage.css
β      β      AllMintPage.js
β      β      BlackJackGame.css
β      β      BlackJackGame.js
β      β      BuyPage.css
β      β      BuyPage.js
β      β      CardGame.css
β      β      CardGame.js
β      β      GameMainPage.css
β      β      GameMainPage.js
β      β      HangManGame.css
β      β      HangManGame.js
β      β      MainPage.css
β      β      MainPage.js
β      β      MarketPage.css
β      β      MarketPage.js
β      β      MyPage.css
β      β      MyPage.js
β      β      NotFound.css
β      β      NotFound.js
β      β      PreMintingPage.css
β      β      PreMintingPage.js
β      β      SellPage.css
β      β      SellPage.js
β      β      StakingPage.css
β      β      StakingPage.js
β      β      _index.js
β      β
β      ββredux
β          β  api.js
β          β  pinataApi.js
β          β  store.js
β          β
β          ββactions
β          β      addWhiteListAccount.js
β          β      BlackBetAction.js
β          β      BlackCardAction.js
β          β      blackjackGameAction.js
β          β      buyingAction.js
β          β      cancelSellingAction.js
β          β      collectionAction.js
β          β      connectAccount.js
β          β      deleteWhiteListAccount.js
β          β      gameViewAction.js
β          β      hangmanGameAction.js
β          β      marketAction.js
β          β      mintingCount.js
β          β      mypageAction.js
β          β      preMintingAction.js
β          β      rewardEditionGetAction.js
β          β      rewardEditionSetAction.js
β          β      sellingAction.js
β          β      stakingAction.js
β          β      stakingCancelAction.js
β          β      stakingRewardAction.js
β          β      stakingViewAction.js
β          β      swapAction.js
β          β      swapGzltAction.js
β          β      swapModalAction.js
β          β      timerAction.js
β          β      timerGetAction.js
β          β      timerPostAction.js
β          β      whiteMintingAction.js
β          β
β          ββreducer
β                  accountReducer.js
β                  BlackBetReducer.js
β                  gameReducer.js
β                  index.js
β                  mintingReducer.js
β                  stakingViewReducer.js
β                  transactionReducer.js
```
### Backend
```
ββbackend
β  β  db.js
β  β  db.sql
β  β  package-lock.json
β  β  package.json
β  β  server.js
β  β
β  ββcontracts
β  β      game.js
β  β      randomZolaman.js
β  β      SaleJolaman.js
β  β      setData.js
β  β      stakeSystem.js
β  β
β  ββroutes
β      β  index.js
β      β
β      ββblock
β      β      game.controller.js
β      β      index.js
β      β      randomZolaman.controller.js
β      β      saleZolaman.controller.js
β      β      setData.controller.js
β      β      stakeSystem.controler.js
β      β
β      ββdata
β              data.controller.js
β              index.js
```
### BlockChain
```
ββ.deps
β  ββnpm
β      ββ@openzeppelin
β      β  ββcontracts
β      β  β  ββaccess
β      β  β  β      AccessControl.sol
β      β  β  β      IAccessControl.sol
β      β  β  β      Ownable.sol
β      β  β  β
β      β  β  ββinterfaces
β      β  β  β      draft-IERC1822.sol
β      β  β  β
β      β  β  ββproxy
β      β  β  β  β  Proxy.sol
β      β  β  β  β
β      β  β  β  ββbeacon
β      β  β  β  β      BeaconProxy.sol
β      β  β  β  β      IBeacon.sol
β      β  β  β  β      UpgradeableBeacon.sol
β      β  β  β  β
β      β  β  β  ββERC1967
β      β  β  β          ERC1967Upgrade.sol
β      β  β  β
β      β  β  ββtoken
β      β  β  β  ββERC20
β      β  β  β  β  β  ERC20.sol
β      β  β  β  β  β  IERC20.sol
β      β  β  β  β  β
β      β  β  β  β  ββextensions
β      β  β  β  β          ERC20Burnable.sol
β      β  β  β  β          IERC20Metadata.sol
β      β  β  β  β
β      β  β  β  ββERC721
β      β  β  β      β  ERC721.sol
β      β  β  β      β  IERC721.sol
β      β  β  β      β  IERC721Receiver.sol
β      β  β  β      β
β      β  β  β      ββartifacts
β      β  β  β      β      IRewardToken.json
β      β  β  β      β      IRewardToken_metadata.json
β      β  β  β      β      StakingSystem.json
β      β  β  β      β      StakingSystem_metadata.json
β      β  β  β      β
β      β  β  β      ββextensions
β      β  β  β      β      ERC721Burnable.sol
β      β  β  β      β      ERC721Enumerable.sol
β      β  β  β      β      IERC721Enumerable.sol
β      β  β  β      β      IERC721Metadata.sol
β      β  β  β      β
β      β  β  β      ββutils
β      β  β  β              ERC721Holder.sol
β      β  β  β
β      β  β  ββutils
β      β  β      β  Address.sol
β      β  β      β  Context.sol
β      β  β      β  Counters.sol
β      β  β      β  StorageSlot.sol
β      β  β      β  Strings.sol
β      β  β      β
β      β  β      ββintrospection
β      β  β      β      ERC165.sol
β      β  β      β      IERC165.sol
β      β  β      β
β      β  β      ββmath
β      β  β              SafeMath.sol
β      β  β
β      β  ββcontracts-upgradeable
β      β      ββaccess
β      β      β      OwnableUpgradeable.sol
β      β      β
β      β      ββproxy
β      β      β  ββutils
β      β      β          Initializable.sol
β      β      β
β      β      ββtoken
β      β      β  ββERC20
β      β      β  β  β  ERC20Upgradeable.sol
β      β      β  β  β  IERC20Upgradeable.sol
β      β      β  β  β
β      β      β  β  ββextensions
β      β      β  β          IERC20MetadataUpgradeable.sol
β      β      β  β
β      β      β  ββERC721
β      β      β      β  ERC721Upgradeable.sol
β      β      β      β  IERC721ReceiverUpgradeable.sol
β      β      β      β  IERC721Upgradeable.sol
β      β      β      β
β      β      β      ββextensions
β      β      β              ERC721EnumerableUpgradeable.sol
β      β      β              ERC721URIStorageUpgradeable.sol
β      β      β              IERC721EnumerableUpgradeable.sol
β      β      β              IERC721MetadataUpgradeable.sol
β      β      β
β      β      ββutils
β      β          β  AddressUpgradeable.sol
β      β          β  ContextUpgradeable.sol
β      β          β  StringsUpgradeable.sol
β      β          β
β      β          ββintrospection
β      β                  ERC165Upgradeable.sol
β      β                  IERC165Upgradeable.sol
β      β
β      ββhardhat
β              console.sol
ββupgradeablecontract
    β  .gitignore
    β  hardhat.config.js
    β  package-lock.json
    β  package.json
    β  README.md
    β
    ββ.openzeppelin
    β      unknown-1001.json
    β      unknown-31337.json
    β
    ββcontracts
    β      Game.sol
    β      Greeter.sol
    β      GST_Token.sol
    β      RandomJolaman.sol
    β      RandomJolamanV2.sol
    β      SaleJolaman.sol
    β      setdata.sol
    β      setdataV2.sol
    β      StakeSystem.sol
    β
    ββscripts
           gameUpgrade.deploy.js
           JolamanTokenUpgrade.deploy.js
           randomJolamanUpgrade.deploy.js
           saleJolamanUpgrade.deploy.js
           saleJolamanUpgradeV2.deploy.js
           sample-script.js
           setDataUpgrade.deploy.js
           setDataUpgradeV2.deploy.js
           stakesystemUpgrade.deploy.js
           testRandomJol.deploy.js
```

## β νμ μ­ν  λΆλ°°
---
![image](https://user-images.githubusercontent.com/93761302/180718613-f27025f4-d3ee-4df2-94b4-976ab2f0b140.png)
