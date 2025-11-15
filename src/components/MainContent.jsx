import FilterButton from "./FilterButton";
import ExtensionCard from "./ExtensionCard";
import extensionData from "/data.json";
import { useState } from "react";

export default function MainContent() {
  const [filterBtn, setFilterBtn] = useState("All");
  const [extensionList, setExtensionList] = useState(extensionData);

  function handleFilterBtnClick(value) {
    setFilterBtn(value);
  }

  function handleRemoveBtn(name) {
    setExtensionList(
      extensionList.filter((extension) => {
        return extension.name !== name;
      })
    );
  }

  function handleSliderBtn(name) {
    setExtensionList(
      extensionList.map((extension) => {
        if (extension.name === name) {
          return {
            ...extension,
            isActive: !extension.isActive,
          };
        }
        return extension;
      })
    );
  }

  return (
    <>
      <div className="page-header">
        <h1 className="page-header__title">Extensions List</h1>

        <div className="page-header__filters">
          <FilterButton
            onclick={handleFilterBtnClick}
            activeFilter={filterBtn}
            value="All"
          />
          <FilterButton
            onclick={handleFilterBtnClick}
            activeFilter={filterBtn}
            value="Active"
          />
          <FilterButton
            onclick={handleFilterBtnClick}
            activeFilter={filterBtn}
            value="Inactive"
          />
        </div>
      </div>

      <div className="ext-grid">
        {extensionList
          .filter((extension) => {
            if (filterBtn === "Active") {
              return extension.isActive;
            } else if (filterBtn === "Inactive") {
              return !extension.isActive;
            }
            return true;
          })
          .map((extension) => (
            <ExtensionCard
              key={extension.name}
              extDetails={extension}
              onRemove={handleRemoveBtn}
              onSlider={handleSliderBtn}
            />
          ))}
      </div>
    </>
  );
}
