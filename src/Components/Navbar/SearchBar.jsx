import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./navbar.css";

const SearchBar = ({ data }) => {
 const history = useHistory(); 
  const [searchFilter, setSearchFilter] = useState([]);

  return (
    <div className="search">
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
        renderInput={(params) => (
          <TextField
            className="search__text"
            sx={{
              "& .MuiInputLabel-root": { color: "white" }, //styles label
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
          history.push(`/product/${obj.id}`);
        }}
      />
    </div>
  );
};

export default SearchBar;
