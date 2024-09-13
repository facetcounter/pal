
const anagrams = require('english-anagrams');

let getAnagrams = function (sentance) {
    let words = [];
    if (sentance === "" || sentance === undefined) {
        return "";
    }
    sentance.split(" ").forEach((item, i) => {
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
    return words.join(" ");
}

module.exports = getAnagrams;