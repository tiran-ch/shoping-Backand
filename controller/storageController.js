const multer  = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./images"); // Specify the directory for storing images
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      if (file.originalname !== undefined) {
        cb(null,  uniqueSuffix  + '-' + file.originalname ); // Use the original filename
      }
    },
  });
  
 const upload = multer({ storage: storage});

 module.exports =  upload;