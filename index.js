const count = document.getElementById("count");
const error = document.getElementById("error");

error.style.color = "red"; // Set error text color to red

let counter = 0;

const increment = () => {
  if (counter < 100) {
    counter += 1;
    count.textContent = counter; // Update counter display
    count.style.color = "black"; // Set the counter color back to black
    error.textContent = ""; // Clear the error message
  } else {
    counter = 100;
    count.style.color = "red"; // Set counter color to red when max is reached
    error.textContent = "Counter cannot be greater than 100";
  }
};

const decrement = () => {
  if (counter > 0) {
    counter -= 1;
    count.textContent = counter; // Update counter display
    count.style.color = "black"; // Reset color to black
    error.textContent = "";   } else {
    counter = 0;
    count.style.color = "red";
    error.textContent = "Counter cannot be less than 0";
  }
};