const express = require('express')
const router = express.Router()

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

router.get("/students", (req, res)=>{
    res.json(students)
})

module.exports = router;