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
        Question:"Who is the God of Cricket",
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
        Question:"Who is the God of Cricket",
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
        Question:"Who is the God of Cricket",
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
    }
    else{
        selectedButton.classList.add('incorrect');
    }

}
next_btn.addEventListener('click', add);
start();