import {query} from "../database/sqlite.js";

async function List(name) {

    const filter = [];
    let sql = "select * from doctors ";
    if (name){
        sql += "where name like ? ";
        filter.push("%"+name+"%");
    }
    sql += "order by name"

    const doctors = await query(sql, filter);
    return doctors;
}

async function Insert(name, specialty, icon){

    const sql = `insert into doctors(name, specialty, icon) values (?, ?, ?) returning id_doctor`;
    const doctor = await query(sql, [name, specialty, icon]);
    return doctor[0];

}

async function Update(name, specialty, icon, id_doctor){

    const sql = `update doctors set name=?, specialty=?, icon=? where id_doctor=${id_doctor}`;
    const doctor = await query(sql, [name, specialty, icon]);
    return {id_doctor};
}

async function Delete(id_doctor) {
    const sql = `delete from doctors where id_doctor = ${id_doctor}`;
    await query(sql, []);
    return {id_doctor};
}

async function ListServices(idDoctor) {
    const sql = `select d.id_service, s.description, d.price
    from doctors_services d
    join services s on (d.id_service = s.id_service)
    where d.id_doctor = ?
    order by s.description`;

    const services = await query(sql, [idDoctor]);
    return services; 
}

export default {List, Insert, Update, Delete, ListServices};