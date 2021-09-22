import { writeFile } from 'fs';

export default class Writer{

    WriteFile(path, fileNewText){
        writeFile(path, fileNewText, (err)=>{
            if(err){
                console.error('Error writing file')
            }
            console.info('> > > File updated successfully!! < < <')
        })
    }
}


