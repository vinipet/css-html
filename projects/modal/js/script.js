const openModalButtom = document.querySelector('#open-modal')
const closeModalButtom = document.querySelector('#close-modal')
const modal = document.querySelector('#modal')
const fade = document.querySelector('#fade')

const toggleModal = () =>{
   modal.classList.toggle('hide')
   fade.classList.toggle('hide')
}

[openModalButtom, closeModalButtom, fade].forEach((el)=>{
   el.addEventListener("click", ()=> toggleModal())
})
