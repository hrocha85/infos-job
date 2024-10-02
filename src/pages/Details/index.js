import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Card, CardContent, CardMedia, useMediaQuery, Button, } from "@mui/material";
import { useEffect } from "react";
const Details = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isMobile = useMediaQuery("(max-width:500px)");
    const { user } = location.state || { user: null };
    useEffect(() => {
        if (!user)
            navigate("/not-found");
    }, [user, navigate]);
    return (_jsx(Box, { p: 2, children: _jsxs(Card, { children: [_jsxs(CardContent, { children: [_jsxs(Box, { display: "flex", justifyContent: "space-between", alignItems: "center", children: [_jsxs(Box, { id: "box1", children: [_jsxs(Typography, { variant: "h6", color: "textSecondary", children: [user?.data?.source?.name || "Source Unknown", " "] }), _jsxs(Typography, { variant: "body2", color: "textSecondary", children: [new Date(user?.data?.publishedAt).toLocaleString() ||
                                                    "1 Jan 2020, 8:30AM", " "] })] }), _jsx(Box, { id: "box2", children: _jsx(Typography, { variant: "body2", color: "textSecondary", gutterBottom: true, children: user?.data.author || "Author Unknown" }) })] }), _jsxs(Box, { display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "flex-start", sx: { marginTop: 2 }, children: [_jsx(CardMedia, { component: "img", image: user?.data.urlToImage || null, alt: user?.data.title || "Article Image", sx: {
                                        width: isMobile ? "100%" : "40%",
                                        height: "auto",
                                        borderRadius: 2,
                                        mb: isMobile ? 2 : 0,
                                    } }), _jsx(Typography, { variant: "h6", component: "div", sx: { marginLeft: isMobile ? 0 : 2 }, children: user?.data?.title })] }), _jsx(Typography, { variant: "body1", component: "div", sx: { marginTop: 2 }, children: user?.data?.description })] }), _jsx(Box, { display: "flex", justifyContent: "center", my: 2, children: _jsx(Button, { variant: "contained", color: "primary", href: "/", size: "large", sx: { textTransform: "none" }, children: "Back to Home" }) })] }) }));
};
export default Details;
