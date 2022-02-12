# Customer_Care_System
- Web 기반의 고객 관리 시스템을 개발 Repository(Node.js, React, Mysql(AWS RDS))

### Start (for study)
1. node 설치
2. 리액트 앱 설치(글로벌 패키지로 설치)
    - 완성된 형태의 리액트 앱을 만들어준다.
```
npm install -g create-react-app
npx create-react-app [Project name]
```
3. Run the app
```
npm install -g yarn
yarn start
```
4. Download material-ui
```
npm install @material-ui/core
```
5. Download
```
npm install -g nodemon
npm install nodemon --save-dev
npm install http-proxy-middleware --save
npm install --save axios 
npm install --save multer
cd client
npm i @material-ui/icons --save
```
6. Run the server
```
yarn dev
```
### Start
- you have to make a './client/src/database.json' file. Please refer to [https://ndb796.tistory.com/220?category=1030599] when you make this.
```
git clone [URL]
cd Customer_care_system
cd management
npm install
cd client 
npm install
cd ..
yarn dev
```

### JSON check
- [https://jsonlint.com/] 들어가서 json 문서를 붙여넣기 해보면 정상적인 데이터 인지 아닌지 확인 할 수 있다.

#### NOTE
- React는 marterial UI를 더 많이 사용(부트스트랩보다)
- callAPI: API를 비동기적으로 불러 오도록 한다

#### 참고사이트
- goorm.edu의 'React와 Node.js를 활용한 고객 관리 시스템 개발' 강의
