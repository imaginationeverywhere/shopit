const mongoose = require('mongoose');


const connectDatabase = () => {
    const uri = "mongodb+srv://kevoese:mongodbpassword$$@cluster0.oifcj.mongodb.net/test";
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify:true
    }).then(con => {
        console.log(`MongoDB Database connect with HOST: ${con.connection.host}`)
    })
}

module.exports = connectDatabase;
