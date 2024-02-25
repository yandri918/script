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
const aku = {
    nama : 'andri',
    hobi : 'membaca',
    kenalan : function(){
    return `aku${this.nama}. Hobi saya ${this.hobi}.`}
}