define(['dart_sdk', 'packages/test/bootstrap/browser', 'test/app_test'], function(dart_sdk, packages__test__bootstrap__browser, test__app_test) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const browser = packages__test__bootstrap__browser.src__bootstrap__browser;
  const app_test = test__app_test.test__app_test;
  const app_test$46dart$46browser_test = Object.create(dart.library);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidToFn = () => (VoidToFn = dart.constFn(dart.fnType(VoidTovoid(), [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(app_test.main, VoidTovoid());
    }
  });
  let C0;
  app_test$46dart$46browser_test.main = function main() {
    browser.internalBootstrapBrowserTest(dart.fn(() => C0 || CT.C0, VoidToFn()));
  };
  dart.trackLibraries("test/app_test.dart.browser_test", {
    "org-dartlang-app:///test/app_test.dart.browser_test.dart": app_test$46dart$46browser_test
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app_test.dart.browser_test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;AAKyD,IAA7C,qCAA6B;EAC/B","file":"app_test.dart.browser_test.ddc.js"}');
  // Exports:
  return {
    test__app_test$46dart$46browser_test: app_test$46dart$46browser_test
  };
});

//# sourceMappingURL=app_test.dart.browser_test.ddc.js.map
