let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let container = document.querySelector(".container");
let before = document.querySelector(".before");
let after = document.querySelector(".after");
let rate = document.querySelector(".rate");
let rateVal = "";

function clicked(e) {
  if (e.classList[0] === "one") {
    one.classList.add("clicked");
    two.classList.remove("clicked");
    three.classList.remove("clicked");
    four.classList.remove("clicked");
    five.classList.remove("clicked");

    rateVal = "1";
  } else if (e.classList[0] === "two") {
    one.classList.remove("clicked");
    two.classList.add("clicked");
    three.classList.remove("clicked");
    four.classList.remove("clicked");
    five.classList.remove("clicked");

    rateVal = "2";
  } else if (e.classList[0] === "three") {
    one.classList.remove("clicked");
    two.classList.remove("clicked");
    three.classList.add("clicked");
    four.classList.remove("clicked");
    five.classList.remove("clicked");

    rateVal = "3";
  } else if (e.classList[0] === "four") {
    one.classList.remove("clicked");
    two.classList.remove("clicked");
    three.classList.remove("clicked");
    four.classList.add("clicked");
    five.classList.remove("clicked");

    rateVal = "4";
  } else if (e.classList[0] === "five") {
    one.classList.remove("clicked");
    two.classList.remove("clicked");
    three.classList.remove("clicked");
    four.classList.remove("clicked");
    five.classList.add("clicked");

    rateVal = "5";
  }
}

function rot() {
  container.classList.add("anim");

  rate.innerHTML = `You selected ${rateVal} out of 5`;

  setTimeout(() => {
    before.style.display = "none";
  
    after.style.display = "flex";
  }, 250);
}
