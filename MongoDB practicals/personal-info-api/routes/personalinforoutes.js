const express = require('express');
const router = express.Router();
const {createPersonalInfo} = require('../controllers/personalinfocontroller');

router.post('/',createPersonalInfo);

module.exports = router; 