const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
}); // menampilkan file index.html


app.post('/', (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    
    var result = num1 + num2;
    
    res.send("Hasilnya : " + result);
});

app.get('/bmiCalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html');
}); // menampilkan file bmiCalculator.html

app.post('/bmiCalculator', (req, res) => {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    
    var bmi = weight / (height * height);
    
    res.send("BMI : " + bmi);
});




app.listen(3000, function (req, res) {
    console.log('Server running at http://localhost:3000');
});





