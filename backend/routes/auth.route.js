var express = require('express');
var router = express.Router();
const cors = require("cors");
const {login} = require("../controllers/auth.controller");


router.use(cors());
router.post('/login', async (req, res) => {
  await login(req, res)
});


module.exports = router;
