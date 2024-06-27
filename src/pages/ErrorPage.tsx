import ErrorComponent from "@/components/ErrorComponent";
import NotFound from "@/components/NotFound";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <section>
      {isRouteErrorResponse(error) ? <NotFound /> : <ErrorComponent />}
    </section>
  );
};

export default ErrorPage;
