define(['dart_sdk', 'packages/angular_test/src/bootstrap', 'packages/angular_dart_hero/app_component', 'packages/angular_dart_hero/app_component.template', 'packages/test_core/test_core', 'packages/test_api/src/backend/closed_exception', 'packages/matcher/src/core_matchers'], function(dart_sdk, packages__angular_test__src__bootstrap, packages__angular_dart_hero__app_component, packages__angular_dart_hero__app_component$46template, packages__test_core__test_core, packages__test_api__src__backend__closed_exception, packages__matcher__src__core_matchers) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const bed = packages__angular_test__src__bootstrap.src__frontend__bed;
  const app_component = packages__angular_dart_hero__app_component.app_component;
  const app_component$46template = packages__angular_dart_hero__app_component$46template.app_component$46template;
  const test_core = packages__test_core__test_core.test_core;
  const expect = packages__test_api__src__backend__closed_exception.src__frontend__expect;
  const core_matchers = packages__matcher__src__core_matchers.src__core_matchers;
  const app_test = Object.create(dart.library);
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let VoidToFutureOfvoid = () => (VoidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(bed.disposeAnyRunningTest, VoidToFutureOfvoid());
    }
  });
  let C0;
  app_test.main = function main() {
    let testBed = bed.NgTestBed.forComponent(app_component.AppComponent, app_component$46template.AppComponentNgFactory);
    let fixture = null;
    test_core.setUp(dart.fn(() => async.async(core.Null, function*() {
      fixture = (yield testBed.create());
    }), VoidToFutureOfNull()));
    test_core.tearDown(C0 || CT.C0);
    test_core.test("heading", dart.fn(() => {
      expect.expect(fixture.text, core_matchers.contains("My First AngularDart App"));
    }, VoidToNull()));
  };
  dart.trackLibraries("test/app_test", {
    "org-dartlang-app:///test/app_test.dart": app_test
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app_test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;AAOQ,kBACQ,uDAA8B;AAChB;AAI1B,IAFF,gBAAM;AAC4B,MAAhC,WAAU,MAAM,AAAQ,OAAD;IACxB;AAE8B,IAA/B;AAIE,IAFF,eAAK,WAAW;AAC4C,MAA1D,cAAO,AAAQ,OAAD,OAAO,uBAAS;;EAIlC","file":"app_test.ddc.js"}');
  // Exports:
  return {
    test__app_test: app_test
  };
});

//# sourceMappingURL=app_test.ddc.js.map
