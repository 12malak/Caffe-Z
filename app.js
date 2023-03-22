// let person = prompt("Please tell us  your name") 
// let  age= prompt("Please tell us  your age");

// let Gender;
//  function gender() {
    
   
//     Gender = prompt("please enter your gender","male or female")
    
 
//     while(Gender !="male" &&  Gender !="female"){
    
  
//         Gender = prompt("Please enter a correct gender")
    
  
//    }
  
//    if(Gender == "male" ){
      
//    alert("Welcome to Coffe time shop Mr. "+person )
    
   
//   }
  
//    else if(Gender == "female" ){
 
//     alert("Welcome Ms. "+ person)
  
//    }
  
//    else{
   
//      alert("Welcome to Coffe time Coffe lover ")
  
//    }

//  }

//  gender();


// let drink = prompt("What drink do you want ?", "Hot or Cold ?")


// let namedrink = prompt("Name of your drink ?")

// alert("Your drink is being prepared .")

// console.log("Name : "+person +"  Drink name : "+namedrink)


//  let arr=[person,Gender,drink,namedrink];

//  for(let i=0;i<arr.length;i++){

//  console.log(arr[i])


//  }

// //    Create a div > paragraph > ul > li 
// let YourName=document.getElementById("userInput");
// console.log(YourName); 

// let div=document.createElement("div");

// YourName.appendChild(div);

// let pElement=document.createElement("p");
// div.appendChild(pElement);
// document.body.appendChild(pElement)
// pElement.textContent=person
// pElement.style.fontSize="xx-large";
// pElement.style.color="white";

// let ulElement=document.createElement("ul");
// div.appendChild(ulElement);


// let liElement1=document.createElement("li");
// ulElement.appendChild(liElement1);
// liElement1.textContent="Gender :"+Gender

// let liElement2=document.createElement("li");
// ulElement.appendChild(liElement2);
// liElement2.textContent="Age: "+age



// let liElement3=document.createElement("li");
// ulElement.appendChild(liElement3);
// liElement3.textContent="Drink: "+drink+" "+namedrink

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