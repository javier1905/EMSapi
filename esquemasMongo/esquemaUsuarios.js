const mongoose = require('mongoose')

const usuario = new mongoose.Schema({

    userName: {
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    nombre:{
        type: String,
        required:true
    },
    apellido:{
        type: String,
        required:true
    },
    perfil:{
        type:String,
        required:true,
        enum:['Admin','nivel-1','nivel-2','nivel-3','nivel-4','nivel-5']
    }
})
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

module.exports = mongoose.model('usuario',usuario)