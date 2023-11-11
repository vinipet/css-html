
var close = document.getElementById('close')

function abrir()
{
   var respo = document.getElementById('responsivo')
   respo.style.opacity = 100
   respo.style.pointerEvents = "all"
}

function fechar()
{
   var respo = document.getElementById('responsivo')
   respo.style.opacity = 0
   respo.style.pointerEvents = "none"
}