const mongoose = require('mongoose');

const connectDatabase = ()=>{
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.DB_LOCAL_URI, {
        
    }).then((conn)=>{
        console.log(`Database Connected successfully to the ${conn.connection.host}`);
    });
}

module.exports = connectDatabase;