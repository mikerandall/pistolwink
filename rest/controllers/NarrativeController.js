var NarrativeModel = require('../models/NarrativeModel.js');

/**
 * NarrativeController.js
 *
 * @description :: Server-side logic for managing Narratives.
 */
module.exports = {

    /**
     * NarrativeController.list()
     */
    list: function (req, res) {
        NarrativeModel.find(function (err, Narratives) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Narrative.',
                    error: err
                });
            }
            return res.json(Narratives);
        });
    },

    /**
     * NarrativeController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        NarrativeModel.findOne({_id: id}, function (err, Narrative) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Narrative.',
                    error: err
                });
            }
            if (!Narrative) {
                return res.status(404).json({
                    message: 'No such Narrative'
                });
            }
            return res.json(Narrative);
        });
    },

    /**
     * NarrativeController.create()
     */
    create: function (req, res) {
        var Narrative = new NarrativeModel({
        });

        Narrative.save(function (err, Narrative) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Narrative',
                    error: err
                });
            }
            return res.status(201).json(Narrative);
        });
    },

    /**
     * NarrativeController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        NarrativeModel.findOne({_id: id}, function (err, Narrative) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Narrative',
                    error: err
                });
            }
            if (!Narrative) {
                return res.status(404).json({
                    message: 'No such Narrative'
                });
            }

            Narrative.name = req.body.name ? req.body.name : Narrative.name;
            Narrative.save(function (err, Narrative) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Narrative.',
                        error: err
                    });
                }

                return res.json(Narrative);
            });
        });
    },

    /**
     * NarrativeController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        NarrativeModel.findByIdAndRemove(id, function (err, Narrative) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Narrative.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};