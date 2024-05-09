const express = require('express')
const connection = require('../config/db')
const removeController = (req, res) =>{
    const query = "DELETE FROM empl WHERE id = (?)"
    const {id} = req.params
    console.log(id)
    connection.query(query,id,(err,result)=>{
       if(err){
           res.status(500).json("somthing went wrong!")
       }
       console.log("sucessfully deleted!")
       res.status(200).json(result)
   })

}

module.exports = removeController