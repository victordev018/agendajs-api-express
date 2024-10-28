import repositoryDoctor from "../repositories/repository.doctor.js";

async function List(name) {
    return await repositoryDoctor.List(name);
}

async function Insert(name, specialty, icon){
    
    return await repositoryDoctor.Insert(name, specialty, icon);
}

async function Update(name, specialty, icon, id_doctor){
    
    return await repositoryDoctor.Update(name, specialty, icon, id_doctor);
}

async function Delete(id_doctor) {
    return await repositoryDoctor.Delete(id_doctor);
}

async function ListServices(idDoctor) {
    return await repositoryDoctor.ListServices(idDoctor);
}

export default {List, Insert, Update, Delete, ListServices};