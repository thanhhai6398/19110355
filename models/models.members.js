const { json } = require("express");
const mygroup = [
    {id:19110355,name:"Nguyen Huynh Thanh Hai"}
];
const ID = [19110355, 19110420, 19110471];
const checkID = (member) => {
    const ID = [19110355, 19110420, 19110471];
    if (ID.includes(member.id)) {
      if (mygroup.find(m => m.id == member.id)) {
        return true;
      }
      return false;
    }
    return true;
}
const getMember = (id) => {
    const result = mygroup.find(member => member.id == id);
    if (result) {
        return result;
    }
    return { error: 'Not valid' };
}
const addToGroup = (member) => {
    if (checkValidMember(member) == false) {
        mygroup.push(member);
        return member;
    }
    else return { error: 'Not valid' };
}
module.exports = {
    mygroup,
    getMember,
    addToGroup
};