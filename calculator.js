
function sumar() {
    const forma = document.getElementById('forma');
    let firstNumber = forma['firstNumber'];
    let secondNumber = forma['secondNumber'];
    let result = parseInt(firstNumber.value) + parseInt(secondNumber.value);
    console.log(result);
    if(isNaN(result)){
        result = 'La operacion debe de ser un numero';
    }
    document.getElementById('result').innerHTML = `Resultado de la suma ${result}`;
}

