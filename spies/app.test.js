const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');




describe('Application', ()=>{


    it('Appeler Spies', ()=>{
        var spy = expect.createSpy();
        spy('Stephane',50);
       expect(spy).toHaveBeenCalledWith('Stephane',50);
    });

    it('Appeler fonction sauvegardeUtilisateur avec utilisateur objet ', ()=>{


        var db = {
            sauvegardeUtilisateur: expect.createSpy()
        };


        app.__set__('db',db);

        var courriel = 'vladsteak@gmail.com';
        var motDepasse = '023926';
        app.enregistrement(courriel,motDepasse);
        expect(db.sauvegardeUtilisateur).toHaveBeenCalledWith({courriel,motDepasse});

    });

});