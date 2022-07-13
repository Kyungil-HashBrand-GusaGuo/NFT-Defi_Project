# 🐢 프로젝트명 - 프로젝트 간단 설명

## 📅 프로젝트 진행 기간
2022.06.02(목) ~ 2022.07.25(월) (--일간 진행)
</br>
경일게임 아카데미 블록체인 4기 기업협약 프로젝트(with HashBrand)

</br>


## 📖 프로젝트명 - 개요

**NFTicket**은 프로젝트 개요 적어보기
</br>

## 🚩 주요 기능
---

</br>

## ✔ 주요 기술
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
- Redux


**Environment**


## ✔ 프로젝트 구조
---


## ✔ 프로젝트 파일 구조
---
### Frontend
```
│  .DS_Store
│  .gitignore
│  package-lock.json
│  package.json
│  README.md
│  truffle-config.js
│  yarn.lock
│


├─frontend
│  │  .gitignore
│  │  config-overrides.js
│  │  package-lock.json
│  │  package.json
│  │  README.md
│  │  yarn.lock
│  │
│  ├─public
│  │  │  favicon.ico
│  │  │  index.html
│  │  │
│  │  └─img
│  │          1.png
│  │          2.png
│  │          3.png
│  │          4.png
│  │          5.png
│  │          6.png
│  │          cover.jpg
│  │
│  └─src
│      │  API.js
│      │  App.css
│      │  App.js
│      │  Apptest.js
│      │  caverConfig.js
│      │  index.js
│      │  reportWebVitals.js
│      │  SaleApi.js
│      │  service-worker.js
│      │  serviceWorker.js
│      │  setupTests.js
│      │  StakingApi.js
│      │
│      ├─components
│      │  │  index.js
│      │  │
│      │  ├─Adminpage
│      │  │      AirdropModal.css
│      │  │      AirdropModal.js
│      │  │
│      │  ├─AllMintPage
│      │  │      AllCardList.css
│      │  │      AllCardList.js
│      │  │
│      │  ├─BuyPage
│      │  │      BuyModal.js
│      │  │
│      │  ├─GamePage
│      │  │  │  SelectGameNftModal.css
│      │  │  │  SelectGameNftModal.js
│      │  │  │  Timer.js
│      │  │  │
│      │  │  ├─BlackJackGame
│      │  │  │  ├─Buttons
│      │  │  │  │      buttons.js
│      │  │  │  │      Chip.css
│      │  │  │  │      Chip.js
│      │  │  │  │      StyledButton.js
│      │  │  │  │
│      │  │  │  ├─Card
│      │  │  │  │      Card.css
│      │  │  │  │      Card.js
│      │  │  │  │      CardList.js
│      │  │  │  │      StarterCard.js
│      │  │  │  │
│      │  │  │  └─Modal
│      │  │  │          BlackGameOverModal.css
│      │  │  │          BlackGameOverModal.js
│      │  │  │          BlackJackGameSetModal.js
│      │  │  │
│      │  │  ├─CardGame
│      │  │  │      GameModal.css
│      │  │  │      GameOverModal.js
│      │  │  │      GameSetModal.js
│      │  │  │      SingleCard.css
│      │  │  │      SingleCard.js
│      │  │  │
│      │  │  └─HangmanGame
│      │  │          GameOutcome.js
│      │  │          Hangman.js
│      │  │          HangmanGameSetModal.js
│      │  │          WordAndAlphabet.js
│      │  │          wordBank.js
│      │  │
│      │  ├─global
│      │  │      Footer.css
│      │  │      Footer.js
│      │  │      Navbar.css
│      │  │      Navbar.js
│      │  │      SwapActModal.css
│      │  │      SwapActModal.js
│      │  │      SwapGzltModal.js
│      │  │      SwapModal.css
│      │  │      SwapModal.js
│      │  │
│      │  ├─MainPage
│      │  │      Gallery.css
│      │  │      Gallery.js
│      │  │      MainTitle.css
│      │  │      MainTitle.js
│      │  │      Partners.css
│      │  │      Partners.js
│      │  │      RoadMap.css
│      │  │      RoadMap.js
│      │  │      Story.css
│      │  │      Story.js
│      │  │      TeamIntro.css
│      │  │      TeamIntro.js
│      │  │
│      │  ├─MarketPage
│      │  │      DropDown.js
│      │  │
│      │  ├─MyPage
│      │  │      MyCardList.css
│      │  │      MyCardList.js
│      │  │
│      │  ├─PreMintingpage
│      │  │      LeftMintingSection.css
│      │  │      LeftMintingSection.js
│      │  │      MintingModal.css
│      │  │      MintingModal.js
│      │  │      RightMintingSection.css
│      │  │      RightMintingSection.js
│      │  │
│      │  ├─SellPage
│      │  │      CancelSellModal.js
│      │  │      SellModal.css
│      │  │      SellModal.js
│      │  │
│      │  └─StakingPage
│      │          ClaimModal.js
│      │          Modal.css
│      │          StakingModal.js
│      │          UnStakingModal.js
│      │
│      ├─constants
│      │      CardInfo.js
│      │
│      ├─images
│      │  │  01.arrow.png
│      │  │  ...
│      │  │  17.Team5.png
│      │  │
│      │  ├─blackjack
│      │  │      01.half.png
│      │  │      ...
│      │  │      06.ten.png
│      │  │
│      │  ├─hangmang
│      │  │      0.png
│      │  │      ...
│      │  │      6.png
│      │  │
│      │  └─mainsilder
│      │          1.png
│      │          ...
│      │          20.png
│      │
│      ├─pages
│      │      AdminPage.css
│      │      AdminPage.js
│      │      AllMintPage.css
│      │      AllMintPage.js
│      │      BlackJackGame.css
│      │      BlackJackGame.js
│      │      BuyPage.css
│      │      BuyPage.js
│      │      CardGame.css
│      │      CardGame.js
│      │      GameMainPage.css
│      │      GameMainPage.js
│      │      HangManGame.css
│      │      HangManGame.js
│      │      index.js
│      │      MainPage.css
│      │      MainPage.js
│      │      MarketPage.css
│      │      MarketPage.js
│      │      MyPage.css
│      │      MyPage.js
│      │      NotFound.css
│      │      NotFound.js
│      │      PreMintingPage.css
│      │      PreMintingPage.js
│      │      SellPage.css
│      │      SellPage.js
│      │      StakingPage.css
│      │      StakingPage.js
│      │      wordBank.js
│      │
│      └─redux
│          │  api.js
│          │  pinataApi.js
│          │  store.js
│          │
│          ├─actions
│          │      addWhiteListAccount.js
│          │      BlackBetAction.js
│          │      BlackCardAction.js
│          │      blackjackGameAction.js
│          │      buyingAction.js
│          │      cancelSellingAction.js
│          │      collectionAction.js
│          │      connectAccount.js
│          │      deleteWhiteListAccount.js
│          │      gameViewAction.js
│          │      hangmanGameAction.js
│          │      marketAction.js
│          │      mintingCount.js
│          │      mypageAction.js
│          │      preMintingAction.js
│          │      rewardEditionGetAction.js
│          │      rewardEditionSetAction.js
│          │      sellingAction.js
│          │      stakingAction.js
│          │      stakingCancelAction.js
│          │      stakingRewardAction.js
│          │      stakingViewAction.js
│          │      swapAction.js
│          │      swapGzltAction.js
│          │      swapModalAction.js
│          │      timerAction.js
│          │      timerGetAction.js
│          │      timerPostAction.js
│          │      whiteMintingAction.js
│          │
│          └─reducer
│                  accountReducer.js
│                  BlackBetReducer.js
│                  BlackJactReducer.js
│                  gameReducer.js
│                  index.js
│                  mintingReducer.js
│                  stakingViewReducer.js
│                  transactionReducer.js
│
├─migrations
│      1_initial_migration.js
│      2_random_jolaman.js
│
└─upgradeablecontract
    │  .gitignore
    │  hardhat.config.js
    │  package-lock.json
    │  package.json
    │  README.md
    │
    ├─.openzeppelin
    │      unknown-1001.json
    │      unknown-31337.json
    │
    ├─contracts
    │      Game.sol
    │      Greeter.sol
    │      GST_Token.sol
    │      RandomJolaman.sol
    │      RandomJolamanV2.sol
    │      SaleJolaman.sol
    │      setdata.sol
    │      setdataV2.sol
    │      StakeSystem.sol
    │
    ├─scripts
    │      gameUpgrade.deploy.js
    │      JolamanTokenUpgrade.deploy.js
    │      randomJolamanUpgrade.deploy.js
    │      saleJolamanUpgrade.deploy.js
    │      saleJolamanUpgradeV2.deploy.js
    │      sample-script.js
    │      setDataUpgrade.deploy.js
    │      setDataUpgradeV2.deploy.js
    │      stakesystemUpgrade.deploy.js
    │      testRandomJol.deploy.js

```
### Backend
```
├─backend
│  │  db.js
│  │  db.sql
│  │  package-lock.json
│  │  package.json
│  │  server.js
│  │
│  ├─contracts
│  │      game.js
│  │      randomZolaman.js
│  │      SaleJolaman.js
│  │      setData.js
│  │      stakeSystem.js
│  │
│  ├─routes
│  │  │  index.js
│  │  │
│  │  ├─block
│  │  │      game.controller.js
│  │  │      index.js
│  │  │      randomZolaman.controller.js
│  │  │      saleZolaman.controller.js
│  │  │      setData.controller.js
│  │  │      stakeSystem.controler.js
│  │  │
│  │  └─data
│  │          data.controller.js
│  │          index.js
│  │
│  └─views
│          index.html
│
```
### BlockChain
```
├─.deps
│  └─npm
│      ├─@openzeppelin
│      │  ├─contracts
│      │  │  ├─access
│      │  │  │      AccessControl.sol
│      │  │  │      IAccessControl.sol
│      │  │  │      Ownable.sol
│      │  │  │
│      │  │  ├─interfaces
│      │  │  │      draft-IERC1822.sol
│      │  │  │
│      │  │  ├─proxy
│      │  │  │  │  Proxy.sol
│      │  │  │  │
│      │  │  │  ├─beacon
│      │  │  │  │      BeaconProxy.sol
│      │  │  │  │      IBeacon.sol
│      │  │  │  │      UpgradeableBeacon.sol
│      │  │  │  │
│      │  │  │  └─ERC1967
│      │  │  │          ERC1967Upgrade.sol
│      │  │  │
│      │  │  ├─token
│      │  │  │  ├─ERC20
│      │  │  │  │  │  ERC20.sol
│      │  │  │  │  │  IERC20.sol
│      │  │  │  │  │
│      │  │  │  │  └─extensions
│      │  │  │  │          ERC20Burnable.sol
│      │  │  │  │          IERC20Metadata.sol
│      │  │  │  │
│      │  │  │  └─ERC721
│      │  │  │      │  ERC721.sol
│      │  │  │      │  IERC721.sol
│      │  │  │      │  IERC721Receiver.sol
│      │  │  │      │
│      │  │  │      ├─artifacts
│      │  │  │      │      IRewardToken.json
│      │  │  │      │      IRewardToken_metadata.json
│      │  │  │      │      StakingSystem.json
│      │  │  │      │      StakingSystem_metadata.json
│      │  │  │      │
│      │  │  │      ├─extensions
│      │  │  │      │      ERC721Burnable.sol
│      │  │  │      │      ERC721Enumerable.sol
│      │  │  │      │      IERC721Enumerable.sol
│      │  │  │      │      IERC721Metadata.sol
│      │  │  │      │
│      │  │  │      └─utils
│      │  │  │              ERC721Holder.sol
│      │  │  │
│      │  │  └─utils
│      │  │      │  Address.sol
│      │  │      │  Context.sol
│      │  │      │  Counters.sol
│      │  │      │  StorageSlot.sol
│      │  │      │  Strings.sol
│      │  │      │
│      │  │      ├─introspection
│      │  │      │      ERC165.sol
│      │  │      │      IERC165.sol
│      │  │      │
│      │  │      └─math
│      │  │              SafeMath.sol
│      │  │
│      │  └─contracts-upgradeable
│      │      ├─access
│      │      │      OwnableUpgradeable.sol
│      │      │
│      │      ├─proxy
│      │      │  └─utils
│      │      │          Initializable.sol
│      │      │
│      │      ├─token
│      │      │  ├─ERC20
│      │      │  │  │  ERC20Upgradeable.sol
│      │      │  │  │  IERC20Upgradeable.sol
│      │      │  │  │
│      │      │  │  └─extensions
│      │      │  │          IERC20MetadataUpgradeable.sol
│      │      │  │
│      │      │  └─ERC721
│      │      │      │  ERC721Upgradeable.sol
│      │      │      │  IERC721ReceiverUpgradeable.sol
│      │      │      │  IERC721Upgradeable.sol
│      │      │      │
│      │      │      └─extensions
│      │      │              ERC721EnumerableUpgradeable.sol
│      │      │              ERC721URIStorageUpgradeable.sol
│      │      │              IERC721EnumerableUpgradeable.sol
│      │      │              IERC721MetadataUpgradeable.sol
│      │      │
│      │      └─utils
│      │          │  AddressUpgradeable.sol
│      │          │  ContextUpgradeable.sol
│      │          │  StringsUpgradeable.sol
│      │          │
│      │          └─introspection
│      │                  ERC165Upgradeable.sol
│      │                  IERC165Upgradeable.sol
│      │
│      └─hardhat
│              console.sol
│
```


## ✔ 협업 툴
---
- Github
- Notion
- Discord


## ✔ 팀원 역할 분배
---
