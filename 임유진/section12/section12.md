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

# 6. 폰트, 이미지, 레이아웃 설정하기

- 이미지의 경우 public 폴더에 넣으면 vite 최적화가 실행되지 않음

# 7. 공통 컴포넌트 구현하기

# 8. 일기 관리 기능 구현하기1

# 9. 일기 관리 기능 구현하기2

# 10. Home 페이지 구현하기(UI)

# 11. Home 페이지 구현하기(기능)

# 12. Home 페이지 구현하기(회고)

# 13. New 페이지 구현하기 (UI)

# 14. New 페이지 구현하기 (기능)

# 15. Edit페이지 구현하기

# 16. Diary 페이지 구현하기

# 17. 웹 스토리지 이용하기

```
localStorage.setItem("test", "hello");
localStorage.setItem("person", JSON.stringify({ name: "임유진" }));
console.log(localStorage.getItem("test"));
console.log(JSON.perse(localStorage.getItem("person")));
localStorage.removeItem("test");
```

# 18. 배포 준비하기

# 19. 배포하기

https://emotion-diary-1mkog2oor-limyujins-projects.vercel.app/
