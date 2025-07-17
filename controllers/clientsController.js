// controllers/clientsControllers.js

const Client = require("../models/client");
const Note = require("../models/note");

// Show all clients for the logged-in user 

const index = async (req, res) => {
    try {
        const clients = await Client.find({ owner: req.session.user._id});
        res.render("clients/index", { clients});
    } catch (error) {
        console.error(error);
        res.redirect("/");

    }
};

// Show form to create a new client 
const newClient = (req, res) => {
    res.render("clients/new");

};

//Create a new client in the database

const create = async (req, res) => {
    try {
        const newClient = new Client({
            ...req.body,
            owner: req.session.user._id,
        });
        await newClient.save();
        res.redirect("/clients");
    } catch (error) {
      console.error(error);
      res.redirect("/clients/new");
    }
};

//Show a single client and their notes 

const show = async (req, res) => {
    try {
        const clientData = await Client.findOne ({ _id: req.params.id, owner: req.session.user._id})
        .populate("notes");
        res.render("clients/show", {clientData});
    } catch (error) {
        console.error(error);
        res.redirect("/clients")
    }
};
// Show form to edit a client
const edit = async (req, res) => {
    try {
        const clientData = await Client.findOne ({ _id: req.params.id, owner: req.session.user._id})
        res.render("clients/edit", { clientData});

    } catch (error) {
        console.error(error);
        res.redirect("/clients");
    }
}
//update a client in the database
const update = async (req, res) => {
    try {
        await Client.findOneAndUpdate(
            { _id: req.params.id, owner: req.session.user._id},
        req.body, 
            { new: true }
        );
        res.redirect(`/clients/${req.params.id}`);
    } catch (error) {
        console.error(error);
        res.redirect("/clients")
    }
};

//Delete a client

const deleteClient = async (req, res) => {
    try {
        await Client.deleteOne({_id: req.params.id, owner: req.session.user._id});
        res.redirect("/clients");
    } catch (error) {
        console.error(error);
        res.redirect("/clients")
    }
};

// Export all controller functions
module.exports = {
    index, 
    new: newClient, 
    create, 
    show,
    edit,
    update,
    delete: deleteClient 
    

};



