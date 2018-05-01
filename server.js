
 //  var bodyParser=require('body-Parser');
 //  var ejs=require('ejs');
 //  var engine=require('ejs-mate');
 
    var express = require('express'),
     path = require('path'),
     bodyParser = require('body-parser'),
     routes = require('./server/routes/web'), //web routes
     apiRoutes = require('./server/routes/api'), //api routes
     connection = require("./server/config/db"); //mongodb connection
     //var session= require('express-session');
     
    // انشاء سيرفر ال express
    var app = express();
    app.use(bodyParser.json());
   // app.use(session({secret:'iLoveuit'}));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, 'app')));
    app.use(express.static('node_modules'));

  // app.use(Session(
   //    {
     //     secret:'thisismytestkey' 
          
      //  }
   // ));
  //  app.engine('ejs',engine);
  //  app.set('view engine','ejs');
  //  app.use(cookieParser());
    app.use('/', routes);
    app.use('/api', apiRoutes);
    //app.post('login',function(req,res){
    //  req.session.userName=req.body.userName;
   // });
    app.get('/',function(req,res){
      console.log(req.session.userName);

    });
    var port = process.env.port || 3000;
    app.listen(port, function() {
     console.log("Server is running at : http://localhost:" + port);
    });
    