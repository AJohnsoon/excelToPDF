import Reader from './Services/Reader.js';  
import Writer from './Services/Writer.js';
import Process from './Modules/Processor.js';
import Table from './Modules/Table.js';
import HtmlParser from './Modules/htmlParser.js';

const reader = new Reader()
const writer = new Writer()
const processData = new Process()

export default async function App(){
    try{
        const data = await reader.ReadFile('docs/myDoc.csv')        
        const preProcessorData = processData.Process(data);
        const tableData = new Table(preProcessorData);    

        const htmlINFO = await HtmlParser.Parse(tableData);
        
        writer.WriterFile("generate.html", htmlINFO);
            
        /* 
        ** generate random html form
            writer.WriterFile(Date.now()+".html", htmlINFO);
        */
    }
    catch(err){
        console.info(err, ' >>> Error in index')
    }
}
