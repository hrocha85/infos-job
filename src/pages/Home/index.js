import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Typography, CircularProgress, Alert, Grid, useMediaQuery, } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetchTopHeadlines } from "../../services/api";
import SearchInput from "../../components/SearchInput";
const Home = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const isMobile = useMediaQuery("(max-width:500px)");
    const goToDetails = (id, data) => {
        const info = {
            id: id,
            data: data,
        };
        navigate(`/details/${info.id}`, { state: { user: info } });
    };
    const { data, error, isLoading } = useQuery({
        queryKey: ["topHeadlines"],
        queryFn: fetchTopHeadlines,
    });
    const handleSearchChange = (searchTerm) => {
        setSearchTerm(searchTerm);
    };
    const filteredArticles = data?.articles?.filter((article) => article.title.toLowerCase().includes(searchTerm.toLowerCase()));
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        });
    };
    return (_jsxs(Box, { p: 3, children: [_jsx(Box, { display: "flex", mb: 3, children: _jsx(SearchInput, { onSearchChange: handleSearchChange }) }), isLoading && (_jsx(Box, { display: "flex", justifyContent: "center", mt: 6, children: _jsx(CircularProgress, { size: 80 }) })), error && (_jsx(Box, { mt: 2, children: _jsxs(Alert, { severity: "error", children: ["Error: ", error.message] }) })), filteredArticles && (_jsx(Grid, { container: true, spacing: 4, children: filteredArticles?.map((article, index) => (_jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, children: _jsxs(Box, { p: 1, border: 1, borderRadius: 2, bgcolor: "background.paper", boxShadow: 3, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", sx: {
                            transition: "0.3s",
                            cursor: "pointer",
                            "&:hover": {
                                transform: "scale(1.03)",
                                boxShadow: 6,
                            },
                        }, onClick: () => goToDetails(index, article), children: [_jsxs(Box, { display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1, children: [_jsx(Typography, { variant: "h6", pr: 2, children: article?.source.name }), _jsx(Typography, { variant: "body2", color: "textSecondary", textAlign: "right", maxWidth: "50%", children: article?.author
                                            ? `By: ${article?.author}`
                                            : "Author Unknown" })] }), _jsxs(Box, { display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "center", gap: 2, mb: 2, children: [article.urlToImage && (_jsx(Box, { component: "img", src: article.urlToImage, alt: article.title, width: isMobile ? "100%" : "50%", height: "120px", borderRadius: 2, sx: { objectFit: "cover" } })), _jsx(Typography, { variant: "body2", fontWeight: "bold", children: article.title })] }), _jsx(Box, { children: _jsx(Typography, { variant: "body2", color: "textSecondary", textAlign: "right", children: formatDate(article.publishedAt) }) })] }) }, index))) }))] }));
};
export default Home;
