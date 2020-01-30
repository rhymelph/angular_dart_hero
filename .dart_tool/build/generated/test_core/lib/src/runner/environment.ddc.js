define(['dart_sdk', 'packages/test_api/src/backend/closed_exception', 'packages/collection/collection', 'packages/stream_channel/stream_channel', 'packages/async/async', 'packages/collection/src/canonicalized_map', 'packages/boolean_selector/boolean_selector', 'packages/test_api/src/backend/metadata', 'packages/source_span/source_span'], function(dart_sdk, packages__test_api__src__backend__closed_exception, packages__collection__collection, packages__stream_channel__stream_channel, packages__async__async, packages__collection__src__canonicalized_map, packages__boolean_selector__boolean_selector, packages__test_api__src__backend__metadata, packages__source_span__source_span) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const live_test = packages__test_api__src__backend__closed_exception.src__backend__live_test;
  const group = packages__test_api__src__backend__closed_exception.src__backend__group;
  const group_entry = packages__test_api__src__backend__closed_exception.src__backend__group_entry;
  const suite = packages__test_api__src__backend__closed_exception.src__backend__suite;
  const test = packages__test_api__src__backend__closed_exception.src__backend__test;
  const state$ = packages__test_api__src__backend__closed_exception.src__backend__state;
  const union_set = packages__collection__collection.src__union_set;
  const functions = packages__collection__collection.src__functions;
  const stream_channel = packages__stream_channel__stream_channel.stream_channel;
  const multi_channel = packages__stream_channel__stream_channel.src__multi_channel;
  const async_memoizer = packages__async__async.src__async_memoizer;
  const cancelable_operation = packages__async__async.src__cancelable_operation;
  const future_group = packages__async__async.src__future_group;
  const unmodifiable_wrappers = packages__collection__src__canonicalized_map.src__unmodifiable_wrappers;
  const boolean_selector = packages__boolean_selector__boolean_selector.boolean_selector;
  const platform_selector = packages__test_api__src__backend__metadata.src__backend__platform_selector;
  const metadata$ = packages__test_api__src__backend__metadata.src__backend__metadata;
  const runtime = packages__test_api__src__backend__metadata.src__backend__runtime;
  const timeout = packages__test_api__src__backend__metadata.src__frontend__timeout;
  const suite_platform = packages__test_api__src__backend__metadata.src__backend__suite_platform;
  const utils = packages__test_api__src__backend__metadata.src__utils;
  const span_exception = packages__source_span__source_span.src__span_exception;
  const span = packages__source_span__source_span.src__span;
  const live_suite = Object.create(dart.library);
  const runner_suite = Object.create(dart.library);
  const environment = Object.create(dart.library);
  const suite$ = Object.create(dart.library);
  const runtime_selection = Object.create(dart.library);
  const reporter = Object.create(dart.library);
  const live_suite_controller = Object.create(dart.library);
  const io_stub = Object.create(dart.library);
  const load_exception = Object.create(dart.library);
  const environment$ = Object.create(dart.library);
  const $add = dartx.add;
  const $toSet = dartx.toSet;
  const $map = dartx.map;
  const $isEmpty = dartx.isEmpty;
  const $keys = dartx.keys;
  const $values = dartx.values;
  const $_equals = dartx._equals;
  const $toList = dartx.toList;
  const $addAll = dartx.addAll;
  const $any = dartx.any;
  const $forEach = dartx.forEach;
  const $remove = dartx.remove;
  const $fold = dartx.fold;
  const $hashCode = dartx.hashCode;
  const $replaceFirst = dartx.replaceFirst;
  const $contains = dartx.contains;
  const $toString = dartx.toString;
  let SetOfLiveTest = () => (SetOfLiveTest = dart.constFn(core.Set$(live_test.LiveTest)))();
  let JSArrayOfSetOfLiveTest = () => (JSArrayOfSetOfLiveTest = dart.constFn(_interceptors.JSArray$(SetOfLiveTest())))();
  let LinkedHashSetOfLiveTest = () => (LinkedHashSetOfLiveTest = dart.constFn(collection.LinkedHashSet$(live_test.LiveTest)))();
  let UnionSetOfLiveTest = () => (UnionSetOfLiveTest = dart.constFn(union_set.UnionSet$(live_test.LiveTest)))();
  let FutureOfRunnerSuite = () => (FutureOfRunnerSuite = dart.constFn(async.Future$(runner_suite.RunnerSuite)))();
  let JSArrayOfGroupEntry = () => (JSArrayOfGroupEntry = dart.constFn(_interceptors.JSArray$(group_entry.GroupEntry)))();
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let _IdentityHashSetOfString = () => (_IdentityHashSetOfString = dart.constFn(collection._IdentityHashSet$(core.String)))();
  let GroupToRunnerSuite = () => (GroupToRunnerSuite = dart.constFn(dart.fnType(runner_suite.RunnerSuite, [group.Group])))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let UnmodifiableSetViewOfPattern = () => (UnmodifiableSetViewOfPattern = dart.constFn(unmodifiable_wrappers.UnmodifiableSetView$(core.Pattern)))();
  let _HashSetOfPattern = () => (_HashSetOfPattern = dart.constFn(collection._HashSet$(core.Pattern)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let RuntimeSelectionToString = () => (RuntimeSelectionToString = dart.constFn(dart.fnType(core.String, [runtime_selection.RuntimeSelection])))();
  let MapEntryOfBooleanSelector$Metadata = () => (MapEntryOfBooleanSelector$Metadata = dart.constFn(core.MapEntry$(boolean_selector.BooleanSelector, metadata$.Metadata)))();
  let BooleanSelectorAndSuiteConfigurationToMapEntryOfBooleanSelector$Metadata = () => (BooleanSelectorAndSuiteConfigurationToMapEntryOfBooleanSelector$Metadata = dart.constFn(dart.fnType(MapEntryOfBooleanSelector$Metadata(), [boolean_selector.BooleanSelector, suite$.SuiteConfiguration])))();
  let MapEntryOfPlatformSelector$Metadata = () => (MapEntryOfPlatformSelector$Metadata = dart.constFn(core.MapEntry$(platform_selector.PlatformSelector, metadata$.Metadata)))();
  let PlatformSelectorAndSuiteConfigurationToMapEntryOfPlatformSelector$Metadata = () => (PlatformSelectorAndSuiteConfigurationToMapEntryOfPlatformSelector$Metadata = dart.constFn(dart.fnType(MapEntryOfPlatformSelector$Metadata(), [platform_selector.PlatformSelector, suite$.SuiteConfiguration])))();
  let UnmodifiableSetViewOfString = () => (UnmodifiableSetViewOfString = dart.constFn(unmodifiable_wrappers.UnmodifiableSetView$(core.String)))();
  let SyncIterableOfSuiteConfiguration = () => (SyncIterableOfSuiteConfiguration = dart.constFn(_js_helper.SyncIterable$(suite$.SuiteConfiguration)))();
  let MapEntryOfBooleanSelector$SuiteConfiguration = () => (MapEntryOfBooleanSelector$SuiteConfiguration = dart.constFn(core.MapEntry$(boolean_selector.BooleanSelector, suite$.SuiteConfiguration)))();
  let BooleanSelectorAndMetadataToMapEntryOfBooleanSelector$SuiteConfiguration = () => (BooleanSelectorAndMetadataToMapEntryOfBooleanSelector$SuiteConfiguration = dart.constFn(dart.fnType(MapEntryOfBooleanSelector$SuiteConfiguration(), [boolean_selector.BooleanSelector, metadata$.Metadata])))();
  let MapEntryOfPlatformSelector$SuiteConfiguration = () => (MapEntryOfPlatformSelector$SuiteConfiguration = dart.constFn(core.MapEntry$(platform_selector.PlatformSelector, suite$.SuiteConfiguration)))();
  let PlatformSelectorAndMetadataToMapEntryOfPlatformSelector$SuiteConfiguration = () => (PlatformSelectorAndMetadataToMapEntryOfPlatformSelector$SuiteConfiguration = dart.constFn(dart.fnType(MapEntryOfPlatformSelector$SuiteConfiguration(), [platform_selector.PlatformSelector, metadata$.Metadata])))();
  let LinkedMapOfBooleanSelector$Metadata = () => (LinkedMapOfBooleanSelector$Metadata = dart.constFn(_js_helper.LinkedMap$(boolean_selector.BooleanSelector, metadata$.Metadata)))();
  let LinkedMapOfPlatformSelector$Metadata = () => (LinkedMapOfPlatformSelector$Metadata = dart.constFn(_js_helper.LinkedMap$(platform_selector.PlatformSelector, metadata$.Metadata)))();
  let RuntimeToString = () => (RuntimeToString = dart.constFn(dart.fnType(core.String, [runtime.Runtime])))();
  let RuntimeTobool = () => (RuntimeTobool = dart.constFn(dart.fnType(core.bool, [runtime.Runtime])))();
  let PlatformSelectorAndSuiteConfigurationToNull = () => (PlatformSelectorAndSuiteConfigurationToNull = dart.constFn(dart.fnType(core.Null, [platform_selector.PlatformSelector, suite$.SuiteConfiguration])))();
  let LinkedMapOfPlatformSelector$SuiteConfiguration = () => (LinkedMapOfPlatformSelector$SuiteConfiguration = dart.constFn(_js_helper.LinkedMap$(platform_selector.PlatformSelector, suite$.SuiteConfiguration)))();
  let SuiteConfigurationAndSuiteConfigurationToSuiteConfiguration = () => (SuiteConfigurationAndSuiteConfigurationToSuiteConfiguration = dart.constFn(dart.fnType(suite$.SuiteConfiguration, [suite$.SuiteConfiguration, suite$.SuiteConfiguration])))();
  let LinkedHashMapOfBooleanSelector$SuiteConfiguration = () => (LinkedHashMapOfBooleanSelector$SuiteConfiguration = dart.constFn(collection.LinkedHashMap$(boolean_selector.BooleanSelector, suite$.SuiteConfiguration)))();
  let SuiteConfigurationAndBooleanSelectorToSuiteConfiguration = () => (SuiteConfigurationAndBooleanSelectorToSuiteConfiguration = dart.constFn(dart.fnType(suite$.SuiteConfiguration, [suite$.SuiteConfiguration, boolean_selector.BooleanSelector])))();
  let UnmodifiableSetViewOfLiveTest = () => (UnmodifiableSetViewOfLiveTest = dart.constFn(unmodifiable_wrappers.UnmodifiableSetView$(live_test.LiveTest)))();
  let StreamControllerOfLiveTest = () => (StreamControllerOfLiveTest = dart.constFn(async.StreamController$(live_test.LiveTest)))();
  let _HashSetOfLiveTest = () => (_HashSetOfLiveTest = dart.constFn(collection._HashSet$(live_test.LiveTest)))();
  let ListToNull = () => (ListToNull = dart.constFn(dart.fnType(core.Null, [core.List])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let StateToNull = () => (StateToNull = dart.constFn(dart.fnType(core.Null, [state$.State])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], core.String);
    },
    get C1() {
      return C1 = dart.constList(["vm"], core.String);
    },
    get C2() {
      return C2 = dart.constMap(core.Null, core.Null, []);
    }
  });
  live_suite.LiveSuite = class LiveSuite extends core.Object {
    get liveTests() {
      let sets = JSArrayOfSetOfLiveTest().of([this.passed, this.skipped, this.failed]);
      if (this.active != null) sets[$add](LinkedHashSetOfLiveTest().from([this.active]));
      return new (UnionSetOfLiveTest()).from(sets);
    }
  };
  (live_suite.LiveSuite.new = function() {
    ;
  }).prototype = live_suite.LiveSuite.prototype;
  dart.addTypeTests(live_suite.LiveSuite);
  dart.setGetterSignature(live_suite.LiveSuite, () => ({
    __proto__: dart.getGetters(live_suite.LiveSuite.__proto__),
    liveTests: core.Set$(live_test.LiveTest)
  }));
  dart.setLibraryUri(live_suite.LiveSuite, "package:test_core/src/runner/live_suite.dart");
  const _controller$ = dart.privateName(runner_suite, "_controller");
  const _environment$ = dart.privateName(runner_suite, "_environment");
  const _config$ = dart.privateName(runner_suite, "_config");
  const _isDebugging = dart.privateName(runner_suite, "_isDebugging");
  const _onDebuggingController = dart.privateName(runner_suite, "_onDebuggingController");
  const _suite = dart.privateName(runner_suite, "_suite");
  const _close = dart.privateName(runner_suite, "_close");
  runner_suite.RunnerSuite = class RunnerSuite extends suite.Suite {
    get environment() {
      return this[_controller$][_environment$];
    }
    get config() {
      return this[_controller$][_config$];
    }
    get isDebugging() {
      return this[_controller$][_isDebugging];
    }
    get onDebugging() {
      return this[_controller$][_onDebuggingController].stream;
    }
    channel(name) {
      return this[_controller$].channel(name);
    }
    static new(environment, config, group, platform, opts) {
      let path = opts && 'path' in opts ? opts.path : null;
      let onClose = opts && 'onClose' in opts ? opts.onClose : null;
      let controller = new runner_suite.RunnerSuiteController._local(environment, config, {onClose: onClose});
      let suite = new runner_suite.RunnerSuite.__(controller, group, path, platform);
      controller[_suite] = FutureOfRunnerSuite().value(suite);
      return suite;
    }
    filter(callback) {
      let filtered = this.group.filter(callback);
      filtered == null ? filtered = new group.Group.root(JSArrayOfGroupEntry().of([]), {metadata: this.metadata}) : null;
      return new runner_suite.RunnerSuite.__(this[_controller$], filtered, this.path, this.platform);
    }
    close() {
      return this[_controller$][_close]();
    }
  };
  (runner_suite.RunnerSuite.__ = function(_controller, group, path, platform) {
    this[_controller$] = _controller;
    runner_suite.RunnerSuite.__proto__.new.call(this, group, platform, {path: path});
    ;
  }).prototype = runner_suite.RunnerSuite.prototype;
  dart.addTypeTests(runner_suite.RunnerSuite);
  dart.setMethodSignature(runner_suite.RunnerSuite, () => ({
    __proto__: dart.getMethods(runner_suite.RunnerSuite.__proto__),
    channel: dart.fnType(stream_channel.StreamChannel, [core.String]),
    filter: dart.fnType(runner_suite.RunnerSuite, [dart.fnType(core.bool, [test.Test])]),
    close: dart.fnType(async.Future, [])
  }));
  dart.setGetterSignature(runner_suite.RunnerSuite, () => ({
    __proto__: dart.getGetters(runner_suite.RunnerSuite.__proto__),
    environment: environment.Environment,
    config: suite$.SuiteConfiguration,
    isDebugging: core.bool,
    onDebugging: async.Stream$(core.bool)
  }));
  dart.setLibraryUri(runner_suite.RunnerSuite, "package:test_core/src/runner/runner_suite.dart");
  dart.setFieldSignature(runner_suite.RunnerSuite, () => ({
    __proto__: dart.getFields(runner_suite.RunnerSuite.__proto__),
    [_controller$]: dart.finalFieldType(runner_suite.RunnerSuiteController)
  }));
  const _channelNames = dart.privateName(runner_suite, "_channelNames");
  const _closeMemo = dart.privateName(runner_suite, "_closeMemo");
  const _suiteChannel$ = dart.privateName(runner_suite, "_suiteChannel");
  const _onClose = dart.privateName(runner_suite, "_onClose");
  runner_suite.RunnerSuiteController = class RunnerSuiteController extends core.Object {
    get suite() {
      return this[_suite];
    }
    setDebugging(debugging) {
      if (dart.equals(debugging, this[_isDebugging])) return;
      this[_isDebugging] = debugging;
      this[_onDebuggingController].add(debugging);
    }
    channel(name) {
      if (!dart.test(this[_channelNames].add(name))) {
        dart.throw(new core.StateError.new("Duplicate RunnerSuite.channel() connection \"" + dart.str(name) + "\"."));
      }
      let channel = this[_suiteChannel$].virtualChannel();
      this[_suiteChannel$].sink.add(new (IdentityMapOfString$Object()).from(["type", "suiteChannel", "name", name, "id", channel.id]));
      return channel;
    }
    [_close]() {
      return this[_closeMemo].runOnce(dart.fn(() => async.async(core.Null, (function*() {
        yield this[_onDebuggingController].close();
        if (this[_onClose] != null) yield this[_onClose]();
      }).bind(this)), VoidToFutureOfNull()));
    }
  };
  (runner_suite.RunnerSuiteController.new = function(_environment, _config, _suiteChannel, groupFuture, platform, opts) {
    let path = opts && 'path' in opts ? opts.path : null;
    let onClose = opts && 'onClose' in opts ? opts.onClose : null;
    this[_suite] = null;
    this[_isDebugging] = false;
    this[_onDebuggingController] = StreamControllerOfbool().broadcast();
    this[_channelNames] = new (_IdentityHashSetOfString()).new();
    this[_closeMemo] = new async_memoizer.AsyncMemoizer.new();
    this[_environment$] = _environment;
    this[_config$] = _config;
    this[_suiteChannel$] = _suiteChannel;
    this[_onClose] = onClose;
    this[_suite] = groupFuture.then(runner_suite.RunnerSuite, dart.fn(group => new runner_suite.RunnerSuite.__(this, group, path, platform), GroupToRunnerSuite()));
  }).prototype = runner_suite.RunnerSuiteController.prototype;
  (runner_suite.RunnerSuiteController._local = function(_environment, _config, opts) {
    let onClose = opts && 'onClose' in opts ? opts.onClose : null;
    this[_suite] = null;
    this[_isDebugging] = false;
    this[_onDebuggingController] = StreamControllerOfbool().broadcast();
    this[_channelNames] = new (_IdentityHashSetOfString()).new();
    this[_closeMemo] = new async_memoizer.AsyncMemoizer.new();
    this[_environment$] = _environment;
    this[_config$] = _config;
    this[_suiteChannel$] = null;
    this[_onClose] = onClose;
    ;
  }).prototype = runner_suite.RunnerSuiteController.prototype;
  dart.addTypeTests(runner_suite.RunnerSuiteController);
  dart.setMethodSignature(runner_suite.RunnerSuiteController, () => ({
    __proto__: dart.getMethods(runner_suite.RunnerSuiteController.__proto__),
    setDebugging: dart.fnType(dart.void, [core.bool]),
    channel: dart.fnType(stream_channel.StreamChannel, [core.String]),
    [_close]: dart.fnType(async.Future, [])
  }));
  dart.setGetterSignature(runner_suite.RunnerSuiteController, () => ({
    __proto__: dart.getGetters(runner_suite.RunnerSuiteController.__proto__),
    suite: async.Future$(runner_suite.RunnerSuite)
  }));
  dart.setLibraryUri(runner_suite.RunnerSuiteController, "package:test_core/src/runner/runner_suite.dart");
  dart.setFieldSignature(runner_suite.RunnerSuiteController, () => ({
    __proto__: dart.getFields(runner_suite.RunnerSuiteController.__proto__),
    [_suite]: dart.fieldType(async.Future$(runner_suite.RunnerSuite)),
    [_environment$]: dart.finalFieldType(environment.Environment),
    [_config$]: dart.finalFieldType(suite$.SuiteConfiguration),
    [_suiteChannel$]: dart.finalFieldType(multi_channel.MultiChannel),
    [_onClose]: dart.finalFieldType(dart.fnType(dart.dynamic, [])),
    [_isDebugging]: dart.fieldType(core.bool),
    [_onDebuggingController]: dart.finalFieldType(async.StreamController$(core.bool)),
    [_channelNames]: dart.finalFieldType(core.Set$(core.String)),
    [_closeMemo]: dart.finalFieldType(async_memoizer.AsyncMemoizer)
  }));
  environment.Environment = class Environment extends core.Object {};
  (environment.Environment.new = function() {
    ;
  }).prototype = environment.Environment.prototype;
  dart.addTypeTests(environment.Environment);
  dart.setLibraryUri(environment.Environment, "package:test_core/src/runner/environment.dart");
  const supportsDebugging = dart.privateName(environment, "PluginEnvironment.supportsDebugging");
  environment.PluginEnvironment = class PluginEnvironment extends core.Object {
    get supportsDebugging() {
      return this[supportsDebugging];
    }
    set supportsDebugging(value) {
      super.supportsDebugging = value;
    }
    get onRestart() {
      return async.StreamController.broadcast().stream;
    }
    get observatoryUrl() {
      return null;
    }
    get remoteDebuggerUrl() {
      return null;
    }
    displayPause() {
      return dart.throw(new core.UnsupportedError.new("PluginEnvironment.displayPause is not supported."));
    }
  };
  (environment.PluginEnvironment.new = function() {
    this[supportsDebugging] = false;
    ;
  }).prototype = environment.PluginEnvironment.prototype;
  dart.addTypeTests(environment.PluginEnvironment);
  environment.PluginEnvironment[dart.implements] = () => [environment.Environment];
  dart.setMethodSignature(environment.PluginEnvironment, () => ({
    __proto__: dart.getMethods(environment.PluginEnvironment.__proto__),
    displayPause: dart.fnType(cancelable_operation.CancelableOperation, [])
  }));
  dart.setGetterSignature(environment.PluginEnvironment, () => ({
    __proto__: dart.getGetters(environment.PluginEnvironment.__proto__),
    onRestart: async.Stream,
    observatoryUrl: core.Uri,
    remoteDebuggerUrl: core.Uri
  }));
  dart.setLibraryUri(environment.PluginEnvironment, "package:test_core/src/runner/environment.dart");
  dart.setFieldSignature(environment.PluginEnvironment, () => ({
    __proto__: dart.getFields(environment.PluginEnvironment.__proto__),
    supportsDebugging: dart.finalFieldType(core.bool)
  }));
  const _knownTags = dart.privateName(suite$, "_knownTags");
  const _jsTrace = dart.privateName(suite$, "_jsTrace");
  const _runSkipped = dart.privateName(suite$, "_runSkipped");
  let C0;
  const _runtimes = dart.privateName(suite$, "_runtimes");
  const _metadata = dart.privateName(suite$, "_metadata");
  let C1;
  const _children = dart.privateName(suite$, "_children");
  const _resolveTags = dart.privateName(suite$, "_resolveTags");
  let C2;
  const _mergeConfigMaps = dart.privateName(suite$, "_mergeConfigMaps");
  const precompiledPath$ = dart.privateName(suite$, "SuiteConfiguration.precompiledPath");
  const dart2jsArgs$ = dart.privateName(suite$, "SuiteConfiguration.dart2jsArgs");
  const patterns$ = dart.privateName(suite$, "SuiteConfiguration.patterns");
  const includeTags$ = dart.privateName(suite$, "SuiteConfiguration.includeTags");
  const excludeTags$ = dart.privateName(suite$, "SuiteConfiguration.excludeTags");
  const tags$ = dart.privateName(suite$, "SuiteConfiguration.tags");
  const onPlatform$ = dart.privateName(suite$, "SuiteConfiguration.onPlatform");
  suite$.SuiteConfiguration = class SuiteConfiguration extends core.Object {
    get precompiledPath() {
      return this[precompiledPath$];
    }
    set precompiledPath(value) {
      super.precompiledPath = value;
    }
    get dart2jsArgs() {
      return this[dart2jsArgs$];
    }
    set dart2jsArgs(value) {
      super.dart2jsArgs = value;
    }
    get patterns() {
      return this[patterns$];
    }
    set patterns(value) {
      super.patterns = value;
    }
    get includeTags() {
      return this[includeTags$];
    }
    set includeTags(value) {
      super.includeTags = value;
    }
    get excludeTags() {
      return this[excludeTags$];
    }
    set excludeTags(value) {
      super.excludeTags = value;
    }
    get tags() {
      return this[tags$];
    }
    set tags(value) {
      super.tags = value;
    }
    get onPlatform() {
      return this[onPlatform$];
    }
    set onPlatform(value) {
      super.onPlatform = value;
    }
    get jsTrace() {
      let t0;
      t0 = this[_jsTrace];
      return t0 == null ? false : t0;
    }
    get runSkipped() {
      let t0;
      t0 = this[_runSkipped];
      return t0 == null ? false : t0;
    }
    get runtimes() {
      return this[_runtimes] == null ? C1 || CT.C1 : ListOfString().unmodifiable(this[_runtimes][$map](dart.dynamic, dart.fn(runtime => runtime.name, RuntimeSelectionToString())));
    }
    get metadata() {
      if (dart.test(this.tags[$isEmpty]) && dart.test(this.onPlatform[$isEmpty])) return this[_metadata];
      return this[_metadata].change({forTag: this.tags[$map](boolean_selector.BooleanSelector, metadata$.Metadata, dart.fn((key, config) => new (MapEntryOfBooleanSelector$Metadata()).__(key, config.metadata), BooleanSelectorAndSuiteConfigurationToMapEntryOfBooleanSelector$Metadata())), onPlatform: this.onPlatform[$map](platform_selector.PlatformSelector, metadata$.Metadata, dart.fn((key, config) => new (MapEntryOfPlatformSelector$Metadata()).__(key, config.metadata), PlatformSelectorAndSuiteConfigurationToMapEntryOfPlatformSelector$Metadata()))});
    }
    get knownTags() {
      let t0;
      if (this[_knownTags] != null) return this[_knownTags];
      let known = (t0 = this.includeTags.variables[$toSet](), t0.addAll(this.excludeTags.variables), t0.addAll(this[_metadata].tags), t0);
      for (let selector of this.tags[$keys]) {
        known.addAll(selector.variables);
      }
      for (let configuration of this[_children]) {
        known.addAll(configuration.knownTags);
      }
      this[_knownTags] = new (UnmodifiableSetViewOfString()).new(known);
      return this[_knownTags];
    }
    get [_children]() {
      return new (SyncIterableOfSuiteConfiguration()).new((function* _children() {
        yield* this.tags[$values];
        yield* this.onPlatform[$values];
      }).bind(this));
    }
    static new(opts) {
      let jsTrace = opts && 'jsTrace' in opts ? opts.jsTrace : null;
      let runSkipped = opts && 'runSkipped' in opts ? opts.runSkipped : null;
      let dart2jsArgs = opts && 'dart2jsArgs' in opts ? opts.dart2jsArgs : null;
      let precompiledPath = opts && 'precompiledPath' in opts ? opts.precompiledPath : null;
      let patterns = opts && 'patterns' in opts ? opts.patterns : null;
      let runtimes = opts && 'runtimes' in opts ? opts.runtimes : null;
      let includeTags = opts && 'includeTags' in opts ? opts.includeTags : null;
      let excludeTags = opts && 'excludeTags' in opts ? opts.excludeTags : null;
      let tags = opts && 'tags' in opts ? opts.tags : null;
      let onPlatform = opts && 'onPlatform' in opts ? opts.onPlatform : null;
      let timeout = opts && 'timeout' in opts ? opts.timeout : null;
      let verboseTrace = opts && 'verboseTrace' in opts ? opts.verboseTrace : null;
      let chainStackTraces = opts && 'chainStackTraces' in opts ? opts.chainStackTraces : null;
      let skip = opts && 'skip' in opts ? opts.skip : null;
      let retry = opts && 'retry' in opts ? opts.retry : null;
      let skipReason = opts && 'skipReason' in opts ? opts.skipReason : null;
      let testOn = opts && 'testOn' in opts ? opts.testOn : null;
      let addTags = opts && 'addTags' in opts ? opts.addTags : null;
      let config = new suite$.SuiteConfiguration.__({jsTrace: jsTrace, runSkipped: runSkipped, dart2jsArgs: dart2jsArgs, precompiledPath: precompiledPath, patterns: patterns, runtimes: runtimes, includeTags: includeTags, excludeTags: excludeTags, tags: tags, onPlatform: onPlatform, metadata: metadata$.Metadata.new({timeout: timeout, verboseTrace: verboseTrace, chainStackTraces: chainStackTraces, skip: skip, retry: retry, skipReason: skipReason, testOn: testOn, tags: addTags})});
      return config[_resolveTags]();
    }
    static fromMetadata(metadata) {
      return new suite$.SuiteConfiguration.__({tags: metadata.forTag[$map](boolean_selector.BooleanSelector, suite$.SuiteConfiguration, dart.fn((key, child) => new (MapEntryOfBooleanSelector$SuiteConfiguration()).__(key, suite$.SuiteConfiguration.fromMetadata(child)), BooleanSelectorAndMetadataToMapEntryOfBooleanSelector$SuiteConfiguration())), onPlatform: metadata.onPlatform[$map](platform_selector.PlatformSelector, suite$.SuiteConfiguration, dart.fn((key, child) => new (MapEntryOfPlatformSelector$SuiteConfiguration()).__(key, suite$.SuiteConfiguration.fromMetadata(child)), PlatformSelectorAndMetadataToMapEntryOfPlatformSelector$SuiteConfiguration())), metadata: metadata.change({forTag: new (LinkedMapOfBooleanSelector$Metadata()).new(), onPlatform: new (LinkedMapOfPlatformSelector$Metadata()).new()})});
    }
    static _list(T, input) {
      if (input == null) return null;
      let list = core.List$(T).unmodifiable(input);
      if (dart.test(list[$isEmpty])) return null;
      return list;
    }
    static _map(K, V, input) {
      if (input == null || dart.test(input[$isEmpty])) return C2 || CT.C2;
      return core.Map$(K, V).unmodifiable(input);
    }
    merge(other) {
      let t0, t0$, t0$0, t0$1, t0$2;
      if (this[$_equals](suite$.SuiteConfiguration.empty)) return other;
      if (dart.equals(other, suite$.SuiteConfiguration.empty)) return this;
      let config = new suite$.SuiteConfiguration.__({jsTrace: (t0 = other[_jsTrace], t0 == null ? this[_jsTrace] : t0), runSkipped: (t0$ = other[_runSkipped], t0$ == null ? this[_runSkipped] : t0$), dart2jsArgs: (t0$0 = this.dart2jsArgs[$toList](), t0$0[$addAll](other.dart2jsArgs), t0$0), precompiledPath: (t0$1 = other.precompiledPath, t0$1 == null ? this.precompiledPath : t0$1), patterns: this.patterns.union(other.patterns), runtimes: (t0$2 = other[_runtimes], t0$2 == null ? this[_runtimes] : t0$2), includeTags: this.includeTags.intersection(other.includeTags), excludeTags: this.excludeTags.union(other.excludeTags), tags: this[_mergeConfigMaps](boolean_selector.BooleanSelector, this.tags, other.tags), onPlatform: this[_mergeConfigMaps](platform_selector.PlatformSelector, this.onPlatform, other.onPlatform), metadata: this.metadata.merge(other.metadata)});
      return config[_resolveTags]();
    }
    change(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9;
      let jsTrace = opts && 'jsTrace' in opts ? opts.jsTrace : null;
      let runSkipped = opts && 'runSkipped' in opts ? opts.runSkipped : null;
      let dart2jsArgs = opts && 'dart2jsArgs' in opts ? opts.dart2jsArgs : null;
      let precompiledPath = opts && 'precompiledPath' in opts ? opts.precompiledPath : null;
      let patterns = opts && 'patterns' in opts ? opts.patterns : null;
      let runtimes = opts && 'runtimes' in opts ? opts.runtimes : null;
      let includeTags = opts && 'includeTags' in opts ? opts.includeTags : null;
      let excludeTags = opts && 'excludeTags' in opts ? opts.excludeTags : null;
      let tags = opts && 'tags' in opts ? opts.tags : null;
      let onPlatform = opts && 'onPlatform' in opts ? opts.onPlatform : null;
      let timeout = opts && 'timeout' in opts ? opts.timeout : null;
      let verboseTrace = opts && 'verboseTrace' in opts ? opts.verboseTrace : null;
      let chainStackTraces = opts && 'chainStackTraces' in opts ? opts.chainStackTraces : null;
      let skip = opts && 'skip' in opts ? opts.skip : null;
      let retry = opts && 'retry' in opts ? opts.retry : null;
      let skipReason = opts && 'skipReason' in opts ? opts.skipReason : null;
      let testOn = opts && 'testOn' in opts ? opts.testOn : null;
      let addTags = opts && 'addTags' in opts ? opts.addTags : null;
      let config = new suite$.SuiteConfiguration.__({jsTrace: (t0 = jsTrace, t0 == null ? this[_jsTrace] : t0), runSkipped: (t0$ = runSkipped, t0$ == null ? this[_runSkipped] : t0$), dart2jsArgs: (t0$1 = (t0$0 = dart2jsArgs, t0$0 == null ? null : t0$0[$toList]()), t0$1 == null ? this.dart2jsArgs : t0$1), precompiledPath: (t0$2 = precompiledPath, t0$2 == null ? this.precompiledPath : t0$2), patterns: (t0$3 = patterns, t0$3 == null ? this.patterns : t0$3), runtimes: (t0$4 = runtimes, t0$4 == null ? this[_runtimes] : t0$4), includeTags: (t0$5 = includeTags, t0$5 == null ? this.includeTags : t0$5), excludeTags: (t0$6 = excludeTags, t0$6 == null ? this.excludeTags : t0$6), tags: (t0$7 = tags, t0$7 == null ? this.tags : t0$7), onPlatform: (t0$8 = onPlatform, t0$8 == null ? this.onPlatform : t0$8), metadata: this[_metadata].change({timeout: timeout, verboseTrace: verboseTrace, chainStackTraces: chainStackTraces, skip: skip, retry: retry, skipReason: skipReason, testOn: testOn, tags: (t0$9 = addTags, t0$9 == null ? null : t0$9[$toSet]())})});
      return config[_resolveTags]();
    }
    validateRuntimes(allRuntimes) {
      let validVariables = allRuntimes[$map](core.String, dart.fn(runtime => runtime.identifier, RuntimeToString()))[$toSet]();
      this[_metadata].validatePlatformSelectors(validVariables);
      if (this[_runtimes] != null) {
        for (let selection of this[_runtimes]) {
          if (!dart.test(allRuntimes[$any](dart.fn(runtime => runtime.identifier == selection.name, RuntimeTobool())))) {
            if (selection.span != null) {
              dart.throw(new span_exception.SourceSpanFormatException.new("Unknown platform \"" + dart.str(selection.name) + "\".", selection.span));
            } else {
              dart.throw(new core.FormatException.new("Unknown platform \"" + dart.str(selection.name) + "\"."));
            }
          }
        }
      }
      this.onPlatform[$forEach](dart.fn((selector, config) => {
        selector.validate(validVariables);
        config.validateRuntimes(allRuntimes);
      }, PlatformSelectorAndSuiteConfigurationToNull()));
    }
    forPlatform(platform) {
      if (dart.test(this.onPlatform[$isEmpty])) return this;
      let config = this;
      this.onPlatform[$forEach](dart.fn((platformSelector, platformConfig) => {
        if (!dart.test(platformSelector.evaluate(platform))) return;
        config = config.merge(platformConfig);
      }, PlatformSelectorAndSuiteConfigurationToNull()));
      return config.change({onPlatform: new (LinkedMapOfPlatformSelector$SuiteConfiguration()).new()});
    }
    [_mergeConfigMaps](T, map1, map2) {
      return functions.mergeMaps(T, suite$.SuiteConfiguration, map1, map2, {value: dart.fn((config1, config2) => config1.merge(config2), SuiteConfigurationAndSuiteConfigurationToSuiteConfiguration())});
    }
    [_resolveTags]() {
      if (dart.test(this[_metadata].tags[$isEmpty]) || dart.test(this.tags[$isEmpty])) return this;
      let newTags = LinkedHashMapOfBooleanSelector$SuiteConfiguration().from(this.tags);
      let merged = this.tags[$keys][$fold](suite$.SuiteConfiguration, suite$.SuiteConfiguration.empty, dart.fn((merged, selector) => {
        if (!dart.test(selector.evaluate(this[_metadata].tags))) return merged;
        return merged.merge(newTags[$remove](selector));
      }, SuiteConfigurationAndBooleanSelectorToSuiteConfiguration()));
      if (dart.equals(merged, suite$.SuiteConfiguration.empty)) return this;
      return this.change({tags: newTags}).merge(merged);
    }
  };
  (suite$.SuiteConfiguration.__ = function(opts) {
    let t0, t0$, t0$0, t0$1, t0$2, t0$3;
    let jsTrace = opts && 'jsTrace' in opts ? opts.jsTrace : null;
    let runSkipped = opts && 'runSkipped' in opts ? opts.runSkipped : null;
    let dart2jsArgs = opts && 'dart2jsArgs' in opts ? opts.dart2jsArgs : null;
    let precompiledPath = opts && 'precompiledPath' in opts ? opts.precompiledPath : null;
    let patterns = opts && 'patterns' in opts ? opts.patterns : null;
    let runtimes = opts && 'runtimes' in opts ? opts.runtimes : null;
    let includeTags = opts && 'includeTags' in opts ? opts.includeTags : null;
    let excludeTags = opts && 'excludeTags' in opts ? opts.excludeTags : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let onPlatform = opts && 'onPlatform' in opts ? opts.onPlatform : null;
    let metadata = opts && 'metadata' in opts ? opts.metadata : null;
    this[_knownTags] = null;
    this[precompiledPath$] = precompiledPath;
    this[_jsTrace] = jsTrace;
    this[_runSkipped] = runSkipped;
    this[dart2jsArgs$] = (t0 = suite$.SuiteConfiguration._list(core.String, dart2jsArgs), t0 == null ? C0 || CT.C0 : t0);
    this[patterns$] = new (UnmodifiableSetViewOfPattern()).new((t0$0 = (t0$ = patterns, t0$ == null ? null : t0$[$toSet]()), t0$0 == null ? new (_HashSetOfPattern()).new() : t0$0));
    this[_runtimes] = suite$.SuiteConfiguration._list(runtime_selection.RuntimeSelection, runtimes);
    this[includeTags$] = (t0$1 = includeTags, t0$1 == null ? boolean_selector.BooleanSelector.all : t0$1);
    this[excludeTags$] = (t0$2 = excludeTags, t0$2 == null ? boolean_selector.BooleanSelector.none : t0$2);
    this[tags$] = suite$.SuiteConfiguration._map(boolean_selector.BooleanSelector, suite$.SuiteConfiguration, tags);
    this[onPlatform$] = suite$.SuiteConfiguration._map(platform_selector.PlatformSelector, suite$.SuiteConfiguration, onPlatform);
    this[_metadata] = (t0$3 = metadata, t0$3 == null ? metadata$.Metadata.empty : t0$3);
    ;
  }).prototype = suite$.SuiteConfiguration.prototype;
  dart.addTypeTests(suite$.SuiteConfiguration);
  dart.setMethodSignature(suite$.SuiteConfiguration, () => ({
    __proto__: dart.getMethods(suite$.SuiteConfiguration.__proto__),
    merge: dart.fnType(suite$.SuiteConfiguration, [suite$.SuiteConfiguration]),
    change: dart.fnType(suite$.SuiteConfiguration, [], {addTags: core.Iterable$(core.String), chainStackTraces: core.bool, dart2jsArgs: core.Iterable$(core.String), excludeTags: boolean_selector.BooleanSelector, includeTags: boolean_selector.BooleanSelector, jsTrace: core.bool, onPlatform: core.Map$(platform_selector.PlatformSelector, suite$.SuiteConfiguration), patterns: core.Iterable$(core.Pattern), precompiledPath: core.String, retry: core.int, runSkipped: core.bool, runtimes: core.Iterable$(runtime_selection.RuntimeSelection), skip: core.bool, skipReason: core.String, tags: core.Map$(boolean_selector.BooleanSelector, suite$.SuiteConfiguration), testOn: platform_selector.PlatformSelector, timeout: timeout.Timeout, verboseTrace: core.bool}, {}),
    validateRuntimes: dart.fnType(dart.void, [core.List$(runtime.Runtime)]),
    forPlatform: dart.fnType(suite$.SuiteConfiguration, [suite_platform.SuitePlatform]),
    [_mergeConfigMaps]: dart.gFnType(T => [core.Map$(T, suite$.SuiteConfiguration), [core.Map$(T, suite$.SuiteConfiguration), core.Map$(T, suite$.SuiteConfiguration)]]),
    [_resolveTags]: dart.fnType(suite$.SuiteConfiguration, [])
  }));
  dart.setGetterSignature(suite$.SuiteConfiguration, () => ({
    __proto__: dart.getGetters(suite$.SuiteConfiguration.__proto__),
    jsTrace: core.bool,
    runSkipped: core.bool,
    runtimes: core.List$(core.String),
    metadata: metadata$.Metadata,
    knownTags: core.Set$(core.String),
    [_children]: core.Iterable$(suite$.SuiteConfiguration)
  }));
  dart.setLibraryUri(suite$.SuiteConfiguration, "package:test_core/src/runner/suite.dart");
  dart.setFieldSignature(suite$.SuiteConfiguration, () => ({
    __proto__: dart.getFields(suite$.SuiteConfiguration.__proto__),
    [_jsTrace]: dart.finalFieldType(core.bool),
    [_runSkipped]: dart.finalFieldType(core.bool),
    precompiledPath: dart.finalFieldType(core.String),
    dart2jsArgs: dart.finalFieldType(core.List$(core.String)),
    patterns: dart.finalFieldType(core.Set$(core.Pattern)),
    [_runtimes]: dart.finalFieldType(core.List$(runtime_selection.RuntimeSelection)),
    includeTags: dart.finalFieldType(boolean_selector.BooleanSelector),
    excludeTags: dart.finalFieldType(boolean_selector.BooleanSelector),
    tags: dart.finalFieldType(core.Map$(boolean_selector.BooleanSelector, suite$.SuiteConfiguration)),
    onPlatform: dart.finalFieldType(core.Map$(platform_selector.PlatformSelector, suite$.SuiteConfiguration)),
    [_metadata]: dart.finalFieldType(metadata$.Metadata),
    [_knownTags]: dart.fieldType(core.Set$(core.String))
  }));
  dart.defineLazy(suite$.SuiteConfiguration, {
    /*suite$.SuiteConfiguration.empty*/get empty() {
      return new suite$.SuiteConfiguration.__();
    }
  });
  const name$ = dart.privateName(runtime_selection, "RuntimeSelection.name");
  const span$ = dart.privateName(runtime_selection, "RuntimeSelection.span");
  runtime_selection.RuntimeSelection = class RuntimeSelection extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get span() {
      return this[span$];
    }
    set span(value) {
      super.span = value;
    }
    _equals(other) {
      if (other == null) return false;
      return runtime_selection.RuntimeSelection.is(other) && other.name == this.name;
    }
    get hashCode() {
      return dart.hashCode(this.name);
    }
  };
  (runtime_selection.RuntimeSelection.new = function(name, span) {
    if (span === void 0) span = null;
    this[name$] = name;
    this[span$] = span;
    ;
  }).prototype = runtime_selection.RuntimeSelection.prototype;
  dart.addTypeTests(runtime_selection.RuntimeSelection);
  dart.setLibraryUri(runtime_selection.RuntimeSelection, "package:test_core/src/runner/runtime_selection.dart");
  dart.setFieldSignature(runtime_selection.RuntimeSelection, () => ({
    __proto__: dart.getFields(runtime_selection.RuntimeSelection.__proto__),
    name: dart.finalFieldType(core.String),
    span: dart.finalFieldType(span.SourceSpan)
  }));
  dart.defineExtensionMethods(runtime_selection.RuntimeSelection, ['_equals']);
  dart.defineExtensionAccessors(runtime_selection.RuntimeSelection, ['hashCode']);
  reporter.Reporter = class Reporter extends core.Object {};
  (reporter.Reporter.new = function() {
    ;
  }).prototype = reporter.Reporter.prototype;
  dart.addTypeTests(reporter.Reporter);
  dart.setLibraryUri(reporter.Reporter, "package:test_core/src/runner/reporter.dart");
  const _controller$0 = dart.privateName(live_suite_controller, "_controller");
  const _suite$ = dart.privateName(live_suite_controller, "_suite");
  const _isComplete = dart.privateName(live_suite_controller, "_isComplete");
  const _onCompleteGroup = dart.privateName(live_suite_controller, "_onCompleteGroup");
  const _onCloseCompleter = dart.privateName(live_suite_controller, "_onCloseCompleter");
  const _onTestStartedController = dart.privateName(live_suite_controller, "_onTestStartedController");
  const _passed = dart.privateName(live_suite_controller, "_passed");
  const _skipped = dart.privateName(live_suite_controller, "_skipped");
  const _failed = dart.privateName(live_suite_controller, "_failed");
  const _active = dart.privateName(live_suite_controller, "_active");
  live_suite_controller._LiveSuite = class _LiveSuite extends live_suite.LiveSuite {
    get suite() {
      return this[_controller$0][_suite$];
    }
    get isComplete() {
      return this[_controller$0][_isComplete];
    }
    get onComplete() {
      return this[_controller$0][_onCompleteGroup].future;
    }
    get isClosed() {
      return this[_controller$0][_onCloseCompleter].isCompleted;
    }
    get onClose() {
      return this[_controller$0][_onCloseCompleter].future;
    }
    get onTestStarted() {
      return this[_controller$0][_onTestStartedController].stream;
    }
    get passed() {
      return new (UnmodifiableSetViewOfLiveTest()).new(this[_controller$0][_passed]);
    }
    get skipped() {
      return new (UnmodifiableSetViewOfLiveTest()).new(this[_controller$0][_skipped]);
    }
    get failed() {
      return new (UnmodifiableSetViewOfLiveTest()).new(this[_controller$0][_failed]);
    }
    get active() {
      return this[_controller$0][_active];
    }
  };
  (live_suite_controller._LiveSuite.new = function(_controller) {
    this[_controller$0] = _controller;
    ;
  }).prototype = live_suite_controller._LiveSuite.prototype;
  dart.addTypeTests(live_suite_controller._LiveSuite);
  dart.setGetterSignature(live_suite_controller._LiveSuite, () => ({
    __proto__: dart.getGetters(live_suite_controller._LiveSuite.__proto__),
    suite: runner_suite.RunnerSuite,
    isComplete: core.bool,
    onComplete: async.Future,
    isClosed: core.bool,
    onClose: async.Future,
    onTestStarted: async.Stream$(live_test.LiveTest),
    passed: core.Set$(live_test.LiveTest),
    skipped: core.Set$(live_test.LiveTest),
    failed: core.Set$(live_test.LiveTest),
    active: live_test.LiveTest
  }));
  dart.setLibraryUri(live_suite_controller._LiveSuite, "package:test_core/src/runner/live_suite_controller.dart");
  dart.setFieldSignature(live_suite_controller._LiveSuite, () => ({
    __proto__: dart.getFields(live_suite_controller._LiveSuite.__proto__),
    [_controller$0]: dart.finalFieldType(live_suite_controller.LiveSuiteController)
  }));
  const _liveSuite = dart.privateName(live_suite_controller, "_liveSuite");
  const _closeMemo$ = dart.privateName(live_suite_controller, "_closeMemo");
  live_suite_controller.LiveSuiteController = class LiveSuiteController extends core.Object {
    get liveSuite() {
      return this[_liveSuite];
    }
    reportLiveTest(liveTest, opts) {
      let countSuccess = opts && 'countSuccess' in opts ? opts.countSuccess : true;
      if (dart.test(this[_onTestStartedController].isClosed)) {
        dart.throw(new core.StateError.new("Can't call reportLiveTest() after noMoreTests()."));
      }
      if (!dart.equals(liveTest.suite, this[_suite$])) dart.assertFailed(null, "org-dartlang-app:///packages/test_core/src/runner/live_suite_controller.dart", 116, 12, "liveTest.suite == _suite");
      if (!(this[_active] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/test_core/src/runner/live_suite_controller.dart", 117, 12, "_active == null");
      this[_active] = liveTest;
      liveTest.onStateChange.listen(dart.fn(state => {
        if (!dart.equals(state.status, state$.Status.complete)) return;
        this[_active] = null;
        if (dart.equals(state.result, state$.Result.skipped)) {
          this[_skipped].add(liveTest);
        } else if (!dart.equals(state.result, state$.Result.success)) {
          this[_passed].remove(liveTest);
          this[_failed].add(liveTest);
        } else if (dart.test(countSuccess)) {
          this[_passed].add(liveTest);
          this[_failed].remove(liveTest);
        }
      }, StateToNull()));
      this[_onTestStartedController].add(liveTest);
      this[_onCompleteGroup].add(liveTest.onComplete);
    }
    noMoreLiveTests() {
      this[_onTestStartedController].close();
      this[_onCompleteGroup].close();
    }
    close() {
      return this[_closeMemo$].runOnce(dart.fn(() => async.async(core.Null, (function*() {
        try {
          yield this[_suite$].close();
        } finally {
          this[_onCloseCompleter].complete();
        }
      }).bind(this)), VoidToFutureOfNull()));
    }
  };
  (live_suite_controller.LiveSuiteController.new = function(_suite) {
    this[_liveSuite] = null;
    this[_onCompleteGroup] = new future_group.FutureGroup.new();
    this[_isComplete] = false;
    this[_onCloseCompleter] = async.Completer.new();
    this[_onTestStartedController] = StreamControllerOfLiveTest().broadcast({sync: true});
    this[_passed] = new (_HashSetOfLiveTest()).new();
    this[_skipped] = new (_HashSetOfLiveTest()).new();
    this[_failed] = new (_HashSetOfLiveTest()).new();
    this[_active] = null;
    this[_closeMemo$] = new async_memoizer.AsyncMemoizer.new();
    this[_suite$] = _suite;
    this[_liveSuite] = new live_suite_controller._LiveSuite.new(this);
    this[_onCompleteGroup].future.then(core.Null, dart.fn(_ => {
      this[_isComplete] = true;
    }, ListToNull()), {onError: dart.fn(_ => {
      }, dynamicToNull())});
  }).prototype = live_suite_controller.LiveSuiteController.prototype;
  dart.addTypeTests(live_suite_controller.LiveSuiteController);
  dart.setMethodSignature(live_suite_controller.LiveSuiteController, () => ({
    __proto__: dart.getMethods(live_suite_controller.LiveSuiteController.__proto__),
    reportLiveTest: dart.fnType(dart.void, [live_test.LiveTest], {countSuccess: core.bool}, {}),
    noMoreLiveTests: dart.fnType(dart.void, []),
    close: dart.fnType(async.Future, [])
  }));
  dart.setGetterSignature(live_suite_controller.LiveSuiteController, () => ({
    __proto__: dart.getGetters(live_suite_controller.LiveSuiteController.__proto__),
    liveSuite: live_suite.LiveSuite
  }));
  dart.setLibraryUri(live_suite_controller.LiveSuiteController, "package:test_core/src/runner/live_suite_controller.dart");
  dart.setFieldSignature(live_suite_controller.LiveSuiteController, () => ({
    __proto__: dart.getFields(live_suite_controller.LiveSuiteController.__proto__),
    [_liveSuite]: dart.fieldType(live_suite.LiveSuite),
    [_suite$]: dart.finalFieldType(runner_suite.RunnerSuite),
    [_onCompleteGroup]: dart.finalFieldType(future_group.FutureGroup),
    [_isComplete]: dart.fieldType(core.bool),
    [_onCloseCompleter]: dart.finalFieldType(async.Completer),
    [_onTestStartedController]: dart.finalFieldType(async.StreamController$(live_test.LiveTest)),
    [_passed]: dart.finalFieldType(core.Set$(live_test.LiveTest)),
    [_skipped]: dart.finalFieldType(core.Set$(live_test.LiveTest)),
    [_failed]: dart.finalFieldType(core.Set$(live_test.LiveTest)),
    [_active]: dart.fieldType(live_test.LiveTest),
    [_closeMemo$]: dart.finalFieldType(async_memoizer.AsyncMemoizer)
  }));
  io_stub.currentPlatform = function currentPlatform(runtime) {
    return dart.throw(new core.UnsupportedError.new("Getting the current platform is only supported where dart:io exists"));
  };
  const path$ = dart.privateName(load_exception, "LoadException.path");
  const innerError$ = dart.privateName(load_exception, "LoadException.innerError");
  load_exception.LoadException = class LoadException extends core.Object {
    get path() {
      return this[path$];
    }
    set path(value) {
      super.path = value;
    }
    get innerError() {
      return this[innerError$];
    }
    set innerError(value) {
      super.innerError = value;
    }
    toString(opts) {
      let color = opts && 'color' in opts ? opts.color : false;
      let buffer = new core.StringBuffer.new();
      if (dart.test(color)) buffer.write("[31m");
      buffer.write("Failed to load \"" + dart.str(this.path) + "\":");
      if (dart.test(color)) buffer.write("[0m");
      let innerString = utils.getErrorMessage(this.innerError);
      if (span_exception.SourceSpanException.is(this.innerError)) {
        innerString = span_exception.SourceSpanException.as(this.innerError).toString({color: color})[$replaceFirst](" of " + dart.str(this.path), "");
      }
      buffer.write(innerString[$contains]("\n") ? "\n" : " ");
      buffer.write(innerString);
      return buffer.toString();
    }
  };
  (load_exception.LoadException.new = function(path, innerError) {
    this[path$] = path;
    this[innerError$] = innerError;
    ;
  }).prototype = load_exception.LoadException.prototype;
  dart.addTypeTests(load_exception.LoadException);
  load_exception.LoadException[dart.implements] = () => [core.Exception];
  dart.setMethodSignature(load_exception.LoadException, () => ({
    __proto__: dart.getMethods(load_exception.LoadException.__proto__),
    toString: dart.fnType(core.String, [], {color: core.bool}, {}),
    [$toString]: dart.fnType(core.String, [], {color: core.bool}, {})
  }));
  dart.setLibraryUri(load_exception.LoadException, "package:test_core/src/runner/load_exception.dart");
  dart.setFieldSignature(load_exception.LoadException, () => ({
    __proto__: dart.getFields(load_exception.LoadException.__proto__),
    path: dart.finalFieldType(core.String),
    innerError: dart.finalFieldType(core.Object)
  }));
  dart.defineExtensionMethods(load_exception.LoadException, ['toString']);
  const supportsDebugging$ = dart.privateName(environment$, "PluginEnvironment.supportsDebugging");
  environment$.PluginEnvironment = class PluginEnvironment extends core.Object {
    get supportsDebugging() {
      return this[supportsDebugging$];
    }
    set supportsDebugging(value) {
      super.supportsDebugging = value;
    }
    get onRestart() {
      return async.StreamController.broadcast().stream;
    }
    get observatoryUrl() {
      return null;
    }
    get remoteDebuggerUrl() {
      return null;
    }
    displayPause() {
      return dart.throw(new core.UnsupportedError.new("PluginEnvironment.displayPause is not supported."));
    }
  };
  (environment$.PluginEnvironment.new = function() {
    this[supportsDebugging$] = false;
    ;
  }).prototype = environment$.PluginEnvironment.prototype;
  dart.addTypeTests(environment$.PluginEnvironment);
  environment$.PluginEnvironment[dart.implements] = () => [environment.Environment];
  dart.setMethodSignature(environment$.PluginEnvironment, () => ({
    __proto__: dart.getMethods(environment$.PluginEnvironment.__proto__),
    displayPause: dart.fnType(cancelable_operation.CancelableOperation, [])
  }));
  dart.setGetterSignature(environment$.PluginEnvironment, () => ({
    __proto__: dart.getGetters(environment$.PluginEnvironment.__proto__),
    onRestart: async.Stream,
    observatoryUrl: core.Uri,
    remoteDebuggerUrl: core.Uri
  }));
  dart.setLibraryUri(environment$.PluginEnvironment, "package:test_core/src/runner/plugin/environment.dart");
  dart.setFieldSignature(environment$.PluginEnvironment, () => ({
    __proto__: dart.getFields(environment$.PluginEnvironment.__proto__),
    supportsDebugging: dart.finalFieldType(core.bool)
  }));
  dart.trackLibraries("packages/test_core/src/runner/environment", {
    "package:test_core/src/runner/live_suite.dart": live_suite,
    "package:test_core/src/runner/runner_suite.dart": runner_suite,
    "package:test_core/src/runner/environment.dart": environment,
    "package:test_core/src/runner/suite.dart": suite$,
    "package:test_core/src/runner/runtime_selection.dart": runtime_selection,
    "package:test_core/src/runner/reporter.dart": reporter,
    "package:test_core/src/runner/live_suite_controller.dart": live_suite_controller,
    "package:test_core/src/util/io_stub.dart": io_stub,
    "package:test_core/src/runner/load_exception.dart": load_exception,
    "package:test_core/src/runner/plugin/environment.dart": environment$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["live_suite.dart","runner_suite.dart","environment.dart","suite.dart","runtime_selection.dart","reporter.dart","live_suite_controller.dart","../util/io_stub.dart","load_exception.dart","plugin/environment.dart"],"names":[],"mappings":"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","file":"environment.ddc.js"}');
  // Exports:
  return {
    src__runner__live_suite: live_suite,
    src__runner__runner_suite: runner_suite,
    src__runner__environment: environment,
    src__runner__suite: suite$,
    src__runner__runtime_selection: runtime_selection,
    src__runner__reporter: reporter,
    src__runner__live_suite_controller: live_suite_controller,
    src__util__io_stub: io_stub,
    src__runner__load_exception: load_exception,
    src__runner__plugin__environment: environment$
  };
});

//# sourceMappingURL=environment.ddc.js.map
