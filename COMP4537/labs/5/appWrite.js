const http = require('http')
const url = require('url')
let name = ''
let score = 0
http.createServer(function (req,res)
{
    let q = url.parse(req.url, true)
    console.log(q.query)
    res.writeHead(200, {'Content-type' : 'text/html',
    "Access-Control-Allow-Origin": "*"})
    name = q.query["name"]
    score = q.query["score"]
    res.end(`${name} : ${score} was stored in the DB`)
}).listen(8888)
console.log("app listening on port 8888")

const mysql = require('mysql')
const con = mysql.createConnection
({
    host: "localhost",
    user: "root",
    password: "root",
    database: ""
})

con.connect(function(err)
{
    if(err)
    {
        console.error('error connecting: ' + err.stack)
        return
    }
    console.log("Connected")
    let sql = `INSERT INTO students(name,score) values (${name}, ${score}) `
    connect.query(sql, function(err, result)
    {
        console.log("1 record inserted")
    })
})