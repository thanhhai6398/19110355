const { mygroup, getMember, addToGroup } = require('../models/models.members');
const getReq = (req, res) => {
    const id = req.params.id;
    res.status(200).json(getMember(id));
};
const postReq = (req, res) => {
    const result = addToGroup(req.body);
    res.status(200).json(result);
};
module.exports = {
    getReq,
    postReq
}