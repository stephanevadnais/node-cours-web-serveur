const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/enregistrement',{useNewUrlParser: true}, (erreur,db)=>{

    if(erreur){

        return console.log ('Connection Impossible');
    }

    console.log('Connection établie au serveur MongoDB');

       db.collection('utilisateur').insertOne({
           nom: 'Vadnais',
           prénom:'Stéphane',
           âge:50,
           Localité:'Canada'

    }, (erreur,resultat)=>{

        if(erreur){

            return console.log('Impossible d\'insérer dans la base de données MongoDB',erreur);
        }

        console.log(JSON.stringify(resultat.ops,undefined, 5));
    });


    db.close();
});