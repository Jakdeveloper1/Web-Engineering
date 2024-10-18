// directory creation
//1. npm init
//2. npm install express
//3. nodemon -g (globally)

const express = require("express");
const app = express();

//middleware function - JSON conversion to JS object
app.use(express.json())

//Custom Middle ware 1
const middleware1 = (req, res, next) => {
  console.log("middleware 1");
  console.log(`${req.method} ${req.path}`);
  req.info = "This is my new information";
  //req.method = "POST"
  next();
};

//Custom Middleware 2
const middleware2 = (req, res, next) => {
  console.log("middleware 2");
  console.log(`${req.method} ${req.path}`);
  console.log(req.info);
  next();
};

//Global middleware
app.use(middleware1)
app.use(middleware2)
//Middleware 3
app.use((req,res,next)=>{
  console.log("middleware 3")
  next()
})

//Route specific middleware (authentication)
const auth = (req, res, next) => {
  const { username, password } = req.body
  console.log("this is my auth method");
  if (username === "admin" && password === "admin") {
    next();
  } else {
    res.send("User is not authenticated")
  }
};

app.get("/", auth, (req, res) => {
  res.send("hello");
});

app.get("/api/courses", (req, res) => {
  res.send("this is my courses endpoint");
});

//route parameter: id
//HTTP GET request method
app.get("/api/courses/:id", (req, res) => {
  //res.send("this is my courses endpoint");
  const itemId = req.params.id;
  if (itemId) {
    res.status(200).send("Id found: " + itemId);
  } else {
    res.status(404).send("Item not found");
  }
});

let students = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Carry",
  },
];
//(Route.js) for Route End Point
const studentRoute = require("./Route");
app.use("/api", studentRoute);

// for specific users (SpecificUserRoute.js)
const specificUser = require("./SpecificUserRoute");
app.use("/api", specificUser);

//HTTP POST request method
app.post("/courseDetails", (req, res) => {
  console.log(students.length + 1);
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
  };

  students.push(newStudent);
  res.json(newStudent);
});

//HTTP PUT request method
app.put("/courses/:id", (req, res) => {
  const courseID = Number(req.params.id);
  const idIndex = students.findIndex((i) => i.id === courseID);

  if (idIndex !== -1) {
    //Success
    students[idIndex].name = req.body.name;
    res.send(students);
  } else {
    //Item not found
    res.status(404).json("Requested item is not found");
  }
});

//DELETE HTTP METHOD for deleting a student id
// DELETE HTTP METHOD for deleting a student by id
app.delete("/student/:id", (req, res) => {
  const studentID = Number(req.params.id);
  const initialLength = students.length;

  students = students.filter((student) => student.id !== studentID);

  if (students.length === initialLength) {
    return res.status(404).json({ message: "Student not found" });
  }

  console.log("Remaining students:", students);
  res.status(200).json({ message: `Student with ID ${studentID} deleted` });
});

//Error handling middleware
app.use((req, res) => {
  res.status(404).send("No route existed");
});

app.listen(3000, () => console.log("Listening on port 3000"));
