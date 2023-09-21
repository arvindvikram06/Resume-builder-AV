const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    Firstname:{
        type:String,
        default:''
    },
    Lastname:{
        type:String,
        default:''
    },
    Email:{
        type:String,
        default:''
    },
    LinkedIn:{
        type:String,
        default:''
    },
    Mobilenumber:{
        type:String,
        default:''
    },
    Portfolio:{
        type:String,
        default:''
    },
    Dob:{
        type:String,
        default:''
    },
    country:{
        type:String,
        default:''
    },
    state:{
        type:String,
        default:""
    },
    city:{
        type:String,
        default:""
    },
    Address:{
        type:String,
        default:""
    },
    Objective:{
        type:String,
        default:''
    },
    photo:{
        type:String,
        default:''
    },
    Experience: {type:Array,default:[]},
    skills:{type:Array,default:[]},
    education: {type:Array,default:[]},
    Certification: {type:Array,default:[]},
    Interest:{type:Array,default:[]},
    Projects:{type:Array,default:[]}

}
    ,{
        timestamps: true
    }
)
const userModel = mongoose.model("users", userSchema)
module.exports = userModel