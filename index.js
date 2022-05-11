// random letter pick up
// Name=prompt("Enter your name:");
Name = "Player"
document.getElementById("Welcome_Message").innerHTML = "Welcome " + Name


const words = ["sophisticated", "aperture", "insights", "dictionary", "agile"];
let toBeGuessed = words[Math.floor(Math.random() * 5)];
let guess = ""
let count = 0
let hint = ""
console.log("Main Word = " + toBeGuessed)
for (i = 0; i < toBeGuessed.length; i++) {
  hint += "_";
}
document.getElementById("game_area").innerHTML = hint


function Guessword() {
  var guess = document.getElementById("myText").value;
  console.log("______________________________")

  console.log("GUESSED WORD = " + guess)
  old_hint = hint

  change_hint = update(guess)
  console.log("HINT = " + old_hint)
  console.log("HINT UPDATE = " + change_hint)


  document.getElementById("game_area").innerHTML = hint
  if (old_hint == change_hint) {
    document.getElementById("right-wrong").innerHTML = "Wrong Guess"
  }
  else {
    document.getElementById("right-wrong").innerHTML = "Right Guess"
  }


  return 0;
}

function update(guess) {
  for (j = 0; j < toBeGuessed.length; j++) {

    if (guess == toBeGuessed.substr(j, 1)) {
      console.log(toBeGuessed.substr(j, 1) + "=" + guess + " => Matching letters ✅")
      hint = hint.slice(0, j) + guess + hint.slice(j + 1, toBeGuessed.length)
    }
    else {
      console.log(toBeGuessed.substr(j, 1) + "!=" + guess + " => Differrent letters ❌")
    }
  }

  return (hint)
  // var limit=6;
  // document.getElementById("demo").innerHTML = x;
  // Name=prompt("Enter your name:");
  // document.write("Welcome " + Name );
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