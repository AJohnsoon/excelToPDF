const fs = require('fs');
const util = require('util');

class Reader{  
    constructor(){
        this.read = util.promisify(fs.readFile);
    }

    async ReadFile(path){
        try{
            return await this.read(path, { encoding: 'utf-8' })        
        }catch(err){
            console.info(undefined,` >>>> File or path does not exist:: ${err}`);
        }
    }
}



module.exports = Reader