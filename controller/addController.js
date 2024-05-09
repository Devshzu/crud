const express = require('express')
const connection =require('../config/db')

const addController = (req,res) =>{
  const sql = "INSERT INTO empl (name, salary) VALUES (?, ?)"
  const {name, salary} = req.body
  connection.query(sql,[name, salary], (err,result)=>{
    if(err){
        res.status(400).json("Something went wrong!")
    }
    res.status(200).json("course name added successfully")
})
}

module.exports = addController
