import ActiveSwitch from "./ActiveSwitch";

export default function ExtensionCard({ data }) {
  const { logo, name, description, isActive } = data;
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
        <button>Remove</button>
        <ActiveSwitch isactive={isActive}></ActiveSwitch>
      </div>
    </section>
  );
}
