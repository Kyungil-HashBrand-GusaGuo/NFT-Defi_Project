# 🐢 프로젝트명 - 프로젝트 간단 설명

## FrontEnd 김재원
- 기본적인 와이어프레임 설계와 함께 UI/UX 디자인 작업을 했습니다.
- 프로젝트 전반에 걸친 Redux 상태관리 구조를 설계했습니다.
- Contract 기능 및 RESTful API연결을 관리 및 진행했습니다.

---

### Code 경로
0.pages/AllMintPage.js
1. components/AllMintPage/AllCardList.js
2. redux/actions/collectionAction.js
3. redux/reducer/mintingReducer.js

다음과 같은 순으로 코드를 보시면 됩니다.


---

### Frontend 폴더 구조
- 각 page에서 사용되는 component를 page이름 폴더명에 넣어 분리하였습니다.
- pages, components, images 등등 import시 코드가 길어지는것을 방지하기 위해 각 폴더의 index.js에서 export했습니다.
- axios.create()릴 이용하여 API주소 변경시 한번에 수정가능하도록 분리했습니다.
- 기능단위로 action을 분류하여 비동기처리를 하였고, 같은 페이지 혹은 컴포넌트에서 사용하는 비슷한 state값들은 같은 reducer에서 관리하였습니다.
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
