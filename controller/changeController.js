const express = require('express')
const connection = require("../config/db")

const changeController = (req, res) =>{
    const {name, salary}  = req.body
    const {id} = req.params
const query = "UPDATE empl SET name=?, salary=? WHERE ID=?"
connection.query(query, [name, salary, id], (error, resol)=>{
     if(error){
        res.status(400).json("something went wrong!")
     }
     res.status(200).json("Working properly")
})
}

module.exports = changeController