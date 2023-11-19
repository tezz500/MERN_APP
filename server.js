const app = require('./routes/index');
const dotenv = require('dotenv');
const connectDatabase = require('./app/config/ConnectDatabase');
// setting the config file
dotenv.config({ path: './config.env' });
// database connecting
connectDatabase();

const server = app.listen(process.env.PORT, ()=>{
    console.log(`App is running at ${process.env.APP_URL}`);
});

