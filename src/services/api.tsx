export const fetchTopHeadlines = async () => {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=6b49c2d0c90f41dcb1754e4c440861ff"
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
