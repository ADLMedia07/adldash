const config = {
  "ownerID": process.env.OWNER,
  "admins": ["568738173216227339"],
  "support": ["568738173216227339"],
  "token": process.env.TOKEN,
  "dashboard" : {
    "botid":process.env.botID, 
    "oauthSecret": process.env.oauthSecret,
    "callbackURL": process.env.callback,
    "sessionSecret": "ADLMedia",//Bu kısımı, değiştirmeyiniz.
    "domain": process.env.domain }};
module.exports = config;
