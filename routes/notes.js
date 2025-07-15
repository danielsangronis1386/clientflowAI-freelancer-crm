//routes/notes.js
const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notesController");

// Auth middleware

function isAuthenticated(req, res, next) {
    if (req.session.user) return next();
    res.redirect("/auth/sign-in");
}

//Create Note Routes 

router.post("/", isAuthenticated, notesController.create);

//Delete Notes
router.delete("/:id", isAuthenticated, notesController.deleted);

module.exports = router;