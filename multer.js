let multer = require('multer');
let fs = require('fs');
let path = require('path');

let storage = multer.diskStorage({ //multers disk storage settings
  destination: function (req, file, cb) {
    let uploadPath = __dirname + '/uploads/';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    let dateTimeStamp = Date.now();
    cb(null, file.fieldname + '-' + dateTimeStamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
  }
});

let upload = multer({ //multer settings
  storage: storage,
  fileFilter: function (req, file, callback) {
    let ext = path.extname(file.originalname);

    if (ext === '.png' || ext === '.jpg') {
      callback(null, true);
    } else {
      return callback(new Error('Only images are allowed'));
    }
  },
  limits: {
    fileSize: 1000 * 1000 * 10
  }
});

module.exports = { storage, upload, MulterError: multer.MulterError };
