import serviceDoctor from "../service/service.doctor.js";

async function List(req, res) {

    const name = req.query.name;
    const doctors = await serviceDoctor.List(name);
    res.status(200).json(doctors);
}

async function Insert(req, res) {

    const {name, specialty, icon} = req.body;
    const doctor = await serviceDoctor.Insert(name, specialty, icon);
    res.status(201).send(doctor);
    
}

async function Update(req, res) {

    const id_doctor = req.params.id_doctor;
    const {name, specialty, icon} = req.body;
    const doctor = await serviceDoctor.Update(name, specialty, icon, id_doctor);
    res.status(200).send(doctor);
}

async function Delete(req, res) {

    const doctorId = req.params.id_doctor; 
    const doctor = await serviceDoctor.Delete(doctorId);
    res.status(200).send(doctor);

}

async function ListServices(req, res) {

    const idDoctor = req.params.id_doctor;
    const services = await serviceDoctor.ListServices(idDoctor);
    res.status(200).send(services);
}

export default {List, Insert, Update, Delete, ListServices};