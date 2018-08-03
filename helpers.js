const cheerio = require('cheerio')

const getPageContent = function(htmlBody) {
  const $ = cheerio.load(htmlBody)
  const body = $('body')
  const main = $('main')

  if (main.length) {
    return main.text()
  }
  if (body.length) {
    return body.text()
  }
}

const getWordCount = function(content) {
  return content.split(' ').filter(word => word).length
}

module.exports = {
  getWordCount,
  getPageContent
}
