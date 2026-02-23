const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

try {
    let file = path.join(__dirname, 'assets', 'Suma_RESUME.pdf');
    let dataBuffer = fs.readFileSync(file);
    pdf(dataBuffer).then(function (data) {
        console.log(data.text);
    }).catch(function (error) {
        console.log("PDF Parse Error: " + error);
    });
} catch (e) {
    console.log("File read error: " + e);
}
