const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Faboe-Owner Menu 』
┆❏.self 🅞
┆❏.public 🅞
┆❏.join 🅞
┆❏.bctext 🅞
┆❏.bcimage 🅞
┆❏.bcvideo 🅞
┆❏.creategc 🅞
┆❏.setexif 🅞
┆❏.shutdown 🅞
┆❏.autostickergc 🅞
┆❏.setppbot 🅞
┆❏.addprem 🅞
┆❏.delprem 🅞
┆❏.addowner 🅞
┆❏.delowner 🅞
┆❏.addvn 🅞
┆❏.delvn 🅞
┆❏.addsticker 🅞
┆❏.delsticker 🅞
┆❏.addimage 🅞
┆❏.delimage 🅞
┆❏.addvideo 🅞
┆❏.delvideo 🅞
┆❏.block add 🅞
┆❏.unblock del 🅞
┆❏.leavegc 🅞
╰–––––––––––––––༓

╭––『Faboe-Download Menu 』
┆❏.tiktokvideo 🅕
┆❏.tiktokaudio 🅕
┆❏.ytsearch 🅕
┆❏.mediafire 🅕
┆❏.play 🅕
┆❏.ytmp3 🅕
┆❏.ytmp4 🅕
┆❏.google 🅕
┆❏.spotify 🅕
┆❏.gitclone 🅕
┆❏.happymod 🅕
╰–––––––––––––––༓

╭––『 Faboe-Group Menu 』
┆❏.antilink 🅖
┆❏.antiwame 🅖
┆❏.grouplink 🅖
┆❏.ephemeral 🅖
┆❏.delete 🅖
┆❏.setppgroup 🅖
┆❏.setname 🅖
┆❏.setdesc 🅖
┆❏.add 🅖
┆❏.kick 🅖
┆❏.promote 🅖
┆❏.demote 🅖
┆❏.hidetag 🅖
┆❏.tagall 🅖
┆❏.editinfo 🅖
┆❏.opentime 🅖
┆❏.closetime 🅖
┆❏.resetlink 🅖
┆❏.autostickerpc 🅖
┆❏.antilinkgc 🅖
┆❏.antiwame 🅖
┆❏.antilinkall 🅖
┆❏.antilinktiktok 🅖
┆❏.antilinkfb 🅖
┆❏.antilinktwitter 🅖
┆❏.antilinkig 🅖
┆❏.antlinktg 🅖
┆❏.antilinkytvid 🅖
┆❏.antilinkytch 🅖
┆❏.antivirus 🅖
┆❏.antitoxic 🅖
┆❏.nsfw 🅖
┆❏.react 🅖
╰–––––––––––––––༓

╭––『 Faboe-Random Video 』
┆❏.tiktokgirl 🅟
┆❏.tiktoknukthy 🅟
┆❏.tiktokkayes 🅟
┆❏.tiktokpanrika 🅟
┆❏.tiktoknotnot 🅟
┆❏.tiktokghea 🅟
┆❏.tiktoksantuy 🅟
┆❏.tiktokbocil 🅟
╰–––––––––––––––༓

╭––『 Faboe-Stalker 』
┆❏.igstalk 🅟
┆❏.ffstalk 🅟
┆❏.mlstalk 🅟
┆❏.npmstalk 🅟
┆❏.ghstalk 🅟
╰–––––––––––––––༓

╭––『 Faboe-Other Menu 』
┆❏.ping 🅕
┆❏.menu 🅕
┆❏.listpem 🅕
┆❏.liststicker 🅕
┆❏.listimage 🅕
┆❏.listvideo 🅕
┆❏.listvn 🅕
┆❏.listbadword 🅕
┆❏.listpc 🅕
┆❏.listgc 🅕
┆❏.owner 🅕
┆❏.rentbot 🅟
┆❏.listrentbot 🅟
┆❏.donate 🅕
┆❏.friend 🅕
┆❏.obfuscate 🅕
┆❏.styletext 🅕
┆❏.fliptext 🅕
┆❏.tts 🅕
┆❏.say 🅕
┆❏.togif 🅕
┆❏.toqr 🅕
┆❏.bass 🅕
┆❏.blown 🅕
┆❏.deep 🅕
┆❏.earrape 🅕
┆❏.fast 🅕
┆❏.fat 🅕
┆❏.nightcore 🅕
┆❏.reverse 🅕
┆❏.robot 🅕
┆❏.slow 🅕
┆❏.smooth 🅕
┆❏.squirrel 🅕
┆❏.tinyurl 🅕
┆❏.tinyurl 🅕
┆❏.tourl 🅕
┆❏.tovn 🅕
┆❏.toaudio 🅕
┆❏.tomp3 🅕
┆❏.tomp4🅕
┆❏.toimg 🅕
┆❏.toonce 🅕
┆❏.sticker 🅕
┆❏.take 🅕
┆❏.emoji 🅕
┆❏.volume 🅕
┆❏.ebinary 🅕
┆❏.dbinary 🅕
┆❏.ssweb 🅕
┆❏.quoted 🅕
┆❏.runtime 🅕
┆❏.sound1 - sound161 🅕
╰–––––––––––––––༓

╭––『 Faboe-Fun Menu 』
┆❏.define 🅕
┆❏.truth 🅕
┆❏.dare 🅕
┆❏.couple 🅕
┆❏.soulmate 🅕
┆❏.stupidcheck 🅕
┆❏.handsomecheck 🅕
┆❏.uncleancheck 🅕
┆❏.hotcheck 🅕
┆❏.smartcheck 🅕
┆❏.greatcheck 🅕
┆❏.evilcheck 🅕
┆❏.dogcheck 🅕
┆❏.coolcheck 🅕
┆❏.waifucheck 🅕
┆❏.awesomecheck 🅕
┆❏.gaycheck 🅕
┆❏.cutecheck 🅕
┆❏.lesbiancheck 🅕
┆❏.hornycheck 🅕
┆❏.prettycheck 🅕
┆❏.lovelycheck 🅕
┆❏.uglycheck 🅕
┆❏.hot 🅕
┆❏.sexy 🅕
┆❏.kind 🅕
┆❏.idiot 🅕
┆❏.handsome 🅕
┆❏.beautiful 🅕
┆❏.cute 🅕
┆❏.pretty 🅕
┆❏.lesbian 🅕
┆❏.noob 🅕
┆❏.bastard 🅕
┆❏.foolish 🅕
┆❏.nerd 🅕
┆❏.asshole 🅕
┆❏.gay 🅕
┆❏.smart 🅕
┆❏.stubble 🅕
┆❏.doggo 🅕
┆❏.horny 🅕
┆❏.cunt 🅕
┆❏.wibu 🅕
┆❏.noobra 🅕
┆❏.nibba 🅕
┆❏.nibbi 🅕
┆❏.comrade 🅕
┆❏.mumu 🅕
┆❏.rascal 🅕
┆❏.scumbag 🅕 
┆❏.nuts 🅕
┆❏.fagot 🅕
┆❏.scoundrel 🅕
┆❏.ditch 🅕
┆❏.dope 🅕
┆❏.gucci 🅕
┆❏.lit 🅕
┆❏.dumbass 🅕
┆❏.crackhead 🅕
┆❏.mf 🅕
┆❏.motherfucker 🅕
┆❏.sucker 🅕
┆❏.fuckboy 🅕
┆❏.playboy 🅕
┆❏.fuckgirl 🅕
┆❏.playgirl 🅕
┆❏.quotes 🅕
┆❏.can 🅕
┆❏.is 🅕
┆❏.when 🅕
┆❏.where 🅕
┆❏.what 🅕
┆❏.how 🅕
┆❏.rate 🅕
┆❏.cry 🅟
┆❏.kill 🅟
┆❏.hug 🅟
┆❏.pat 🅟
┆❏.lick 🅟 
┆❏.kiss 🅟
┆❏.bite 🅟
┆❏.yeet 🅟
┆❏.bully 🅟
┆❏.bonk 🅟
┆❏.wink 🅟
┆❏.poke 🅟
┆❏.nom 🅟
┆❏.slap 🅟
┆❏.smile 🅟 
┆❏.wave 🅟
┆❏.awoo 🅟
┆❏.blush 🅟
┆❏.smug 🅟
┆❏.glomp 🅟 
┆❏.happy 🅟
┆❏.dance 🅟
┆❏.cringe 🅟
┆❏.cuddle 🅟
┆❏.highfive 🅟 
┆❏.shinobu 🅟
┆❏.handhold 🅟
┆❏.horny 🅕
┆❏.checkme 🅕
┆❏.confess 🅕
┆❏.leave 🅕
╰–––––––––––––––༓

╭––『 Faboe-Random Photo 』
┆❏.aesthetic 🅟
┆❏.coffee 🅟
┆❏.wikimedia 🅟
┆❏.wallpaper 🅟
┆❏.art 🅟
┆❏.bts 🅟
┆❏.woof 🅕
┆❏.meow 🅕
┆❏.lizard 🅕
┆❏.cosplay 🅟
┆❏.hacker 🅟
┆❏.cyber 🅟
┆❏.gamewallpaper 🅟
┆❏.islamic 🅟
┆❏.jennie 🅟
┆❏.jiso 🅟
┆❏.satanic 🅟
┆❏.justina 🅟
┆❏.cartoon 🅟
┆❏.pentol 🅟
┆❏.cat 🅕
┆❏.kpop 🅕
┆❏.exo 🅟
┆❏.lisa 🅟
┆❏.space 🅟
┆❏.car 🅟
┆❏.technology 🅟
┆❏.bike 🅟
┆❏.shortquote 🅟
┆❏.antiwork 🅕
┆❏.hacking 🅕
┆❏.boneka 🅕
┆❏.rose 🅕
┆❏.ryujin 🅕
┆❏.ulzzangboy 🅕
┆❏.ulzzanggirl 🅕
┆❏.wallml 🅕
┆❏.wallphone 🅕
┆❏.mountain 🅟
┆❏.goose 🅕
┆❏.profilepic 🅕
┆❏.couplepic 🅕
┆❏.programming 🅟
┆❏.pubg 🅕
┆❏.blackpink 🅕
┆❏.randomboy 🅕  
┆❏.randomgirl 🅕
┆❏.hijab 🅕  
┆❏.chinese 🅕
┆❏.indo 🅕
┆❏.japanese 🅕
┆❏.korean 🅕
┆❏.malay 🅕
┆❏.thai 🅕
┆❏.vietnamese 🅕
╰–––––––––––––––༓

╭––『 Faboe-Anime 』
┆❏.akira 🅟
┆❏.akiyama 🅟
┆❏.ana 🅟
┆❏.asuna 🅟
┆❏.ayuzawa 🅟
┆❏.boruto 🅟
┆❏.chiho 🅟
┆❏.chitoge 🅟
┆❏.cosplayloli 🅟
┆❏.cosplaysagiri 🅟
┆❏.deidara 🅟
┆❏.doraemon 🅟
┆❏.elaina 🅟
┆❏.emilia 🅟
┆❏.erza 🅟
┆❏.gremory 🅟
┆❏.hestia 🅟
┆❏.hinata 🅟
┆❏.husbu 🅟
┆❏.inori 🅟
┆❏.isuzu 🅟
┆❏.itachi 🅟
┆❏.itori 🅟
┆❏.kaga 🅟
┆❏.kagura 🅟
┆❏.kakasih 🅟
┆❏.kaori 🅟
┆❏.keneki 🅟
┆❏.kotori 🅟
┆❏.kurumi 🅟
┆❏.loli 🅟
┆❏.madara 🅟
┆❏.megumin 🅟
┆❏.mikasa 🅟
┆❏.mikey 🅟
┆❏.miku 🅟
┆❏.minato 🅟
┆❏.naruto 🅟
┆❏.neko 🅟
┆❏.neko2 🅟
┆❏.nekonime 🅟
┆❏.nezuko 🅟
┆❏.onepiece 🅟
┆❏.pokemon 🅟
┆❏.randomnime 🅟
┆❏.randomnime2 🅟
┆❏.rize 🅟
┆❏.sagiri 🅟
┆❏.sakura 🅟
┆❏.sasuke 🅟
┆❏.shina 🅟
┆❏.shinka 🅟
┆❏.shinomiya 🅟
┆❏.shizuka 🅟
┆❏.shota 🅟
┆❏.tejina 🅟
┆❏.toukachan 🅟
┆❏.tsunade 🅟
┆❏.waifu 🅟
┆❏.animewall 🅟
┆❏.yotsuba 🅟
┆❏.yuki 🅟
┆❏.yulibocil 🅟
┆❏.yumeko 🅟
┆❏.8ball 🅕
┆❏.tickle 🅕
┆❏.gecg 🅕
┆❏.feed 🅕
╰–––––––––––––––༓

╭––『 Faboe-Anime NSFW 』
┆❏.hentai 🅕
┆❏.gifhentai 🅕
┆❏.gifblowjob 🅕
┆❏.hentaivid 🅕
┆❏.hneko 🅕
┆❏.nwaifu 🅕
┆❏.animespank 🅕
┆❏.trap 🅕
┆❏.gasm 🅕
┆❏.ahegao 🅕
┆❏.ass 🅕
┆❏.bdsm 🅕
┆❏.blowjob 🅕
┆❏.cuckold 🅕
┆❏.cum 🅕
┆❏.milf 🅕
┆❏.eba 🅕
┆❏.ero 🅕
┆❏.femdom 🅕
┆❏.foot 🅕
┆❏.gangbang 🅕
┆❏.glasses 🅕
┆❏.jahy 🅕
┆❏.masturbation 🅕
┆❏.manga 🅕
┆❏.neko-hentai 🅕
┆❏.neko-hentai2 🅕
┆❏.nsfwloli 🅕
┆❏.orgy 🅕
┆❏.panties 🅕 
┆❏.pussy 🅕
┆❏.tentacles 🅕
┆❏.thights 🅕
┆❏.yuri 🅕
┆❏.zettai 🅕
╰–––––––––––––––༓

╭––『 Faboe-Textpro Maker 』
┆❏.candy 🅟 
┆❏.christmas 🅟 
┆❏.3dchristmas 🅟 
┆❏.sparklechristmas 🅟
┆❏.deepsea 🅟 
┆❏.scifi 🅟 
┆❏.rainbow 🅟 
┆❏.waterpipe 🅟 
┆❏.spooky 🅟 
┆❏.pencil 🅟 
┆❏.circuit 🅟 
┆❏.discovery 🅟 
┆❏.metalic 🅟 
┆❏.fiction 🅟 
┆❏.demon 🅟 
┆❏.transformer 🅟 
┆❏.berry 🅟 
┆❏.thunder 🅟 
┆❏.magma 🅟 
┆❏.3dstone 🅟 
┆❏.neonlight 🅟 
┆❏.glitch 🅟 
┆❏.harrypotter 🅟 
┆❏.brokenglass 🅟 
┆❏.papercut 🅟 
┆❏.watercolor 🅟 
┆❏.multicolor 🅟 
┆❏.neondevil 🅟 
┆❏.underwater 🅟 
┆❏.graffitibike 🅟
┆❏.snow 🅟 
┆❏.cloud 🅟 
┆❏.honey 🅟 
┆❏.ice 🅟 
┆❏.fruitjuice 🅟 
┆❏.biscuit 🅟 
┆❏.wood 🅟 
┆❏.chocolate 🅟 
┆❏.strawberry 🅟 
┆❏.matrix 🅟 
┆❏.blood 🅟 
┆❏.dropwater 🅟 
┆❏.toxic 🅟 
┆❏.lava 🅟 
┆❏.rock 🅟 
┆❏.bloodglas 🅟 
┆❏.hallowen 🅟 
┆❏.darkgold 🅟 
┆❏.joker 🅟 
┆❏.wicker 🅟
┆❏.firework 🅟 
┆❏.skeleton 🅟 
┆❏.blackpink 🅟 
┆❏.sand 🅟 
┆❏.glue 🅟 
┆❏.1917 🅟 
┆❏.leaves 🅟
╰–––––––––––––––༓

╭––『 Faboe-PhotoOxy Maker 』
┆❏.shadow 🅟 
┆❏.write 🅟 
┆❏.romantic 🅟 
┆❏.burnpaper 🅟
┆❏.smoke 🅟 
┆❏.narutobanner 🅟 
┆❏.love 🅟 
┆❏.undergrass 🅟
┆❏.doublelove 🅟 
┆❏.coffecup 🅟
┆❏.underwaterocean 🅟
┆❏.smokyneon 🅟
┆❏.starstext 🅟
┆❏.rainboweffect 🅟
┆❏.balloontext 🅟
┆❏.metalliceffect 🅟
┆❏.embroiderytext 🅟
┆❏.flamingtext 🅟
┆❏.stonetext 🅟
┆❏.writeart 🅟
┆❏.summertext 🅟
┆❏.wolfmetaltext 🅟
┆❏.nature3dtext 🅟
┆❏.rosestext 🅟
┆❏.naturetypography 🅟
┆❏.quotesunder 🅟
┆❏.shinetext 🅟
╰–––––––––––––––༓

╭––『 Faboe-Ephoto360 Maker 』
┆❏.glitchtext 🅟
┆❏.writetext 🅟
┆❏.advancedglow 🅟
┆❏.typographytext 🅟
┆❏.pixelglitch 🅟
┆❏.neonglitch 🅟
┆❏.flagtext 🅟
┆❏.flag3dtext 🅟
┆❏.deletingtext 🅟
┆❏.blackpinkstyle 🅟
┆❏.glowingtext 🅟
┆❏.underwatertext 🅟
┆❏.logomaker 🅟
┆❏.cartoonstyle 🅟
┆❏.papercutstyle 🅟
┆❏.watercolortext 🅟
┆❏.effectclouds 🅟
┆❏.blackpinklogo 🅟
┆❏.gradienttext 🅟
┆❏.summerbeach 🅟
┆❏.luxurygold 🅟
┆❏.multicoloredneon 🅟
┆❏.sandsummer 🅟
┆❏.galaxywallpaper 🅟
┆❏.1917style 🅟
┆❏.makingneon 🅟
┆❏.royaltext 🅟
┆❏.freecreate 🅟
┆❏.galaxystyle 🅟
┆❏.lighteffects 🅟
╰–––––––––––––––༓
`}

global.animemenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Faboe-Anime 』
┆❏.akira 🅟
┆❏.akiyama 🅟
┆❏.ana 🅟
┆❏.asuna 🅟
┆❏.ayuzawa 🅟
┆❏.boruto 🅟
┆❏.chiho 🅟
┆❏.chitoge 🅟
┆❏.cosplayloli 🅟
┆❏.cosplaysagiri 🅟
┆❏.deidara 🅟
┆❏.doraemon 🅟
┆❏.elaina 🅟
┆❏.emilia 🅟
┆❏.erza 🅟
┆❏.gremory 🅟
┆❏.hestia 🅟
┆❏.hinata 🅟
┆❏.husbu 🅟
┆❏.inori 🅟
┆❏.isuzu 🅟
┆❏.itachi 🅟
┆❏.itori 🅟
┆❏.kaga 🅟
┆❏.kagura 🅟
┆❏.kakasih 🅟
┆❏.kaori 🅟
┆❏.keneki 🅟
┆❏.kotori 🅟
┆❏.kurumi 🅟
┆❏.loli 🅟
┆❏.madara 🅟
┆❏.megumin 🅟
┆❏.mikasa 🅟
┆❏.mikey 🅟
┆❏.miku 🅟
┆❏.minato 🅟
┆❏.naruto 🅟
┆❏.neko 🅟
┆❏.neko2 🅟
┆❏.nekonime 🅟
┆❏.nezuko 🅟
┆❏.onepiece 🅟
┆❏.pokemon 🅟
┆❏.randomnime 🅟
┆❏.randomnime2 🅟
┆❏.rize 🅟
┆❏.sagiri 🅟
┆❏.sakura 🅟
┆❏.sasuke 🅟
┆❏.shina 🅟
┆❏.shinka 🅟
┆❏.shinomiya 🅟
┆❏.shizuka 🅟
┆❏.shota 🅟
┆❏.tejina 🅟
┆❏.toukachan 🅟
┆❏.tsunade 🅟
┆❏.waifu 🅟
┆❏.animewall 🅟
┆❏.yotsuba 🅟
┆❏.yuki 🅟
┆❏.yulibocil 🅟
┆❏.yumeko 🅟
┆❏.8ball 🅕
┆❏.tickle 🅕
┆❏.gecg 🅕
┆❏.feed 🅕
╰–––––––––––––––༓
`}

global.ownermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Faboe-Owner Menu 』
┆❏.self 🅞
┆❏.public 🅞
┆❏.join 🅞
┆❏.bctext 🅞
┆❏.bcimage 🅞
┆❏.bcvideo 🅞
┆❏.creategc 🅞
┆❏.setexif 🅞
┆❏.shutdown 🅞
┆❏.autostickergc 🅞
┆❏.setppbot 🅞
┆❏.addprem 🅞
┆❏.delprem 🅞
┆❏.addowner 🅞
┆❏.delowner 🅞
┆❏.addvn 🅞
┆❏.delvn 🅞
┆❏.addsticker 🅞
┆❏.delsticker 🅞
┆❏.addimage 🅞
┆❏.delimage 🅞
┆❏.addvideo 🅞
┆❏.delvideo 🅞
┆❏.block add 🅞
┆❏.unblock del 🅞
┆❏.leavegc 🅞
╰–––––––––––––––༓
`}

global.othermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Faboe-Other Menu 』
┆❏.ping 🅕
┆❏.menu 🅕
┆❏.listpem 🅕
┆❏.liststicker 🅕
┆❏.listimage 🅕
┆❏.listvideo 🅕
┆❏.listvn 🅕
┆❏.listbadword 🅕
┆❏.listpc 🅕
┆❏.listgc 🅕
┆❏.owner 🅕
┆❏.rentbot 🅟
┆❏.listrentbot 🅟
┆❏.donate 🅕
┆❏.friend 🅕
┆❏.obfuscate 🅕
┆❏.styletext 🅕
┆❏.fliptext 🅕
┆❏.tts 🅕
┆❏.say 🅕
┆❏.togif 🅕
┆❏.toqr 🅕
┆❏.bass 🅕
┆❏.blown 🅕
┆❏.deep 🅕
┆❏.earrape 🅕
┆❏.fast 🅕
┆❏.fat 🅕
┆❏.nightcore 🅕
┆❏.reverse 🅕
┆❏.robot 🅕
┆❏.slow 🅕
┆❏.smooth 🅕
┆❏.squirrel 🅕
┆❏.tinyurl 🅕
┆❏.tinyurl 🅕
┆❏.tourl 🅕
┆❏.tovn 🅕
┆❏.toaudio 🅕
┆❏.tomp3 🅕
┆❏.tomp4🅕
┆❏.toimg 🅕
┆❏.toonce 🅕
┆❏.sticker 🅕
┆❏.take 🅕
┆❏.emoji 🅕
┆❏.volume 🅕
┆❏.ebinary 🅕
┆❏.dbinary 🅕
┆❏.ssweb 🅕
┆❏.quoted 🅕
┆❏.runtime 🅕
┆❏.sound1 - sound161 🅕
╰–––––––––––––––༓
`}

global.downloadmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Faboe-Download Menu 』
┆❏.tiktokvideo 🅕
┆❏.tiktokaudio 🅕
┆❏.ytsearch 🅕
┆❏.mediafire 🅕
┆❏.play 🅕
┆❏.ytmp3 🅕
┆❏.ytmp4 🅕
┆❏.google 🅕
┆❏.spotify 🅕
┆❏.gitclone 🅕
┆❏.happymod 🅕
╰–––––––––––––––༓
`}

global.groupmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Faboe-Group Menu 』
┆❏.antilink 🅖
┆❏.antiwame 🅖
┆❏.grouplink 🅖
┆❏.ephemeral 🅖
┆❏.delete 🅖
┆❏.setppgroup 🅖
┆❏.setname 🅖
┆❏.setdesc 🅖
┆❏.add 🅖
┆❏.kick 🅖
┆❏.promote 🅖
┆❏.demote 🅖
┆❏.hidetag 🅖
┆❏.tagall 🅖
┆❏.editinfo 🅖
┆❏.opentime 🅖
┆❏.closetime 🅖
┆❏.resetlink 🅖
┆❏.autostickerpc 🅖
┆❏.antilinkgc 🅖
┆❏.antiwame 🅖
┆❏.antilinkall 🅖
┆❏.antilinktiktok 🅖
┆❏.antilinkfb 🅖
┆❏.antilinktwitter 🅖
┆❏.antilinkig 🅖
┆❏.antlinktg 🅖
┆❏.antilinkytvid 🅖
┆❏.antilinkytch 🅖
┆❏.antivirus 🅖
┆❏.antitoxic 🅖
┆❏.nsfw 🅖
┆❏.react 🅖
╰–––––––––––––––༓
`}

global.funmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Faboe-Fun Menu 』
┆❏.define 🅕
┆❏.truth 🅕
┆❏.dare 🅕
┆❏.couple 🅕
┆❏.soulmate 🅕
┆❏.stupidcheck 🅕
┆❏.handsomecheck 🅕
┆❏.uncleancheck 🅕
┆❏.hotcheck 🅕
┆❏.smartcheck 🅕
┆❏.greatcheck 🅕
┆❏.evilcheck 🅕
┆❏.dogcheck 🅕
┆❏.coolcheck 🅕
┆❏.waifucheck 🅕
┆❏.awesomecheck 🅕
┆❏.gaycheck 🅕
┆❏.cutecheck 🅕
┆❏.lesbiancheck 🅕
┆❏.hornycheck 🅕
┆❏.prettycheck 🅕
┆❏.lovelycheck 🅕
┆❏.uglycheck 🅕
┆❏.hot 🅕
┆❏.sexy 🅕
┆❏.kind 🅕
┆❏.idiot 🅕
┆❏.handsome 🅕
┆❏.beautiful 🅕
┆❏.cute 🅕
┆❏.pretty 🅕
┆❏.lesbian 🅕
┆❏.noob 🅕
┆❏.bastard 🅕
┆❏.foolish 🅕
┆❏.nerd 🅕
┆❏.asshole 🅕
┆❏.gay 🅕
┆❏.smart 🅕
┆❏.stubble 🅕
┆❏.doggo 🅕
┆❏.horny 🅕
┆❏.cunt 🅕
┆❏.wibu 🅕
┆❏.noobra 🅕
┆❏.nibba 🅕
┆❏.nibbi 🅕
┆❏.comrade 🅕
┆❏.mumu 🅕
┆❏.rascal 🅕
┆❏.scumbag 🅕 
┆❏.nuts 🅕
┆❏.fagot 🅕
┆❏.scoundrel 🅕
┆❏.ditch 🅕
┆❏.dope 🅕
┆❏.gucci 🅕
┆❏.lit 🅕
┆❏.dumbass 🅕
┆❏.crackhead 🅕
┆❏.mf 🅕
┆❏.motherfucker 🅕
┆❏.sucker 🅕
┆❏.fuckboy 🅕
┆❏.playboy 🅕
┆❏.fuckgirl 🅕
┆❏.playgirl 🅕
┆❏.quotes 🅕
┆❏.can 🅕
┆❏.is 🅕
┆❏.when 🅕
┆❏.where 🅕
┆❏.what 🅕
┆❏.how 🅕
┆❏.rate 🅕
┆❏.cry 🅟
┆❏.kill 🅟
┆❏.hug 🅟
┆❏.pat 🅟
┆❏.lick 🅟 
┆❏.kiss 🅟
┆❏.bite 🅟
┆❏.yeet 🅟
┆❏.bully 🅟
┆❏.bonk 🅟
┆❏.wink 🅟
┆❏.poke 🅟
┆❏.nom 🅟
┆❏.slap 🅟
┆❏.smile 🅟 
┆❏.wave 🅟
┆❏.awoo 🅟
┆❏.blush 🅟
┆❏.smug 🅟
┆❏.glomp 🅟 
┆❏.happy 🅟
┆❏.dance 🅟
┆❏.cringe 🅟
┆❏.cuddle 🅟
┆❏.highfive 🅟 
┆❏.shinobu 🅟
┆❏.handhold 🅟
┆❏.horny 🅕
┆❏.checkme 🅕
┆❏.confess 🅕
┆❏.leave 🅕
╰–––––––––––––––༓
`}

global.stalkermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Faboe-Stalker 』
┆❏.igstalk 🅟
┆❏.ffstalk 🅟
┆❏.mlstalk 🅟
┆❏.npmstalk 🅟
┆❏.ghstalk 🅟
╰–––––––––––––––༓
`}

global.randphotomenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Faboe-Random Photo 』
┆❏.aesthetic 🅟
┆❏.coffee 🅟
┆❏.wikimedia 🅟
┆❏.wallpaper 🅟
┆❏.art 🅟
┆❏.bts 🅟
┆❏.woof 🅕
┆❏.meow 🅕
┆❏.lizard 🅕
┆❏.cosplay 🅟
┆❏.hacker 🅟
┆❏.cyber 🅟
┆❏.gamewallpaper 🅟
┆❏.islamic 🅟
┆❏.jennie 🅟
┆❏.jiso 🅟
┆❏.satanic 🅟
┆❏.justina 🅟
┆❏.cartoon 🅟
┆❏.pentol 🅟
┆❏.cat 🅕
┆❏.kpop 🅕
┆❏.exo 🅟
┆❏.lisa 🅟
┆❏.space 🅟
┆❏.car 🅟
┆❏.technology 🅟
┆❏.bike 🅟
┆❏.shortquote 🅟
┆❏.antiwork 🅕
┆❏.hacking 🅕
┆❏.boneka 🅕
┆❏.rose 🅕
┆❏.ryujin 🅕
┆❏.ulzzangboy 🅕
┆❏.ulzzanggirl 🅕
┆❏.wallml 🅕
┆❏.wallphone 🅕
┆❏.mountain 🅟
┆❏.goose 🅕
┆❏.profilepic 🅕
┆❏.couplepic 🅕
┆❏.programming 🅟
┆❏.pubg 🅕
┆❏.blackpink 🅕
┆❏.randomboy 🅕  
┆❏.randomgirl 🅕
┆❏.hijab 🅕  
┆❏.chinese 🅕
┆❏.indo 🅕
┆❏.japanese 🅕
┆❏.korean 🅕
┆❏.malay 🅕
┆❏.thai 🅕
┆❏.vietnamese 🅕
╰–––––––––––––––༓
`}

global.randvideomenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Faboe-Random Video 』
┆❏.tiktokgirl 🅟
┆❏.tiktoknukthy 🅟
┆❏.tiktokkayes 🅟
┆❏.tiktokpanrika 🅟
┆❏.tiktoknotnot 🅟
┆❏.tiktokghea 🅟
┆❏.tiktoksantuy 🅟
┆❏.tiktokbocil 🅟
╰–––––––––––––––༓
`}

global.textpromenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Faboe-Textpro Maker 』
┆❏.candy 🅟 
┆❏.christmas 🅟 
┆❏.3dchristmas 🅟 
┆❏.sparklechristmas 🅟
┆❏.deepsea 🅟 
┆❏.scifi 🅟 
┆❏.rainbow 🅟 
┆❏.waterpipe 🅟 
┆❏.spooky 🅟 
┆❏.pencil 🅟 
┆❏.circuit 🅟 
┆❏.discovery 🅟 
┆❏.metalic 🅟 
┆❏.fiction 🅟 
┆❏.demon 🅟 
┆❏.transformer 🅟 
┆❏.berry 🅟 
┆❏.thunder 🅟 
┆❏.magma 🅟 
┆❏.3dstone 🅟 
┆❏.neonlight 🅟 
┆❏.glitch 🅟 
┆❏.harrypotter 🅟 
┆❏.brokenglass 🅟 
┆❏.papercut 🅟 
┆❏.watercolor 🅟 
┆❏.multicolor 🅟 
┆❏.neondevil 🅟 
┆❏.underwater 🅟 
┆❏.graffitibike 🅟
┆❏.snow 🅟 
┆❏.cloud 🅟 
┆❏.honey 🅟 
┆❏.ice 🅟 
┆❏.fruitjuice 🅟 
┆❏.biscuit 🅟 
┆❏.wood 🅟 
┆❏.chocolate 🅟 
┆❏.strawberry 🅟 
┆❏.matrix 🅟 
┆❏.blood 🅟 
┆❏.dropwater 🅟 
┆❏.toxic 🅟 
┆❏.lava 🅟 
┆❏.rock 🅟 
┆❏.bloodglas 🅟 
┆❏.hallowen 🅟 
┆❏.darkgold 🅟 
┆❏.joker 🅟 
┆❏.wicker 🅟
┆❏.firework 🅟 
┆❏.skeleton 🅟 
┆❏.blackpink 🅟 
┆❏.sand 🅟 
┆❏.glue 🅟 
┆❏.1917 🅟 
┆❏.leaves 🅟
╰–––––––––––––––༓
`}

global.photooxymenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Faboe-PhotoOxy Maker 』
┆❏.shadow 🅟 
┆❏.write 🅟 
┆❏.romantic 🅟 
┆❏.burnpaper 🅟
┆❏.smoke 🅟 
┆❏.narutobanner 🅟 
┆❏.love 🅟 
┆❏.undergrass 🅟
┆❏.doublelove 🅟 
┆❏.coffecup 🅟
┆❏.underwaterocean 🅟
┆❏.smokyneon 🅟
┆❏.starstext 🅟
┆❏.rainboweffect 🅟
┆❏.balloontext 🅟
┆❏.metalliceffect 🅟
┆❏.embroiderytext 🅟
┆❏.flamingtext 🅟
┆❏.stonetext 🅟
┆❏.writeart 🅟
┆❏.summertext 🅟
┆❏.wolfmetaltext 🅟
┆❏.nature3dtext 🅟
┆❏.rosestext 🅟
┆❏.naturetypography 🅟
┆❏.quotesunder 🅟
┆❏.shinetext 🅟
╰–––––––––––––––༓
`}

global.ephoto360menu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Faboe-Ephoto360 Maker 』
┆❏.glitchtext 🅟
┆❏.writetext 🅟
┆❏.advancedglow 🅟
┆❏.typographytext 🅟
┆❏.pixelglitch 🅟
┆❏.neonglitch 🅟
┆❏.flagtext 🅟
┆❏.flag3dtext 🅟
┆❏.deletingtext 🅟
┆❏.blackpinkstyle 🅟
┆❏.glowingtext 🅟
┆❏.underwatertext 🅟
┆❏.logomaker 🅟
┆❏.cartoonstyle 🅟
┆❏.papercutstyle 🅟
┆❏.watercolortext 🅟
┆❏.effectclouds 🅟
┆❏.blackpinklogo 🅟
┆❏.gradienttext 🅟
┆❏.summerbeach 🅟
┆❏.luxurygold 🅟
┆❏.multicoloredneon 🅟
┆❏.sandsummer 🅟
┆❏.galaxywallpaper 🅟
┆❏.1917style 🅟
┆❏.makingneon 🅟
┆❏.royaltext 🅟
┆❏.freecreate 🅟
┆❏.galaxystyle 🅟
┆❏.lighteffects 🅟
╰–––––––––––––––༓
`}

global.nsfwmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Faboe-Anime NSFW 』
┆❏.hentai 🅕
┆❏.gifhentai 🅕
┆❏.gifblowjob 🅕
┆❏.hentaivid 🅕
┆❏.hneko 🅕
┆❏.nwaifu 🅕
┆❏.animespank 🅕
┆❏.trap 🅕
┆❏.gasm 🅕
┆❏.ahegao 🅕
┆❏.ass 🅕
┆❏.bdsm 🅕
┆❏.blowjob 🅕
┆❏.cuckold 🅕
┆❏.cum 🅕
┆❏.milf 🅕
┆❏.eba 🅕
┆❏.ero 🅕
┆❏.femdom 🅕
┆❏.foot 🅕
┆❏.gangbang 🅕
┆❏.glasses 🅕
┆❏.jahy 🅕
┆❏.masturbation 🅕
┆❏.manga 🅕
┆❏.neko-hentai 🅕
┆❏.neko-hentai2 🅕
┆❏.nsfwloli 🅕
┆❏.orgy 🅕
┆❏.panties 🅕 
┆❏.pussy 🅕
┆❏.tentacles 🅕
┆❏.thights 🅕
┆❏.yuri 🅕
┆❏.zettai 🅕
╰–––––––––––––––༓
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)

})
