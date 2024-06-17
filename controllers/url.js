const shortid = require('shortid');
const Url = require('../models/url');


async function newshorturl(req,res)  {
    const body = req.body
    const shortiD = shortid(8);
   await Url.create(
    {
        shortid:shortiD , 
        redirect:body.url,
        visitHistory:[]
    }
   )
   return res.json({id:shortiD})
    
  
}
module.exports = {
    newshorturl
};  