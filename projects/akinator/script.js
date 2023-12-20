let array = []
let chute
let tentativas =1
let erroValorExcedido = `Seu nùmero so pode ter o valor entre 1 e 100. Por favor escolha um número dentro do escopo`


let reset = ()=>{
   for(c=0;c<100;c++)
   {
      array[c]=c+1
   }
   chutar() 
   tentativas = 1
   for(let div = 1; div !=7; div++){
      let divs = document.querySelector(`#tent${div}`) 
      divs.style.backgroundColor = ''
   }
    let foto = document.querySelector('#akinatorFoto')
    foto.src = 'assets/frame1.png'
}

let chutar = ()=>{
  chute =  array[Math.floor((array.length - 1) / 2)]
  document.querySelector('#res').innerHTML = `<p>Seu numero é ${chute}?</p>`
  if(tentativas!=7){
     document.querySelector('#res-modal').innerHTML = `<h1>${chute}!!!</h1> <p>Acertei em ${tentativas} tentativas.</p>`}else{
  document.querySelector('#res-modal').innerHTML = `<h1>${chute}!!!</h1> <p>Acertei em ${tentativas} tentativas. O Número difícil esse em!!</p>`
}

}
 
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


let akinator = (valor)=>{
   let div = document.querySelector(`#tent${valor}`)
   let akinatorImg = document.querySelector('#akinatorFoto')
   div.style.backgroundColor = 'green'
   chutar()
   tentativas++
   akinatorImg.src = `assets/frame${valor}.png`
}

reset()
