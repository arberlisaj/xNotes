import { useNavigate } from "react-router-dom";
import Button from "./Button";

const ErrorComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="w-screen text-center">
        <h1 className="mt-10 text-4xl font-[500]">Oops!</h1>
        <p className="text-lg ">Something went wrong. Please try again</p>
        <Button
          title="home"
          type="button"
          handleClick={() => navigate("/")}
          className="m-auto mt-2 text-gray-100 bg-gray-800 rounded-md hover:bg-gray-600 active:bg-gray-900"
        >
          Take me Home
        </Button>
      </section>
    </>
  );
};

export default ErrorComponent;
