import ActiveSwitch from "./ActiveSwitch";

export default function ExtensionCard({ extDetails, onRemove, onSlider }) {
  const { logo, name, description, isActive } = extDetails;
  return (
    <section className="ext-card">
      <div className="ext-card__header">
        <img src={logo} alt={`${name} icon`} className="ext-card__icon" />

        <div className="ext-card__info">
          <h2 className="ext-card__name">{name}</h2>
          <p className="ext-card__desc">{description}</p>
        </div>
      </div>

      <div className="ext-card__footer">
        <button onClick={() => onRemove(name)} className="ext-card__btn">
          Remove
        </button>
        <ActiveSwitch
          status={isActive}
          onClick={() => {
            onSlider(name);
          }}
        ></ActiveSwitch>
      </div>
    </section>
  );
}
