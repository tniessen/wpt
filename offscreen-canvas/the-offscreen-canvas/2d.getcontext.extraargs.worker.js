// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.getcontext.extraargs
// Description:The 2D context ignores extra getContext arguments
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("The 2D context ignores extra getContext arguments");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

var offscreenCanvas2 = new OffscreenCanvas(100, 50);
_assertDifferent(offscreenCanvas2.getContext('2d', false, {}, [], 1, "2"), null, "offscreenCanvas2.getContext('2d', false, {}, [], 1, \"2\")", "null");
t.done();

});
done();
