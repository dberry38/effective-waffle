// const sequelize = require('./config/connection');
const fs = require("fs");
const inquirer = require("inquirer");
const express = require("express");
const mysql2 = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "triforce", //please dont tell anyone my password
  database: "employee_db",
});

function init() {
  inquirer
    .prompt([
      {
        // initial prompt here, "what would you like to do?"; view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
      }
    ]);
}


// functions based on user input