const fs = require('fs');
const path = require('path');

const sourceDir = process.argv[2];
const targetDir = process.argv[3];
const allowedExtensions = ['.txt', '.jpg'];


function copyFiles() {
  fs.readdir(sourceDir, (err, files) => {
    if (err) {
      console.error('Error occurred while reading the directory:', err);
    } else {
      files.forEach((file) => {
        const fileExt = path.extname(file);
        if (allowedExtensions.includes(fileExt)) {
          const sourceFile = path.join(sourceDir, file);
          const targetFile = path.join(targetDir, file);
          fs.copyFile(sourceFile, targetFile, (err) => {
            if (err) {
              console.error('Error occurred while copying the file:', err);
            } else {
              console.log(`Copied ${file} to ${targetDir}`);
            }
          });
        }
      });
    }
  });
}

copyFiles();
