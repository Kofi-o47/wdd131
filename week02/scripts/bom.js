
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul'); // you need to fill in the blank to reference the HTML element that is a unordered list element.
const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);

button.addEventListener('click', function() {
  // Code from Part 1 will go here
});

button.addEventListener('click', function() {
  if (input.value.trim() !== '') { // Check if input is not empty
    // ... (DOM creation code from Part 1 goes inside this IF block)

    // Clear the input field after adding the item
    input.value = '';

    // Return focus to the input field
    input.focus();
  } else {
    // If input is empty, just return focus to the input field
    input.focus();
  }
});

deleteButton.addEventListener('click', function() {
  list.removeChild(li);
});

deleteButton.setAttribute('aria-label', `Remove ${input.value}`);
// Add this line after creating the deleteButton but before appending it