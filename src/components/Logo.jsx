import logo from "/assets/images/logo.svg";

export default function Logo() {
  return (
    <a href="">
      <img
        src={logo}
        alt="Browser Extension Page Logo"
        width={"90px"}
        height={"90px"}
      />
    </a>
  );
}
