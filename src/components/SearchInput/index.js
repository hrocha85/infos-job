import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { InputBase, InputAdornment, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchInput = ({ onSearchChange }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setSearchTerm(newValue);
        onSearchChange(newValue);
    };
    return (_jsx(Paper, { component: "form", elevation: 1, sx: {
            display: "flex",
            alignItems: "center",
            padding: "0.5rem",
            borderRadius: "4px",
        }, children: _jsx(InputBase, { value: searchTerm, onChange: handleInputChange, fullWidth: true, startAdornment: _jsx(InputAdornment, { position: "start", children: _jsx(SearchIcon, {}) }), sx: {
                ml: 1,
                flex: 1,
            } }) }));
};
export default SearchInput;
