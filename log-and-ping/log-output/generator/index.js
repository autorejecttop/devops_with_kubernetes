const crypto = require("crypto");
const {
  writeFileSync,
  readFileSync,
  existsSync,
  mkdirSync,
} = require("node:fs");

function createRandomStringWithTimestamp() {
  const randomString = crypto.randomUUID();
  return `${new Date().toISOString()}: ${randomString}`;
}

function writeRandomStringToFile(randomString) {
  if (!existsSync("files")) {
    mkdirSync("files");
  }

  try {
    writeFileSync("files/log-output.txt", `${randomString}\n`);
  } catch (err) {
    console.error(err);
  }
}

function readLogOutputFileToString() {
  try {
    const data = readFileSync("files/log-output.txt");

    return data.toString();
  } catch (err) {
    console.error(err);
  }
}

writeRandomStringToFile(createRandomStringWithTimestamp());
console.log(readLogOutputFileToString());

setInterval(() => {
  writeRandomStringToFile(createRandomStringWithTimestamp());
  console.log(readLogOutputFileToString());
}, 5000);
