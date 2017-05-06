var CharacterModel = require('../models/CharacterModel.js');

/**
 * CharacterController.js
 *
 * @description :: Server-side logic for managing Characters.
 */
module.exports = {

    /**
     * CharacterController.list()
     */
    list: function (req, res) {
        CharacterModel.find(function (err, Characters) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Character.',
                    error: err
                });
            }
            return res.json(Characters);
        });
    },

    /**
     * CharacterController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        CharacterModel.findOne({_id: id}, function (err, Character) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Character.',
                    error: err
                });
            }
            if (!Character) {
                return res.status(404).json({
                    message: 'No such Character'
                });
            }
            return res.json(Character);
        });
    },

    /**
     * CharacterController.create()
     */
    create: function (req, res) {
        var Character = new CharacterModel({			name : req.body.name,			aliases : req.body.aliases,			description : req.body.description,			date_added : req.body.date_added,			date_modified : req.body.date_modified,			timelines : req.body.timelines,			active : req.body.active,			dob : req.body.dob,			dod : req.body.dod
        });

        Character.save(function (err, Character) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Character',
                    error: err
                });
            }
            return res.status(201).json(Character);
        });
    },

    /**
     * CharacterController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        CharacterModel.findOne({_id: id}, function (err, Character) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Character',
                    error: err
                });
            }
            if (!Character) {
                return res.status(404).json({
                    message: 'No such Character'
                });
            }

            Character.name = req.body.name ? req.body.name : Character.name;			Character.aliases = req.body.aliases ? req.body.aliases : Character.aliases;			Character.description = req.body.description ? req.body.description : Character.description;			Character.date_added = req.body.date_added ? req.body.date_added : Character.date_added;			Character.date_modified = req.body.date_modified ? req.body.date_modified : Character.date_modified;			Character.timelines = req.body.timelines ? req.body.timelines : Character.timelines;			Character.active = req.body.active ? req.body.active : Character.active;			Character.dob = req.body.dob ? req.body.dob : Character.dob;			Character.dod = req.body.dod ? req.body.dod : Character.dod;			
            Character.save(function (err, Character) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Character.',
                        error: err
                    });
                }

                return res.json(Character);
            });
        });
    },

    /**
     * CharacterController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        CharacterModel.findByIdAndRemove(id, function (err, Character) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Character.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
