let questions=[`I am a programming language that was developed in the 1990s and is known for its simplicity and readability. I am often used for web development and am named after a snake. What am I?`,`I am a concept in computer science that refers to the ability of a system to improve its performance over time without being explicitly programmed. What am I?`,`I am a programming language that was developed in the 1970s and is known for its speed and efficiency. I am often used for system programming and am named after a Scandinavian country. What am I?`,`I am a data structure that is used to store and organize data in a way that makes it easy to search and retrieve. I am often used for implementing dictionaries and databases. What am I?`,`I'm a material that's stronger than steel, but I'm not carbon fiber. What am I?`,`I'm a technology that can transmit data at incredibly fast speeds, but I'm not fiber optics. What am I?`,`I'm a technology that can create virtual experiences, but I'm not virtual reality. What am I?`,`I am a popular programming language known for my ability to create interactive and dynamic web pages. What am I?`];

let answer=[`Python`,`Machine learning`,`C`,`Hash table`,`graphene`,`LiFi`,`Augmented reality`,`JavaScript`];

let ind=Math.floor(Math.random()*8);
let qno=0;

let visted=[];
visted.push(ind);
document.getElementById("lkQuestion").innerHTML=questions[ind];

let countdownTime=0;
function updateTimer() {
    countdownTime++;
}


interval = setInterval(updateTimer, 1000);

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";";
}
function check(){
    if(qno<2){
        let enteredAnswer=document.getElementById("textAnswer").value;
        enteredAnswer=enteredAnswer.toLowerCase();
        let correctAnswer=answer[ind].toLowerCase();;
        if(correctAnswer==enteredAnswer){
            do{
                ind=Math.floor(Math.random()*8);
            }while(visted.includes(ind));
            document.getElementById("lkQuestion").innerHTML=questions[ind];
            document.getElementById("textAnswer").value="";
            qno+=1;
        }
        else{
            alert("The Entered answer is wrong!\nPlease try again😊");
        }
    }
    else{
        clearInterval(interval);
        setCookie("Timer",countdownTime);
        location.href="lokiFileSystem.html";
    }
}
document.addEventListener('keydown',e=>{
    if(e.key==='Enter'){
        check();
    }
});