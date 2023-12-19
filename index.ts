const express = require("express");
const app = express();
const db = require("./models");
const users = require("./seeders/users");
const projects = require("./seeders/projects");
const AssignmentProjects =require('./seeders/AssignmentProjects')

// create user
const createUser = () => {
  users.map((user: any) => {
    db.User.create(user);
  });
};
createUser();
// create project
const createProjects = () => {
  projects.map((pro: any) => {
    db.project.create(pro);
  });
};
createProjects();
const createAssinmentProjects = () => {
  AssignmentProjects.map((Apro: any) => {
    db.AssignmentProjects.create(Apro);
  });
};
//checking
db.sequelize.sync().then(() => {
  app.listen(4000, () => {
    console.log("App is working");
  });
});
