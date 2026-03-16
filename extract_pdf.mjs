const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('../os_lab_15_programs_shell_scripts.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('extracted_os.txt', data.text);
    console.log("Extracted");
});
