const Reader = require('./Services/Reader');
const Processor = require('./Services/Processor');

const read = new Reader()
async function main(){
    try{
        const data = await read.ReadFile('docs/myDoc.csv')
        const preProcessorData = Processor.Process(data);
        console.info(preProcessorData)
    }
    catch(err){
        console.info(err, ' >>>Error in index')
    }
}

main()