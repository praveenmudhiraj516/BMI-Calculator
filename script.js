//quiz 2 shopping cart example
// let paraEle = document.createElement("p");
let spanEle1 = document.createElement("p");
let inputWeight = document.getElementById('inputWeight');
let inputHeight = document.getElementById("inputHeight");
let resultBtnCon = document.getElementById("result-container");
let calcuBtn = document.getElementById("calBtn");
let errmsg = document.getElementById("msg");
let divEle = document.createElement("div");
let h1Ele = document.createElement("h1");
let paraEle = document.createElement("p");
let spanEle2 = document.createElement("p");
let spanEle3 = document.createElement("p");
let h2Ele = document.createElement("h1");
// let h2Ele = document.createElement("h1");
let spanEle = document.createElement("p");
// let paraEle = document.createElement("p");

calcuBtn.addEventListener("click", function() {
    let weight = inputWeight.value;
    let height = inputHeight.value;

    resultBtnCon.style.textAlign = "center";
    resultBtnCon.appendChild(divEle);
    divEle.textContent = "";

    if (inputWeight.value === "" || inputHeight.value === "") {
        errmsg.textContent = "Please enter valid positive numbers for both weight and height.";
        errmsg.style.color = "red";
        divEle.textContent = "";

    } else {
        errmsg.textContent = "";
        let BMIvalue = (weight / height ** 2) * 10000;

        divEle.textContent = "";


        divEle.appendChild(h1Ele);
        h1Ele.textContent = "Your BMI Result";
        inputWeight.value = "";
        inputHeight.value = "";

        if (BMIvalue < 18.5) {
            console.log('under weight');
            divEle.appendChild(h2Ele);
            h2Ele.textContent = BMIvalue.toFixed(1);
            h2Ele.style.color = "gold";

            divEle.appendChild(paraEle);
            paraEle.textContent = "under weight";
            paraEle.style.color = "gold";

        } else if (BMIvalue >= 18.5 && BMIvalue <= 24.9) {
            console.log('Normal weight');

            divEle.appendChild(h2Ele);
            h2Ele.textContent = BMIvalue.toFixed(1);
            h2Ele.style.color = "gold";

            divEle.appendChild(paraEle);
            paraEle.textContent = "Normal weight";
            paraEle.style.color = "gold";
        } else if (BMIvalue >= 25 && BMIvalue <= 29.9) {
            console.log('Over weight');
            // let h2Ele = document.createElement("h1");
            divEle.appendChild(h2Ele);
            h2Ele.textContent = BMIvalue.toFixed(1);
            h2Ele.style.color = "gold";

            divEle.appendChild(paraEle);
            paraEle.textContent = "Over weight";
            paraEle.style.color = "gold";


        } else {
            console.log('Obesity');
            // let h2Ele = document.createElement("h1");
            divEle.appendChild(h2Ele);
            h2Ele.textContent = BMIvalue.toFixed(1);
            h2Ele.style.color = "gold";

            // let paraEle = document.createElement("p");
            divEle.appendChild(paraEle);
            paraEle.textContent = "Obesity";
            paraEle.style.color = "gold";
        }
        // console.log(weight)
        console.log(BMIvalue)









        divEle.appendChild(spanEle);
        spanEle.textContent = "underweight:< 18.5";
        spanEle.style.color = "grey";

        divEle.appendChild(spanEle1);
        spanEle1.textContent = "normalweight: 18.5 - 24.9";
        spanEle1.style.color = "grey";

        divEle.appendChild(spanEle2);
        spanEle2.textContent = "over weight:25 - 29.9";
        spanEle2.style.color = "grey";

        divEle.appendChild(spanEle3);
        spanEle3.textContent = "obesity: BMI of 30 or greater";
        spanEle3.style.color = "grey";



    }


});