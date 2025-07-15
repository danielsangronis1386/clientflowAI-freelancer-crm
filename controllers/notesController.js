// controllers/notesControllers.js
const Note = require("../models/note");
const Client = require ("../models/client");


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

         res.redirect(`/clients/${req.body.clientId}`);
  } catch (error) {
    console.error(error);
    res.redirect(`/clients/${req.body.clientId}`);
  }
};

//Delete the Note 

// Delete the note if the use is the owner 

const deleteNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        //only allow deletion if user owna the note
        if (!note || note.owner.toString() !== req.session.user._id.toString()){
            return res.redirect("/clients");
        }
        //Remove note reference from client's notes array
        await Client.findByIdAndUpdate(note.client, {
            $pull: { notes: note._id},
        });
        //Delete the note from the notes collection
        await Note.findByIdAndDelete(note._id);

        res.redirect(`/clients/${note.client}`);
    } catch (err) {
        console.error(err);
        res.redirect("/clients");
    }
};

module.exports = {
    create,
    delete: deleteNote,
};
