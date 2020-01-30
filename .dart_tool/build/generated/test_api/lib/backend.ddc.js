define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const backend = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/test_api/backend", {
    "package:test_api/backend.dart": backend
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"backend.ddc.js"}');
  // Exports:
  return {
    backend: backend
  };
});

//# sourceMappingURL=backend.ddc.js.map
