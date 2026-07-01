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
  "Que emocao apareceu com mais forca em voce hoje?",
  "O que costuma te ajudar quando voce se sente sobrecarregado?",
  "Qual sentimento voce tem evitado nomear nos ultimos dias?",
  "Quando foi a ultima vez que voce se sentiu acolhido?",
  "Que necessidade pode estar escondida atras da sua irritacao?",
  "O que te trouxe alegria pequena, mas real, recentemente?",
  "Que medo merece ser ouvido com mais calma?",
  "Em que parte do corpo voce percebe suas emocoes primeiro?",
  "O que voce gostaria que alguem entendesse sobre o que sente?",
  "Qual limite voce precisa respeitar melhor esta semana?",
  "Que lembranca te da sensacao de seguranca?",
  "Qual emocao voce gostaria de convidar para perto agora?",
  "O que voce faz quando percebe que esta triste?",
  "Que situacao recente mexeu mais com voce?",
  "Que palavra descreve melhor seu momento atual?",
  "O que te ajuda a voltar para si quando tudo fica confuso?",
  "Que sentimento voce gostaria de expressar com mais liberdade?",
  "Qual conversa voce sente que ainda precisa ter?",
  "O que voce tem guardado so para voce?",
  "Que atitude de cuidado voce pode oferecer a si mesmo hoje?",
  "Quando voce percebe que precisa de pausa?",
  "Que emocao aparece quando voce pensa no futuro?",
  "O que te faz sentir pertencente?",
  "Qual foi um gesto simples que te marcou recentemente?",
  "Que pensamento costuma acompanhar sua ansiedade?",
  "O que voce aprendeu sobre suas emocoes este ano?",
  "Que parte de voce precisa de mais paciencia?",
  "Qual emocao voce sente dificuldade de mostrar aos outros?",
  "O que te da coragem em dias dificeis?",
  "Que sensacao voce gostaria de transformar em palavras?"
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
