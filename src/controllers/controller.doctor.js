import serviceDoctor from "../service/service.doctor.js";

async function List(req, res) {
    const doctors = await serviceDoctor.List();
    res.status(200).json(doctors);
}

export default {List};