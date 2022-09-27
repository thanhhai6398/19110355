const express = require('express');
const controller = require('../controllers/controllers.mygroupController');
const router = express.Router();

router.get('',controller.mygroupRequest);

module.exports = router