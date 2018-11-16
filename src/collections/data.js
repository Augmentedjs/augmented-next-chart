import { Collection } from "presentation-models";

import Point from "../models/point.js";

class ChartData extends Collection {
  constructor(models, options) {
    if (!options) {
      options = {};
    }
    options.model = Point;
    super(models, options);
  };
};

export default ChartData;
