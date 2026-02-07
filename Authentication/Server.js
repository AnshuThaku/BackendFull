require('dotenv'

).config();
const app = require('./src/app');
const { connectDb }= require('./src/config/db') ;

//db connection
connectDb();

app.listen(3000, () => {
    console.log(' server is running on port 3000');
});