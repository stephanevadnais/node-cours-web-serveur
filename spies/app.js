var db = require ('./db.js')


module.exports.enregistrement = (courriel, motDepasse) =>{

    db.sauvegardeUtilisateur({
        courriel,
        motDepasse
    });
}