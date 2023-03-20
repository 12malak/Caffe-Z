let person = prompt("Please tell us  your name") 
function gender() {
    
    let g = prompt("please enter your gender","male or female")
    
    while(g !="male" &&  g !="female"){
    
    g = prompt("Please enter a correct gender")
    
    }
    if(g == "male" ){
        alert("Welcome to Coffe time shop Mr. "+person )
    
    }
    else if(g == "female" ){
    alert("Welcome Ms. "+ person)
    }
    else{
        alert("Welcome to Coffe time Coffe lover ")
    }
}
gender();

let drink = prompt("What drink do you want ?", "Hot or Cold ?")

let namedrink = prompt("Name of your drink ?")
alert("Your drink is being prepared .")
console.log("Name : "+person +"  Drink name : "+namedrink)

let arr=[person,g,drink,namedrink];
for(let i=0;i<arr.length;i++){
console.log(arr[i])

}