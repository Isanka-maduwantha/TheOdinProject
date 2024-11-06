# Project Calculator

![Getting Started](preview.png)

- KeyBoard Support Added
- You cannot add morethan one decimal

> Simple and easy-to-use calculator for quick arithmetic calculations.
> Perform addition, subtraction, multiplication, and division with just a
> click

[See livePreview ]
(https://isanka-maduwantha.github.io/TheOdinProject/04Calculator/index.html)

### Basic Math Operations:
- [x] **Create an `add` function** that adds two numbers.
- [x] **Create a `subtract` function** that subtracts the second number from the first.
- [x] **Create a `multiply` function** that multiplies two numbers.
- [x] **Create a `divide` function** that divides the first number by the second and handles division by zero with an error message.

### Operate Function:
- [x] **Create an `operate` function** that:
  - Takes an operator (`+`, `-`, `*`, `/`) and two numbers.
  - Calls the appropriate math function based on the operator and returns the result.

### HTML Structure:
- [x] **Create a basic HTML layout** for a calculator with buttons for:
  - Digits (0-9)
  - Operators (`+`, `-`, `*`, `/`)
  - Equals (`=`) button
  - Clear (`AC`) button
- [x] **Add a display element** for showing input and results 

### Display Management:
- [x] **Populate the display** with numbers when digit buttons are clicked.
- [x] **Store the content of the display** (the number) in a variable for future operations.
- [x] **Handle input when clicking the operator buttons** and store the operator for later use.

### Handling Operations:
- [x] **Store the first and second numbers input by the user**.
- [x] **Use the `operate` function** to perform calculations when the equals (`=`) button is pressed.
- [x] **Update the display with the result** after the operation is completed.

### Error Handling & Bugs:
- [x] **Ensure that only one pair of numbers is evaluated at a time.** (e.g., after `12 + 7`, the result should be used in subsequent operations like `19 - 5`).
- [x] **Round results with long decimals** so they don’t overflow the display.
- [x] **Handle edge cases** like pressing `=` without all inputs dosent submit input.
- [x] **Ensure the `clear` button wipes all data** and starts a fresh calculation.

### Special Features (Optional):
- [ ] **Display a snarky error message** if the user tries to divide by zero.
- [x] **Prevent multiple decimal points** in a number (e.g., `12.3.4` should not be allowed).
- [ ] **Add a decimal point (.) button** and disable it if there’s already one in the current number.
- [x] **Add a `backspace` button** to allow users to undo the last input.
- [x] **Implement keyboard support** to allow users to use the calculator with the keyboard.
