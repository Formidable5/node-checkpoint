console.log("HELLO WORLD")

const http = require("http")


const server = http.createServer((req, res) => {
  res.writeHead(200,{"Content-Type" :'text/html'});
      res.end('<h1>Hello Node!!!</h1>\n')
 })
   server.listen(3000, () => {
        console.log('Server running at http://localhost:3000/')})

        const fs = require("fs")
        const data ='Hello Node'

        fs.writeFile("welcome.txt", data, (err) =>{
            if(err){
                console.error(err)
                return;
            }
            console.log("Data writting to file")
        })

        const fs = require("fs")
    
        fs.readFile("welcome.txt", (err, data) =>{
            if(err) {
                console.error(err)
            }
            console.log(data.toString())
        });
        console.log("Program Ended");

        const generator = require("generate-password")

        const password = generator.generate({
            length: 8,
            numbers:true,
            symbols:true,
            uppercase:true,
            excludeSimilarCharacters:false,
            strict:true,
        })

        console.log(password);

        var nodemailer = require('nodemailer');