import pdf from 'html-pdf';

export class PDFWriter{
    static WritePDF(fileName, html){
        pdf.create(html, {}).toFile(fileName, (err, data)=>{
            if(err){
                console.info("Error ", err);
            }   
            console.info('Request made successfully  !!')
        })
    }
}