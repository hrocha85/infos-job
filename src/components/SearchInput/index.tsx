import React, { useState } from "react";
import { InputBase, InputAdornment, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchInputProps {
  onSearchChange: (searchTerm: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchTerm(newValue);
    onSearchChange(newValue);
  };

  return (
    <Paper
      component="form"
      elevation={1}
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "0.5rem",
        borderRadius: "4px",
      }}
    >
      <InputBase
        value={searchTerm}
        onChange={handleInputChange}
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        sx={{
          ml: 1,
          flex: 1,
        }}
      />
    </Paper>
  );
};

export default SearchInput;
