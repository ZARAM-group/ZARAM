import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Submitting query: ${query}`);
  };

  return (
    <div>
      <form noValidate action="" role="search" onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={handleInputChange}
          placeholder="Search"
          style={{ height: "40px", width: "280px", borderRadius: "10px" }}
          title="Search bar"
        />
      </form>
    </div>
  );
};

export default SearchBar;
