import Reader from './Services/Reader.js';
import Process from './Modules/Processor.js';
import Table from './Modules/Table.js';
// import Writer from './Services/Writer.js';
// import Changes from './Modules/Changes.js';

const read = new Reader()
const processData = new Process()
// const write = new Writer();

async function main(){
    try{
        const data = await read.ReadFile('docs/myDoc.csv')        
        const preProcessorData = processData.Process(data);
        const tableData = new Table(preProcessorData)
        console.log(tableData)
        
        // const info = write.WriteFile('docs/myDoc.csv', Changes)
        // console.info(info)
        
    }
    catch(err){
        console.info(err, ' >>>Error in index')
    }
}



main()