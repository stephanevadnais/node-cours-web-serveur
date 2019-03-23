var mongoose = require('mongoose');

var Tache = mongoose.model('tache', {
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
    dateComplete: {
        type:Number,
        default: null
    }
});

module.exports = {Tache} ;