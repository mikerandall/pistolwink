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
        var Timeline = new TimelineModel({			name : req.body.name,			description : req.body.description,			date_added : req.body.date_added,			date_modified : req.body.date_modified,			scenes : req.body.scenes,			active : req.body.active
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

            Timeline.name = req.body.name ? req.body.name : Timeline.name;			Timeline.description = req.body.description ? req.body.description : Timeline.description;			Timeline.date_added = req.body.date_added ? req.body.date_added : Timeline.date_added;			Timeline.date_modified = req.body.date_modified ? req.body.date_modified : Timeline.date_modified;			Timeline.scenes = req.body.scenes ? req.body.scenes : Timeline.scenes;			Timeline.active = req.body.active ? req.body.active : Timeline.active;			
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
