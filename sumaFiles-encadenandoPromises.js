const fs = require('fs')

var numero1

const getData = (fileName, type) =>
  new Promise((resolve, reject) => {
    fs.readFile(fileName, type, (err, data) => {
      err ? reject(err) : resolve(parseInt(data))
    })
  })

getData('numero1', 'utf-8')
  .then((fileData) => {
    numero1 = fileData
    console.log(numero1)
    return getData('numero2', 'utf-8')
  })
  .then((numero2) => {
    console.log(numero2)
    console.log(`La suma es: ${numero1 + numero2}`)
  })
  .catch(err => console.log(err))