import "../styles/style.css";


const points = [
  "fo sho!",
  "without a doubt",
  "idk bruh",
  "if u say so",
  "unfortunately, yea",
  "ofc",
  "nah",
  "yes",
  "no",
  "i think so",
  "try again",
  "manifest it bestie",
  "ask again later",
  "cant predict now",
  "concentrate and ask again",
  "no lol",
  "eren yeager from attack on titan",
  "my sources say…no",
  "don't count on it!!!",
  "my reply is no",
  "nope",
  "be fr rn",
  "you already know the answer",
  "work on it"
  ];



//elements to manipulate 
const button = document.querySelector("button");
const response = document.querySelector("#response");
const questionInput = document.getElementById("clear");
const questiond =document.getElementById(`questiond`);
const responsed = document.getElementById(`responsed`);
const card = document.getElementById(`card`);




//generates random response + changes font size every time you click btn
button.addEventListener("click", function generateRandom(){
  if (questionInput.value.length < 1){
    alert(`enter a question!!`);
  } else{
    const question = questionInput.value;

    questiond.textContent = question;

  const index= Math.floor(Math.random()*points.length);
  const result =points[index];
  document.getElementById("response").innerHTML= result;
  document.getElementById("response").style.fontSize= "18px";

  responsed.textContent = result;

  card.style.display =`block`;
  }
});

//when you press the enter key it functions the enter button
document.addEventListener(`keydown`, function(event){
  if (event.key === `Enter`) {
    button.click();
  }
})