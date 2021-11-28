function calcular() {
var v1 = window.document.getElementById('v1')
var res = window.document.getElementById('res')
var v = Number(v1.value)
res.innerHTML = `Resultado: O Individuo está correndo a ${v} km/h. <br>`

if(v >= 0 && v < 60) {
    res.innerHTML += `Situação: Você está correndo direitinho, continue dirigindo com cuidado e não terá problemas com a lei.`
}else if (v >= 60 && v < 90) {
    res.innerHTML += `Situação: Você está correndo muito, será multado!`
}else if (v >= 90 && v < 1000) {
    res.innerHTML += `Situação: Você está correndo muito rápido, está querendo se matar e se sobreviver será multado!`
}







}
