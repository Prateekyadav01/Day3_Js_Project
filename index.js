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

function add(){
    console.log(current)
    let firstShow = question1[current];
    // question.innerText=null;
    question.innerText= `${current+1}  ${firstShow.Question}`;
    options.innerHTML = '';
    firstShow.Option.forEach(option=>{
        let optionButton = document.createElement('button');
        
        optionButton.textContent=option.text;
        optionButton.addEventListener("click", () => handleCheck(option.correct));
        options.appendChild(optionButton)
    })
    
}
function handleCheck(value){
    if(value){
        score++;
        options.style.backgroundColor="green"
    }
   current++;
    if(current<question1.length){
            add();
    }
}
next_btn.addEventListener('click', add);
add();