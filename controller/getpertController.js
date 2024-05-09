const express = require('express')
const connection =require('../config/db')

const getperController = (req, res) =>{
    const {id} = req.params
 const query = "SELECT * FROM empl WHERE id = ?"
 connection.query(query, id, (err,result)=>{
    if(err){
        res.status(500).json("somthing went wrong!")
    }
    res.status(200).json(result)
})
}

module.exports = getperController