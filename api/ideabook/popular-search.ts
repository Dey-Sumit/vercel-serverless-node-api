import { SUGGESTED_SEARCH } from "../../data/ideabook.data";

module.exports = (req, res, next) => {
  res.send(SUGGESTED_SEARCH);
};
