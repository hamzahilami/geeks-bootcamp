const { readFile, writeFile } = require('./fileManager');

async function main() {
  try {
    const helloContent = await readFile('Hello World.txt');
    console.log('Read content:', helloContent);
    await writeFile('Bye World.txt', 'Writing to the file');
    console.log('Write successful!');
  } catch (error) {
    console.error(error);
  }
}

main();
