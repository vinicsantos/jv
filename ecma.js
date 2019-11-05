
var vet = [50, 60, 80, 100, 20]
var novo = []
/* for (var i = 0; vet.length; i++) {
    var valor = vet[i] + (vet[i] / 10);
    novo.push(valor);
} */
novo = vet.map(function(valor){
    return valor + valor*10/100;
})
var outroVet = []

var outroVet2 = []

outroVet = vet.map(function(valor){
    return valor / 2
})

outroVet2 = vet.map(function(valor, num){
    return valor * num
})
var valor = 0
for (var i = 0; i < vet.length; i++){
    valor = valor + vet[i]
}

var valorRed = vet.reduce(function(total, valor){
    return total + (valor/2)
},0)

console.log(vet)
console.log(novo)
console.log(outroVet)
console.log(outroVet2)
console.log(valor)
console.log(valorRed)