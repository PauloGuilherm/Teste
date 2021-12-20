var termo = 10
var penultimo = 0
var ultimo = 1
var numero

if (termo <= 2) {
    console.log('Termo inválido, tente inserir um valor maior que 2')
}
for (var contagem = 3; contagem <= termo; contagem++) {
    numero = ultimo + penultimo
    penultimo = ultimo
    ultimo = numero
}
console.log(numero)