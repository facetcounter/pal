
const superReq = require("supertest");
const app = require("../app.js");
const getAnagrams = require("../routes/getAnagrams.js");

let testAg = (word, anagram) => {
    word = word.split("");
    anagram = anagram.split("");
    while (letter = word.pop()) {
        anagram.splice(anagram.indexOf(letter), 1);
    }
    return anagram.length === 0 && word.length === 0;
}


describe("GET /anagrams", () => {
    it("should return anagrams", async () => {
        return superReq(app)
            .get("/anagram?sentance=felt+steering+my+way+in+water")
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                console.log("request body is", res.body);
                let word = res.body.sentance;
                expect(testAg("felt steering my way in water", word)).toBe(true);
                expect(res.statusCode).toBe(200);
            })
    });
});

describe("POST /anagrams", () => {
    it("should return anagrams", async () => {
        return superReq(app)
            .post("/anagram")
            .send({ sentance: "it expects a token or something" })
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                console.log("request body is", res.body);
                let word = res.body.sentance;
                expect(testAg("it expects a token or something", word)).toBe(true);
                expect(res.statusCode).toBe(200);
            })
    });
});

describe("test getAnagram function", () => {
    ["it expects a token or something", "ladybug", "some things are too argumentative"].forEach((item, i) => {
        console.log(item)
        it("should return anagrams for " + item, async () => {
            expect(testAg(item, getAnagrams(item))).toBe(true);
        });
    });
});
