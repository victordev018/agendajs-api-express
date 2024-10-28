import sqlite3 from "sqlite3";

const SQLite = sqlite3.verbose();

function query(command, params, method="all"){
    return new Promise(function (resolve, reject){
        db[method](command, params, function (error, result){
            if (error)
                reject(error);
            else
                resolve(result);
        })
    })
}

const db = new SQLite.Database("./src/database/banco.db", SQLite.OPEN_READWRITE, (error) => {
    if (error)
        return console.log("Error to connect database: " + error.message)
});

export {db, query};