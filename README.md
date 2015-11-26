rect-connect
=====

Find connection points on the edges of rectangles for drawing arrows & stuff.

From the top of `index.js`:

```
/**
 * rectConnect(sourceCenter: {x, y}, sourceSize: {width, height},
 *             targetCenter: {x, y}, targetSize: {width, height})
 *   Imagine drawing a line between the centers of the source rectangle and the
 *   target rectangle. This function returns the intersections of this line
 *   with the boundaries of the two rectangles, in the format
 *   {source: {x, y}, target: {x, y}}.
 *
 * rectConnect(rectCenter: {x, y}, rectSize: {width, height}, point: {x, y})
 *   Imagine drawing a line between the center of the rectangle and the other
 *   point. This function returns the intersection of this line with the
 *   boundary of the rectangle, in the format {x, y}.
 */
 ```
