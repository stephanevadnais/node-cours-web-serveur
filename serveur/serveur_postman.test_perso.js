const verificationSuperTestRequest = require('supertest');
const {app} = require ('../serveur_postman');
const {Tache} = require('./modele/tache_planification');
const {ObjectID} = require('mongodb');

// var id = require("objectid-tohexstring");



var expect = require('expect');

const Taches =[{
    _id: new ObjectID,
    texte: 'Premiere Tache'
}, {
    _id: new ObjectID,
    texte: 'Deuxieme Tache'
}];


beforeEach((fait)=>{

    Tache.deleteMany({}).then(()=> {
        return Tache.insertMany(Taches);


    }).then(()=> {
        fait();
    })
});









describe ('Verification POST et GET ', ()=>{
    it('Requete avec POST /tache',(fait)=>{

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
                    return fait(erreur);
                }

                Tache.find({texte}).then((taches)=> {
                    expect(taches.length).toBe(1);
                    expect(taches[0].texte).toBe(texte);
                    fait();
                }).catch( (erreur)=> fait(erreur));
            });

    });
    it ('Requete avec POST /tache Sans envoyer Objet JSON',(fait)=>{

        verificationSuperTestRequest(app)
            .post('/tache')
            .send(({}))
            .expect(400)
            .end((erreur,resultat)=>{
                if(erreur){
                    return fait(erreur);
                }

                Tache.find().then((taches)=>{
                    expect(taches.length).toBe(2);
                    fait();
                }).catch((erreur)=>{
                    fait(erreur)
                });
            });
    });

    it('Requete avec GET /tache Retourne les taches de la base MongoDB',(fait)=>{
        verificationSuperTestRequest(app)
            .get('/tache')
            .expect(200)
            .expect((reponse)=>{
                expect(reponse.body.taches.length).toBe(2);
            }).end(fait)
    });


    it('Requete avec GET /tache Avec ObjetID MongoDB en passe en parametre',(fait)=>{

        verificationSuperTestRequest(app)
            .get(`/tache/${Taches[0]._id.toHexString()}`)
            .expect(200)
            .expect((reponse)=>{
                expect(reponse.body.taches.texte).toBe(Taches[0].texte);
            })
            .end(fait);

    })

    it ('L ID est valide mais aucune tache trouve 404',(fait)=>{
        var mongoIDtoHexString = new ObjectID().toHexString()
        verificationSuperTestRequest(app)
            .get(`/tache/${mongoIDtoHexString}`)
            .expect(404)
            .end(fait)




    })


    it('L ID n est pas valide', (fait)=>{
        verificationSuperTestRequest(app)
            .get('/tache/invalidID')
            .expect(404)
                .end(fait)

    })





});













