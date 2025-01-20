const fs = require('fs')
const path = require('path')
const readline = require('readline')
const filePath = path.join(__dirname, 'output.txt')
const fileStream = fs.createWriteStream(filePath, { flags: 'a' })
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
console.log('Введите текст для записи в файл. Для выхода введите "exit" или нажмите Ctrl + C')
rl.on('line', input => {
  if (input.trim().toLowerCase() === 'exit') {
    rl.close()
  } 
  else {
    fileStream.write(`${input}\n`)
  }
})

rl.on('close', () => {
  console.log('Программа завершена')
  fileStream.end()
  process.exit(0)
})

process.on('SIGINT', () => {
  console.log('\Программа завершена')
  fileStream.end()
  process.exit(0)
});