const fs = require('fs')

const newText = 'Lorem Ipsum'

fs.writeFile('../../docs/newWrite.info', newText, (err)=>{
    if(err){
        console.error('Error writing file')
    }
})