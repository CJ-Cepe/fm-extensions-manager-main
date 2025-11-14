import ActiveSwitch from "./ActiveSwitch";

export default function ExtensionCard({ extDetails, onRemove, onSlider }) {
  const { logo, name, description, isActive } = extDetails;
  return (
    <section>
      <div>
        <img src={logo} alt={`${name} icon`} />

        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div>
        <button onClick={() => onRemove(name)}>Remove</button>
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
