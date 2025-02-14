const { get, post, put, del } = require('server/router')
const control = require('./controller.js')

module.exports = [
    get('/', control.index), 
    get('/masuk', control.masuk), 
    get('/:id/biodata', control.biodata), 
    get('/:id/nama', control.nama), 
    get('/:id/saldo', control.saldo), 
    post('/:id/sandi', control.sandi), 
    post('/:id/withdraw', control.withdraw), 
    del('/:id/ban', control.banned), 
    post('/:id/hadiah', control.hadiah), 
    put('/:id/:misinum/beres', control.beres)
]