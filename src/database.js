import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/companydb")
    .then(db => console.log('Database is connected'))
    .catch(error => console.log(error))

