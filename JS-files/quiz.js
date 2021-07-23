console.log("running quiz")

let database=[
    {
       question:"1. If a triangle has angles 135', 15', 30'. Is it an obtuse triangle?",
       choice:{
            a:"YES",
            b:"NO"
       },
       answer:'a'
    },
    {
       question:"2. If a triangle has angles 115', 25', 40'. Is it an acute triangle?",
       choice:{
            a:"YES",
            b:"NO"
       },
       answer:'b'
    },
    {
       question:"3. An equilateral triangle has three equal lengths, and all the angles are equal which means they are each 60°.",
       choice:{
          a:"YES",
          b:"NO"
       },
       answer:'a'
    },
    {
       question:"4. A scalene triangle has three different length sides, and three different angles.",
       choice:{
          a:"TRUE",
          b:"FALSE"
       },
       answer:'a'
    },
    {
       question:"5. An triangle has 2 equal angles, which are the angles opposite the 2 equal sides is?",
       choice:{
          a:"RIGHT ANGLE",
          b:"ISOCELES",
          c:"EQUILATERAL"
       },
       answer:'b'
    },
    {
        question:"6. An exterior angle of a triangle is equal to the sum of the two opposite interior angles.",
        choice:{
           a:"RIGHT",
           b:"WRONG",
        },
        answer:'a'
    },
    {
        question:"7. The perimeter of an equilateral triangle is 15cm. What is the length of one side?",
        choice:{
           a:"15cm",
           b:"45cm",
           c:"5cm"
        },
        answer:'a'
     }
 ]
 

function generateQuiz(questions,showcase,result,check){
    function showQuestions(questions,showcase){
        var output=[]
        var answers
        for(let i=0;i<questions.length;i++){
            answers=[];
            for(eachChoice in questions[i].choice){
                answers.push('<label>'
                + '<input type="radio" name="question'+i+'" value="'+eachChoice+'">'
                + questions[i].choice[eachChoice]
            + '</label>')
            }
            output.push(`<div class="top"><div class="questions"> ${questions[i].question}</div>
            <div class="answers">${answers.join('')}</div></div>`)            
        }
        output.forEach(element => {
            showcase.innerHTML+=element
        });
        console.log(output)
    }
    
    function showResults(questions,showcase,result){
        let answers_container=showcase.querySelectorAll(".answers")
        var score=0;
        var selected=0;
        let user_answer='';
        for(let i=0;i<questions.length;i++){
            user_answer=(answers_container[i].querySelector('input[name=question'+i+']:checked')).value;
            if(user_answer){
                selected++;
                if(user_answer===questions[i].answer){
                    score++;
                }
            }
            if(selected===6){
                check.style.display='none'
            }
            
        }
        result.innerHTML=`Score = ${score}`
    }

    showQuestions(questions, showcase);
    check.addEventListener('click',()=>{
        result.style.display='block';
        showResults(questions, showcase, result);
    })
   
}
const check=document.querySelector("#submit")
let showcase=document.querySelector("#quiz")
let result=document.querySelector(".output_box")

generateQuiz(database,showcase,result,check)
