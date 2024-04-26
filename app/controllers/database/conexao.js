import mysql from "mysql"

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3131',
    user: 'root',
    password: 'Enzo250706!',
    database: 'bdcopa'
})

conexao.connect()

export default conexao