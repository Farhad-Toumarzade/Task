function SearchBar() {
  return (
    <div className="search">
      <div className="searchBar">
        <span>جستجو</span>
      </div>
      <div className="searchItem">
        <div>
          <span>نام</span> &nbsp;
          <input type="text" name="text" id="name" />
        </div>
        <div>
          <span>نام خانوادگی</span>&nbsp;
          <input type="text" name="text" id="Lastname" />
        </div>
        <div>
          <span>کد ملی</span>&nbsp;
          <input type="number" name="number" id="numberCode" />
        </div>
        <button>جستجو</button>
      </div>
    </div>
  );
}

export default SearchBar;
