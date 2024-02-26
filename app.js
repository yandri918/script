//let lemparDadu =console.log(lemparDadu) ;

 
function lemparDadu(){
    console.log (Math.floor(Math.random() *6) + 1 )
}
function nyanyi (){
    console.log ('cekk');
    console.log(' do remi')
}
nyanyi()
nyanyi()
nyanyi()
nyanyi()
nyanyi()
function selamatPagi (name){
    console.log (`hi, ${name}.Selamat pagi!`)
}
selamatPagi('andri');
function jumlahkan (a,b ){
   // const total = 2*a + 3*b 
  //  return (total)
//}
//jumlahkan (1,2)
if (typeof a !== "number" || typeof b !== "number"){
    return false ;
}
 return 2*a + 3*b ;
}
//let programming = 'php'
//function typeSafe(){
//let programming = 'python';
//console.log(programming);
//}
//typeSafe()
//console.log(programming);
//let tinggi = 8
//if (tinggi > 5){
  //  let lebar = 10;
 //   console.log(lebar)
//}
//console.log(tinggi);()
//function lamarkerja(){
  //  const jabatan = 'programmer'

 //   function orangDalam(){
 //   let kenalan =`orang dalam bisa memasukan ${jabatan}`;
 //   console.log(kenalan)
 //   }
  //  orangDalam();
//}
//function perpangkatan (nilai ){
  //  return nilai * nilai ;
//}
//let hasil = perpangkatan(5);
//console.log(perpangkatan)

//function duaKali (func){
  //  func()
    //func()
 //function lemparDadu(){
   // const nilai = Math.floor(Math.random()*6)+ 1;
    //console.log(nilai)
//}
//duaKali(lemparDadu())
//function myFun(){
  //  console.log ('hello');
    //return 'hei';
//}
//const aku = {
 //   nama : 'andri',
 //   hobi : 'membaca',
   // kenalan : function(){
   // return `aku${this.nama}. Hobi saya ${this.hobi}.`}
//}
//const angka = [1,2.3,4,5,6,7,8,9];

const anime =[
{ title : ' attack on titan',
rating : 90},
{ title : 'coban',
rating : 89},
{title : 'bleach',
rating : 82},
{title : 'hunter',
rating : 62}
]
anime.forEach(function(anime){
  console.log(`${anime.title}- ${anime.rating}/100`)
}
)


const angka = [1,2,3,4,5,6,7,8,9];
const angkaDouble = angka.map(function(num)
{return num * 3});

const animeList =anime.map(function(anime)
{return anime.title.toLowerCase()})
function pangkat (x){
  return x * x
}
const hasil = function(a){
  return a * a;
}
const random = () => (
  Math.floor(Math.random()*100)
)
const add = (a,b) =>a*b
console.log('haloo');
setTimeout(()=>{
  console.log('masih disana gak?');
},5000)
console.log('saya tunggu ya')
const angkaGanjil = angka.filter(n => {
  return n%2 ===1 ;
})
const angkaBaru = angka.filter(n =>{
  return n > 5 ;
} )
const angkaGenap = angka.filter (n =>{
  return n%2 ===2;
})
const examScore =[ 85,76,86,90,92,99]
const isGraduated = examScore.every((score)=> score >= 70);
const subTotal = [100,300,400,500,600]
const total = subTotal.reduce((currentTotal, singleTotal) =>{
  return currentTotal+singleTotal
})
let totals = 0;
for (let score of examScore){
  totals += score 
}
function lemparDadu(sisi =6){
  return Math.floor(Math.random()* sisi)+1;
}
const angka1 = [1,2,3,4,5,6,7,8,9]
Math.max(angka1)
Math.max(...angka1)
const angka2 = [1,2,3,4,5,]
const nama2 = ['alex','badu','cindy','eko','albert']
const campuran = [...angka2,...nama2,...angka2];
const user2 = {
  name : 'andri',
  email : 'yandri@gmail.com'
  role: 'admin'
}
const userBaru = {...user2,id:234,pasword:'kata sandi'}
const peserta1 = ['Batman ', 'superman','superboy']
const [satu,dua,tiga] = peserta1

