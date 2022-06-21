var express = require('express');
var router = express.Router();
const cors = require("cors");
const {validateToken} = require("../helpers/jwt");
const {getAll} = require("../controllers/project.controller");


router.use(cors());
router.all("*", [validateToken]);
router.get('/', async (req, res) => {
  await getAll(req, res)
});


module.exports = router;
