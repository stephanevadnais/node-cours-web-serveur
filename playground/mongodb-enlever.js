const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/enregistrement',{useNewUrlParser: true}, (erreur,db)=>{

    if(erreur){

        return console.log ('Connection Impossible');
    }

    console.log('Connection établie au serveur MongoDB');



    db.collection('utilisateur').findOneAndDelete({enregistrement:false}).then((resultat)=>{
        console.log(resultat);
    })

    //db.close();
});