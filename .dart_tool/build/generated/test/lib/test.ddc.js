define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const test = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/test/test", {
    "package:test/test.dart": test
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"test.ddc.js"}');
  // Exports:
  return {
    test: test
  };
});

//# sourceMappingURL=test.ddc.js.map
