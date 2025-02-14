let koleksi = {}

koleksi.index = require('./akar.js')
koleksi.biodata = require('./biodata.js')
koleksi.nama = koleksi.biodata.nama
koleksi.saldo = koleksi.biodata.saldo
koleksi.sandi = koleksi.biodata.sandi
koleksi.banned = require('./banned.js')
koleksi.withdraw = require('./withdraw.js')
koleksi.hadiah = require('./hadiah.js')
koleksi.beres = require('./pengakuan.js')



module.exports = koleksi