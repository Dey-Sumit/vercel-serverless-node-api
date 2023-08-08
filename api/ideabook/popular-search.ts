import { POPULAR_SEARCHES } from "../../data/ideabook.data";

module.exports = (req, res, next) => {
  res.send(POPULAR_SEARCHES);
};
