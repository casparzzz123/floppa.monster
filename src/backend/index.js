const express = require("express");
const app = express();
const http = require("http");
const bodyParser = require('body-parser');

//app.use(express.static("frontend"));
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.json());

var Ping = require('ping-lite');

app.post("/flood-ping", (req, res) => {

  console.log('request body:', req.body);  
  var url = req.body.url;

  console.log("pinging: ", url);

  var ping = new Ping(url);

  ping.send(function(err, ms) {
    console.log(ping._host+' responded in '+ms+'ms.');
  });

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);


    res.send("[{\"status\":\"ok\"}]")
});

app.get("/", (req, res) => {
  res.sendFile("C:\\Users\\caspa\\dawdfeg\\src\\frontend\\index.html");
});

app.get("/dashboard", (req, res) => {
    res.sendFile("C:\\Users\\caspa\\dawdfeg\\src\\frontend\\dashboard.html");
  });

  app.get("/style", (req, res) => {
    res.sendFile("C:\\Users\\caspa\\dawdfeg\\src\\frontend\\style.css");
  });

  app.use(express.static('C:\\Users\\caspa\\dawdfeg\\src\\frontend\\style.css'));

const host = 'localhost';
const port = 8000;


app.listen(3000,() => console.log("Server listening at port 3000"));