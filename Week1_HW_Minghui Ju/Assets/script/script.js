let data = [

    {
        "question": "Do you want to step out of your comfort zone?",
        "answerA": "yes",
        "answerB": "no"
    },

    {
        "question": "Are you willing to learn new skills?",
        "answerA": "Ofcourse",
        "answerB": "Notsure."
    }
];

console.log(data);


document.addEventListener("DOMContentLoaded", function() {

    loadQuestions();


});



function loadQuestions() {

    let questionNumber = 0;

    let questions = document.getElementsByClassName("questions");


    for (let i = 0; i < data.length; i++) {


        // In this case we're creating the image tag with and ID and class

        let newQuestion = document.createElement("span");
        newQuestion.className = "title";
        newQuestion.innerText = data[i].question;

        let optionA = document.createElement("button");
        optionA.className = "btn";
        optionA.id = data[i].answerA;
        optionA.innerText = data[i].answerA;

        let optionB = document.createElement("button");
        optionB.className = "btn";
        optionB.id = data[i].answerB;
        optionB.innerText = data[i].answerB;

        questions[questionNumber].appendChild(newQuestion);
        questions[questionNumber].appendChild(optionA);
        questions[questionNumber].appendChild(optionB);
        questionNumber++;




    }


    //End of the for loop

    let answerYes = document.getElementById("yes");

    answerYes.addEventListener("click", function() {
        console.log("YES");

        let background = document.getElementById("container");
        background.style.backgroundColor = "darkgrey";

        let questionTwo = document.getElementById("questionTwo");
        questionTwo.style.display = "block";

        let questionOne = document.getElementById("questionOne");
        questionOne.style.display = "none";

        let pickColor = document.getElementById("pickColor");
        pickColor.style.display = "block";
        pickColor.innerText = "Perfect! You have a good start!";



    });

    let answerNo = document.getElementById("no");

    answerNo.addEventListener("click", function() {

        let background = document.getElementById("container");
        background.style.backgroundColor = "red";

         let questionTwo = document.getElementById("questionTwo");
         questionTwo.style.display = "block";

         let questionOne = document.getElementById("questionOne");
         questionOne.style.display = "none";

         let pickColor = document.getElementById("pickColor");
        pickColor.style.display = "block";
        pickColor.innerText = "Go home and sleep.";

    });


 

}