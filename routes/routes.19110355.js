const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers.19110355Controller');

router.get('/:id',controller.getReq);
router.post('', controller.postReq);

module.exports = router;