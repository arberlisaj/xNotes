import Button from "@/components/Button";
import ErrorParagraph from "@/components/ErrorParagraph";
import * as constants from "@/constants/constants";
import useStore from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import z from "zod";

const schema = z.object({
  inputValue: z.string().min(3, { message: "title is too short" }),
  status: z.enum(["Todo", "In Progress", "Done"], {
    errorMap: () => ({ message: "please select a status" }),
  }),

  category: z.enum(["Work", "Personal"], {
    errorMap: () => ({ message: "please select a category" }),
  }),

  priority: z.enum(["High", "Medium", "Low"], {
    errorMap: () => ({ message: "please select a priority" }),
  }),
});

type FormData = z.infer<typeof schema>;

const TaskForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const addTask = useStore((store) => store.addTask);
  const onSubmit = (data: FieldValues) => {
    const newTask = {
      id: Date.now(),
      title: data.inputValue,
      status: data.status,
      priority: data.priority,
      category: data.category,
    };
    addTask(newTask);
    reset();
    navigate("/tasks");
  };
  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className="py-6 p-4 rounded border-2 dark:border-gray-700"
    >
      <label htmlFor="title">title</label>
      <input
        autoFocus
        {...register("inputValue")}
        type="text"
        id="title"
        placeholder="description"
      />
      {errors.inputValue && (
        <p className="mb-2 text-red-500 text-sm dark:text-red-400">
          {errors.inputValue.message}
        </p>
      )}

      <label htmlFor="category">category</label>
      <select {...register("category")} id="category">
        <option value="">Select a category</option>
        {constants.CATEGORY.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      {errors.category && <ErrorParagraph message={errors.category?.message} />}

      <label htmlFor="status">Status</label>
      <select id="status" {...register("status")}>
        <option value="">Select a status</option>
        {constants.STATUS.map((status, index) => (
          <option key={index} value={status}>
            {status}
          </option>
        ))}
      </select>
      {errors.status && <ErrorParagraph message={errors.status?.message} />}

      <label htmlFor="priority">Priority</label>
      <select id="priority" {...register("priority")}>
        <option value="">Select a priority</option>
        {constants.PRIORITY.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>
      {errors.priority && <ErrorParagraph message={errors.priority?.message} />}

      <Button
        title="create"
        type="submit"
        className="text-white bg-green-700 hover:bg-green-600 active:bg-green-700 mt-3"
      >
        Create
      </Button>
    </form>
  );
};

export default TaskForm;
