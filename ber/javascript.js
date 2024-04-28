function calculate(kelishi) {
    
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    
    let javobi;


    if (kelishi === '+') {
        javobi = num1 + num2;
    
    }
     else if (kelishi === '-') {
        javobi = num1 - num2;
    
    }
     else if (kelishi === '*') {
        javobi = num1 * num2;
    
    }
     else if (kelishi === '/') {
        javobi = num1 / num2;
    
    }

    
    document.getElementById('javobi').innerText = 'Natija: ' + javobi;
}