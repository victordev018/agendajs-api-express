import {query} from "../database/sqlite.js";

async function List(idUser) {

    let sql = `select a.id_appointment, s.description as service, d.name as doctor, d.specialty, a.booking_date, a.booking_hour, u.name, ds.price
    from appointments a
    join services s on (a.id_service = s.id_service)
    join doctors d on (a.id_doctor = d.id_doctor)
    join users u on (a.id_user = u.id_user)
    join doctors_services ds on (a.id_doctor = ds.id_doctor and a.id_service = ds.id_service)
    where a.id_user = ?
    order by a.booking_date, a.booking_hour`;

    const appointments = await query(sql, [idUser]);
    return appointments;
}   

async function Insert(id_doctor, id_service, id_user, booking_date, booking_hour){
    const sql = `insert into appointments (id_doctor, id_service, id_user, booking_date, booking_hour)
    values (?, ?, ?, ?, ?) returning id_appointment`
    const appointment = await query(sql, [id_doctor, id_service, id_user, booking_date, booking_hour]);

    return appointment[0];
}

async function Delete(id_user, id_appointment){
    const sql = `delete from appointments where id_appointment = ? and id_user = ?`
    await query(sql, [id_appointment, id_user]);

    return {id_appointment};
}

export default {List, Insert, Delete};  