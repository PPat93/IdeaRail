import * as dbInit from "../IRDB/dbInit";

function getAllIdeas() {
    dbInit.retrieveDBData();
}

function getSingleIdea(ideaId) {
    dbInit.retrieveDBData(ideaId);
}

function createIdea(ideaVals) {
    // ideaVals.title
    // ideaVals.description
    // ideaVals.status
}

function updateIdea(ideaId, ideaVals) {
    // ideaVals.title
    // ideaVals.description
    // ideaVals.status

}

function deleteIdea(ideaId) {

}

const apiMethods = {
    getAllIdeas,
    getSingleIdea,
    createIdea,
    updateIdea,
    deleteIdea
}

export default apiMethods;