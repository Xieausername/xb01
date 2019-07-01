const express = require("express");
const mysql = require("mysql");

const pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  port:3306,
  database:"wg",
  connectionLimit:15
})

var server = express();

server.use(express.static("public"));

const cors=require("cors");
server.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true
}));

const session=require("express-session");
server.use(session({
  secret:"128位字符串", 
  resave:true,
  saveUninitialized:true
}));

server.listen(3000);

server.get("/Login",(req,res)=>{
   var utext = req.query.utext;
   var upass = req.query.upass;
   var sql =" SELECT id FROM wg_login";       
       sql+=" WHERE utext=?";
       sql+=" AND upass=md5(?)";
   pool.query(sql,[utext,upass],(err,result)=>{
     if(err)throw err;
     if(result.length==0){
       res.send({code:-1,msg:"账号或密码有误"});
     }else{
       req.session.uid=result[0].id
       res.send({code:1,msg:"登录成功"});
     }
   });
});
