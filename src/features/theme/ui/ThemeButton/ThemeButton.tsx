import { themeIcon } from "@/shared/assets";
import { useTheme } from "@/app/providers/ThemeProvider";

const ThemeButton = () => {
    const { isDark, toggleTheme } = useTheme();
  return (
  <img
    src={isDark ? themeIcon.light : themeIcon.dark}
    width={30}
    alt="theme"
    onClick={toggleTheme}
  />
  )

};

export default ThemeButton;
