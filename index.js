const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let buttonClick = document.getElementById("button")
let passwordOne = document.getElementById("pswd1")
let passwordTwo = document.getElementById("pswd2")
let length;
let copyOne = document.getElementById("copy1")
let copyTwo = document.getElementById("copy2")



buttonClick.addEventListener("click", function () {
    length = parseInt(prompt())
    if (length >= 19) {length=19}
        else length=length
    passwordOne.textContent = generate()
    passwordTwo.textContent = generate()
    copyOne.textContent=passwordOne.textContent
    copyTwo.textContent=passwordTwo.textContent
    console.log(copyOne.textContent)
    console.log(copyTwo.textContent)
})

function generate() {
    let generated = "";
    for (let i=0; i<length; i++) { 
         generated += characters[Math.floor(Math.random() * characters.length)]
        }
return generated;
}

passwordOne.addEventListener("click", function() {
    console.log(copyOne.textContent)
    copyOne.select();
    copyOne.setSelectionRange(0, 99999);    
    navigator.clipboard.writeText(copyOne.value);
    alert("Skopiowano haslo: " + copyOne.value);
})

passwordTwo.addEventListener("click", function() {
    console.log(copyTwo.textContent)
    copyTwo.select();
    copyTwo.setSelectionRange(0, 99999);    
    navigator.clipboard.writeText(copyTwo.value);
    alert("Skopiowano haslo: " + copyTwo.value);
})



//15 characters long
//on click copy
//password lenght

