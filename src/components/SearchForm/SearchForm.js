import React ,{useState}from "react";
import "./SearchForm.css";

function SearchForm({ onChangeFilters }) {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeFilters({
      key: "text",
      value: searchText,
    });
  };
  const handleChangeSearchText = (e) => {
    setSearchText(e.target.value);
  };
  const handleChangeFilter = (e) => {
    onChangeFilters({
      key: e.target.name,
      value: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return (
    <form className="search" name="search" onSubmit={handleSubmit}>
      <div className="search__container search__container_type_query">
        <input name="text" onChange={handleChangeSearchText} className="search__text" type="text" placeholder="Фильмы" required />
        <button className="search__btn" type="submit">
         
        </button>
      </div>
      <div className="search__container search__container_type_filter">
        <label>
          <input name="short" type="checkbox" className="search__filter" onChange={handleChangeFilter}/>
          <span className="search__visible-filter" />
        </label>
        <label className="search__label">Короткометражки</label>
      </div>
    </form>
  );
}

export default SearchForm;
