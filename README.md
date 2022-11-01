# Angular CLI Issue List

## 목표

- 특정 깃헙 레파지토리 [`angular-cli`](https://github.com/angular/angular-cli) 의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축

## 배포 링크

[보러가기](http://angular-cli-issue-list.vercel.app/)

## 프로젝트 실행 방법

1. root폴더에 `.env` 파일을 생성합니다.

```.env
REACT_APP_GITHUB_TOKEN = <your github token>
```

2. husky 설정과 라이브러리를 설치합니다.

```shell
npm install
```

3. 프로젝트를 실행합니다.

```shell
npm start
```

## 구현내용

- [x] 이슈 목록 및 상세 화면 기능 구현
- [x] Context API를 활용한 API 연동
- [ ] 화면을 아래로 스크롤 할 때 이슈 목록을 추가로 로딩 (무한 스크롤)
  - window scroll event를 이용해 스크롤이 하단으로 내려가면 데이터를 추가로 로딩했습니다.
- [x] 데이터 요청 중 로딩 표시
- [x] 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시
  - `octokit`을 사용해 지정된 조건의 데이터를 받아 사용했습니다.
- [x] 에러 화면 구현
  - 에러가 발생했을 때, `NotFound` 페이지로 이동했습니다.
- [x] 반응형 웹 구현(UI는 데스크톱, 모바일에서 보았을 때 모두 읽기 편하게 구현)
- [x] 상단이동 버튼

## 디렉토리 구조

```
📦public
📦src
 ┣ 📂components
 ┣ 📂hooks
 ┣ 📂layouts
 ┣ 📂pages
 ┃ ┣ 📂Detail
 ┃ ┣ 📂Home
 ┃ ┣ 📂NotFound
 ┣ 📂store
 ┣ 📂styles
```
