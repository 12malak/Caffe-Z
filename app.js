let customer = prompt("Please tell us  your name");
let gender=prompt("please enter your gender","male or female")

let genderLower = gender.toLowerCase();

if (genderLower == "male") {
    alert("Welcome to Coffe time shop Mr"+" "+customer);
}
else if(genderLower == "female"){
    alert("Welcome to Coffe time shop MS"+" "+customer);
}
else{
    alert("Welcome to Coffe time Coffe lover" );
}

let drink=prompt('Do you prefare a hot or cold coffe? ')
let drinkName=prompt('nice choice,what is your drink name? ')

alert('Please wait,your drink is being prepared.....')

console.log(customer+ " will have " + drinkName)