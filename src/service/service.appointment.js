import repositoryAppointment from "../repositories/repository.appointment.js";

async function List(idUser) {
    return await repositoryAppointment.List(idUser);
}

async function Insert(id_doctor, id_service, id_user, booking_date, booking_hour){
    return await repositoryAppointment.Insert(id_doctor, id_service, id_user, booking_date, booking_hour);

}
async function Delete(id_user, id_appointment){
    return await repositoryAppointment.Delete(id_user, id_appointment);
}

export default {List, Insert, Delete};