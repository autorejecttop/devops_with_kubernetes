const crypto = require("crypto");

function printRandomString() {
  const randomString = crypto.randomUUID();

  console.log(`${new Date().toISOString()}: ${randomString}`);
}

printRandomString();

setInterval(printRandomString, 5000);
