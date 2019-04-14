require('./configuration/config');
const verificationSuperTestRequest = require('supertest');

const {app} = require ('../serveur_postman');
const{Utilisateur} = require('./modele/utilisateur');

const {Tache} = require('./modele/tache_planification');
const {ObjectID} = require('mongodb');
const {Taches,Utilisateurs,population_Taches,population_Utilisateurs} = require('./envoie/envoie');


// var id = require("objectid-tohexstring");



var expect = require('expect');





beforeEach(population_Utilisateurs);
beforeEach(population_Taches);





describe ('Verification POST et GET ', ()=>{


    it('Requete avec POST /tache',(suivant)=>{

        var texte = 'Essaie Libre';

        verificationSuperTestRequest(app)
            .post('/tache')
            .send({texte})
            .expect(200)
            .expect((reponse)=>{

                expect(reponse.body.texte).toBe(texte);
            })
            .end((erreur,reponse)=>{
                if (erreur){
                    return suivant(erreur);
                }

                Tache.find({texte}).then((taches)=> {
                    expect(taches.length).toBe(1);
                    expect(taches[0].texte).toBe(texte);
                    suivant();
                }).catch( (erreur)=> suivant(erreur));
            });

    });

    it ('Requete avec POST /tache Sans envoyer Objet JSON',(suivant)=>{

        verificationSuperTestRequest(app)
            .post('/tache')
            .send(({}))
            .expect(400)
            .end((erreur,resultat)=>{
                if(erreur){
                    return suivant(erreur);
                }

                Tache.find().then((taches)=>{
                    expect(taches.length).toBe(2);
                    suivant();
                }).catch((erreur)=>{
                    suivant(erreur)
                });
            });
    });

    it('Requete avec GET /tache Retourne les taches de la base MongoDB',(suivant)=>{
        verificationSuperTestRequest(app)
            .get('/tache')
            .expect(200)
            .expect((reponse)=>{
                expect(reponse.body.taches.length).toBe(2);
            }).end(suivant)
    });

    it('Requete avec GET /tache Avec ObjetID MongoDB en passe en parametre',(suivant)=>{

        verificationSuperTestRequest(app)
            .get(`/tache/${Taches[0]._id.toHexString()}`)
            .expect(200)
            .expect((reponse)=>{
                expect(reponse.body.taches.texte).toBe(Taches[0].texte);
            })
            .end(suivant);

    });

    it ('L ID est valide mais aucune tache trouve 404',(suivant)=>{
        var mongoIDtoHexString = new ObjectID().toHexString()
        verificationSuperTestRequest(app)
            .get(`/tache/${mongoIDtoHexString}`)
            .expect(404)
            .end(suivant)

    });

    it('L ID n est pas valide', (suivant)=>{
        verificationSuperTestRequest(app)
            .get('/tache/invalidID')
            .expect(404)
                .end(suivant)

    });

});

// describe('Protocole DELETE',()=>{
//
//
//     it ('DELETE /tache avec lD passe en argument', (suivant)=>{
//
//         const ID_Tache = Taches[0]._id.toHexString();
//
//         verificationSuperTestRequest(app)
//             .del(`/tache/${ID_Tache}`)
//             .expect(400)
//             .expect((reponse)=>{
//                 expect(reponse.body._id).toBe(ID_Tache);
//             })
//             .end((erreur,reponse)=>{
//                 if(erreur){
//                     return suivant(erreur);
//                 }
//
//                 Tache.findById(ID_Tache).then((taches)=>{
//                     expect(taches).toNotExist();
//                     suivant();
//                 }).catch((erreur)=>{
//                     return suivant(erreur);
//                 })
//             });
//     });
//      it('Retourne 404 tache n a pas ete trouve',(suivant)=>{
//          var mongoIDtoHexString = new ObjectID().toHexString()
//          verificationSuperTestRequest(app)
//              .del(`/tache/${mongoIDtoHexString}`)
//              .expect(404)
//              .end(suivant)
//
//      });
//
//      it('Retourne 404 ObjetID n est pas valide ',(suivant)=>{
//          verificationSuperTestRequest(app)
//              .del('/tache/invalidID')
//              .expect(404)
//              .end(suivant)
//
//         });
//
// });

describe('PATCH /tache avec lD passe en argument',()=> {


    it('Mise a jour tache', (suivant) => {
        var ID_Tache = Taches[0]._id.toHexString();
        var texte = "Envoyer de mocha test"
        verificationSuperTestRequest(app)
            .patch(`/tache/${ID_Tache}`)
            .send({
                complet: true,
                texte: texte

            })
            .expect(200)
            .expect((resultat) => {

                expect(resultat.body.taches.texte).toBe(texte);
                expect(resultat.body.taches.complet).toBe(true);
                expect(resultat.body.taches.dateComplete).toBeA('number');
            }).end(suivant)

    });


    it('La tache n est pas complete',(suivant)=>{
        var ID_Tache = Taches[0]._id.toHexString();
        var texte = "Envoyer de mocha test"
        verificationSuperTestRequest(app)
            .patch(`/tache/${ID_Tache}`)
            .send({
                complet:false,
                texte: texte

            })
            .expect(200)
            .expect((resultat)=>{

                expect(resultat.body.taches.texte).toBe(texte);
                expect(resultat.body.taches.complet).toBe(false);
                expect(resultat.body.taches.dateComplete).toNotExist();
            }).end(suivant)
    });
});

describe('GET /utilisateur/moi',()=>{

    it ('devrais retourner une identification valide',(suivant)=>{
        verificationSuperTestRequest(app)
            .get('/utilisateur/moi')
            .set('x-auth',Utilisateurs[0].tokens[0].token)
            .expect(200)
            .expect((reponse)=>{
                expect(reponse.body._id).toBe(Utilisateurs[0]._id.toHexString());
                expect(reponse.body.courriel.travail).toBe(Utilisateurs[0].courriel.travail);
                expect(reponse.body.courriel.maison).toBe(Utilisateurs[0].courriel.maison);
            })
            .end(suivant);

    });

    it('devrais retourner une reponse invalide identification',(suivant)=>{
        verificationSuperTestRequest(app)
            .get('utilisateur/moi')
            .expect(401)
            .expect((reponse)=>{
                expect(reponse.body).toEqual({});
            })
            .end(()=>{
            suivant();
        });

    });
});

describe('POST /Utilisateur',()=>{

    it('devrais creer un nouvelle utilisateur',(suivant)=>{

        suivant();

        }



    );


    it('retourne une erreur si la requete est  invalide',(suivant)=>{

        suivant();
    });

    it('ne devrais pas creer un nouvelle utilisateur si le courriel est deja utilise',(suivant)=>{

        suivant();
    });

});














