const request = require('request');
const process = require('process');

const nationString = process.argv[2];

request.get(`https://restcountries.eu/rest/v2/name/${nationString}`, (error, response, body) => {
  const jsonBody = JSON.parse(body);
  if (jsonBody.length > 0) {
    for (let i = 0; i < jsonBody.length; i += 1) {
      console.log('============');
      console.log(`國家：${jsonBody[i].name} 
首都：${jsonBody[i].capital}
貨幣：${jsonBody[i].currencies[0].code}
國碼：${jsonBody[i].callingCodes}`);
    }
  } else {
    console.log('找不到國家資訊');
  }
});
