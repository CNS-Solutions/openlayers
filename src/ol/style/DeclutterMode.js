/**
 * @module ol/style/DeclutterMode
 */

/**
 * Declutter mode. One of 'declutter', 'obstacle', 'none'.
 * @enum {string}
 */
export default {
  /**
   * Declutter: hide if it is overlapping another item.
   */
  DECLUTTER: 'declutter',
  /**
   * Obstacle: draw item, but include it as obstacle.
   */
  OBSTACLE: 'obstacle',
  /**
   * None: no decluttering, draw item.
   */
  NONE: 'none',
};
