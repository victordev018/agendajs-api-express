import jwt from 'jsonwebtoken';

const secretToken = "jornadaJS2024";

function CreateToken(id_user){
    const token = jwt.sign({id_user}, secretToken, {
        expiresIn : 9999999
    })
    return token;
}

function ValidateToken(req, res, next){
    const authToken = req.headers.authorization;    // "Bearer <token>"

    if (!authToken)
        return res.status(401).send({error : "token not provided"});

    const [bearer, token] = authToken.split(" ");   // "bearer" "<token>"

    jwt.verify(token, secretToken, (error, tokenDecoded) => {
        if (error)
            return res.status(401).send({error: "token is invalid"});

        req.id_user = tokenDecoded.id_user;

        next();     // token is valid, continue request
    });
}

export default {CreateToken, ValidateToken};
