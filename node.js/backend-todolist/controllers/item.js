'use strict'

const controller = {
    probando: ('/probando',(req, res)=>{
        return res.status(200).send({
            item: 'item 1'
        })
    })
    
}

module.exports = controller;