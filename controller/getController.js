const express = require('express')
const connection =require('../config/db')

const getController = (req, res) =>{
 const query = "SELECT * FROM empl"
 connection.query(query,(err,result)=>{
    if(err){
        res.status(500).json("somthing went wrong!")
    }
    res.status(200).json(result)
})
}

module.exports = getController