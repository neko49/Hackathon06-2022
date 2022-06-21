const jwt = require("jsonwebtoken");

module.exports = {
    generateAccessToken,
    validateToken,
    wsJWTVerify
}

function generateAccessToken(username) {
    return jwt.sign({ username }, process.env.JWT_SECRET, {
        expiresIn: "1800s",
        issuer: 'AnarchyNetwork'
    });
}

function validateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403);
        req.tokenData = decoded;
        next();
    });
}

function wsJWTVerify(message) {
    if(message?.token) {
        return jwt.verify(message.token, process.env.JWT_SECRET, (err, decoded) => {
            if(err) {
                return false;
            } else {
                return true;
            }
        });
    }
    return false;
}