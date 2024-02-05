const express = require('express');
const {MongoClient} = require('mongodb');
const cors = require('cors');
const bodyparser = require('body-parser');



const app = express();

app.use(cors());
app.use(bodyparser.json());

const mongodbURI = 'mongodb+srv://buragaravi:qzlCHauz9boCgeCK@cluster0.aow0j7e.mongodb.net/';
const databaseName = 'Cluster0';

const dbconnection = new MongoClient(mongodbURI,{useNewUrlParser:true,useUnifiedTopology:true});

dbconnection.connect()
    .then(() =>{
        console.log('Connected to Mongodb');

        const database = dbconnection.db(databaseName);
        const formDataCollection = database.collection('PotfolioFormData');

        app.post('/api/mongodb', async (req,res)=>{
            const {name,email,phone,date,password,checkbox} = req.body;

            try{
               await formDataCollection.insertOne({name,email,phone,date,password,checkbox})

                console.log("Successfully data inserted ");
                res.send("Success : ");
            }
            catch(error){
                console.log('Error : ',error);
            }
        })
    })


    const port = 3002;

    app.listen(port, ()=>{
        console.log(`Server Started at port : ${port}`)
    })