//routes/notes.js
const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notesController");
const note = require("../models/note");

// Auth middleware

function isAuthenticated(req, res, next) {
    if (req.session.user) return next();
    res.redirect("/auth/sign-in");
}

//Create Note Routes 

router.post("/", isAuthenticated, notesController.create);

//Edit a note 
router.get("/:id/edit", isAuthenticated, notesController.edit);

//Update a note

router.put("/:id", isAuthenticated, notesController.update)

//Delete Notes
router.delete("/:id", isAuthenticated, notesController.delete);

module.exports = router;