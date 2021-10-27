const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser : true}
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})

const userRouter = require ('./routes/user');
const escuelaRouter = require ('./routes/escuela');

app.use('/user', userRouter);
app.use('/escuela', escuelaRouter);

app.listen(port, () =>{
    console.log(`Server us running on port: ${port}`);

})