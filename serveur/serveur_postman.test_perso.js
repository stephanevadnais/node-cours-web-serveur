// const verificationSuperTestRequest = require('supertest');
// const {app} = require ('../serveur_postman');
// const {Tache} = require('./modele/tache_planification');
// var expect = require('expect');
//
// const Taches =[{
//     texte: 'Premiere Tache'
// }, {
//     texte: 'Deuxieme Tache'
// }];
//
// beforeEach((fait)=>{
//
//     Tache.deleteMany({}).then(()=> {
//         return Tache.insertMany(Taches);
//
//
//     }).then(()=> {
//         fait();
//     })
// });
//
//
//
// describe ('POST /TACHE', ()=>{
//     it('Devrais creer une tache',(fait)=>{
//
//         var texte = 'Essaie Libre';
//
//         verificationSuperTestRequest(app)
//             .post('/tache')
//             .send({texte})
//             .expect(200)
//             .expect((reponse)=>{
//
//                 expect(reponse.body.texte).toBe(texte);
//             })
//             .end((erreur,reponse)=>{
//                 if (erreur){
//                     return fait(erreur);
//                 }
//
//                 Tache.find({texte}).then((taches)=> {
//                     expect(taches.length).toBe(1);
//                     expect(taches[0].texte).toBe(texte);
//                     fait();
//                 }).catch( (erreur)=> fait(erreur));
//             });
//
//     });
//     it ('Imposible de Créer une tache vide',(fait)=>{
//
//         verificationSuperTestRequest(app)
//             .post('/tache')
//             .send(({}))
//             .expect(400)
//             .end((erreur,resultat)=>{
//                 if(erreur){
//                     return fait(erreur);
//                 }
//
//                 Tache.find().then((taches)=>{
//                     expect(taches.length).toBe(2);
//                     fait();
//                 }).catch((erreur)=>{
//                     fait(erreur)
//                 });
//             });
//     });
//
// });
//
//
// describe ('GET /tache', ()=>{
//     it('Devrais retourner toutes les taches',(fait)=>{
//         verificationSuperTestRequest(app)
//             .get('/tache')
//             .expect(200)
//             .expect((reponse)=>{
//                 expect(reponse.body.taches.length).toBe(2);
//             }).end(fait)
//     });
// });
//
//
//
//
