var faturamentoMensal = [{
        ESTADO: "SP",
        VALOR: "67.836.43"
    },
    {
        ESTADO: "RJ",
        VALOR: "36.678,66"
    },
    {
        ESTADO: "MG",
        VALOR: "29.229,88"
    },
    {
        ESTADO: "ES",
        VALOR: "27.165,48"
    },
    {
        ESTADO: "OUTROS",
        VALOR: "19.849,53"

    }
]
var total = 0

function percentual() {
    for (let i = 0; i < faturamentoMensal.length; i++) {
        total += parseFloat(faturamentoMensal[i].VALOR)
    }
}
percentual()
var porcentagemSP = parseFloat(faturamentoMensal[0].VALOR) * 100 / total.toFixed(3)
var porcentagemRJ = parseFloat(faturamentoMensal[1].VALOR) * 100 / total.toFixed(3)
var porcentagemMG = parseFloat(faturamentoMensal[2].VALOR) * 100 / total.toFixed(3)
var porcentagemES = parseFloat(faturamentoMensal[3].VALOR) * 100 / total.toFixed(3)
var porcentagemOutros = parseFloat(faturamentoMensal[4].VALOR) * 100 / total.toFixed(3)

console.log('SP teve: ' + porcentagemSP.toFixed(2) + '% de representação do valor total mensal da distribuidora.')
console.log('RJ teve: ' + porcentagemRJ.toFixed(2) + '% de representação do valor total mensal da distribuidora.')
console.log('MG teve: ' + porcentagemMG.toFixed(2) + '% de representação do valor total mensal da distribuidora.')
console.log('ES teve: ' + porcentagemES.toFixed(2) + '% de representação do valor total mensal da distribuidora.')
console.log('Demais estados tiveram: ' + porcentagemOutros.toFixed(2) + '% de representação do valor total mensal da distribuidora.')