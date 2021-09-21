const Reader = require('./Services/Reader');

const read = new Reader()
async function main(){
    try{
        const data = await read.ReadFile('docs/myDoc.csv')
        console.info(data)
    }
    catch(err){
        console.info(err, ' >>>Error in index')
    }
}

main()