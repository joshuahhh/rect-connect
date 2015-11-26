var test = require('tape');

var rectConnect = require('./index');

test('rect to point works', function (t) {
  var sourceCenter = {x: 100, y: 100};
  var sourceSize = {width: 40, height: 20};

  t.deepEqual(rectConnect(sourceCenter, sourceSize, {x: 0, y: 0}), {x: 90, y: 90});
  t.deepEqual(rectConnect(sourceCenter, sourceSize, {x: 100, y: 0}), {x: 100, y: 90});
  t.deepEqual(rectConnect(sourceCenter, sourceSize, {x: 200, y: 0}), {x: 110, y: 90});
  t.deepEqual(rectConnect(sourceCenter, sourceSize, {x: 200, y: 100}), {x: 120, y: 100});
  t.deepEqual(rectConnect(sourceCenter, sourceSize, {x: 200, y: 200}), {x: 110, y: 110});
  t.deepEqual(rectConnect(sourceCenter, sourceSize, {x: 100, y: 200}), {x: 100, y: 110});
  t.deepEqual(rectConnect(sourceCenter, sourceSize, {x: 0, y: 200}), {x: 90, y: 110});
  t.deepEqual(rectConnect(sourceCenter, sourceSize, {x: 0, y: 100}), {x: 80, y: 100});
  t.end();
});

test('rect to rect works', function (t) {
  var sourceCenter = {x: 100, y: 100};
  var sourceSize = {width: 40, height: 20};

  t.deepEqual(
    rectConnect(
      {x: 0, y: 0},
      {width: 40, height: 20},
      {x: 100, y: 100},
      {width: 20, height: 40}
    ),
    {source: {x: 10, y: 10}, target: {x: 90, y: 90}}
  );
  t.end();
});
