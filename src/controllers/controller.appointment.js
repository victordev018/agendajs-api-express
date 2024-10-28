import serviceAppointment from "../service/service.appointment.js";

async function ListByUser(req, res) {
    const idUser = req.id_user;
    const appointments = await serviceAppointment.List(idUser);
    res.status(200).send(appointments);
}

async function Insert(req, res) {
    const id_user = req.id_user;
    const {id_doctor, id_service, booking_date, booking_hour} = req.body;
    const appointment = await serviceAppointment.Insert(id_doctor, id_service, id_user, booking_date, booking_hour);
    res.status(201).send(appointment);  
    
}

export default {ListByUser, Insert};