import express from "express"
import mysqlConfig from '../../dbConfig/mysqlConfig.js'
import { QueryResult } from "mysql2"
import WorkDetail from "../../models/workDetail.js"
// const express =require("express")
const router= express.Router()

router.get ('/:id?', async(req,res)=>{
    let id:unknown = req.params.id==undefined?undefined:parseInt(req.params.id)
    let dataList:unknown;
    
    dataList = await mysqlConfig(id==undefined?0:(id as number))
    if((dataList as WorkDetail[]).length!=0){
        // console.log([dataList])
        return res.json({works:dataList})
    }else{
        return res.status(404).json({msg:`Not found item id: ${id}`})
    }
        // return res.json({msg:"hello my-work"})
    
})


export default router