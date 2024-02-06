function addition(){
    let int1 = document.getElementById("first-number").value;
    let int2 = document.getElementById("second-number").value;
    let output = document.getElementById("output");
    let ans = Number(int1) + Number(int2);
    output.innerHTML= `Duh the answer is ${ans}`;
    document.getElementById("colored").style.background = "cyan";
    if (ans < 0){
        output.style.color = "red";
    }
}

function subtraction(){
    let int1 = document.getElementById("first-number").value;
    let int2 = document.getElementById("second-number").value;
    let output = document.getElementById("output");
    let ans = Number(int1) - Number(int2);
    output.innerHTML= `Duh the answer is ${ans}`;
    document.getElementById("colored").style.background = "cyan";
    if (ans < 0){
        output.style.color = "red";
    }
}

function multiplication(){
    let int1 = document.getElementById("first-number").value;
    let int2 = document.getElementById("second-number").value;
    let output = document.getElementById("output");
    let ans = Number(int1) * Number(int2);
    output.innerHTML= `Duh the answer is ${ans}`;
    document.getElementById("colored").style.background = "cyan";
    if (ans < 0){
        output.style.color = "red";
    }
}

function division(){
    let int1 = document.getElementById("first-number").value;
    let int2 = document.getElementById("second-number").value;
    let output = document.getElementById("output");
    let ans = Number(int1) / Number(int2);
    output.innerHTML= `Duh the answer is ${ans}`;
    document.getElementById("colored").style.background = "cyan";
    if (ans < 0){
        output.style.color = "red";
    }
}

function clearInput(){
    let inp1 = document.getElementById("first-number");
    let inp2 = document.getElementById("second-number");
    let output = document.getElementById("output");
    document.getElementById("colored").style.background = "yellow";
    inp1.value = "";
    inp2.value = "";
    output.innerHTML = "";
}
function power(){
    let int1 = document.getElementById("first-number").value;
    let int2 = document.getElementById("second-number").value;
    let output = document.getElementById("output");
    let out = 1;
    document.getElementById("colored").style.background = "cyan";
    for (let i = 0; i < int2; i++){
        out *= int1;
    }
    output.innerHTML = `${out}`;

}