# AutoUpdateAppVersion
플레이스토어의 앱 버전이 반영이 되었는지 주기적으로 확인하는 툴입니다.

1. Node.js를 설치합니다.(설치되어 있을 경우 패스)
2. npm install을 입력합니다.
3. index.js 파일을 각자 설정에 맞게 수정합니다.

packageName <- 구글 플레이스토어 패키지명
currentVersionName <- 올라갈 업데이트 버전
성공시 동작 <- TODO 부분을 변경하면 됩니다.

4. node index.js 를 통해 실행합니다.
5. 성공하게 되면 성공시 동작 부분을 실행하고 앱이 종료됩니다.
