# String App

String App is an application, made as a simple web code test that allows users to add, delete and restore items from a list. The interface features a modal to add items, a selection system to delete multiple items at once and an undo function to recover deleted items. This application has been made with React, created from scratch using vite, and using Typescript as programming language.

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

## Components

**`App.tsx`**
The main component of the application, where the `StringAppWrapper` component is rendered within the component tree.

**`StringContainer.component.tsx`**
A component that renders the main UI of the application, including the item list (`ItemList`), buttons for adding and deleting items, and the undo (`undoAction`) functionality. It also manages the visibility of the modal for adding new items.

**`ItemList.component.tsx`**
A component that renders a list of items (`ItemComponent`). It uses the `useItemList` context to get the item list and the selected items, allowing the user to select and deselect items.

**`ItemComponent.component.tsx`**
A component that displays information for a single item in the list. It allows the user to select the item by clicking on it and remove it with a double-click.

**`Button.component.tsx`**
A reusable button component that can have two style variants: "primary" and "secondary". It accepts an `onClick` function and can be disabled if needed.

**`AddItemModal.component.tsx`**
A component that shows a modal for adding a new item to the list. It allows the user to enter text and validates that it is not empty before adding the item to the list.

**`ItemListContext.ts`**
A file that defines the `ItemListContext`, which provides the shared state (such as `itemList`, `selectedItems`, `lastState`) and functions to update this state to any component that needs it.

**`useItemList.ts`**
A custom hook that encapsulates the logic for adding, removing, and selecting items in the list. It also handles undo functionality and state updates using the `ItemListContext`.

## Libraries

The following external libraries have been used for the project

- Mui Material & Icons Material v6.4.7: external component library, in this case it has been used to import an icon used in the undo button.

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
│   ├── context
│   │   └── itemContext.ts
│   ├── hooks
│   │   └── useItemList.ts
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
