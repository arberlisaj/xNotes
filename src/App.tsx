import { useState } from "react";
import "./Styles/styles.css";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 333, description: "electricity", amount: 30, category: "Utilities" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <main>
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </main>
  );
};
export default App;
