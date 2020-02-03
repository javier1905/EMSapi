const Router = require('express')
const jwt = require('jsonwebtoken')
const CONFIG = require('../CONFIG')

const router=Router();

router.get('/',(req,res)=>{

    if(!req.headers.authorization){
        res.status(403).json({mensaje:'No envio el Token en el headers'})
    }else{
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,CONFIG.secret,(e,d)=>{
            if(e){
                res.status(403).json({mensaje:e.name})
            }
            else{
                res.status(200).json(d)
            }
        })
    }
})
module.exports = router;