let colorCode = ['#000000','#2B8EAD','#333333','#6F98A8','#8a7b7b','#BFBFBF','#1c61c1','#2F454E','#72C3DC'];
let number = [1,2,3,4,5,6,7,8,9]

let container = document.querySelector('.container');
let container2 = document.querySelector('.container2');
let randomA = [];
sortCards();

function shuffelCards(){

    container.innerHTML = "";
    container2.innerHTML = "";
    randomA = [];

    for (let i = 1; i <= 9; i++) {

        let myDiv = document.createElement("div");
        let myDiv2 = document.createElement("div");
        var random  = getRandomBetween(1,10);

        //generating random number to do the shuffle
        while(randomA.includes(random)){
            random = getRandomBetween(1,10);       
        }

        myDiv.innerHTML = "<div class=\"card\" style=\"padding: 50%;background-color:"+colorCode[random-1]+"\">"+ random +"</div>" ;
        myDiv2.innerHTML = "<div class=\"card\" style=\"margin-bottom:2%;background-image: linear-gradient(to right,"+ colorCode[random-1]+","+ colorCode[random-1]+" 10%, transparent 10%, transparent 100%) \">"+random+"</div>";
        
        randomA.push(random);
        container.appendChild(myDiv);
        container2.appendChild(myDiv2);
    }
}

function sortCards(){
    container.innerHTML = "";
    container2.innerHTML = "";
    for (let i = 1; i <= 9; i++) {
    
        let myDiv = document.createElement("div");
        let myDiv2 = document.createElement("div");
        
        myDiv.innerHTML = "<div class=\"card\" style=\"padding: 50%;background-color:"+colorCode[i-1]+"\">"+ i +"</div>" ;
        myDiv2.innerHTML = "<div class=\"card\" style=\"margin-bottom:2%;background-image: linear-gradient(to right,"+ colorCode[i-1]+","+ colorCode[i-1]+" 10%, transparent 10%, transparent 100%) \">"+i+"</div>";
        
        
        container.appendChild(myDiv);
        container2.appendChild(myDiv2);
    }
}

function getRandomBetween(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function shuffel(){
    shuffelCards();
}

function sort(){
    sortCards();
}