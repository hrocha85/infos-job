import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  useMediaQuery,
  Button,
} from "@mui/material";
import { useEffect } from "react";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:500px)");

  const { user } = location.state || { user: null };

  useEffect(() => {
    if (!user) navigate("/not-found");
  }, [user, navigate]);

  return (
    <Box p={2}>
      <Card>
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box id="box1">
              <Typography variant="h6" color="textSecondary">
                {user?.data?.source?.name || "Source Unknown"}{" "}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {new Date(user?.data?.publishedAt).toLocaleString() ||
                  "1 Jan 2020, 8:30AM"}{" "}
              </Typography>
            </Box>

            <Box id="box2">
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {user?.data.author || "Author Unknown"}
              </Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection={isMobile ? "column" : "row"}
            alignItems="flex-start"
            sx={{ marginTop: 2 }}
          >
            <CardMedia
              component="img"
              image={user?.data.urlToImage || null}
              alt={user?.data.title || "Article Image"}
              sx={{
                width: isMobile ? "100%" : "40%",
                height: "auto",
                borderRadius: 2,
                mb: isMobile ? 2 : 0,
              }}
            />

            <Typography
              variant="h6"
              component="div"
              sx={{ marginLeft: isMobile ? 0 : 2 }}
            >
              {user?.data?.title}
            </Typography>
          </Box>
          <Typography variant="body1" component="div" sx={{ marginTop: 2 }}>
            {user?.data?.description}
          </Typography>
        </CardContent>

        <Box display="flex" justifyContent="center" my={2}>
          <Button
            variant="contained"
            color="primary"
            href="/"
            size="large"
            sx={{ textTransform: "none" }}
          >
            Back to Home
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default Details;
