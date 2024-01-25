let addToScreen = (dato) => {
  document.getElementById("screen").value += dato;
};

let clearScreen = () => {
  document.getElementById("screen").value = "";
};

let calculate = () => {
  let result = "Error";

  let operation = document.getElementById("screen").value;

  let checkOperation = (operation) => {
    let ok = true;
    let pos = 0;
    let operator = 0;

    if (
      isNaN(operation[operation.length - 1]) ||
      operation[0] == "×" ||
      operation[0] == "÷" ||
      (isNaN(operation[0]) && isNaN(operation[1]))
    ) {
      ok = false;
    } else {
      for (let i = 0; i < operation.length - 1 && ok; i++) {
        if (!isNaN(operation[i]) && isNaN(operation[i + 1])) {
          operator++;
          if (operator > 1) {
            ok = false;
          }
        }
        if (isNaN(operation[i]) && isNaN(operation[i + 1])) {
          if (
            ((operation[i] == "-" || operation[i] == "+") &&
              (operation[i + 1] == "×" || operation[i + 1] == "÷")) ||
            (operation[i] == "×" && operation[i + 1] == "÷") ||
            (operation[i] == "÷" && operation[i + 1] == "×")
          ) {
            ok = false;
          } else {
            pos++;
            if (pos == 2) {
              ok = false;
            }
          }
        }
      }
    }

    return ok;
  };

  console.log(checkOperation(operation));
  if (checkOperation(operation)) {
    let operatorPosition = -1;
    let firstNum = 0;
    let secondNum = 0;
    for (let i = 0; i < operation.length && operatorPosition == -1; i++) {
      if (!isNaN(operation[i]) && isNaN(operation[i + 1])) {
        operatorPosition = i + 1;
        firstNum = parseInt(operation.substring(0, operatorPosition));
        secondNum = parseInt(operation.substring(operatorPosition + 1));
      }
    }

    switch (operation[operatorPosition]) {
      case "+":
        result = firstNum + secondNum;
        break;
      case "-":
        result = firstNum - secondNum;
        break;
      case "×":
        result = firstNum * secondNum;
        break;
      case "÷":
        if (secondNum != 0) {
          result = firstNum / secondNum;
        }
        break;
    }
  }

  if (result != parseInt(result) && result != "Error") {
    result = result.toFixed(2);
  }

  document.getElementById("screen").value = result;
};

document.getElementsByClassName;

/*
    Operaciones correctas:

    1+2
    1*63
    365471*889412
    245656/51223
    3*-2
    -9*-2
    -1/-9
    -5*14
    -1--1
    -1750*-14


    //Operador: el primer simbolo no  numérico seguido 
    //de un símbolo numerico

    //isNaN() -> true -> no es un  numero
    //isNaN() -> false -> si que es un  numero


*/

/*
    Operacioens que van a dar E de error
    *** NO HAY DECIMALES

    3+4+5
    /9*3
    *9*3
    4-/6
    7* /  *5
    -*5

*/

/*
//ejemplo de operacion
    let operation = "-1/-6";

    -1
    /
    -6

*/
