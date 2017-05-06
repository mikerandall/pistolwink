var express = require('express');
var router = express.Router();
var NarrativeController = require('../controllers/NarrativeController.js');

/*
 * GET
 */
router.get('/', NarrativeController.list);

/*
 * GET
 */
router.get('/:id', NarrativeController.show);

/*
 * POST
 */
router.post('/', NarrativeController.create);

/*
 * PUT
 */
router.put('/:id', NarrativeController.update);

/*
 * DELETE
 */
router.delete('/:id', NarrativeController.remove);

module.exports = router;
