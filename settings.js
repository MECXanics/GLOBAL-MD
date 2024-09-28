

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "∆" //ur yt chanel name
global.socialm = "GitHub: MECXanics" //ur github or insta name
global.location = "Nigeria, Lagos" //ur location

//new
global.botname = '§VORTEX§' //ur bot name
global.ownernumber = ['2348053080421'] //ur owner number, dont add more than one
global.ownername = '°∆MECX∆°' //ur owner name
global.websitex = "∆"
global.wagc = "∆"
global.themeemoji = '⚡'
global.wm = "§VORTEX§"
global.botscript = 'https://github.com/MECXanics/GLOBAL-MD' //script link
global.packname = "∆"
global.author = "MECX\n\n+2348053080421"
global.creator = "2348053080421@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2348053080421"] // Premium User

//channel id
global.xchannel = {
	jid: '1203633194863872999@newsletter'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '91' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['➜','☞','㉨','✪','✯','益','⊡','☆','ෆ','✎','⎆','⫹⫺','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆','֎','ᚏ','⸙','⧉']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
