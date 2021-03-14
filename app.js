// node npm validator version 10.8.0
const validator = require('validator');
const chalk = require('chalk');
const getnotes = require ('./notes.js');

if(process.argv[2] === 'add'){
    console.log('adding note');
}else if (process.argv[2] === 'remove'){
    console.log('removing note')
}



console.log(process.argv[2]);