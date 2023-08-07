import { DUMMY_SEARCH_STORE } from "../../data/ideabook.data";

module.exports = (req, res) => {
  const searchTerm = req.query.q; // Get the search term from query parameter 'q'
  const matchingResults = DUMMY_SEARCH_STORE.filter((result) => {
    return result.searchTerm.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const top7Results = matchingResults.slice(0, 7); // Get the top 7 results

  res.json(top7Results);
};
