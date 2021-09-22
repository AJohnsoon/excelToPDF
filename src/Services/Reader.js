import { readFile } from 'fs';
import { promisify } from 'util';

export default class Reader{  
    constructor(){
        this.read = promisify(readFile);
    }

    async ReadFile(path){
        try{
            return await this.read(path, { encoding: 'utf-8' })        
        }catch(err){
            console.info(undefined,` >>>> File or path does not exist:: ${err}`);
        }
    }
}