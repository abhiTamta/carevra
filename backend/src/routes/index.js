const router = require('express').Router();

router.post('/admin/login', require('../controllers/adminControllers').adminLogin);
router.post("/user/login", require("../controllers/userControllers").userLogin);
router.post("/user/register", require("../controllers/userControllers").userRegister);

module.exports = router;
