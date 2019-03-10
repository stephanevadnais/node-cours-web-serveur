const express = require('express');
var app = express();
var {mongoose} = require('./serveur/db/mongooseConfigurationConnection');
var {Tache}= require('./serveur/modele/tache_planification');
var {Utilisateur} = require('./serveur/modele/utilisateur');
var {Date_Enregistrement} = require('./serveur/modele/utilisateur');

var bodyparser = require('body-parser');




app.use(bodyparser.json());


app.post('/tache',(requete,reponse)=>{

    console.log(requete.body);


    var tache = new Tache({
        texte: requete.body.texte


    });

    tache.save().then((document)=>{
        reponse.send(document)

    },(erreur)=>{

        reponse.status(400).send(erreur);
    });
});


app.get('/tache',(requete,reponse)=>{
    Tache.find().then((taches)=>{
        reponse.send({taches})
    }, (erreur)=>{
        reponse.status(400).send(erreur)
    });

});

app.post('/utilisateur',(requete,reponse)=>{



    var utilisateur = new Utilisateur({
        Enregistrement: requete.body.Enregistrement

    });

    utilisateur.save().then((document)=>{
        reponse.send(document)

    },(erreur)=>{

        reponse.status(400).send(erreur);
    });
});

app.get('/utilisateur',(requete,reponse)=>{
    Utilisateur.find().then((utilisateurs)=>{
        reponse.send({utilisateurs})
    }, (erreur)=>{
        reponse.status(400).send(erreur)
    });

});


app.post('/utilisateur',(requete,reponse)=>{



    var utilisateur = new Utilisateur({
        Enregistrement: requete.body.Enregistrement

    });

    utilisateur.save().then((document)=>{
        reponse.send(document)

    },(erreur)=>{

        reponse.status(400).send(erreur);
    });
});

app.get('/utilisateur',(requete,reponse)=>{
    Utilisateur.find().then((utilisateurs)=>{
        reponse.send({utilisateurs})
    }, (erreur)=>{
        reponse.status(400).send(erreur)
    });

});app.get('/utilisateur',(requete,reponse)=>{
    Utilisateur.find().then((utilisateurs)=>{
        reponse.send({utilisateurs})
    }, (erreur)=>{
        reponse.status(400).send(erreur)
    });

});app.post('/utilisateur',(requete,reponse)=>{



    var utilisateur = new Utilisateur({
        Enregistrement: requete.body.Enregistrement

    });

    utilisateur.save().then((document)=>{
        reponse.send(document)

    },(erreur)=>{

        reponse.status(400).send(erreur);
    });
});

app.get('/utilisateur',(requete,reponse)=>{
    Utilisateur.find().then((utilisateurs)=>{
        reponse.send({utilisateurs})
    }, (erreur)=>{
        reponse.status(400).send(erreur)
    });

});


app.listen(3004,()=>{
    console.log('Connection Etablie')
});

module.exports = {app}