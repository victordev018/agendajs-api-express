import repositoryUser from "../repositories/repository.user.js";
import bcrypt from "bcrypt";
import jwt from "../token.js";

async function Insert(name, email, password){

    const hashPassword = await bcrypt.hash(password, 10);
    const user = await repositoryUser.Insert(name, email, hashPassword);
    user.token = jwt.CreateToken(user.id_user);
    return user;
}

async function Login(email, password){

    const user = await repositoryUser.FindByEmail(email);

    if (user.length == 0)
        return [];

    if (await bcrypt.compare(password, user.password))
        delete user.password;
        user.token = jwt.CreateToken(user.id_user);
        return user;

    return [];
}

export default {Insert, Login};