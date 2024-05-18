const express = require('express');
const { singleUpload } = require('../controllers/fileUploadController');
const { upload } = require('../config/multer');

const router = express.Router();

router.post('/test-upload', upload, singleUpload);

module.exports = router;