const express = require('express');
const multer = require('multer');
const upload = multer({ dest : '/upload'});

const port = 3001;
const app = express();


app.post('/api/upload',upload.single('fileupload'),(req,res)=>{
    console.log(req.file,req.body);
})


app.listen(port,()=>{
    console.log(`hosting Started at Port ${port}`);
})