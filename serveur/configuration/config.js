var env = process.env.NODE_ENV || 'development';
console.log('Process environnement  ***',env );

if(env === 'development'){
    process.env.PORT = 3000;
    process.env.MONGODB_URI =  'mongodb://localhost:27017/MongoDB';
}
else if (env === 'test'){
    process.env.PORT = 3000;
    process.env.MONGODB_URI =  'mongodb://localhost:27017/MongoDB_TEST';
}
