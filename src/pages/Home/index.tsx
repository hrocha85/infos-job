import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetchTopHeadlines } from "../../services/api";
import SearchInput from "../../components/SearchInput";
import { ArticlesResponse } from "../../types";

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const isMobile = useMediaQuery("(max-width:500px)");

  const goToDetails = (id: any, data: any) => {
    const info = {
      id: id,
      data: data,
    };

    navigate(`/details/${info.id}`, { state: { user: info } });
  };

  const { data, error, isLoading } = useQuery<ArticlesResponse>({
    queryKey: ["topHeadlines"],
    queryFn: fetchTopHeadlines,
  });

  const handleSearchChange = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const filteredArticles = data?.articles?.filter((article: any) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
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

  return (
    <Box p={3}>
      <Box display="flex" mb={3}>
        <SearchInput onSearchChange={handleSearchChange} />
      </Box>

      {isLoading && (
        <Box display="flex" justifyContent="center" mt={6}>
          <CircularProgress size={80} />
        </Box>
      )}

      {error && (
        <Box mt={2}>
          <Alert severity="error">Error: {error.message}</Alert>
        </Box>
      )}

      {filteredArticles && (
        <Grid container spacing={4}>
          {filteredArticles?.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box
                p={1}
                border={1}
                borderRadius={2}
                bgcolor="background.paper"
                boxShadow={3}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                height="100%"
                sx={{
                  transition: "0.3s",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: 6,
                  },
                }}
                onClick={() => goToDetails(index, article)}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={1}
                >
                  <Typography variant="h6" pr={2}>
                    {article?.source.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    textAlign="right"
                    maxWidth="50%"
                  >
                    {article?.author
                      ? `By: ${article?.author}`
                      : "Author Unknown"}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection={isMobile ? "column" : "row"}
                  alignItems="center"
                  gap={2}
                  mb={2}
                >
                  {article.urlToImage && (
                    <Box
                      component="img"
                      src={article.urlToImage}
                      alt={article.title}
                      width={isMobile ? "100%" : "50%"}
                      height="120px"
                      borderRadius={2}
                      sx={{ objectFit: "cover" }}
                    />
                  )}
                  <Typography variant="body2" fontWeight="bold">
                    {article.title}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    textAlign="right"
                  >
                    {formatDate(article.publishedAt)}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Home;
