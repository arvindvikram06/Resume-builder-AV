const multer = require('multer');
const {v4:uuidv4} = require('uuid');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, '../public/uploads');
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${uuidv4()}_${path.extname(file.originalname)}`);
    }
});

const fileFilter = (req,file,cb)=>{
    const allowedFileTypes = ['image/png','image/jpeg','image/jpg']
    if(allowedFileTypes.includes(file.mimetype)){
        cb(null,true)
    }
    else{
        cb(null,false)
    }
}
const uploadmiddleware = multer({storage,fileFilter})

module.exports = uploadmiddleware