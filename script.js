if (15 < 2) {
    console.log("salom");
}else{
    console.log("Hayr");
}

// ? Ternar

(15 > 8) ? console.log('Salom') : console.log('Hayr');

// ? Switch case

// let year = 2024
// switch (year) {
//     case 2024:
//         console.log('Joriy yil');
//         break;

//     case 1991:
//         console.log('Mustaqillik');
//         break;

//     case 1992:
//         console.log('Konstitutsiya');
//         break;

//     default:
//         console.log("Boshqa yil");
//         break;
// }

// alert('Salom dunyo')
// let h = confirm('Assalomu alaykum')
// let s = prompt('Ismingiz')
// console.log(h);

// ? ============================== Vazifa ==============================

let masofa = Number(prompt('Qancha masofa o\'tildi'))

if (masofa <= 55) {
    console.log('Siz Toshkentdasiz');
} else if (masofa <= 175 && masofa > 55){
    console.log('Siz Sirdaryodasiz');
} else if (masofa <= 325 && masofa > 175){
    console.log('Siz Jizzaxdasiz');
} else if (masofa > 325){
    console.log('Siz Samarqanddasiz');
}else{
    console.log('Siz allaqachon uydasiz');
}