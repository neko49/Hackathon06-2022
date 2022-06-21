const axios = require("axios");
const config = require('../config/config');
const graphQLRequests = require('../graphql/requests')
module.exports = {
    getAll,
};

async function getAll(jwt, projectId) {
    return await axios.post(config.SAAGIE_API_URL + '/projects/api/platform/2/graphql',
        graphQLRequests.PROJECT_ENV_VARS(projectId),
        {
            headers: {
                'Content-type': 'application/json',
                'Authorization': jwt,

            }
        })
}

module.exports = {
    getAll
};