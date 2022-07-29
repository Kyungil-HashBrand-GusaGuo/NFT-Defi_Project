# 🐢 ZOLARAND - NFT Defi Project

---

## Backend

- 기본적인 Backend API 설계 및 테스트
- 배포한 Contract 기능 및 API연결을 관리 및 진행
- IPFS에 NFT 메타데이터 업로드 
- 자체 DB 설계 및 구축
- NginX를 사용하여 WebServer 구현
- AWS(EC2, S3)를 활용하여 서비스 배포

---

### Code 경로

BlockChain Contract 

 - backend/contracts

Contract에 접근하는 방법 

- backend/routes/block

DB 데이터 관리 / Contract 함수랑 구분지

- backend/routes/data

---

### 폴더 구조

계획할때 mvc패턴을 참고했습니다. 

이유는 유지보수가 쉽고 다른 파트 팀원이 Back API를 사용하기 편리합니다. 

index.js 파일만 보면 바로 사용할 수 있습니다.

환경변수는 .env에 저장했습니다.

---
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



## ✔ 팀원 역할 분배

———

[![image](https://user-images.githubusercontent.com/93761302/180718613-f27025f4-d3ee-4df2-94b4-976ab2f0b140.png)](https://user-images.githubusercontent.com/93761302/180718613-f27025f4-d3ee-4df2-94b4-976ab2f0b140.png)
