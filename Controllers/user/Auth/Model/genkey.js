const crypto = require('crypto');
const { access } = require('fs');
const hashHmacSha256 = string => crypto
  .createHmac('sha256', process.env.SECRET)
  .update(string)
  .digest('hex');
// Server-Side
function genKey(id, password) {
    const rawKey = id + password;
    //console.log("rawKEY"+rawKey)
    const key = hashHmacSha256(rawKey,  process.env.SECRET);
    return key;
  }
  module.exports = genKey