const Reader = require('./Services/Reader');
const Writer = require('./Services/Writer');

const read = new Reader()
read.ReadFile('docs/myDoc.csv')

const write = new Writer()
write.WriteFile('docs/newWrite.info', 'Hello World! End to Spell')