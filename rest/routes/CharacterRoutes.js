var express = require('express');
var router = express.Router();
var CharacterController = require('../controllers/CharacterController.js');

/*
 * GET
 */
router.get('/', CharacterController.list);

/*
 * GET
 */
router.get('/:id', CharacterController.show);

/*
 * POST
 */
router.post('/', CharacterController.create);

/*
 * PUT
 */
router.put('/:id', CharacterController.update);

/*
 * DELETE
 */
router.delete('/:id', CharacterController.remove);

module.exports = router;
