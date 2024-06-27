import useStore from "@/store";
import currencyFormatter from "@/utils/currencyFormatter";
import classNames from "classnames";
import { BsTrash } from "react-icons/bs";

export interface ExpenseType {
  id: number;
  price: number;
  title: string;
  description: string;
  category: "Groceries" | "Utilities" | "Entertainment";
}

const Expense = ({
  expense: { id, title, description, price, category },
}: {
  expense: ExpenseType;
}) => {
  const deleteExpense = useStore((store) => store.deleteExpense);
  const formattedPrice = currencyFormatter(price);

  return (
    <div className="max-w-[360px] flex flex-col border-2 dark:border-gray-700 py-1 px-3 rounded-sm w-full justify-between hover:shadow-sm cursor-pointer dark:text-gray-100">
      <div className="flex items-center justify-between pt-2">
        <h1 className="text-base font-bold capitalize">{title}</h1>
        <p
          className={classNames(
            "w-fit text-xs grid place-content-center hover:opacity-75 items-center gap-3 font-bold rounded-sm ",
            {
              "text-blue-400": category === "Groceries",
              "text-red-400": category === "Utilities",
              "text-green-400": category === "Entertainment",
            }
          )}
        >
          {category}
        </p>
      </div>
      <p className="mt-2 mb-1">{description}</p>
      <footer className="flex items-center justify-between gap-3 pt-2 pb-1 mt-2 border-t dark:border-gray-600">
        <p>{formattedPrice}</p>
        <button type="button" onClick={() => deleteExpense(id)}>
          <BsTrash />
        </button>
      </footer>
    </div>
  );
};

export default Expense;
