// Corre en una terminal como hija, Si existe un error, truena y se detiene el proceso.

const {exec} = require ('child_process');

const command = 'git branch';
const handle = (err, stdout, stderr) => {
    console.log(stdout);
};
exec(command,handle);

//2 otra forma
/*exec ('git', ['branch'], (err, stdout, stderr) => {
    console.log(stdout);
});
*/