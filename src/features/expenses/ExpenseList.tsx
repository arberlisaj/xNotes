import useStore from "@/store";
import Expense from "./Expense";

const ExpenseList = () => {
  const expenses = useStore((store) => store.expenses);
  return (
    <div className="w-full max-w-[1100px] m-auto flex gap-2 flex-wrap">
      <hr className="bg-gray-100 h-0.5 w-full dark:bg-gray-700 rounded border-none mb-2" />
      {expenses.length === 0 ? (
        <p className="dark:text-gray-100">Add your first expense.</p>
      ) : (
        <>
          {expenses.map((e, i) => (
            <Expense key={i} expense={e} />
          ))}
        </>
      )}
    </div>
  );
};

export default ExpenseList;
