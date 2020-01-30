define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular_test = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/angular_test/angular_test", {
    "package:angular_test/angular_test.dart": angular_test
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"angular_test.ddc.js"}');
  // Exports:
  return {
    angular_test: angular_test
  };
});

//# sourceMappingURL=angular_test.ddc.js.map
