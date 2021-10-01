import ejs from 'ejs';

export default class HtmlParser{
    static async Parse(table){
        const tableInfo = await ejs.renderFile('./table.ejs', {
            header: table.header,
            rows: table.rows,
        });
        return tableInfo
    }
}