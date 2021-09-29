export default class Table{
    constructor(props){
        this.header = props[0];
        props.shift();
        this.rows = props;
        
    }

    get rowsCount(){
        return this.rows.length;
    }
    
    get columnsCount(){
        return this.header.length;
    }
}
