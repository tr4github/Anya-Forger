/**
   * Made By Fandyyy 🕴️
   * Subscribe FBOTZ YT
   * Follow https://instagram.com/_nzrlafndi
   * Follow https://github.com/FBOTZ-YT
*/

const fs = require('fs')
const chalk = require('chalk')

//Ubah Disini
global.ownerNumber = ['6289654836567','0']
global.ownerName = 'tr4github'
global.packname = 'Anya Forger'
global.author = 'Anya'
global.prefa = ['','!','.','#','!'] //Ilangin Prefix Yang '' Kalau Gamau No Prefix
global.sessionName = 'sesi'

//Message Nya Ubah Disini
global.mess = {
admin: 'luh bukn Admin!',
botAdmin: 'jadiin admin dulu!',
botOwner: 'lu bukan owner!',
group: 'hanya Group!',
private: 'hanya Private Chat',
wait: 'Loading...',
done: 'Done!'
}

//Sesuaikan
global.thumb = fs.readFileSync('./media/forger.jpeg')
global.donasi = fs.readFileSync('./media/donasi.jpg')
global.thumbnail = fs.readFileSync('./media/ichi.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
