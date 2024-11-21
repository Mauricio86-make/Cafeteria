/* temos que usar a logica de programação


 [x] Saber quando o usuario clicou no botão
 [x] Mudar o pocisionamento do modal
 [] Fazer a mascara ficar visível
 [] Quando clicar no modal ele fechar



*/

const modal = document.querySelector(".modal")
const mascara = document.querySelector(".mascara-modal")

function mostrarModal() {
    modal.style.left = '50%'
    mascara.style.visibility = 'visible'
}

function esconderModal() {
    modal.style.left = '-60%'
    mascara.style.visibility = 'hidden'
}