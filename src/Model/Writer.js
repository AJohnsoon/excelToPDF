const fs = require('fs');

class Writer{

    WriteFile(path, fileName){
        fs.writeFile(path, fileName, (err)=>{
            if(err){
                console.error('Error writing file')
            }
        })
    }
}


module.exports = Writer


