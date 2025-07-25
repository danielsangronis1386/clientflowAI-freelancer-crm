const express = require("express");
const router = express.Router();
const clientsController = require("../controllers/clientsController")

//Middleware
function isAuthenticated(req, res, next) {
    if (req.session.user) {
        return next();
    }
    res.redirect("/auth/sign-in")
}

// Routes
//Show all clients
router.get("/", isAuthenticated, clientsController.index);

// Show form to add new client
router.get("/new", isAuthenticated, clientsController.new);

// Creat new Client 
router.post("/", isAuthenticated, clientsController.create);

// Show one specific client with their notes
router.get("/:id", isAuthenticated, clientsController.show);

// Show form to edit a client 
router.get("/:id/edit", isAuthenticated, clientsController.edit); 

// Update Client
router.put("/:id/", isAuthenticated, clientsController.update);

// Delete Client
router.delete("/:id/", isAuthenticated, clientsController.delete)

module.exports = router;



