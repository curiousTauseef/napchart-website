var Napchart = {}

/* helper functions */
require('./helpers')(Napchart)
require('./draw/canvasHelpers')(Napchart)
require('../views/two24/shape/shapeHelpers')(Napchart)

/* config file */
require('./config')(Napchart)

/* core and init */
require('./core')(Napchart)

/* drawing */
require('../views/two24/shape/shape')(Napchart)
require('./draw/draw')(Napchart)

/* interaction */
require('./interactCanvas/interactCanvas')(Napchart)

/* history */
require('./history/history')(Napchart)

module.exports = Napchart