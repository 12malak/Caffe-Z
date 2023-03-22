const formSub=document.getElementById("myForm");
const userInput=document.getElementById("userInput");
formSub.addEventListener("submit",(event)=>{
    event.preventDefault();
    let username=event.target.username.value;
    let drink=event.target.drink.value;
    let Age=event.target.Age.value;
    let hot=(event.target.userdrinkType.checked );
    let cold=(event.target.userdrinkType1.checked );
let drinkType00;
    if(cold){

drinkType00="Cold"
    }else if(hot){
        drinkType00="Hot"
    }
  render(username,drink,Age,drinkType00);
});

 function render(username,drink,Age,drinkType00){
let pName=document.createElement("p");
let pAge=document.createElement("p");
let pdrink=document.createElement("p");
let pType=document.createElement("p");

pName.textContent=username;
pAge.textContent=Age;
pdrink.textContent=drink;
pType.textContent=drinkType00;

userInput.appendChild(pName);
userInput.appendChild(pdrink);
userInput.appendChild(pAge);
userInput.appendChild(pType);

 }