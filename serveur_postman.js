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


app.post('/utilisateur',(requete,reponse)=>{


    var date = new Date_Enregistrement();

    var utilisateur = new Utilisateur({
        Enregistrement: requete.body.Enregistrement

    });

    utilisateur.save().then((document)=>{
        reponse.send(document)

    },(erreur)=>{

        reponse.status(400).send(erreur);
    });
});

app.listen(3002,()=>{
    console.log('Connection Etablie')
});