const Btn_senha = document.getElementById('btnSenha')
const senha_input = document.getElementById('senha')
const logar_btn = document.getElementById('btnLogar')
const left = document.getElementById('left')
const right = document.getElementById('right')
const principalDiv = document.getElementById('principal')

function senha_atv() {
   if(Btn_senha.classList.contains('visivel'))
   {
      Btn_senha.value = "visibility_off"
      Btn_senha.classList.remove('visivel')
      senha_input.type = "password"
   } else 
   {
      senha_input.type = "text"
      Btn_senha.classList.add('visivel')
      Btn_senha.value = "visibility"
   }
}

function troca(){
   if(logar_btn.classList.contains('ativo')){
      logar_btn.textContent = "PENIS"
      logar_btn.classList.remove('ativo')
      principalDiv.style.flexDirection = "row-reverse"

   }
}