//1

for(let i=0; i<10; i++){
    console.log(i+1);
}

//2

let sum=0;
let i=0;
while(i<10){
    sum+=i+1;
    i++;
}


//3

 str="Hello world";
 let count=0;
 for(let i=0; i<str.length; i++){
    if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
        count++;
    }
 }
 console.log(count);



 //4
 function reverseNumber(number) {
    let reversedNumber = 0;
  
    while (number > 0) {
      reversedNumber = (reversedNumber * 10) + (number % 10);
      number = Math.floor(number / 10);
    }
  
    return reversedNumber;
  }
  
  const input = 12345;
  const reversed = reverseNumber(input);
  console.log(reversed);


  //5
  function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  
  const input = "racecar";
  const isPalin = isPalindrome(input);
  console.log(isPalin);


  //6
  const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});



//7
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>Hello World!</h1></body></html>\n');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});



//8
//javascript.js
exports.getCurrentDateTime = () => {
    const currentDate = new Date();
    return currentDate.toLocaleString();
  };


//server.js
const http = require('http');
const myDateTime = require('./myDateTime');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Current date and time: ${myDateTime.getCurrentDateTime()}\n`);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});




//9
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  fs.readFile('./index.html', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Error reading the file.');
    } else {
      res.end(data);
    }
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});



//10
const fs = require('fs');

const contentToAppend = 'Hello content!\n';

fs.appendFile('mynewfile1.txt', contentToAppend, (err) => {
  if (err) {
    console.error('Error appending to file:', err);
  } else {
    console.log('Content appended to file successfully!');
  }
});


//11
const fs = require('fs');

const fileName = 'mynewfile2.txt';
const contentToWrite = 'Hello content!';

fs.open(fileName, 'w', (err, file) => {
  if (err) {
    console.error('Error creating file:', err);
  } else {
    fs.writeFile(file, contentToWrite, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Content written to file successfully!');
      }
    });
  }
});


//12
const fs = require('fs');

const fileName = 'mynewfile3.txt';
const contentToWrite = 'Hello content!';

fs.writeFile(fileName, contentToWrite, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Content written to file successfully!');
  }
});

//13
const fs = require('fs');

const fileName = 'mynewfile1.txt';
const contentToAppend = ' This is my text.';

fs.appendFile(fileName, contentToAppend, (err) => {
  if (err) {
    console.error('Error appending to file:', err);
  } else {
    console.log('Content appended to file successfully!');
  }
});


//14
const fs = require('fs');

const fileName = 'mynewfile2.txt';

fs.unlink(fileName, (err) => {
  if (err) {
    console.error('Error deleting file:', err);
  } else {
    console.log('File deleted successfully!');
  }
});


//15
const fs = require('fs');

const oldFileName = 'mynewfile1.txt';
const newFileName = 'myrenamedfile.txt';

fs.rename(oldFileName, newFileName, (err) => {
  if (err) {
    console.error('Error renaming file:', err);
  } else {
    console.log('File renamed successfully!');
  }
});


//16
function multiplyByTwo(number, callback) {
    const result = number * 2;
    callback(result);
  }
  
  function callback(result) {
    console.log('Result:', result);
  }
  
  multiplyByTwo(5, callback);

  
  //17
  function calculateSum(numbers, callback) {
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    callback(sum);
  }
  
  function callback(sum) {
    console.log('Sum:', sum);
  }
  
  calculateSum([2, 4, 6, 8], callback);

  
  //18
  function getUserData(callback) {
    setTimeout(() => {
      const user = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        age: 25
      };
      callback(user);
    }, 2000);
  }
  
  function callback(user) {
    console.log('User Data:');
    console.log(user);
  }
  
  getUserData(callback);

  //19
  function getRandomNumber() {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      
      if (randomNumber >= 5) {
        resolve(randomNumber);
      } else {
        reject('Generated number is less than 5');
      }
    });
  }
  
  getRandomNumber()
    .then((number) => {
      console.log('Generated random number:', number);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    //20
    const getRandomNumber = new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        
        if (randomNumber >= 5) {
          resolve(randomNumber);
        } else {
          reject('Generated number is less than 5');
        }
      });
      
      getRandomNumber
        .then((number) => {
          console.log('Generated random number:', number);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

        
        //21

        function checkFileExists(filePath) {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                // Simulating file existence check
                const fileExists = true; // Replace with actual file existence check code
          
                if (fileExists) {
                  resolve('File exists');
                } else {
                  reject('File does not exist');
                }
              }, 1000);
            });
          }
          
          const filePath = '/path/to/file.txt';
          
          checkFileExists(filePath)
            .then((message) => {
              console.log(message);
            })
            .catch((error) => {
              console.error(error);
            });
          



  


