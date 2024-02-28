const question1=[
    {
        Question:"Who is the God of Cricket?",
        Option:[
            {
                text:"Sachin tendulkar",
                correct:true
            },
            {
                text:"Rohit Sharma",
                correct:false
            },
            {
                text:"MS Dhoni",
                correct:false
            },
            {
                text:"Virat Kohli",
                correct:false
            }
        ]
    },
    {
        Question:"Which country did India score their lowest total against in the history of the ODI World Cup?",
        Option:[
            {
                text:"Australia",
                correct:true
            },
            {
                text:"England",
                correct:false
            },
            {
                text:"South Africa",
                correct:false
            },
            {
                text:"New Zealand",
                correct:false
            }
        ]
    },
    {
        Question:"Who was the wicket-keeper of the Indian Cricket Team during the World Cup 2003 tournament?",
        Option:[
            {
                text:"Parthiv Patel",
                correct:false
            },
            {
                text:"Nayan Mongia",
                correct:false
            },
            {
                text:"MS Dhoni",
                correct:false
            },
            {
                text:"Rahul Dravid",
                correct:true
            }
        ]
    },
    {
        Question:" In which year were the World Cup matches reduced to 50 overs from the previous 60 overs?",
        Option:[
            {
                text:"1983",
                correct:false
            },
            {
                text:"1987",
                correct:true
            },
            {
                text:"1979",
                correct:false
            },
            {
                text:"1992",
                correct:false
            }
        ]
    }
]

const question = document.getElementById('question');
const options = document.getElementById('options');
const next_btn = document.getElementById('next_btn');

let current=0;
let score=0;
function start(){
    current=0;
    score=0;
    next_btn.innerText="Next";
    add();
}

function add(){
    console.log(current)
    reset();
    let firstShow = question1[current];
    console.log(firstShow)
    question.innerText= `${current+1}  ${firstShow.Question}`;
    firstShow.Option.forEach(option=>{
        let optionButton = document.createElement('button');
        
        optionButton.textContent=option.text;
        optionButton.classList.add('btn1');
        options.appendChild(optionButton);
        if(option.correct){
            optionButton.dataset.correct=option.correct;
        }
        optionButton.addEventListener("click", handleCheck);
    })
    
}
function reset(){
    next_btn.style.display="none";
    while(options.firstChild){
        options.removeChild(options.firstChild);
    }
}
function handleCheck(e){
    let selectedButton = e.target;
    let isCorrect = selectedButton.dataset.correct==="true";
    if(isCorrect){
        selectedButton.classList.add('correct');
        score++;
    }
    else{
        selectedButton.classList.add('incorrect');
    }
    Array.from(options.children).forEach(value =>{
        if(value.dataset.correct==="true"){
            value.classList.add("correct")
        }
        value.disabled=true;
    });
    next_btn.style.display="block";

}
next_btn.addEventListener('click', ()=>{
    if(current<question1.length){
        handleNextButton();
    }
    else{
        start();
    }
});
function scoreShow(){
    reset();
    question.innerText= `Your score is ${score} out of ${question1.length}`
    next_btn.style.display="block";
    next_btn.innerHTML="Play again";
}

function handleNextButton(){
    current++;
    if(current<question1.length){
        add();
    }
    else{
        scoreShow();
    }
}
start();