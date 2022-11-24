const http = require('http');
const fs = require('fs');
const port = 2315;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        // res.end("<h1> <center>Hello Trupti Your Server Is Created Successfully...!!!! </center></h1>")

        res.write("<!doctype html><html><head> <!-- Required meta tags --><meta charset='utf-8'><meta name='viewport' content='width=device-width, initial-scale=1'><!-- Bootstrap CSS --><link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC' crossorigin='anonymous'><title> Assignment 1</title></head><body>   &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <h1>  <center>   <u><mark> Hello Trupti Your Server Is Created Successfully...!!!!</mark></u></center> </h1><br><br><br>                                                                                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;                                                                                                                                    <a href='/createfile' class='btn btn-primary btn-lg   role='button' >Create File</a> &nbsp; &nbsp;&nbsp;&nbsp;                             <a href='/readfile' class='btn btn-warning btn-lg   role='button'>Read File</a> &nbsp;&nbsp;&nbsp;&nbsp;                                 <a href='/appendfile' class='btn btn-primary btn-lg   role='button'>Update File</a> &nbsp;&nbsp;&nbsp;&nbsp;                             <a href='/deletefile' class='btn btn-warning btn-lg   role='button'>Delete File</a>                                                  <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM' crossorigin='anonymous'></script></body></html>")

    }
    else if (req.url === "/createfile") {
        fs.writeFileSync('new.txt', ' Welcome To The New File ..... \n  \n \n Some Words About Friendship........................... \n Friendship is one of lifes greatest treasure Friends that are loyal are always there to make you laugh when you are down,  they are not afraid to help you avoid mistakes and they look out for your best interest.This kind of friend can be hard to find, but they offer a friendship that will last a lifetime. Other friends may not be quite as loving.The pain caused by a friendship marred by betrayal is not easy to overcome. In fact, many poems find their inspiration from the joy brought about by a loving friendship or the pain caused by a failed friendship.\n ');
        res.end("<h1>File is Created ........</h1>");
    }
    // else if (req.url === "/readfile") {
    //     fs.readFile('new.txt', 'utf8', function (err, data) {
    //         res.writeHead(200, { 'Content-Type': 'text/html' })
    //         res.write(data);
    //         return res.end();
    //     });
    // }


    else if(req.url=="/readfile"){
        if(fs.existsSync("new.txt")){
            let data=fs.readFileSync("new.txt");
            res.end(data.toString());
        }
        else{
            res.end("<h1>File Does Not Exists</h1>");
        }
    }


    else if (req.url === "/appendfile") {
        fs.readFileSync("new.txt", "utf-8");
        fs.appendFile("new.txt", "\n /////////////////////////////////////////////////////////////////////////////////// \n And The File Is Updated...!!!", (err) => {
            if (err) {
                console.log(err);
            }
            else {
                fs.readFileSync("new.txt", "utf-8");
                res.end("<h1>File is Updated.......</h1>");
            }
        })
    }

    else if(req.url=="/deletefile"){
        if(fs.existsSync("new.txt")){
            if(fs.unlinkSync("new.txt")){
                res.end("<h1>File Deleted</h1>")
            }
            else{
                 res.end("<h1>File Deleted</h1>");
             }
        }
        else{node
            res.end("<h1>File Does not Exixt To Delete....</h1>");
        }
    }



    else {
        res.end("<h1> OOP's...... Invalid Page </h1>")
    }
})

server.listen(port, () => {
    console.log(`Server is working on : ${port}`);
})