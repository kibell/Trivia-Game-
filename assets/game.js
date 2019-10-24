// Declare the variables need for the game
const choiceA = $('#a');
const choiceB = $('#b');
const choiceC = $('#c');
const choiceD = $('#d');
const timer = $('#timer');
const question = $('#question');
const images = $('#picture');
const buttonDiv = $('#buttonDiv')
let runningQuestion = 0;
let correctScore = 0;
let incorrectScore = 0;
let numQuestions = 8;
let myTimer = 30
let intervalId;
let clockRunning = false;

const audioElement = document.getElementById("myAudio");
const audioMidi = document.getElementById("myMidi");
const audioWin = document.getElementById("myWin");
//an Array of Questions and answers


let questionsAnswer = [


    {
       question: "What super villain once broke Batman's back, leaving him crippled and wheelchair-bound?",
       imgPic :"./images/spongebob.gif ",
       a: "Joker",
       b: "Mr. Freeze",
       c: "Bane",
       d: "Poison Ivy",
       correctAnswer: 'c',
       newTimer: 30
       
 
   },

   {
       question: "What is Clark Kent's middle name?",
       imgPic :"./images/Dexter.gif",
       a: "William",
       b: "Henry",
       c: "Thomas",
       d: "Joesph",
       correctAnswer: 'd',
       newTimer: 30
   },


   {
       question: "Who did Wolverine fight in his first appearance?",
       imgPic :"./images/powerpuff.gif",
       a: "Hulk",
       b: "Nick Fury",
       c: "Captain America",
       d: "Gambit",
       correctAnswer: 'a',
       newTimer: 30
   },

   {
    question: "What is Iron Man's real name?",
    imgPic :"./images/helga.gif",
    a: "Tony Stark",
    b: "Tony Hawk",
    c: "Tony Spark",
    d: "Tim Stark",
    correctAnswer: 'a',
    newTimer: 30
},

{
    question: "Who is Thor's father?",
    imgPic :"./images/bugs.gif",
    a: "Zeus",
    b: "Loki",
    c: "Odin",
    d: "Asgard",
    correctAnswer: 'c',
    newTimer: 30
},


{
    question: "What is Shuri's relationship with T'Challa?",
    imgPic :"./images/popeye.gif",
    a: "First Cousin",
    b: "Younger Sister",
    c: "Older sister",
    d: "Distant cousin",
    correctAnswer: 'b',
    newTimer: 30
},

{
    question: "What comic book did Spider-Man first appear in?",
    imgPic :"./images/dino.gif",
    a: "Amazing Fantasy #15",
    b: "Amazing spiderman #1",
    c: "Who is the spider #12",
    d: "The adventures of Spiderman #1",
    correctAnswer: 'a',
    newTimer: 30
},

{
    question: "What is the Jokers real name? ",
    imgPic :"./images/doo.gif",
    a: "Jack Napier",
    b: "Jim Landon",
    c: "Keith Ramsey",
    d: "Fred Samson",
    correctAnswer: 'a',
    newTimer: 30
},


{
    question: "Who is NOT part of the Teen Titans?",
    imgPic :"./images/original.gif",
    a: "Robin",
    b: "Starfire",
    c: "Beastboy",
    d: "Gizmo",
    correctAnswer: 'd',
    newTimer: 30
},

]





//Create a timer that will countdown as soon as the game starts
$( document ).ready(function(){
   
$('#mainPage').hide();
$('#playAgain').hide();




    $('#start').click(function(){

        audioMidi.play();
        $('#mainPage').show()
        $('#start').hide()
    $('#endScreen').hide()
    
    
        if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
        
      }
    
      function count() {
    
    
    myTimer --;
    
    
    if (myTimer < 0){
        audioElement.play();
        $('#timer').hide();
        $('#question').html("TIMES UP!!");
        $('#endScreen').show();
        $('#rightAnswer').text("You got " + correctScore + "  correct");
        $('#wrongAnswer').text("You got " + incorrectScore + "  incorrect");
        audioElement.pause();
        $('#playAgain').show();
        buttonDiv.hide();
        
    }
    
    const converted = timeConverter(myTimer);
    console.log(converted);
    
    $("#display").text(converted);
    }
    
    function timeConverter(t) {
    
    let minutes = Math.floor(t / 60);
    let seconds = t - (minutes * 60);
    
    
    return  seconds;
    }
    
    
    });
    
});

// what should  happen when the timer runs out


//reset
function reset(){
    $("#display").text("30");
    myTimer = 30;
    
    
    }

    //play again function
    function playAgain(){
        location.reload();

    }
    
 //a function that will run through the questions after each selection
function renderQuestion(){
    let q = questionsAnswer[runningQuestion];
    question.html(q.question);
    choiceA.text(q.a);
    choiceB.text(q.b)
    choiceC.text(q.c)
    choiceD.text(q.d);
    images.attr = q.imgPic;


}

renderQuestion();
// // a function that calls the array of questions and adds a point when you get the answer wrong


function checkAnswer(correctAnswer){
    if(questionsAnswer[runningQuestion].correctAnswer === correctAnswer){
    
        $('#question').hide();
        $('.btn').hide();
        
        
    
        document.getElementById("picture").src = questionsAnswer[runningQuestion].imgPic
        $('#picture').show()
         
        setTimeout(function(){$('#picture').hide(), $('#question').show(),$('.btn').show(), $('#display').show(), reset() }, 3000)
       
    //    $('#picture').hide()
    
    correctScore ++;
    runningQuestion ++;
    reset();
    console.log('ok');
    
        if(runningQuestion > numQuestions){
            audioMidi.pause();
            audioWin.play();

            $('#timer').hide();
            $('#question').hide();
        $('#endScreen').show();
        $('#rightAnswer').text("You got " + correctScore + "  correct");
        $('#wrongAnswer').text("You got " + incorrectScore + "  incorrect");
        $('#playAgain').show();
        buttonDiv.hide();
        let clockRunning = true;
    
        } else{
            reset();
            renderQuestion();
        }
    
    
    
    
    
    } else {
        audioElement.play();
        incorrectScore ++
        runningQuestion ++;
        reset();
                 if(runningQuestion > numQuestions){
                    audioMidi.pause();
                    audioWin.play();
             $('#timer').hide();
         $('#question').hide();
        $('#endScreen').show();
        $('#rightAnswer').text("You got " + correctScore + "  correct");
        $('#wrongAnswer').text("You got " + incorrectScore + "  incorrect");
        $('#playAgain').show();
        buttonDiv.hide();
        let clockRunning = true;

        } else{
            reset();
            renderQuestion();
        }
    
    
        
        
        console.log('no');
    
    }
    
    
    
    
    
    }

    

