const yargs = require("yargs");
const kisi=require("./kisi");
yargs.version('1.5.3');


//kişi ekle komutu
yargs.command({
command : 'ekle',
describe :'yeni kişi eklemeye yarar',
builder:{
    isim:{
        describe:'eklenecek kişi adı',
        demandOption :true,
        type :'string'
    },
    tel:{
        describe:'eklenecek kişi telefonu',
        demandOption :true,
        type :'string'
    }
},
handler(argv){
//console.log("isim:"+argv.isim+ " tel no :"+argv.tel);
kisi.kisiekle(argv.isim,argv.tel);
}
})


yargs.command({
    command: 'sil',
    describe :'kişi silmeye yarar',
    builder:{
        isim:{
            describe:'silincek kişi adı',
            demandOption :true,
            type :'string'
        },
      
    },
    handler(argv){
       // console.log("silinecek kişi adı :"+argv.isim);
        kisi.kisisil(argv.isim);
    }
})

yargs.command({
    command: 'listele',
    describe :'tüm rehberi listeler',
    handler(argv){
        //console.log("tüm rehber listelenir");
        kisi.kisilistele();
    }
})

yargs.command({
    command: 'göster',
    describe :'kişiyi gösterir',
    builder:{
        isim:{
            describe:'gosterilecek kişi adı',
            demandOption :true,
            type :'string'
        },
    },
    handler(argv){
       // console.log("gösterilen kişinin adı :"+argv.isim);
       kisi.kisigoster(argv.isim);
    }
})



yargs.parse();

//console.log(yargs.argv);