const fs = require('fs');


function getNotes (){
    return "your notes";
}
 
 const addNote = function (title, body){
    const notes  = loadNotes();
    
}

const loadNotes = function () {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
};