import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./navbar.css";

const SearchBar = ({ data }) => {
  let history = useHistory();
  const [searchFilter, setSearchFilter] = useState([]);

  // const handleFilter = (value) => {
  //   const searchWord = value.productName;
  //   console.log(value);
  //   if (!searchWord) return;
  //   const filterWords = data.filter((value) => {
  //     return value.productName.toLowerCase().includes(searchWord.toLowerCase());
  //     // value.tags.toLowerCase().includes(searchWord.toLowerCase())
  //   });
  //   setSearchFilter(filterWords);
  //   console.log("Filtered", filterWords);
  //   console.log("searchFilter", searchFilter);
  // };

  const handleFilter = (e) => {
    setSearchFilter(e.target.value);
    console.log(searchFilter);
  };

  const handleOnClick = () => {
    console.log("Clicked");
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
        value={data.find((x) => x.productName === searchFilter)}
        getOptionLabel={(option) => `${option.productName} ${option.tags}`}
        filterSelectedOptions
        size="meduim"
        includeInputInList
        // onInputChange={handleFilter}
        // onChange={(event, value) => {
        //   handleFilter(value);
        // }}
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
            value={searchFilter.productName}
            name="search"
            label="Search music..."
            variant="outlined"
          />
        )}
        onChange={(e, obj) => {
          console.log(obj);
          history.push(`/product/${obj.id}`);
        }}
        // renderOption={(option) => (
        //   <React.Fragment>{option.productName}</React.Fragment>
        // )}
      />
    </div>
  );
};

export default SearchBar;
