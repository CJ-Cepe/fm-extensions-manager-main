import { useEffect } from "react";

export default function FilterButton({ onclick, activeFilter, value }) {
  const isActive = activeFilter === value;
  const btnClassName = `filter ${isActive ? "filter--active" : ""}`;

  return (
    <button
      type="submit"
      onClick={() => onclick(value)}
      className={btnClassName}
    >
      {value}
    </button>
  );
}
