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

//Create a new client in the database

const create = async (req, res) => {
    try {
        const newClient = new Client({
            ...req.body,
            owner: req.session.user._id,
        })
    }
}
