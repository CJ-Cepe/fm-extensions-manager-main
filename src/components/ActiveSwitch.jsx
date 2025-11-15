export default function ActiveSwitch({ status, onClick }) {
  return (
    <label className="toggle">
      <input
        type="checkbox"
        checked={status}
        onChange={onClick}
        className="toggle__input"
      />
      <span className="toggle_slider"></span>
    </label>
  );
}
