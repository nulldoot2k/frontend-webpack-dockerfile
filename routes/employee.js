const { Router } = require('express');
const { home } = require('../controllers/employee')
const router = Router();

router.get('/', home)

module.exports = router;
