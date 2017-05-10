const fs = require('fs'),
  path = require('path'),
  filePath = path.join(__dirname, 'info.txt');

fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
  if (!err) {
    // console.log('received data: ' + data);
    // response.writeHead(200, { 'Content-Type': 'text/html' });
    // response.write(data);
    // response.end();
    sortData(data);
  } else {
    console.log(err);
  }
});

const sortData = (data) => {
  data = data.split('\n').sort().join('\n');
  console.log(data);
  fs.writeFile('output.txt', data, 'utf8', () => {
    console.log('file saved!');
  });
};