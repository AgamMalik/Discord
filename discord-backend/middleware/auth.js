const jwt = require('jsonwebtoken')

const config = process.env;

// middleware to check if there is a token or not in request...and is it right token

const verifyToken = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['authorization'];

    if(!token){
        return res.status(403).send('A token is required for authentication');
    }
    try {
        token = token.replace(/^Bearer\s+/, "");

        const decoded = jwt.verify(token, config.TOKEN_KEY);
        // add user from payload
        req.user = decoded;

    } catch (err) {
        return res.status(401).send('Invalid token');
    }

    return next();
}

module.exports = verifyToken;