var express = require('express');
var router = express.Router();
const cors = require("cors");
const {getAll, getJobs, getEnvVars, getApps, getPipelines} = require("../controllers/project.controller");


router.use(cors());
router.get('/', async (req, res) => {
  getAll(req, res)
});
router.get('/:id/jobs', async (req, res) => {
  getJobs(req, res)
});
router.get('/:id/envvars', async (req, res) => {
  getEnvVars(req, res)
});
router.get('/:id/apps', async (req, res) => {
  getApps(req, res)
});
router.get('/:id/pipelines', async (req, res) => {
  getPipelines(req, res)
});


module.exports = router;
