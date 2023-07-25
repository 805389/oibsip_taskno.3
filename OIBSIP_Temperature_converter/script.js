function convert(unit) {
    const celsiusInput = document.getElementById('celsiusInput');
    const fahrenheitInput = document.getElementById('fahrenheitInput');
  
    if (unit === 'celsius') {
      const celsiusValue = parseFloat(celsiusInput.value);
      const fahrenheitValue = (celsiusValue * 9/5) + 32;
      fahrenheitInput.value = isNaN(fahrenheitValue) ? '' : fahrenheitValue.toFixed(2);
    } else if (unit === 'fahrenheit') {
      const fahrenheitValue = parseFloat(fahrenheitInput.value);
      const celsiusValue = (fahrenheitValue - 32) * 5/9;
      celsiusInput.value = isNaN(celsiusValue) ? '' : celsiusValue.toFixed(2);
    }
  }
  a.addEventListener('click',()=>{
    celsiusInput.value = ""
    fahrenheitInput.value = ""
  })