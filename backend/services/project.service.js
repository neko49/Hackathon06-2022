const axios = require("axios");
const config = require('../config/config');
const graphQLRequests = require('../graphql/requests')

async function getAll(jwt) {
    return await axios.post(config.SAAGIE_API_URL + '/projects/api/platform/2/graphql',
        graphQLRequests.PROJECTS_MINIMAL,
        {
            headers: {
                'Content-type': 'application/json',
                'Authorization': jwt,

            }
        })
}

async function getById(jwt, projectId) {
    return await axios.post(config.SAAGIE_API_URL + '/projects/api/platform/2/graphql',
        graphQLRequests.PROJECT_INFORMATIONS(projectId),
        {
            headers: {
                'Content-type': 'application/json',
                'Authorization': jwt,

            }
        })
}

async function getJobs(jwt, id) {
    return await axios.post(config.SAAGIE_API_URL + '/projects/api/platform/2/graphql',
        graphQLRequests.PROJECT_JOBS(id),
        {
            headers: {
                'Content-type': 'application/json',
                'Authorization': jwt,

            }
        })
}

module.exports = {
    getAll,
    getById,
    getJobs,
};