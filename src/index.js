const Reader = require('./Services/Reader');
const Writer = require('./Services/Writer');
const myChange = require('./Modules/Changes')

const read = new Reader()
read.ReadFile('docs/myDoc.csv')

const write = new Writer()
write.WriteFile('docs/myDoc.csv', myChange)