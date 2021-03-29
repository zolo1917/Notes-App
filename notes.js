const fs = require('fs');


function getNotes (){
    return "your notes";
}
 
 const addNote = function (title, body){
    console.log("loading Notes");
    const notes  = loadNotes();
    notes.push({
        title: title,
        body: body
    });
    console.log(notes);
    saveNotes(notes);
}

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
};