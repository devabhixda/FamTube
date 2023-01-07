const { MongoClient } = require("mongodb");
const { MAX_RESULTS } = require("./constants/config");
const mongoose = require("mongoose");
const Videos = require("./models/videos");
const { MONGO_URL, DB_NAME } = require("./constants/dbConfig");
  
async function setupDb() {
    mongoose.set('strictQuery', false);

    await mongoose.connect(MONGO_URL + DB_NAME, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })   
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Connected to db successfully");
    });
}


async function insertInDb(id, record) {
    try {
        await Videos.create({
            "id": id,
            "description": record.description,
            "title": record.title,
            "thumbnails": record.thumbnails,
            "publishedAt": record.publishedAt
        })
        console.log("Added video with id: " + id)
    } catch (ex) {
        console.log(ex);
    }
}

function paginatedResults() {
    return async (req, res, next) => {
        const page = parseInt(req.query.page);
        const limit = MAX_RESULTS;
        const skipIndex = (page - 1) * limit;
        const results = {};

        try {
            results.results = await Videos.find()
            .sort({publishedAt: -1})    
            .limit(limit)
            .skip(skipIndex)
            .exec();
            const totalDocs = await Videos.countDocuments();
            results.nextPage = Math.ceil((totalDocs - skipIndex) / limit) - 1
            res.paginatedResults = results;
            next();
        } catch (e) {
        console.log(e)
        res
            .status(500)
            .json({ message: "Error Occured while fetching the data from db" });
        }
    };
}

function searchDb() {
    return async (req, res, next) => {
        const searchQuery = req.query.search_query;
        const results = {};
        try {
            results.results = await Videos.fuzzySearch(searchQuery);
            res.paginatedResults = results;
            next();
        } catch (e) {
        console.log(e)
        res
            .status(500)
            .json({ message: "Error Occured while fetching the data from db" });
        }
    };
}

module.exports = {
    insertInDb,
    paginatedResults, 
    searchDb,
    setupDb
}