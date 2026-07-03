const questions = [
  "O que te causa a sensação de alegria?",
  "O que te causa a sensação de tristeza?",
  "O que te causa a sensação de insegurança?",
  "O que te causa a sensação de confiança?",
  "O que te causa a sensação de medo?",
  "O que te causa a sensação de raiva?",
  "O que te causa a sensação de nojo?",
  "O que te causa a sensação de gratidão?",
  "O que te causa a sensação de segurança?",
  "Qual atividade te dá prazer?",
  "O que te dá ansiedade?",
  "O que te causa a sensação de felicidade?",
  "O que te deixa envergonhado(a)?",
  "O que te deixa magoado(a)?",
  "O que te irrita?",
  "O que te deixa incomodado(a)?",
  "O que te estressa?",
  "O que você gosta de fazer e faz?",
  "O que você está sentindo agora?",
  "O que você gosta de fazer e não faz?",
  "O que você sente em relação às suas escolhas profissionais?",
  "O que você não gosta de fazer e faz?",
  "O que você mudaria na sua vida?",
  "O que você não gosta de fazer e não faz?",
  "O que você tem facilidade para fazer?",
  "Quais são os seus maiores sonhos?",
  "O que você mais gosta de fazer na vida?",
  "Fale das pessoas que você mais gosta e por quê",
  "Como você gostaria que as pessoas percebessem você?",
  "Descreva sua família.",
  "Que mudanças você faria na sua vida profissional?",
  "Que mudanças você faria na sua vida pessoal?",
  "O que faz parte da sua vida, mas que não deseja mais?",
  "Qual seu maior arrependimento?",
  "O que você mais deseja e ainda não faz parte da sua vida?",
  "O que é amizade para você?",
  "Como são seus amigos?",
  "O que te preocupa?",
  "O que você mais gosta em si mesmo?",
  "O que te faz perder o autocontrole?",
  "O que você menos gosta em si mesmo?",
  "O que você gosta em você e as pessoas percebem?",
  "Diga o que você acha difícil na sua vida",
  "O que você gosta em você e as pessoas não percebem?",
  "Conte a sua história desde o nascimento",
  "O que te deixa com vontade de chorar?",
  "Quais são seus maiores desejos e como você pode realizá-los?",
  "Se você fosse um sentimento, qual seria? Por quê?",
  "O que mais te assusta?",
  "Qual o maior amor da sua vida?",
  "O que te faz rir?",
  "Conte sobre a maior felicidade que já sentiu na vida",
  "Qual o sentimento mais presente na sua vida?",
  "O que te emociona?",
  "Conte um filme que marcou a sua vida",
  "Que emocão apareceu com mais forca em você hoje?",
  "O que costuma te ajudar quando voce se sente sobrecarregado?",
  "Qual sentimento você tem evitado nomear nos últimos dias?",
  "Quando foi a última vez que voce se sentiu acolhido?",
  "Que necessidade pode estar escondida atrás da sua irritação?",
  "O que te trouxe alegria pequena, mas real, recentemente?",
  "Que medo merece ser ouvido com mais calma?",
  "Em que parte do corpo voce percebe suas emocões primeiro?",
  "O que você gostaria que alguém entendesse sobre o que sente?",
  "Qual limite você precisa respeitar melhor esta semana?",
  "Que lembrança te dá sensacao de seguranca?",
  "Qual emoção voce gostaria de convidar para perto agora?",
  "O que você faz quando percebe que esta triste?",
  "Que situação recente mexeu mais com você?",
  "Que palavra descreve melhor seu momento atual?",
  "O que te ajuda a voltar para si quando tudo fica confuso?",
  "Que sentimento você gostaria de expressar com mais liberdade?",
  "Qual conversa você sente que ainda precisa ter?",
  "O que você tem guardado só para você?",
  "Que atitude de cuidado você pode oferecer a si mesmo hoje?",
  "Quando você percebe que precisa de pausa?",
  "Que emoção aparece quando você pensa no futuro?",
  "O que te faz sentir pertencente?",
  "Qual foi um gesto simples que te marcou recentemente?",
  "Que pensamento costuma acompanhar sua ansiedade?",
  "O que você aprendeu sobre suas emoções este ano?",
  "Que parte de você precisa de mais paciência?",
  "Qual emoção voce sente dificuldade de mostrar aos outros?",
  "O que te dá coragem em dias difíceis?",
  "Que sensacão voce gostaria de transformar em palavras?",
  "Qual é a emoção que você sente com mais frequência no seu dia a dia?",
  "Como o seu corpo reage quando você está com raiva?",
  "Existe alguma emoção que você tem dificuldade de demonstrar? Por quê?",
  "Qual é a sua estratégia de fuga favorita quando se sente sobrecarregado?",
  "O que faz você se sentir em paz instantaneamente?",
  "Como você descreveria a diferença entre tristeza e frustração para você?",
  "Se pudesse perguntar como uma pessoa próxima está se sentindo hoje, o que você perguntaria além de tudo bem?",
  "Como você percebe quando um amigo ou familiar não está bem, mesmo que ele não diga nada?",
  "Qual foi a última vez que você viu alguém triste e tentou ajudar? Como foi?",
  "Você consegue identificar quando alguém está escondendo uma emoção? Como você reage a isso?",
  "Como podemos acolher a alegria de outra pessoa sem sentir inveja?",
  "Qual é uma atividade que sempre ajuda você a transformar um dia ruim em um dia melhor?",
  "Como você pede ajuda quando está se sentindo vulnerável?",
  "O que você diria para o seu eu de 5 anos de idade se ele estivesse chorando agora?",
  "Qual é a diferença entre reagir a uma emoção e responder a ela?",
  "Como você se recompensa após passar por um momento emocionalmente difícil?",
  "Se a sua alegria fosse uma cor, qual seria e por quê?",
  "Qual música combina com o seu estado de espírito hoje? Por quê?",
  "Imagine que uma emoção sua é um personagem de filme. Como ele se veste e como ele fala?",
  "Se você pudesse desligar uma emoção por 24 horas, qual seria? Por que você faria isso?",
  "Qual memória traz um sorriso ao seu rosto automaticamente?",
  "Se a sua tristeza tivesse uma voz, o que ela estaria tentando te dizer neste momento?",
  "Qual é a emoção que você sente que mais desperdiça seu tempo e energia?",
  "Quando foi a última vez que você se sentiu realmente orgulhoso de si mesmo, não por uma conquista, mas por uma atitude?",
  "Existe alguma situação que, para a maioria das pessoas é normal, mas que te causa um desconforto específico?",
  "Como você lida com a sensação de incerteza em relação ao futuro?",
  "O que é algo que, mesmo te deixando um pouco nervoso, você adoraria tentar fazer?",
  "Você costuma esconder suas fraquezas para parecer mais forte? O que aconteceria se você parasse de fazer isso?",
  "Qual foi o elogio que você recebeu que mais tocou o seu coração até hoje?",
  "Como você define o sucesso emocional em uma relação (seja amizade, namoro ou família)?",
  "O que te faz sentir que você pertence a um lugar ou a um grupo?",
  "Se você pudesse dar um nome a um monstro que aparece na sua cabeça quando você está ansioso, que nome ele teria?",
  "Qual é a sua forma favorita de praticar o autocuidado em dias nublados ou difíceis?",
  "Quando você se sente frustrado, você tende a se isolar ou a buscar companhia? Por quê?",
  "Existe algum erro do passado que você ainda carrega com um peso emocional? O que seria preciso para perdoar a si mesmo por isso?",
  "O que torna o seu dia perfeito emocionalmente falando?",
  "Como você identifica quando precisa dar uma pausa de tudo e recarregar suas energias?",
  "Quando você se sente muito feliz, qual é a primeira coisa que você quer fazer ou com quem quer compartilhar?",
  "O que te dá uma sensação de segurança quando o mundo lá fora parece caótico?",
  "Qual é uma emoção que você gostaria de sentir com mais frequência e o que você pode fazer para cultivá-la?",
  "Se você escrevesse uma carta para as suas emoções hoje, qual seria a primeira frase?"
];

const cardsPerRound = 10;
const colors = ["#2f6f5e", "#d9674e", "#e5b94e", "#8bb7ca", "#a99ad6", "#395f8f"];

const deck = document.querySelector("#deck");
const resetAllButton = document.querySelector("#reset-all");
const roundStatus = document.querySelector("#round-status");

let deckQuestions = drawCards();
let revealedQuestions = new Set();

function shuffle(items) {
  return items
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function drawCards() {
  return shuffle([...questions]).slice(0, cardsPerRound);
}

function renderDeck() {
  deck.innerHTML = "";
  updateStatus();

  deckQuestions.forEach((question, index) => {
    const cardNumber = index + 1;
    const isRevealed = revealedQuestions.has(question);
    const card = document.createElement("button");
    card.className = `card${isRevealed ? " is-flipped" : ""}`;
    card.type = "button";
    card.disabled = isRevealed;
    card.style.setProperty("--card-color", colors[index % colors.length]);
    card.setAttribute("aria-label", isRevealed ? `Carta ${cardNumber} revelada` : `Virar carta ${cardNumber}`);
    card.innerHTML = `
      <span class="card-inner">
        <span class="card-face card-back">
          <span class="card-number">${cardNumber}</span>
          <span class="card-symbol">?</span>
        </span>
        <span class="card-face card-front">
          <span class="card-number">${cardNumber}</span>
          <p>${question}</p>
        </span>
      </span>
    `;

    card.addEventListener("click", () => chooseCard(question, card, cardNumber));
    deck.appendChild(card);
  });
}

function chooseCard(question, card, cardNumber) {
  revealedQuestions.add(question);
  card.classList.add("is-flipped");
  card.disabled = true;
  card.setAttribute("aria-label", `Carta ${cardNumber} revelada`);
  updateStatus();
}

function resetDeck() {
  deckQuestions = drawCards();
  revealedQuestions = new Set();
  renderDeck();
}

function updateStatus() {
  const remaining = deckQuestions.length - revealedQuestions.size;
  roundStatus.textContent = `${remaining} ${remaining === 1 ? "carta para escolher" : "cartas para escolher"}`;
}

resetAllButton.addEventListener("click", resetDeck);

renderDeck();
