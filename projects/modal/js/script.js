let modal = document.getElementById('modal-body')

const openModalButtom = document.querySelector('#open-modal').addEventListener('click', ()=>{
   modal.showModal()
})
const closeModalButtom = document.querySelector('#close-modal').addEventListener('click', ()=>{
   modal.close()
})
