const noteModel = require('../models/note.model.js');

class NoteService {
    createNote = (note, callback) => {
        noteModel.createNote(note, (err, doc) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, doc);
            }
        });
    }

    findAllNotes = (callback) => {
        noteModel.findAllNotes((err, doc) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, doc);
            }
        });
    }

    findNoteById = (noteId, callback) => {
        noteModel.findNoteById(noteId, (err, doc) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, doc);
            }
        });
    }

    updateNoteById = (noteId, note, callback) => {
        noteModel.updateNoteById(noteId, note, (err, doc) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, doc);
            }
        });
    }

    deleteNoteById = (noteId, callback) => {
        noteModel.deleteNoteById(noteId, (err, doc) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, doc);
            }
        });
    }
}
module.exports = new NoteService();