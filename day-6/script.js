
const fs = require('fs').promises;

async function readAllFiles() {
  try {
    const content1 = await fs.readFile('file1');

    console.log(content1.toString())
  } catch(err) {
    console.log(err)
  }
}

readAllFiles();
