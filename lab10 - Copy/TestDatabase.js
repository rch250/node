const assert = require('chai').assert;
const Database = require('./Database.js');

describe("A set of unit test for the Database class", () => {
    let db;

    before(() => {
        db = new Database();
    });

    it("checking constructor", () => {
        assert.isNotNull(db, "Constructor returned an object");
        assert.isNotNull(db.sql);
        assert.isNotNull(db.pool);
    });

    it("Testing fetchHistory_promise", async() => {
        let history = await db.fetchHistory_promise();
        assert.isArray(history, "History should be an array");
        assert.equal(history.length,500, "Length should be 500 posts");
        history.forEach(post => {
            assert.hasAllKeys(post, ['id','name', 'type', 'post' ], "Posts should have specific keys");
        });
        assert.hasAllKeys();
        console.log(history[0]);
    });

    it("Testing fetchHistory", async() => {
        let history = await db.fetchHistory();
        assert.isArray(history, "History should be an array");
        assert.equal(history.length,500, "Length should be 500 posts");
        history.forEach(post => {
            assert.hasAllKeys(post, ['id','name', 'type', 'post' ], "Posts should have specific keys");
        });
        assert.hasAllKeys();
        console.log(history[0]);
    });
})