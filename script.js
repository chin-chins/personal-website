/* .js files add interaction to your website */

var factList = [
  "Black communities are twice as likely to face food insecurity in the US compared to white communities.",
  "47 million people in the US alone face food insecurity daily.",
  "A 2025 report by the Global Network Against Food Crises — of which UNICEF is a part — estimated that there were 37.7 million children with acute malnutrition in 26 countries and territories in 2024.",
  "Over 582 million people are projected to be chronically undernourished by 2030, more than half of them in Africa.",
  "13.8 million children in America lived in households that experienced food insecurity in 2022."
];

var facts = document.getElementById("factdisplay");
var button = document.getElementById("factbutton");
var count = 0;

if (button){
  button.addEventListener("click", displayFact);
}

function displayFact(){
  facts.innerHTML = factList[count];
  count++;

  //subtracts one to make sure it doesnt generate an undefined answer

  if (count > factList.length - 1){
    count = 0;
  }
}