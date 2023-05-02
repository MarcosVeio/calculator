const calc = document.getElementById("calc");
function openCalc() {
  calc.style.display = "block";
}

function closeCalc() {
  calc.style.display = "none";
}

function calculate() {
  const fNumber = parseInt(document.getElementById("fNumber").value);
  const lNumber = parseInt(document.getElementById("lNumber").value);
  const operation = document.getElementById("oper").value;
  const resultNumber = document.getElementById("resultNumber");

  let result = 0;

  switch (operation) {
    case "sum":
      result = fNumber + lNumber;
      break;
    case "sub":
      result = fNumber - lNumber;
      break;
    case "div":
      result = fNumber / lNumber;
      break;
    case "mult":
      result = fNumber * lNumber;
      break;

    default:
      break;
  }

  resultNumber.innerHTML = result;
}

function resetCalculator() {
  document.getElementById("fNumber").value = 0;
  document.getElementById("lNumber").value = 0;
  document.getElementById("oper").value = "sum";
  document.getElementById("resultNumber").innerHTML = 0;
}
