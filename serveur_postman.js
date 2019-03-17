const {ObjectID} = require('mongodb')
const express = require('express');
var app = express();
const port = process.env.PORT || 3004;
var {mongoose} = require('./serveur/db/mongooseConfigurationConnection');
var {Tache}= require('./serveur/modele/tache_planification');
var {Utilisateur} = require('./serveur/modele/utilisateur');
var {Date_Enregistrement} = require('./serveur/modele/utilisateur');
var bodyparser = require('body-parser');
var hbs = require('hbs');
var fs = require('fs');



hbs.registerPartials(__dirname + '/views/partie');
app.set('view engine', 'hbs');
// app.use((requete,reponse,next)=>{
//     reponse.render('maintenance.hbs');
//
// });







app.use((requete, reponse, next)=>{
    var demande = ()=>{
        var heure = new Date().getHours();
        var minutes = new Date().getMinutes().toPrecision(2);
        return heure + ":"+ minutes ;
    }

    var log = `Une requête a été faite à : ${demande()} avec le protocole ${requete.method} et URL est ${requete.url}`;

    console.log(log);

    fs.appendFile('serveur.txt',log + '\n', (erreur)=>{
        if(erreur){
            console.log(erreur);
        }
    } );
    next();
});


app.use(express.static(__dirname + '/publique'));

hbs.registerHelper('journee', ()=>{
    var jour = new Date().toLocaleDateString();
    return jour;
});
hbs.registerHelper('obtenirHeure', ()=>{
    var heure = new Date().getHours();
    var minutes = new Date().getMinutes();
    var jour = new Date().toLocaleDateString()
    return heure + ":" + minutes ;

});
hbs.registerHelper('list', function(collaborateur, caractéristiques) {
    var out = "<ul>";

// fn fonction interne handlebar qui boucle sur tout et qui retourne la ligne en une String, prend en argument un objet d'un tableau dans ce cas

    for(var i=0, nombres=collaborateur.length; i<nombres; i++) {
        out = out + "<li>" + caractéristiques.fn(collaborateur[i]) + "</li>";

    }

    return out + "</ul>";
});


hbs.registerHelper('majusculeTXT',(txt)=>{
    return txt.toUpperCase();
});

app.get('/collaborateur',(requete,reponse)=>{
    reponse.send({

        date: new Date().toLocaleDateString(),
        auteur: 'Stéphane Vadnais',
        collaborateur: [
            {prenom: "Yehuda", nom: "Katz", age:"age:" +22},
            {prenom: "Carl", nom: "Lerche", age: "age:" +54},
            {prenom: "Alan", nom: "Johnson", age:"age:" + 33}
        ]

    });
});

app.get('/projet',(requete,reponse)=>{
        reponse.render('projet.hbs',)
    }
);

app.get('/direct',(requete,reponse)=>{
        reponse.render('direct.hbs',)
    }
);

app.get('/reference',(requete,reponse)=> {


    reponse.render('reference',{

        date: new Date().toLocaleDateString(),
        auteur: 'Stéphane Vadnais',
        collaborateur: [
            {prenom: "Yehuda", nom: "Katz", age:"age:" +22},
            {prenom: "Carl", nom: "Lerche", age: "age:" +54},
            {prenom: "Alan", nom: "Johnson", age:"age:" + 33}
        ]

    });
});

app.get('/', (requete,reponse)=>{

    reponse.send("Bienvenue dans l'interface Express");
});



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




app.listen(port,()=>{
    console.log(`Sur le port ${port}`)
});

module.exports = {app}