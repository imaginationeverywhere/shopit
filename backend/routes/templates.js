const express = require('express');
const router = express.Router();

const {
  getTemplates,
  setActiveTemplate,
} = require('../controllers/templateController');

router.route('/templates').get(getTemplates);
router.route('/templates').post(setActiveTemplate);

module.exports = router;
