define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/collection/src/priority_queue', 'packages/pedantic/pedantic'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection, packages__angular__src__bootstrap__modules, packages__collection__src__priority_queue, packages__pedantic__pedantic) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const injector = packages__angular__src__core__change_detection__change_detection.src__di__injector__injector;
  const empty = packages__angular__src__core__change_detection__change_detection.src__di__injector__empty;
  const hierarchical = packages__angular__src__core__change_detection__change_detection.src__di__injector__hierarchical;
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  const runtime = packages__angular__src__core__change_detection__change_detection.src__di__injector__runtime;
  const dynamic_component_loader = packages__angular__src__bootstrap__modules.src__core__linker__dynamic_component_loader;
  const component_resolver = packages__angular__src__bootstrap__modules.src__core__linker__component_resolver;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const application_ref = packages__angular__src__bootstrap__modules.src__core__application_ref;
  const modules = packages__angular__src__bootstrap__modules.src__bootstrap__modules;
  const run = packages__angular__src__bootstrap__modules.src__bootstrap__run;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const priority_queue = packages__collection__src__priority_queue.src__priority_queue;
  const pedantic = packages__pedantic__pedantic.pedantic;
  const bed = Object.create(dart.library);
  const stabilizer = Object.create(dart.library);
  const timer_hook_zone = Object.create(dart.library);
  const errors = Object.create(dart.library);
  const will_never_stabilize = Object.create(dart.library);
  const test_already_running = Object.create(dart.library);
  const generic_type_missing = Object.create(dart.library);
  const real_time_stabilizer = Object.create(dart.library);
  const base_stabilizer = Object.create(dart.library);
  const fixture = Object.create(dart.library);
  const bootstrap = Object.create(dart.library);
  const $toList = dartx.toList;
  const $append = dartx.append;
  const $_equals = dartx._equals;
  const $addAll = dartx.addAll;
  const $isNotEmpty = dartx.isNotEmpty;
  const $every = dartx.every;
  const $isEmpty = dartx.isEmpty;
  const $map = dartx.map;
  const $last = dartx.last;
  const $join = dartx.join;
  const $compareTo = dartx.compareTo;
  const $parent = dartx.parent;
  const $remove = dartx.remove;
  const $text = dartx.text;
  let InjectorToInjector = () => (InjectorToInjector = dart.constFn(dart.fnType(injector.Injector, [], [injector.Injector])))();
  let InjectorAndTimerHookZoneToNgTestStabilizer = () => (InjectorAndTimerHookZoneToNgTestStabilizer = dart.constFn(dart.fnType(stabilizer.NgTestStabilizer, [injector.Injector], [timer_hook_zone.TimerHookZone])))();
  let dynamicToNgTestStabilizer = () => (dynamicToNgTestStabilizer = dart.constFn(dart.fnType(stabilizer.NgTestStabilizer, [dart.dynamic])))();
  let InjectorToNgTestStabilizer = () => (InjectorToNgTestStabilizer = dart.constFn(dart.fnType(stabilizer.NgTestStabilizer, [injector.Injector])))();
  let JSArrayOfInjectorToNgTestStabilizer = () => (JSArrayOfInjectorToNgTestStabilizer = dart.constFn(_interceptors.JSArray$(InjectorToNgTestStabilizer())))();
  let InjectorToReflectiveInjector = () => (InjectorToReflectiveInjector = dart.constFn(dart.fnType(runtime.ReflectiveInjector, [], [injector.Injector])))();
  let VoidToNgZone = () => (VoidToNgZone = dart.constFn(dart.fnType(ng_zone.NgZone, [])))();
  let CompleterOfvoid = () => (CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  let VoidToFutureOfbool = () => (VoidToFutureOfbool = dart.constFn(dart.fnType(FutureOfbool(), [])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let InjectorToFutureOfvoid = () => (InjectorToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [injector.Injector])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let NgTestStabilizerTobool = () => (NgTestStabilizerTobool = dart.constFn(dart.fnType(core.bool, [stabilizer.NgTestStabilizer])))();
  let FnToNgTestStabilizer = () => (FnToNgTestStabilizer = dart.constFn(dart.fnType(stabilizer.NgTestStabilizer, [InjectorToNgTestStabilizer()])))();
  let InjectorAndTimerHookZoneTo_DelegatingNgTestStabilizer = () => (InjectorAndTimerHookZoneTo_DelegatingNgTestStabilizer = dart.constFn(dart.fnType(stabilizer._DelegatingNgTestStabilizer, [injector.Injector], [timer_hook_zone.TimerHookZone])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let ZoneAndZoneDelegateAndZone__ToTimer = () => (ZoneAndZoneDelegateAndZone__ToTimer = dart.constFn(dart.fnType(async.Timer, [async.Zone, async.ZoneDelegate, async.Zone, core.Duration, VoidTovoid()])))();
  let TimerTovoid = () => (TimerTovoid = dart.constFn(dart.fnType(dart.void, [async.Timer])))();
  let ZoneAndZoneDelegateAndZone__ToTimer$ = () => (ZoneAndZoneDelegateAndZone__ToTimer$ = dart.constFn(dart.fnType(async.Timer, [async.Zone, async.ZoneDelegate, async.Zone, core.Duration, TimerTovoid()])))();
  let HeapPriorityQueueOf_ObservedTimer = () => (HeapPriorityQueueOf_ObservedTimer = dart.constFn(priority_queue.HeapPriorityQueue$(real_time_stabilizer._ObservedTimer)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidToFutureOfvoid = () => (VoidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [])))();
  let voidTobool = () => (voidTobool = dart.constFn(dart.fnType(core.bool, [dart.void])))();
  let NgZoneErrorToNull = () => (NgZoneErrorToNull = dart.constFn(dart.fnType(core.Null, [ng_zone.NgZoneError])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(bed.NgTestBed._defaultRootInjector, InjectorToInjector());
    },
    get C1() {
      return C1 = dart.constList([], core.Object);
    },
    get C2() {
      return C2 = dart.fn(bed.NgTestBed._defaultStabilizers, InjectorAndTimerHookZoneToNgTestStabilizer());
    },
    get C3() {
      return C3 = dart.fn(bed.NgTestBed._alwaysStable, dynamicToNgTestStabilizer());
    },
    get C5() {
      return C5 = dart.wrapType(dynamic_component_loader.SlowComponentLoader);
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], core.Object);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: stabilizer._AlwaysStableNgTestStabilizer.prototype
      });
    },
    get C7() {
      return C7 = dart.fn(base_stabilizer.BaseNgZoneStabilizer._noSideEffects, VoidTovoid());
    },
    get C8() {
      return C8 = dart.fn(modules.createNgZone, VoidToNgZone());
    }
  });
  const _host = dart.privateName(bed, "_host");
  const _providers = dart.privateName(bed, "_providers");
  const _createStabilizer = dart.privateName(bed, "_createStabilizer");
  const _rootInjector = dart.privateName(bed, "_rootInjector");
  let C0;
  const _componentFactory = dart.privateName(bed, "_componentFactory");
  let C1;
  let C2;
  let C3;
  let C5;
  let C4;
  const _usesComponentFactory = dart.privateName(bed, "_usesComponentFactory");
  const _createDynamic = dart.privateName(bed, "_createDynamic");
  const _createRootInjectorFactory = dart.privateName(bed, "_createRootInjectorFactory");
  const _is_NgTestBed_default = Symbol('_is_NgTestBed_default');
  bed.NgTestBed$ = dart.generic(T => {
    let NgTestFixtureOfT = () => (NgTestFixtureOfT = dart.constFn(fixture.NgTestFixture$(T)))();
    let FutureOfNgTestFixtureOfT = () => (FutureOfNgTestFixtureOfT = dart.constFn(async.Future$(NgTestFixtureOfT())))();
    let ComponentFactoryOfT = () => (ComponentFactoryOfT = dart.constFn(component_factory.ComponentFactory$(T)))();
    let ComponentRefOfT = () => (ComponentRefOfT = dart.constFn(component_factory.ComponentRef$(T)))();
    let ComponentRefOfTToFutureOfNgTestFixtureOfT = () => (ComponentRefOfTToFutureOfNgTestFixtureOfT = dart.constFn(dart.fnType(FutureOfNgTestFixtureOfT(), [ComponentRefOfT()])))();
    let VoidToFutureOfNgTestFixtureOfT = () => (VoidToFutureOfNgTestFixtureOfT = dart.constFn(dart.fnType(FutureOfNgTestFixtureOfT(), [])))();
    class NgTestBed extends core.Object {
      static _defaultHost() {
        let host = html.Element.tag("ng-test-bed");
        html.document.body[$append](host);
        return host;
      }
      static _defaultRootInjector(parent) {
        if (parent === void 0) parent = null;
        return new empty.EmptyInjector.new(hierarchical.HierarchicalInjector._check(parent));
      }
      static _alwaysStable(_) {
        return stabilizer.NgTestStabilizer.alwaysStable;
      }
      static _defaultStabilizers(injector, timerZone) {
        if (timerZone === void 0) timerZone = null;
        return real_time_stabilizer.RealTimeNgZoneStabilizer.new(timerZone, injector.provideType(ng_zone.NgZone, dart.wrapType(ng_zone.NgZone)));
      }
      static forComponent(T, component, opts) {
        let host = opts && 'host' in opts ? opts.host : null;
        let rootInjector = opts && 'rootInjector' in opts ? opts.rootInjector : C0 || CT.C0;
        let watchAngularLifecycle = opts && 'watchAngularLifecycle' in opts ? opts.watchAngularLifecycle : true;
        if (dart.wrapType(T)[$_equals](dart.wrapType(dart.dynamic))) {
          dart.throw(new generic_type_missing.GenericTypeMissingError.new());
        }
        if (component == null) {
          dart.throw(new core.ArgumentError.notNull("component"));
        }
        return new (bed.NgTestBed$(T))._useComponentFactory({component: component, rootInjector: rootInjector, host: host, watchAngularLifecycle: watchAngularLifecycle});
      }
      static new(opts) {
        let host = opts && 'host' in opts ? opts.host : null;
        let rootInjector = opts && 'rootInjector' in opts ? opts.rootInjector : null;
        let watchAngularLifecycle = opts && 'watchAngularLifecycle' in opts ? opts.watchAngularLifecycle : true;
        if (dart.wrapType(T)[$_equals](dart.wrapType(dart.dynamic))) {
          dart.throw(new generic_type_missing.GenericTypeMissingError.new());
        }
        return bed.NgTestBed$(T)._allowDynamicType({host: host, rootInjector: rootInjector, watchAngularLifecycle: watchAngularLifecycle});
      }
      static _allowDynamicType(opts) {
        let host = opts && 'host' in opts ? opts.host : null;
        let rootInjector = opts && 'rootInjector' in opts ? opts.rootInjector : null;
        let watchAngularLifecycle = opts && 'watchAngularLifecycle' in opts ? opts.watchAngularLifecycle : true;
        return new (bed.NgTestBed$(T)).__({host: host, providers: C4 || CT.C4, stabilizer: dart.test(watchAngularLifecycle) ? C2 || CT.C2 : C3 || CT.C3, rootInjector: rootInjector});
      }
      get [_usesComponentFactory]() {
        return this[_componentFactory] != null;
      }
      addProviders(providers) {
        if (dart.test(this[_usesComponentFactory])) {
          dart.throw(new core.UnsupportedError.new("Use \"addInjector\" instead"));
        }
        return this.fork(T, {providers: bed._concat(core.Object, this[_providers], providers)});
      }
      addInjector(factory) {
        return this.fork(T, {rootInjector: dart.fn(parent => {
            if (parent === void 0) parent = null;
            return this[_rootInjector](factory(parent));
          }, InjectorToInjector())});
      }
      addStabilizers(stabilizers) {
        let t0;
        return this.fork(T, {stabilizer: stabilizer.composeStabilizers((t0 = JSArrayOfInjectorToNgTestStabilizer().of([this[_createStabilizer]]), t0[$addAll](stabilizers), t0))});
      }
      create(opts) {
        let beforeComponentCreated = opts && 'beforeComponentCreated' in opts ? opts.beforeComponentCreated : null;
        let beforeChangeDetection = opts && 'beforeChangeDetection' in opts ? opts.beforeChangeDetection : null;
        return this[_createDynamic](dart.wrapType(T), {beforeComponentCreated: beforeComponentCreated, beforeChangeDetection: beforeChangeDetection});
      }
      static _checkForActiveTest() {
        if (bed.activeTest != null) {
          dart.throw(new test_already_running.TestAlreadyRunningError.new());
        }
      }
      [_createRootInjectorFactory]() {
        let rootInjector = this[_rootInjector];
        if (dart.test(this[_providers][$isNotEmpty])) {
          rootInjector = dart.fn(parent => {
            if (parent === void 0) parent = null;
            return runtime.ReflectiveInjector.resolveAndCreate(this[_providers], this[_rootInjector](parent));
          }, InjectorToReflectiveInjector());
        }
        return rootInjector;
      }
      [_createDynamic](type, opts) {
        let beforeComponentCreated = opts && 'beforeComponentCreated' in opts ? opts.beforeComponentCreated : null;
        let beforeChangeDetection = opts && 'beforeChangeDetection' in opts ? opts.beforeChangeDetection : null;
        bed.NgTestBed._checkForActiveTest();
        return FutureOfNgTestFixtureOfT().sync(dart.fn(() => {
          let t1, t1$;
          bed.NgTestBed._checkForActiveTest();
          let timerHookZone = new timer_hook_zone.TimerHookZone.new();
          let ngZoneInstance = null;
          function ngZoneFactory() {
            return timerHookZone.run(ng_zone.NgZone, dart.fn(() => ngZoneInstance = new ng_zone.NgZone.new({enableLongStackTrace: true}), VoidToNgZone()));
          }
          dart.fn(ngZoneFactory, VoidToNgZone());
          let allStabilizers = null;
          const createStabilizersAndRunUserHook = injector => {
            return async.async(dart.void, (function* createStabilizersAndRunUserHook() {
              let createStabilizer = this[_createStabilizer];
              allStabilizers = InjectorAndTimerHookZoneToNgTestStabilizer().is(createStabilizer) ? createStabilizer(injector, timerHookZone) : createStabilizer(injector);
              if (beforeComponentCreated == null) {
                return null;
              }
              let completer = CompleterOfvoid().new();
              ngZoneInstance.runGuarded(dart.fn(() => async.async(core.Null, function*() {
                try {
                  yield beforeComponentCreated(injector);
                  completer.complete();
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  completer.completeError(e, s);
                }
              }), VoidToFutureOfNull()));
              return completer.future.whenComplete(dart.fn(() => allStabilizers.update(), VoidToFutureOfbool()));
            }).bind(this));
          };
          dart.fn(createStabilizersAndRunUserHook, InjectorToFutureOfvoid());
          return bootstrap.bootstrapForTest(T, ComponentFactoryOfT()._check((t1 = this[_componentFactory], t1 == null ? component_resolver.typeToFactory(type) : t1)), (t1$ = this[_host], t1$ == null ? bed.NgTestBed._defaultHost() : t1$), this[_createRootInjectorFactory](), {beforeComponentCreated: createStabilizersAndRunUserHook, beforeChangeDetection: beforeChangeDetection, createNgZone: ngZoneFactory}).then(NgTestFixtureOfT(), dart.fn(componentRef => async.async(NgTestFixtureOfT(), function*() {
            bed.NgTestBed._checkForActiveTest();
            yield allStabilizers.stabilize();
            let testFixture = new (NgTestFixtureOfT()).__(application_ref.ApplicationRef._check(componentRef.injector.get(dart.wrapType(application_ref.ApplicationRef))), componentRef, allStabilizers);
            bed.activeTest = testFixture;
            return testFixture;
          }), ComponentRefOfTToFutureOfNgTestFixtureOfT()));
        }, VoidToFutureOfNgTestFixtureOfT()));
      }
      fork(E, opts) {
        let t1, t1$, t1$0, t1$1, t1$2;
        dart.checkTypeBound(E, T, 'E');
        let host = opts && 'host' in opts ? opts.host : null;
        let component = opts && 'component' in opts ? opts.component : null;
        let providers = opts && 'providers' in opts ? opts.providers : null;
        let rootInjector = opts && 'rootInjector' in opts ? opts.rootInjector : null;
        let stabilizer = opts && 'stabilizer' in opts ? opts.stabilizer : null;
        return new (bed.NgTestBed$(E)).__({host: (t1 = host, t1 == null ? this[_host] : t1), providers: (t1$ = providers, t1$ == null ? this[_providers] : t1$), stabilizer: (t1$0 = stabilizer, t1$0 == null ? this[_createStabilizer] : t1$0), rootInjector: (t1$1 = rootInjector, t1$1 == null ? this[_rootInjector] : t1$1), component: component_factory.ComponentFactory$(E)._check((t1$2 = component, t1$2 == null ? this[_componentFactory] : t1$2))});
      }
      setComponent(E, component) {
        dart.checkTypeBound(E, T, 'E');
        return this.fork(E, {component: component});
      }
      setHost(host) {
        return this.fork(T, {host: host});
      }
    }
    (NgTestBed.__ = function(opts) {
      let t0;
      let host = opts && 'host' in opts ? opts.host : null;
      let providers = opts && 'providers' in opts ? opts.providers : null;
      let stabilizer = opts && 'stabilizer' in opts ? opts.stabilizer : null;
      let rootInjector = opts && 'rootInjector' in opts ? opts.rootInjector : null;
      let component = opts && 'component' in opts ? opts.component : null;
      this[_host] = host;
      this[_providers] = providers[$toList]();
      this[_createStabilizer] = stabilizer;
      this[_rootInjector] = (t0 = rootInjector, t0 == null ? C0 || CT.C0 : t0);
      this[_componentFactory] = component;
      ;
    }).prototype = NgTestBed.prototype;
    (NgTestBed._useComponentFactory = function(opts) {
      let host = opts && 'host' in opts ? opts.host : null;
      let component = opts && 'component' in opts ? opts.component : null;
      let rootInjector = opts && 'rootInjector' in opts ? opts.rootInjector : null;
      let watchAngularLifecycle = opts && 'watchAngularLifecycle' in opts ? opts.watchAngularLifecycle : null;
      this[_host] = host;
      this[_providers] = C1 || CT.C1;
      this[_createStabilizer] = dart.test(watchAngularLifecycle) ? C2 || CT.C2 : C3 || CT.C3;
      this[_rootInjector] = rootInjector;
      this[_componentFactory] = component;
      ;
    }).prototype = NgTestBed.prototype;
    dart.addTypeTests(NgTestBed);
    NgTestBed.prototype[_is_NgTestBed_default] = true;
    dart.setMethodSignature(NgTestBed, () => ({
      __proto__: dart.getMethods(NgTestBed.__proto__),
      addProviders: dart.fnType(bed.NgTestBed$(T), [core.Iterable$(core.Object)]),
      addInjector: dart.fnType(bed.NgTestBed$(T), [dart.fnType(injector.Injector, [], [injector.Injector])]),
      addStabilizers: dart.fnType(bed.NgTestBed$(T), [core.Iterable$(dart.fnType(stabilizer.NgTestStabilizer, [injector.Injector]))]),
      create: dart.fnType(async.Future$(fixture.NgTestFixture$(T)), [], {beforeChangeDetection: dart.fnType(async.FutureOr$(dart.void), [T]), beforeComponentCreated: dart.fnType(async.FutureOr$(dart.void), [injector.Injector])}, {}),
      [_createRootInjectorFactory]: dart.fnType(dart.fnType(injector.Injector, [], [injector.Injector]), []),
      [_createDynamic]: dart.fnType(async.Future$(fixture.NgTestFixture$(T)), [core.Type], {beforeChangeDetection: dart.fnType(async.FutureOr$(dart.void), [T]), beforeComponentCreated: dart.fnType(async.FutureOr$(dart.void), [injector.Injector])}, {}),
      fork: dart.gFnType(E => [bed.NgTestBed$(E), [], {component: component_factory.ComponentFactory$(E), host: html.Element, providers: core.Iterable$(core.Object), rootInjector: dart.fnType(injector.Injector, [], [injector.Injector]), stabilizer: dart.fnType(stabilizer.NgTestStabilizer, [injector.Injector])}, {}], E => [T]),
      setComponent: dart.gFnType(E => [bed.NgTestBed$(E), [component_factory.ComponentFactory$(E)]], E => [T]),
      setHost: dart.fnType(bed.NgTestBed$(T), [html.Element])
    }));
    dart.setGetterSignature(NgTestBed, () => ({
      __proto__: dart.getGetters(NgTestBed.__proto__),
      [_usesComponentFactory]: core.bool
    }));
    dart.setLibraryUri(NgTestBed, "package:angular_test/src/frontend/bed.dart");
    dart.setFieldSignature(NgTestBed, () => ({
      __proto__: dart.getFields(NgTestBed.__proto__),
      [_host]: dart.finalFieldType(html.Element),
      [_providers]: dart.finalFieldType(core.List$(core.Object)),
      [_createStabilizer]: dart.finalFieldType(dart.fnType(stabilizer.NgTestStabilizer, [injector.Injector])),
      [_componentFactory]: dart.finalFieldType(component_factory.ComponentFactory$(T)),
      [_rootInjector]: dart.finalFieldType(dart.fnType(injector.Injector, [], [injector.Injector]))
    }));
    return NgTestBed;
  });
  bed.NgTestBed = bed.NgTestBed$();
  dart.addTypeTests(bed.NgTestBed, _is_NgTestBed_default);
  bed._concat = function _concat(E, a, b) {
    let t1;
    t1 = a[$toList]();
    t1[$addAll](b);
    return t1;
  };
  bed.disposeAnyRunningTest = function disposeAnyRunningTest() {
    return async.async(dart.void, function* disposeAnyRunningTest() {
      let t1;
      t1 = bed.activeTest;
      return t1 == null ? null : t1.dispose();
    });
  };
  bed.createDynamicFixture = function createDynamicFixture(T, bed, type, opts) {
    let beforeComponentCreated = opts && 'beforeComponentCreated' in opts ? opts.beforeComponentCreated : null;
    let beforeChangeDetection = opts && 'beforeChangeDetection' in opts ? opts.beforeChangeDetection : null;
    return bed[_createDynamic](type, {beforeComponentCreated: beforeComponentCreated, beforeChangeDetection: beforeChangeDetection});
  };
  bed.createDynamicTestBed = function createDynamicTestBed(T, opts) {
    let host = opts && 'host' in opts ? opts.host : null;
    let rootInjector = opts && 'rootInjector' in opts ? opts.rootInjector : null;
    let watchAngularLifecycle = opts && 'watchAngularLifecycle' in opts ? opts.watchAngularLifecycle : true;
    return bed.NgTestBed$(T)._allowDynamicType({host: host, rootInjector: rootInjector, watchAngularLifecycle: watchAngularLifecycle});
  };
  dart.defineLazy(bed, {
    /*bed.activeTest*/get activeTest() {
      return null;
    },
    set activeTest(_) {}
  });
  let C6;
  stabilizer.NgTestStabilizer = class NgTestStabilizer extends core.Object {
    get isStable() {
      return false;
    }
    update(runAndTrackSideEffects) {
      if (runAndTrackSideEffects === void 0) runAndTrackSideEffects = null;
      return FutureOfbool().sync(dart.fn(() => {
        if (runAndTrackSideEffects != null) {
          runAndTrackSideEffects();
        }
        return false;
      }, VoidTobool()));
    }
    stabilize(opts) {
      let runAndTrackSideEffects = opts && 'runAndTrackSideEffects' in opts ? opts.runAndTrackSideEffects : null;
      let threshold = opts && 'threshold' in opts ? opts.threshold : 100;
      return async.async(dart.void, (function* stabilize() {
        if (threshold == null) {
          dart.throw(new core.ArgumentError.notNull("threshold"));
        }
        if (runAndTrackSideEffects != null) {
          yield this.update(runAndTrackSideEffects);
        }
        return this.stabilizeWithThreshold(threshold);
      }).bind(this));
    }
    stabilizeWithThreshold(threshold) {
      return async.async(dart.void, (function* stabilizeWithThreshold() {
        if (dart.notNull(threshold) < 1) {
          dart.throw(new core.ArgumentError.value(threshold, "threshold", "Must be >= 1"));
        }
        let count = 0;
        function thresholdExceeded() {
          let t1;
          return (t1 = count, count = t1 + 1, t1) > dart.notNull(threshold);
        }
        dart.fn(thresholdExceeded, VoidTobool());
        while (!dart.test(yield this.update())) {
          if (dart.test(thresholdExceeded())) {
            dart.throw(new will_never_stabilize.WillNeverStabilizeError.new(threshold));
          }
        }
      }).bind(this));
    }
  };
  (stabilizer.NgTestStabilizer.new = function() {
    ;
  }).prototype = stabilizer.NgTestStabilizer.prototype;
  dart.addTypeTests(stabilizer.NgTestStabilizer);
  dart.setMethodSignature(stabilizer.NgTestStabilizer, () => ({
    __proto__: dart.getMethods(stabilizer.NgTestStabilizer.__proto__),
    update: dart.fnType(async.Future$(core.bool), [], [dart.fnType(dart.void, [])]),
    stabilize: dart.fnType(async.Future$(dart.void), [], {runAndTrackSideEffects: dart.fnType(dart.void, []), threshold: core.int}, {}),
    stabilizeWithThreshold: dart.fnType(async.Future$(dart.void), [core.int])
  }));
  dart.setGetterSignature(stabilizer.NgTestStabilizer, () => ({
    __proto__: dart.getGetters(stabilizer.NgTestStabilizer.__proto__),
    isStable: core.bool
  }));
  dart.setLibraryUri(stabilizer.NgTestStabilizer, "package:angular_test/src/frontend/stabilizer.dart");
  dart.defineLazy(stabilizer.NgTestStabilizer, {
    /*stabilizer.NgTestStabilizer.alwaysStable*/get alwaysStable() {
      return C6 || CT.C6;
    }
  });
  stabilizer._AlwaysStableNgTestStabilizer = class _AlwaysStableNgTestStabilizer extends stabilizer.NgTestStabilizer {
    get isStable() {
      return true;
    }
  };
  (stabilizer._AlwaysStableNgTestStabilizer.new = function() {
    stabilizer._AlwaysStableNgTestStabilizer.__proto__.new.call(this);
    ;
  }).prototype = stabilizer._AlwaysStableNgTestStabilizer.prototype;
  dart.addTypeTests(stabilizer._AlwaysStableNgTestStabilizer);
  dart.setLibraryUri(stabilizer._AlwaysStableNgTestStabilizer, "package:angular_test/src/frontend/stabilizer.dart");
  const _updatedAtLeastOnce = dart.privateName(stabilizer, "_updatedAtLeastOnce");
  const _delegates = dart.privateName(stabilizer, "_delegates");
  const _updateAll = dart.privateName(stabilizer, "_updateAll");
  const stabilizeWithThreshold = Symbol("stabilizeWithThreshold");
  stabilizer._DelegatingNgTestStabilizer = class _DelegatingNgTestStabilizer extends stabilizer.NgTestStabilizer {
    get isStable() {
      return this[_delegates][$every](dart.fn(delegate => delegate.isStable, NgTestStabilizerTobool()));
    }
    update(runAndTrackSideEffects) {
      if (runAndTrackSideEffects === void 0) runAndTrackSideEffects = null;
      return async.async(core.bool, (function* update() {
        if (dart.test(this[_delegates][$isEmpty])) {
          return false;
        }
        if (runAndTrackSideEffects == null && dart.test(this[_updatedAtLeastOnce])) {
          yield this[_updateAll](runAndTrackSideEffects, dart.fn(d => !dart.test(d.isStable), NgTestStabilizerTobool()));
        } else {
          yield this[_updateAll](runAndTrackSideEffects);
        }
        this[_updatedAtLeastOnce] = true;
        return this.isStable;
      }).bind(this));
    }
    [_updateAll](runAndTrackSideEffects, test) {
      if (test === void 0) test = null;
      return async.async(dart.void, (function* _updateAll() {
        for (let delegate of this[_delegates]) {
          if (test == null || dart.test(test(delegate))) {
            yield delegate.update(runAndTrackSideEffects);
          }
        }
      }).bind(this));
    }
    stabilizeWithThreshold(threshold) {
      return async.async(dart.void, (function* stabilizeWithThreshold$() {
        try {
          this[_updatedAtLeastOnce] = false;
          return this[stabilizeWithThreshold](threshold);
        } finally {
          this[_updatedAtLeastOnce] = false;
        }
      }).bind(this));
    }
    [stabilizeWithThreshold](threshold) {
      return super.stabilizeWithThreshold(threshold);
    }
  };
  (stabilizer._DelegatingNgTestStabilizer.new = function(stabilizers) {
    this[_updatedAtLeastOnce] = false;
    this[_delegates] = stabilizers[$toList]({growable: false});
    stabilizer._DelegatingNgTestStabilizer.__proto__.new.call(this);
    ;
  }).prototype = stabilizer._DelegatingNgTestStabilizer.prototype;
  dart.addTypeTests(stabilizer._DelegatingNgTestStabilizer);
  dart.setMethodSignature(stabilizer._DelegatingNgTestStabilizer, () => ({
    __proto__: dart.getMethods(stabilizer._DelegatingNgTestStabilizer.__proto__),
    [_updateAll]: dart.fnType(async.Future$(dart.void), [dart.fnType(dart.void, [])], [dart.fnType(core.bool, [stabilizer.NgTestStabilizer])])
  }));
  dart.setLibraryUri(stabilizer._DelegatingNgTestStabilizer, "package:angular_test/src/frontend/stabilizer.dart");
  dart.setFieldSignature(stabilizer._DelegatingNgTestStabilizer, () => ({
    __proto__: dart.getFields(stabilizer._DelegatingNgTestStabilizer.__proto__),
    [_delegates]: dart.finalFieldType(core.List$(stabilizer.NgTestStabilizer)),
    [_updatedAtLeastOnce]: dart.fieldType(core.bool)
  }));
  stabilizer.composeStabilizers = function composeStabilizers(factories) {
    return dart.fn((injector, zone) => {
      if (zone === void 0) zone = null;
      return new stabilizer._DelegatingNgTestStabilizer.new(factories[$map](stabilizer.NgTestStabilizer, dart.fn(f => {
        if (InjectorAndTimerHookZoneToNgTestStabilizer().is(f)) {
          return f(injector, zone);
        }
        if (InjectorToNgTestStabilizer().is(f)) {
          return f(injector);
        }
        dart.throw(new core.ArgumentError.new("Invalid stabilizer factory: " + dart.str(f)));
      }, FnToNgTestStabilizer())));
    }, InjectorAndTimerHookZoneTo_DelegatingNgTestStabilizer());
  };
  const _timerZone = dart.privateName(timer_hook_zone, "_timerZone");
  const createTimer = dart.privateName(timer_hook_zone, "TimerHookZone.createTimer");
  const createPeriodicTimer = dart.privateName(timer_hook_zone, "TimerHookZone.createPeriodicTimer");
  timer_hook_zone.TimerHookZone = class TimerHookZone extends core.Object {
    get createTimer() {
      return this[createTimer];
    }
    set createTimer(value) {
      this[createTimer] = value;
    }
    get createPeriodicTimer() {
      return this[createPeriodicTimer];
    }
    set createPeriodicTimer(value) {
      this[createPeriodicTimer] = value;
    }
    run(T, context) {
      return this[_timerZone].run(T, context);
    }
  };
  (timer_hook_zone.TimerHookZone.new = function() {
    this[_timerZone] = null;
    this[createTimer] = dart.fn((self, parent, zone, duration, callback) => parent.createTimer(zone, duration, callback), ZoneAndZoneDelegateAndZone__ToTimer());
    this[createPeriodicTimer] = dart.fn((self, parent, zone, duration, callback) => parent.createPeriodicTimer(zone, duration, callback), ZoneAndZoneDelegateAndZone__ToTimer$());
    this[_timerZone] = async.Zone.current.fork({specification: new async._ZoneSpecification.new({createTimer: dart.fn((self, parent, zone, duration, callback) => this.createTimer(self, parent, zone, duration, callback), ZoneAndZoneDelegateAndZone__ToTimer()), createPeriodicTimer: dart.fn((self, parent, zone, duration, callback) => this.createPeriodicTimer(self, parent, zone, duration, callback), ZoneAndZoneDelegateAndZone__ToTimer$())})});
  }).prototype = timer_hook_zone.TimerHookZone.prototype;
  dart.addTypeTests(timer_hook_zone.TimerHookZone);
  dart.setMethodSignature(timer_hook_zone.TimerHookZone, () => ({
    __proto__: dart.getMethods(timer_hook_zone.TimerHookZone.__proto__),
    run: dart.gFnType(T => [T, [dart.fnType(T, [])]])
  }));
  dart.setLibraryUri(timer_hook_zone.TimerHookZone, "package:angular_test/src/frontend/ng_zone/timer_hook_zone.dart");
  dart.setFieldSignature(timer_hook_zone.TimerHookZone, () => ({
    __proto__: dart.getFields(timer_hook_zone.TimerHookZone.__proto__),
    [_timerZone]: dart.fieldType(async.Zone),
    createTimer: dart.fieldType(dart.fnType(async.Timer, [async.Zone, async.ZoneDelegate, async.Zone, core.Duration, dart.fnType(dart.void, [])])),
    createPeriodicTimer: dart.fieldType(dart.fnType(async.Timer, [async.Zone, async.ZoneDelegate, async.Zone, core.Duration, dart.fnType(dart.void, [async.Timer])]))
  }));
  const threshold$ = dart.privateName(will_never_stabilize, "WillNeverStabilizeError.threshold");
  will_never_stabilize.WillNeverStabilizeError = class WillNeverStabilizeError extends core.Error {
    get threshold() {
      return this[threshold$];
    }
    set threshold(value) {
      super.threshold = value;
    }
    toString() {
      return "Failed to stabilize after " + dart.str(this.threshold) + " attempts";
    }
  };
  (will_never_stabilize.WillNeverStabilizeError.new = function(threshold) {
    this[threshold$] = threshold;
    will_never_stabilize.WillNeverStabilizeError.__proto__.new.call(this);
    ;
  }).prototype = will_never_stabilize.WillNeverStabilizeError.prototype;
  dart.addTypeTests(will_never_stabilize.WillNeverStabilizeError);
  dart.setLibraryUri(will_never_stabilize.WillNeverStabilizeError, "package:angular_test/src/errors/will_never_stabilize.dart");
  dart.setFieldSignature(will_never_stabilize.WillNeverStabilizeError, () => ({
    __proto__: dart.getFields(will_never_stabilize.WillNeverStabilizeError.__proto__),
    threshold: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(will_never_stabilize.WillNeverStabilizeError, ['toString']);
  test_already_running.TestAlreadyRunningError = class TestAlreadyRunningError extends core.Error {
    toString() {
      return "Another instance of an `NgTestFixture` is still executing!\n\n" + "NgTestBed supports *one* test executing at a time to avoid timing " + "conflicts or stability issues related to sharing a browser DOM.\n\n" + "When you are done with a test, make sure to dispose fixtures:\n" + "  tearDown(() => disposeAnyRunningTest())\n\n" + "NOTE: `disposeAnyRunningTest` returns a Future that must complete " + "*before* executing another test - `tearDown` handles this for you " + "if returned like the example above.";
    }
  };
  (test_already_running.TestAlreadyRunningError.new = function() {
    test_already_running.TestAlreadyRunningError.__proto__.new.call(this);
    ;
  }).prototype = test_already_running.TestAlreadyRunningError.prototype;
  dart.addTypeTests(test_already_running.TestAlreadyRunningError);
  dart.setLibraryUri(test_already_running.TestAlreadyRunningError, "package:angular_test/src/errors/test_already_running.dart");
  dart.defineExtensionMethods(test_already_running.TestAlreadyRunningError, ['toString']);
  const message$ = dart.privateName(generic_type_missing, "GenericTypeMissingError.message");
  generic_type_missing.GenericTypeMissingError = class GenericTypeMissingError extends core.Error {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      if (this.message == null) {
        return "Generic type required";
      }
      return "Generic type required: " + dart.str(this.message);
    }
  };
  (generic_type_missing.GenericTypeMissingError.new = function(message) {
    if (message === void 0) message = null;
    this[message$] = message;
    generic_type_missing.GenericTypeMissingError.__proto__.new.call(this);
    ;
  }).prototype = generic_type_missing.GenericTypeMissingError.prototype;
  dart.addTypeTests(generic_type_missing.GenericTypeMissingError);
  dart.setLibraryUri(generic_type_missing.GenericTypeMissingError, "package:angular_test/src/errors/generic_type_missing.dart");
  dart.setFieldSignature(generic_type_missing.GenericTypeMissingError, () => ({
    __proto__: dart.getFields(generic_type_missing.GenericTypeMissingError.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(generic_type_missing.GenericTypeMissingError, ['toString']);
  const _minimumDurationForAllPendingTimers = dart.privateName(real_time_stabilizer, "_minimumDurationForAllPendingTimers");
  const _duration = dart.privateName(real_time_stabilizer, "_duration");
  let C7;
  const _triggerSideEffects = dart.privateName(base_stabilizer, "_triggerSideEffects");
  const _waitForAsyncEventsOrErrors = dart.privateName(base_stabilizer, "_waitForAsyncEventsOrErrors");
  const _is_BaseNgZoneStabilizer_default = Symbol('_is_BaseNgZoneStabilizer_default');
  const ngZone$ = dart.privateName(base_stabilizer, "BaseNgZoneStabilizer.ngZone");
  const pendingTimers$ = dart.privateName(base_stabilizer, "BaseNgZoneStabilizer.pendingTimers");
  base_stabilizer.BaseNgZoneStabilizer$ = dart.generic(T => {
    class BaseNgZoneStabilizer extends stabilizer.NgTestStabilizer {
      get ngZone() {
        return this[ngZone$];
      }
      set ngZone(value) {
        super.ngZone = value;
      }
      get pendingTimers() {
        return this[pendingTimers$];
      }
      set pendingTimers(value) {
        super.pendingTimers = value;
      }
      get isStable() {
        return !dart.test(this.ngZone.hasPendingMicrotasks);
      }
      static _noSideEffects() {
      }
      update(runAndTrackSideEffects) {
        if (runAndTrackSideEffects === void 0) runAndTrackSideEffects = null;
        return FutureOfvoid().sync(dart.fn(() => {
          let t1;
          this[_triggerSideEffects]((t1 = runAndTrackSideEffects, t1 == null ? C7 || CT.C7 : t1));
          return this[_waitForAsyncEventsOrErrors]();
        }, VoidToFutureOfvoid())).then(core.bool, dart.fn(_ => this.isStable, voidTobool()));
      }
      [_triggerSideEffects](withCallback) {
        async.scheduleMicrotask(dart.fn(() => this.ngZone.runGuarded(dart.fn(() => withCallback(), VoidTovoid())), VoidTovoid()));
      }
      waitForAsyncEvents() {
        return this.ngZone.onTurnDone.first;
      }
      static rebuildStackTrace(traceOrChain) {
        return new core._StringStackTrace.new(traceOrChain[$join]("\n"));
      }
      [_waitForAsyncEventsOrErrors]() {
        return async.async(dart.void, (function* _waitForAsyncEventsOrErrors() {
          let uncaughtError = null;
          let uncaughtStack = null;
          let onErrorSub = null;
          onErrorSub = this.ngZone.onError.listen(dart.fn(e => {
            uncaughtError = e.error;
            uncaughtStack = base_stabilizer.BaseNgZoneStabilizer.rebuildStackTrace(e.stackTrace);
            onErrorSub.cancel();
          }, NgZoneErrorToNull()));
          yield this.waitForAsyncEvents();
          yield FutureOfNull().new(dart.fn(() => {
          }, VoidToNull()));
          pedantic.unawaited(onErrorSub.cancel());
          return uncaughtError != null ? FutureOfvoid().error(uncaughtError, uncaughtStack) : FutureOfvoid().value();
        }).bind(this));
      }
    }
    (BaseNgZoneStabilizer.new = function(ngZone, pendingTimers) {
      this[ngZone$] = ngZone;
      this[pendingTimers$] = pendingTimers;
      BaseNgZoneStabilizer.__proto__.new.call(this);
      ;
    }).prototype = BaseNgZoneStabilizer.prototype;
    dart.addTypeTests(BaseNgZoneStabilizer);
    BaseNgZoneStabilizer.prototype[_is_BaseNgZoneStabilizer_default] = true;
    dart.setMethodSignature(BaseNgZoneStabilizer, () => ({
      __proto__: dart.getMethods(BaseNgZoneStabilizer.__proto__),
      [_triggerSideEffects]: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      waitForAsyncEvents: dart.fnType(async.Future$(dart.void), []),
      [_waitForAsyncEventsOrErrors]: dart.fnType(async.Future$(dart.void), [])
    }));
    dart.setLibraryUri(BaseNgZoneStabilizer, "package:angular_test/src/frontend/ng_zone/base_stabilizer.dart");
    dart.setFieldSignature(BaseNgZoneStabilizer, () => ({
      __proto__: dart.getFields(BaseNgZoneStabilizer.__proto__),
      ngZone: dart.finalFieldType(ng_zone.NgZone),
      pendingTimers: dart.finalFieldType(priority_queue.PriorityQueue$(T))
    }));
    return BaseNgZoneStabilizer;
  });
  base_stabilizer.BaseNgZoneStabilizer = base_stabilizer.BaseNgZoneStabilizer$();
  dart.addTypeTests(base_stabilizer.BaseNgZoneStabilizer, _is_BaseNgZoneStabilizer_default);
  const _delegate = dart.privateName(real_time_stabilizer, "_delegate");
  const _onCancel = dart.privateName(real_time_stabilizer, "_onCancel");
  const _delegate$ = dart.privateName(real_time_stabilizer, "_ObservedTimer._delegate");
  const _duration$ = dart.privateName(real_time_stabilizer, "_ObservedTimer._duration");
  const _onCancel$ = dart.privateName(real_time_stabilizer, "_ObservedTimer._onCancel");
  real_time_stabilizer._ObservedTimer = class _ObservedTimer extends core.Object {
    get [_delegate]() {
      return this[_delegate$];
    }
    set [_delegate](value) {
      super[_delegate] = value;
    }
    get [_duration]() {
      return this[_duration$];
    }
    set [_duration](value) {
      super[_duration] = value;
    }
    get [_onCancel]() {
      return this[_onCancel$];
    }
    set [_onCancel](value) {
      super[_onCancel] = value;
    }
    cancel() {
      this[_onCancel]();
      this[_delegate].cancel();
    }
    compareTo(b) {
      real_time_stabilizer._ObservedTimer._check(b);
      return this[_duration].compareTo(b[_duration]);
    }
    get tick() {
      return this[_delegate].tick;
    }
    get isActive() {
      return this[_delegate].isActive;
    }
  };
  (real_time_stabilizer._ObservedTimer.new = function(_delegate, _duration, _onCancel) {
    this[_delegate$] = _delegate;
    this[_duration$] = _duration;
    this[_onCancel$] = _onCancel;
    ;
  }).prototype = real_time_stabilizer._ObservedTimer.prototype;
  dart.addTypeTests(real_time_stabilizer._ObservedTimer);
  real_time_stabilizer._ObservedTimer[dart.implements] = () => [async.Timer, core.Comparable$(real_time_stabilizer._ObservedTimer)];
  dart.setMethodSignature(real_time_stabilizer._ObservedTimer, () => ({
    __proto__: dart.getMethods(real_time_stabilizer._ObservedTimer.__proto__),
    cancel: dart.fnType(dart.void, []),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object])
  }));
  dart.setGetterSignature(real_time_stabilizer._ObservedTimer, () => ({
    __proto__: dart.getGetters(real_time_stabilizer._ObservedTimer.__proto__),
    tick: core.int,
    isActive: core.bool
  }));
  dart.setLibraryUri(real_time_stabilizer._ObservedTimer, "package:angular_test/src/frontend/ng_zone/real_time_stabilizer.dart");
  dart.setFieldSignature(real_time_stabilizer._ObservedTimer, () => ({
    __proto__: dart.getFields(real_time_stabilizer._ObservedTimer.__proto__),
    [_delegate]: dart.finalFieldType(async.Timer),
    [_duration]: dart.finalFieldType(core.Duration),
    [_onCancel]: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  dart.defineExtensionMethods(real_time_stabilizer._ObservedTimer, ['compareTo']);
  const waitForAsyncEvents = Symbol("waitForAsyncEvents");
  real_time_stabilizer.RealTimeNgZoneStabilizer = class RealTimeNgZoneStabilizer extends base_stabilizer.BaseNgZoneStabilizer$(real_time_stabilizer._ObservedTimer) {
    static new(timerZone, ngZone) {
      let pendingTimers = new (HeapPriorityQueueOf_ObservedTimer()).new();
      timerZone.createTimer = dart.fn((self, parent, zone, duration, callback) => {
        if (!dart.test(ng_zone.inAngularZone(ngZone, zone))) {
          return parent.createTimer(zone, duration, callback);
        }
        let instance = null;
        let wrappedCallback = dart.fn(() => {
          try {
            callback();
          } finally {
            pendingTimers.remove(instance);
          }
        }, VoidToNull());
        let delegate = parent.createTimer(zone, duration, wrappedCallback);
        instance = new real_time_stabilizer._ObservedTimer.new(delegate, duration, dart.fn(() => pendingTimers.remove(instance), VoidTobool()));
        pendingTimers.add(instance);
        return instance;
      }, ZoneAndZoneDelegateAndZone__ToTimer());
      return new real_time_stabilizer.RealTimeNgZoneStabilizer.__(ngZone, pendingTimers);
    }
    get isStable() {
      return dart.test(super.isStable) && dart.test(this.pendingTimers.isEmpty);
    }
    waitForAsyncEvents() {
      return async.async(dart.void, (function* waitForAsyncEvents$() {
        yield this[waitForAsyncEvents]();
        if (dart.test(this.pendingTimers.isNotEmpty)) {
          yield FutureOfvoid().delayed(this[_minimumDurationForAllPendingTimers]());
        }
      }).bind(this));
    }
    [_minimumDurationForAllPendingTimers]() {
      return this.pendingTimers.toList()[$last][_duration];
    }
    [waitForAsyncEvents]() {
      return super.waitForAsyncEvents();
    }
  };
  (real_time_stabilizer.RealTimeNgZoneStabilizer.__ = function(ngZone, pendingTimers) {
    real_time_stabilizer.RealTimeNgZoneStabilizer.__proto__.new.call(this, ngZone, pendingTimers);
    ;
  }).prototype = real_time_stabilizer.RealTimeNgZoneStabilizer.prototype;
  dart.addTypeTests(real_time_stabilizer.RealTimeNgZoneStabilizer);
  dart.setMethodSignature(real_time_stabilizer.RealTimeNgZoneStabilizer, () => ({
    __proto__: dart.getMethods(real_time_stabilizer.RealTimeNgZoneStabilizer.__proto__),
    [_minimumDurationForAllPendingTimers]: dart.fnType(core.Duration, [])
  }));
  dart.setLibraryUri(real_time_stabilizer.RealTimeNgZoneStabilizer, "package:angular_test/src/frontend/ng_zone/real_time_stabilizer.dart");
  const _applicationRef$ = dart.privateName(fixture, "_applicationRef");
  const _rootComponentRef$ = dart.privateName(fixture, "_rootComponentRef");
  const _testStabilizer$ = dart.privateName(fixture, "_testStabilizer");
  const _is_NgTestFixture_default = Symbol('_is_NgTestFixture_default');
  fixture.NgTestFixture$ = dart.generic(T => {
    class NgTestFixture extends core.Object {
      dispose() {
        return async.async(dart.void, (function* dispose() {
          yield this.update();
          this[_rootComponentRef$].destroy();
          this[_rootComponentRef$].location[$parent][$remove]();
          this[_applicationRef$].dispose();
          bed.activeTest = null;
        }).bind(this));
      }
      get rootElement() {
        return this[_rootComponentRef$].location;
      }
      update(run) {
        if (run === void 0) run = null;
        return this[_testStabilizer$].stabilize({runAndTrackSideEffects: dart.fn(() => {
            if (run != null) {
              FutureOfvoid().sync(dart.fn(() => {
                run(this[_rootComponentRef$].instance);
              }, VoidToNull()));
            }
          }, VoidToNull())});
      }
      get text() {
        return this.rootElement[$text];
      }
      get assertOnlyInstance() {
        return this[_rootComponentRef$].instance;
      }
    }
    (NgTestFixture.__ = function(_applicationRef, _rootComponentRef, _testStabilizer) {
      this[_applicationRef$] = _applicationRef;
      this[_rootComponentRef$] = _rootComponentRef;
      this[_testStabilizer$] = _testStabilizer;
      ;
    }).prototype = NgTestFixture.prototype;
    dart.addTypeTests(NgTestFixture);
    NgTestFixture.prototype[_is_NgTestFixture_default] = true;
    dart.setMethodSignature(NgTestFixture, () => ({
      __proto__: dart.getMethods(NgTestFixture.__proto__),
      dispose: dart.fnType(async.Future$(dart.void), []),
      update: dart.fnType(async.Future$(dart.void), [], [dart.fnType(dart.void, [T])])
    }));
    dart.setGetterSignature(NgTestFixture, () => ({
      __proto__: dart.getGetters(NgTestFixture.__proto__),
      rootElement: html.Element,
      text: core.String,
      assertOnlyInstance: T
    }));
    dart.setLibraryUri(NgTestFixture, "package:angular_test/src/frontend/fixture.dart");
    dart.setFieldSignature(NgTestFixture, () => ({
      __proto__: dart.getFields(NgTestFixture.__proto__),
      [_applicationRef$]: dart.finalFieldType(application_ref.ApplicationRef),
      [_rootComponentRef$]: dart.finalFieldType(component_factory.ComponentRef$(T)),
      [_testStabilizer$]: dart.finalFieldType(stabilizer.NgTestStabilizer)
    }));
    return NgTestFixture;
  });
  fixture.NgTestFixture = fixture.NgTestFixture$();
  dart.addTypeTests(fixture.NgTestFixture, _is_NgTestFixture_default);
  fixture.injectFromFixture = function injectFromFixture(T, fixture, tokenOrType) {
    return T._check(fixture[_rootComponentRef$].injector.get(tokenOrType));
  };
  let C8;
  bootstrap.testInjectorFactory = function testInjectorFactory(providers) {
    if (dart.test(providers[$isEmpty])) {
      return dart.fn(parent => {
        if (parent === void 0) parent = null;
        return parent;
      }, InjectorToInjector());
    }
    return dart.fn(parent => {
      if (parent === void 0) parent = null;
      return runtime.ReflectiveInjector.resolveAndCreate(JSArrayOfObject().of([providers]), parent);
    }, InjectorToReflectiveInjector());
  };
  bootstrap.bootstrapForTest = function bootstrapForTest(E, componentFactory, hostElement, userInjector, opts) {
    let beforeComponentCreated = opts && 'beforeComponentCreated' in opts ? opts.beforeComponentCreated : null;
    let beforeChangeDetection = opts && 'beforeChangeDetection' in opts ? opts.beforeChangeDetection : null;
    let createNgZone = opts && 'createNgZone' in opts ? opts.createNgZone : C8 || CT.C8;
    return async.async(component_factory.ComponentRef$(E), function* bootstrapForTest() {
      if (componentFactory == null) {
        dart.throw(new core.ArgumentError.notNull("componentFactory"));
      }
      if (hostElement == null) {
        dart.throw(new core.ArgumentError.notNull("hostElement"));
      }
      if (userInjector == null) {
        dart.throw(new core.ArgumentError.notNull("userInjector"));
      }
      let injector = run.appInjector(userInjector, {createNgZone: createNgZone});
      let appRef = application_ref.ApplicationRef._check(injector.get(dart.wrapType(application_ref.ApplicationRef)));
      let caughtError = null;
      let ngZone = ng_zone.NgZone._check(injector.get(dart.wrapType(ng_zone.NgZone)));
      let onErrorSub = ngZone.onError.listen(dart.fn(e => {
        caughtError = e;
      }, NgZoneErrorToNull()));
      if (beforeComponentCreated != null) {
        yield beforeComponentCreated(injector);
      }
      return appRef.run(component_factory.ComponentRef$(E), dart.fn(() => bootstrap._runAndLoadComponent(E, appRef, componentFactory, hostElement, injector, {beforeChangeDetection: beforeChangeDetection}).then(component_factory.ComponentRef$(E), dart.fn(componentRef => async.async(component_factory.ComponentRef$(E), function*() {
        yield ngZone.onTurnDone.first;
        yield FutureOfvoid().value();
        yield onErrorSub.cancel();
        if (caughtError != null) {
          return async.Future$(component_factory.ComponentRef$(E)).error(caughtError.error, new core._StringStackTrace.new(caughtError.stackTrace[$join]("\n")));
        }
        return componentRef;
      }), dart.fnType(async.Future$(component_factory.ComponentRef$(E)), [component_factory.ComponentRef$(E)]))), dart.fnType(async.Future$(component_factory.ComponentRef$(E)), [])));
    });
  };
  bootstrap._runAndLoadComponent = function _runAndLoadComponent(E, appRef, componentFactory, hostElement, injector, opts) {
    let beforeChangeDetection = opts && 'beforeChangeDetection' in opts ? opts.beforeChangeDetection : null;
    let componentRef = componentFactory.create(injector);
    let cdMode = AppViewOfvoid().as(componentRef.hostView).cdMode;
    if (cdMode !== 0 && cdMode !== 3) {
      dart.throw(new core.UnsupportedError.new("The root component in an Angular test or application must use the " + "default form of change detection (ChangeDetectionStrategy.Default). " + "Instead got " + dart.str(cdMode) + " on component " + dart.str(dart.wrapType(E)) + "."));
    }
    function loadComponent() {
      hostElement[$append](componentRef.location);
      appRef.registerChangeDetector(componentRef.changeDetectorRef);
      componentRef.onDestroy(dart.fn(() => {
        appRef.unregisterChangeDetector(componentRef.changeDetectorRef);
      }, VoidToNull()));
      appRef.tick();
      return async.Future$(component_factory.ComponentRef$(E)).value(componentRef);
    }
    dart.fn(loadComponent, dart.fnType(async.Future$(component_factory.ComponentRef$(E)), []));
    let beforeChangeDetectionReturn = null;
    if (beforeChangeDetection != null) {
      beforeChangeDetectionReturn = beforeChangeDetection(componentRef.instance);
    }
    if (FutureOfvoid().is(beforeChangeDetectionReturn)) {
      return beforeChangeDetectionReturn.then(component_factory.ComponentRef$(E), dart.fn(_ => loadComponent(), dart.fnType(async.Future$(component_factory.ComponentRef$(E)), [dart.void])));
    } else {
      return loadComponent();
    }
  };
  dart.trackLibraries("packages/angular_test/src/bootstrap", {
    "package:angular_test/src/frontend/bed.dart": bed,
    "package:angular_test/src/frontend/stabilizer.dart": stabilizer,
    "package:angular_test/src/frontend/ng_zone/timer_hook_zone.dart": timer_hook_zone,
    "package:angular_test/src/errors.dart": errors,
    "package:angular_test/src/errors/will_never_stabilize.dart": will_never_stabilize,
    "package:angular_test/src/errors/test_already_running.dart": test_already_running,
    "package:angular_test/src/errors/generic_type_missing.dart": generic_type_missing,
    "package:angular_test/src/frontend/ng_zone/real_time_stabilizer.dart": real_time_stabilizer,
    "package:angular_test/src/frontend/ng_zone/base_stabilizer.dart": base_stabilizer,
    "package:angular_test/src/frontend/fixture.dart": fixture,
    "package:angular_test/src/bootstrap.dart": bootstrap
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["frontend/bed.dart","frontend/stabilizer.dart","frontend/ng_zone/timer_hook_zone.dart","errors/will_never_stabilize.dart","errors/test_already_running.dart","errors/generic_type_missing.dart","frontend/ng_zone/base_stabilizer.dart","frontend/ng_zone/real_time_stabilizer.dart","frontend/fixture.dart","bootstrap.dart"],"names":[],"mappings":"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","file":"bootstrap.ddc.js"}');
  // Exports:
  return {
    src__frontend__bed: bed,
    src__frontend__stabilizer: stabilizer,
    src__frontend__ng_zone__timer_hook_zone: timer_hook_zone,
    src__errors: errors,
    src__errors__will_never_stabilize: will_never_stabilize,
    src__errors__test_already_running: test_already_running,
    src__errors__generic_type_missing: generic_type_missing,
    src__frontend__ng_zone__real_time_stabilizer: real_time_stabilizer,
    src__frontend__ng_zone__base_stabilizer: base_stabilizer,
    src__frontend__fixture: fixture,
    src__bootstrap: bootstrap
  };
});

//# sourceMappingURL=bootstrap.ddc.js.map
