const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

const Note = mongoose.model('Note', NoteSchema);

class NoteModel {
    createNote = (note) => {
        console.log("note", note);
        const newNote = new Note({
            title: note.title || "Untitled Note",
            content: note.content
        });

        // Save Note in the database
        return newNote.save()
            .then(data => {
                return data;
            }).catch(err => {
                console.log(err);
                let message = err.message || "Error occurred while creating the Note.";
                throw message;
            });
    }

    findAllNotes = () => {
        return Note.find()
            .then(notes => {
                return notes;
            }).catch(err => {
                let message = err.message || "Error occurred while retrieving all notes";
                throw message;
            });
    }

    findNoteById = (noteId) => {
        return Note.findById(noteId)
            .then(note => {
                return note;
            }).catch(err => {
                let message = err.message || "Error occurred while finding a note by id";
                throw message;
            });
    }

    updateNoteById = (noteId, note) => {
        return Note.findByIdAndUpdate(noteId, note, {
                new: true
            })
            .then(note => {
                return note;
            }).catch(err => {
                let message = err.message || "Error occurred while updating the note by id";
                throw message;
            });
    }

    deleteNoteById = (noteId) => {
        return Note.findByIdAndRemove(noteId)
            .then(note => {
                return "Note deleted successfully!";
            }).catch(err => {
                let message = err.message || "Error occurred while deleting the note by id";
                throw message;
            });
    }
}
module.exports = new NoteModel();