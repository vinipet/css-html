// numeros para a escolha
let array = []
for(c=0;c<100;c++)
{
   array[c]=c+1
}
let chute
// erros
let erroValorExcedido = `Seu nùmero so pode ter o valor entre 1 e 100. Por favor escolha um número dentro do escopo`
// logica de chute
let chutar = ()=>{
  chute =  array[Math.floor((array.length - 1) / 2)]
  document.querySelector('#res').innerHTML = `<p>Seu numero é ${chute}?</p>`
  document.querySelector('#res-modal').innerHTML = `${chute}!!!`
}
// logica de acerto 
let modal = ()=>{
   let pipi = document.querySelector('#modal')
   pipi.classList.toggle('ativo')
   chutar()
}
let modalOpen = document.querySelector('#acerto').addEventListener('click', modal)
let modalClose = document.querySelector('#close').addEventListener('click', modal)
//logica de maior
let maior = document.querySelector('#maior').addEventListener('click', ()=>{
   if(chute==1||chute==100){
      window.alert(erroValorExcedido)
   }else{
   for(let value = array.indexOf(chute +1); value != 0 ; value--){
      array.shift()
   }
   chutar()
   }
})
//logica de menor
let menor = document.querySelector('#menor').addEventListener('click', ()=>{
   if(chute==1||chute==100){
      window.alert(erroValorExcedido)
   }else{
   for(let value = array.indexOf(chute+1); value != 0 ; value--){
      array.pop()
   }
   chutar()
   }
})
chutar()