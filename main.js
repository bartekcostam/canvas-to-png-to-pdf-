const request = require('request')
const cheerio = require('cheerio')
require('dotenv').config()


console.log(process.env.URL)

request(process.env.URL, (err, res,html) => {
    if (!err && res.statusCode == 200){
        const $ = cheerio.load(html)

        const tytul = $('#18b0')

        console.log(tytul.html())
    }


})