const mongoose = require('mongoose')


async function connectDatabase (){
mongoose.connect('mongodb+srv://Victor:9XuKtwJdDjEUTozx@norebase.jmdfb.mongodb.net/?retryWrites=true&w=majority&appName=Norebase', {})
.then(()=>{
    console.log('database connected')
}).catch(err => console.error('MongoDB connection error:', err));
}

module.exports={connectDatabase,mongoose}

connectDatabase()