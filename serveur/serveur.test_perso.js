const verificationSuperTestRequest = require('supertest');
var app = require('../serveur').app;
const expect = require('expect');




describe('Super Test',()=> {

    it('Devrais retourner les requêtes demander', (fait) => {
        verificationSuperTestRequest(app)
            .get('/')
            .expect('Bienvenue dans l\'interface Express')
            .end(fait);

    })
});





describe('Objet vérification avec SuperTest et Expect',()=>{

    it('Devrais retourner objet demander', (fait)=>{

        verificationSuperTestRequest(app)
            .get('/utilisateur')
            .expect((reponse)=>{
                expect(reponse.body).toInclude({
                    auteur: 'Stéphane Vadnais',
                    collaborateur: [
                        {prenom: "Yehuda", nom: "Katz", age:"age:" +22},
                        {prenom: "Carl", nom: "Lerche", age: "age:" +54},
                        {prenom: "Alan", nom: "Johnson", age:"age:" + 33}
                    ]
                });
            })
            .end(fait);

    })

});




