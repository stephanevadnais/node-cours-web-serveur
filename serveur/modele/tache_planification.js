var {mongoose} = require('../db/mongooseConfigurationConnection');
const {ObjectID} = require('mongodb');



var TemplateTache = new mongoose.Schema({
    texte: {
        type:String,
            required:true,
            minlength:1,
            trim:true
    },
    complet:{
        type:Boolean,
    default:false
    },
    dateComplete: { type: String, default: null },
    createur:
        {type:ObjectID, required:true}


});




var Tache = mongoose.model('NouvelleTache',TemplateTache);

module.exports = {Tache} ;