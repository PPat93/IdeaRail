import {retrieveDBData, createIdea} from "../IRDB/dbOps.cjs";

function getAllIdeas() {
    retrieveDBData().then((ideas) => {
        // TODO sanitize ideas
    })
}

function getSingleIdea(ideaId) {
    retrieveDBData(ideaId).then((idea) => {
        //TODO sanitize idea
    })
}

function createNewIdea(ideaVals) {
    createIdea(ideaVals);
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
    createNewIdea,
    updateIdea,
    deleteIdea
}

export default apiMethods;