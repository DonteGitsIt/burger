var connection = require("./connection.js");

var orm = {
    selectAll: function(table){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result){
            if (err) throw err
            console.log(result)
        })
    },
    insertOne: function(burgerName){
        var queryString = "INSERT INTO burgers (burger_name) VALUES ??";
        connection.query(queryString, [burgerName], function(err, result){
            if (err) throw err
            console.log(result)
        })
    },
    updateOne: function(burgerName){
        var queryString = "UPDATE burger SET devoured=true WHERE burger_name=?";
        connection.query(queryString, [burgerName], function(err, result){
            if (err) throw err
            console.log(result)
        })
    }
}