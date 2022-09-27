const express = require('express');
const controller = require('../controllers/controllers.messageController');
const router = express.Router();

router.get('', controller.getAll);
router.get('/:id', controller.get1Member);

module.exports = router;