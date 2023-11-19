const path = require('path');
const getFile = ($file_name)=>{
    return path.join(__dirname+'../../../', 'public/', $file_name);
}
module.exports = getFile;