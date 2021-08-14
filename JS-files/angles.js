console.log("Now running angles")

const checker=document.querySelector("#checker");
let output_div=document.querySelector(".output_box")
const form=document.querySelector("#form")


form.addEventListener("submit",(e)=>{
    let angle_one=document.querySelector("#angle_one");
    let angle_two=document.querySelector("#angle_two");
    let angle_three=document.querySelector("#angle_three");
    output_div.style.display='block';

    angle_one=Number(angle_one.value);
    angle_two=Number(angle_two.value);
    angle_three=Number(angle_three.value);
    let sum_of_three=angle_one+angle_two+angle_three;

    if(angle_one===0 || angle_two ===0|| angle_three ===0){
        output_div.innerHTML="Please note than an each angle should be greater than 0'";
        
    }else if(sum_of_three<180 || sum_of_three > 180){
        output_div.innerHTML="OOPS! These angles cannot form triangle, Note that the sum of 3 angles should be equal 180 degrees.";
    }else{
        output_div.innerHTML="YAY! We can form a triangle using these."
    }
    e.preventDefault()
})