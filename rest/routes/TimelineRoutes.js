var express = require('express');
var router = express.Router();
var TimelineController = require('../controllers/TimelineController.js');

/*
 * GET
 */
router.get('/', TimelineController.list);

/*
 * GET
 */
router.get('/:id', TimelineController.show);

/*
 * POST
 */
router.post('/', TimelineController.create);

/*
 * PUT
 */
router.put('/:id', TimelineController.update);

/*
 * DELETE
 */
router.delete('/:id', TimelineController.remove);

module.exports = router;
