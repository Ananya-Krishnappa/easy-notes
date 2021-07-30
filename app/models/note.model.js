const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

const Note = mongoose.model('Note', NoteSchema);

class NoteModel {
    createNote = (note, callback) => {
        const newNote = new Note({
            title: note.title || "Untitled Note",
            content: note.content
        });
        newNote.save((err, doc) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, doc);
            }
        });
    }

    findAllNotes = (callback) => {
        Note.find((err, doc) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, doc);
            }
        });
    }

    findNoteById = (noteId, callback) => {
        Note.findById(noteId, (err, doc) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, doc);
            }
        });
    }

    updateNoteById = (noteId, note, callback) => {
        Note.findByIdAndUpdate(noteId, note, {
            new: true
        }, (err, doc) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, doc);
            }
        });
    }

    deleteNoteById = (noteId, callback) => {
        Note.findByIdAndRemove(noteId, (err, doc) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, doc);
            }
        });
    }
}
module.exports = new NoteModel();