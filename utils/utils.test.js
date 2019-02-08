const utils = require('./utils');
var expect = require('expect');


describe('Utilitaire', ()=>{

    it('Addition', ()=>{
        var resultat = utils.addition(33,11);

        expect(resultat).toBe(44);

        // if(resultat !== 44){
        //     throw new Error(`Devrais être 44 mais le résultat est ${resultat}`);
        // }
    });


    it('Le Carre',()=>{

        var resultat = utils.au_carre(2,2);

        expect(resultat).toBeLessThanOrEqualTo(8,'plus petit que 8 ou égale');

        // if (resultat !== 4){
        //     throw new Error(`Devrais être 4 mais nous avons comme résultat ${resultat}`) ;
        // }

    });
    it('Le carré de deux nombre avec chronos donc doit appeller une fonction vide', (fait)=>{

        var sommes = utils.auCarreChronos(5, (resultat)=>{
            expect(resultat).toBe(25).toBeA('number');
            fait();
        });

    });


});


describe('Asynchrone',()=>{

    it('Fonction Asynchrone doit ce rendre jusqu\'à la fin du programme avant de rendre la main ',( fait)=>{

        var sommes = utils.chronosFonction(2,2, (resultat)=>{

            expect(resultat).toBe(4).toBeA('number');
            fait();
        });

    });


})


describe('Objet vérification',()=>{

    it('Enregistrement du prénom et du nom de famille',()=> {
        var utilisateur = {location: 'Montréal', âge: 50};
        var reponse = utils.EnregistrementUtilisateur(utilisateur, 'Stéphane Vadnais');

        expect(reponse).toInclude(
            utilisateur.prenom = 'Stéphane',
            utilisateur.nom = 'Vadnais'
        );
    });


})








