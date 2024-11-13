function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById("operator").value
    if (!isNaN(num1) && !isNaN(num2)) {
        var sum = num1 + num2;
        document.getElementById('result').innerText = sum;
    } else if(!sNaN(num1)&& !isNaN(num2)){
        var sum = num1 - num2;
        document.getElementById('result').innerText = sum;
    } else if(!isNaN(num1)&& !isNaN(num2)){
        var sum = num1 * num2;
        document.getElementById("result").innerText = sum;
    }else if(!isNaN(num1)&& !isNaN(num2)){
        var sum = num1 / num2;
        document.getElementById("result").innerText = sum;
    }
    document.getElementById("result").innerText = "result:" + result;
    {
        
    }
}