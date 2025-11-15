import ThemeSwitch from "./ThemeSwitch";
import Logo from "./Logo";

export default function HeadBar() {
  return (
    <div className="header__inner">
      <Logo />
      <ThemeSwitch />
    </div>
  );
}
