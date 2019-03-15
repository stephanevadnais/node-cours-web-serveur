const {ObjectID} = require('mongodb')

const {mongoose} = require('../db/mongooseConfigurationConnection');
const {Tache} = require('../modele/tache_planification');

var id ='5c856ee29c8e896e3abd6d471'


if(!ObjectID.isValid(id)){
    console.log('ID n est pas valide');
}


Tache.findById(id).then((tache)=>{
     if(!tache){
         return console.log('La tache n a pas ete trouve')
     }
     else {
         console.log('Voici la tache',tache);
     }
}).catch((erreur)=>{
    console.log(erreur);
});
// Tache.findOneAndDelete({
//     _id: id
//
// }).then((tache)=>{
//     console.log('La tache a ete supprimer',tache);
// })

