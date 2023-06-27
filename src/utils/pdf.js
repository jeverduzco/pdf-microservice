'use strict'

const puppeteer = require('puppeteer')

exports.pdf = async (req, res) => {
  const { url, name = 'file' } = req.query

  if (!url)
    return res.status(400).send('Please provide URL as GET parameter.')

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  try {
    const page = await browser.newPage()
    await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 })
    await page.goto(url, { waitUntil: 'networkidle2' })

    const height = await page.evaluate(() => document.documentElement.offsetHeight)
    await page.emulateMediaType('screen')

    const buffer = await page.pdf({
      printBackground: true,
      height: `${height}px`,
      width: '1920px',
    })

    res.header('Content-Type', 'application/pdf;charset=utf-8')
    res.header('Content-Disposition', `attachment; filename=${name}.pdf`)
    res.type('application/pdf').send(buffer)
  }
  catch (error) {
    res.status(500).send(error.message)
  }
  finally {
    await browser.close()
  }
}
