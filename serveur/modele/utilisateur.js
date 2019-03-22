var {mongoose} = require('../db/mongooseConfigurationConnection');
require('mongoose-type-email');

var formatageDate = require('dateformat');
var moment = new Date();
formatageDate.masks.perso = 'dd/mm/yyyy, h"h"MM TT  "Enregistrement Accomplis!"';
var Date_Enregistrement = formatageDate(moment, "perso");


var TemplateUtilisateur = new mongoose.Schema(
    {
        Enregistrement: {
            Nom: mongoose.SchemaTypes.String,
            Prenom: mongoose.SchemaTypes.String,
            courriel: {
                travail: mongoose.SchemaTypes.Email,
                maison: mongoose.SchemaTypes.Email
            },
            date: { type: String, default: Date_Enregistrement }

        }

    }

);


var Utilisateur = mongoose.model('Nouveau_Utilisateur',TemplateUtilisateur);

module.exports = {Utilisateur};


