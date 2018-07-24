//keys.js

if(process.env.NODE_ENV === 'production'){
    //check posisi (production) dan return key production
    module.exports= require('./prod');
}else{
    //check posisi (development) dan return key development
    module.exports = require('./dev');
}

