export default class Table{
    constructor(props){
        this.header = props[0];
        props.shift();
        this.rows = props;
    }
}
