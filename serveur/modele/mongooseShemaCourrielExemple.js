var {mongoose} = require('../db/mongooseConfigurationConnection');
require('mongoose-type-email');
var formatageDate = require('dateformat');
var moment = new Date();
formatageDate.masks.perso = 'dd/mm/yyyy, h"h"MM TT  "Enregistrement Accomplis!"';
var Date_Enregistrement = formatageDate(moment, "perso");
console.log(Date_Enregistrement);





var TemplateUtilisateur = new mongoose.Schema(
    {
        Enregistrement: {
            Nom: mongoose.SchemaTypes.String,
            Prenom: mongoose.SchemaTypes.String,
            courriel: {
                travail: mongoose.SchemaTypes.Email,
                maison: mongoose.SchemaTypes.Email
            },
            Date: mongoose.SchemaTypes.String

        }

    }

);


var Utilisateur = mongoose.model('Nouveau_Utilisateur',TemplateUtilisateur);



module.exports = {Utilisateur};
module.exports = {Date_Enregistrement};