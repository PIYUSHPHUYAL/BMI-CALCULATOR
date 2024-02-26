document.addEventListener("DOMContentLoaded", function() {
  const maleButton = document.querySelector(".auto-group-e6sw-eSb");
  const femaleButton = document.querySelector(".auto-group-zcvy-Hdy");

  maleButton.addEventListener("click", function() {
    maleButton.classList.add("selected");
    femaleButton.classList.remove("selected");
  });

  femaleButton.addEventListener("click", function() {
    femaleButton.classList.add("selected");
    maleButton.classList.remove("selected");
  });
});

document.addEventListener("DOMContentLoaded", function() {
  let weight = 50; // Set default weight to 50
  const weightDisplay = document.querySelector(".weight-display"); // Weight display element

  weightDisplay.textContent = weight; // Update weight display with default value

  document.querySelector(".increase").addEventListener("click", function() {
    weight++;
    weightDisplay.textContent = weight; // Update weight display
    this.classList.add("clicked"); // Add clicked class for styling
    setTimeout(() => {
      this.classList.remove("clicked"); // Remove clicked class after 200ms
    }, 200);
  });

  document.querySelector(".decrease").addEventListener("click", function() {
    if (weight > 0) {
      weight--;
      weightDisplay.textContent = weight; // Update weight display
      this.classList.add("clicked"); // Add clicked class for styling
      setTimeout(() => {
        this.classList.remove("clicked"); // Remove clicked class after 200ms
      }, 200);
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  let age = 25; // Set default age to 25
  const ageDisplay = document.querySelector(".age-display"); // Age display element

  ageDisplay.textContent = age; // Update age display with default value

  document.querySelector(".increase2").addEventListener("click", function() {
    age++;
    ageDisplay.textContent = age; // Update age display
    this.classList.add("clicked"); // Add clicked class for styling
    setTimeout(() => {
      this.classList.remove("clicked"); // Remove clicked class after 200ms
    }, 200);
  });

  document.querySelector(".decrease2").addEventListener("click", function() {
    if (age > 0) {
      age--;
      ageDisplay.textContent = age; // Update age display
      this.classList.add("clicked"); // Add clicked class for styling
      setTimeout(() => {
        this.classList.remove("clicked"); // Remove clicked class after 200ms
      }, 200);
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const heightSlider = document.getElementById("heightSlider");
  const selectedHeight = document.getElementById("selectedHeight");

  heightSlider.addEventListener("input", function() {
    selectedHeight.textContent = "Height: " + this.value + " cm";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const calculateButton = document.getElementById("calculateButton");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");
  const heightSlider = document.getElementById("heightSlider");

  calculateButton.addEventListener("click", function() {
    // Get height and weight values
    const height = parseInt(heightSlider.value);
    const weight = parseInt(document.querySelector(".weight-display").textContent);

    // Calculate BMI
    const heightInMeters = height / 100; // Convert height from cm to meters
    const bmi = weight / (heightInMeters * heightInMeters);

    // Display BMI in popup
    const bmiResult = document.getElementById("bmiResult");
    bmiResult.textContent = "Your BMI is: " + bmi.toFixed(2);

    // Show the popup
    popup.style.display = "block";
  });

  // Close the popup when the close button is clicked
  closePopup.addEventListener("click", function() {
    popup.style.display = "none";
  });

  // Close the popup when clicking outside of it
  window.addEventListener("click", function(event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  });
});
