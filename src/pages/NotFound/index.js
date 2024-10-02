import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Typography, Button } from "@mui/material";
const NotFound = () => {
    return (_jsxs(Box, { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "100vh", textAlign: "center", bgcolor: "#f5f5f5", p: 3, children: [_jsx(Typography, { variant: "h1", fontWeight: "bold", color: "primary", gutterBottom: true, children: "404" }), _jsx(Typography, { variant: "h5", color: "textSecondary", gutterBottom: true, children: "Page Not Found" }), _jsx(Typography, { variant: "body1", color: "textSecondary", mb: 4, children: "Sorry, the page you are looking for does not exist or has been moved." }), _jsx(Button, { variant: "contained", color: "primary", href: "/", size: "large", sx: { textTransform: "none" }, children: "Back to Home" })] }));
};
export default NotFound;
