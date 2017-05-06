var express = require('express');
var router = express.Router();
var SceneController = require('../controllers/SceneController.js');

/*
 * GET
 */
router.get('/', SceneController.list);

/*
 * GET
 */
router.get('/:id', SceneController.show);

/*
 * POST
 */
router.post('/', SceneController.create);

/*
 * PUT
 */
router.put('/:id', SceneController.update);

/*
 * DELETE
 */
router.delete('/:id', SceneController.remove);

module.exports = router;
