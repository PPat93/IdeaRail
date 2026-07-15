const {retrieveDataDB, createIdeaDB, updateIdeaDB} = require("../IRDB/dbOps.cjs");

function getAllIdeas() {
    retrieveDataDB().then((ideas) => {
        // TODO sanitize ideas
    })
}

function getSingleIdea(ideaId) {
    retrieveDataDB(ideaId).then((idea) => {
        //TODO sanitize idea
    })
}

function createIdea(ideaVals) {
    createIdeaDB(ideaVals).then((result) => {

    })
}

function updateIdea(ideaId, ideaVals, progressVals) {
    updateIdeaDB(ideaId, ideaVals, progressVals).then((result) => {

    })
    // ideaVals.title
    // ideaVals.description
    // ideaVals.status
    // progressVals.progress
    // progressVals.estimation

}

function deleteIdea(ideaId) {

}

module.exports = {
    getAllIdeas,
    getSingleIdea,
    createIdea,
    updateIdea,
    deleteIdea
}
