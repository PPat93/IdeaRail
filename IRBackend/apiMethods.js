const {retrieveDataDB, createIdeaDB, updateIdeaDB, deleteIdeaDb} = require("../IRDB/dbOps.cjs");

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

    // ideaVals.title
    // ideaVals.description
    // ideaVals.status
    // progressVals.progress
    // progressVals.estimation
    updateIdeaDB(ideaId, ideaVals, progressVals).then((result) => {

    })

}

function deleteIdea(ideaId) {
    deleteIdeaDb(ideaId).then((result) => {

    })

}

module.exports = {
    getAllIdeas,
    getSingleIdea,
    createIdea,
    updateIdea,
    deleteIdea
}
