const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/enregistrement',{useNewUrlParser: true}, (erreur,db)=>{

    if(erreur){

        return console.log ('Connection Impossible');
    }

    console.log('Connection établie au serveur MongoDB');


    // db.collection('utilisateur').find({enregistrement: false}).toArray().then((document)=>{
    //     console.log('utilisateur');
    //     console.log(JSON.stringify(document,undefined,2));
    //
    // }, (erreur)=>{
    //
    //     console.log(erreur);
    // })

    db.collection('utilisateur').find({_id: new ObjectID('5c44d6bfde996ec960a09eb7')}).toArray().then( (document)=> {

        console.log(JSON.stringify(document,undefined,2));
    })

    db.close();
});