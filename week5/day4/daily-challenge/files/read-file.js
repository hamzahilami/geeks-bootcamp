const fs = require('fs');
const path = require('path');

function readFileContent() {
    try {
        const filePath = path.join(__dirname, 'file-data.txt');
        const data = fs.readFileSync(filePath, 'utf8');
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error reading file:', error.message);
    }
}

module.exports = readFileContent;
