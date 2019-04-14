const {ObjectID} = require('mongodb');
const {Tache} = require('../modele/tache_planification');
const {Utilisateur} = require('../modele/utilisateur');
const jwt = require('jsonwebtoken');

const utilisateurUnId = new ObjectID;
const utilisateurDeuxId = new ObjectID;

const Utilisateurs = [{
    _id: utilisateurUnId,
    courriel:{
        maison:'vladsteak@gmail.com',
        travail:'stephanevadnais@gmail.com'
    },
    password:'utilisateur_un_password',
    tokens:[{
        access:'auth',
        token: jwt.sign({_id:utilisateurUnId, access: 'auth'},'monSecret').toString()
    }]

},{
    _id:utilisateurDeuxId,
    courriel:{
        maison:'vladsteak@gmail.ca',
        travail:'stephanevadnais@gmail.ca'
    },
    password:'utilisateur_deux_password'

}


]

const Taches = [{
    _id: new ObjectID(),
    texte: 'premiere tache'
}, {
    _id: new ObjectID(),
    texte: 'deuxieme tache',
    complet:'false',
    dateComplete:123
}];

const population_Taches = (suivant)=>{

    Tache.deleteMany({}).then(()=> {
        return Tache.insertMany(Taches);

    }).then(()=> {
        suivant();
    })
};

const population_Utilisateurs = (suivant)=>{

    Utilisateur.deleteMany({}).then(()=>{
        var utilisateurUn = new Utilisateur(Utilisateurs[0]).save();
        var utilisateurDeux = new Utilisateur(Utilisateurs[1]).save();
       return  Promise.all([utilisateurUn,utilisateurDeux])
    }).then(()=>{
        suivant();

        })



}



module.exports = {Taches,Utilisateurs,population_Taches,population_Utilisateurs };

