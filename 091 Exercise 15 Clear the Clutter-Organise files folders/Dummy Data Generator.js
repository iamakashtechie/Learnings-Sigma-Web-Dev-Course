// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
// Generate a Dummy .jpg Image
// npm i axios
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Create a folder named 'images' if it doesn't exist
const imagesFolder = path.join(__dirname, "images");
if (!fs.existsSync(imagesFolder)) {
  fs.mkdirSync(imagesFolder);
}

// Create a readline interface to get user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to Image Downloader!");
rl.question("Enter the width of the image: ", (width) => {
  rl.question("Enter the height of the image: ", (height) => {
    const url = `https://picsum.photos/${width}/${height}`;
    const fileName = `image_${width}x${height}.jpg`;
    const filePath = path.join(imagesFolder, fileName);

    // Download the image and save it
    axios({
      method: "get",
      url: url,
      responseType: "stream",
    })
      .then((response) => {
        response.data.pipe(fs.createWriteStream(filePath));
        console.log(`Image saved as ${filePath}`);
      })
      .catch((error) => {
        console.error("Error downloading image:", error);
      })
      .finally(() => {
        rl.close();
      });
  });
});


//-------------------------------------------------------------------------

// Generate a Dummy .png Image
// npm i jimp
const Jimp = require('jimp');

async function createDummyImage() {
  const image = await Jimp.create(200, 200, '#FF0000'); // 200x200 red image
  image.write('dummy.png', () => console.log('dummy.png created!'));
}

createDummyImage();

//-------------------------------------------------------------------------

// Generate a Dummy .zip File
// npm install archiver
const fs = require('fs');
const archiver = require('archiver');

const output = fs.createWriteStream('dummy.zip');
const archive = archiver('zip');

output.on('close', () => {
  console.log(`dummy.zip created with ${archive.pointer()} total bytes`);
});

archive.pipe(output);
archive.append('Hello World!', { name: 'file.txt' });
archive.finalize();

//-------------------------------------------------------------------------

// Generate a Dummy .txt File
const fs = require('fs');

fs.writeFile('dummy.txt', 'This is a dummy text file for testing.', (err) => {
  if (err) throw err;
  console.log('dummy.txt created!');
});

//-------------------------------------------------------------------------

// Generate a Dummy .pdf File
// npm install pdfkit

const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('dummy.pdf'));

doc.fontSize(25).text('This is a dummy PDF file.', 100, 100);
doc.end();

console.log('dummy.pdf created!');

//-------------------------------------------------------------------------

// Generate a Dummy .csv File
const fs = require('fs');

const data = 'Name, Age, Gender\nJohn Doe, 30, Male\nJane';

fs.writeFile('dummy.csv', data, (err) => {
  if (err) throw err;
  console.log('dummy.csv created!');
});
//-------------------------------------------------------------------------