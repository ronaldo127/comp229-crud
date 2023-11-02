let UserModel = require('../models/user.model');

module.exports.save = async (req, res) => {
    try {
        const user = new UserModel(req.body);
        let result = await user.save();
        res.json(result)
    } catch (err) {
        return res.status('400').json({
            error: "Could not save user"
        })
    }
}

module.exports.find = async (req, res) => {
    try {
        let result = await UserModel.find(req.params)
        res.json(result)
    } catch (err) {
        return res.status('400').json({
            error: "Could not find user"
        })
    }
}