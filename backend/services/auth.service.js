const axios = require("axios");
const config = require('../config/config');

async function saagieLogin(credentials) {
    return await axios.post(config.SAAGIE_API_URL + '/authentication/api/open/authenticate', {
        login: credentials?.login,
        password: credentials?.password
    }, {
        headers: {
            'Content-type': 'application/json',
            'Saagie-Realm': 'demo'
        }
    }).then((res) => {
        return res.data
    }).catch((fail) => {
        console.error(fail)
        throw 'Authentication failed!'
    })

}

module.exports = {
    saagieLogin
}