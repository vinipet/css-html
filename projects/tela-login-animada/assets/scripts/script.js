const Btn_senha = document.getElementById('btnSenha')
const Btn_senha1 = document.getElementById('btnSenha1')
const senha_input = document.getElementById('senha')
const senha_input1 = document.getElementById('senha1')
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
function senha_atv1() {
   if(Btn_senha1.classList.contains('visivel'))
   {
      Btn_senha1.value = "visibility_off"
      Btn_senha1.classList.remove('visivel')
      senha_input1.type = "password"
   } else 
   {
      senha_input1.type = "text"
      Btn_senha1.classList.add('visivel')
      Btn_senha1.value = "visibility"
   }
}

function troca(){
   if(logar_btn.classList.contains('ativo')){
      logar_btn.textContent = "PENIS"
      logar_btn.classList.remove('ativo')
      principalDiv.style.flexDirection = "row-reverse"

   }
}