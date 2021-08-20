const express = require('express');
const multer = require('multer');
const controller = require('../controllers/fileanalyse.controller');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/fileanalyse', upload.single('upfile'), controller);

module.exports = router;
