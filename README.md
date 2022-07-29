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
