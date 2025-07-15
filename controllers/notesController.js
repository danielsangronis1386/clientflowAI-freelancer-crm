// controllers/notesControllers.js
const Note = require("../models/note");
const Client = require ("../models/clients");
const note = require("../models/note");

//Creat a new note and link it to the client 

const create = async (req, res) => {
    try {
        const newNote = new Note({
            content: req.body.content, 
            client: req.body.clientId, 
            owner: req.session.user._id
        });
        await newNote.save ();
        //Link the notes to the client
        const client = await Client.findById(req.body.clientId);
        client.notes.push(newNote._id);
        await client.save();

        res.redirect(`/clients/${req.body.clientID}`);

    } catch (error) {
        console.error(error);
        res.redirect(`/clients/${req.body.clientID}`);
    }
};

module.exports = {
    create,
};
