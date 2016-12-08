const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon.stellar.org');
const fs = require("fs");

const config = JSON.parse(fs.readFileSync("./config.json", "utf8"))

const sourcePublicKey = config.address;
server.loadAccount(sourcePublicKey).
    then(account => {
        console.log(account.balances)
    })



