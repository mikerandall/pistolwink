var SceneModel = require('../models/SceneModel.js');

/**
 * SceneController.js
 *
 * @description :: Server-side logic for managing Scenes.
 */
module.exports = {

    /**
     * SceneController.list()
     */
    list: function (req, res) {
        SceneModel.find(function (err, Scenes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Scene.',
                    error: err
                });
            }
            return res.json(Scenes);
        });
    },

    /**
     * SceneController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        SceneModel.findOne({_id: id}, function (err, Scene) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Scene.',
                    error: err
                });
            }
            if (!Scene) {
                return res.status(404).json({
                    message: 'No such Scene'
                });
            }
            return res.json(Scene);
        });
    },

    /**
     * SceneController.create()
     */
    create: function (req, res) {
        var Scene = new SceneModel({
        });

        Scene.save(function (err, Scene) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Scene',
                    error: err
                });
            }
            return res.status(201).json(Scene);
        });
    },

    /**
     * SceneController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        SceneModel.findOne({_id: id}, function (err, Scene) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Scene',
                    error: err
                });
            }
            if (!Scene) {
                return res.status(404).json({
                    message: 'No such Scene'
                });
            }

            Scene.name = req.body.name ? req.body.name : Scene.name;
            Scene.save(function (err, Scene) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Scene.',
                        error: err
                    });
                }

                return res.json(Scene);
            });
        });
    },

    /**
     * SceneController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        SceneModel.findByIdAndRemove(id, function (err, Scene) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Scene.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};