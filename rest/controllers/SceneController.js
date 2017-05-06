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
        var Scene = new SceneModel({			name : req.body.name,			description : req.body.description,			text : req.body.text,			date_added : req.body.date_added,			date_modified : req.body.date_modified
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

            Scene.name = req.body.name ? req.body.name : Scene.name;			Scene.description = req.body.description ? req.body.description : Scene.description;			Scene.text = req.body.text ? req.body.text : Scene.text;			Scene.date_added = req.body.date_added ? req.body.date_added : Scene.date_added;			Scene.date_modified = req.body.date_modified ? req.body.date_modified : Scene.date_modified;			
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
