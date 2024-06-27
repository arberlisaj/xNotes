import PageHeader from "@/components/PageHeader";
import ExpenseList from "@/features/expenses/ExpenseList";
import { BiPlus } from "react-icons/bi";

const ExpenseListPage = () => {
  return (
    <section>
      <PageHeader
        title="My expenses"
        linkAddress="new"
        buttonSection={
          <>
            <BiPlus className="text-base" />
            new
          </>
        }
      />
      <ExpenseList />
    </section>
  );
};

export default ExpenseListPage;
