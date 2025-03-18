# String App

String App is an application, made as a simple web code test that allows users to add, delete and restore items from a list. The interface features a modal to add items, a selection system to delete multiple items at once and an undo function to recover deleted items.

# Features

Add items to the list using a pop-up modal.

Validation to avoid adding empty items.

Delete selected items from the list.

Restore the last deleted or added items using the “Undo” option.

Intuitive interface and responsive design.

## Installation

In order to test the project, the first thing to do is to download it to your computer using the git command, git clone:

```bash
git clone https://github.com/aruvaro88/react-string-app.git
```

Move to project directory

```bash
cd js-string-app
```

Then you will have to install the dependencies that are used in the project, for this we use the command:

```bash
npm install
```

To start the project, we will use the command:

```bash
npm run dev
```

Open a browser window and paste the following url to view the project: http://localhost:5173/

# Application Components

## **`App.tsx`**

The main component of the application. It renders the `StringContainer` component, which contains the `ItemList`.

## **`StringContainer.tsx`**

A wrapper component that provides a title and description for the application. It serves as a container for the `ItemList` component.

### **Props:**

- `children`: The child elements to be rendered inside the container.

---

## **`ItemList.tsx`**

Handles the item list, allowing users to add, remove, select, and undo actions on items.

### **State:**

- `itemList`: The list of current items.
- `selectedItems`: The selected items.
- `lastState`: The last state before modifications (used for undo functionality).
- `isModalVisible`: Controls the visibility of the add item modal.

### **Functions:**

- `handleAddItemClick()`: Opens the add item modal.
- `handleCloseModal()`: Closes the modal.
- `addToItemList(item: Item)`: Adds a new item to the list.
- `removeFromItemList(ids: number[])`: Removes selected items from the list.
- `toggleSelectItem(id: number)`: Toggles item selection.
- `undoAction()`: Restores the previous state.

---

## **`ItemComponent.tsx`**

Represents a single item in the list.

### **Props:**

- `item`: The item object.
- `isSelected`: Indicates whether the item is selected.
- `onClick(id: number)`: Selects or deselects the item.
- `onDoubleClick(ids: number[])`: Removes the item on double-click.

---

## **`Button.tsx`**

A reusable button component with two style variants.

### **Props:**

- `variant`: `"primary"` or `"secondary"` button style.
- `onClick()`: Function executed on button click.
- `children`: The content inside the button (text or icon).
- `disabled`: Indicates whether the button is disabled.

---

## **`AddItemModal.tsx`**

A modal for adding a new item to the list.

### **State:**

- `newItemString`: The content of the new item.
- `inputError`: Indicates if there is an input validation error.

### **Props:**

- `onClose()`: Closes the modal.
- `onAddItem(item: Item)`: Adds the new item to the list.

### **Functions:**

- `handleAddItem()`: Validates input and adds the item if valid.

---

## Libraries

The following external libraries have been used for the project

- React v19.0.0: main framework
- Mui Material & Icons Material v6.4.7: external component library, in this case it has been used to import an icon used in the undo button.

## Architecture Overview

The project follows a **modular and scalable** architecture, made with React, created from scratch using vite, and using Typescript as programming language.

## File Structure

```bash

├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.tsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── addItemModal
│   │   │   ├── addItemModal.component.tsx
│   │   │   └── addItemModal.module.css
│   │   ├── button
│   │   │   ├── button.component.tsx
│   │   │   └── button.module.css
│   │   ├── itemComponent
│   │   │   ├── itemComponent.component.tsx
│   │   │   └── itemComponent.module.css
│   │   ├── itemList
│   │   │   ├── itemList.component.tsx
│   │   │   └── itemList.module.css
│   │   └── stringContainer
│   │       ├── stringContainer.component.tsx
│   │       └── stringContainer.module.css
│   ├── index.css
│   ├── main.tsx
│   ├── models
│   │   └── item.model.ts
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
