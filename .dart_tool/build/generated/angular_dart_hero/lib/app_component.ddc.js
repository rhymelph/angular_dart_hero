define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const lifecycle_hooks = packages__angular__src__core__change_detection__change_detection.src__core__metadata__lifecycle_hooks;
  const app_component = Object.create(dart.library);
  const CT = Object.create(null);
  const name = dart.privateName(app_component, "AppComponent.name");
  app_component.AppComponent = class AppComponent extends core.Object {
    get name() {
      return this[name];
    }
    set name(value) {
      super.name = value;
    }
    ngOnInit() {
    }
  };
  (app_component.AppComponent.new = function() {
    this[name] = "Tour of Heros";
    ;
  }).prototype = app_component.AppComponent.prototype;
  dart.addTypeTests(app_component.AppComponent);
  app_component.AppComponent[dart.implements] = () => [lifecycle_hooks.OnInit];
  dart.setMethodSignature(app_component.AppComponent, () => ({
    __proto__: dart.getMethods(app_component.AppComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(app_component.AppComponent, "package:angular_dart_hero/app_component.dart");
  dart.setFieldSignature(app_component.AppComponent, () => ({
    __proto__: dart.getFields(app_component.AppComponent.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/angular_dart_hero/app_component", {
    "package:angular_dart_hero/app_component.dart": app_component
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app_component.dart"],"names":[],"mappings":";;;;;;;;;;IAoBe;;;;;;;IAIb;;;IAJa,aAAO;;EAKtB","file":"app_component.ddc.js"}');
  // Exports:
  return {
    app_component: app_component
  };
});

//# sourceMappingURL=app_component.ddc.js.map
