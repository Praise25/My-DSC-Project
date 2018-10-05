var express = require("express");

var server = express();

//Student database
var record = {
    "001": {
        firstName: "Sola",
        lastName: "Adesokan",
        age: 17
    },
    "002": {
        firstName: "Femi",
        lastName: "Omolaja",
        age: 17
    },
    "003": {
        firstName: "Obinna",
        lastName: "Ejiofor",
        age: 19
    },
    "004": {
        firstName: "Praise",
        lastName: "Anene",
        age: 17
    },
    "005": {
        firstName: "Damola",
        lastName: "Akinsola",
        age: 18
    },
    "006": {
        firstName: "David",
        lastName: "Adegbola",
        age: 16
    },
    "007": {
        firstName: "Hakeem",
        lastName: "Adeleye",
        age: 17
    },
    "008": {
        firstName: "Timilehin",
        lastName: "Adesanya",
        age: 18
    },
    "009": {
        firstName: "Micheal",
        lastName: "Evarist",
        age: 17
    },
    "010": {
        firstName: "Samuel",
        lastName: "Jimba",
        age: 17
    }
}

server.get("/students/create/:matricNum/:firstName/:lastName/:age", function (req, res) {
    var matricNum = req.params.matricNum;
    var firstName = req.params.firstName;
    var lastName = req.params.lastName;
    var age = +req.params.age;

    record[matricNum] = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
    res.send("A new student with name " + firstName + " " + lastName + ", and age " + age + " has been created.");

    //Displays the updated record in the console
    console.log(record);
    console.log("");
})

server.get("/students/:matricNum", function (req, res) {
    var matricNum = req.params.matricNum;
    if (matricNum in record) {
        var firstName = record[matricNum].firstName;
        var lastName = record[matricNum].lastName;
        var age = record[matricNum].age;

        res.send(firstName + " " + lastName + " - " + age + " years");

        //Displays the updated record in the console
        console.log(record);
        console.log("");
    } else {
        res.send("No student with matric number " + matricNum + " exists");
    }
})

server.get("/students/:matricNum/firstName", function (req, res) {
    var matricNum = req.params.matricNum;
    if (matricNum in record) {
        var firstname = record[matricNum].firstName;

        res.send(firstname);

        //Displays the updated record in the console
        console.log(record);
        console.log("");
    } else {
        res.send("No student with matric number " + matricNum + " exists");
    }
})

server.get("/students/:matricNum/lastName", function (req, res) {
    var matricNum = req.params.matricNum;
    if (matricNum in record) {
        var lastname = record[matricNum].lastName;

        res.send(lastname);

        //Displays the updated record in the console
        console.log(record);
        console.log("");
    } else {
        res.send("No student with matric number " + matricNum + " exists");
    }
})

server.get("/students/:matricNum/age", function (req, res) {
    var matricNum = req.params.matricNum;
    if (matricNum in record) {
        var age = record[matricNum].age;

        res.send(String(age));

        //Displays the updated record in the console
        console.log(record);
        console.log("");
    } else {
        res.send("No student with matric number " + matricNum + " exists");
    }
})

server.get("/students/edit/:matricNum/firstName/:name", function (req, res) {
    var matricNum = req.params.matricNum;
    if (matricNum in record) {
        var name = req.params.name;
        var firstname = record[matricNum].firstName;
        var lastname = record[matricNum].lastName;

        record[matricNum].firstName = name;
        res.send(firstname + " " + lastname + " has been changed to " + name + " " + lastname);

        //Displays the updated record in the console
        console.log(record);
        console.log("");
    } else {
        res.send("No student with matric number " + matricNum + " exists");
    }
})

server.get("/students/edit/:matricNum/lastName/:name", function (req, res) {
    var matricNum = req.params.matricNum;
    if (matricNum in record) {
        var name = req.params.name;
        var lastname = record[matricNum].lastName;
        var firstname = record[matricNum].firstName;

        record[matricNum].lastName = name;
        res.send(firstname + " " + lastname + " has been changed to " + firstname + " " + name);

        //Displays the updated record in the console
        console.log(record);
        console.log("");
    } else {
        res.send("No student with matric number " + matricNum + " exists");
    }
})

server.get("/students/edit/:matricNum/age/:newAge", function (req, res) {
    var matricNum = req.params.matricNum;
    if (matricNum in record) {
        var newAge = +req.params.newAge;
        var firstname = record[matricNum].firstName;

        record[matricNum].age = newAge;
        res.send(firstname + "'s age has been changed to " + String(newAge));

        //Displays the updated record in the console
        console.log(record);
        console.log("");
    } else {
        res.send("No student with matric number " + matricNum + " exists");
    }
})

server.get("/students/delete/:matricNum", function (req, res) {
    var matricNum = req.params.matricNum;
    if (matricNum in record) {
        delete record[matricNum];
        res.send("The student with matric number " + matricNum + " has been removed");

        //Displays the updated record in the console
        console.log(record);
        console.log("");
    } else {
        res.send("No student with matric number " + matricNum + " exists");
    }
})


server.listen(3000, function () {
    console.log("Server is listening at port 3000");
})

