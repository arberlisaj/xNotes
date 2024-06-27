import Button from "@/components/Button";
import ErrorParagraph from "@/components/ErrorParagraph";
import { EXPENSE } from "@/constants/constants";
import useStore from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(3, { message: "title is too short" }),
  description: z.string().min(30, { message: "description is too short" }),
  price: z.number().min(0.5),
  category: z.enum(["Groceries", "Utilities", "Entertainment"], {
    errorMap: () => ({ message: "Category is required." }),
  }),
});

type formData = z.infer<typeof schema>;

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();
  const addExpense = useStore((store) => store.addExpense);

  const onSubmit = (data: FieldValues) => {
    addExpense({
      id: Date.now(),
      title: data.title,
      description: data.description,
      price: data.price,
      category: data.category,
    });
    reset();
    navigate("/expenses");
  };

  return (
    <form
      className="py-8 p-4 rounded border-2 dark:border-gray-700 max-w-[1100px] m-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        {...register("title")}
        autoFocus
        placeholder="title"
      />
      {errors.title && <ErrorParagraph message={errors.title.message} />}
      <label htmlFor="description" className="mt-2">
        Description
      </label>
      <textarea
        {...register("description")}
        id="description"
        className="block w-full p-2 outline-none resize-none max-w-[700px] dark:text-white border border-gray-300 dark:border-none dark:bg-gray-700 rounded"
        placeholder="description"
      ></textarea>
      {errors.description && (
        <ErrorParagraph className="mt-1" message={errors.description.message} />
      )}
      <label htmlFor="price">Price</label>
      <input
        type="number"
        id="price"
        {...register("price", { valueAsNumber: true })}
        placeholder="price"
      />
      {errors.price && <ErrorParagraph message={errors.price.message} />}
      <label htmlFor="category" className="mt-2">
        Category
      </label>
      <select
        {...register("category")}
        id="category"
        className="text-gray-700 cursor-pointer"
      >
        <option value="">Select a category</option>
        {EXPENSE.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
      {errors.category && <ErrorParagraph message={errors.category.message} />}
      <Button
        title="create"
        type="submit"
        className="mt-3 text-white bg-green-700 hover:bg-green-600 active:bg-green-700"
      >
        Create
      </Button>
    </form>
  );
};

export default ExpenseForm;
