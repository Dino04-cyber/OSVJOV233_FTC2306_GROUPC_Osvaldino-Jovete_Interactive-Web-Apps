// view.js

import { TABLES, COLUMNS, state } from './data.js';

/**
 * Takes any order as an object literal (as saved in state) and converts it a
 * HTML element that can be appended to the DOM. Creating order elements
 * individually prevents the JavaScript having to re-render the entire DOM every
 * time a new order is created.
 *
 * @param {object} order 
 * @returns {HTMLElement}
 */
// view.js

// ... (previous code)

// Update the createOrderHtml function to include "created" and "column" details
export const createOrderHtml = (order) => {
    const { id, title, table, created, column } = order;
  
    // ... (previous code for creating the order HTML)
  
    element.innerHTML = /* html */ `
      <div class="order__title" data-order-title>${title}</div>
      
      <dl class="order__details">
          <div class="order__row">
              <dt>Table:</dt>
              <dd class="order__value" data-order-table>${table}</dd>
          </div>
  
          <div class="order__row">
              <dt>Ordered:</dt>
              <dd class="order__value">${hours}:${minutes}</dd>
          </div>
  
          <div class="order__row">
              <dt>Status:</dt>
              <dd class="order__value">${column}</dd>
          </div>
      </dl>
    `;
  
    return element;
  };
  
  // ... (other code)
  
/**
 * Updates the view to display a new order when it is created.
 * @param {object} order - The order object to be displayed.
 */
export const displayNewOrder = (order) => {
    const orderHtml = createOrderHtml(order);
    const column = order.column; // You need to determine the target column based on the order's state
    html.columns[column].appendChild(orderHtml);
};

/**
 * Since the tables in use, and their identification can be configured before
 * the start of the app (in data.js), the actual options returned should be
 * dynamically added to the respective "<select>" elements in the HTML after
 * JavaScript loads. This function executes the logic that reads the current
 * tables and creates the HTML to select them.
 *
 * @returns {HTMLElement}
 */
const createTableOptionsHtml = () => {
    const fragment = document.createDocumentFragment();

    for (const singleTable of TABLES) {
        const option = document.createElement('option');
        option.value = singleTable;
        option.innerText = singleTable;
        fragment.appendChild(option);
    }

    return fragment;
};

/**
 * An object literal that contains references to all the HTML elements
 * referenced through the operation of the app either upon initialization or
 * while it's running (via event listeners). This ensures that all UI elements can
 * be accessed and seen in a structured manner in a single data structure.
 *
 * Note that the "column" and "area" properties created as empty and then added
 * dynamically by a loop that runs over the COLUMNS array.
 */
export const html = {
    columns: {},
    area: {},
    add: {
        overlay: document.querySelector('[data-add-overlay]'),
        form: document.querySelector('[data-add-form]'),
        cancel: document.querySelector('[data-add-cancel]'),
        title: document.querySelector('[data-add-title]'),
        table: document.querySelector('[data-add-table]'),
    },
    edit: {
        overlay: document.querySelector('[data-edit-overlay]'),
        form: document.querySelector('[data-edit-form]'),
        cancel: document.querySelector('[data-edit-cancel]'),
        title: document.querySelector('[data-edit-title]'),
        table: document.querySelector('[data-edit-table]'),
        id: document.querySelector('[data-edit-id]'),
        column: document.querySelector('[data-edit-column]'),
        delete: document.querySelector('[data-edit-delete]'),
    },
    help: {
        overlay: document.querySelector('[data-help-overlay]'),
        cancel: document.querySelector('[data-help-cancel]'),
    },
    other: {
        grid: document.querySelector('[data-grid]'),
        help: document.querySelector('[data-help]'),
        add: document.querySelector('[data-add]'),
        order: document.querySelector('[data-order]'),
    },
};

for (const columnName of COLUMNS) {
    html.columns[columnName] = document.querySelector(`[data-column="${columnName}"]`);
    html.area[columnName] = document.querySelector(`[data-area="${columnName}"]`);
}

/**
 * Maps over all columns in the HTML and removes any dragging hover effects
 * except for the current column that is being dragged over (if at all). If the
 * "over" value is not specified, then all columns will be cleared of any hover
 * effects.
 *
 * @param {object} newDragging 
 */
export const updateDraggingHtml = (newDragging) => {
    const { over = state.dragging.over } = newDragging;

    for (const columnName of COLUMNS) {
        const value = columnName === over ? 'rgba(0, 160, 70, 0.2)' : '';
        html.area[columnName].style.backgroundColor = value;
    }
};

/**
 * Takes a specific order HTML and clones it into memory. The original HTML
 * element is then removed from the DOM, while the cloned duplicate is added to
 * the bottom of the column that is specified.
 *
 * @param {string} id - The "id" value of a specific order object. Note that
 * only the "id" value is used, not the entire object.
 *
 * @param {string} newColumn - The name of the column that the order should be
 * moved to. This should coincide with one of the values present in the COLUMNS
 * array in "data.js".
 */
export const moveToColumn = (id, newColumn) => {
    const htmlSource = document.querySelector(`[data-id="${id}"]`); 
    const duplicate = htmlSource.cloneNode(true);
    html.columns[newColumn].appendChild(duplicate);
    htmlSource.remove();
};

/**
 * Starts the app focused on the "add order" button. This means that users can
 * immediately start adding an order by pressing the enter or spacebar.
 */
html.other.add.focus();

/**
 * Function to open the "Add Order" overlay.
 */
export function openAddOrderOverlay() {
    html.add.overlay.open = true; // Modify this line as needed to open the overlay
}

html.add.table.appendChild(createTableOptionsHtml());
html.edit.table.appendChild(createTableOptionsHtml());

 //Opens the "Help" overlay.

export const openHelpOverlay = () => {
 const helpOverlay = document.querySelector('[data-help-overlay]');
 const addOrderButton = document.querySelector('[data-add]');

 if (helpOverlay) {
   // Show the "Help" overlay
   helpOverlay.style.display = 'block';

   // Disable the "Add Order" button while the overlay is open
   if (addOrderButton) {
     addOrderButton.disabled = true;
   }
 }
};

//Closes the "Help" overlay.

export const closeHelpOverlay = () => {
  const helpOverlay = document.querySelector('[data-help-overlay]');
  const addOrderButton = document.querySelector('[data-add]');

  if (helpOverlay) {
    // Hide the "Help" overlay
    helpOverlay.style.display = 'none';

    // Enable the "Add Order" button
    if (addOrderButton) {
      addOrderButton.disabled = false;
    }
  }
};

/**
 * Focuses on the input field in the "Add Order" overlay.
 */
export const focusAddOrderInput = () => {
    const addOrderInput = document.querySelector('[data-add-title]');
    if (addOrderInput) {
      addOrderInput.focus();
    }
  };
  /**
 * Closes the "Add Order" overlay.
 */
export const closeAddOrderOverlay = () => {
    const addOrderOverlay = document.querySelector('[data-add-overlay]');
    if (addOrderOverlay) {
      addOrderOverlay.style.display = 'none';
    }
  };
  