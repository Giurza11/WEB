const display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  const input = display.value;

  // Rule 1: If more than one "+"
  const plusCount = (input.match(/\+/g) || []).length;
  if (plusCount > 1) {
    display.value = "Error";
    return;
  }

  // Rule 2: If exactly one "+"
  if (plusCount === 1) {
    const parts = input.split("+");
    display.value = parts.join(""); // concatenate
    return;
  }

  // Optional: normal behavior for others
  try {
    display.value = eval(input);
  } catch {
    display.value = "Error";
  }
}
