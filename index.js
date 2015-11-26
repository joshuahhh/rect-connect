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

function rectConnect() {
  if (arguments.length === 3) {
    return _rectConnectRectToPoint.apply(undefined, arguments);
  }
  return _rectConnectRectToRect.apply(undefined, arguments);
};

function _rectConnectRectToPoint(rectCenter, rectSize, point) {
  var rectCenterX = rectCenter.x, rectCenterY = rectCenter.y;
  var rectHalfWidth = rectSize.width / 2, rectHalfHeight = rectSize.height / 2;
  var pointX = point.x, pointY = point.y;

  var deltaX = Math.abs(pointX - rectCenterX), deltaY = Math.abs(pointY - rectCenterY);
  var negX = (pointX < rectCenterX), negY = (pointY < rectCenterY);

  var connectionDeltaX, connectionDeltaY;
  if (deltaX == 0 || (deltaY / deltaX > rectHalfHeight / rectHalfWidth)) {
    // closer to y-axis
    connectionDeltaY = rectHalfHeight;
    connectionDeltaX = deltaX / deltaY * rectHalfHeight;
  } else {
    // closer to x-axis
    connectionDeltaX = rectHalfWidth;
    connectionDeltaY = deltaY / deltaX * rectHalfWidth;
  }

  return {
    x: rectCenterX + connectionDeltaX * (negX ? -1 : 1),
    y: rectCenterY + connectionDeltaY * (negY ? -1 : 1)
  };
};

var _rectConnectRectToRect = function(sourceCenter, sourceSize, targetCenter, targetSize) {
  return {
    source: _rectConnectRectToPoint(sourceCenter, sourceSize, targetCenter),
    target: _rectConnectRectToPoint(targetCenter, targetSize, sourceCenter)
  };
};

module.exports = rectConnect;
