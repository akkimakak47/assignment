<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Basic Calculator</title>
<style>
    button {
        padding: 10px 20px;
        font-size: 18px;
        margin: 5px;
    }
</style>
</head>
<body>

<h2>Basic Calculator</h2>

<label for="value1">Enter 1st number:</label>
<input type="number" id="value1"><br><br>

<label for="value2">Enter 2nd number:</label>
<input type="number" id="value2"><br><br>

<button onclick="selectOperator('+')">+</button>
<button onclick="selectOperator('-')">-</button>
<button onclick="selectOperator('')"></button><br>
<button onclick="selectOperator('/')">/</button>
<button onclick="selectOperator('%')">%</button>

<button onclick="calculate()">=</button><br><br>

<label for="result">Result:</label>
<input type="text" id="result" readonly>

<script>
    let value1 = document.getElementById('value1');
    let value2 = document.getElementById('value2');
    let operator = '';

    function selectOperator(op) {
        operator = op;
    }

    function calculate() {
        let num1 = parseFloat(value1.value);
        let num2 = parseFloat(value2.value);
        let result = document.getElementById('result');

        switch (operator) {
            case '+':
                result.value = num1 + num2;
                break;
            case '-':
                result.value = num1 - num2;
                break;
            case '*':
                result.value = num1 * num2;
                break;
            case '/':
                result.value = num1 / num2;
                break;
            case '%':
                result.value = num1 % num2;
                break;
            default:
                result.value = "Invalid operator";
        }
    }
</script>

</body>
</html>