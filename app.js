let name = prompt("Qual o seu nome?");
alert("Bem Vind@ " + name);

let enterTheGame = prompt("Deseja jogar o Quiz da Laboratória? (Digite o número correspondente a sua resposta) \n 1.Sim \n 2.Não");
let firstQuestion = prompt("Qual a primeira mulher programadora do mundo? (Digite o número correspondente a sua resposta) \n 1.Maria Joaquina \n 2.Elba Ramalho \n 3.Ada Lovelace");
let secondQuestion = prompt("QUal o nome da fundadora da Laboratória? (Digite o número correspondente a sua resposta) \n 1.Mariana Costa Checa \n 2.Silvio Santos \n 3.Pepita ");
let thirdQuestion = prompt("Qual o nome do movimento que permitiu as mulheres conquistarem o direito ao voto? (Digite o número correspondente a sua resposta) \n 1.Movimento Abolicionista \n 2.Movimento Carnavalesco \n 3.Movimento Sufragista");
let firstQuestionAnswer = "";
let secondQuestionAnswer = "";
let thirdQuestionAnswer = "";
let nameWriting = document.getElementById("saudacao");
nameWriting.innerHTML = "Olá, " + name + "!";

if (enterTheGame === "2") {
    alert("Que pena, perdeu um jogo massa! =(");
}
else if (enterTheGame === "1") {
    firstQuestion;
    secondQuestion;
    thirdQuestion;
};

if (firstQuestion === "3") {
    firstQuestionAnswer = "Resposta Correta 1"
}
else {
    firstQuestionAnswer = "Resposta Incorreta 1"
};

if (secondQuestion === "1") {
    secondQuestionAnswer = "Resposta Correta 2"
}
else {
    secondQuestionAnswer = "Resposta Incorreta 2"
};

if (thirdQuestion === "3") {
    thirdQuestionAnswer = "Resposta Correta 3"
}
else {
    thirdQuestionAnswer = "Resposta Incorreta 3"
};

let idOne = document.getElementById("one");
let idTwo = document.getElementById("two");
let idThree = document.getElementById("three");
let idFour = document.getElementById("four");
let idFive = document.getElementById("five");
let idSix = document.getElementById("six");

if (firstQuestionAnswer === "Resposta Correta 1") {
    idOne.innerHTML = firstQuestionAnswer;
} else {
    idFour.innerHTML = firstQuestionAnswer;
};

if (secondQuestionAnswer === "Resposta Correta 2") {
    idTwo.innerHTML = secondQuestionAnswer;
} else {
    idFive.innerHTML = secondQuestionAnswer;
};

if (thirdQuestionAnswer === "Resposta Correta 3") {
    idThree.innerHTML = thirdQuestionAnswer;
} else {
    idSix.innerHTML = thirdQuestionAnswer;
};