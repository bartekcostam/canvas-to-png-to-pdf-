const request = require('request')
const cheerio = require('cheerio')
require('dotenv').config()
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get(process.env.URL);
   
    await driver.findElement(getElementByXpath('//*[@id="signin_username"]')).click()
    await driver.findElement(getElementByXpath('//*[@id="signin_username"]')).sendKeys('login', Key.RETURN)
    //await driver.findElement(By.name('q')).sendKeys(process.env.URL, Key.RETURN)
    //await driver.wait(until.titleIs('webdriver - Google Search'), 1000)
  } finally {
      driver.sleep(3000)
    await driver.quit();
  }
})()



/*
console.log(process.env.URL)

request(process.env.URL, (err, res,html) => {
    if (!err && res.statusCode == 200){
        const $ = cheerio.load(html)

        const tytul = $('#18b0')

        console.log(tytul.html())
    }


})


*/