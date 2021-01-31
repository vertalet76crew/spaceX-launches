import React, { useState } from "react";
import "./select.scss";

const Select = ({
  dropdownList,
  setDirty,
  setActiveFilter,
  activeFilter,
  filterName,
}) => {
  const [activeSite, setActiveSite] = useState(activeFilter);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropDownHandler = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="select__container">
      <div className="select__title">{filterName}</div>
      <div
        className={`select__button ${
          dropdownOpen ? "select__button_open" : ""
        }`}
        onClick={dropDownHandler}
      >
        {activeSite}
        <div
          className={`select__dropdown ${
            dropdownOpen ? "select__dropdown_open" : ""
          }`}
        >
          {dropdownList &&
            dropdownList.map((option, i) => (
              <div
                key={i}
                className="select__option"
                key={option}
                onClick={() => {
                  setActiveSite(option);
                  setDirty(true);
                  setActiveFilter(option);
                }}
              >
                {option}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Select;
