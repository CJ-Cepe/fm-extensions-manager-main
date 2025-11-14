export default function FilterButton({ onclick, activeFilter, value }) {
  // if activeFilter change style
  return (
    <button type="submit" onClick={() => onclick(value)}>
      {value}
    </button>
  );
}
