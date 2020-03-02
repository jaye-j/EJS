
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    
    let fruits = ['oranges', 'apples', 'bananas'];

    res.render('index', {
        pageTitle: 'Vegan Cooking Recipes',
        description: 'How to make vegan food',
        fruitList: fruits
    });
});


module.exports = router;