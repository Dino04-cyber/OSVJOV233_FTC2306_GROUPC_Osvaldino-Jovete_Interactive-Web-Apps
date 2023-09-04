// Import data and view modules
import * as data from './data.js'
import * as view from './view.js';

// Event listener for the "Add Order" button
document.querySelector('[data-add]').addEventListener('click', () => {
  // Open the "Add Order" overlay and focus on the input field
  view.openAddOrderOverlay();
  view.focusAddOrderInput();
});

// Event listener for the "Cancel" button in the "Add Order" overlay
document.querySelector('[data-add-cancel]').addEventListener('click', () => {
    // Close the "Add Order" overlay
    view.closeAddOrderOverlay();
  });

// Event listener for the "Help" button
document.querySelector('[data-help]').addEventListener('click', () => {
  // Open the "Help" overlay
  view.openHelpOverlay();
});

// Event listener for the "Close" button in the "Help" overlay
document.querySelector('[data-help-cancel]').addEventListener('click', () => {
  // Close the "Help" overlay
  view.closeHelpOverlay();
});