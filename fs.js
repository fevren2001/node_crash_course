const { error } = require('console')
const fs = require('fs')
const path = require('path')

// let's create a file in the current directory

// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {if (err){
//     throw err
// }})

// let's create a file and write into it

fs.writeFile(path.join(__dirname, '/test' , 'hello.txt') , "Hello everyone", err => {if (err) throw err})