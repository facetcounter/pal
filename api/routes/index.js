var express = require('express');
var router = express.Router();
const getAnagrams = require('./getAnagrams.js');




router.all('/anagram', function (req, res, next) {
  res.type('json');
  if (req.body.sentance !== undefined) {
    res.json({ sentance: getAnagrams(req.body.sentance) });
    return;
  } else if (req.query.sentance !== undefined) {
    res.json({ sentance: getAnagrams(req.query.sentance) });
    return;
  } else {
    res.json({ sentance: "" });
  }
});

module.exports = router;