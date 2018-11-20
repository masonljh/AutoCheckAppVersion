const cron = require('node-cron');
const cheerio = require('cheerio');
const request = require('request');
const nodemailer = require('nodemailer');

const packageName = '구글 플레이스토어 올라간 패키지명';
const currentVersionName = '업데이트 올린 버전';
const url = 'https://play.google.com/store/apps/details?id=' + packageName;

var task = cron.schedule('* * * * *', () => {
  console.log(url + ' try');
  request(url, function (error, response, body) {
    if (error) {
      // 그냥 에러
      console.error(url + ' fail to connect');
      return;
    }

    if (!response && response.statusCode !== 200) {
      // 응답은 왔는데 정상적인 응답이 아님
      console.error(url + ' fail to connect');
      return;
    }

    const $ = cheerio.load(body);
    // 버전 코드 네임 데이터는 htlgb 클랫스에 있음
    let valArr = $('.htlgb');

    for (let i = 0; i < valArr.length; i++) {
      try {
        if (valArr[i].children[0].data === currentVersionName) {
          // TODO : (masonljh) 여기서 서버 쪽 값 변경하도록 수정하면 됨

          console.log(packageName + ' is updated within 1 minute!');
          console.log('task destroy');
          task.destroy();
          return;
        }
      } catch (err) {
        // 이 쪽으로 온 경우엔 내가 원하는 대상이 아님
      }
    }

    console.log(packageName + ' is not updated.');
  });
}, {
  scheduled: false
});

task.start();
console.log('task start');
