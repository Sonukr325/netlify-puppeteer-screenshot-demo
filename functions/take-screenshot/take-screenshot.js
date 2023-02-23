const chromium = require("@sparticuz/chromium");
const puppeteer = require("puppeteer-core");
exports.handler = async (event, context) => {

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  };
const NodeRSA = require('node-rsa');
//const agent = require('random-mobile-ua');
const puppeteer = require('puppeteer-core');
//const cors = require('cors');
const key = new NodeRSA();
//const cookie = require('./cookie.json');
//const fs = require('fs');
const privatePem = '-----BEGIN RSA PRIVATE KEY-----MIIBOwIBAAJBAJfTPs4kSrLCxnVHC/6YGYqiZg/X7RRCiowY/YQ9brBkymIh4bhsEhYH141t4RQyh0ThAU09ycNUF+d4OVUmUBECAwEAAQJAdJWlc7xQlAaXSLVe04jOjDN6dg4UImuaYkxKWIKn/dCg7oMZR9IYn+nuNKiDhpFuWH33yWxVxPNfZqsXRrMcAQIhAPhInJiCK66WitClXOndZCyB2mQh2yHPCy4BexDUOOhRAiEAnIsxcbWcdwq9i0FhByvf3TysVvuovOAWxmlm+2TMu8ECICBu0830SyJ+VdnVkCKYogpSWCX2ajqrYil7Vgknv9tRAiEAhawuKmTkGJqpQ/IuAkuqu2YF27jFW5MWn5J9h4mJcYECIQDGIqyayMmoPwe4NAEWS4FmMVenG2t9tQPfeOVvKkvqXg==-----END RSA PRIVATE KEY-----  ';
key.importKey(privatePem, 'pkcs1-pem');  
if(event.httpMethod === "GET") {
  return {
      statusCode: 401,
      headers,
      body: JSON.stringify({ msg: "unauthorised_access" }),
    };
}
else if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 401,
      headers,
      body: JSON.stringify({ msg:"unauthorised_access" }),
    };
  } else if (event.httpMethod === "POST") {
    if(!event.body){
  const res = JSON.stringify({
    msg: 'unauthorised_access'
  })
  return {
    statusCode: 400,
    body: res,
    headers: {
			'Content-Type': 'application/json; charset=utf-8',
		}
  }
}
else if(JSON.parse(event.body).token == ""){
 const res = JSON.stringify({
    msg: 'unauthorised_access'
  })
  return {
    statusCode: 400,
    body: res,
    headers: {
			'Content-Type': 'application/json; charset=utf-8',
		}
  } 
}
else {
      const browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: process.env.CHROME_EXECUTABLE_PATH || await chromium.executablePath,
        headless: chromium.headless,
        ignoreHTTPSErrors: true,
    });
    let page = await browser.newPage();
  const brewery = async(page) => {
// await page.setUserAgent(MOBILE_USERAGENT);
    await page.setRequestInterception(true);
    page.on('request', (req) => {
        if(req.resourceType() == 'stylesheet' || req.resourceType() == 'font' || req.resourceType() == 'image'){
            req.abort();
        }
        else {
            req.continue();
        }
    }); 
}
  try {
   const now = Date.now();
   const pageToScreenshotx = JSON.parse(event.body).token;
   const decryptedString = key.decrypt(decodeURIComponent(pageToScreenshotx), 'utf8');
  const decrypedObject = JSON.parse(decryptedString);
    console.log('deceypt>>',decrypedObject)
    console.log('encrypt>>',pageToScreenshotx)
    const vt = (decrypedObject.time);
  const idx = (decrypedObject.id);
  const ws = (decrypedObject.ws)  
  const url = "https://www.midasbuy.com/adyen/pk/buy/pubgm"
 console.log(idx,"fun executed")
  if(vt>now && ws == '0') {
try{
  const browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: process.env.CHROME_EXECUTABLE_PATH || await chromium.executablePath,
        headless: chromium.headless,
        ignoreHTTPSErrors: true,
    });
    let page = await browser.newPage();
await brewery(page);
   await page.goto("https://www.midasbuy.com/adyen/pk/buy/pubgm", { timeout:0});
   await page.$eval('#cookie-agreement-pop > .close-btn', el => el.click());
   await  page.waitForSelector('.input')
     .then(() => console.log('selector player id found'));
   await page.type('.input', '5758583848', { delay: 10 });
   await page.keyboard.press('Enter');
   await page.on('response', async(response) =>{
   const eu = response.url()
   const str = eu.split("?")
  const mxx = "https://www.midasbuy.com/interface/getCharac";
    if(str[0] == mxx){
      console.log(response.headers())
      //console.log(str[1])
      const euu = "https://www.midasbuy.com/interface/getCharac?"
      const urll = euu+str[1]
      console.log('XHR response received');
const resx = await response.json();
console.log(resx)
return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ msg: resx }),
    };
}
});  
}
catch(err) {
  console.log(err)
return {
      statusCode: 401,
      headers,
      body: JSON.stringify({ msg: "unauthorised_accesscrash" }),
    };  
  
}

  }////////END HERE/////
  else if (vt>now && ws !== '0'){
    wsfun(idx,ws)
  }
  
   else if(vt<now) {
   const res =  JSON.stringify({
     ret:'tokeneinvalid',
        msg:'Unauthorized',
  'developer telegram': '@god_forever'
   })
   
    return {
    statusCode: 300,
    body: res,
    headers: {
			'Content-Type': 'application/json; charset=utf-8',
		}
  }
 }
    
  }/////END OF TRY////
 catch(err) {
  console.log(err)
  const res = JSON.stringify({
    msg:'forbidden'
  })
   return {
    statusCode: 403,
    body: res,
    headers: {
			'Content-Type': 'application/json; charset=utf-8',
		}
  } 
 } ////END OF CATCH////
}////END OF ELSE////
  }/////ELSE IF END FOR POST REQ//////
 //////////FUNC START/////// 
 
  
}//////END OF FUNCTION///////
