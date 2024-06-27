import Button from "@/components/Button";
import useStore from "@/store";
import { BsTrash } from "react-icons/bs";

export interface TaskType {
  id: number;
  title: string;
  status: string;
  priority: string;
  category: string;
}

const Task = ({ task }: { task: TaskType }) => {
  const deleteTask = useStore((store) => store.deleteTask);
  return (
    <tr className="text-sm hover:bg-gray-50 dark:hover:bg-slate-800">
      <td className="w-full text-left pl-3">{task.title.substring(0, 400)}</td>
      <td>{task.status}</td>
      <td>{task.priority}</td>
      <td>{task.category}</td>
      <td className="relative">
        <Button
          type="button"
          className="mx-auto dark:bg-transparent"
          handleClick={() => deleteTask(task.id)}
        >
          <BsTrash />
        </Button>
      </td>
    </tr>
  );
};
export default Task;
