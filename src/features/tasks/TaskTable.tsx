import useStore from "@/store";
import Task from "./Task";

const TaskTable = () => {
  const tasks = useStore((store) => store.tasks);
  return (
    <table className="w-full max-w-[1100px] m-auto dark:text-gray-200">
      <thead>
        <tr className="border-y border-gray-300 dark:border-gray-600">
          <th className="text-left w-full pl-4">Description</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tasks.length === 0 && (
          <tr>
            <td colSpan={5} className="text-center text-xs py-3">
              Add your first task.
            </td>
          </tr>
        )}
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
