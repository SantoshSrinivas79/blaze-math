// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by math.js.
import { name as packageName } from "meteor/manuelro:math";

// Write your tests here!
// Here is an example.
Tinytest.add('math - example', function (test) {
  test.equal(packageName, "math");
});
