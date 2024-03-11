const firstinp = document.querySelector(".enternumberinput");
const secondinp = document.querySelector(".splitinput");
const submitbtn = document.querySelector(".btn");

let divsArr = [];

function split() {
  let numberoftimes = parseInt(firstinp.value);
  let splittingdivs = parseInt(secondinp.value);
  createArrayDiv(numberoftimes, splittingdivs);
  divsArr.reverse();
  console.log(divsArr);
  let container = document.querySelector(".container");
  container.innerHTML = "";
  for (let i = 0; i < divsArr.length; i++) {
    let div = document.createElement("div");
    div.classList.add("active");
    div.style.backgroundColor = randomColorGenerator();
    div.style.width = `${divsArr[i]}${0}%`;
    div.innerText = divsArr[i];
    container.appendChild(div);
  }
  divsArr = [];
}

function createArrayDiv(numberoftimes, splittingdivs) {
  if (numberoftimes == 0) return;
  let size = Math.floor(numberoftimes / splittingdivs);
  divsArr.push(size);
  createArrayDiv(numberoftimes - size, splittingdivs - 1);
}

const randomColorGenerator = () => {
  let temp = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color = color + temp[Math.floor(Math.random() * 16)];
  }
  // console.log(color);
  return color;
};
