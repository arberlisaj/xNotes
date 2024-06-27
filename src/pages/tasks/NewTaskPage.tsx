import PageHeader from "@/components/PageHeader";
import TaskForm from "@/features/tasks/TaskForm";
import { MdOutlineArrowBack } from "react-icons/md";
const NewTaskPage = () => {
  return (
    <section className="max-w-[1100px] m-auto">
      <PageHeader
        title={"Create Task"}
        buttonSection={
          <>
            <MdOutlineArrowBack /> back
          </>
        }
        linkAddress={"/tasks"}
      />
      <TaskForm />
    </section>
  );
};

export default NewTaskPage;
