define(['dart_sdk', 'packages/angular_dart_hero/src/commom/route_paths'], function(dart_sdk, packages__angular_dart_hero__src__commom__route_paths) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const hero$46template = packages__angular_dart_hero__src__commom__route_paths.src__model__hero$46template;
  const in_memory_data_service$46template = Object.create(dart.library);
  const CT = Object.create(null);
  in_memory_data_service$46template.initReflector = function initReflector() {
    if (dart.test(in_memory_data_service$46template._visited)) {
      return;
    }
    in_memory_data_service$46template._visited = true;
    hero$46template.initReflector();
  };
  dart.defineLazy(in_memory_data_service$46template, {
    /*in_memory_data_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_dart_hero/src/commom/in_memory_data_service.template", {
    "package:angular_dart_hero/src/commom/in_memory_data_service.template.dart": in_memory_data_service$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["in_memory_data_service.template.dart"],"names":[],"mappings":";;;;;;;;;AAUE,kBAAI;AACF;;AAEa,IAAf,6CAAW;AAEU,IAArB;EACF;;MARI,0CAAQ;YAAG","file":"in_memory_data_service.template.ddc.js"}');
  // Exports:
  return {
    src__commom__in_memory_data_service$46template: in_memory_data_service$46template
  };
});

//# sourceMappingURL=in_memory_data_service.template.ddc.js.map
