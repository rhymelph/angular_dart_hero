define(['dart_sdk', 'packages/collection/src/priority_queue', 'packages/angular_test/src/bootstrap'], function(dart_sdk, packages__collection__src__priority_queue, packages__angular_test__src__bootstrap) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const priority_queue = packages__collection__src__priority_queue.src__priority_queue;
  const base_stabilizer = packages__angular_test__src__bootstrap.src__frontend__ng_zone__base_stabilizer;
  const fake_time_stabilizer = Object.create(dart.library);
  const frontend = Object.create(dart.library);
  const $where = dartx.where;
  const $toList = dartx.toList;
  const $hashCode = dartx.hashCode;
  const $compareTo = dartx.compareTo;
  let HeapPriorityQueueOf_FakeTimer = () => (HeapPriorityQueueOf_FakeTimer = dart.constFn(priority_queue.HeapPriorityQueue$(fake_time_stabilizer._FakeTimer)))();
  let _FakeTimerTovoid = () => (_FakeTimerTovoid = dart.constFn(dart.fnType(dart.void, [fake_time_stabilizer._FakeTimer])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let ZoneAndZoneDelegateAndZone__To_FakeTimer = () => (ZoneAndZoneDelegateAndZone__To_FakeTimer = dart.constFn(dart.fnType(fake_time_stabilizer._FakeTimer, [async.Zone, async.ZoneDelegate, async.Zone, core.Duration, VoidTovoid()])))();
  let TimerTovoid = () => (TimerTovoid = dart.constFn(dart.fnType(dart.void, [async.Timer])))();
  let ZoneAndZoneDelegateAndZone__To_FakeTimer$ = () => (ZoneAndZoneDelegateAndZone__To_FakeTimer$ = dart.constFn(dart.fnType(fake_time_stabilizer._FakeTimer, [async.Zone, async.ZoneDelegate, async.Zone, core.Duration, TimerTovoid()])))();
  let _FakeTimerTobool = () => (_FakeTimerTobool = dart.constFn(dart.fnType(core.bool, [fake_time_stabilizer._FakeTimer])))();
  const CT = Object.create(null);
  const _lastElapse = dart.privateName(fake_time_stabilizer, "_lastElapse");
  const _completeAfter$ = dart.privateName(fake_time_stabilizer, "_completeAfter");
  const _completeTimers = dart.privateName(fake_time_stabilizer, "_completeTimers");
  const _isActive = dart.privateName(fake_time_stabilizer, "_isActive");
  const _complete$ = dart.privateName(fake_time_stabilizer, "_complete");
  const _clearPendingStatus$ = dart.privateName(fake_time_stabilizer, "_clearPendingStatus");
  const _scheduledDuration$ = dart.privateName(fake_time_stabilizer, "_scheduledDuration");
  fake_time_stabilizer._FakeTimer = class _FakeTimer extends core.Object {
    get isActive() {
      return this[_isActive];
    }
    get tick() {
      return 0;
    }
    cancel() {
      if (dart.test(this[_isActive])) {
        this[_clearPendingStatus$](this);
        this[_isActive] = false;
      }
    }
    complete(onPeriodic) {
      if (!dart.test(this[_isActive])) dart.assertFailed("An inactive timer should not be accessible to complete", "org-dartlang-app:///packages/angular_test/src/frontend/ng_zone/fake_time_stabilizer.dart", 144, 12, "_isActive");
      this[_clearPendingStatus$](this);
      this[_complete$](this);
      if (dart.test(this.isPeriodic)) {
        this[_completeAfter$] = this[_completeAfter$]['+'](this[_scheduledDuration$]);
        this[_clearPendingStatus$](this);
        onPeriodic(this);
      } else {
        this[_isActive] = false;
      }
    }
    compareTo(b) {
      fake_time_stabilizer._FakeTimer._check(b);
      return this[_completeAfter$].compareTo(b[_completeAfter$]);
    }
    toString() {
      if (dart.test(this.isPeriodic)) {
        return dart.str(this[$hashCode]) + ": Periodic: " + dart.str(this[_scheduledDuration$]) + " -> " + dart.str(this[_completeAfter$]);
      } else {
        return dart.str(this[$hashCode]) + ": One-Off: " + dart.str(this[_scheduledDuration$]) + " -> " + dart.str(this[_completeAfter$]);
      }
    }
  };
  (fake_time_stabilizer._FakeTimer.new = function(_complete, _clearPendingStatus, _scheduledDuration, _completeAfter, opts) {
    let isPeriodic = opts && 'isPeriodic' in opts ? opts.isPeriodic : null;
    this[_isActive] = true;
    this[_complete$] = _complete;
    this[_clearPendingStatus$] = _clearPendingStatus;
    this[_scheduledDuration$] = _scheduledDuration;
    this[_completeAfter$] = _completeAfter;
    this.isPeriodic = isPeriodic;
    ;
  }).prototype = fake_time_stabilizer._FakeTimer.prototype;
  dart.addTypeTests(fake_time_stabilizer._FakeTimer);
  fake_time_stabilizer._FakeTimer[dart.implements] = () => [async.Timer, core.Comparable$(fake_time_stabilizer._FakeTimer)];
  dart.setMethodSignature(fake_time_stabilizer._FakeTimer, () => ({
    __proto__: dart.getMethods(fake_time_stabilizer._FakeTimer.__proto__),
    cancel: dart.fnType(dart.void, []),
    complete: dart.fnType(dart.void, [dart.fnType(dart.void, [fake_time_stabilizer._FakeTimer])]),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object])
  }));
  dart.setGetterSignature(fake_time_stabilizer._FakeTimer, () => ({
    __proto__: dart.getGetters(fake_time_stabilizer._FakeTimer.__proto__),
    isActive: core.bool,
    tick: core.int
  }));
  dart.setLibraryUri(fake_time_stabilizer._FakeTimer, "package:angular_test/src/frontend/ng_zone/fake_time_stabilizer.dart");
  dart.setFieldSignature(fake_time_stabilizer._FakeTimer, () => ({
    __proto__: dart.getFields(fake_time_stabilizer._FakeTimer.__proto__),
    [_complete$]: dart.finalFieldType(dart.fnType(dart.void, [fake_time_stabilizer._FakeTimer])),
    [_clearPendingStatus$]: dart.finalFieldType(dart.fnType(dart.void, [fake_time_stabilizer._FakeTimer])),
    isPeriodic: dart.finalFieldType(core.bool),
    [_scheduledDuration$]: dart.finalFieldType(core.Duration),
    [_completeAfter$]: dart.fieldType(core.Duration),
    [_isActive]: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(fake_time_stabilizer._FakeTimer, ['compareTo', 'toString']);
  fake_time_stabilizer.FakeTimeNgZoneStabilizer = class FakeTimeNgZoneStabilizer extends base_stabilizer.BaseNgZoneStabilizer$(fake_time_stabilizer._FakeTimer) {
    static new(timerZone, ngZone) {
      let pendingTimers = new (HeapPriorityQueueOf_FakeTimer()).new();
      let stabilizer = null;
      timerZone.createTimer = dart.fn((self, parent, zone, duration, callback) => {
        let instance = null;
        instance = new fake_time_stabilizer._FakeTimer.new(dart.fn(_ => zone.run(dart.void, callback), _FakeTimerTovoid()), dart.bind(pendingTimers, 'remove'), duration, stabilizer[_lastElapse]['+'](duration), {isPeriodic: false});
        pendingTimers.add(instance);
        return instance;
      }, ZoneAndZoneDelegateAndZone__To_FakeTimer());
      timerZone.createPeriodicTimer = dart.fn((self, parent, zone, duration, callback) => {
        let instance = null;
        instance = new fake_time_stabilizer._FakeTimer.new(dart.fn(timer => zone.run(dart.void, dart.fn(() => callback(timer), VoidTovoid())), _FakeTimerTovoid()), dart.bind(pendingTimers, 'remove'), duration, stabilizer[_lastElapse]['+'](duration), {isPeriodic: true});
        pendingTimers.add(instance);
        return instance;
      }, ZoneAndZoneDelegateAndZone__To_FakeTimer$());
      return stabilizer = new fake_time_stabilizer.FakeTimeNgZoneStabilizer.__(ngZone, pendingTimers);
    }
    elapse(time) {
      return async.async(dart.void, (function* elapse() {
        let waitUntil = this[_lastElapse]['+'](time);
        yield this[_completeTimers](dart.fn(t => t[_completeAfter$]['<='](waitUntil), _FakeTimerTobool()));
        this[_lastElapse] = waitUntil;
      }).bind(this));
    }
    [_completeTimers](shouldComplete) {
      return async.async(dart.void, (function* _completeTimers() {
        let totalIterations = 0;
        while (dart.test(this.pendingTimers.isNotEmpty)) {
          let run = this.pendingTimers.first;
          if (!dart.test(shouldComplete(run))) {
            break;
          }
          if ((totalIterations = totalIterations + 1) > 10) {
            let willNeverComplete = this.pendingTimers.toList()[$where](shouldComplete);
            dart.throw(new core.StateError.new("Timers will never complete: " + dart.str(willNeverComplete[$toList]())));
          }
          this[_lastElapse] = run[_completeAfter$];
          yield this.update(dart.fn(() => run.complete(dart.bind(this.pendingTimers, 'add')), VoidTovoid()));
        }
      }).bind(this));
    }
  };
  (fake_time_stabilizer.FakeTimeNgZoneStabilizer.__ = function(ngZone, pendingTimers) {
    this[_lastElapse] = core.Duration.zero;
    fake_time_stabilizer.FakeTimeNgZoneStabilizer.__proto__.new.call(this, ngZone, pendingTimers);
    ;
  }).prototype = fake_time_stabilizer.FakeTimeNgZoneStabilizer.prototype;
  dart.addTypeTests(fake_time_stabilizer.FakeTimeNgZoneStabilizer);
  dart.setMethodSignature(fake_time_stabilizer.FakeTimeNgZoneStabilizer, () => ({
    __proto__: dart.getMethods(fake_time_stabilizer.FakeTimeNgZoneStabilizer.__proto__),
    elapse: dart.fnType(async.Future$(dart.void), [core.Duration]),
    [_completeTimers]: dart.fnType(async.Future$(dart.void), [dart.fnType(core.bool, [fake_time_stabilizer._FakeTimer])])
  }));
  dart.setLibraryUri(fake_time_stabilizer.FakeTimeNgZoneStabilizer, "package:angular_test/src/frontend/ng_zone/fake_time_stabilizer.dart");
  dart.setFieldSignature(fake_time_stabilizer.FakeTimeNgZoneStabilizer, () => ({
    __proto__: dart.getFields(fake_time_stabilizer.FakeTimeNgZoneStabilizer.__proto__),
    [_lastElapse]: dart.fieldType(core.Duration)
  }));
  dart.defineLazy(fake_time_stabilizer.FakeTimeNgZoneStabilizer, {
    /*fake_time_stabilizer.FakeTimeNgZoneStabilizer._maxIterations*/get _maxIterations() {
      return 10;
    }
  });
  dart.trackLibraries("packages/angular_test/src/frontend", {
    "package:angular_test/src/frontend/ng_zone/fake_time_stabilizer.dart": fake_time_stabilizer,
    "package:angular_test/src/frontend.dart": frontend
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["frontend/ng_zone/fake_time_stabilizer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiIuB;IAAS;;AAGd;IAAC;;AAIf,oBAAI;AACuB,QAAzB,2BAAoB;AACH,QAAjB,kBAAY;;IAEhB;aAEwC;AACtC,qBAAO,oCAAW;AAGO,MAAzB,2BAAoB;AAGL,MAAf,iBAAU;AAEV,oBAAI;AAEkD,QAApD,wBAAiB,AAAe,2BAAE;AAGT,QAAzB,2BAAoB;AACJ,QAAhB,AAAU,UAAA,CAAC;;AAEM,QAAjB,kBAAY;;IAEhB;cAGyB;;AAAM,YAAA,AAAe,iCAAU,AAAE,CAAD;IAAgB;;AAIvE,oBAAI;AACF,cAAoE,UAA3D,mBAAQ,0BAAa,6BAAkB,kBAAK;;AAErD,cAAmE,UAA1D,mBAAQ,yBAAY,6BAAkB,kBAAK;;IAExD;;kDAtDO,WACA,qBACA,oBACA;QACU;IAGZ,kBAAY;IAPV;IACA;IACA;IACA;IACU;;EACf;;;;;;;;;;;;;;;;;;;;;;;;;;;eAtG6C,WAAkB;AAEzD,0BAAgB;AAGG;AAaxB,MAXD,AAAU,SAAD,eAAe,SAAC,MAAM,QAAQ,MAAM,UAAU;AAC1C;AAOV,QAND,WAAW,wCACT,QAAC,KAAM,AAAK,IAAD,gBAAK,QAAQ,wBACV,UAAd,aAAa,aACb,QAAQ,EACR,AAAW,AAAY,UAAb,mBAAe,QAAQ,gBACrB;AAEa,QAA3B,AAAc,aAAD,KAAK,QAAQ;AAC1B,cAAO,SAAQ;;AAchB,MAXD,AAAU,SAAD,uBAAuB,SAAC,MAAM,QAAQ,MAAM,UAAU;AAClD;AAOV,QAND,WAAW,wCACT,QAAC,SAAU,AAAK,IAAD,gBAAK,cAAM,AAAQ,QAAA,CAAC,KAAK,wCAC1B,UAAd,aAAa,aACb,QAAQ,EACR,AAAW,AAAY,UAAb,mBAAe,QAAQ,gBACrB;AAEa,QAA3B,AAAc,aAAD,KAAK,QAAQ;AAC1B,cAAO,SAAQ;;AAGjB,YAAO,cAAsC,qDAC3C,MAAM,EACN,aAAa;IAEjB;WAkB6B;AAAV;AACX,wBAAY,AAAY,uBAAE,IAAI;AACuB,QAA3D,MAAM,sBAAgB,QAAC,KAAM,AAAE,AAAe,CAAhB,wBAAmB,SAAS;AACnC,QAAvB,oBAAc,SAAS;MACzB;;sBAIuD;AAA3B;AAEtB,8BAAkB;AACtB,yBAAO,AAAc;AAEb,oBAAM,AAAc;AAC1B,yBAAK,AAAc,cAAA,CAAC,GAAG;AACrB;;AAGF,cAAsB,CAAhB,kBAAF,AAAE,eAAe,GAAjB;AACI,oCAAoB,AAAc,AAAS,oCAAM,cAAc;AAGpE,YAFD,WAAU,wBACR,AAA2D,0CAA5B,AAAkB,iBAAD;;AAIpB,UAAhC,oBAAc,AAAI,GAAD;AACkC,UAAnD,MAAM,YAAO,cAAM,AAAI,GAAD,UAAwB,UAAd;;MAEpC;;;+DAxCS,QACmB;IAIxB,oBAAuB;AAHvB,2EAAM,MAAM,EAAE,aAAa;;EAAC;;;;;;;;;;;;;MALnB,4DAAc","file":"frontend.ddc.js"}');
  // Exports:
  return {
    src__frontend__ng_zone__fake_time_stabilizer: fake_time_stabilizer,
    src__frontend: frontend
  };
});

//# sourceMappingURL=frontend.ddc.js.map
