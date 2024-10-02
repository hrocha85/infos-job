import axios from "axios";

export const fetchTopHeadlines = async () => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=6b49c2d0c90f41dcb1754e4c440861ff"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Network response was not ok");
  }
};
