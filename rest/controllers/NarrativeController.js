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
        var Narrative = new NarrativeModel({			name : req.body.name,			description : req.body.description,			plot : req.body.plot,			categories : req.body.categories,			characters : req.body.characters,			timeline : req.body.timeline,			date_added : req.body.date_added,			active : req.body.active
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

            Narrative.name = req.body.name ? req.body.name : Narrative.name;			Narrative.description = req.body.description ? req.body.description : Narrative.description;			Narrative.plot = req.body.plot ? req.body.plot : Narrative.plot;			Narrative.categories = req.body.categories ? req.body.categories : Narrative.categories;			Narrative.characters = req.body.characters ? req.body.characters : Narrative.characters;			Narrative.timeline = req.body.timeline ? req.body.timeline : Narrative.timeline;			Narrative.date_added = req.body.date_added ? req.body.date_added : Narrative.date_added;			Narrative.active = req.body.active ? req.body.active : Narrative.active;			
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
