import multer from "multer";

const storageConfig = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'public/postImages/');
    },
    filename:(req, file, cb)=>{
        cb(null,  Date.now() + '-' + file.originalname);
    }
});

export const uploadFile = multer({storage:storageConfig});