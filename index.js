const express = require('express')
const app = express()
const port = 8080

app.get('/metrics', (req, res) => {
    let radius = req.query.radius;
    if (req.query.obj === 'circle' && req.query.metric === 'area') {
        let Area = Math.PI * radius ** 2;
        console.log(Area);
        res.status(200).json(` Your Area of Circle is ${Area} units`);

    };
    if (req.query.obj === 'sphere' && req.query.metric === 'volume') {
        let Volume = (4 / 3) * Math.PI * radius ** 3;
        res.status(200).json(` Your Volume of Sphere is ${Volume} units`);

    }
    else {
        res.status(400).json(`Please Enter the all required values`);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});