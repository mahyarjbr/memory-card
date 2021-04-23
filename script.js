let data = [];

const submitHandler = (e) => {
  e.preventDefault();

  let inputTitle = document.getElementById("title").value;
  let inputContent = document.getElementById("content").value;
  data.push({ id: data.length + 1, title: inputTitle, content: inputContent });

  addCard(data.length, inputTitle, inputContent);

  var cardFront = document.querySelector(".card-front");
  var cardBack = document.querySelector(".card-back");

  cardFront.addEventListener("click", flipTheCardFront);
  cardBack.addEventListener("click", flipTheCardBack);
  function flipTheCardFront() {
    this.classList.toggle("flip");
    cardBack.classList.toggle("flip");
  }
  function flipTheCardBack() {
    this.classList.toggle("flip");
    cardFront.classList.toggle("flip");
  }
};

const addCard = (id, title, content) => {
  var div = document.createElement("div");
  div.innerText = title;
  div.classList.add("card");
  div.innerHTML = `<div class="card-front">
                     <h1>card ${id}</h1>
                     <h3>click me </h3>
                    </div>
                  <div class="card-back">
                   <h3>${title}</h3>
                   <p>${content}</p>
                   </div> `;

  document.getElementById("card1").after(div);
};
