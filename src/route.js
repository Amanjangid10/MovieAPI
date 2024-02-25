const express = require('express');
const router = express.Router();

const {getPopularity, getPopularitybyKeyword, getVote, getReleasebykeyword, getById}= require('./controller')

// we can also use router as :  router.post('/city', citycontroller.create)
router.get('/popularity', getPopularity);
router.get('/popularity/keyword',getPopularitybyKeyword)
router.get('/vote', getVote);
router.get('/release', getReleasebykeyword);
router.get('/id/:id', getById)

module.exports = router;