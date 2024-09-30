const path=require('path');

const express = require('express');
const rootDir = require('../utils/path.js')

const router = express.Router();

const products = [];

//means /admin/add-product
router.get('/add-product',(req,res,next)=>{
    // res.send('<form method="POST" action="/admin/add-product" ><input type="text" name="title" ><button type="submit">Send</button></input></form>')
    res.sendFile(path.join(rootDir,'views','add-product.html'))
})

router.post('/add-product',(req,res)=>{
    console.log(req.body)
    products.push({title:req.body.title})
    res.redirect('/')
})

exports.routes = router;
exports.products = products;
