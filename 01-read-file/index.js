// import fs from 'fs'
// import path from 'path'
const fs = require('fs');
const path = require('path');

const pathfile = path.join(__dirname, 'text.txt')
const readStr = fs.createReadStream(pathfile, {encoding: 'utf-8'})
readStr.on('data', data =>{
    console.log('Данные из файла: ', data)
})
readStr.on('end', ()=>{
    console.log("Файл прочитан")
})
readStr.on('err', err =>{
    console.log("Ошибка при чтении", err.message)
})
