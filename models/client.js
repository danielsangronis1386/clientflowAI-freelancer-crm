
//models/client.js
const mongoose = require("mongoose");

//  Schema Definition 
const clientSchema = new mongoose.Schema({
    // Basic Client Info 
    name: { type: String, required: true},
    email: String,
    phone: String, 

    //Client Category for Hairstylist 
    category: {
        type: String,
        enum: ["Ecommerce", "Editorial", "Campaign", "Wedding", "VIP Artist"],
        default: "Editorial",
    },
    // Reference to Notes: each client can have many notes 
    notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Note"}],

    // Reference to the User who Owns this client
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
}, { timestamps: true});

module.exports = mongoose.model("Client", clientSchema)
    


