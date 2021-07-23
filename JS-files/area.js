console.log("running areas'")

const clicked=document.querySelectorAll("input[type='radio']")
const forms=document.querySelectorAll(".forms")
forms.forEach(f =>{
    f.addEventListener("submit",(e)=>{
        e.preventDefault()
    })
})

clicked.forEach((element) => {
    element.addEventListener("change",(e)=>{
        if(element.checked===true){
            if(e.target.classList.contains("check_one")){
                first_display(e)
            }else if(e.target.classList.contains("check_two")){
                second_display(e)
            }
            else if(e.target.classList.contains("check_three")){
                third_display(e)
            }
        }
    })
});


let output=document.querySelector(".output_box");
let input_one=document.querySelector("#base_height")
let input_two=document.querySelector("#given_lengths")
let input_three=document.querySelector("#sides_angle")

input_one.style.display="none";
input_two.style.display="none";
input_three.style.display="none";
output.style.display="none";

function first_display(){
    input_one.style.display="flex";
    input_two.style.display="none";
    input_three.style.display="none";
    output.style.display="block";
    output.innerHTML=`<h3>Area= 1/2*base*height</h3>`;

    let sumbit_one=document.querySelector("#btn1")
    sumbit_one.addEventListener("click",()=>{
        let base=document.querySelector("#base");
        let height =document.querySelector("#height");
        base=Number(base.value);
        height=Number(height.value);
        
        if(base<0.0001 || height<0.0001){
            output.innerHTML="Please enter valid data to process."
            setTimeout(()=>{
                output.innerHTML=`<h3>Area= 1/2*base*height</h3>`;
            },2500)
        }
        else{
            output.innerHTML=`Area=${0.5*base*height}`
        }
    })  
}
function second_display(){
    input_one.style.display="none"
    input_three.style.display="none"
    input_two.style.display="flex";
    output.style.display="block";
    output.innerHTML=`<h3>Area= √s(s-a)(s-b)(s-c)</h3>`;
    
    let sumbit_two=document.querySelector("#btn2")
    sumbit_two.addEventListener("click",()=>{
        let a=document.querySelector("#side1")
        let b=document.querySelector("#side2")
        let c=document.querySelector("#side3")
        a=Number(a.value)
        b=Number(b.value)
        c=Number(c.value)
        if((a+b)>c && (b+c)>a && (c+a)>b){
            const s=(a+b+c)/2;
            const area=Math.sqrt((s*(s-a)*(s-b)*(s-c))).toFixed(4)
            output.innerHTML=`Area=${area}`
        }else{
            output.innerHTML=`Please enter side lengths such that sum of two sides is greater than third side`;
            setTimeout(() => {
                output.innerHTML=`<h3>Area= √s(s-a)(s-b)(s-c)</h3>`;
            }, 3000);
        }
    })
}
function third_display(){
    input_one.style.display="none"
    input_two.style.display="none";
    input_three.style.display="flex";
    output.style.display="block";
    output.innerHTML=`<h3>Area= 1/2*b*c*sin(A)</h3>`;

    const  sumbit_three=document.querySelector("#btn3")
    sumbit_three.addEventListener("click",()=>{
        let a=document.querySelector("#sideA_one")
        let b=document.querySelector("#sideA_two")
        let c=document.querySelector("#angle");
        a=Number(a.value)
        b=Number(b.value)
        c=Number(c.value);
        if(c>360 || c<0){
            output.innerHTML=`Angle cannot exceed 360 deg`
            setTimeout(()=>{
                output.innerHTML=`<h3>Area= 1/2*b*c*sin(A)</h3>`;
            },2500)
        }else if(a<0.0001 || b<0.0001){
            output.innerHTML=`Value cant be less than 0`
            setTimeout(()=>{
                output.innerHTML=`<h3>Area= 1/2*b*c*sin(A)</h3>`;
            },2500)
        }else{
            const area=0.5*a*b*Math.sin(c)
            output.innerHTML=`<h3>Area=${area}`;
        }
    })
}