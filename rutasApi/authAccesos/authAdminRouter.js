const jwt = require('jsonwebtoken')
const {secret} = require ('../../CONFIG')

module.exports = ( req , res ,next) => {
    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, secret , (e , datosUser) => {
        if(e) {
            return res.status(403).json({mensaje : e.message})
        }
        else {
            console.log(datosUser.perfil)
            if(datosUser.perfil !== 'admin') {
                return res.status(403).json({mensaje : 'Acceso denegado por no ser admin'})
            }
            else {
                return next()
            }
        }
    })
}