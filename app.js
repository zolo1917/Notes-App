// node npm validator version 10.8.0
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const getnotes = require ('./notes.js');


// console.log(yargs.argv);

//customize yargs version number
yargs.version("1.1.0");

//Create add
yargs.command({
    command: 'add',
    description : 'Add a new note',
    handler : function() {
        console.log('adding note');
    }
}).parse();

//Create Remove command
yargs.command({
    command: 'remove',
    description : 'Remove a note',
    handler : function() {
        console.log('Removing note');
    }
}).parse();

//Create Read
yargs.command({
    command: 'read',
    description : 'Read an existing note',
    handler : function() {
        console.log('Reading note');
    }
}).parse();

//Create List
yargs.command({
    command: 'list',
    description : 'Listing all existing notes',
    handler : function() {
        console.log('Listing notes');
    }
}).parse();


// console.log(process.argv[2]);