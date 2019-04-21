var env = process.env.NODE_ENV || 'test';
// console.log('Process environnement  ***',env );

if(env === 'development' || env === 'test'){

    var configurationJSON = require('./config.json');
    var environnementConfiguration = configurationJSON[env];
    console.log(environnementConfiguration);

    // console.log(Object.keys(environnementConfiguration));

    Object.keys(environnementConfiguration).forEach((clef)=>{
        process.env[clef] = environnementConfiguration[clef];

    });
}




// if(env === 'development'){
//     process.env.PORT = 3000;
//     process.env.MONGODB_URI =  'mongodb://localhost:27017/MongoDB';
// }
// else if (env === 'test'){
//     process.env.PORT = 3000;
//     process.env.MONGODB_URI =  'mongodb://localhost:27017/MongoDB_TEST';
// }
