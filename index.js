var express = require("express");
var app = express();
var db = require("./models");
var users = require("./seeders/users");
var project = require("./seeders/project");
// create user
var createUser = function () {
    users.map(function (user) {
        db.User.create(user);
    });
};
// create project
var createProject = function () {
    users.map(function (pro) {
        db.User.create(pro);
    });
};
//check
db.sequelize.sync().then(function () {
    app.listen(4000, function () {
        console.log("App is working");
    });
});
