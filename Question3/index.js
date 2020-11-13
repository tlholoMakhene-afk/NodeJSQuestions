var port = process.env.PORT || 3030;
const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://admin:admin1998@librarydb.tsam8.mongodb.net/dbStudentGrades?retryWrites=true&w=majority";


var dbconnect;
/// creating the database connection
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, database) {
    if (err) {
        console.log(err.message);
    } else {
        dbconnect = database.db("dbStudentGrades")
        console.log(`connected to ${dbconnect.databaseName} database.`);  
    }
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    dbconnect.collection("student").find({}).toArray(function (err, results) {
        if (err) {
            console.log(err.message);
        } else {
            console.log(`Results obtained from document:`);
            res.render("index", { data: results });
        }
    });
   
});
app.get("/newstudent", function (req, res) {
        res.render("form");
});
app.post("/addstudent", function (req, res) {
    console.log(`New student object: ${req.body}`);
    let student = req.body;
    //student object = {name:"Tshepi", age:"21", grade:"12"}
    dbconnect.collection("student").insertOne(student, function (err, result) {
        if (err) {
            console.log(err.message);
        } else {
            console.log("student successfully inserted to the database");
        }
    });
    res.redirect('/');
});

app.get("/grade/:grade", function (req, res) {
    let search = req.params
    console.log(search);
    dbconnect.collection("student").find({ "grade": search.grade }).toArray(function (err, results) {
        if (err) {
            console.log(err.message);
        } else {
            console.log(results)
            res.render("index", { data: results })
        }
    });
});

//Error Handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);//forwards to the next with the error
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error:
        {
            message: error.message,
        }
    });

});

app.listen(port, ()=>{console.log(`Listening on port ${port}`)})
