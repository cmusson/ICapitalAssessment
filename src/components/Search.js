import React, { useState } from "react";

function Search({ setSearchText }) {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    const searchText = e.target.value;
    setSearchInput(() => searchText);

    if (searchText.length >= 2) {
      setSearchText(searchText);
    } else {
      setSearchText("");
    }
  };

  return (
    <section className="layout-row justify-content-center mb-40">
      <input
        value={searchInput}
        onChange={handleInputChange}
        type="text"
        placeholder="Search for movie by name"
        className="w-75 py-2"
        data-testid="search"
      />
    </section>
  );
}

export default Search;
