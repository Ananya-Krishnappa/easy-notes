const noteModel = require('../models/note.model.js');

class NoteService {
    createNote = (note) => {
        return new Promise(function (resolve, reject) {
            try {
                noteModel.createNote(note).then(note => {
                        resolve(note);
                    })
                    .catch(err => {
                        let message = err.message || "Error while creating the new note";
                        reject(message);
                    });
            } catch (err) {
                let message = err.message || "Error while creating the new note";
                reject(message);
            }
        });
    }

    findAllNotes = () => {
        return new Promise(function (resolve, reject) {
            try {
                noteModel.findAllNotes().then(notes => {
                        resolve(notes);
                    })
                    .catch(err => {
                        let message = err.message || "Error occurred while retrieving all notes";
                        reject(message);
                    });

            } catch (err) {
                let message = err.message || "Error occurred while retrieving all notes";
                reject(message);
            }
        });
    }

    findNoteById = (noteId) => {
        return new Promise(function (resolve, reject) {
            try {
                noteModel.findNoteById(noteId).then(note => {
                        resolve(note);
                    })
                    .catch(err => {
                        let message = err.message || "Error occurred while finding a note by id";
                        reject(message);
                    });
            } catch (err) {
                let message = err.message || "Error occurred while finding a note by id";
                reject(message);
            }
        });
    }

    updateNoteById = (noteId, note) => {
        return new Promise(function (resolve, reject) {
            try {
                noteModel.updateNoteById(noteId, note).then(note => {
                        resolve(note);
                    })
                    .catch(err => {
                        let message = err.message || "Error occurred while updating the note by id";
                        reject(message);
                    });
            } catch (err) {
                let message = err.message || "Error occurred while updating the note by id";
                reject(message);
            }
        });
    }

    deleteNoteById = (noteId) => {
        return new Promise(function (resolve, reject) {
            try {
                noteModel.deleteNoteById(noteId).then(msg => {
                        resolve(msg);
                    })
                    .catch(err => {
                        let message = err.message || "Error occurred while deleting the note by id";
                        reject(message);
                    });
            } catch (err) {
                let message = err.message || "Error occurred while deleting the note by id";
                reject(message);
            }
        });
    }
}
module.exports = new NoteService();