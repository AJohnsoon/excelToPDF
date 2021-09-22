import Reader from './Services/Reader.js';
import Process from './Services/Processor.js';

const read = new Reader()
const processData = new Process()
async function main(){
    try{
        const data = await read.ReadFile('docs/myDoc.csv')
        const preProcessorData = processData.Process(data);
        console.info(preProcessorData)
    }
    catch(err){
        console.info(err, ' >>>Error in index')
    }
}

main()