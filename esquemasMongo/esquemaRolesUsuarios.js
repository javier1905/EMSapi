const mongoose = require('mongoose')

const perfil = new mongoose.Schema({
    perfil:{
        type:String,
        require:true,
        unique:true,
        enum:['Admin','nivel-1','nivel-2','nivel-3','nivel-4','nivel-5']
    }
})

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

module.exports = mongoose.model('perfil',perfil)