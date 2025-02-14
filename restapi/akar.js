const Reply = require('server/reply')

module.exports = async ctx => {
    console.log(ctx.ip)
    let hasil = {}
    hasil.jumlah = await penggunaDB
        .collection('tersimpan')
        .estimatedDocumentCount()
    Reply('json', hasil)
}