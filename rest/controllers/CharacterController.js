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
        var Character = new CharacterModel({
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

            Character.name = req.body.name ? req.body.name : Character.name;
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