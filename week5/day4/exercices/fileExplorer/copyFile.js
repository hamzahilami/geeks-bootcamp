const fs = require('fs');
const path = require('path');

function getData(){
    return new Promise((resolve, reject)=>{
        const fullPath = path.resolve('source.txt')
        fs.readFile(fullPath, "utf-8",(err, data)=>{
            if(err){
                reject(err)
            }
            else resolve(data)
        })
        
    })
}


async function copyData(){
     try {
        const data = await getData();
        const destPath = path.resolve('destination.txt');
        fs.writeFile(destPath, data, (err) => {
            if (err) {
                console.error('somthings went wrong when copy the text !');
            } else {
                console.log('File copied successfully!');
            }
        });
    } catch (err) {
        console.error('somthings went wrong when reading the text!');
    }
}
copyData()