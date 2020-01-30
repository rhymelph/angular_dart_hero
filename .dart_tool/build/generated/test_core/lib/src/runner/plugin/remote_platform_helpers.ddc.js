define(['dart_sdk', 'packages/test_api/src/remote_listener', 'packages/test_api/src/suite_channel_manager', 'packages/test_api/src/backend/closed_exception'], function(dart_sdk, packages__test_api__src__remote_listener, packages__test_api__src__suite_channel_manager, packages__test_api__src__backend__closed_exception) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const remote_listener = packages__test_api__src__remote_listener.src__remote_listener;
  const suite_channel_manager = packages__test_api__src__suite_channel_manager.src__suite_channel_manager;
  const stack_trace_formatter = packages__test_api__src__backend__closed_exception.src__backend__stack_trace_formatter;
  const remote_platform_helpers = Object.create(dart.library);
  const CT = Object.create(null);
  remote_platform_helpers.serializeSuite = function serializeSuite(getMain, opts) {
    let hidePrints = opts && 'hidePrints' in opts ? opts.hidePrints : true;
    let beforeLoad = opts && 'beforeLoad' in opts ? opts.beforeLoad : null;
    return remote_listener.RemoteListener.start(getMain, {hidePrints: hidePrints, beforeLoad: beforeLoad});
  };
  remote_platform_helpers.suiteChannel = function suiteChannel(name) {
    let manager = suite_channel_manager.SuiteChannelManager.current;
    if (manager == null) {
      dart.throw(new core.StateError.new("suiteChannel() may only be called within a test worker."));
    }
    return manager.connectOut(name);
  };
  remote_platform_helpers.setStackTraceMapper = function setStackTraceMapper(mapper) {
    let formatter = stack_trace_formatter.StackTraceFormatter.current;
    if (formatter == null) {
      dart.throw(new core.StateError.new("setStackTraceMapper() may only be called within a test worker."));
    }
    formatter.configure({mapper: mapper});
  };
  dart.trackLibraries("packages/test_core/src/runner/plugin/remote_platform_helpers", {
    "package:test_core/src/runner/plugin/remote_platform_helpers.dart": remote_platform_helpers
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["remote_platform_helpers.dart"],"names":[],"mappings":";;;;;;;;;;mEAgCsC;QACxB;QAA0B;AACpC,UAAe,sCAAM,OAAO,eACZ,UAAU,cAAc,UAAU;EAAC;+DAWrB;AAC5B,kBAA8B;AAClC,QAAI,AAAQ,OAAD,IAAI;AAC8D,MAA3E,WAAM,wBAAW;;AAGnB,UAAO,AAAQ,QAAD,YAAY,IAAI;EAChC;6EAO0C;AACpC,oBAAgC;AACpC,QAAI,AAAU,SAAD,IAAI;AAEsD,MADrE,WAAM,wBACF;;AAG6B,IAAnC,AAAU,SAAD,oBAAmB,MAAM;EACpC","file":"remote_platform_helpers.ddc.js"}');
  // Exports:
  return {
    src__runner__plugin__remote_platform_helpers: remote_platform_helpers
  };
});

//# sourceMappingURL=remote_platform_helpers.ddc.js.map
