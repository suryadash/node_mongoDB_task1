const mongoose = require('mongoose')
const schema = mongoose.Schema

const admSchema = new schema({
    userName:{
        type : String,
        unique : true,
        required : true
    },
    role:{
        type: String
    }
    }
    
)

module.exports =mongoose.model('Admin', admSchema)