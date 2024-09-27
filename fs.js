const { error } = require('console')
const fs = require('fs')
const path = require('path')

// let's create a file in the current directory

// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {if (err){
//     throw err
// }})

// let's create a file and write into it

// fs.writeFile(path.join(__dirname, '/test' , 'hello.txt') , "Hello everyone", err => {if (err) throw err})

// fs.readFile(path.join(__dirname, '/test', '/hello.txt') ,'utf8' , (err, data) => {
//     if(err) throw err;
//     console.log(data)
// } )

    fs.rename(path.join(__dirname, '/test/hello.txt'), path.join(__dirname, '/test/helloRenamed.txt'), 
    (err) => {
        if(err){
            throw err
        };
        console.log("File renamed");

        
    })