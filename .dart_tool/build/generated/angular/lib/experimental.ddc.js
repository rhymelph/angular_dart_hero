define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const run = packages__angular__src__bootstrap__modules.src__bootstrap__run;
  const dynamic_component_loader = packages__angular__src__bootstrap__modules.src__core__linker__dynamic_component_loader;
  const component_loader = packages__angular__src__bootstrap__modules.src__core__linker__component_loader;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const map = packages__angular__src__core__change_detection__change_detection.src__di__injector__map;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const hierarchical = packages__angular__src__core__change_detection__change_detection.src__di__injector__hierarchical;
  const injector = packages__angular__src__core__change_detection__change_detection.src__di__injector__injector;
  const experimental = Object.create(dart.library);
  let LinkedMapOfObject$Object = () => (LinkedMapOfObject$Object = dart.constFn(_js_helper.LinkedMap$(core.Object, core.Object)))();
  let InjectorToInjector = () => (InjectorToInjector = dart.constFn(dart.fnType(injector.Injector, [], [injector.Injector])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: component_loader.ComponentLoader.prototype
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: dynamic_component_loader.SlowComponentLoader.prototype,
        [SlowComponentLoader__loader]: C1 || CT.C1
      });
    }
  });
  let C1;
  const SlowComponentLoader__loader = dart.privateName(dynamic_component_loader, "SlowComponentLoader._loader");
  let C0;
  experimental.rootLegacyInjector = function rootLegacyInjector(userInjector) {
    return run.appInjector(dart.fn(parent => {
      if (parent === void 0) parent = null;
      return new map.MapInjector.new(new (LinkedMapOfObject$Object()).from([dart.wrapType(dynamic_component_loader.SlowComponentLoader), C0 || CT.C0]), optimizations.unsafeCast(hierarchical.HierarchicalInjector, userInjector(parent)));
    }, InjectorToInjector()));
  };
  experimental.isDomRenderDirty = function isDomRenderDirty() {
    return dom_helpers.domRootRendererIsDirty;
  };
  experimental.resetDomRenderDirty = function resetDomRenderDirty() {
    dom_helpers.domRootRendererIsDirty = false;
  };
  dart.trackLibraries("packages/angular/experimental", {
    "package:angular/experimental.dart": experimental
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["experimental.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;gEAqC4C;AAI1C,UAAO,iBAAY,QAAE;;AACnB,YAAgB,yBAAI,uCAClB,4EAGC,4DAAW,AAAY,YAAA,CAAC,MAAM;;EAErC;;AAU2B;EAAsB;;AAOjB,IAA9B,qCAAyB;EAC3B","file":"experimental.ddc.js"}');
  // Exports:
  return {
    experimental: experimental
  };
});

//# sourceMappingURL=experimental.ddc.js.map
