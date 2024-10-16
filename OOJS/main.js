function Funcionario(nome, idade) {
    this.nome = `Nome: ${nome}`
    this.idade = `Idade: ${idade} anos`
}


function FrontEnd(nome, idade, salario, localDeTrabalho) {
    Funcionario.call(this, nome, idade)

    this.salario = `O salário do funcionário é de: R$ ${salario}`
    this.localDeTrabalho = `Este funcionário trabalha em ${localDeTrabalho}`
    this.cargo = "O cargo da pessoa é: Front-End"
}

function BackEnd(nome, idade, salario, localDeTrabalho) {
    Funcionario.call(this, nome, idade)

    this.salario = `O salário do funcionário é de: R$ ${salario}`
    this.localDeTrabalho = `Este funcionário trabalha em ${localDeTrabalho}`
    this.cargo = "O cargo da pessoa é: Back-end"
}

const Maria = new Funcionario("Maria", 41)
const Joao = new FrontEnd("João", 26, "7.500", "Regime de home-office")
const Gabriel = new BackEnd("Gabriel", 29, "5.500", "Regime presencial")

console.log(Maria)
console.log(Joao)
console.log(Gabriel)