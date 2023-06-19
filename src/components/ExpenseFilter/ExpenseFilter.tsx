import categories from "../Categories";

interface Props {
  onSelectCategory: (category: string) => void;
}
// Destructuring the onSelectCategory prop to use it on the app component
const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <section id="expenseFilter">
      <select onChange={(event) => onSelectCategory(event.target.value)}>
        <option value="">All Categories</option>
        {/* Get all the categories from the import  */}
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </section>
  );
};

export default ExpenseFilter;
