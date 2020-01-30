define(['dart_sdk', 'packages/async/async', 'packages/test_core/src/runner/environment', 'packages/test_api/src/backend/closed_exception', 'packages/collection/collection', 'packages/pool/pool', 'packages/collection/src/canonicalized_map', 'packages/test_api/src/util/iterable_set', 'packages/pedantic/pedantic', 'packages/test_api/src/backend/metadata', 'packages/stack_trace/src/chain', 'packages/stream_channel/stream_channel', 'packages/path/path'], function(dart_sdk, packages__async__async, packages__test_core__src__runner__environment, packages__test_api__src__backend__closed_exception, packages__collection__collection, packages__pool__pool, packages__collection__src__canonicalized_map, packages__test_api__src__util__iterable_set, packages__pedantic__pedantic, packages__test_api__src__backend__metadata, packages__stack_trace__src__chain, packages__stream_channel__stream_channel, packages__path__path) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const future_group = packages__async__async.src__future_group;
  const stream_group = packages__async__async.src__stream_group;
  const sink = packages__async__async.src__delegate__sink;
  const runner_suite = packages__test_core__src__runner__environment.src__runner__runner_suite;
  const live_suite = packages__test_core__src__runner__environment.src__runner__live_suite;
  const live_suite_controller = packages__test_core__src__runner__environment.src__runner__live_suite_controller;
  const environment = packages__test_core__src__runner__environment.src__runner__plugin__environment;
  const suite$ = packages__test_core__src__runner__environment.src__runner__suite;
  const io_stub = packages__test_core__src__runner__environment.src__util__io_stub;
  const environment$ = packages__test_core__src__runner__environment.src__runner__environment;
  const load_exception = packages__test_core__src__runner__environment.src__runner__load_exception;
  const reporter = packages__test_core__src__runner__environment.src__runner__reporter;
  const live_test = packages__test_api__src__backend__closed_exception.src__backend__live_test;
  const state$ = packages__test_api__src__backend__closed_exception.src__backend__state;
  const group$ = packages__test_api__src__backend__closed_exception.src__backend__group;
  const test$ = packages__test_api__src__backend__closed_exception.src__backend__test;
  const invoker$ = packages__test_api__src__backend__closed_exception.src__backend__invoker;
  const live_test_controller = packages__test_api__src__backend__closed_exception.src__backend__live_test_controller;
  const message$ = packages__test_api__src__backend__closed_exception.src__backend__message;
  const group_entry = packages__test_api__src__backend__closed_exception.src__backend__group_entry;
  const suite = packages__test_api__src__backend__closed_exception.src__backend__suite;
  const declarer$ = packages__test_api__src__backend__closed_exception.src__backend__declarer;
  const union_set_controller = packages__collection__collection.src__union_set_controller;
  const queue_list = packages__collection__collection.src__queue_list;
  const union_set = packages__collection__collection.src__union_set;
  const pool = packages__pool__pool.pool;
  const unmodifiable_wrappers = packages__collection__src__canonicalized_map.src__unmodifiable_wrappers;
  const iterable_set = packages__test_api__src__util__iterable_set.src__util__iterable_set;
  const pedantic = packages__pedantic__pedantic.pedantic;
  const metadata = packages__test_api__src__backend__metadata.src__backend__metadata;
  const timeout = packages__test_api__src__backend__metadata.src__frontend__timeout;
  const utils = packages__test_api__src__backend__metadata.src__utils;
  const runtime = packages__test_api__src__backend__metadata.src__backend__runtime;
  const suite_platform = packages__test_api__src__backend__metadata.src__backend__suite_platform;
  const trace = packages__stack_trace__src__chain.src__trace;
  const stream_channel = packages__stream_channel__stream_channel.stream_channel;
  const path = packages__path__path.path;
  const engine$ = Object.create(dart.library);
  const load_suite = Object.create(dart.library);
  const test_core = Object.create(dart.library);
  const expanded = Object.create(dart.library);
  const $every = dartx.every;
  const $add = dartx.add;
  const $remove = dartx.remove;
  const $first = dartx.first;
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  const $contains = dartx.contains;
  const $last = dartx.last;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $single = dartx.single;
  const $noSuchMethod = dartx.noSuchMethod;
  const $toString = dartx.toString;
  const $length = dartx.length;
  const $startsWith = dartx.startsWith;
  const $padLeft = dartx.padLeft;
  const $modulo = dartx['%'];
  let _HashSetOfStreamSubscription = () => (_HashSetOfStreamSubscription = dart.constFn(collection._HashSet$(async.StreamSubscription)))();
  let StreamControllerOfRunnerSuite = () => (StreamControllerOfRunnerSuite = dart.constFn(async.StreamController$(runner_suite.RunnerSuite)))();
  let _HashSetOfRunnerSuite = () => (_HashSetOfRunnerSuite = dart.constFn(collection._HashSet$(runner_suite.RunnerSuite)))();
  let _HashSetOfLiveSuite = () => (_HashSetOfLiveSuite = dart.constFn(collection._HashSet$(live_suite.LiveSuite)))();
  let StreamControllerOfLiveSuite = () => (StreamControllerOfLiveSuite = dart.constFn(async.StreamController$(live_suite.LiveSuite)))();
  let StreamGroupOfLiveTest = () => (StreamGroupOfLiveTest = dart.constFn(stream_group.StreamGroup$(live_test.LiveTest)))();
  let UnionSetControllerOfLiveTest = () => (UnionSetControllerOfLiveTest = dart.constFn(union_set_controller.UnionSetController$(live_test.LiveTest)))();
  let QueueListOfLiveTest = () => (QueueListOfLiveTest = dart.constFn(queue_list.QueueList$(live_test.LiveTest)))();
  let _HashSetOfLiveTest = () => (_HashSetOfLiveTest = dart.constFn(collection._HashSet$(live_test.LiveTest)))();
  let JSArrayOfLiveTest = () => (JSArrayOfLiveTest = dart.constFn(_interceptors.JSArray$(live_test.LiveTest)))();
  let ListToNull = () => (ListToNull = dart.constFn(dart.fnType(core.Null, [core.List])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let JSArrayOfFuture = () => (JSArrayOfFuture = dart.constFn(_interceptors.JSArray$(async.Future)))();
  let LiveTestTobool = () => (LiveTestTobool = dart.constFn(dart.fnType(core.bool, [live_test.LiveTest])))();
  let DelegatingSinkOfRunnerSuite = () => (DelegatingSinkOfRunnerSuite = dart.constFn(sink.DelegatingSink$(runner_suite.RunnerSuite)))();
  let UnmodifiableSetViewOfRunnerSuite = () => (UnmodifiableSetViewOfRunnerSuite = dart.constFn(unmodifiable_wrappers.UnmodifiableSetView$(runner_suite.RunnerSuite)))();
  let UnmodifiableSetViewOfLiveSuite = () => (UnmodifiableSetViewOfLiveSuite = dart.constFn(unmodifiable_wrappers.UnmodifiableSetView$(live_suite.LiveSuite)))();
  let UnionSetOfLiveTest = () => (UnionSetOfLiveTest = dart.constFn(union_set.UnionSet$(live_test.LiveTest)))();
  let IterableSetOfLiveTest = () => (IterableSetOfLiveTest = dart.constFn(iterable_set.IterableSet$(live_test.LiveTest)))();
  let SetOfLiveTest = () => (SetOfLiveTest = dart.constFn(core.Set$(live_test.LiveTest)))();
  let JSArrayOfSetOfLiveTest = () => (JSArrayOfSetOfLiveTest = dart.constFn(_interceptors.JSArray$(SetOfLiveTest())))();
  let UnmodifiableListViewOfLiveTest = () => (UnmodifiableListViewOfLiveTest = dart.constFn(collection.UnmodifiableListView$(live_test.LiveTest)))();
  let JSArrayOfGroup = () => (JSArrayOfGroup = dart.constFn(_interceptors.JSArray$(group$.Group)))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let RunnerSuiteToNull = () => (RunnerSuiteToNull = dart.constFn(dart.fnType(core.Null, [runner_suite.RunnerSuite])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let StateToNull = () => (StateToNull = dart.constFn(dart.fnType(core.Null, [state$.State])))();
  let LiveTestToFuture = () => (LiveTestToFuture = dart.constFn(dart.fnType(async.Future, [live_test.LiveTest])))();
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let JSArrayOfGroupEntry = () => (JSArrayOfGroupEntry = dart.constFn(_interceptors.JSArray$(group_entry.GroupEntry)))();
  let PairOfRunnerSuite$Zone = () => (PairOfRunnerSuite$Zone = dart.constFn(utils.Pair$(runner_suite.RunnerSuite, async.Zone)))();
  let CompleterOfPairOfRunnerSuite$Zone = () => (CompleterOfPairOfRunnerSuite$Zone = dart.constFn(async.Completer$(PairOfRunnerSuite$Zone())))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let FutureOfRunnerSuite = () => (FutureOfRunnerSuite = dart.constFn(async.Future$(runner_suite.RunnerSuite)))();
  let VoidToFutureOfRunnerSuite = () => (VoidToFutureOfRunnerSuite = dart.constFn(dart.fnType(FutureOfRunnerSuite(), [])))();
  let VoidToRunnerSuite = () => (VoidToRunnerSuite = dart.constFn(dart.fnType(runner_suite.RunnerSuite, [])))();
  let PairOfRunnerSuite$ZoneToPairOfRunnerSuite$Zone = () => (PairOfRunnerSuite$ZoneToPairOfRunnerSuite$Zone = dart.constFn(dart.fnType(PairOfRunnerSuite$Zone(), [PairOfRunnerSuite$Zone()])))();
  let MessageTovoid = () => (MessageTovoid = dart.constFn(dart.fnType(dart.void, [message$.Message])))();
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  let VoidToFutureOfbool = () => (VoidToFutureOfbool = dart.constFn(dart.fnType(FutureOfbool(), [])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let StateTovoid = () => (StateTovoid = dart.constFn(dart.fnType(dart.void, [state$.State])))();
  let AsyncErrorTovoid = () => (AsyncErrorTovoid = dart.constFn(dart.fnType(dart.void, [async.AsyncError])))();
  let MessageToNull = () => (MessageToNull = dart.constFn(dart.fnType(core.Null, [message$.Message])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: state$.Result.prototype,
        [Result_name]: "success"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: state$.Status.prototype,
        [Status_name]: "running"
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: state$.State.prototype,
        [State_result]: C1 || CT.C1,
        [State_status]: C2 || CT.C2
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: state$.Result.prototype,
        [Result_name]: "skipped"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: state$.State.prototype,
        [State_result]: C4 || CT.C4,
        [State_status]: C2 || CT.C2
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: state$.Status.prototype,
        [Status_name]: "complete"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: state$.State.prototype,
        [State_result]: C4 || CT.C4,
        [State_status]: C6 || CT.C6
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: environment.PluginEnvironment.prototype,
        [PluginEnvironment_supportsDebugging]: false
      });
    },
    get C8() {
      return C8 = dart.const(new _js_helper.PrivateSymbol.new('_controller', _controller));
    },
    get C9() {
      return C9 = dart.const(new _internal.Symbol.new('test.declarer'));
    }
  });
  const _runCalled = dart.privateName(engine$, "_runCalled");
  const _closed = dart.privateName(engine$, "_closed");
  const _closedBeforeDone = dart.privateName(engine$, "_closedBeforeDone");
  const _pauseCompleter = dart.privateName(engine$, "_pauseCompleter");
  const _group = dart.privateName(engine$, "_group");
  const _subscriptions = dart.privateName(engine$, "_subscriptions");
  const _suiteController = dart.privateName(engine$, "_suiteController");
  const _addedSuites = dart.privateName(engine$, "_addedSuites");
  const _onSuiteAddedController = dart.privateName(engine$, "_onSuiteAddedController");
  const _liveSuites = dart.privateName(engine$, "_liveSuites");
  const _onSuiteStartedController = dart.privateName(engine$, "_onSuiteStartedController");
  const _onTestStartedGroup = dart.privateName(engine$, "_onTestStartedGroup");
  const _passedGroup = dart.privateName(engine$, "_passedGroup");
  const _skippedGroup = dart.privateName(engine$, "_skippedGroup");
  const _failedGroup = dart.privateName(engine$, "_failedGroup");
  const _active = dart.privateName(engine$, "_active");
  const _restarted = dart.privateName(engine$, "_restarted");
  const _activeLoadTests = dart.privateName(engine$, "_activeLoadTests");
  const _runPool = dart.privateName(engine$, "_runPool");
  const _loadPool = dart.privateName(engine$, "_loadPool");
  const _onUnpaused = dart.privateName(engine$, "_onUnpaused");
  const _addLoadSuite = dart.privateName(engine$, "_addLoadSuite");
  const _addLiveSuite = dart.privateName(engine$, "_addLiveSuite");
  const _runGroup = dart.privateName(engine$, "_runGroup");
  const _runLiveTest = dart.privateName(engine$, "_runLiveTest");
  const _runSkippedTest = dart.privateName(engine$, "_runSkippedTest");
  const Result_name = dart.privateName(state$, "Result.name");
  let C1;
  const State_result = dart.privateName(state$, "State.result");
  const Status_name = dart.privateName(state$, "Status.name");
  let C2;
  const State_status = dart.privateName(state$, "State.status");
  let C0;
  let C4;
  let C3;
  let C6;
  let C5;
  engine$.Engine = class Engine extends core.Object {
    get [_onUnpaused]() {
      return this[_pauseCompleter] == null ? async.Future.value() : this[_pauseCompleter].future;
    }
    get success() {
      return async.async(core.bool, (function* success() {
        yield async.Future.wait(dart.dynamic, JSArrayOfFuture().of([this[_group].future, this[_loadPool].done]), {eagerError: true});
        if (dart.test(this[_closedBeforeDone])) return null;
        return this.liveTests[$every](dart.fn(liveTest => dart.test(liveTest.state.result.isPassing) && dart.equals(liveTest.state.status, state$.Status.complete), LiveTestTobool()));
      }).bind(this));
    }
    get suiteSink() {
      return new (DelegatingSinkOfRunnerSuite()).new(this[_suiteController].sink);
    }
    get addedSuites() {
      return new (UnmodifiableSetViewOfRunnerSuite()).new(this[_addedSuites]);
    }
    get onSuiteAdded() {
      return this[_onSuiteAddedController].stream;
    }
    get liveSuites() {
      return new (UnmodifiableSetViewOfLiveSuite()).new(this[_liveSuites]);
    }
    get onSuiteStarted() {
      return this[_onSuiteStartedController].stream;
    }
    get liveTests() {
      return new (UnionSetOfLiveTest()).from(JSArrayOfSetOfLiveTest().of([this.passed, this.skipped, this.failed, new (IterableSetOfLiveTest()).new(this.active)]), {disjoint: true});
    }
    get onTestStarted() {
      return this[_onTestStartedGroup].stream;
    }
    get passed() {
      return this[_passedGroup].set;
    }
    get skipped() {
      return this[_skippedGroup].set;
    }
    get failed() {
      return this[_failedGroup].set;
    }
    get active() {
      return new (UnmodifiableListViewOfLiveTest()).new(this[_active]);
    }
    get isIdle() {
      return this[_group].isIdle;
    }
    get onIdle() {
      return this[_group].onIdle;
    }
    static withSuites(suites, opts) {
      let concurrency = opts && 'concurrency' in opts ? opts.concurrency : null;
      let engine = new engine$.Engine.new({concurrency: concurrency});
      for (let suite of suites)
        engine.suiteSink.add(suite);
      engine.suiteSink.close();
      return engine;
    }
    run() {
      if (dart.test(this[_runCalled])) {
        dart.throw(new core.StateError.new("Engine.run() may not be called more than once."));
      }
      this[_runCalled] = true;
      let subscription = null;
      subscription = this[_suiteController].stream.listen(dart.fn(suite => {
        this[_addedSuites].add(suite);
        this[_onSuiteAddedController].add(suite);
        this[_group].add(dart.fn(() => async.async(core.Null, (function*() {
          let loadResource = (yield this[_loadPool].request());
          let controller = null;
          if (load_suite.LoadSuite.is(suite)) {
            yield this[_onUnpaused];
            controller = (yield this[_addLoadSuite](suite));
            if (controller == null) {
              loadResource.release();
              return;
            }
          } else {
            controller = new live_suite_controller.LiveSuiteController.new(suite);
          }
          this[_addLiveSuite](controller.liveSuite);
          yield this[_runPool].withResource(core.Null, dart.fn(() => async.async(core.Null, (function*() {
            if (dart.test(this[_closed])) return;
            yield this[_runGroup](controller, controller.liveSuite.suite.group, JSArrayOfGroup().of([]));
            controller.noMoreLiveTests();
            loadResource.allowRelease(dart.fn(() => controller.close(), VoidToFuture()));
          }).bind(this)), VoidToFutureOfNull()));
        }).bind(this)), VoidToFutureOfNull())());
      }, RunnerSuiteToNull()), {onDone: dart.fn(() => {
          this[_subscriptions].remove(subscription);
          this[_onSuiteAddedController].close();
          this[_group].close();
          this[_loadPool].close();
        }, VoidToNull())});
      this[_subscriptions].add(subscription);
      return this.success;
    }
    [_runGroup](suiteController, group, parents) {
      return async.async(dart.dynamic, (function* _runGroup$() {
        parents[$add](group);
        try {
          let suiteConfig = suiteController.liveSuite.suite.config;
          let skipGroup = !dart.test(suiteConfig.runSkipped) && dart.test(group.metadata.skip);
          let setUpAllSucceeded = true;
          if (!skipGroup && group.setUpAll != null) {
            let liveTest = group.setUpAll.load(suiteController.liveSuite.suite, {groups: parents});
            yield this[_runLiveTest](suiteController, liveTest, {countSuccess: false});
            setUpAllSucceeded = liveTest.state.result.isPassing;
          }
          if (!dart.test(this[_closed]) && dart.test(setUpAllSucceeded)) {
            for (let entry of group.entries) {
              if (dart.test(this[_closed])) return;
              if (group$.Group.is(entry)) {
                yield this[_runGroup](suiteController, entry, parents);
              } else if (!dart.test(suiteConfig.runSkipped) && dart.test(entry.metadata.skip)) {
                yield this[_runSkippedTest](suiteController, test$.Test.as(entry), parents);
              } else {
                let test = test$.Test.as(entry);
                yield this[_runLiveTest](suiteController, test.load(suiteController.liveSuite.suite, {groups: parents}));
              }
            }
          }
          if (!skipGroup && group.tearDownAll != null) {
            let liveTest = group.tearDownAll.load(suiteController.liveSuite.suite, {groups: parents});
            yield this[_runLiveTest](suiteController, liveTest, {countSuccess: false});
            if (dart.test(this[_closed])) yield liveTest.close();
          }
        } finally {
          parents[$remove](group);
        }
      }).bind(this));
    }
    [_runLiveTest](suiteController, liveTest, opts) {
      let countSuccess = opts && 'countSuccess' in opts ? opts.countSuccess : true;
      return async.async(dart.dynamic, (function* _runLiveTest$() {
        yield this[_onUnpaused];
        this[_active].add(liveTest);
        if (load_suite.LoadSuite.is(this[_active][$first].suite)) this[_active].removeFirst();
        let subscription = null;
        subscription = liveTest.onStateChange.listen(dart.fn(state => {
          if (!dart.equals(state.status, state$.Status.complete)) return;
          this[_active][$remove](liveTest);
          if (dart.test(this[_active][$isEmpty]) && dart.test(this[_activeLoadTests][$isNotEmpty])) {
            this[_active].add(this[_activeLoadTests][$first]);
          }
        }, StateToNull()), {onDone: dart.fn(() => {
            this[_subscriptions].remove(subscription);
          }, VoidToNull())});
        this[_subscriptions].add(subscription);
        suiteController.reportLiveTest(liveTest, {countSuccess: countSuccess});
        yield async.Future.microtask(dart.bind(liveTest, 'run'));
        yield FutureOfNull().new(dart.fn(() => {
        }, VoidToNull()));
        if (!dart.test(this[_restarted].contains(liveTest))) return;
        yield this[_runLiveTest](suiteController, liveTest.copy(), {countSuccess: countSuccess});
        this[_restarted].remove(liveTest);
      }).bind(this));
    }
    [_runSkippedTest](suiteController, test, parents) {
      return async.async(dart.dynamic, (function* _runSkippedTest() {
        yield this[_onUnpaused];
        let skipped = new invoker$.LocalTest.new(test.name, test.metadata, dart.fn(() => {
        }, VoidToNull()), {trace: test.trace});
        let controller = null;
        controller = new live_test_controller.LiveTestController.new(suiteController.liveSuite.suite, skipped, dart.fn(() => {
          controller.setState(C0 || CT.C0);
          controller.setState(C3 || CT.C3);
          if (skipped.metadata.skipReason != null) {
            controller.message(new message$.Message.skip("Skip: " + dart.str(skipped.metadata.skipReason)));
          }
          controller.setState(C5 || CT.C5);
          controller.completer.complete();
        }, VoidToNull()), dart.fn(() => {
        }, VoidToNull()), {groups: parents});
        return yield this[_runLiveTest](suiteController, controller.liveTest);
      }).bind(this));
    }
    restartTest(liveTest) {
      return async.async(dart.dynamic, (function* restartTest() {
        if (dart.test(this[_activeLoadTests][$contains](liveTest))) {
          dart.throw(new core.ArgumentError.new("Can't restart a load test."));
        }
        if (!dart.test(this[_active][$contains](liveTest))) {
          dart.throw(new core.StateError.new("Can't restart inactive test " + "\"" + dart.str(liveTest.test.name) + "\"."));
        }
        this[_restarted].add(liveTest);
        this[_active][$remove](liveTest);
        yield liveTest.close();
      }).bind(this));
    }
    [_addLoadSuite](suite) {
      return async.async(live_suite_controller.LiveSuiteController, (function* _addLoadSuite() {
        let controller = new live_suite_controller.LiveSuiteController.new(suite);
        this[_addLiveSuite](controller.liveSuite);
        let liveTest = suite.test.load(suite);
        this[_activeLoadTests][$add](liveTest);
        if (dart.test(this[_active][$isEmpty])) this[_active].add(liveTest);
        let subscription = null;
        subscription = liveTest.onStateChange.listen(dart.fn(state => {
          if (!dart.equals(state.status, state$.Status.complete)) return;
          this[_activeLoadTests][$remove](liveTest);
          if (dart.test(this[_active][$isNotEmpty]) && dart.equals(this[_active][$first].suite, suite)) {
            this[_active][$remove](liveTest);
            if (dart.test(this[_activeLoadTests][$isNotEmpty])) this[_active].add(this[_activeLoadTests][$last]);
          }
        }, StateToNull()), {onDone: dart.fn(() => {
            this[_subscriptions].remove(subscription);
          }, VoidToNull())});
        this[_subscriptions].add(subscription);
        controller.reportLiveTest(liveTest, {countSuccess: false});
        controller.noMoreLiveTests();
        yield async.Future.microtask(dart.bind(liveTest, 'run'));
        let innerSuite = (yield suite.suite);
        if (innerSuite == null) return null;
        let innerController = new live_suite_controller.LiveSuiteController.new(innerSuite);
        pedantic.unawaited(innerController.liveSuite.onClose.whenComplete(dart.fn(() => {
          liveTest.close();
          controller.close();
        }, VoidToNull())));
        return innerController;
      }).bind(this));
    }
    [_addLiveSuite](liveSuite) {
      this[_liveSuites].add(liveSuite);
      this[_onSuiteStartedController].add(liveSuite);
      this[_onTestStartedGroup].add(liveSuite.onTestStarted);
      this[_passedGroup].add(liveSuite.passed);
      this[_skippedGroup].add(liveSuite.skipped);
      this[_failedGroup].add(liveSuite.failed);
    }
    pause() {
      if (this[_pauseCompleter] != null) return;
      this[_pauseCompleter] = async.Completer.new();
      for (let subscription of this[_subscriptions]) {
        subscription.pause();
      }
    }
    resume() {
      if (this[_pauseCompleter] == null) return;
      this[_pauseCompleter].complete();
      this[_pauseCompleter] = null;
      for (let subscription of this[_subscriptions]) {
        subscription.resume();
      }
    }
    close() {
      return async.async(dart.dynamic, (function* close() {
        let t0;
        yield FutureOfNull().new(dart.fn(() => {
        }, VoidToNull()));
        this[_closed] = true;
        if (this[_closedBeforeDone] != null) this[_closedBeforeDone] = true;
        yield this[_onSuiteAddedController].close();
        yield this[_suiteController].close();
        let allLiveTests = (t0 = this.liveTests.toSet(), t0.addAll(this[_activeLoadTests]), t0);
        let futures = allLiveTests[$map](async.Future, dart.fn(liveTest => liveTest.close(), LiveTestToFuture()))[$toList]();
        futures[$add](this[_loadPool].close());
        yield async.Future.wait(dart.dynamic, futures, {eagerError: true});
      }).bind(this));
    }
  };
  (engine$.Engine.new = function(opts) {
    let t0, t1, t0$;
    let concurrency = opts && 'concurrency' in opts ? opts.concurrency : null;
    let maxSuites = opts && 'maxSuites' in opts ? opts.maxSuites : null;
    this[_runCalled] = false;
    this[_closed] = false;
    this[_closedBeforeDone] = null;
    this[_pauseCompleter] = null;
    this[_group] = new future_group.FutureGroup.new();
    this[_subscriptions] = new (_HashSetOfStreamSubscription()).new();
    this[_suiteController] = StreamControllerOfRunnerSuite().new();
    this[_addedSuites] = new (_HashSetOfRunnerSuite()).new();
    this[_onSuiteAddedController] = StreamControllerOfRunnerSuite().broadcast();
    this[_liveSuites] = new (_HashSetOfLiveSuite()).new();
    this[_onSuiteStartedController] = StreamControllerOfLiveSuite().broadcast();
    this[_onTestStartedGroup] = new (StreamGroupOfLiveTest()).broadcast();
    this[_passedGroup] = new (UnionSetControllerOfLiveTest()).new({disjoint: true});
    this[_skippedGroup] = new (UnionSetControllerOfLiveTest()).new({disjoint: true});
    this[_failedGroup] = new (UnionSetControllerOfLiveTest()).new({disjoint: true});
    this[_active] = new (QueueListOfLiveTest()).new();
    this[_restarted] = new (_HashSetOfLiveTest()).new();
    this[_activeLoadTests] = JSArrayOfLiveTest().of([]);
    this[_runPool] = new pool.Pool.new((t0 = concurrency, t0 == null ? 1 : t0));
    this[_loadPool] = new pool.Pool.new((t0$ = maxSuites, t0$ == null ? dart.notNull((t1 = concurrency, t1 == null ? 1 : t1)) * 2 : t0$));
    this[_group].future.then(core.Null, dart.fn(_ => {
      this[_onTestStartedGroup].close();
      this[_onSuiteStartedController].close();
      if (this[_closedBeforeDone] == null) this[_closedBeforeDone] = false;
    }, ListToNull())).catchError(dart.fn(_ => {
    }, dynamicToNull()));
  }).prototype = engine$.Engine.prototype;
  dart.addTypeTests(engine$.Engine);
  dart.setMethodSignature(engine$.Engine, () => ({
    __proto__: dart.getMethods(engine$.Engine.__proto__),
    run: dart.fnType(async.Future$(core.bool), []),
    [_runGroup]: dart.fnType(async.Future, [live_suite_controller.LiveSuiteController, group$.Group, core.List$(group$.Group)]),
    [_runLiveTest]: dart.fnType(async.Future, [live_suite_controller.LiveSuiteController, live_test.LiveTest], {countSuccess: core.bool}, {}),
    [_runSkippedTest]: dart.fnType(async.Future, [live_suite_controller.LiveSuiteController, test$.Test, core.List$(group$.Group)]),
    restartTest: dart.fnType(async.Future, [live_test.LiveTest]),
    [_addLoadSuite]: dart.fnType(async.Future$(live_suite_controller.LiveSuiteController), [load_suite.LoadSuite]),
    [_addLiveSuite]: dart.fnType(dart.void, [live_suite.LiveSuite]),
    pause: dart.fnType(dart.void, []),
    resume: dart.fnType(dart.void, []),
    close: dart.fnType(async.Future, [])
  }));
  dart.setGetterSignature(engine$.Engine, () => ({
    __proto__: dart.getGetters(engine$.Engine.__proto__),
    [_onUnpaused]: async.Future,
    success: async.Future$(core.bool),
    suiteSink: core.Sink$(runner_suite.RunnerSuite),
    addedSuites: core.Set$(runner_suite.RunnerSuite),
    onSuiteAdded: async.Stream$(runner_suite.RunnerSuite),
    liveSuites: core.Set$(live_suite.LiveSuite),
    onSuiteStarted: async.Stream$(live_suite.LiveSuite),
    liveTests: core.Set$(live_test.LiveTest),
    onTestStarted: async.Stream$(live_test.LiveTest),
    passed: core.Set$(live_test.LiveTest),
    skipped: core.Set$(live_test.LiveTest),
    failed: core.Set$(live_test.LiveTest),
    active: core.List$(live_test.LiveTest),
    isIdle: core.bool,
    onIdle: async.Stream
  }));
  dart.setLibraryUri(engine$.Engine, "package:test_core/src/runner/engine.dart");
  dart.setFieldSignature(engine$.Engine, () => ({
    __proto__: dart.getFields(engine$.Engine.__proto__),
    [_runCalled]: dart.fieldType(core.bool),
    [_closed]: dart.fieldType(core.bool),
    [_closedBeforeDone]: dart.fieldType(core.bool),
    [_runPool]: dart.finalFieldType(pool.Pool),
    [_loadPool]: dart.finalFieldType(pool.Pool),
    [_pauseCompleter]: dart.fieldType(async.Completer),
    [_group]: dart.finalFieldType(future_group.FutureGroup),
    [_subscriptions]: dart.finalFieldType(core.Set$(async.StreamSubscription)),
    [_suiteController]: dart.finalFieldType(async.StreamController$(runner_suite.RunnerSuite)),
    [_addedSuites]: dart.finalFieldType(core.Set$(runner_suite.RunnerSuite)),
    [_onSuiteAddedController]: dart.finalFieldType(async.StreamController$(runner_suite.RunnerSuite)),
    [_liveSuites]: dart.finalFieldType(core.Set$(live_suite.LiveSuite)),
    [_onSuiteStartedController]: dart.finalFieldType(async.StreamController$(live_suite.LiveSuite)),
    [_onTestStartedGroup]: dart.finalFieldType(stream_group.StreamGroup$(live_test.LiveTest)),
    [_passedGroup]: dart.finalFieldType(union_set_controller.UnionSetController$(live_test.LiveTest)),
    [_skippedGroup]: dart.finalFieldType(union_set_controller.UnionSetController$(live_test.LiveTest)),
    [_failedGroup]: dart.finalFieldType(union_set_controller.UnionSetController$(live_test.LiveTest)),
    [_active]: dart.finalFieldType(queue_list.QueueList$(live_test.LiveTest)),
    [_restarted]: dart.finalFieldType(core.Set$(live_test.LiveTest)),
    [_activeLoadTests]: dart.finalFieldType(core.List$(live_test.LiveTest))
  }));
  const PluginEnvironment_supportsDebugging = dart.privateName(environment, "PluginEnvironment.supportsDebugging");
  let C7;
  const _suiteAndZone$ = dart.privateName(load_suite, "_suiteAndZone");
  const _controller = dart.privateName(load_suite, "_controller");
  let C8;
  const _controller$ = dart.privateName(runner_suite, "_controller");
  const environment$0 = dart.privateName(load_suite, "LoadSuite.environment");
  const config$ = dart.privateName(load_suite, "LoadSuite.config");
  const isDebugging = dart.privateName(load_suite, "LoadSuite.isDebugging");
  const onDebugging = dart.privateName(load_suite, "LoadSuite.onDebugging");
  load_suite.LoadSuite = class LoadSuite extends suite.Suite {
    get environment() {
      return this[environment$0];
    }
    set environment(value) {
      super.environment = value;
    }
    get config() {
      return this[config$];
    }
    set config(value) {
      super.config = value;
    }
    get isDebugging() {
      return this[isDebugging];
    }
    set isDebugging(value) {
      super.isDebugging = value;
    }
    get onDebugging() {
      return this[onDebugging];
    }
    set onDebugging(value) {
      super.onDebugging = value;
    }
    get isLoadSuite() {
      return true;
    }
    get suite() {
      return async.async(runner_suite.RunnerSuite, (function* suite() {
        let t0;
        t0 = (yield this[_suiteAndZone$]);
        return t0 == null ? null : t0.first;
      }).bind(this));
    }
    get test() {
      return test$.Test.as(this.group.entries[$single]);
    }
    static new(name, config, platform, body, opts) {
      let path = opts && 'path' in opts ? opts.path : null;
      let completer = CompleterOfPairOfRunnerSuite$Zone().sync();
      return new load_suite.LoadSuite.__(name, config, platform, dart.fn(() => {
        let invoker = invoker$.Invoker.current;
        invoker.addOutstandingCallback();
        utils.invoke(dart.fn(() => async.async(core.Null, function*() {
          let t0;
          let suite = (yield body());
          if (dart.test(completer.isCompleted)) {
            yield (t0 = suite, t0 == null ? null : t0.close());
            return;
          }
          completer.complete(suite == null ? null : new (PairOfRunnerSuite$Zone()).new(suite, async.Zone.current));
          invoker.removeOutstandingCallback();
        }), VoidToFutureOfNull()));
        invoker.liveTest.onComplete.then(core.Null, dart.fn(_ => {
          if (!dart.test(completer.isCompleted)) completer.complete();
        }, dynamicToNull()));
        invoker.onClose.then(dart.void, dart.fn(_ => invoker.removeOutstandingCallback(), dynamicTovoid()));
      }, VoidToNull()), completer.future, {path: path});
    }
    static forLoadException(exception, config, opts) {
      let t0, t0$;
      let platform = opts && 'platform' in opts ? opts.platform : null;
      let stackTrace = opts && 'stackTrace' in opts ? opts.stackTrace : null;
      if (stackTrace == null) stackTrace = trace.Trace.current();
      return load_suite.LoadSuite.new("loading " + dart.str(exception.path), (t0 = config, t0 == null ? suite$.SuiteConfiguration.empty : t0), (t0$ = platform, t0$ == null ? io_stub.currentPlatform(runtime.Runtime.vm) : t0$), dart.fn(() => FutureOfRunnerSuite().error(exception, stackTrace), VoidToFutureOfRunnerSuite()), {path: exception.path});
    }
    static forSuite(suite) {
      return load_suite.LoadSuite.new("loading " + dart.str(suite.path), suite.config, suite.platform, dart.fn(() => suite, VoidToRunnerSuite()), {path: suite.path});
    }
    changeSuite(change) {
      return new load_suite.LoadSuite._changeSuite(this, this[_suiteAndZone$].then(PairOfRunnerSuite$Zone(), dart.fn(pair => {
        if (pair == null) return null;
        let zone = pair.last;
        let newSuite = null;
        zone.runGuarded(dart.fn(() => {
          newSuite = change(pair.first);
        }, VoidToNull()));
        return newSuite == null ? null : new (PairOfRunnerSuite$Zone()).new(newSuite, zone);
      }, PairOfRunnerSuite$ZoneToPairOfRunnerSuite$Zone())));
    }
    getSuite() {
      return async.async(runner_suite.RunnerSuite, (function* getSuite() {
        let liveTest = this.test.load(this);
        liveTest.onMessage.listen(dart.fn(message => core.print(message.text), MessageTovoid()));
        yield liveTest.run();
        if (dart.test(liveTest.errors[$isEmpty])) return yield this.suite;
        let error = liveTest.errors[$first];
        yield async.Future.error(error.error, error.stackTrace);
        dart.throw("unreachable");
      }).bind(this));
    }
    filter(callback) {
      let filtered = this.group.filter(callback);
      if (filtered == null) filtered = new group$.Group.root(JSArrayOfGroupEntry().of([]), {metadata: this.metadata});
      return new load_suite.LoadSuite._filtered(this, filtered);
    }
    channel(name) {
      return dart.throw(new core.UnsupportedError.new("LoadSuite.channel() is not supported."));
    }
    close() {
      return async.async(dart.dynamic, function* close() {
      });
    }
    get [_controller$]() {
      return runner_suite.RunnerSuiteController._check(this[$noSuchMethod](new core._Invocation.getter(C8 || CT.C8)));
    }
  };
  (load_suite.LoadSuite.__ = function(name, config, platform, body, _suiteAndZone, opts) {
    let path = opts && 'path' in opts ? opts.path : null;
    this[environment$0] = C7 || CT.C7;
    this[isDebugging] = false;
    this[onDebugging] = StreamControllerOfbool().new().stream;
    this[config$] = config;
    this[_suiteAndZone$] = _suiteAndZone;
    load_suite.LoadSuite.__proto__.new.call(this, new group$.Group.root(JSArrayOfGroupEntry().of([new invoker$.LocalTest.new(name, metadata.Metadata.new({timeout: new timeout.Timeout.new(load_suite._timeout)}), body)])), platform, {path: path});
    ;
  }).prototype = load_suite.LoadSuite.prototype;
  (load_suite.LoadSuite._changeSuite = function(old, _suiteAndZone) {
    this[environment$0] = C7 || CT.C7;
    this[isDebugging] = false;
    this[onDebugging] = StreamControllerOfbool().new().stream;
    this[_suiteAndZone$] = _suiteAndZone;
    this[config$] = old.config;
    load_suite.LoadSuite.__proto__.new.call(this, old.group, old.platform, {path: old.path});
    ;
  }).prototype = load_suite.LoadSuite.prototype;
  (load_suite.LoadSuite._filtered = function(old, filtered) {
    this[environment$0] = C7 || CT.C7;
    this[isDebugging] = false;
    this[onDebugging] = StreamControllerOfbool().new().stream;
    this[config$] = old.config;
    this[_suiteAndZone$] = old[_suiteAndZone$];
    load_suite.LoadSuite.__proto__.new.call(this, old.group, old.platform, {path: old.path});
    ;
  }).prototype = load_suite.LoadSuite.prototype;
  dart.addTypeTests(load_suite.LoadSuite);
  load_suite.LoadSuite[dart.implements] = () => [runner_suite.RunnerSuite];
  dart.setMethodSignature(load_suite.LoadSuite, () => ({
    __proto__: dart.getMethods(load_suite.LoadSuite.__proto__),
    changeSuite: dart.fnType(load_suite.LoadSuite, [dart.fnType(runner_suite.RunnerSuite, [runner_suite.RunnerSuite])]),
    getSuite: dart.fnType(async.Future$(runner_suite.RunnerSuite), []),
    filter: dart.fnType(load_suite.LoadSuite, [dart.fnType(core.bool, [test$.Test])]),
    channel: dart.fnType(stream_channel.StreamChannel, [core.String]),
    close: dart.fnType(async.Future, [])
  }));
  dart.setGetterSignature(load_suite.LoadSuite, () => ({
    __proto__: dart.getGetters(load_suite.LoadSuite.__proto__),
    suite: async.Future$(runner_suite.RunnerSuite),
    test: test$.Test,
    [_controller$]: runner_suite.RunnerSuiteController
  }));
  dart.setLibraryUri(load_suite.LoadSuite, "package:test_core/src/runner/load_suite.dart");
  dart.setFieldSignature(load_suite.LoadSuite, () => ({
    __proto__: dart.getFields(load_suite.LoadSuite.__proto__),
    environment: dart.finalFieldType(environment$.Environment),
    config: dart.finalFieldType(suite$.SuiteConfiguration),
    isDebugging: dart.finalFieldType(core.bool),
    onDebugging: dart.finalFieldType(async.Stream$(core.bool)),
    [_suiteAndZone$]: dart.finalFieldType(async.Future$(utils.Pair$(runner_suite.RunnerSuite, async.Zone)))
  }));
  dart.defineLazy(load_suite, {
    /*load_suite._timeout*/get _timeout() {
      return new core.Duration.new({minutes: 12});
    }
  });
  test_core.test = function test(description, body, opts) {
    let testOn = opts && 'testOn' in opts ? opts.testOn : null;
    let timeout = opts && 'timeout' in opts ? opts.timeout : null;
    let skip = opts && 'skip' in opts ? opts.skip : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let onPlatform = opts && 'onPlatform' in opts ? opts.onPlatform : null;
    let retry = opts && 'retry' in opts ? opts.retry : null;
    let solo = opts && 'solo' in opts ? opts.solo : false;
    test_core._declarer.test(dart.toString(description), body, {testOn: testOn, timeout: timeout, skip: skip, onPlatform: onPlatform, tags: tags, retry: retry, solo: solo});
    return;
    return;
  };
  test_core.group = function group(description, body, opts) {
    let testOn = opts && 'testOn' in opts ? opts.testOn : null;
    let timeout = opts && 'timeout' in opts ? opts.timeout : null;
    let skip = opts && 'skip' in opts ? opts.skip : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let onPlatform = opts && 'onPlatform' in opts ? opts.onPlatform : null;
    let retry = opts && 'retry' in opts ? opts.retry : null;
    let solo = opts && 'solo' in opts ? opts.solo : false;
    test_core._declarer.group(dart.toString(description), body, {testOn: testOn, timeout: timeout, skip: skip, tags: tags, onPlatform: onPlatform, retry: retry, solo: solo});
    return;
    return;
  };
  test_core.setUp = function setUp(callback) {
    return test_core._declarer.setUp(callback);
  };
  test_core.tearDown = function tearDown(callback) {
    return test_core._declarer.tearDown(callback);
  };
  test_core.setUpAll = function setUpAll(callback) {
    return test_core._declarer.setUpAll(callback);
  };
  test_core.tearDownAll = function tearDownAll(callback) {
    return test_core._declarer.tearDownAll(callback);
  };
  let C9;
  dart.copyProperties(test_core, {
    get _declarer() {
      let declarer = declarer$.Declarer.current;
      if (declarer != null) return declarer;
      if (test_core._globalDeclarer != null) return test_core._globalDeclarer;
      test_core._globalDeclarer = new declarer$.Declarer.new();
      async.scheduleMicrotask(dart.fn(() => async.async(core.Null, function*() {
        let suite = runner_suite.RunnerSuite.new(C7 || CT.C7, suite$.SuiteConfiguration.empty, test_core._globalDeclarer.build(), new suite_platform.SuitePlatform.new(runtime.Runtime.vm, {os: utils.currentOSGuess}), {path: path.prettyUri(core.Uri.base)});
        let engine = new engine$.Engine.new();
        engine.suiteSink.add(suite);
        engine.suiteSink.close();
        expanded.ExpandedReporter.watch(engine, {color: true, printPath: false, printPlatform: false});
        let success = (yield async.runZoned(FutureOfbool(), dart.fn(() => invoker$.Invoker.guard(FutureOfbool(), dart.bind(engine, 'run')), VoidToFutureOfbool()), {zoneValues: new _js_helper.LinkedMap.from([C9 || CT.C9, test_core._globalDeclarer])}));
        if (dart.test(success)) return null;
        core.print("");
        pedantic.unawaited(FutureOfvoid().error("Dummy exception to set exit code."));
      }), VoidToFutureOfNull()));
      return test_core._globalDeclarer;
    }
  });
  dart.defineLazy(test_core, {
    /*test_core._globalDeclarer*/get _globalDeclarer() {
      return null;
    },
    set _globalDeclarer(_) {}
  });
  const _stopwatch = dart.privateName(expanded, "_stopwatch");
  const _lastProgressPassed = dart.privateName(expanded, "_lastProgressPassed");
  const _lastProgressSkipped = dart.privateName(expanded, "_lastProgressSkipped");
  const _lastProgressFailed = dart.privateName(expanded, "_lastProgressFailed");
  const _lastProgressMessage = dart.privateName(expanded, "_lastProgressMessage");
  const _lastProgressSuffix = dart.privateName(expanded, "_lastProgressSuffix");
  const _paused = dart.privateName(expanded, "_paused");
  const _subscriptions$ = dart.privateName(expanded, "_subscriptions");
  const _engine$ = dart.privateName(expanded, "_engine");
  const _printPath = dart.privateName(expanded, "_printPath");
  const _printPlatform = dart.privateName(expanded, "_printPlatform");
  const _color = dart.privateName(expanded, "_color");
  const _green = dart.privateName(expanded, "_green");
  const _red = dart.privateName(expanded, "_red");
  const _yellow = dart.privateName(expanded, "_yellow");
  const _gray = dart.privateName(expanded, "_gray");
  const _bold = dart.privateName(expanded, "_bold");
  const _noColor = dart.privateName(expanded, "_noColor");
  const _onTestStarted = dart.privateName(expanded, "_onTestStarted");
  const _onDone = dart.privateName(expanded, "_onDone");
  const _description = dart.privateName(expanded, "_description");
  const _progressLine = dart.privateName(expanded, "_progressLine");
  const _onStateChange = dart.privateName(expanded, "_onStateChange");
  const _onError = dart.privateName(expanded, "_onError");
  const _timeString = dart.privateName(expanded, "_timeString");
  expanded.ExpandedReporter = class ExpandedReporter extends core.Object {
    static watch(engine, opts) {
      let color = opts && 'color' in opts ? opts.color : true;
      let printPath = opts && 'printPath' in opts ? opts.printPath : true;
      let printPlatform = opts && 'printPlatform' in opts ? opts.printPlatform : true;
      return new expanded.ExpandedReporter.__(engine, {color: color, printPath: printPath, printPlatform: printPlatform});
    }
    pause() {
      if (dart.test(this[_paused])) return;
      this[_paused] = true;
      this[_stopwatch].stop();
      for (let subscription of this[_subscriptions$]) {
        subscription.pause();
      }
    }
    resume() {
      if (!dart.test(this[_paused])) return;
      this[_stopwatch].start();
      for (let subscription of this[_subscriptions$]) {
        subscription.resume();
      }
    }
    cancel() {
      for (let subscription of this[_subscriptions$]) {
        subscription.cancel();
      }
      this[_subscriptions$].clear();
    }
    [_onTestStarted](liveTest) {
      if (!load_suite.LoadSuite.is(liveTest.suite)) {
        if (!dart.test(this[_stopwatch].isRunning)) this[_stopwatch].start();
        if (this[_engine$].active[$length] === 1) this[_progressLine](this[_description](liveTest));
        this[_subscriptions$].add(liveTest.onStateChange.listen(dart.fn(state => this[_onStateChange](liveTest, state), StateTovoid())));
      } else if (this[_engine$].active[$length] === 1 && dart.equals(this[_engine$].active[$first], liveTest) && liveTest.test.name[$startsWith]("compiling ")) {
        this[_progressLine](this[_description](liveTest));
      }
      this[_subscriptions$].add(liveTest.onError.listen(dart.fn(error => this[_onError](liveTest, error.error, error.stackTrace), AsyncErrorTovoid())));
      this[_subscriptions$].add(liveTest.onMessage.listen(dart.fn(message => {
        this[_progressLine](this[_description](liveTest));
        let text = message.text;
        if (dart.equals(message.type, message$.MessageType.skip)) text = "  " + dart.str(this[_yellow]) + dart.str(text) + dart.str(this[_noColor]);
        core.print(text);
      }, MessageToNull())));
    }
    [_onStateChange](liveTest, state) {
      if (!dart.equals(state.status, state$.Status.complete)) return;
      if (dart.test(this[_engine$].active[$isNotEmpty])) {
        this[_progressLine](this[_description](this[_engine$].active[$first]));
      }
    }
    [_onError](liveTest, error, stackTrace) {
      if (!dart.equals(liveTest.state.status, state$.Status.complete)) return;
      this[_progressLine](this[_description](liveTest), {suffix: " " + dart.str(this[_bold]) + dart.str(this[_red]) + "[E]" + dart.str(this[_noColor])});
      if (!load_exception.LoadException.is(error)) {
        core.print(utils.indent(dart.toString(error)));
        core.print(utils.indent(dart.str(stackTrace)));
        return;
      }
      core.print(utils.indent(core.String.as(dart.dsend(error, $toString, [], {color: this[_color]}))));
      if (!core.FormatException.is(dart.dload(error, 'innerError')) && !(typeof dart.dload(error, 'innerError') == 'string')) {
        core.print(utils.indent(dart.str(stackTrace)));
      }
    }
    [_onDone](success) {
      if (success == null) return;
      if (dart.test(this[_engine$].liveTests[$isEmpty])) {
        core.print("No tests ran.");
      } else if (!dart.test(success)) {
        for (let liveTest of this[_engine$].active) {
          this[_progressLine](this[_description](liveTest), {suffix: " - did not complete " + dart.str(this[_bold]) + dart.str(this[_red]) + "[E]" + dart.str(this[_noColor])});
        }
        this[_progressLine]("Some tests failed.", {color: this[_red]});
      } else if (dart.test(this[_engine$].passed[$isEmpty])) {
        this[_progressLine]("All tests skipped.");
      } else {
        this[_progressLine]("All tests passed!");
      }
    }
    [_progressLine](message, opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      let suffix = opts && 'suffix' in opts ? opts.suffix : null;
      if (this[_engine$].passed[$length] == this[_lastProgressPassed] && this[_engine$].skipped[$length] == this[_lastProgressSkipped] && this[_engine$].failed[$length] == this[_lastProgressFailed] && message == this[_lastProgressMessage] && (suffix == null || suffix == this[_lastProgressSuffix])) {
        return;
      }
      this[_lastProgressPassed] = this[_engine$].passed[$length];
      this[_lastProgressSkipped] = this[_engine$].skipped[$length];
      this[_lastProgressFailed] = this[_engine$].failed[$length];
      this[_lastProgressMessage] = message;
      this[_lastProgressSuffix] = suffix;
      if (suffix != null) message = dart.notNull(message) + dart.notNull(suffix);
      if (color == null) color = "";
      let duration = this[_stopwatch].elapsed;
      let buffer = new core.StringBuffer.new();
      buffer.write(dart.str(this[_timeString](duration)) + " ");
      buffer.write(this[_green]);
      buffer.write("+");
      buffer.write(this[_engine$].passed[$length]);
      buffer.write(this[_noColor]);
      if (dart.test(this[_engine$].skipped[$isNotEmpty])) {
        buffer.write(this[_yellow]);
        buffer.write(" ~");
        buffer.write(this[_engine$].skipped[$length]);
        buffer.write(this[_noColor]);
      }
      if (dart.test(this[_engine$].failed[$isNotEmpty])) {
        buffer.write(this[_red]);
        buffer.write(" -");
        buffer.write(this[_engine$].failed[$length]);
        buffer.write(this[_noColor]);
      }
      buffer.write(": ");
      buffer.write(color);
      buffer.write(message);
      buffer.write(this[_noColor]);
      core.print(buffer.toString());
    }
    [_timeString](duration) {
      return dart.toString(duration.inMinutes)[$padLeft](2, "0") + ":" + duration.inSeconds[$modulo](60)[$toString]()[$padLeft](2, "0");
    }
    [_description](liveTest) {
      let name = liveTest.test.name;
      if (dart.test(this[_printPath]) && !load_suite.LoadSuite.is(liveTest.suite) && liveTest.suite.path != null) {
        name = dart.str(liveTest.suite.path) + ": " + dart.str(name);
      }
      if (dart.test(this[_printPlatform])) {
        name = "[" + dart.str(liveTest.suite.platform.runtime.name) + "] " + dart.str(name);
      }
      if (load_suite.LoadSuite.is(liveTest.suite)) name = dart.str(this[_bold]) + dart.str(this[_gray]) + dart.str(name) + dart.str(this[_noColor]);
      return name;
    }
  };
  (expanded.ExpandedReporter.__ = function(_engine, opts) {
    let color = opts && 'color' in opts ? opts.color : true;
    let printPath = opts && 'printPath' in opts ? opts.printPath : true;
    let printPlatform = opts && 'printPlatform' in opts ? opts.printPlatform : true;
    this[_stopwatch] = new core.Stopwatch.new();
    this[_lastProgressPassed] = null;
    this[_lastProgressSkipped] = null;
    this[_lastProgressFailed] = null;
    this[_lastProgressMessage] = null;
    this[_lastProgressSuffix] = null;
    this[_paused] = false;
    this[_subscriptions$] = new (_HashSetOfStreamSubscription()).new();
    this[_engine$] = _engine;
    this[_printPath] = printPath;
    this[_printPlatform] = printPlatform;
    this[_color] = color;
    this[_green] = dart.test(color) ? "[32m" : "";
    this[_red] = dart.test(color) ? "[31m" : "";
    this[_yellow] = dart.test(color) ? "[33m" : "";
    this[_gray] = dart.test(color) ? "[1;30m" : "";
    this[_bold] = dart.test(color) ? "[1m" : "";
    this[_noColor] = dart.test(color) ? "[0m" : "";
    this[_subscriptions$].add(this[_engine$].onTestStarted.listen(dart.bind(this, _onTestStarted)));
    this[_subscriptions$].add(this[_engine$].success.asStream().listen(dart.bind(this, _onDone)));
  }).prototype = expanded.ExpandedReporter.prototype;
  dart.addTypeTests(expanded.ExpandedReporter);
  expanded.ExpandedReporter[dart.implements] = () => [reporter.Reporter];
  dart.setMethodSignature(expanded.ExpandedReporter, () => ({
    __proto__: dart.getMethods(expanded.ExpandedReporter.__proto__),
    pause: dart.fnType(dart.void, []),
    resume: dart.fnType(dart.void, []),
    cancel: dart.fnType(dart.void, []),
    [_onTestStarted]: dart.fnType(dart.void, [live_test.LiveTest]),
    [_onStateChange]: dart.fnType(dart.void, [live_test.LiveTest, state$.State]),
    [_onError]: dart.fnType(dart.void, [live_test.LiveTest, dart.dynamic, core.StackTrace]),
    [_onDone]: dart.fnType(dart.void, [core.bool]),
    [_progressLine]: dart.fnType(dart.void, [core.String], {color: core.String, suffix: core.String}, {}),
    [_timeString]: dart.fnType(core.String, [core.Duration]),
    [_description]: dart.fnType(core.String, [live_test.LiveTest])
  }));
  dart.setLibraryUri(expanded.ExpandedReporter, "package:test_core/src/runner/reporter/expanded.dart");
  dart.setFieldSignature(expanded.ExpandedReporter, () => ({
    __proto__: dart.getFields(expanded.ExpandedReporter.__proto__),
    [_color]: dart.finalFieldType(core.bool),
    [_green]: dart.finalFieldType(core.String),
    [_red]: dart.finalFieldType(core.String),
    [_yellow]: dart.finalFieldType(core.String),
    [_gray]: dart.finalFieldType(core.String),
    [_bold]: dart.finalFieldType(core.String),
    [_noColor]: dart.finalFieldType(core.String),
    [_engine$]: dart.finalFieldType(engine$.Engine),
    [_printPath]: dart.finalFieldType(core.bool),
    [_printPlatform]: dart.finalFieldType(core.bool),
    [_stopwatch]: dart.finalFieldType(core.Stopwatch),
    [_lastProgressPassed]: dart.fieldType(core.int),
    [_lastProgressSkipped]: dart.fieldType(core.int),
    [_lastProgressFailed]: dart.fieldType(core.int),
    [_lastProgressMessage]: dart.fieldType(core.String),
    [_lastProgressSuffix]: dart.fieldType(core.String),
    [_paused]: dart.fieldType(core.bool),
    [_subscriptions$]: dart.finalFieldType(core.Set$(async.StreamSubscription))
  }));
  dart.trackLibraries("packages/test_core/test_core", {
    "package:test_core/src/runner/engine.dart": engine$,
    "package:test_core/src/runner/load_suite.dart": load_suite,
    "package:test_core/test_core.dart": test_core,
    "package:test_core/src/runner/reporter/expanded.dart": expanded
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/runner/engine.dart","src/runner/load_suite.dart","test_core.dart","src/runner/reporter/expanded.dart"],"names":[],"mappings":"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","file":"test_core.ddc.js"}');
  // Exports:
  return {
    src__runner__engine: engine$,
    src__runner__load_suite: load_suite,
    test_core: test_core,
    src__runner__reporter__expanded: expanded
  };
});

//# sourceMappingURL=test_core.ddc.js.map
