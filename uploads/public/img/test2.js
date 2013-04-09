fs = require('fs');
var data = fs.readFileSync('./100x100.png');
data.length
fs.writeFileSync('./1.png', data);
fs.writeFileSync('./2.png', data, 'binary');
data2 = fs.readFileSync('./100x100.png', 'binary');
data2.length
adata2 = fs.readFileSync('./100x100.png', 'ascii');
adata2.length
udata2 = fs.readFileSync('./100x100.png', 'utf8');
udata2.length
fs.writeFileSync('./x1.png', data2);
fs.statSync('x1.png')
fs.writeFileSync('./x2.png', data2, 'binary');
fs.statSync('x2.png')
adata2.length
adata2.toString('binary').length
adata2.toString('binary', 0, adata2.length -1).length
adata2.toString('binary', 0, adata2.length).length
adata2.toString('hex', 0, adata2.length).length
adata2.toString('hex')
bdata2
bdata2 = fs.readFileSync('./100x100.png', 'binary');
bdata2.length
adata2
adata2.length
adata2
bdata2
fs.rename('*.png', '*.png.bak');

fs.writeFileSync('adata2.png', adata2, 'binary');
fs.writeFileSync('bdata2.png', bdata2, 'binary');
