import { useState } from "react";

function SearchBar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="search">
      <div className="searchBar" onClick={() => setIsActive(!isActive)}>
        <span>جستجو</span>
        <span>{isActive ? "-" : "+"}</span>
      </div>
      {isActive && (
        <div className="searchItem">
          <div>
            <span>نام</span> &nbsp;
            <input type="text" name="text" id="name" />
          </div>
          <div>
            <span>نام خانوادگی</span>&nbsp;
            <input type="text" name="text" id="lastName" />
          </div>
          <div>
            <span>کد ملی</span>&nbsp;
            <input type="number" name="number" id="numberCode" />
          </div>
          <button>جستجو</button>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
