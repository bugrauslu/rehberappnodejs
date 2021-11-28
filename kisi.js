const fs= require('fs');
const chalk=require('chalk');



const ekle=function(ad,telno){
//console.log("eklenecek kisi :"+ad+" tel no :"+telno);

const kisilerdizisi=dosyadankisilerioku();


 const aynidasahipkisilerdizisi=kisilerdizisi.filter(function(kisi){
    return kisi.isim===ad;
});

if(aynidasahipkisilerdizisi.length===0){

    kisilerdizisi.push({
        isim:ad,
        tel:telno
    });
    dosyayakisileriyaz(kisilerdizisi);
}
else{
   
    console.log(chalk.red.inverse(ad+" isimli kayıt zaten bulunmakta"));
}
}


const dosyayakisileriyaz=function(kisilerdizisi){
   const jsondata= JSON.stringify(kisilerdizisi);
    fs.writeFileSync('kisiler.json',jsondata);
}

const dosyadankisilerioku=function(){

    try{
        const dataBuffer= fs.readFileSync('kisiler.json');
        const dataJSON= dataBuffer.toString();
        return JSON.parse(dataJSON);
     }
     catch(e){
         return[];
     }
    }
  


const sil=function(isim){
console.log("silinecek kisi"+isim);
const tumkkisiler=dosyadankisilerioku();
const dosyayatekraryazilcakkisiler=tumkkisiler.filter(function(kisi){
    return kisi.isim !==isim;
});

if(tumkkisiler.length>dosyayatekraryazilcakkisiler.length){
    console.log(chalk.green.inverse("kişi bulundu ve silindi"));
    dosyayakisileriyaz(dosyayatekraryazilcakkisiler);
}else{
    console.log(chalk.red.inverse(isim+ "adlı kişi listede bulunamadı "));
   
}

}

const goster=function(isim){
    console.log(chalk.yellow.inverse("gosterilecek kisi"+isim));
    const kisilerdizisii=dosyadankisilerioku();
   const bulunankisi= kisilerdizisii.find(function(kisi){
        return kisi.isim===isim;
    });
    if(bulunankisi){
        console.log(chalk.green.inverse("aradığınız kişinin numarası "+bulunankisi.tel));
    }else{
        console.log(chalk.red.inverse("böyle bir kişi yok "));
    }

    }

    const listele=function(){
        console.log("tüm rehber gösterilecek");
        const kisilerdizisi=dosyadankisilerioku();
        kisilerdizisi.forEach(function(kisi){
            console.log("adı:"+kisi.isim+" telefon numarası: "+kisi.tel);
        });
        }

module.exports={
    kisiekle:ekle,
    kisisil:sil,
    kisigoster:goster,
    kisilistele:listele
}