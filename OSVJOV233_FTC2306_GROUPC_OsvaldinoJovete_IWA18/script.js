// Import data and view modules
import * as data from './data.js';
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
    // Clear the form inputs
    view.clearAddOrderForm();
    // Return focus to the "Add Order" button
    view.focusAddOrderButton();
  });

// Event listener for the "Help" button
document.querySelector('[data-help]').addEventListener('click', () => {
  // Open the "Help" overlay
  console.log('MY CODE DOESNT WORK NO MATTER HOW MUCH VIDEOS I WATCH')
  view.openHelpOverlay();
});

// Event listener for the "Close" button in the "Help" overlay
document.querySelector('[data-help-cancel]').addEventListener('click', () => {
  // Close the "Help" overlay
  view.closeHelpOverlay();
  // Return focus to the "Add Order" button
  view.focusAddOrderButton();
});

// Event listener for the "Add" button in the "Add Order" overlay
document.querySelector('[data-add-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  // Get the order details from the form
  const title = document.querySelector('[data-add-title]').value.trim();
  const table = document.querySelector('[data-add-table]').value;

  if (title) {
    // Create a new order and add it to the "Ordered" column
    const newOrder = data.createOrder(title, table, 'ordered');
    data.addOrder(newOrder);
    view.renderOrder(newOrder);
    // Close the "Add Order" overlay
    view.closeAddOrderOverlay();
    // Clear the form inputs
    view.clearAddOrderForm();
    // Return focus to the "Add Order" button
    view.focusAddOrderButton();
  }
});

// Event listener for opening the "Edit Order" overlay when clicking on an order
document.querySelector('[data-grid]').addEventListener('click', (event) => {
  const target = event.target;
  const orderId = target.closest('.order')?.dataset.id;

  if (orderId) {
    const order = data.getOrderById(orderId);
    if (order) {
      // Populate the "Edit Order" overlay with order details
      view.populateEditOrderForm(order);
      // Open the "Edit Order" overlay
      view.openEditOrderOverlay();
    }
  }
});

// Event listener for closing the "Edit Order" overlay
document.querySelector('[data-edit-cancel]').addEventListener('click', () => {
  // Close the "Edit Order" overlay
  view.closeEditOrderOverlay();
  // Return focus to the "Add Order" button
  view.focusAddOrderButton();
});

// Event listener for submitting the "Edit Order" form
document.querySelector('[data-edit-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  // Get the updated order details from the form
  const orderId = document.querySelector('[data-edit-id]').value;
  const updatedTitle = document.querySelector('[data-edit-title]').value.trim();
  const updatedTable = document.querySelector('[data-edit-table]').value;
  const updatedColumn = document.querySelector('[data-edit-column]').value;

  if (orderId && updatedTitle) {
    // Update the order with the new values
    data.updateOrder(orderId, updatedTitle, updatedTable, updatedColumn);
    // Move the order to the selected column if the status is changed
    if (data.moveOrderToColumn(orderId, updatedColumn)) {
      // If the order was moved, remove it from the previous column in the view
      view.removeOrder(orderId);
    }
    // Close the "Edit Order" overlay
    view.closeEditOrderOverlay();
    // Return focus to the "Add Order" button
    view.focusAddOrderButton();
  }
});

// Event listener for deleting an order
document.querySelector('[data-edit-delete]').addEventListener('click', () => {
  // Get the order ID from the form
  const orderId = document.querySelector('[data-edit-id]').value;

  if (orderId) {
    // Delete the order from data
    data.deleteOrder(orderId);
    // Remove the order from the view
    view.removeOrder(orderId);
    // Close the "Edit Order" overlay
    view.closeEditOrderOverlay();
    // Return focus to the "Add Order" button
    view.focusAddOrderButton();
  }
});

// Drag and drop functionality
document.querySelectorAll('[data-column]').forEach((column) => {
  column.addEventListener('dragover', (event) => {
    event.preventDefault();
    // Highlight the drop target
    view.highlightDropTarget(column);
  });

  column.addEventListener('dragleave', () => {
    // Remove the highlight from the drop target when the dragged element leaves
    view.removeDropTargetHighlight(column);
  });

  column.addEventListener('drop', (event) => {
    // Get the ID of the dragged order
    const orderId = event.dataTransfer.getData('text/plain');
    if (orderId) {
      const targetColumn = column.dataset.column;
      // Move the order to the target column in data and update the view
      data.moveOrderToColumn(orderId, targetColumn);
      view.moveOrderToColumn(orderId, targetColumn);
      // Remove the highlight from the drop target
      view.removeDropTargetHighlight(column);
    }
  });
});
