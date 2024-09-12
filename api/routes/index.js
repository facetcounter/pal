var express = require('express');
var router = express.Router();
const anagrams = require('english-anagrams');


/* GET home page. */
router.get('/anagram', function (req, res, next) {
  console.log(req);
  res.json({ status: "ok" })
});
router.post('/anagram', function (req, res, next) {
  console.log(req.body);
  let words = [];
  req.body.sentance.split(" ").forEach((item, i) => {
    let ags = anagrams(item);
    console.log(ags);
    if (Array.isArray(ags)) {
      ags.unshift();
      let chosen = Math.floor(Math.random() * ags.length);
      words.push(ags[chosen]);
    } else {
      words.push(item)
    }
  });
  res.json({ sentance: words.join(" ") })
});

module.exports = router;
