
const express = require('express');
const router = express.Router();

router.get('/aboutUs', (req, res) => {
    res.send('About us page');
});

module.exports = router;