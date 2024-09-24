import dotenv from 'dotenv'
import mysql from "mysql2"


dotenv.config()
const pool = mysql.createPool({
    host:    process.env.MYSQL_HOST,
    user:   process.env.MYSQL_USER,
    password:   process.env.MYSQL_PASSWORD,
    database: 'my_portfolio'
}).promise()


async function getWork ():Promise<unknown>
async function getWork (id:number):Promise<unknown>
async function getWork (id?:unknown):Promise<unknown>
{
    let query= `Select * From my_works`
    if(!id||id==0){
        const [result] =await pool.query(query)
        // console.log(result)
        return result;
    }
    if(id){
        query+= ' Where work_id = ?'
        // console.log(query)
        const [result] =await pool.query(query,[id])
        // console.log(query)
        return result;
    }
    throw new Error("error")
    // console.log(result)
    
}

export default getWork


