import Reader from './Services/Reader.js';
import Process from './Modules/Processor.js';
import Table from './Modules/Table.js';
import HtmlParser from './Modules/htmlParser.js';

const read = new Reader()
const processData = new Process()

export default async function App(){
    try{
        const data = await read.ReadFile('docs/myDoc.csv')        
        const preProcessorData = processData.Process(data);
        const tableData = new Table(preProcessorData);    

        const htmlINFO = await HtmlParser.Parse(tableData);
        console.log(htmlINFO)
        return htmlINFO;
    }
    catch(err){
        console.info(err, ' >>> Error in index')
    }
}
