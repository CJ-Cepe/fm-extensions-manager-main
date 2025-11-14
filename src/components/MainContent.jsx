import FilterButton from "./FilterButton";
import ExtensionCard from "./ExtensionCard";
import extensionData from "/data.json";

export default function MainContent() {
  return (
    <>
      <div>
        <h1>Extensions List</h1>

        <div>
          <FilterButton>All</FilterButton>
          <FilterButton>Active</FilterButton>
          <FilterButton>Inactive</FilterButton>
        </div>
      </div>

      <div>
        {extensionData.map((data) => {
          return <ExtensionCard key={data.name} data={data} />;
        })}
      </div>
    </>
  );
}
