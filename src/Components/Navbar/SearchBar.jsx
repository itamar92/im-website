import { useState, histo } from "react";
import { Link, useHistory } from "react-router-dom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./navbar.css";

const SearchBar = ({ data }) => {
  let history = useHistory();
  const [searchFilter, setSearchFilter] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    if (!searchWord) return;
    const filterWords = data.filter((value) => {
      return value.productName.toLowerCase().includes(searchWord.toLowerCase());
      // value.tags.toLowerCase().includes(searchWord.toLowerCase())
    });
    setSearchFilter(filterWords);
    console.log("Filtered", filterWords);
  };

  return (
    <div className="search">
      {/* <div className="search__container">
        <input
          type="text"
          placeholder="Search for name/tags"
          name="search"
          onChange={handleFilter}
          required
        />
        <div className="search__icon">
          <SearchRoundedIcon />
        </div>
      </div>
      {searchFilter.length && (
        <div className="data__result">
          {searchFilter.map((item) => {
            return (
              <Link  key={item.id} className="data__item">
                <Link to={`/product/${item.id}`}> {item.productName}</Link>
              </span>
            );
          })}
        </div>
      )} */}
      <Autocomplete
        className="search__container"
        sx={{
          input: { color: "white" },
          width: 175,
          "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "white" },
          },
        }}
        options={data}
        getOptionLabel={(option) => `${option.productName} ${option.tags}`}
        id="auto-complete"
        autoComplete
        size="meduim"
        includeInputInList
        onChange={() => handleFilter}
        onClick={() => history.push(`/product/${searchFilter.id}`)}
        renderInput={(params) => (
          <TextField
            className="search__text"
            sx={{
              "& .MuiInputLabel-root": { color: "white" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
              },
            }}
            {...params}
            label="Search music..."
            variant="outlined"
          />
        )}
      />
    </div>
  );
};

export default SearchBar;
