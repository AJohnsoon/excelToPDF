import fs from 'fs';
import util  from 'util';


export default class Writer {

    constructor() {
        this.writer = util.promisify(fs.writeFile);
    }

    async WriterFile(fileName, data) {
        try{
            await this.writer(fileName, data)            
            return true
        }
        catch(err){             
            console.info(">>>>> error a write file")
            return false
        }
    }
}


