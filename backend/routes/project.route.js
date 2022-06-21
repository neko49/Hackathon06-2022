var express = require('express');
var router = express.Router();
const cors = require("cors");
const {getAll, getJobs, getEnvVars} = require("../controllers/project.controller");


router.use(cors());
router.post('/', async (req, res) => {
  getAll(req, res)
});
router.get('/:id/jobs', async (req, res) => {
  getJobs(req, res)
});
router.get('/:id/envvars', async (req, res) => {
  getEnvVars(req, res)
});


module.exports = router;
