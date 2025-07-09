const mongoose = require("mongoose")

// Schema Defintion for a Note 

const noteSchema = new mongoose.Schema ({
    // t=Text content of the note 
    content: {
        type: String,
        required: true, 
    },

    // Link the note to a specific client
    client: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Client", 
        required: true,
    },

    //Link the note to the user who created it for security 
    owner:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true, 
    }
},{ timestamps: true })

// Export the Note model

module.exports = mongoose.model("Note", noteSchema)