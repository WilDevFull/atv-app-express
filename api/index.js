const express = require('express');
const app = express();

const citacoes = [
    { autor: "Albert Einstein", citacao: "A imaginação é mais importante que o conhecimento." },
    { autor: "Isaac Newton", citacao: "Se vi mais longe, foi por estar sobre ombros de gigantes." },
    { autor: "Marie Curie", citacao: "Nada na vida deve ser temido, apenas compreendido." },
    { autor: "Charles Darwin", citacao: "Não é o mais forte que sobrevive, mas o que melhor se adapta." },
    { autor: "Stephen Hawking", citacao: "A inteligência é a capacidade de se adaptar à mudança." },
    { autor: "Galileu Galilei", citacao: "A matemática é o alfabeto com que Deus escreveu o mundo." },
    { autor: "Nikola Tesla", citacao: "O presente é deles; o futuro, pelo qual eu realmente trabalhei, é meu." },
    { autor: "Richard Feynman", citacao: "O que não posso criar, não entendo." },
    { autor: "Carl Sagan", citacao: "Diante da imensidão do cosmos, o amor é o que torna a vida suportável." },
    { autor: "Alan Turing", citacao: "Às vezes, são as pessoas de quem ninguém imagina nada que fazem as coisas que ninguém pode imaginar." },
    { autor: "Ada Lovelace", citacao: "A ciência da computação não trata apenas de máquinas, mas de como pensamos." },
    { autor: "Louis Pasteur", citacao: "A sorte favorece a mente preparada." },
    { autor: "Dmitri Mendeleev", citacao: "Não há nada no mundo que não possa ser explicado pela ciência." },
    { autor: "Niels Bohr", citacao: "Um especialista é alguém que cometeu todos os erros possíveis em um campo muito restrito." },
    { autor: "Erwin Schrödinger", citacao: "A consciência não pode ser explicada em termos físicos." },
    { autor: "Werner Heisenberg", citacao: "O que observamos não é a natureza em si, mas a natureza exposta ao nosso método de questionamento." },
    { autor: "James Clerk Maxwell", citacao: "A energia é a base de tudo o que acontece no universo." },
    { autor: "Michael Faraday", citacao: "Nada é bom demais para ser verdade, se estiver de acordo com as leis da natureza." },
    { autor: "Edwin Hubble", citacao: "O universo é vasto e estamos apenas começando a explorá-lo." },
    { autor: "Jane Goodall", citacao: "O que você faz faz diferença, e você tem que decidir que tipo de diferença quer fazer." },
    { autor: "Neil deGrasse Tyson", citacao: "O universo não tem obrigação de fazer sentido para você." },
    { autor: "Richard Dawkins", citacao: "A ciência é a poesia da realidade." },
    { autor: "Rosalind Franklin", citacao: "A ciência e a vida cotidiana não podem e não devem ser separadas." },
    { autor: "James Watson", citacao: "A ciência progride através de erros e da correção desses erros." },
    { autor: "Francis Crick", citacao: "A biologia é o estudo de coisas complexas que parecem ter sido projetadas com um propósito." },
    { autor: "Robert Oppenheimer", citacao: "Agora eu me tornei a Morte, a destruidora de mundos." },
    { autor: "Enrico Fermi", citacao: "Nunca subestime a capacidade de um pequeno grupo de pessoas comprometidas em mudar o mundo." },
    { autor: "Max Planck", citacao: "A verdade nunca triunfa, seus oponentes apenas morrem." },
    { autor: "Johannes Kepler", citacao: "A geometria é a imagem de Deus refletida no mundo." },
    { autor: "Gregor Mendel", citacao: "Minha hora ainda vai chegar." }
];

// Endpoint 1: Número aleatório entre 1 e 100
app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 100) + 1;
    res.send(num.toString());
});

// Endpoint 2: Dado (1 a 6)
app.get('/dado', (req, res) => {
    const dado = Math.floor(Math.random() * 6) + 1;
    res.send(dado.toString());
});

// Endpoint 3: Citações aleatórias
app.get('/citacoes', (req, res) => {
    const index = Math.floor(Math.random() * citacoes.length);
    res.send(citacoes[index]);
});

// Rota padrão para teste
app.get('/', (req, res) => res.send("Servidor Express Ativo!"));

module.exports = app;