import {FiDelete} from "react-icons/fi";

interface Expenses {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expenses[];
  onDelete: (id: number) => void;
}
const ExpenseList = ({ expenses, onDelete }: Props) => {
  // first we check the expense list length
  if (expenses.length === 0) return null;
  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {/*  rendering the expenses  */}
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>${expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button onClick={() => onDelete(expense.id)}>
                <FiDelete />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total:</td>
          <td>
            {/* adding the total together with reduce method  */}$
            {expenses
              .reduce((total, expense) => expense.amount + total, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
