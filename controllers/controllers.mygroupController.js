const {mygroup} = require('../models/models.members');
function mygroupRequest (req, res){
        res.status(200).json(mygroup);
}

module.exports = { mygroupRequest }