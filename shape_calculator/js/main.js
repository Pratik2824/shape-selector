function gotoStep2() {
    let shapeSelected = document.querySelector('input[name="shapes"]:checked') ;
    let nextStep1 = document.getElementById('step-1');
    let nextStep2 = document.getElementById('step-2');
    let nextStep3 = document.getElementById('step-3');
    let optionSelected = document.querySelector("span.optionSelected");
    let inputsAreaOne = document.getElementById("inputsAreaOne");
    let inputsAreaTwo = document.getElementById("inputsAreaTwo");
    let input1 = document.getElementById("value1");
    let input2 = document.getElementById("value2");
    let input3 = document.getElementById("value3");
    let resultOfShape = document.getElementById("resultOfShape");
    let content = document.getElementById("steps-content");

      
        if(shapeSelected) {
            let resultShape = shapeSelected.value;
            nextStep1.style.display = "none";
            nextStep2.style.display = "block";
            console.log(resultShape);
            optionSelected.innerHTML = resultShape;

            if(resultShape == "rectangle") {
                inputsAreaTwo.style.display = "block";
                $("#next-Step3").on("click",function(){
                    if(input2.value == "" || input2.value == null && input3.value == "" || input3.value == null) {
                        alert("Input Can't Be Empty");
                    } else if(isNaN(input2.value) || isNaN(input3.value)) {
                            alert("enter number only");
                        }
                        else {
                            console.log (input2.value+ " "+input3.value);
                            let res = rectangle(input2.value, input3.value);
                            console.log(res);
                            nextStep2.style.display = "none";
                            nextStep3.style.display = "block";
                            content.innerText = "You have calculated the area of a "+resultShape+ " with a length: "+input2.value+ " and breadth: "+input3.value+" . Below is your result:";
                            resultOfShape.innerText = "The Are is "+res;
                        }
                });
                
            }

            if(resultShape == "square") {
                inputsAreaOne.style.display = "block";
                $("#next-Step3").on("click",function(){
                    if(input1.value == "" || input1.value == null) {
                        alert("Input Can't Be Empty");
                    } else if(isNaN(input1.value)) {
                            alert("enter number only");
                        }
                        else {
                            console.log (input1.value);
                            let res = square(input1.value);
                            console.log(res);
                            nextStep2.style.display = "none";
                            nextStep3.style.display = "block";
                            content.innerText = "You have calculated the area of a "+resultShape+ " with a size: "+input1.value+" . Below is your result:";
                            resultOfShape.innerText = "The Are is "+res;
                        }
                });
            }

            if(resultShape == "circle") {
                inputsAreaOne.style.display = "block";
                $("#next-Step3").on("click",function(){
                    if(input1.value == "" || input1.value == null) {
                        alert("Input Can't Be Empty");
                    } else if(isNaN(input1.value)) {
                            alert("enter number only");
                        }
                        else {
                            console.log (input1.value);
                            let res = circle(input1.value);
                            console.log(res);
                            nextStep2.style.display = "none";
                            nextStep3.style.display = "block";
                            content.innerText = "You have calculated the area of a "+resultShape+ " with a radius: "+input1.value+" . Below is your result:";
                            resultOfShape.innerText = "The Are is "+res;
                        }
                });
            }

            if(resultShape == "ellipse") {
                inputsAreaTwo.style.display = "block";
                $("#next-Step3").on("click",function(){
                    if(input2.value == "" || input2.value == null && input3.value == "" || input3.value == null) {
                        alert("Input Can't Be Empty");
                    } else if(isNaN(input2.value) || isNaN(input3.value)) {
                            alert("enter number only");
                        }
                        else {
                            console.log (input2.value+ " "+input3.value);
                            let res = ellipse(input2.value, input3.value);
                            console.log(res);
                            nextStep2.style.display = "none";
                            nextStep3.style.display = "block";
                            content.innerText = "You have calculated the area of a "+resultShape+ " with a X: "+input2.value+ " and Y: "+input3.value+" . Below is your result:";
                            resultOfShape.innerText = "The Are is "+res;
                        }
                });
            }
            

        } 
        else {
            alert("select any one shape first!!!!")
        } 
    
}

function rectangle(l,b) {
let rectangleShape = l * b;
return rectangleShape;
}

function square(s) {
let squareShape = s * s;
return squareShape;
}

function circle(r) {
let circleShape = Math.PI * r * r;
return circleShape.toFixed(2);
}

function ellipse(x,y) {
let ellipseShape = Math.PI * x * y;
return ellipseShape.toFixed(2);
}