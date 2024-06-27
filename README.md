# xNotes - Minimalistic note taking application.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/~/github.com/arberLisaj/xNotes)

## 🪄 Features

- ✅ SEO-friendly.
- ✅ Minimalist styling.
- ✅ Dark mode implementation.
- ✅ 100/100 Lighthouse performance.

## 🚀 Project Structure

```
/
├─ node_modules/
├─ public/
└─ src/
   ├─ components/
   │   ├─ Button.tsx
   │   ├─ DarkMode.tsx
   │   ├─ ErrorComponent.tsx
   │   ├─ ErrorParagraph.tsx
   │   ├─ NotFound.tsx
   │   └─ PageHeader.tsx
   ├─ constants/
   |   └─ constants.ts
   ├─ features/
   │   ├─ expenses/
   │   │   ├─ Expense.tsx
   │   │   ├─ ExpenseForm.tsx
   │   │   └─ ExpenseList.tsx
   │   ├─ tasks/
   │   │   ├─ Task.tsx
   │   │   ├─ TaskForm.tsx
   │   │   └─ TaskTable.tsx
   ├─ layouts/
   │   ├─ Layout.tsx
   │   └─ Navbar.tsx
   ├─ pages/
   │   ├─ expenses/
   │   │   ├─ ExpenseListPage.tsx
   │   │   └─ NewExpensePage.tsx
   │   ├─ tasks/
   │   │   ├─ NewTaskPage.tsx
   │   │   └─ TaskListPage.tsx
   │   └─ ErrorPage.tsx
   ├─ utils/
   │   └─ currencyFormatter.ts
   ├─ main.tsx
   ├─ routes.tsx
   ├─ store.ts
   └─ styles.css
```

## 🧞 Commands

All commands are run at the root of the project from a terminal:

```sh
# install dependencies
yarn install
```

```sh
# Start local development server at http://localhost:5173
yarn dev
```

```sh
# Build your production site to ./dist
yarn build
```

```sh
# Preview your build locallly before deploying
yarn preview
```
