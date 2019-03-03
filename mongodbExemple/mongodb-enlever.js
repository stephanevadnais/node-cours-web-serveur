const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/enregistrement',{useNewUrlParser: true}, (erreur,db)=>{

    if(erreur){

        return console.log ('Connection Impossible');
    }

    console.log('Connection établie au serveur MongoDB');



    // db.collection('utilisateur').findOneAndDelete({enregistrement:false}).then((resultat)=>{
    //     console.log(resultat);
    // });

    // db.collection('Utilisateurs').insertOne({nom:'Cruz', prénom:'Guermo', âge:45,Localité:'Canada'}).then((resultat)=>{
    //     console.log(resultat);
    // });

    // db.collection('Utilisateurs').findOneAndUpdate({
    //     _id: new ObjectID('5c5713b7ceab8c3280622ae4')
    // },{
    //     $set: {
    //         enregistrement:true
    //     }
    // },{returnOriginal:false}
    // )

    // db.collection('Utilisateurs').findOneAndUpdate({
    //         _id: new ObjectID('5c5713b7ceab8c3280622ae4')
    //     },{
    //         $inc: {
    //             âge:2
    //         }
    //     }
    // )

    // db.collection('Utilisateurs').findOneAndUpdate(
    //     { _id: new ObjectID('5c5713b7ceab8c3280622ae4') },
    //     {
    //         $currentDate: {
    //             modification: true,
    //             "Date Annulation": { $type: "timestamp" }
    //         },
    //         $set: {
    //             status: "Annulé",
    //             "Raison": "Demande de l'utisateur"
    //         }
    //     }
    // )

    // db.collection('Utilisateurs').findOneAndUpdate({
    //         _id: new ObjectID('5c5713b7ceab8c3280622ae4')
    //     },{ $mul: { âge: 2 } }
    // )

    // db.collection('étudiants').insertMany([
    //     { "_id" : 1, "grades" : [ 85, 80, 80 ] },
    //     { "_id" : 2, "grades" : [ 88, 90, 92 ] },
    //     { "_id" : 3, "grades" : [ 85, 100, 90 ] }
    // ])

    // db.collection('étudiants').updateOne(
    //     { _id: 1, grades: 80 },
    //
    // ){ $set: { "grades.$" : 82 } }

// db.collection('étudiants').insertOne(
//     {
//         _id: 4,
//         notes: [
//             { note: 80, moy: 75, classe: '5 ieme' },
//             { note: 85, moy: 90, classe: '1 ieme' },
//             { note: 85, moy: 85, classe: '3 ieme' }
//         ]
//     }
// )

    // db.collection('étudiants').updateOne(
    //     { _id: 4, "notes.note": 85 },
    //     { $set: { "notes.$.classe" : '2 ieme' } }
    // )

    // db.collection('étudiants').updateOne(
    //     {
    //         _id: 4,
    //         notes: { $elemMatch: { note: { $lte: 60 }, moy: { $gt: 80 } } }
    //     },
    //     { $set: { "notes.$[].note" : 80 } }
    // )

    //




    // db.close();
});