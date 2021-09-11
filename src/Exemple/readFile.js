const fs = require('fs')

function ChangeTXTfile(){
    fs.readFile('../../docs/LoremIpsun.info', {encoding: 'utf-8'} ,(error, data)=>{
        if(error){
            console.error('** Failed to read file! **')
        } 
        console.info(data)
    })
}

function JSONExemple(names, dataInfo){
    fs.readFile('../../docs/exemple.json',{encoding: 'utf-8'},(error, data)=>{
        if(error){
            console.error('>> Failed to read file!<<')
        } 
        let content = JSON.parse(data)
        content.names = names
        content.message = dataInfo
        
        fs.writeFile('../../docs/exemple.json',JSON.stringify(content), (err)=>{
            err ? 'Error when write JSON file' : console.info('> > > File updated successfully < < <') 
        })
    })
}

const nameInArray = ['One', 'Two', 'Three']
const message = 'JSON parse when you convert text to javascript object, JSON stringfy when you convert javascript object to text'
JSONExemple(nameInArray, message)
ChangeTXTfile()
