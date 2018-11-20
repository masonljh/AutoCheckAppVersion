# AutoCheckAppVersion
This tool checks every minute to see if the app version of the Play Store is reflected.<br>
플레이스토어의 앱 버전이 반영이 되었는지 1분마다 확인하는 툴입니다.

1. Install Node.js (pass if it is installed)<br>
   Node.js를 설치합니다.(설치되어 있을 경우 패스)
2. In the terminal, type npm install.npm<br>
   터미널에서 install을 입력합니다.
3. Modify the index.js file according to your settings.<br>
   index.js 파일을 각자 설정에 맞게 수정합니다.

packageName <- Google Play Store package name(구글 플레이스토어 패키지명)<br>
currentVersionName <- Updated version(올라갈 업데이트 버전)<br>
Behavior on success(성공시 동작) <- You can change the TODO part.(TODO 부분을 변경하면 됩니다.)<br>

4. Run through node index.js.<br>
   node index.js 를 통해 실행합니다.
5. If successful, it executes the action part on success and the app is terminated.<br>
   성공하게 되면 성공시 동작 부분을 실행하고 앱이 종료됩니다.
