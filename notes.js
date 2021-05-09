const fs = require('fs');

/**
 * Get all the notes in the respective files 
 * @returns 
 */
function getNotes (){
    return "your notes";
}

/**
 * add a note to the existing list
 * @param {String} title 
 * @param {String} body 
 */
const addNote = function (title, body){
    console.log("loading Notes");
    const notes  = loadNotes();
    // Adding code to check if the note title already exists

    existingNote = notes.filter(function (note){
        if(note.title === title){
            return true;
        }else {
            return false;
        }
    });

    if(existingNote.length === 0){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log ("Note added successfully");
    }else {
        console.log ("Title already exists")
    }
}

/**
 * Remove the note from the given list and push the details 
 * @param {String} title 
 */
const removeNote = function ( title ) {
    try{
        // Checking if the notes already exists 
        const notes = loadNotes();
        console.log(notes);
        const filteredNotes = notes.filter((note)=>{
            if(note.title != title){
                return note;
            }
        });
        console.log(filteredNotes);
        // push filtered notes
        saveNotes(filteredNotes);
        console.log("note has been removed successfully");
    }catch(e){
        console.log("An error Has Occured : {} ", e.toString())
        return [];
    }
}

/**
 * read note of a given title
 * @returns note with title
 */
const readNote  = function ( title ) {
    try {
        const notes = loadNotes();
        console.log(notes.filter((note)=>{
            if(note.title === title){
                return note;
            }
        }));

    }catch (e){
        console.log("An error has occured : {}", e.toString());
    }
}
/**
 * load all the notes form the given files 
 * @returns 
 */
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }catch(e){
        console.log("An error Has Occured : {} ", e.toString())
        return [];
    }    
}

const saveNotes = function (notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}
module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote,
    readNote : readNote
};