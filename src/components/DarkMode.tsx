import useStore from "@/store";
import { useEffect } from "react";
import { BsSun } from "react-icons/bs";

const DarkMode = () => {
  const darkMode = useStore((s) => s.darkMode);
  const setDarkMode = useStore((s) => s.setDarkMode);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <button
      title="darkMode"
      type="button"
      tabIndex={0}
      className="p-[10px] text-base rounded-sm hover:bg-gray-100 active:bg-gray-200 dark:active:opacity-70 dark:hover:bg-gray-700"
      onClick={() => setDarkMode()}
    >
      <BsSun />
    </button>
  );
};

export default DarkMode;
