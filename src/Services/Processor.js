class Processor{
    static Process(data){
        const myArray = data.split('\n');       
        const rows = [];
        
        myArray.forEach(row => {
            let arr = row.split(',');
            rows.push(arr);
        })
        return rows;
    }
}

module.exports = Processor;