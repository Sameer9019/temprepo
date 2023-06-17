const os = require('os');
const path = require('path');
const {readFileSync,writeFileSync} = require('fs');
const {readFile,writeFile} = require('fs');
const { error } = require('console');
//info about current user

const user =os.userInfo()
// console.log(user);

//System uptime in seconds

const time = os.uptime();
// console.log(time);

const current ={
    name:os.type(),
    release:os.release(),
    total:os.totalmem(),
    free:os.freemem()

}

// console.log(current);

// console.log(path.sep);

// const first =readFileSync('./load/first.txt','utf8')
// const second =readFileSync('./load/second.txt','utf8')

// console.log(first,second);

// const first1 =writeFileSync('./load/first.txt','Hiii')
// console.log(first1);

readFile('./load/.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
    }
    console.log(result);
})
