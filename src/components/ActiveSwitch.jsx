export default function ActiveSwitch({ status, onClick }) {
  return (
    <label>
      <input type="checkbox" checked={status} onChange={onClick} />
      <span></span>
    </label>
  );
}
