const path= require('path');
const fs=require('fs');
//The above two modules have been required to resolve the path to inbox.js
const solc=require('solc');

const cPath=path.resolve(__dirname,'contract','DVM.sol'); //resolving the solidity file path
const source =fs.readFileSync(cPath,'utf8'); //getting the source code of our contract
console.log(solc.compile(source,1))

//module.exports=solc.compile(source,1).contracts[':Inbox'];// To compile the source code in solidity compiler

//NOTE: The second parameter is the no. of contracts that we'll be compiling
