var {Utilisateur} = require('../modele/utilisateur');


var authentification = (requete,reponse,suivant)=>{

    var token = requete.header('x-auth');

    Utilisateur.findByToken_trouverLeJeton(token).then((utilisateur)=>{
        if(!utilisateur){
            return new Promise.reject();
        }

        requete.utilisateur = utilisateur;
        requete.token = token;
        suivant();

    }).catch((erreur)=>{

        reponse.status(401).send();
    });

}

module.exports = {authentification};