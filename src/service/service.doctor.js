import repositoryDoctor from "../repositories/repository.doctor.js";

async function List() {
    return await repositoryDoctor.List();
}

export default {List};