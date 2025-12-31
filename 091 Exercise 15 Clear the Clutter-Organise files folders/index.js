// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf
// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

// ⭐ Approach 1: Using fs module
// const fs = require('fs');
// const path = require('path');

// const organize = (dir) => {
//     const files = fs.readdirSync(dir);
//     for (let i = 0; i < files.length; i++) {
//         const file = files[i];
//         const ext = path.extname(file).slice(1);
//         if (ext != 'js') {  // ignore the current file (index.js or any other JavaScript file)
//             const folder = path.join(dir, ext);
//             if (!fs.existsSync(folder)) {
//                 fs.mkdirSync(folder);
//             }
//             fs.renameSync(path.join(dir, file), path.join(folder, file));
//         }
//     }
// }

// organize(__dirname);
// console.log('Files organized successfully!');

// Run: node index.js
// Files organized

// file structure:
// 091 Exercise 15 Clear the Clutter-Organise files folders
// ├── index.js
// ├── jpg
// │   ├── cat.jpg
// │   └── name.jpg
// ├── pdf
// │   ├── harry.pdf
// │   └── this.pdf
// ├── png
// │   └── name.png
// └── zip
//     ├── harry.zip
//     └── Rohan.zip

// 4 directories, 8 files

// ⭐ Approach 2: Using fs module and async/await
// const fs = require('fs');
// const path = require('path');

// const organize = async (dir) => {
//     const files = await fs.promises.readdir(dir);
//     for (let i = 0; i < files.length; i++) {
//         const file = files[i];
//         const ext = path.extname(file).slice(1);
//         const folder = path.join(dir, ext);
//         try {
//             await fs.promises.access(folder);
//         } catch (e) {
//             await fs.promises.mkdir(folder);
//         }
//         await fs.promises.rename(path.join(dir, file), path.join(folder, file));
//     }
// }

// organize(__dirname);
// console.log('Files organized successfully!');
// Run: node index.js
// Files organized

// ⭐ Approach 3: Using fs module and async/await with try/catch
// const fs = require('fs');
// const path = require('path');

// const organize = async (dir) => {
//     try {
//         const files = await fs.promises.readdir(dir);
//         for (let i = 0; i < files.length; i++) {
//             const file = files[i];
//             const ext = path.extname(file).slice(1);
//             const folder = path.join(dir, ext);
//             try {
//                 await fs.promises.access(folder);
//             } catch (e) {
//                 await fs.promises.mkdir(folder);
//             }
//             await fs.promises.rename(path.join(dir, file), path.join(folder, file));
//         }
//     } catch (e) {
//         console.error(e);
//     }
// }

// organize(__dirname);
// console.log('Files organized successfully!');
// Run: node index.js

// ⭐ Approach 4: Using fs module and async/await with try/catch and fs.stat
// const fs = require('fs');
// const path = require('path');

// const organize = async (dir) => {
//     try {
//         const files = await fs.promises.readdir(dir);
//         for (let i = 0; i < files.length; i++) {
//             const file = files[i];
//             const ext = path.extname(file).slice(1);
//             const folder = path.join(dir, ext);
//             try {
//                 await fs.promises.access(folder);
//             } catch (e) {
//                 await fs.promises.mkdir(folder);
//             }
//             const stats = await fs.promises.stat(path.join(dir, file));
//             if (stats.isFile()) {
//                 await fs.promises.rename(path.join(dir, file), path.join(folder, file));
//             }
//         }
//     } catch (e) {
//         console.error(e);
//     }
// }

// organize(__dirname);
// console.log('Files organized successfully!');
// Run: node index.js

// ⭐ Approach 5: Using fs module and promises (HARRY BHAI KA APPROACH)🔥🔥🔥

const fs = require('fs');
const path = require('path');

let files = fs.readdirSync(__dirname);
// let files = fs.readdir("E:\\2.0\\Tech\\Coding\\Contents\\Web Development\\My Codes\\091 Exercise 15 Clear the Clutter-Organise files folders", (err, files) => {
    //     if (err) {
        //         console.error(err);
        //         return;
        //     }
        //     console.log(files);
        // });
        
        // console.log(files);    // check

        // console.log(files.length);
for (const item of files) {
    // console.log(item);
    
    let ext = path.extname(item).slice(1);
    // console.log(ext);
    // console.log(item);

    let newDir = path.join(__dirname, ext);

    let oldPath = path.join(__dirname, item);
    // output ---> __dirname\item
    // E:\\....\image.jpg

    let newPath = path.join(newDir, item);
    // console.log(newPath);
    // output ---> __dirname\ext
    // E:\\....\jpg
    if(ext != 'js' && item.split('.').length > 1) {
        if(!fs.existsSync(newDir)) {
            fs.mkdirSync(newDir);
        }
        fs.renameSync(oldPath.toString(), newPath.toString());
    }
    console.log(item + "moved from " + oldPath + " to " + newPath);
    // console.log(oldPath, newPath);

}
