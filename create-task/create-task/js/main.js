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
  "even yeager from attack on titan",
  "my sources say…no",
  "don't count on it!!!",
  "my reply is no",
  "nope",
  "be fr rn",
  "you already know the answer",
  "work on it"
  ];
  // document.getElementById("response").innerHTML= shake(points)
  // function shake(points){
  //   points.sort(function(a,b){return 0.5 - Math.random()});
  //   document.getElementById("response").innerHTML=points[0];
  //   document.getElementById("response").style.fontSize= "18px";
  // }



const button = document.querySelector("button");
const response = document.querySelector("#response");

button.addEventListener("click", function generateRandom(){
  const index= Math.floor(Math.random()*points.length);
  const result =points[index];
  document.getElementById("response").innerHTML= result;
  document.getElementById("response").style.fontSize= "18px";

});