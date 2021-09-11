const fs = require('fs');

class Reader{

    ReadFile(path){
        fs.readFile(path, {encoding: 'utf-8'}, (err, data)=>{
            if(err){
                console.info("Failed to read file!")
            }
            console.info(data)
        })
    }
}


module.exports = Reader