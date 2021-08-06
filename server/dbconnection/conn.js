const mongoose = require('mongoose');

const DB = "mongodb+srv://mernLearner:mernLearner@cluster0.cwlbv.mongodb.net/task1?retryWrites=true&w=majority"

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => { 
    console.log("Database Connection Successfull!!")
}).catch((err) => {
    console.log(err)
})
