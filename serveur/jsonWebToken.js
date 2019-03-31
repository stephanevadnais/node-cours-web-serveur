var jwt = require('jsonwebtoken');


data ={

    id:10
}

var token = jwt.sign(data, 'Monseccret');
console.log(token);
var decode = jwt.decode(token, 'Monseccret');
console.log(decode);