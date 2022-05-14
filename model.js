import { readFile, readFileSync } from "fs";
import serverlessMysql from "serverless-mysql";

const db = mysql({
  config: {
    host: "127.0.0.1",
    database: "db_backend",
    user: "root",
    password: "root",
  },
});

export async function navbar3() {
  let data = await db.query("select * from menu");
  await db.end();
  return data;
}

export function model_navbar(parameter){
    const data = readFileSync('./Data/navbar.json','utf-8');
    let hasil = ""
    if(parameter == "english"){
        hasil = JSON.parse(data).english;
    }else if(parameter == "indonesia"){
        hasil = JSON.parse(data).indonesia;
    }
    return hasil;
}

// export function model_navbar2(parameter){
//     let hasil = 
// }
