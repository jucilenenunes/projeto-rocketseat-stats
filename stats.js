const os = require('os')
const log = require('./logger')

Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}

setInterval(() => {

    const { freemem, totalmem} = os

    const total = parseInt(totalmem() / 1024 / 1024)
    const mem = parseInt(freemem() /10224 / 1024)
    const percents = parseInt(mem/total * 100)

    const stats = {
        date: new Date().addHours(-3),
        free: `${mem} MB`,
        total:`${total} MB`,
        usage: `${percents} %`
    }

    console.clear()
    console.log("===PC STATS===")
    console.table(stats)


    log(`${JSON.stringify(stats)}\n`)

    
}, 1000)