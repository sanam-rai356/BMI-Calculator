let btn = document.getElementById("btn");
let weightSpan = document.getElementById("weightSpan");
let heightSpan = document.getElementById("heightSpan");
let resultSpan = document.getElementById("resultSpan");

btn.addEventListener('click',()=>{
    let result = document.getElementById("result");
    let weightvalue = document.getElementById("weight").value;
    let numweightvalue = Number(weightvalue);

    let heightvalue = document.getElementById("height").value
    let numheightvalue = Number(heightvalue);

    if(weightvalue===""){
        weightSpan.innerHTML="Enter Weight (in KG)"
    }else if(heightvalue===""){
        heightSpan.innerHTML="Enter Height (in METER)";

    }else{
        let Mulnumheightvalue = numheightvalue*numheightvalue;
        // console.log(Mulnumheightvalue)
    
        let FinalBmiValue = numweightvalue/Mulnumheightvalue;
        let FloorFinalBmiValue = Math.floor(FinalBmiValue);
        if(FloorFinalBmiValue<18){
            resultSpan.innerHTML="You are underweight";
        }else if(FloorFinalBmiValue>=18 && FloorFinalBmiValue<=24){
            resultSpan.innerHTML="You are fit";

        }else if(FloorFinalBmiValue>24 && FloorFinalBmiValue<=29){
            resultSpan.innerHTML="You are Overweight";
        }else{
            resultSpan.innerHTML="You are way to much overweight and start exercising";

        }
        result.value = `Your BMI is = ${FloorFinalBmiValue}`;
        
    }


})