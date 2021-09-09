const fs = require('fs')

const writeHere = 'Lorem Ipsum'

fs.writeFile('./newWrite.info', writeHere, (err)=>{
    if(err){
        console.error('Error writing file')
    }
})