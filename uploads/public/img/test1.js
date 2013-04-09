fs = require('fs');
var data = fs.readFileSync('./100x100.png');
data.length
fs.writeFileSync('./1.png', data);
fs.writeFileSync('./2.png', data, 'binary');
