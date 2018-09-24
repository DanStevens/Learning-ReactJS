var fs = require('fs');

console.log(1);
function promiseFs(file) {
  console.log(3);
  return new Promise((resolve, reject) => {
    console.log(4);
    fs.readFile(file, (err, data) => {
      console.log(6);
      err ? reject(err) : resolve(data);
    });
  });
}

console.log(2);
promiseFs('./promise-fs.js').then(data => {
  console.log(7);
  console.log(data.toString());
}).catch(err => {
  console.log(err);
});

console.log(5);