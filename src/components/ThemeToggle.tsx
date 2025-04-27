// "use client";

// import { useTheme } from "@/app/provider";
// import { FiSun, FiMoon } from "react-icons/fi";


// export default function ThemeToggle() {
//   const { darkMode, toggleTheme } = useTheme();

//   return (
//     <button
//       onClick={toggleTheme}
//       className="p-2 rounded-full focus:outline-none"
//       aria-label="Toggle dark mode"
//     >
//       {darkMode ? (
//         <FiSun className="w-5 h-5 text-yellow-300" />
//       ) : (
//         <FiMoon className="w-5 h-5 text-gray-800" />
//       )}
//     </button>
//   );
// }


"use client";

import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <FiSun className="w-5 h-5 text-yellow-400" />
      ) : (
        <FiMoon className="w-5 h-5 text-gray-800" />
      )}
    </button>
  );
}