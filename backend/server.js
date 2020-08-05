const app = require('express')();
var bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(allowCrossDomain);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));
// parse application/json
app.use(bodyParser.json())
app.use(cors());

var fle;

app.get('/cancel/:file', (req, res) => {
    fs.unlink(req.params.file, (err) => {
        if (err) {
            console.error(err)
            res.send(err)
        }
    
        //file removed
        res.send("file removed");
    })
})

app.post('/pauseable', (req, res) => {
    if (req.body == {}){
        res.send("Please send something at least man");
    }
    else {
        console.log(req.body.start)
        fle = Object.values(req.body.file);
        var uint8View1 = new Uint8Array(fle);
        if (req.body.start == 0){
            fs.writeFile(req.body.name, Buffer.from(uint8View1), (e,d) => {
                if (e){
                    console.log(e);
                    res.send(e);
                }
                else{
                    res.send("d");
                }
            });
        }
        else{
            fs.appendFile(req.body.name, Buffer.from(uint8View1), (e,d) => {
                if (e){
                    console.log(e);
                    res.send(e);
                }
                else{
                    res.send("req.body.file");
                }
            });
        }
    }
})

app.listen('8000', () => {
    console.log("listening to 8000");
})