
//esto agrega a la pantalla el valor del boton que seleccionemos
function agregar(valor){
    document.getElementById('pantalla').value += valor

}
function borrar(){
    document.getElementById('pantalla').value = ''
}
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla)// eval (toma un estring y lo calcula matematicamente)
    document.getElementById('pantalla').value = resultado
}