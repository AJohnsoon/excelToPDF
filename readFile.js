const fs = require('fs')

function ChangeTXTfile(){
    fs.readFile('./LoremIpsun.info', {encoding: 'utf-8'} ,(error, data)=>{
        if(error){
            console.error('Failed to read file!')
        } 
        console.info(data)
    })
}

function JSONExemple(names, dataInfo){
    fs.readFile('./exemple.json',{encoding: 'utf-8'},(error, data)=>{
        if(error){
            console.error('Failed to read file!')
        } 
        let content = JSON.parse(data)
        content.names = names
        content.data = dataInfo
        
        fs.writeFile('./exemple.json',JSON.stringify(content), (err)=>{
            err ? 'Error when write JSON file' : console.info('> > >   File updated successfully < < <') 
        })
    })
}

const nameInArray = ['One', 'Two', 'Three']
const message = 'JSON parse when you convert text to javascript'


JSONExemple(nameInArray, message)
ChangeTXTfile()
