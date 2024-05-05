const form = document.querySelector('.form form');
const emailInput = document.getElementById('field1');
const passwordInput = document.getElementById('field2');
const repeatInput = document.getElementById('field3');
const signUpButton = document.getElementById('sub');

signUpButton.addEventListener('click', function(event) {
  event.preventDefault(); 
  const inputs = [emailInput, passwordInput, repeatInput];
  let hasError = false;
  
  inputs.forEach(input => {
    if (input.value.trim() === '') {
        input.style.borderColor = '#9e1b32';
      hasError = true;
    } else {
        input.style.borderColor = '#EBEAED';
    }
  });
  
  if (hasError) {
    alert('Failure');
  } else {
    alert('Success!');
  }
});