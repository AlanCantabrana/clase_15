//Crea un metodo para correr un proceso.

const {spawn} = require('child_process');
const result = spawn ('git', ['branch']);

const callback = (data) => {
    console.log(`stdout: ${data}`);
};

result.stdout.on('data', callback);