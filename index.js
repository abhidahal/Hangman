// Name=prompt("Enter your name:");
const USERNAME = "Player";
document.getElementById("Welcome_Message").textContent = `Welcome ${USERNAME}`;

async function getRandomWords(numberOfWords = 10) {
  const words = ["apple","banana"]

  return words;
}

function spliceString(str, index, count, add) {
  return str.slice(0, index) + (add || "") + str.slice(index + count);
}

async function startGame() {
  const words = await getRandomWords();
  const hangmanWord = words[Math.floor(Math.random() * words.length)];
  const hangmanLetters = hangmanWord.split("");
  const guessedLetters = [];
  const wrongLetters = [];
  const MAX_WRONG = 10;
  let hint = "";
  const tryButton = document.getElementById("try_button");
  tryButton.removeEventListener("click", startGame);
  tryButton.addEventListener("click", Guessword);
  tryButton.textContent = "Try it";

  hangmanLetters.forEach((letter, index) => {
    if (index !== 0) {
      hint += "_";
      return;
    }

    hint += letter;
  });
  document.getElementById("game_area").textContent = hint;

  function Guessword() {
    let guess = document.getElementById("myText").value;

    if (guess.length > 1) {
      alert("Please enter a single letter");
      return;
    }

    if (guessedLetters.includes(guess)) {
      alert("You have already guessed this letter");
      return;
    }

    let updatedHint = update(guess);

    guessedLetters.push(guess);

    if (updatedHint === hint && hint.substring(0, 1) == guess) {
      alert("You have already guessed this letter");
      return;
    }

    if (updatedHint == hint) {
      wrongLetters.push(guess);
      document.getElementById("right-wrong").textContent = "Wrong Guess";
      if (MAX_WRONG === wrongLetters.length) gameOver({ state: "lost" });
      return;
    }
    hint = updatedHint;
    document.getElementById("game_area").textContent = updatedHint;
    document.getElementById("right-wrong").textContent = "Right Guess";
    if (hint == hangmanWord) {
      gameOver({ state: "win" });
    }
  }

  function update(guess) {
    let updatedHint = hint;
    hangmanLetters.forEach((letter, index) => {
      if (guess == letter) {
        updatedHint = spliceString(updatedHint, index, 1, guess);
      }
    });

    return updatedHint;
    // var limit=6;
    // document.getElementById("demo").innerHTML = x;
    // Name=prompt("Enter your name:");
    // document.write("Welcome " + Name );
  }

  function gameOver({ state }) {
    document.getElementById("game_area").textContent = "Game Over";
    const tryButton = document.getElementById("try_button");
    tryButton.removeEventListener("click", Guessword);
    tryButton.addEventListener("click", startGame);
    tryButton.textContent = "Restart Game";
    if (state === "lost")
      alert(`You lost the game\nCorrect word: ${hangmanWord}`);
    if (state === "win")
      alert(`You won the game\nCorrect word: ${hangmanWord}`);
  }
}

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 80) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

function openNav() {
  document.getElementById("Sidenav").style.width = "100vw";
}

function closeNav() {
  document.getElementById("Sidenav").style.width = "0";
}

startGame();
