/* ------------------ comment stocker les valeurs des cartes, array[object] ?? ------------------ */

const poker = [
	{
		deuxCoeur: 2,
		troisCoeur: 3,
		quatreCoeur: 4,
		cinqCoeur: 5,
		sixCoeur: 6,
		septCoeur: 7,
		huitCoeur: 8,
		neufCoeur: 9,
		dixCoeur: 10,
		valetCoeur: 11,
		dameCoeur: 12,
		roisCoeur: 13,
		AsCoeur: 14,
	},
	{
		deuxPique: 2,
		troisPique: 3,
		quatrePique: 4,
		cinqPique: 5,
		sixPique: 6,
		septPique: 7,
		huitPique: 8,
		neufPique: 9,
		dixPique: 10,
		valetPique: 11,
		damePique: 12,
		roisPique: 13,
		AsPique: 14,
	},
	{
		deuxTrefle: 2,
		troisTrefle: 3,
		quatreTrefle: 4,
		cinqTrefle: 5,
		sixTrefle: 6,
		septTrefle: 7,
		huitTrefle: 8,
		neufTrefle: 9,
		dixTrefle: 10,
		valetTrefle: 11,
		dameTrefle: 12,
		roisTrefle: 13,
		AsTrefle: 14,
	},
	{
		deuxCarreau: 2,
		troisCarreau: 3,
		quatreCarreau: 4,
		cinqCarreau: 5,
		sixCarreau: 6,
		septCarreau: 7,
		huitCarreau: 8,
		neufCarreau: 9,
		dixCarreau: 10,
		valetCarreau: 11,
		dameCarreau: 12,
		roisCarreau: 13,
		AsCarreau: 14,
	},
];

/* ------------------ fonction pour recevoir un jeu au hasard jeux de carte ------------------ */

function randomCard(param, array) {
	const randomIndexPoker = Math.floor(Math.random() * param.length);
	const randomObjectPoker = Math.floor(
		Math.random() * Object.keys(param[randomIndexPoker]).length
	);
	const objectKeysValues = Object.entries(param[randomIndexPoker]);
	const random = objectKeysValues[randomObjectPoker];
	array.push(...random);
	return array;
}

/* ------------------ deuxième façon après renseignement sur internet, et meilleurs lecture du KATA ------------------ */

const cardsValues = {
	"2": 2,
	"3": 3,
	"4": 4,
	"5": 5,
	"6": 6,
	"7": 7,
	"8": 8,
	"9": 9,
	"T": 10,
	"J": 11,
	"Q": 12,
	"K": 13,
	"A": 14,
};
const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
const symbols = ["C", "D", "H", "S"];
const pokerCards = [];
const playerWhite = [];
const playerBlack = [];

/* ----------------- Boucle pour former le jeu de carte ------------------------ */

for (const symbol of symbols) {
	for (const rank of ranks) {
		pokerCards.push({
			rank: rank,
			symbol: symbol,
		});
	}
}

/* -------------- Fonction pour recevoir un jeu au hasard ---------------- */ 

function randomPokerCards(cards, array) {
	const randomIndex = Math.floor(Math.random() * cards.length);
	const random = cards[randomIndex];
	array.push(random);
	return array;
}

/* ------------- Boucle pour distribuer 5 cartes par joueurs ---------------- */

for (let i = 0; i < 5; i++) {
	randomPokerCards(pokerCards, playerWhite);
	randomPokerCards(pokerCards, playerBlack);
}

/* ---------- main des joueurs ------------ */

const playerCardsHandleWhite = playerWhite.map(
    (item) => item.rank + item.symbol
    );
const playerCardsHandleBlack = playerBlack.map(
    (item) => item.rank + item.symbol
    );

/* -------------- Fonction arrow pour récupérer le rank des cartes ( exemple: Dame, Valet, As )  -------------- */

const ranksMap = (ranks) => ranks.map((item) => item.rank);
const extractedPlayerBlack = ranksMap(playerBlack);
const extractedPlayerWhite = ranksMap(playerWhite);
const valuesOfBlack = extractedPlayerBlack.map((rank) => cardsValues[rank]);
const valuesOfWhite = extractedPlayerWhite.map((rank) => cardsValues[rank]);

/* ------------------ Fonction carte la plus haute ------------------ */

function highCard() {
	const valuesOfBlackMax = Math.max(...valuesOfBlack);
	const valuesOfWhiteMax = Math.max(...valuesOfWhite);
	if (valuesOfBlackMax > valuesOfWhiteMax) {
		console.log("Black win");
	} else if (valuesOfBlackMax < valuesOfWhiteMax) {
		console.log("White win");
	} else {
		console.log("no body win");
	}
}
highCard();

/* ------------------ Fonction qui retourne dans un objet le nombre de carte identique --------------- */

function identiqueCard(player) {
	const identiqueValueNumber = {};
	for (const value of player) {
		if (identiqueValueNumber[value]) {
			identiqueValueNumber[value]++;
			console.log(identiqueValueNumber[value]);
		} else {
			identiqueValueNumber[value] = 1;
			console.log(identiqueValueNumber[value]);
		}
	}
	return identiqueValueNumber;
}
const valuesDoubleOrMoreBlack = identiqueCard(valuesOfBlack);
const valuesDoubleOrMoreWhite = identiqueCard(valuesOfWhite);

const playerBlackPair = Object.values(valuesDoubleOrMoreBlack).map(
	(item) => item > 1
);
const playerWhitePair = Object.values(valuesDoubleOrMoreWhite).map(
	(item) => item > 1
);

/* --------------- Fonction pour les paires --------------------- */

function twoCardIdentique(card) {
	for (const value in card) {
		if (card[value] === 2) {
			console.log(`une paire de ${value} nombre: ${card[value]}`);
		}
	}
}

function pair() {
	if (
		playerBlackPair.some((value) => value) ||
		playerWhitePair.some((value) => value)
	) {
		console.log("paires trouvé");
		twoCardIdentique(valuesDoubleOrMoreBlack);
		twoCardIdentique(valuesDoubleOrMoreWhite);
	} else {
		console.log("aucune paires pour les joueurs");
	}
}
pair();
function twoPair() {}
function threeOfAKind() {}
function straight() {}
function flush() {}
function fullHouse() {}
function fourOfAKind() {}
function straightFlush() {}
