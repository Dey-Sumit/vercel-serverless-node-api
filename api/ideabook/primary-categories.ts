import { CAROUSEL_DATA } from "../../data/ideabook.data";

module.exports = (req, res, next) => {
  res.send(CAROUSEL_DATA);
};
