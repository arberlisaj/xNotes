import PageHeader from "@/components/PageHeader";
import ExpenseForm from "@/features/expenses/ExpenseForm";
import { MdOutlineArrowBack } from "react-icons/md";

const NewExpensePage = () => {
  return (
    <section>
      <PageHeader
        title="Create Expense"
        buttonSection={
          <>
            <MdOutlineArrowBack />
            back
          </>
        }
        linkAddress="/expenses"
      />
      <ExpenseForm />
    </section>
  );
};

export default NewExpensePage;
