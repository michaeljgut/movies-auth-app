const express = require('express');
const directorsController = require('../controllers/directors-controller');
const directorsRouter = express.Router();

directorsRouter.get('/', directorsController.index)

module.exports = directorsRouter;
