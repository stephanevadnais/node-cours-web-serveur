var {mongoose} = require('../db/mongooseConfigurationConnection');
var validator = require('validator');
require('mongoose-type-email');
var _ = require('lodash');
const bcrypt = require('bcryptjs');
var formatageDate = require('dateformat');
var moment = new Date();
formatageDate.masks.perso = 'dd/mm/yyyy, h"h"MM TT "Enregistrement Accomplis!"';
var Date_Enregistrement = formatageDate(moment, "perso");
const jwt = require('jsonwebtoken');


var TemplateUtilisateur = new mongoose.Schema(
    {


        nom: {type: mongoose.SchemaTypes.String},
        prenom: {type: mongoose.SchemaTypes.String},
        surnom:{type:String,required: true, unique:true},
        courriel: {
            travail: {type:String,required: true,trim:true, minlenght:1, unique:true,validate:{
                    validator:validator.isEmail,
                    message:'La {VALUE} est pas valide'
                }},
            maison: {type:String,required: true,trim:true, minlenght:1, unique:true,validate:{
                    validator:validator.isEmail,
                    message:'La {VALUE} est pas valide'
                }},

        },
        date: { type: String, default: Date_Enregistrement },
        password: {
            type:String,
            required:true,
            minlenght:6
        },
        tokens:[{
            access:{
                type:String,
                required:true
            },
            token:{
                type:String,
                required:true
            }
        }]



    }

);



TemplateUtilisateur.methods.toJSON = function(){
    var utilisateur = this;
    var utilisateurObjet = utilisateur.toObject();


    return _.pick(utilisateurObjet, ['surnom', 'courriel']);

};



TemplateUtilisateur.methods.generateAuthToken_genererAuthJeton = function(){
    var utilisateur = this;
    var access = 'auth';
    var token = jwt.sign({_id: utilisateur._id.toHexString(),access}, 'monSecret').toString();

    utilisateur.tokens.push({access,token});

    utilisateur.save();

    return token;

};


TemplateUtilisateur.statics.findByToken_trouverLeJeton = function(token){

    var Utilisateur = this;
    var decoder;

    try{

        decoder = jwt.decode(token, 'monSecret' );
    }

    catch (erreur){

        return new Promise.reject();

    };

    return Utilisateur.findOne({
        '_id': decoder._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });


};





TemplateUtilisateur.pre('save',function(suivant){
    var utilisateur = this;

   if (utilisateur.isModified('password')){
       bcrypt.genSalt(10, (erreur,sel)=>{

           bcrypt.hash(utilisateur.password,sel,(erreur,hash)=>{

               utilisateur.password = hash;
               suivant();
           });
       });
   }
   else{
       suivant();
   }

});

TemplateUtilisateur.statics.findByCredentials_trouverParAccreditation = function(surnom,password){

    var Utilisateur = this;
    return Utilisateur.findOne({surnom}).then((utilisateur)=>{

        if(!utilisateur){
            return Promise.reject();

        }

       return new Promise((resolue,rejeter)=>{
           bcrypt.compare(password,utilisateur.password,(erreur,reponse)=>{
            if(reponse){
                resolue(utilisateur);
            }
            else{
                rejeter();
            }
           });

       });
    });

};














var Utilisateur = mongoose.model('Nouveau_Utilisateur',TemplateUtilisateur);

module.exports = {Utilisateur};


