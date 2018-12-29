const express = require('express');
var app = express();
var hbs = require('hbs');
var fs = require('fs');
const port = process.env.PORT || 3000;


hbs.registerPartials(__dirname + '/views/partie');
app.set('view engine', 'hbs');
// app.use((requete,reponse,next)=>{
//     reponse.render('maintenance.hbs');
//
// });

app.use((requete, reponse, next)=>{
    var demande = ()=>{
        var heure = new Date().getHours();
        var minutes = new Date().getMinutes().toPrecision(2);
        return heure + ":"+ minutes ;
    }

    var log = `Une requête a été faite à : ${demande()} avec le protocole ${requete.method} et URL est ${requete.url}`;

    console.log(log);

    fs.appendFile('serveur.txt',log + '\n', (erreur)=>{
        if(erreur){
            console.log(erreur);
        }
    } );
    next();
});




app.use(express.static(__dirname + '/publique'));

hbs.registerHelper('journee', ()=>{
    var jour = new Date().toLocaleDateString();
    return jour;
});
hbs.registerHelper('obtenirHeure', ()=>{
    var heure = new Date().getHours();
    var minutes = new Date().getMinutes();
    var jour = new Date().toLocaleDateString()
    return heure + ":" + minutes ;

});
hbs.registerHelper('list', function(collaborateur, caractéristiques) {
    var out = "<ul>";

// fn fonction interne handlebar qui boucle sur tout et qui retourne la ligne en une String, prend en argument un objet d'un tableau dans ce cas

    for(var i=0, nombres=collaborateur.length; i<nombres; i++) {
        out = out + "<li>" + caractéristiques.fn(collaborateur[i]) + "</li>";

    }

    return out + "</ul>";
});
hbs.registerHelper('majusculeTXT',(txt)=>{
    return txt.toUpperCase();
});

app.get('/reference',(requete,reponse)=> {

    reponse.render('reference',{

        date: new Date().toLocaleDateString(),
        auteur: 'Stéphane Vadnais',
        collaborateur: [
            {prenom: "Yehuda", nom: "Katz", age:"age:" +22},
            {prenom: "Carl", nom: "Lerche", age: "age:" +54},
            {prenom: "Alan", nom: "Johnson", age:"age:" + 33}
        ]

    });
});

app.get('/', (requete,reponse)=>{

    reponse.send("Bienvenue dans l'interface Express");
});
















app.listen(port,()=>{
    console.log(`Connection établie sur le port ${port}`)
});