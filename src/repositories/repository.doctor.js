import {query} from "./sqlite.js";

async function List() {

    const sql = "select * from doctors order by name";

    const doctors = await query(sql, []);
    return doctors;
}

export default {List};