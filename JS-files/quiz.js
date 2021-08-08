
let quizForm=document.querySelector(".quizForm")
const output=document.querySelector("#output_quiz")
const submitQuiz=document.querySelector("#submit")
const quizContainer=document.querySelectorAll(".quiz_container")

let correctAns=["YES","ISOCELES","RIGHT","15cm","TRUE","YES"]

quizForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    let index=0;
    let score=0;
    let formResults=new FormData(quizForm)

    for(let eachEntry of formResults.values()){
        if(eachEntry===correctAns[index]){
            score++;
            quizContainer[index].style.backgroundColor='#82d482'
        }else{
            quizContainer[index].style.backgroundColor='#ffabab'
        }
        index++
    }
    
    output.style.display='block';
    output.innerText=`Your total score is ${score}`;
    submitQuiz.style.display='none'
})

