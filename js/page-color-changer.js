//to ensure the DOM is fully loaded before running the script

document.addEventListener('DOMContentLoaded', function() {
    // Get references to the sliders and the html element
  const redSlider = document.getElementById('red');
  const greenSlider = document.getElementById('green');
  const blueSlider = document.getElementById('blue');
  const htmlElement = document.querySelector('html');

  // Function to update the background color based on slider values
  function updateBackgroundColor() {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;
    htmlElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
    // Add event listeners to the sliders to update the background color on input 
  redSlider.addEventListener('input', updateBackgroundColor);
  greenSlider.addEventListener('input', updateBackgroundColor);
  blueSlider.addEventListener('input', updateBackgroundColor);

  updateBackgroundColor();
});