const app = require('express')();
var bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));
// parse application/json
app.use(bodyParser.json())
app.use(cors());

var fle;

app.post('/pauseable', (req, res) => {
    console.log(req.body)
    fle = req.body.file;
    var uint8View1 = new Uint8Array(fle);
    if (req.body.start == 0){
        fs.writeFile(req.body.name, Buffer.from(uint8View1), (e,d) => {
            if (e){
                console.log(e);
                res.send(e);
            }
            else{
                console.log(d);
                res.send("d");
            }
        });
    }
    else{
        fs.appendFileSync(req.body.name, Buffer.from(uint8View1));
        res.send("req.body.file");
    }
})

app.listen('8000', () => {
    console.log("listening to 8000");
})


// let file = $('input')[0].files[0]
// let reader = new FileReader()
// reader.readAsArrayBuffer(file)
// reader.onload = async function(){
//     let ui = new Uint8Array(reader.result);
//     const len = ui.length;
//     let a = 0;
//     while(a < len){
//         let up = await Math.min(a+100, len);
//         await $.ajax({
//                 type: 'POST',
//                 mode: 'no-cors',
//                 url: 'http://localhost:8000/pauseable',
//                 data : {
//                     name: file.name,
//                     start : a,
//                     file: uint8View.subarray(a, up),
//                 }})
//         .done((r) => console.log(r))
//         .catch(e => console.log(e))
//     }
// }