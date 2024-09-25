import express from "express";
import path, { dirname } from "path"; //need to import dirname bc type of JS is module not common js
import { fileURLToPath } from "url";
const router = express.Router();
// 2 ways to response file 
// force to dowload
router.get('/work/download/:id', (req, res) => {
    // need to create _dirname with this solution bc we use JS type module
    const _fileName = fileURLToPath(import.meta.url);
    const _dirname = dirname(_fileName);
    const filePath = path.join(_dirname, "..", "..", "files", "exmaple_1.png");
    res.download(filePath, "downloaded_example_1.png", err => {
        if (err) {
            console.log(`error while sending file: ${err}`);
            res.status(500).send("error");
        }
    });
});
router.get('/work/view/:name', (req, res) => {
    // need to create _dirname with this solution bc we use JS type module
    const _fileName = fileURLToPath(import.meta.url);
    const _dirname = dirname(_fileName);
    const filePath = path.join(_dirname, "..", "..", "files", "exmaple_1.png");
    console.log(filePath);
    res.sendFile(filePath, err => {
        if (err) {
            console.log(`error while sending file: ${err}`);
            res.status(500).send("error");
        }
    });
});
export default router;
