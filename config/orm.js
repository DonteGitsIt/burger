var connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result){
            if (err) throw err
            console.log(result)
            cb(result)
        })
    },
    insertOne: function(burgerName, cb){
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burgerName], function(err, result){
            if (err) throw err
            console.log(result)
            cb(result)
        })
    },
    updateOne: function(id, cb){
        var queryString = "UPDATE burgers SET devoured=true WHERE id = ?";
        connection.query(queryString, [id], function(err, result){
            if (err) throw err
            console.log(result)
            cb(result)
        })
    }
}

module.exports = orm