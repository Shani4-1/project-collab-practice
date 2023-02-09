const increment = document.querySelector(".increment");
increment.addEventListener("click", () => {
  const hearts = document.querySelector(".hearts");
  hearts.textContent += "❤";
});
let num = 1;
setInterval(() => {
    console.log(num);
    num++;
     
},2000)

const decrement = document.querySelector(".decrement");
decrement.addEventListener("click", () => {
  const hearts = document.querySelector(".hearts");
  hearts.textContent = hearts.textContent.slice(0, -1);
  if (hearts.textContent === '') {
    hearts.textContent = "❤"
  }
});
