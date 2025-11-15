export default function FilterButton({ onclick, activeFilter, value }) {
  // if activeFilter change style filter--active
  return (
    <button type="submit" onClick={() => onclick(value)} className="filter">
      {value}
    </button>
  );
}
