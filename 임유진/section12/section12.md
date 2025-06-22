# 1. 프로젝트 소개 및 준비

- 감정 일기장 프로젝트

# 2. 페이지 라우팅 - 소개

- 페이지 라우팅: 경로에 따라 알맞은 페이지를 렌더링하는 과정
- MPA(Multi Page Application): 페이지 이동이 매끄럽지 않고 비효율적, 다수의 사용자 접속 시 서버 부하 심해짐
- **SPA(Single Page Application)**: React App 채택 방식, 페이지 이동 매끄럽고 효율적이며 다수의 사용자가 접속해도 크게 상관 없음

# 3. 페이지 라우팅 - 라우팅 설정하기

- `npm i react-router-dom`

# 4. 페이지 라우팅 - 페이지 이동

- Link: `<button onClick={onClickButton}>New 페이지로 이동</button>`
- Routes, Route: `<Route path="/" element={<Home />} />`

# 5. 페이지 라우팅 - 동적 경로

- 동적 경로(Dynamic Segments): 동적인 데이터를 포함하고 있는 경로
