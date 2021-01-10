const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mysql = require('mysql');

 

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

 

app.use(express.static('public'));
app.set("view engine","ejs");
app.set('port',process.env.PORT || 80);



var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "schema",
  port:"3307",
  multipleStatements: true
});
connection.connect((err) => {
  if (!err) {
    console.log("Connected");
  } else {
    console.log("Conection Failed");
  }
});
app.get("/",function(req,res){
  res.render("homepage");
});

app.get("/components",function(req,res){
  res.render("components");
});
 
app.get("/medical_homepage",function(req,res){
  res.render("medical_homepage");
});

app.get("/fingerprint",function(req,res){
  res.render("fingerprint");
});

app.get("/profile_with_data_and_skills",function(req,res){
  res.render("profile_with_data_and_skills");
});

app.get("/user",function(req,res){
  res.render("user");
});

app.post('/components', function(request, response) {
  var username = request.body.username;
  var password = request.body.password;



  if (username === "admin" && password === "admin"){
      response.redirect("fingerprint");
  }
  else if (username && password) {
      connection.query('SELECT * FROM authorisation WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
          if (results.length > 0) {
          response.redirect('medical_homepage');
          } else {
          response.send("Incorrect Credentials....Try Again");
          }
          response.end();
      });
  } else {
      alert('Please enter Username and Password!');
      response.end();
  }
});

app.post('/medical_homepage', function(request, response) {
  var ID = request.body.ID;


  if (ID) {
      connection.query('SELECT * FROM users WHERE Id = ?', [ID], function(error, results, fields) {
          if (results.length > 0) {
          response.redirect('profile_with_data_and_skills');
          } else {
          alert("Incorrect ID....Try Again");
          }
          response.end();
      });
  } else {
      alert('Please enter ID');
      response.end();
  }
});

app.post('/fingerprint', function(request, response) {
  var ID = request.body.ID;


  if (ID) {
      connection.query('SELECT * FROM users WHERE Id = ?', [ID], function(error, results, fields) {
          if (results.length > 0) {
          response.redirect('profile_with_data_and_skills');
          } else {
          alert("Incorrect ID....Try Again");
          }
          response.end();
      });
  } else {
      alert('Please enter ID');
      response.end();
  }
});

app.listen(3000,function(){
  console.log("Server is running on port 3000.")
})
