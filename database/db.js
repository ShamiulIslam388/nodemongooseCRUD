const mongoose = require('mongoose')

const databaseConnection = async()=> {
    try{
        await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('database connected successfully')
    }catch(error) {
        console.log('error',error)
    }
}

module.exports = databaseConnection;