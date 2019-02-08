module.exports.addition = (a,b)=>{
    return  (a + b) ;

}


module.exports.au_carre = (a,b)=>{

   return (a*b);
}

module.exports.auCarreChronos = (x,retour)=>{

    setTimeout(()=>{
        retour( x * x );

    },1000)
};


module.exports.chronosFonction = (a,b,retour)=>{
    setTimeout(()=>{
        retour(a * b);
        },1);
};




module.exports.EnregistrementUtilisateur = (utilisateur, PrenomNom) => {

    var enregistrements = PrenomNom.split(' ');
    utilisateur.prenom = enregistrements[0];
    utilisateur.nom = enregistrements[1];
    return enregistrements;

}



