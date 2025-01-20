const fs = require('fs')
const path = require('path')
const folderPath = path.join(__dirname, 'secret-folder')

fs.readdir(folderPath, { withFileTypes: true }, (err, items) => {
  if (err) {
    console.error('Ошибка при чтении папки:', err.message)
    return
  }
  items.forEach((item) => {
    if (item.isFile()) {
      const filePath = path.join(folderPath, item.name)
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error('Ошибка при получении информации о файле:', err.message)
          return
        }
        const fileName = path.parse(item.name).name
        const fileExtension = path.parse(item.name).ext.slice(1)
        const fileSizeKB = (stats.size / 1024).toFixed(3)
        console.log(`${fileName} - ${fileExtension} - ${fileSizeKB}kb`)
      })
    }
  })
})
