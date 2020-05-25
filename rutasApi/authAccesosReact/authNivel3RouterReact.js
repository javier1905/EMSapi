const {Router} = require('express')
const jwt = require('jsonwebtoken')
const {secret} = require('../../CONFIG')

const router = Router()

router.get('/',(req,res)=> {

    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(token,secret,(e,datosUser)=> {
        if(e) {
            return res.status(403).json({mensaje: e.message})
        }
        else {
            if(datosUser.perfil === 'nivel-3') {
                res.status(200).json({permiso : true})
            }
            else {
                return res.status(403).json({mensaje: 'usted no es nivel 3'})
            }
        }
    })
})


module.exports = router