import { DUMMY_SEARCH_STORE, POPULAR_CATEGORIES } from "../../data/ideabook.data";

// module.exports = (req, res) => {
//   const searchTerm = req.query.q; // Get the search term from query parameter 'q'
//   const matchingResults = DUMMY_SEARCH_STORE.filter((result) => {
//     return result.searchTerm.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   const top7Results = matchingResults.slice(0, 7); // Get the top 7 results
//   const response = {
//     suggestedSearchTerms: top7Results,
//     suggested_search_categories: [],
//   };
//   res.json(top7Results);
// };

module.exports = (req, res) => {
  const searchTerm = req.query.q; // Get the search term from query parameter 'q'

  const matchingSearchTerms = DUMMY_SEARCH_STORE.filter((result) => {
    return result.searchTerm.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const matchingCategories = POPULAR_CATEGORIES.filter((category) => {
    return category.label.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const top7SearchTerms = matchingSearchTerms.slice(0, 7);
  const suggestedSearchCategories = matchingCategories.slice(0, 2);

  const response = {
    suggestedSearchTerms: top7SearchTerms,
    suggestedSearchCategories: suggestedSearchCategories,
  };

  res.json(response);
};
