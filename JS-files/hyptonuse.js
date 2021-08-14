console.log("running hyptonuse")

const formHyp=document.querySelector("#formHyp")
formHyp.addEventListener("submit",(e)=>{
   let opposite=Number(document.querySelector("#oppositeSide").value)
   let adjecent=Number(document.querySelector("#adjecentSide").value)
   let output=document.querySelector(".output_box");
   output.style.display='block';
   e.preventDefault()
   let hyptonuse=Math.sqrt(Math.pow(opposite,2)+Math.pow(adjecent,2)).toFixed(2);
   output.innerHTML=`Hyptonuse = ${hyptonuse}`
})