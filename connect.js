const mongoose = require('mongoose');

async function connectToMd(url) {
return mongoose.connect(url)
    
}
module.exports = {connectToMd};