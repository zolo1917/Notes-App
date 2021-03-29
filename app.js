// node npm validator version 10.8.0
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require ('./notes.js');
const { string, argv } = require('yargs');

//customize yargs version number
yargs.version("1.1.0");

//Create add
yargs.command({
    command: 'add',
    description : 'Add a new note',
    builder : {
        title : {
            describe : "Note title",
            demandOption : true,
            type : string
        },
        body : {
            describe : "Note content",
            demandOption : true,
            type : string
        }
    },
    handler : function(argv) {
        // console.log("Title : " + argv.title + " body : " + argv.body);
        notes.addNote(argv.title, argv.body)
    }
});

//Create Remove command
yargs.command({
    command: 'remove',
    description : 'Remove a note',
    builder : {
        title : {
            describe : "Note title",
            demandOption : true,
            type : string
        }
    },
    handler : function(argv) {
        console.log('Removing note Title : ', argv.title);
    }
});

//Create Read
yargs.command({
    command: 'read',
    description : 'Read an existing note',
    builder : {
        title : {
            describe : "note title",
            demandOption : true,
            type : string
        }
    },
    handler : function(argv) {
        console.log('Reading note Title : ', argv.title);
    }
});

//Create List
yargs.command({
    command: 'list',
    description : 'Listing all existing notes',
    handler : function() {
        console.log('Listing notes');
    }
});

yargs.parse();
// console.log(process.argv[2]);