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
        service.createNote(note, (error, data) => {
            if (error) {
                res.status(500).send({
                    success: false,
                    message: "Some error occurred while creating note"
                });
            } else {
                res.status(200).send({
                    success: true,
                    message: "Notes created successfully!",
                    data: data
                });
            }
        });
    };

    // Retrieve and return all notes from the database.
    findAll = (req, res) => {
        service.findAllNotes((error, data) => {
            if (error) {
                res.status(500).send({
                    success: false,
                    message: "Some error occurred while retrieving note"
                });
            } else {
                res.status(200).send({
                    success: true,
                    message: "Notes retrieved successfully!",
                    data: data
                });
            }
        });
    };

    // Find a single note with a noteId
    findOne = (req, res) => {
        service.findNoteById(req.params.noteId, (error, data) => {
            if (error) {
                res.status(500).send({
                    success: false,
                    message: "Some error occurred while retrieving note"
                });
            } else {
                res.status(200).send({
                    success: true,
                    message: "Note retrieved successfully!",
                    data: data
                });
            }
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
        service.updateNoteById(req.params.noteId, note, (error, data) => {
            if (error) {
                res.status(500).send({
                    success: false,
                    message: "Some error occurred while updating note"
                })
            } else {
                res.status(200).send({
                    success: true,
                    message: "Note updated successfully!",
                    data: data
                })
            }
        });
    };

    // Delete a note with the specified noteId in the request
    delete = (req, res) => {
        service.deleteNoteById(req.params.noteId, (error, data) => {
            if (error) {
                res.status(500).send({
                    success: false,
                    message: "Some error occurred while deleting note"
                });
            } else {
                res.status(200).send({
                    success: true,
                    message: "Note deleted successfully!",
                    data: data
                });
            }
        });
    };
}
module.exports = new NoteController();