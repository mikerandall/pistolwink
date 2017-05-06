var TimelineModel = require('../models/TimelineModel.js');

/**
 * TimelineController.js
 *
 * @description :: Server-side logic for managing Timelines.
 */
module.exports = {

    /**
     * TimelineController.list()
     */
    list: function (req, res) {
        TimelineModel.find(function (err, Timelines) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Timeline.',
                    error: err
                });
            }
            return res.json(Timelines);
        });
    },

    /**
     * TimelineController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        TimelineModel.findOne({_id: id}, function (err, Timeline) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Timeline.',
                    error: err
                });
            }
            if (!Timeline) {
                return res.status(404).json({
                    message: 'No such Timeline'
                });
            }
            return res.json(Timeline);
        });
    },

    /**
     * TimelineController.create()
     */
    create: function (req, res) {
        var Timeline = new TimelineModel({
        });

        Timeline.save(function (err, Timeline) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Timeline',
                    error: err
                });
            }
            return res.status(201).json(Timeline);
        });
    },

    /**
     * TimelineController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        TimelineModel.findOne({_id: id}, function (err, Timeline) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Timeline',
                    error: err
                });
            }
            if (!Timeline) {
                return res.status(404).json({
                    message: 'No such Timeline'
                });
            }

            Timeline.name = req.body.name ? req.body.name : Timeline.name;
            Timeline.save(function (err, Timeline) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Timeline.',
                        error: err
                    });
                }

                return res.json(Timeline);
            });
        });
    },

    /**
     * TimelineController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        TimelineModel.findByIdAndRemove(id, function (err, Timeline) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Timeline.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};