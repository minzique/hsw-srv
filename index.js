const express = require("express");
const hsw = require("./hsw_patched.js").hsw;
const path = require("path")
const bodyParser =  require("body-parser")

const PORT = 6969
const app = express()

app.disable("x-powered-by");
// app.use(express.static("public"));
app.use(bodyParser.json());
app.use((err, req, res, next) => {
    if (err) {
        err = err["message"] ? err["message"] : "An error occurred.";
        res.status(400).json({ err:  err});
    } else {
        next();
    }
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.post('/hsw', async (req, res) => {
    try {
        if (req.is('application/json') && req.body["req"]) {
            const h = await hsw(req.body["req"]);
            if (req.accepts("text/plain")) {
                res.status(200).contentType('text/plain').send(h);
            } else {
                res.status(200).json({ hsw: h });
            }
        } else {
            res.status(400).json({ err: "Invalid request." });
        }
    }catch (err){
        err = err['message'] ? err['message'] : "An error occurred.";
        res.status(400).json({err: err});
    }
})

app.listen(PORT, ()=>{
    console.log('started hsw-srv on port ' + PORT)
    console.log("Usage: curl -X POST host:port -H 'Content-type: application/json' ")
})