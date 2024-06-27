import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import ErrorPage from "./pages/ErrorPage";
import ExpenseListPage from "./pages/expenses/ExpenseListPage";
import NewExpensePage from "./pages/expenses/NewExpensePage";
import NewTaskPage from "./pages/tasks/NewTaskPage";
import TaskListPage from "./pages/tasks/TaskListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="tasks" replace />,
      },
      {
        path: "tasks",
        children: [
          { index: true, element: <TaskListPage /> },
          { path: "new", element: <NewTaskPage /> },
        ],
      },
      {
        path: "expenses",
        children: [
          { index: true, element: <ExpenseListPage /> },
          { path: "new", element: <NewExpensePage /> },
        ],
      },
    ],
  },
]);

export default router;
