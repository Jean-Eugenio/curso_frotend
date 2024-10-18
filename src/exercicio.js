const Matematica = [
    {nome: "Daniel", nota: 7.5},
    {nome: "Pedro", nota: 8},
    {nome: "Rafael", nota: 5},
    {nome: "Matheus", nota: 10},
    {nome: "Maria", nota: 4}
];
    
    const aprovados = Matematica.filter(aluno => aluno.nota >= 6);
    
    console.log(aprovados);