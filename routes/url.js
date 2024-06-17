const express=require('express');
const { newshorturl } = require('../controllers/url');
const router=express.Router();
router.post("/" , newshorturl)
module.exports=router;//exporting the router to be used in the app.js file          