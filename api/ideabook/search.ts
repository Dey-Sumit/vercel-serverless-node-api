export const SEARCH_DICT = {
  suggestedSearchTerms: [
    {
      term: "haldi",
      meta: {
        type: "primaryCategory",
      },
    },

    {
      term: "Haldi wedding decoration",
      meta: {
        type: "subCategory",
        primaryCategory: "haldi", // associatedPrimaryCategory =  Haldi
      },
    },

    {
      term: "Haldi wedding outfit design",
      meta: {
        type: "freeSearch",
      },
    },
  ],
  suggestedSearchCategories: [],
};

module.exports = (req, res) => {
  res.send(SEARCH_DICT);
};
