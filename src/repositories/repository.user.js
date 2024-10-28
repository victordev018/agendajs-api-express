import { query } from "../database/sqlite.js";

async function Insert(name, email, password){

    const sql = `insert into users (name, email, password) values (?, ?, ?) returning id_user`;
    const user = await query(sql, [name, email, password]);
    return user[0];
}

async function FindByEmail(email){

    const sql = `select * from users where email = ?`;
    const user = await query(sql, [email]);

    if (user.length == 0){
        return [];
    }
    return user[0];
}

export default {Insert, FindByEmail};