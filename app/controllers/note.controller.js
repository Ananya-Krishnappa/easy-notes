const service = require('../service/note.service.js');

class NoteController {
    // Create and Save a new Note
    create = (req, res) => {
        // Validate request
        if (!req.body.content) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        }

        // Create a Note
        const note = {
            title: req.body.title || "Untitled Note",
            content: req.body.content
        };
        service.createNote(note).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
    };

    // Retrieve and return all notes from the database.
    findAll = (req, res) => {
        service.findAllNotes()
            .then(notes => {
                res.send(notes);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving notes."
                });
            });
    };

    // Find a single note with a noteId
    findOne = (req, res) => {
        service.findNoteById(req.params.noteId)
            .then(note => {
                if (!note) {
                    return res.status(404).send({
                        message: "Note not found with id " + req.params.noteId
                    });
                }
                res.send(note);
            }).catch(err => {
                if (err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Note not found with id " + req.params.noteId
                    });
                }
                return res.status(500).send({
                    message: "Error retrieving note with id " + req.params.noteId
                });
            });
    };

    // Update a note identified by the noteId in the request
    update = (req, res) => {
        // Validate Request
        if (!req.body.content) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        }
        const note = {
            title: req.body.title || "Untitled Note",
            content: req.body.content
        }
        // Find note and update it with the request body
        service.updateNoteById(req.params.noteId, note)
            .then(note => {
                if (!note) {
                    return res.status(404).send({
                        message: "Note not found with id " + req.params.noteId
                    });
                }
                res.send(note);
            }).catch(err => {
                if (err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Note not found with id " + req.params.noteId
                    });
                }
                return res.status(500).send({
                    message: "Error updating note with id " + req.params.noteId
                });
            });
    };

    // Delete a note with the specified noteId in the request
    delete = (req, res) => {
        service.deleteNoteById(req.params.noteId)
            .then(note => {
                if (!note) {
                    return res.status(404).send({
                        message: "Note not found with id " + req.params.noteId
                    });
                }
                res.send({
                    message: "Note deleted successfully!"
                });
            }).catch(err => {
                if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                    return res.status(404).send({
                        message: "Note not found with id " + req.params.noteId
                    });
                }
                return res.status(500).send({
                    message: "Could not delete note with id " + req.params.noteId
                });
            });
    };
}
module.exports = new NoteController();