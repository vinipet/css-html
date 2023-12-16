
// numeros para a escolha
let array = []
for(c=1;c<101;c++)
{
   array[c]=c
}


// componentes usados

let maior = document.querySelector('#maior')
let menor = document.querySelector('#menor')
let acerto = document.querySelector('#acerto')
let res = document.querySelector('#res')
let resModal = document.querySelector('#res-modal')
let chute




// logica de chute

let chutar = ()=>{
  chute=tentativa = array[Math.floor((array.length - 1) / 2)]
  res.innerHTML = `<p>Seu numero é ${chute}?</p>`
  resModal.innerHTML = `${chute}!!!`
}
 

// logica de acerto
let modal = ()=>{
   let pipi = document.querySelector('#modal')
   pipi.classList.toggle('ativo')

   chutar()
}



//logica de maior
maior.addEventListener('click', mais)
function mais()
{
   for(let value = array.indexOf(chute); value != 0 ; value--){
      array.shift()
   }
   chutar()
}


//logica de menor
menor.addEventListener('click', menos)
function menos()
{
   for(let value = array.indexOf(chute); value != 0 ; value--){
      array.pop()
   }
   chutar()
}


chutar()