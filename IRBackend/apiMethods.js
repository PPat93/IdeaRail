import {retrieveDBData} from "../IRDB/dbOps.cjs";

function getAllIdeas() {
    retrieveDBData();
}

function getSingleIdea(ideaId) {
    retrieveDBData(ideaId);
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