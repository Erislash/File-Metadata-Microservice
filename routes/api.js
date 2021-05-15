const path = require('path');
const routes = require('express').Router();
var multer  = require('multer')
var upload = multer({ dest: './uploads/' })
const fs = require('fs');


routes.post('/api/fileanalyse', upload.single('upfile'), function (req, res, next) {
    const fileDetails = req.file;
    if(fileDetails != undefined){
        fs.unlink(path.join(__dirname, '..', 'uploads', fileDetails.filename), err => {
            res.json({"name":fileDetails.originalname,
            "type":fileDetails.mimetype,
            "size":fileDetails.size});            
        });
        return
    }

    res.json({'error':'Can\'t upload file'});
})


module.exports = routes;