# 🐢 ZOLARAND - NFT Defi Project

---

## Frontend

- UI/UX 디자인
- React component구조 설계
- 페이지 디자인 총괄
- PFP Asset 제작
- 페이지 반응형 css
- redux를 이용한 상태관리


---

### Code 경로

반응형 css @media query 및 px-to-vw사용

- frontend/src/pages/SellPage.css
- frontend/src/pages/HangManGame.css
- frontend/src/components/Global/Header.css

redux 상태관리

- frontend/src/redux/action/blackjackGameAction.js

---

### 폴더 구조
    react-components 구조

    react 공식문서 및 구글링을 통해 프로젝트에 최적화된 폴더구조를 짯습니다.

    <img width="205" alt="스크린샷 2022-07-29 오전 11 16 19" src="https://user-images.githubusercontent.com/95203882/181670294-04888656-3f22-4777-b5df-f56216055277.png">


    import시 복잡한코드 구조를 방지하기 위해 각 폴더의 index.js에서 export하였습니다.


    출저 : https://velog.io/@_seeul/React-%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A1%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A5%BC-%EC%A7%84%ED%96%89%ED%95%A0%EB%95%8C-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0%EB%A5%BC-%EC%9E%A1%EB%8A%94%EA%B2%83%EC%9D%B4-%EC%A2%8B%EC%9D%84%EA%B9%8C


---

## 📅 프로젝트 진행 기간

2022.06.02(목) ~ 2022.07.25(월) (54일간 진행)
경일게임 아카데미 블록체인 4기 기업협약 프로젝트(with HashBrand)



## 📖 ZOLALAND - 프로젝트 개요

------

### NFT & DEFI & P2E 통합플랫폼

NFT Minting, Buy & Sell, Staking, 간단한 P2E 시스템이 접목된 통합 BlockChain Dapp 구축

### Holder BeneFit

NFT 보유자는 P2E, Staking 시스템을 이용하여 발행된 ZLT, GZLT 토큰을 획득, 이로 인한 지속적인 수익 창출이 가능

### 적극적인 참여 보상

게임에 참여하면서 얻은 게임 포인트로 랭킹권 Holder 에게 매주 다양한 NFT 보상 지급

## 🚩 주요 기능

------

- ### KaiKas 지갑연결

- ### PFP 아트 생성

- ### NFT Minting

- ### NFT Marketplace

- ### NFT Staking System

- ### Token Swap

- ### P2E 게임 연동

- ### 게임 Token Reward

- ### NFT AirDrop



## ✔ 주요 기술

------

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

## ✔ 협업 툴

------

- Github
- Notion
- Discord
- Gather Town

## ✔ 프로젝트 구조

------

[![image](https://user-images.githubusercontent.com/93761302/180718765-a4208ff8-8e3d-45aa-ae85-57f61962bdf1.png)](https://user-images.githubusercontent.com/93761302/180718765-a4208ff8-8e3d-45aa-ae85-57f61962bdf1.png)

## ✔ 프로젝트 파일 구조

------

### Frontend

```
├─frontend
│  │  .gitignore
│  │  config-overrides.js
│  │  package-lock.json
│  │  package.json
│  │  yarn.lock
│  │
│  ├─public
│  │  │  favicon.ico
│  │  │  index.html
│  │  │
│  │  └─img
│  │          1.png
│  │          ...
│  │          cover.jpg
│  │
│  └─src
│      │  App.css
│      │  App.js
│      │  caverConfig.js
│      │  index.js
│      │  reportWebVitals.js
│      │  service-worker.js
│      │  serviceWorker.js
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
│      │  │  10.png
│      │  │  ...
│      │  │  ThumNail1.png
│      │  │
│      │  ├─blackjack
│      │  │      half.png
│      │  │      hundred.png
│      │  │      logo.png
│      │  │      onek.png
│      │  │      quart.png
│      │  │      ten.png
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
│      │      _index.js
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
│                  gameReducer.js
│                  index.js
│                  mintingReducer.js
│                  stakingViewReducer.js
│                  transactionReducer.js
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
│  └─routes
│      │  index.js
│      │
│      ├─block
│      │      game.controller.js
│      │      index.js
│      │      randomZolaman.controller.js
│      │      saleZolaman.controller.js
│      │      setData.controller.js
│      │      stakeSystem.controler.js
│      │
│      └─data
│              data.controller.js
│              index.js
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
    └─scripts
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

## ✔ 팀원 역할 분배

———

[![image](https://user-images.githubusercontent.com/93761302/180718613-f27025f4-d3ee-4df2-94b4-976ab2f0b140.png)](https://user-images.githubusercontent.com/93761302/180718613-f27025f4-d3ee-4df2-94b4-976ab2f0b140.png) 
