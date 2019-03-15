const {ObjectID} = require('mongodb')
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




// app.get('/tache/:id',(requete,reponse)=>{
//     var id = requete.params.id;
//
//
//     if(ObjectID.isValid(id)){
//         Tache.findById(id).then((taches)=>{
//             reponse.send({taches})
//         }).catch((e)=>{
//             reponse.status(400).send();
//         });
//     }
//     else {
//         return reponse.status(404).send();
//     }
//
//
//
// });


app.get('/tache/:mongoID',(requete,reponse)=> {
    var mongoID = requete.params.mongoID;

    if (!ObjectID.isValid(mongoID)) {
        return reponse.status(404).send();
    }
    Tache.findById(mongoID).then((taches)=>{
        if(!taches){
            return reponse.status(404).send();
        }
        reponse.send({taches});

    }

    ).catch((erreur)=>{
        reponse.status(400).send();
    })
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