// numeros para a escolha
let array = []
let reset = ()=>{
   for(c=0;c<100;c++)
   {
      array[c]=c+1
   }
   chutar()
   tentativas = 1

}
let tentativas =1
let chute
// erros
let erroValorExcedido = `Seu nùmero so pode ter o valor entre 1 e 100. Por favor escolha um número dentro do escopo`
// logica de chute
let chutar = ()=>{
  chute =  array[Math.floor((array.length - 1) / 2)]
  document.querySelector('#res').innerHTML = `<p>Seu numero é ${chute}?</p>`
  if(tentativas!=7){
  document.querySelector('#res-modal').innerHTML = `<h1>${chute}!!!</h1> <p>Acertei em ${tentativas} tentativas.</p>`}else{
  document.querySelector('#res-modal').innerHTML = `<h1>${chute}!!!</h1> <p>Acertei em ${tentativas} tentativas. O Número difícil esse em!!</p>`
  }

}
// logica de acerto 
let modal = ()=>{
   let modal_element = document.querySelector('#modal')
   if(modal_element.classList.contains('ativo')){
      modal_element.classList.remove('ativo')
   }else{
      modal_element.classList.add('ativo')
      reset()

   }
   chutar()
}
let modalOpen = document.querySelector('#acerto').addEventListener('click', modal)
let modalClose = document.querySelector('#close').addEventListener('click', modal)
//logica de maior
let maior = document.querySelector('#maior').addEventListener('click', ()=>{
   if(array.length == 1){
      window.alert(erroValorExcedido)
   }else{
   for(let value = array.indexOf(chute +1); value != 0 ; value--){
      array.shift()
   }
   akinator(tentativas)
   }
})
//logica de menor
let menor = document.querySelector('#menor').addEventListener('click', ()=>{
   if(array.length == 1){
      window.alert(erroValorExcedido)
   }else{
   for(let value = array.indexOf(chute+1); value != 0 ; value--){
      array.pop()
   }
   akinator(tentativas)
   }
})
//akinator frames
let akinator = (valor)=>{
   switch(valor){
      case 1: break
      case 2: // faça um loop for percorrendo todos as div tentativa e colorir apenas as igual ou menor a 2 repetir isso para os outros casos
   }
   chutar()
   tentativas++
}

reset()
