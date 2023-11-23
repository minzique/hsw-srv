const express = require("express");
const hsw = require("./assets/hsw.patched.js");
const path = require("path");
const bodyParser = require("body-parser");

// import express from "express"
// import hsw from "./hsw_patched.js"
// import path from "path"
// import bodyParser from "body-parser";

const PORT = 6969;
const app = express();

app.disable("x-powered-by");
// app.use(express.static("public"));
app.use(bodyParser.json());
app.use((err, req, res, next) => {
    if (err) {
        err = err["message"] ? err["message"] : "An error occurred.";
        res.status(400).json({ err: err });
    } else {
        next();
    }
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "front/index.html"));
});
app.post("/hsw", async (req, res) => {
    try {
        if (req.is("application/json") && req.body["req"]) {
            const h = await hsw(req.body["req"]);
            // if (req.accepts("text/plain")) {
            //     res.status(200).contentType('text/plain').send(h);
            // } else {
            // res.status(200).json({ hsw: h });
            // }
            res.status(200).json({ hsw: h });
        } else {
            res.status(400).json({ err: "Invalid request." });
        }
    } catch (err) {
        err = err["message"] ? err["message"] : "An error occurred.";
        res.status(400).json({ err: err });
    }
});
// app.get('/hsw', async (req, res) => {
//     res.status(405).json({err: "Usage: curl host:port -H 'Content-type: application/json' -d '{'req': <req>}'"});
// })
app.listen(PORT, () => {
    console.log("started hsw-srv on port " + PORT);
    console.log(
        "Usage: curl host:port -H 'Content-type: application/json' -d '{\"req\": <req>}'"
    );
});
