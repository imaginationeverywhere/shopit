const mongoose = require('mongoose');


const connectDatabase = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify:true
    }).then(con => {
        console.log(`MongoDB Database connect with HOST: ${con.connection.host}`)
    })
}

module.exports = connectDatabase;
