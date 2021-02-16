const quiz = [
  {
    name: "Amanda Olsson",
    //options: ["Emma Andersson", "Lisa Hansson", "Frida Stenberg","Amanda Olsson"],
    correct: 3,
    image: "./assets/Profilbilder/amanda-olsson.jpg",
  },
  {
    name: "August Ronnle",
    //options: [, "Axel Björnfot", "Cedrik Von Heiroth", "Celil Tat","August Ronnle"],
    correct: 3,
    image: "./assets/Profilbilder/august-ronnle.jpg",
  },
  {
    name: "Axel Björnfot",
    //options: ["Daniel Palmdal", "Christopher Lindström", "Jerry Phuong", "Axel Björnfot"],
    correct: 3,
    image: "./assets/Profilbilder/axel-bjornfot.jpg",
  },
  {
    name: "Cedrik Von Heiroth",
    //options: ["Leo Eriksson", "Mehmet Yazgan", "Henriq Lood", "Cedrik Von Heiroth"],
    correct: 3,
    image: "./assets/Profilbilder/cedrik-von-heiroth.jpg",
  },
  {
    name: "Celil Tat",
   // options: ["Simon Bergstrand", "Sebastian Mineur", "Oskar Anderberg", "Celil Tat"],
    correct: 3,
    image: "./assets/Profilbilder/celil-tat.jpg",
  },
  {
    name: "Christina Mannerberg",
    //options: ["Elena Myadzeleva", "Elin Stenquist", "Emma Andersson", "Christina Mannerberg"],
    correct: 3,
    image: "./assets/Profilbilder/christina-mannerberg.jpg",
  },
  {
    name: "Christopher Lindström",
    //options: ["Christopher Lindström", "Johnny Lay", "Khaled Hassan", "Leo Eriksson"],
    correct: 3,
    image: "./assets/Profilbilder/christopher-lindstro╠êm.jpg",
  },
  {
    name: "Daniel Palmdal",
    //options: ["Daniel Palmdal", "Johan Markström", "Marko Zdravkovski", "Oliver Kellgren"],
    correct: 3,
    image: "./assets/Profilbilder/daniel-palmdal.jpg",
  },
  {
    name: "Elena Myadzeleva",
    //options: ["Elena Myadzeleva", "Hitomi Ishii Winberg", "Kyd Kitchaiya", "Linda Hultemark"],
    correct: 3,
    image: "./assets/Profilbilder/elena-myadzeleva.jpg",
  },
  {
    name: "Elin Stenquist",
    //options: ["Elin Stenquist", "Mona Khorasani", "Miranda Trang", "Lovisa Nordström"],
    correct: 3,
    image: "./assets/Profilbilder/elin-stenquist.jpg",
  },
  {
    name: "Emma Andersson",
    //options: ["Emma Andersson", "Saga Swahn", "Sara Mattisson", "Susanne Eneroth"],
    correct: 3,
    image: "./assets/Profilbilder/emma-andersson.jpg",
  },
  {
    name: "Frida Stenberg",
    //options: ["Frida Stenberg", "Sara Mattisson", "Susanne Eneroth", "Svitlana Rybakova"],
    correct: 3,
    image: "./assets/Profilbilder/frida-stenberg.jpg",
  },
  {
    name: "Henrik Lood",
    //options: ["Henrik Lood", "August Ronnle", "Oliver Kellgren", "Simon Bergstrand"],
    correct: 3,
    image: "./assets/Profilbilder/henrik-lood.jpg",
  },
  {
    name: "Hitomi Ishii Winberg",
    //options: ["Hitomi Ishii Winberg", "Isabella Bjelobrk", "Mikaela Nörrelökke", "Miranda Trang"],
    correct: 3,
    image: "./assets/Profilbilder/hitomi-winberg.jpg",
  },
  {
    name: "Isabella Bjelobrk",
    //options: ["Isabella Bjelobrk", "Amanda Olsson", "Linda Hultemark", "Pernilla Lundahl"],
    correct: 3,
    image: "./assets/Profilbilder/Isabella-bjelobrk.jpg",
  },
  {
    name: "Jerry Phuong",
    //options: ["Jerry Phuong", "Khaled Hassan", "Marko Zdravkovski", "Simon Bergstrand"],
    correct: 3,
    image: "./assets/Profilbilder/jerry-phuong.jpg",
  },
  {
    name: "Johan Markström",
    //options: ["Johan Markström", "Khaled Hassan", "Leo Eriksson", "Celil Tat"],
    correct: 3,
    image: "./assets/Profilbilder/johan-markstrom.jpg",
  },
  {
    name: "Johannes Hernehult",
    //options: ["Johannes Hernehult", "Jerry Phuong", "August Ronnle", "Axel Björnfot"],
    correct: 3,
    image: "./assets/Profilbilder/johannes-hernehult.jpg",
  },
  {
    name: "Johnny Lay",
    //options: ["Johnny Lay", "August Ronnle","Henrik Lood", "Johan Markström"],
    correct: 3,
    image: "./assets/Profilbilder/johnny-lay.jpg",
  },
  {
    name: "Khaled Hassan",
    //options: ["Khaled Hassan", "Leo Eriksson","Daniel Palmdal", "Johan Markström"],
    correct: 3,
    image: "./assets/Profilbilder/khaled-hassan.jpg",
  },
  {
    name: "Kyd Kitchaiya",
    //options: ["Kyd Kitchaiya", "Linda Hultemark","Mona Khorasani", "Pernilla Lundahl"],
    correct: 3,
    image: "./assets/Profilbilder/kyd-kitchaiya.jpg",
  },
  {
    name: "Leo Eriksson",
    //options: ["Leo Eriksson", "Cedrik Von Heiroth", "Christopher Lindström", "Henrik Lood"],
    correct: 3,
    image: "./assets/Profilbilder/leo-eriksson.jpg",
  },
  {
    name: "Linda Hultemark",
    //options: ["Linda Hultemark", "Cedrik Von Heiroth", "Christopher Lindström", "Henrik Lood"],
    correct: 3,
    image: "./assets/Profilbilder/linda-hultemark.jpeg",
  },
  {
    name: "Lisa Hansson",
    //options: ["Lisa Hansson", "Lovisa Nordström", "Isabella Bjelobrk", "Amanda Olsson"],
    correct: 3,
    image: "./assets/Profilbilder/lisa-hansson.jpg",
  },
  {
    name: "Lovisa Nordström",
    //options: ["Lovisa Nordström", "Mona Khorasani", "Sara Mattisson", "Saga Swahn"],
    correct: 3,
    image: "./assets/Profilbilder/lovisa-nordstrom.jpg",
  },
  {
    name: "Marko Zdravkovski",
    //options: ["Marko Zdravkovski", "Simon Bergstrand", "Sebastian Mineur", "Simon Bergstrand"],
    correct: 3,
    image: "./assets/Profilbilder/marko-zdravkovski.jpg",
  },
  {
    name: "Mehmet Ziya Yazgan",
    //options: ["Mehmet Ziya Yazgan", "August Ronnle", "Cedrik Von Heiroth", "Leo Eriksson"],
    correct: 3,
    image: "./assets/Profilbilder/mehmet-yazgan.jpg",
  },
  {
    name: "Mikaela Nörrelökke",
    //options: ["Mikaela Nörrelökke", "Miranda Trang", "Kyd Kitchaiya", "Pernilla Lundahl"],
    correct: 3,
    image: "./assets/Profilbilder/mikaela-norrelokke.jpg",
  },
  {
    name: "Miranda Trang",
    //options: ["Miranda Trang", "Lisa Hansson", "Hitomi Ishii Winberg", "Emma Andersson"],
    correct: 3,
    image: "./assets/Profilbilder/miranda-trang.jpg",
  },
  {
    name: "Mona Khorasani",
    //options: ["Mona Khorasani", "Saga Swahn", "Svitlana Rybakova", "Tricia Hartmann"],
    correct: 3,
    image: "./assets/Profilbilder/mona-khorasani.jpg",
  },
  {
    name: "Oliver Kellgren",
    //options: ["Oliver Kellgren", "Christopher Lindström", "Jerry Phuong", "Axel Björnfot"],
    correct: 3,
    image: "./assets/Profilbilder/oliver.kellgren.jpeg",
  },
  {
    name: "Oskar Anderberg",
    //options: ["Oskar Anderberg", "Simon Bergstrand", "Marko Zdravkovski", "Johnny Lay"],
    correct: 3,
    image: "./assets/Profilbilder/oskar-anderberg.jpg",
  },
  {
    name: "Pernilla Lundahl",
    //options: ["Pernilla Lundahl", "SZainab Ahmad", "Susanne Eneroth", "Miranda Trang"],
    correct: 3,
    image: "./assets/Profilbilder/pernilla-lundahl.jpg",
  },
  {
    name: "Pucha Stephanie Sayerz Olsen",
    //options: ["Pucha Stephanie Sayerz Olsen", "Kyd Kitchaiya", "Linda Hultemark", "Lovisa Nordström"],
    correct: 3,
    image: "./assets/Profilbilder/pucha-sayerz-olsen.jpg",
  },
  {
    name: "Saga Swahn",
    //options: ["Saga Swahn", "Tricia Hartmann", "Zainab Ahmad", "Mona Khorasani"],
    correct: 3,
    image: "./assets/Profilbilder/saga-swahn.jpg",
  },
  {
    name: "Sara Mattisson",
    //options: ["Sara Mattisson", "Emma Andersson", "Elena Myadzeleva", "Amanda Olsson"],
    correct: 3,
    image: "./assets/Profilbilder/sara-mattisson.jpg",
  },
  {
    name: "Sebastian Mineur",
    //options: ["Sebastian Mineur", "Oliver Kellgren", "Mehmet Ziya Yazgan", "Leo Eriksson"],
    correct: 3,
    image: "./assets/Profilbilder/sebastian-mineur.jpg",
  },
  {
    name: "Simon Bergstrand",
    //options: ["Simon Bergstrand", "Henrik Lood", "Johan Markström", "Christopher Lindström"],
    correct: 3,
    image: "./assets/Profilbilder/simon-bergstrand.jpg",
  },
  {
    name: "Susanne Eneroth",
    //options: ["Susanne Eneroth", "Pernilla Lundahl", "Miranda Trang", "Kyd Kitchaiya"],
    correct: 3,
    image: "./assets/Profilbilder/susanne_eneroth.jpeg",
  },
  {
    name: "Svitlana Rybakova",
    //options: ["Svitlana Rybakova", "Isabella Bjelobrk", "Hitomi Ishii Winberg", "Emma Andersson"],
    correct: 3,
    image: "./assets/Profilbilder/svitlana-rybakova.jpg",
  },
  {
    name: "Tricia Hartmann",
    //options: ["Tricia Hartmann", "Sara Mattisson", "Saga Swahn", "Mona Khorasani"],
    correct: 3,
    image: "./assets/Profilbilder/tricia-hartmann.jpg",
  },
  {
    name: "Zainab Ahmad",
    //options: ["Zainab Ahmad", "Christina Mannerberg", "Elin Stenquist", "Linda Hultemark"],
    correct: 3,
    image: "./assets/Profilbilder/zainab-ahmad.jpeg",
  },
];
//console.log(quiz[0])

// Variables //
const questionNumber = document.querySelector(".question-number");
const questionImage = document.querySelector("IMG");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicators");
const highScoresList = document.querySelector("#highScoresList")
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
let startButton = document.querySelector('#startButton')
const b = quiz.slice();

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let availableOptions1 = [];
let availableOptions2 = [];
let correctScore = 0;
let localHighscoresArray = [];
let correctAnswers = 0;
let wrongAnswers = 0;
let attempt = 0;
//let percent1 = 0;

//New Random Questions Array 
const setAvailableQuestions = () => {
  let res = quiz.sort(function(){
    return 0.5 - Math.random()
    })
    availableQuestions = res.slice(quiz, 15);
    console.log(availableQuestions);
    //console.log(availableQuestions[0])
}

const quizName = quiz.filter(function(student){
  return student.correct === 3;
}).map(function(student){
  return student.name;
})
         //console.log(typeof quizName)
quizName.forEach(function(name){
  availableOptions1.push(name);
})

const randomOption = () => {
  let opt = availableOptions1.sort(function(){
    return 0.5 - Math.random()
  }) 
  
  availableOptions2 = opt.slice(!availableOptions1.includes(currentQuestion.name), 3);
  
  let lastIndex = Object.keys(availableOptions2)[Object.keys(availableOptions2).length-1]
  
  availableOptions2[parseInt(lastIndex) +1] = currentQuestion.name
  console.log(availableOptions2)  

  //console.log(typeof availableOptions2)
}
 
//Call question from array
const getNewQuestion = () => {
    questionNumber.innerHTML =`Question ${questionCounter + 1} of ${15}`
    
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    questionImage.setAttribute("src", currentQuestion.image);
    
    const index1 = availableQuestions.indexOf(questionIndex);
    availableQuestions.splice(index1, 1);
    //console.log(currentQuestion.name)
    availableOptions2.push(currentQuestion.name)
    randomOption();

    const optionLen = availableOptions2.length;

    for(let i = 0; i<optionLen; i++){
        availableOptions.push(i);
    };
    optionContainer.innerHTML = '';
    let animationDelay = 0.2;
    /* Random Options */
    for(let i = 0; i<optionLen; i++){
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        const index2 = availableOptions.indexOf(optionIndex);
        availableOptions.splice(index2,1);
        const option = document.createElement("div");
        option.innerHTML = availableOptions2[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.2;
        option.className = "option";
        optionContainer.appendChild(option);
        option.setAttribute("onclick", "getResult(this)");
    };
    
    questionCounter++;
};

//Get Result
const getResult = (e) => {
  
    const id = parseInt(e.id);
    if(id === 3){
        e.classList.add("correct");
        updateAnswerIndicator("correct");
        correctAnswers++;
        console.log("correct: " + correctAnswers)
    }else {
        e.classList.add("wrong");
        updateAnswerIndicator("wrong");
        const optionLen = optionContainer.children.length;
        for(let i = 0; i<optionLen; i++){
            if(parseInt(optionContainer.children[i].id) === 3){
                optionContainer.children[i].classList.add("correct");
            }
        }
    }
    attempt++;
       unclickableOptions()
}

const unclickableOptions = () => {
    const optionLen = optionContainer.children.length;
    for(let i=0; i<optionLen; i++){
        optionContainer.children[i].classList.add("already-answered");
    }
}

//For All questions true or false indicators
const answersIndicator = () => {
  answersIndicatorContainer.innerHTML = '';
  const totalQuestion = 15;
  for (let i = 0; i < totalQuestion; i++) {
    const indicator = document.createElement("div");
  
    answersIndicatorContainer.appendChild(indicator);
  }
}

const updateAnswerIndicator = (markType) => {
    answersIndicatorContainer.children[questionCounter-1].classList.add(markType);
  
}

const next = () => {
    if(questionCounter === 15){
        console.log("quiz over");
        quizOver();
    }else {
        getNewQuestion();
        
    }
};

const quizOver = () =>{
  quizBox.classList.add("hide");
  resultBox.classList.remove("hide");
  
  quizResult();
}

//Result modal
const quizResult = () => {
  resultBox.querySelector(".total-question").innerHTML = 15;
  resultBox.querySelector(".total-attempt").innerHTML = attempt;
  resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
  resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
  
  percent = (correctAnswers / 15) * 100;
  //percent1 = percent;
  localHighscoresArray.push(percent);
  resultBox.querySelector(".percentage").innerHTML = percent.toFixed() + " % ";
  resultBox.querySelector(".total-score").innerHTML =
  correctAnswers + " / " + 15;

  const maxValue = Math.max(...localHighscoresArray).toFixed();
  //localHighscoresArray.reduce(acc, max) => acc = acc > max. 
  resultBox.querySelector(".high-score").innerHTML = `${maxValue}%`;
   
  updateAnswerIndicator();
}

const resetQuiz = () => {
  questionCounter = 0;
  correctAnswers = 0;
  attempt = 0;
  availableQuestions = []; // so important
}

const tryAgain = () => {
  resultBox.classList.add("hide");
  quizBox.classList.remove("hide");
  resetQuiz();
  startQuiz();
}

const goToHome = () => {
  resultBox.classList.add("hide");
  homeBox.classList.remove("hide");
  resetQuiz();
} 

const clearHighscores = () => {
  localHighscoresArray = [];
  localStorage.setItem("highscore", localHighscoresArray);
  loadHighScores();
}

function startQuiz(){ 
    homeBox.classList.add("hide");
    quizBox.classList.remove("hide");
    setAvailableQuestions();
    getNewQuestion();
    answersIndicator();
    //randomOption();
};

startButton.addEventListener('click', startQuiz);