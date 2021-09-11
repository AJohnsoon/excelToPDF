const fs = require('fs');

class Writer{

    WriteFile(path, fileNewText){
        fs.writeFile(path, fileNewText, (err)=>{
            if(err){
                console.error('Error writing file')
            }
            console.info('> > > File updated successfully!! < < <')
        })
    }
}


module.exports = Writer


