# MongoDB와 Express 프레임워크를 이용한 간단한 백엔드 서버
## 1. 설명
본 백엔드 서버는 본래 덕영고등학교 정규 수업과목 연구과제인 데이터베이스 프로그래밍   
연구과제로 제출 예정이고, 추후 개인프로젝트에 보완 작업을 걸쳐 사용할 예정입니다.   
개발 목적은 게임서버에서 한 라운드가 종료 되었을때 그 라운드에 대한 간단한 정보를   
데이터베이스에 저장하기 위하여 만들었습니다. 한 라운드에서 일어날 수 있는 경우의 수는 무궁무진   
하고, 추후에 다른 게임을 개발하면 저장하는 데이터의 종류도 많아져 스키마의 유연성이   
필요하였고, 그 결과 MongoDB를 새로 배우고, 백엔드 서버로 제작하게 되었습니다.

## 2. API
--- 
### matchlog
> HTTP Method : POST   
> URL : /api/matchlog   
> 설명 : 매치의 정보를 데이터베이스에 저장합니다.

Body
|key|desc|type|
|------|---|---|
|key|API 키|string|
|id|라운드의 ID|string|
|size|라운드의 사이즈(string 형식)|string|
|type|게임의 종류|string|
|map|라운드에 사용된 맵의 이름|string|
|players|라운드에 있던 모든 플레이어들의 UUID (string 형식)|Array[string]|
|winners|라운드에서 이긴 모든 플레이어들의 UUID (string 형식)|Array[string]|

Result
|key|desc|type|
|------|---|---|
|status|Request 처리 후 상태 코드를 반환합니다.<br>성공시 0, 오류 발생 혹은 잘못된 요청시 1을 반환합니다.|int|
|result|에러 메시지가 표시됩니다.<br>요청이 실패했을때만 표시됩니다.|string|

## 3. 설치
```
.env 파일 생성 후 다음 변수를 설정해주세요.

COCOA_KEY
PORT

COCOA_KEY는 string 타입 입니다.
PORT는 int 타입 입니다.

MongoDB의 데이터베이스 이름은 kitpvp 입니다.

npm install
npm start
```

## 4. 스크린샷
성공 스크린샷
<img src="https://cdn.discordapp.com/attachments/720162481506615317/995931840164679750/unknown.png">
<img src="https://cdn.discordapp.com/attachments/720162481506615317/995932536431722577/unknown.png">

에러 감지 스크린샷
<img src="https://cdn.discordapp.com/attachments/720162481506615317/995932901763989564/unknown.png">