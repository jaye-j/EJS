
const express = require('express');
const router = express.Router();

let carBlogs = [
    {
        id: 1,
        carName: "Cyber Truck",
        header: "Cyber truck is cool",
        body: "this is a blog about the cyber truck",
        author: "Jaye Jensen",
        imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-1RK-kKlnrYC7_vOF9fVLbIQ1mIHnyyHJkL4Xv3-4tSS83AoP&s",
        publishDate: "March 2, 2020"
    }, {
        id: 2,
        carName: "Tesla Model X",
        header: "Model X is cool",
        body: "this is a blog about the tesla model X",
        author: "Jaye Jensen",
        imgURL: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC60TSS011C021001.jpg",
        publishDate: "March 1, 2020"
    }, {
        id: 3,
        carName: "Mazda 3",
        header: "Mazda 3 was my first car",
        body: "this is a blog about the Mazda 3",
        author: "Jaye Jensen",
        imgURL: "https://media.ed.edmunds-media.com/mazda/3/2018/oem/2018_mazda_3_4dr-hatchback_grand-touring_fq_oem_8_400.jpg",
        publishDate: "February 2, 2020"
    }
];

router.get('/cars', (req, res) => {
    
    res.send('select a car')
});

router.get('/cars/:carID', (req, res) => {
    
    let carID = req.param('carID');
    res.render('cars', {
        carBlogs: carBlogs[carID]
    });
});


module.exports = router;