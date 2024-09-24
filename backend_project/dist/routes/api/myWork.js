import express from "express";
import mysqlConfig from '../../dbConfig/mysqlConfig.js';
// const express =require("express")
const router = express.Router();
router.get('/:id?', async (req, res) => {
    let id = req.params.id == undefined ? undefined : parseInt(req.params.id);
    let dataList;
    dataList = await mysqlConfig(id == undefined ? 0 : id);
    if (dataList.length != 0) {
        // console.log([dataList])
        return res.json({ works: dataList });
    }
    else {
        return res.status(404).json({ msg: `Not found item id: ${id}` });
    }
    // return res.json({msg:"hello my-work"})
});
export default router;
