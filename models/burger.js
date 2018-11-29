var orm = require("../config/orm.js");

var burger = {
    selectAll: (cb) => { orm.selectAll("burgers", (res) => { cb(res) }) },

    insertOne: (burgerName, cb) => { orm.insertOne(burgerName, (res) => { cb(res) }) },

    updateOne: (id, cb) => { orm.updateOne(id, (res) => { cb(res) }) }
}

module.exports = burger