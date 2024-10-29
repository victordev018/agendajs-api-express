import serviceUser from "../service/service.user.js";

async function Insert(req, res) {

    const {name, email, password} = req.body;
    const user = await serviceUser.Insert(name, email, password);
    res.status(201).send(user);
}

async function Login(req, res) {

    const { email, password} = req.body;
    const user = await serviceUser.Login( email, password);

    if (user.length == 0){
        res.status(401).send({error: "Email or password invalid"})
    }
    else
        res.status(200).send(user);
}

async function Profile(req, res){

    const idUser = req.id_user;
    const user = await serviceUser.Profile(idUser);
    res.status(200).send(user);

}

export default {Insert, Login, Profile};