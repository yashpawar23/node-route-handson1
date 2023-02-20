/*
1. run "npm start" in terminal
2.goto Browser and Type endpoint "localhost:8080"(Homepage)
2.type endpoint "localhost:8080/about"(Second Page)
*/
const http = require("http");
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("Home Page Is Running.")
        res.end()
    }
    else if(req.method==="GET" && req.url==="/about"){
        res.write(JSON.stringify(["Alice","Amanda","Witney","Siberia","Nicole","Rae"]))
        res.end()
    }
    else if(req.url==="/contact"){
        // res.write("Contact us")
        res.write(JSON.stringify({Email:"xyz@gmail.com",
        CallCenter:"111222339988"
        }))
        res.end()
    }
});






server.listen(8080);
console.log("port 8080 is Running Goto Browser and Check")