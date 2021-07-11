const { response } = require('express')
const Menu = require('../models/menu')


//list menu
const index = (req,res,next) =>{
    Menu.find()
    .then(response => {
        res.json({response})
    })
    .catch(error =>{
        res.json({
            message: 'An error Occured'
        })
    })
}
const show = (req,res,next) => {
    let menuId = req.body.menuId
    Menu.findById(menuId)
    .then(response => {
        res.json({response})
    })
    .catch(error =>{
        res.json({
            message: 'An error Occured'
        })
    })
}
const store = (req,res,next) => {
    
    let menu = new Menu({
        category: req.body.category,
        name : req.body.name,
        price: req.body.price,
        updatedBy:req.body.updatedBy,
        approvedBy:req.body.approvedBy
    })
    if(req.files) {
        let path = ''
        req.files.forEach(function(files,index,arr) {
            path = path + files.path+ ','
        });
        path = path.substring(0 , path.lastIndexOf(','))
        menu.picture = path.split(',')
    }
    menu.save()
    .then(response => {
        res.json({
            message: 'Menu added successfully'
        })
    })
    .catch(error =>{
        res.json({
            error: error
        })
    })
}

const update = (req,res,next) => {
    let menuID = req.body.menuID
    let updatedData = {
        category: req.body.category,
        name : req.body.name,
        price: req.body.price,
        picture:req.body.picture,
        updatedBy:req.body.updatedBy,
        approvedBy:req.body.approvedBy
    }
    Menu.findByIdAndUpdate(menuID,{$set: updatedData})
    .then(response => {
        res.json({
            message: 'Menu updated successfully'
        })
    })
    .catch(error =>{
        res.json(error)
    })
}
const destroy = (req,res,next) => {
    let menuID = req.body.menuID
    
    Menu.findByIdAndRemove(menuID)
    .then(response => {
        res.json({
            message: 'Menu deleted successfully'
        })
    })
    .catch(error =>{
        res.json(error)
    })
}
module.exports = {
    index, show, store, update, destroy
}