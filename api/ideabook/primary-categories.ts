import { PRIMARY_CATEGORIES } from "../../data/ideabook.data";

module.exports = (req, res, next) => {
  res.send(PRIMARY_CATEGORIES);
};
