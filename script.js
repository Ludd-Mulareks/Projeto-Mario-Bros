
const formulario = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-formulario")

function mostrarFormulario() {
    formulario.style.left ="50%"
    formulario.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"


}

function esconderFormulario(){
    formulario.style.left ="-222%"
    formulario.style.transform = "translatex(0)"
    mascara.style.visibility = "hidden"
}