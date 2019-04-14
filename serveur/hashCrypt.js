const {SHA256} = require('crypto-js');

const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

var password = '123abc';

bcrypt.genSalt(10, (erreur, salt) => {
    bcrypt.hash(password, salt, (erreur, hash) => {

        console.log(hash);

        return hash;
    })

});

hacher = '$2a$10$KHvPVy0UzKYRf0SYzn.gt.8n1oL1TO7CmKHBJPUX79GjWd28.po7y';


bcrypt.compare('password',hacher,(erreur,reponse)=>{



    console.log(reponse);
})



// var message = 'Je suis le  numero 1';
//
// var hash = SHA256(message).toString();
// console.log(`Message ${hash}`);
//
// var data = {
//     id:1
// };
//
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'monSecret').toString()
// }
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data) + 'monSecret').toString();
//
//
// var resultatHash = SHA256(JSON.stringify(token.data) + 'monSecret').toString();
//
//
// if (resultatHash === token.hash){
//     console.log('Le token n est pas manipuler')
// }
// else {
//     console.log('Erreur ne pas faire confiance');
// }