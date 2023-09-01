/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}


const handleDragStart = (event) => {
    event.stopPropagation();
    };
const handleDragEnd = (event) => {
    updateDragging(null);
    };
const handleHelpToggle = (event) => {
    updateShowHelp(!showingHelp);
    };
const handleAddToggle = (event) => {
    updateAdding(!adding);
    };
const handleAddSubmit = (event) => {
    updateAdding(false);
    };
const handleEditToggle = (event) => {
    updateEditing(!editing);
    };
const handleEditSubmit = (event) => {
    updateEditing(false);
    };
const handleDelete = (event) => {
    updateDeleting(true);
    };

html.add.cancel.addEventListener('click', handleAddToggle
).addEventListener("click", handleAddToggle, false );  // add toggle
html.other.add.addEventListener('click', handleAddToggle
).addEventListener("click", handleAddToggle, false ) ;   // add submit button
html.add.form.addEventListener('submit', handleAddSubmit
).addEventListener("submit", handleAddSubmit , false )    // add form submission handler

html.other.grid.addEventListener('click', handleEditToggle
).addEventListener("click", handleEditToggle, false )     // edit toggle
html.edit.cancel.addEventListener('click', handleEditToggle
).addEventListener("click", handleEditToggle, false )      // cancel editing
html.edit.form.addEventListener('submit', handleEditSubmit
).addEventListener("submit", handleEditSubmit, false )       // edit form submission handler
html.edit.delete.addEventListener('click', handleDelete
).addEventListener("click", handleDelete, false )            // delete button

html.help.cancel.addEventListener('click', handleHelpToggle
).addEventListener("click", handleHelpToggle, false )        // help close
html.other.help.addEventListener('click', handleHelpToggle
).addEventListener("click", handleHelpToggle, false )         // help open

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart
    ).addEventListener("dragstart", handleDragStart, false )           // drag start
    htmlColumn.addEventListener('dragend', handleDragEnd
    ).addEventListener("dragend", handleDragEnd, false )                 // drag end
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver
    ).addEventListener("dragover", handleDragOver, false )                  // drag over area
}
