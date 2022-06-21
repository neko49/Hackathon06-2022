const loginService = require('../services/auth.service');

async function login(req, res, next) {
    console.log('Retrieved')
    await loginService.saagieLogin(req.body).then((response) => {
        res.json({
            jwt: response
        });
    }).catch((fail) => {
        console.error(fail)
        res.sendStatus(403);
    });
}

module.exports = {
    login,
}