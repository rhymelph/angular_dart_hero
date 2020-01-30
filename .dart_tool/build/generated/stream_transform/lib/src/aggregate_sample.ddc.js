define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const where = Object.create(dart.library);
  const from_handlers = Object.create(dart.library);
  const aggregate_sample = Object.create(dart.library);
  const rate_limit = Object.create(dart.library);
  const combine_latest = Object.create(dart.library);
  const take_until = Object.create(dart.library);
  const merge = Object.create(dart.library);
  const $switch = Object.create(dart.library);
  const scan = Object.create(dart.library);
  const concatenate = Object.create(dart.library);
  const async_map = Object.create(dart.library);
  const stream_transform = Object.create(dart.library);
  const tap = Object.create(dart.library);
  const $add = dartx.add;
  const $isEmpty = dartx.isEmpty;
  const $map = dartx.map;
  const $length = dartx.length;
  const $_set = dartx._set;
  const $contains = dartx.contains;
  const $remove = dartx.remove;
  let StreamOfObject = () => (StreamOfObject = dart.constFn(async.Stream$(core.Object)))();
  let ObjectToNull = () => (ObjectToNull = dart.constFn(dart.fnType(core.Null, [core.Object])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidToStreamOfS = () => (VoidToStreamOfS = dart.constFn(dart.gFnType(S => {
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    return [StreamOfS(), []];
  })))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let FutureOrOfbool = () => (FutureOrOfbool = dart.constFn(async.FutureOr$(core.bool)))();
  let SAndEventSinkOfTTovoid = () => (SAndEventSinkOfTTovoid = dart.constFn(dart.gFnType((S, T) => [dart.void, [S, async.EventSink$(T)]])))();
  let ObjectAndStackTraceAndEventSinkOfTTovoid = () => (ObjectAndStackTraceAndEventSinkOfTTovoid = dart.constFn(dart.gFnType(T => [dart.void, [core.Object, core.StackTrace, async.EventSink$(T)]])))();
  let EventSinkOfTTovoid = () => (EventSinkOfTTovoid = dart.constFn(dart.gFnType(T => [dart.void, [async.EventSink$(T)]])))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let StreamSubscriptionOfvoidToFuture = () => (StreamSubscriptionOfvoidToFuture = dart.constFn(dart.fnType(async.Future, [StreamSubscriptionOfvoid()])))();
  let FutureOfList = () => (FutureOfList = dart.constFn(async.Future$(core.List)))();
  let VoidToFutureOfList = () => (VoidToFutureOfList = dart.constFn(dart.fnType(FutureOfList(), [])))();
  let TAnddynamicToT = () => (TAnddynamicToT = dart.constFn(dart.gFnType(T => [T, [T, dart.dynamic]])))();
  let TAndListOfTToListOfT = () => (TAndListOfTToListOfT = dart.constFn(dart.gFnType(T => [core.List$(T), [T, core.List$(T)]])))();
  let TAndListOfTToListOfT$ = () => (TAndListOfTToListOfT$ = dart.constFn(dart.gFnType(T => [core.List$(T), [T, core.List$(T)]])))();
  let StreamOfvoid = () => (StreamOfvoid = dart.constFn(async.Stream$(dart.void)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let JSArrayOfFuture = () => (JSArrayOfFuture = dart.constFn(_interceptors.JSArray$(async.Future)))();
  let LinkedHashSetOfint = () => (LinkedHashSetOfint = dart.constFn(collection.LinkedHashSet$(core.int)))();
  let voidToNull = () => (voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let JSArrayOfStreamSubscription = () => (JSArrayOfStreamSubscription = dart.constFn(_interceptors.JSArray$(async.StreamSubscription)))();
  let StreamSubscriptionToFuture = () => (StreamSubscriptionToFuture = dart.constFn(dart.fnType(async.Future, [async.StreamSubscription])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let StreamControllerOfvoid = () => (StreamControllerOfvoid = dart.constFn(async.StreamController$(dart.void)))();
  let TAnddynamicToT$ = () => (TAnddynamicToT$ = dart.constFn(dart.gFnType(T => [T, [T, dart.dynamic]])))();
  let voidTovoid = () => (voidTovoid = dart.constFn(dart.fnType(dart.void, [dart.void])))();
  let ObjectAndStackTraceTovoid = () => (ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(from_handlers._StreamTransformer._defaultHandleData, SAndEventSinkOfTTovoid());
    },
    get C1() {
      return C1 = dart.fn(from_handlers._StreamTransformer._defaultHandleError, ObjectAndStackTraceAndEventSinkOfTTovoid());
    },
    get C2() {
      return C2 = dart.fn(from_handlers._StreamTransformer._defaultHandleDone, EventSinkOfTTovoid());
    },
    get C3() {
      return C3 = dart.fn(rate_limit._dropPrevious, TAnddynamicToT());
    },
    get C4() {
      return C4 = dart.fn(rate_limit._collectToList, TAndListOfTToListOfT());
    },
    get C5() {
      return C5 = dart.fn(rate_limit._collect, TAndListOfTToListOfT$());
    },
    get C6() {
      return C6 = dart.fn(async_map._dropPrevious, TAnddynamicToT$());
    }
  });
  const _is__WhereType_default = Symbol('_is__WhereType_default');
  where._WhereType$ = dart.generic(R => {
    let StreamControllerOfR = () => (StreamControllerOfR = dart.constFn(async.StreamController$(R)))();
    class _WhereType extends async.StreamTransformerBase$(core.Null, R) {
      bind(source) {
        StreamOfObject()._check(source);
        let controller = dart.test(source.isBroadcast) ? StreamControllerOfR().broadcast({sync: true}) : StreamControllerOfR().new({sync: true});
        let subscription = null;
        controller.onListen = dart.fn(() => {
          let t0;
          if (!(subscription == null)) dart.assertFailed(null, "org-dartlang-app:///packages/stream_transform/src/where.dart", 67, 14, "subscription == null");
          subscription = source.listen(dart.fn(value => {
            if (R.is(value)) controller.add(value);
          }, ObjectToNull()), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
              subscription = null;
              controller.close();
            }, VoidToNull())});
          if (!dart.test(source.isBroadcast)) {
            t0 = controller;
            t0.onPause = dart.bind(subscription, 'pause');
            t0.onResume = dart.bind(subscription, 'resume');
            t0;
          }
          controller.onCancel = dart.fn(() => {
            let t0;
            t0 = subscription;
            t0 == null ? null : t0.cancel();
            subscription = null;
          }, VoidToNull());
        }, VoidToNull());
        return controller.stream;
      }
    }
    (_WhereType.new = function() {
      _WhereType.__proto__.new.call(this);
      ;
    }).prototype = _WhereType.prototype;
    dart.addTypeTests(_WhereType);
    _WhereType.prototype[_is__WhereType_default] = true;
    dart.setMethodSignature(_WhereType, () => ({
      __proto__: dart.getMethods(_WhereType.__proto__),
      bind: dart.fnType(async.Stream$(R), [core.Object])
    }));
    dart.setLibraryUri(_WhereType, "package:stream_transform/src/where.dart");
    return _WhereType;
  });
  where._WhereType = where._WhereType$();
  dart.addTypeTests(where._WhereType, _is__WhereType_default);
  where['Where|whereType'] = function Where$124whereType(T, S, $this) {
    return $this.transform(S, new (where._WhereType$(S)).new());
  };
  where['Where|get#whereType'] = function Where$124get$35whereType(T, $this) {
    return dart.fn(S => where['Where|whereType'](T, S, $this), VoidToStreamOfS());
  };
  where['Where|asyncWhere'] = function Where$124asyncWhere(T, $this, test) {
    let valuesWaiting = 0;
    let sourceDone = false;
    return $this.transform(T, from_handlers.fromHandlers(T, T, {handleData: dart.fn((element, sink) => {
        valuesWaiting = valuesWaiting + 1;
        dart.fn(() => async.async(core.Null, function*() {
          try {
            if (dart.test(yield test(element))) sink.add(element);
          } catch (e$) {
            let e = dart.getThrown(e$);
            let st = dart.stackTrace(e$);
            sink.addError(e, st);
          }
          valuesWaiting = valuesWaiting - 1;
          if (valuesWaiting <= 0 && sourceDone) sink.close();
        }), VoidToFutureOfNull())();
      }, dart.fnType(core.Null, [T, async.EventSink$(T)])), handleDone: dart.fn(sink => {
        sourceDone = true;
        if (valuesWaiting <= 0) sink.close();
      }, dart.fnType(core.Null, [async.EventSink$(T)]))}));
  };
  where['Where|get#asyncWhere'] = function Where$124get$35asyncWhere(T, $this) {
    return dart.fn(test => where['Where|asyncWhere'](T, $this, test), dart.fnType(async.Stream$(T), [dart.fnType(FutureOrOfbool(), [T])]));
  };
  const _handleData = dart.privateName(from_handlers, "_handleData");
  let C0;
  const _handleError = dart.privateName(from_handlers, "_handleError");
  let C1;
  const _handleDone = dart.privateName(from_handlers, "_handleDone");
  let C2;
  const _is__StreamTransformer_default = Symbol('_is__StreamTransformer_default');
  from_handlers._StreamTransformer$ = dart.generic((S, T) => {
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    let STovoid = () => (STovoid = dart.constFn(dart.fnType(dart.void, [S])))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class _StreamTransformer extends async.StreamTransformerBase$(S, T) {
      static _defaultHandleData(S, T, value, sink) {
        sink.add(T.as(value));
      }
      static _defaultHandleError(T, error, stackTrace, sink) {
        sink.addError(error, stackTrace);
      }
      static _defaultHandleDone(T, sink) {
        sink.close();
      }
      bind(values) {
        StreamOfS()._check(values);
        let controller = dart.test(values.isBroadcast) ? StreamControllerOfT().broadcast({sync: true}) : StreamControllerOfT().new({sync: true});
        let subscription = null;
        controller.onListen = dart.fn(() => {
          let t5;
          if (!(subscription == null)) dart.assertFailed(null, "org-dartlang-app:///packages/stream_transform/src/from_handlers.dart", 52, 14, "subscription == null");
          let valuesDone = false;
          subscription = values.listen(dart.fn(value => this[_handleData](value, controller), STovoid()), {onError: dart.fn((error, stackTrace) => {
              this[_handleError](error, stackTrace, controller);
            }, dynamicAndStackTraceToNull()), onDone: dart.fn(() => {
              valuesDone = true;
              this[_handleDone](controller);
            }, VoidToNull())});
          if (!dart.test(values.isBroadcast)) {
            t5 = controller;
            t5.onPause = dart.bind(subscription, 'pause');
            t5.onResume = dart.bind(subscription, 'resume');
            t5;
          }
          controller.onCancel = dart.fn(() => {
            let toCancel = subscription;
            subscription = null;
            if (!valuesDone) return toCancel.cancel();
            return null;
          }, VoidToFuture());
        }, VoidToNull());
        return controller.stream;
      }
    }
    (_StreamTransformer.new = function(opts) {
      let t5, t5$, t5$0;
      let handleData = opts && 'handleData' in opts ? opts.handleData : null;
      let handleError = opts && 'handleError' in opts ? opts.handleError : null;
      let handleDone = opts && 'handleDone' in opts ? opts.handleDone : null;
      this[_handleData] = (t5 = handleData, t5 == null ? dart.gbind(C0 || CT.C0, S, T) : t5);
      this[_handleError] = (t5$ = handleError, t5$ == null ? dart.gbind(C1 || CT.C1, T) : t5$);
      this[_handleDone] = (t5$0 = handleDone, t5$0 == null ? dart.gbind(C2 || CT.C2, T) : t5$0);
      _StreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = _StreamTransformer.prototype;
    dart.addTypeTests(_StreamTransformer);
    _StreamTransformer.prototype[_is__StreamTransformer_default] = true;
    dart.setMethodSignature(_StreamTransformer, () => ({
      __proto__: dart.getMethods(_StreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(_StreamTransformer, "package:stream_transform/src/from_handlers.dart");
    dart.setFieldSignature(_StreamTransformer, () => ({
      __proto__: dart.getFields(_StreamTransformer.__proto__),
      [_handleData]: dart.finalFieldType(dart.fnType(dart.void, [S, async.EventSink$(T)])),
      [_handleDone]: dart.finalFieldType(dart.fnType(dart.void, [async.EventSink$(T)])),
      [_handleError]: dart.finalFieldType(dart.fnType(dart.void, [core.Object, core.StackTrace, async.EventSink$(T)]))
    }));
    return _StreamTransformer;
  });
  from_handlers._StreamTransformer = from_handlers._StreamTransformer$();
  dart.addTypeTests(from_handlers._StreamTransformer, _is__StreamTransformer_default);
  from_handlers.fromHandlers = function fromHandlers(S, T, opts) {
    let handleData = opts && 'handleData' in opts ? opts.handleData : null;
    let handleError = opts && 'handleError' in opts ? opts.handleError : null;
    let handleDone = opts && 'handleDone' in opts ? opts.handleDone : null;
    return new (from_handlers._StreamTransformer$(S, T)).new({handleData: handleData, handleError: handleError, handleDone: handleDone});
  };
  const _trigger$ = dart.privateName(aggregate_sample, "_trigger");
  const _aggregate$ = dart.privateName(aggregate_sample, "_aggregate");
  const _is_AggregateSample_default = Symbol('_is_AggregateSample_default');
  aggregate_sample.AggregateSample$ = dart.generic((S, T) => {
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    let SToNull = () => (SToNull = dart.constFn(dart.fnType(core.Null, [S])))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class AggregateSample extends async.StreamTransformerBase$(S, T) {
      bind(values) {
        StreamOfS()._check(values);
        let controller = dart.test(values.isBroadcast) ? StreamControllerOfT().broadcast({sync: true}) : StreamControllerOfT().new({sync: true});
        let currentResults = null;
        let waitingForTrigger = true;
        let isTriggerDone = false;
        let isValueDone = false;
        let valueSub = null;
        let triggerSub = null;
        function emit() {
          controller.add(currentResults);
          currentResults = null;
          waitingForTrigger = true;
        }
        dart.fn(emit, VoidToNull());
        const onValue = value => {
          currentResults = this[_aggregate$](value, currentResults);
          if (!waitingForTrigger) emit();
          if (isTriggerDone) {
            valueSub.cancel();
            controller.close();
          }
        };
        dart.fn(onValue, SToNull());
        function onValuesDone() {
          let t5;
          isValueDone = true;
          if (currentResults == null) {
            t5 = triggerSub;
            t5 == null ? null : t5.cancel();
            controller.close();
          }
        }
        dart.fn(onValuesDone, VoidToNull());
        function onTrigger(_) {
          waitingForTrigger = false;
          if (currentResults != null) emit();
          if (isValueDone) {
            triggerSub.cancel();
            controller.close();
          }
        }
        dart.fn(onTrigger, dynamicToNull());
        function onTriggerDone() {
          let t5;
          isTriggerDone = true;
          if (waitingForTrigger) {
            t5 = valueSub;
            t5 == null ? null : t5.cancel();
            controller.close();
          }
        }
        dart.fn(onTriggerDone, VoidToNull());
        controller.onListen = dart.fn(() => {
          let t5;
          if (!(valueSub == null)) dart.assertFailed(null, "org-dartlang-app:///packages/stream_transform/src/aggregate_sample.dart", 80, 14, "valueSub == null");
          valueSub = values.listen(onValue, {onError: dart.bind(controller, 'addError'), onDone: onValuesDone});
          if (triggerSub != null) {
            if (dart.test(triggerSub.isPaused)) triggerSub.resume();
          } else {
            triggerSub = this[_trigger$].listen(onTrigger, {onError: dart.bind(controller, 'addError'), onDone: onTriggerDone});
          }
          if (!dart.test(values.isBroadcast)) {
            t5 = controller;
            t5.onPause = dart.fn(() => {
              let t6, t6$;
              t6 = valueSub;
              t6 == null ? null : t6.pause();
              t6$ = triggerSub;
              t6$ == null ? null : t6$.pause();
            }, VoidToNull());
            t5.onResume = dart.fn(() => {
              let t6, t6$;
              t6 = valueSub;
              t6 == null ? null : t6.resume();
              t6$ = triggerSub;
              t6$ == null ? null : t6$.resume();
            }, VoidToNull());
            t5;
          }
          controller.onCancel = dart.fn(() => {
            let toCancel = JSArrayOfStreamSubscriptionOfvoid().of([]);
            if (!isValueDone) toCancel[$add](valueSub);
            valueSub = null;
            if (dart.test(this[_trigger$].isBroadcast) || !dart.test(values.isBroadcast)) {
              if (!isTriggerDone) toCancel[$add](triggerSub);
              triggerSub = null;
            } else {
              triggerSub.pause();
            }
            if (dart.test(toCancel[$isEmpty])) return null;
            return async.Future.wait(dart.dynamic, toCancel[$map](async.Future, dart.fn(s => s.cancel(), StreamSubscriptionOfvoidToFuture())));
          }, VoidToFutureOfList());
        }, VoidToNull());
        return controller.stream;
      }
    }
    (AggregateSample.new = function(_trigger, _aggregate) {
      this[_trigger$] = _trigger;
      this[_aggregate$] = _aggregate;
      AggregateSample.__proto__.new.call(this);
      ;
    }).prototype = AggregateSample.prototype;
    dart.addTypeTests(AggregateSample);
    AggregateSample.prototype[_is_AggregateSample_default] = true;
    dart.setMethodSignature(AggregateSample, () => ({
      __proto__: dart.getMethods(AggregateSample.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(AggregateSample, "package:stream_transform/src/aggregate_sample.dart");
    dart.setFieldSignature(AggregateSample, () => ({
      __proto__: dart.getFields(AggregateSample.__proto__),
      [_trigger$]: dart.finalFieldType(async.Stream$(dart.void)),
      [_aggregate$]: dart.finalFieldType(dart.fnType(T, [S, T]))
    }));
    return AggregateSample;
  });
  aggregate_sample.AggregateSample = aggregate_sample.AggregateSample$();
  dart.addTypeTests(aggregate_sample.AggregateSample, _is_AggregateSample_default);
  let C3;
  let C4;
  let C5;
  rate_limit['RateLimit|debounce'] = function RateLimit$124debounce(T, $this, duration) {
    return $this.transform(T, rate_limit._debounceAggregate(T, T, duration, dart.gbind(C3 || CT.C3, T)));
  };
  rate_limit['RateLimit|get#debounce'] = function RateLimit$124get$35debounce(T, $this) {
    return dart.fn(duration => rate_limit['RateLimit|debounce'](T, $this, duration), dart.fnType(async.Stream$(T), [core.Duration]));
  };
  rate_limit['RateLimit|debounceBuffer'] = function RateLimit$124debounceBuffer(T, $this, duration) {
    return $this.transform(core.List$(T), rate_limit._debounceAggregate(T, core.List$(T), duration, dart.gbind(C4 || CT.C4, T)));
  };
  rate_limit['RateLimit|get#debounceBuffer'] = function RateLimit$124get$35debounceBuffer(T, $this) {
    return dart.fn(duration => rate_limit['RateLimit|debounceBuffer'](T, $this, duration), dart.fnType(async.Stream$(core.List$(T)), [core.Duration]));
  };
  rate_limit['RateLimit|throttle'] = function RateLimit$124throttle(T, $this, duration) {
    let timer = null;
    return $this.transform(T, from_handlers.fromHandlers(T, T, {handleData: dart.fn((data, sink) => {
        if (timer == null) {
          sink.add(data);
          timer = async.Timer.new(duration, dart.fn(() => {
            timer = null;
          }, VoidToNull()));
        }
      }, dart.fnType(core.Null, [T, async.EventSink$(T)]))}));
  };
  rate_limit['RateLimit|get#throttle'] = function RateLimit$124get$35throttle(T, $this) {
    return dart.fn(duration => rate_limit['RateLimit|throttle'](T, $this, duration), dart.fnType(async.Stream$(T), [core.Duration]));
  };
  rate_limit['RateLimit|audit'] = function RateLimit$124audit(T, $this, duration) {
    let timer = null;
    let shouldClose = false;
    let recentData = null;
    return $this.transform(T, from_handlers.fromHandlers(T, T, {handleData: dart.fn((data, sink) => {
        recentData = data;
        timer == null ? timer = async.Timer.new(duration, dart.fn(() => {
          sink.add(recentData);
          timer = null;
          if (shouldClose) {
            sink.close();
          }
        }, VoidToNull())) : null;
      }, dart.fnType(core.Null, [T, async.EventSink$(T)])), handleDone: dart.fn(sink => {
        if (timer != null) {
          shouldClose = true;
        } else {
          sink.close();
        }
      }, dart.fnType(core.Null, [async.EventSink$(T)]))}));
  };
  rate_limit['RateLimit|get#audit'] = function RateLimit$124get$35audit(T, $this) {
    return dart.fn(duration => rate_limit['RateLimit|audit'](T, $this, duration), dart.fnType(async.Stream$(T), [core.Duration]));
  };
  rate_limit['RateLimit|buffer'] = function RateLimit$124buffer(T, $this, trigger) {
    return $this.transform(core.List$(T), new (aggregate_sample.AggregateSample$(T, core.List$(T))).new(trigger, dart.gbind(C5 || CT.C5, T)));
  };
  rate_limit['RateLimit|get#buffer'] = function RateLimit$124get$35buffer(T, $this) {
    return dart.fn(trigger => rate_limit['RateLimit|buffer'](T, $this, trigger), dart.fnType(async.Stream$(core.List$(T)), [StreamOfvoid()]));
  };
  rate_limit._collectToList = function _collectToList(T, element, soFar) {
    soFar == null ? soFar = _interceptors.JSArray$(T).of([]) : null;
    soFar[$add](element);
    return soFar;
  };
  rate_limit._dropPrevious = function _dropPrevious(T, element, _) {
    return element;
  };
  rate_limit._debounceAggregate = function _debounceAggregate(T, R, duration, collect) {
    let timer = null;
    let soFar = null;
    let shouldClose = false;
    return from_handlers.fromHandlers(T, R, {handleData: dart.fn((value, sink) => {
        let t15;
        t15 = timer;
        t15 == null ? null : t15.cancel();
        timer = async.Timer.new(duration, dart.fn(() => {
          sink.add(soFar);
          if (shouldClose) {
            sink.close();
          }
          soFar = null;
          timer = null;
        }, VoidToNull()));
        soFar = collect(value, soFar);
      }, dart.fnType(core.Null, [T, async.EventSink$(R)])), handleDone: dart.fn(sink => {
        if (soFar != null) {
          shouldClose = true;
        } else {
          sink.close();
        }
      }, dart.fnType(core.Null, [async.EventSink$(R)]))});
  };
  rate_limit._collect = function _collect(T, event, soFar) {
    let t15, t15$;
    t15$ = (t15 = soFar, t15 == null ? _interceptors.JSArray$(T).of([]) : t15);
    t15$[$add](event);
    return t15$;
  };
  const _other$ = dart.privateName(combine_latest, "_other");
  const _combine$ = dart.privateName(combine_latest, "_combine");
  const _is__CombineLatest_default = Symbol('_is__CombineLatest_default');
  combine_latest._CombineLatest$ = dart.generic((S, T, R) => {
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    let SToNull = () => (SToNull = dart.constFn(dart.fnType(core.Null, [S])))();
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    let StreamControllerOfR = () => (StreamControllerOfR = dart.constFn(async.StreamController$(R)))();
    let FutureOfR = () => (FutureOfR = dart.constFn(async.Future$(R)))();
    class _CombineLatest extends async.StreamTransformerBase$(S, R) {
      bind(source) {
        StreamOfS()._check(source);
        let controller = dart.test(source.isBroadcast) ? StreamControllerOfR().broadcast({sync: true}) : StreamControllerOfR().new({sync: true});
        let other = dart.test(source.isBroadcast) && !dart.test(this[_other$].isBroadcast) ? this[_other$].asBroadcastStream() : this[_other$];
        let sourceSubscription = null;
        let otherSubscription = null;
        let sourceDone = false;
        let otherDone = false;
        let latestSource = null;
        let latestOther = null;
        let sourceStarted = false;
        let otherStarted = false;
        const emitCombined = () => {
          if (!sourceStarted || !otherStarted) return;
          let result = null;
          try {
            result = this[_combine$](latestSource, latestOther);
          } catch (e$) {
            let e = dart.getThrown(e$);
            let s = dart.stackTrace(e$);
            controller.addError(e, s);
            return;
          }
          if (FutureOfR().is(result)) {
            sourceSubscription.pause();
            otherSubscription.pause();
            result.then(dart.void, dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError')}).whenComplete(dart.fn(() => {
              sourceSubscription.resume();
              otherSubscription.resume();
            }, VoidToNull()));
          } else {
            controller.add(R.as(result));
          }
        };
        dart.fn(emitCombined, VoidTovoid());
        controller.onListen = dart.fn(() => {
          let t16;
          if (!(sourceSubscription == null)) dart.assertFailed(null, "org-dartlang-app:///packages/stream_transform/src/combine_latest.dart", 131, 14, "sourceSubscription == null");
          sourceSubscription = source.listen(dart.fn(s => {
            sourceStarted = true;
            latestSource = s;
            emitCombined();
          }, SToNull()), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
              sourceDone = true;
              if (otherDone) {
                controller.close();
              } else if (!sourceStarted) {
                otherSubscription.cancel();
                controller.close();
              }
            }, VoidToNull())});
          otherSubscription = other.listen(dart.fn(o => {
            otherStarted = true;
            latestOther = o;
            emitCombined();
          }, TToNull()), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
              otherDone = true;
              if (sourceDone) {
                controller.close();
              } else if (!otherStarted) {
                sourceSubscription.cancel();
                controller.close();
              }
            }, VoidToNull())});
          if (!dart.test(source.isBroadcast)) {
            t16 = controller;
            t16.onPause = dart.fn(() => {
              sourceSubscription.pause();
              otherSubscription.pause();
            }, VoidToNull());
            t16.onResume = dart.fn(() => {
              sourceSubscription.resume();
              otherSubscription.resume();
            }, VoidToNull());
            t16;
          }
          controller.onCancel = dart.fn(() => {
            let cancelSource = sourceSubscription.cancel();
            let cancelOther = otherSubscription.cancel();
            sourceSubscription = null;
            otherSubscription = null;
            return async.Future.wait(dart.dynamic, JSArrayOfFuture().of([cancelSource, cancelOther]));
          }, VoidToFutureOfList());
        }, VoidToNull());
        return controller.stream;
      }
    }
    (_CombineLatest.new = function(_other, _combine) {
      this[_other$] = _other;
      this[_combine$] = _combine;
      _CombineLatest.__proto__.new.call(this);
      ;
    }).prototype = _CombineLatest.prototype;
    dart.addTypeTests(_CombineLatest);
    _CombineLatest.prototype[_is__CombineLatest_default] = true;
    dart.setMethodSignature(_CombineLatest, () => ({
      __proto__: dart.getMethods(_CombineLatest.__proto__),
      bind: dart.fnType(async.Stream$(R), [core.Object])
    }));
    dart.setLibraryUri(_CombineLatest, "package:stream_transform/src/combine_latest.dart");
    dart.setFieldSignature(_CombineLatest, () => ({
      __proto__: dart.getFields(_CombineLatest.__proto__),
      [_other$]: dart.finalFieldType(async.Stream$(T)),
      [_combine$]: dart.finalFieldType(dart.fnType(async.FutureOr$(R), [S, T]))
    }));
    return _CombineLatest;
  });
  combine_latest._CombineLatest = combine_latest._CombineLatest$();
  dart.addTypeTests(combine_latest._CombineLatest, _is__CombineLatest_default);
  const _others$ = dart.privateName(combine_latest, "_others");
  const _is__CombineLatestAll_default = Symbol('_is__CombineLatestAll_default');
  combine_latest._CombineLatestAll$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let StreamControllerOfListOfT = () => (StreamControllerOfListOfT = dart.constFn(async.StreamController$(ListOfT())))();
    let JSArrayOfStreamOfT = () => (JSArrayOfStreamOfT = dart.constFn(_interceptors.JSArray$(StreamOfT())))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let JSArrayOfStreamSubscriptionOfT = () => (JSArrayOfStreamSubscriptionOfT = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfT())))();
    let intAndTTovoid = () => (intAndTTovoid = dart.constFn(dart.fnType(dart.void, [core.int, T])))();
    let TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    let StreamSubscriptionOfTToFuture = () => (StreamSubscriptionOfTToFuture = dart.constFn(dart.fnType(async.Future, [StreamSubscriptionOfT()])))();
    class _CombineLatestAll extends async.StreamTransformerBase$(T, core.List$(T)) {
      bind(first) {
        StreamOfT()._check(first);
        let controller = dart.test(first.isBroadcast) ? StreamControllerOfListOfT().broadcast({sync: true}) : StreamControllerOfListOfT().new({sync: true});
        let allStreams = (() => {
          let t16 = JSArrayOfStreamOfT().of([]);
          t16[$add](first);
          for (let other of this[_others$])
            t16[$add](!dart.test(first.isBroadcast) || dart.test(other.isBroadcast) ? other : other.asBroadcastStream());
          return t16;
        })();
        controller.onListen = dart.fn(() => {
          let t17;
          let subscriptions = JSArrayOfStreamSubscriptionOfT().of([]);
          let latestData = ListOfT().new(allStreams[$length]);
          let hasEmitted = LinkedHashSetOfint().new();
          function handleData(index, data) {
            latestData[$_set](index, data);
            hasEmitted.add(index);
            if (hasEmitted[$length] == allStreams[$length]) {
              controller.add(ListOfT().from(latestData));
            }
          }
          dart.fn(handleData, intAndTTovoid());
          let streamId = 0;
          for (let stream of allStreams) {
            let index = streamId;
            let subscription = stream.listen(dart.fn(data => handleData(index, data), TTovoid()), {onError: dart.bind(controller, 'addError')});
            subscription.onDone(dart.fn(() => {
              if (!dart.test(subscriptions[$contains](subscription))) dart.assertFailed(null, "org-dartlang-app:///packages/stream_transform/src/combine_latest.dart", 228, 18, "subscriptions.contains(subscription)");
              subscriptions[$remove](subscription);
              if (dart.test(subscriptions[$isEmpty]) || !dart.test(hasEmitted.contains(index))) {
                controller.close();
              }
            }, VoidToNull()));
            subscriptions[$add](subscription);
            streamId = streamId + 1;
          }
          if (!dart.test(first.isBroadcast)) {
            t17 = controller;
            t17.onPause = dart.fn(() => {
              for (let subscription of subscriptions) {
                subscription.pause();
              }
            }, VoidToNull());
            t17.onResume = dart.fn(() => {
              for (let subscription of subscriptions) {
                subscription.resume();
              }
            }, VoidToNull());
            t17;
          }
          controller.onCancel = dart.fn(() => {
            if (dart.test(subscriptions[$isEmpty])) return null;
            return async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(s => s.cancel(), StreamSubscriptionOfTToFuture())));
          }, VoidToFutureOfList());
        }, VoidToNull());
        return controller.stream;
      }
    }
    (_CombineLatestAll.new = function(_others) {
      this[_others$] = _others;
      _CombineLatestAll.__proto__.new.call(this);
      ;
    }).prototype = _CombineLatestAll.prototype;
    dart.addTypeTests(_CombineLatestAll);
    _CombineLatestAll.prototype[_is__CombineLatestAll_default] = true;
    dart.setMethodSignature(_CombineLatestAll, () => ({
      __proto__: dart.getMethods(_CombineLatestAll.__proto__),
      bind: dart.fnType(async.Stream$(core.List$(T)), [core.Object])
    }));
    dart.setLibraryUri(_CombineLatestAll, "package:stream_transform/src/combine_latest.dart");
    dart.setFieldSignature(_CombineLatestAll, () => ({
      __proto__: dart.getFields(_CombineLatestAll.__proto__),
      [_others$]: dart.finalFieldType(core.Iterable$(async.Stream$(T)))
    }));
    return _CombineLatestAll;
  });
  combine_latest._CombineLatestAll = combine_latest._CombineLatestAll$();
  dart.addTypeTests(combine_latest._CombineLatestAll, _is__CombineLatestAll_default);
  combine_latest['CombineLatest|combineLatest'] = function CombineLatest$124combineLatest(T, T2, S, $this, other, combine) {
    return $this.transform(S, new (combine_latest._CombineLatest$(T, T2, S)).new(other, combine));
  };
  combine_latest['CombineLatest|get#combineLatest'] = function CombineLatest$124get$35combineLatest(T, $this) {
    return dart.fn((T2, S, other, combine) => combine_latest['CombineLatest|combineLatest'](T, T2, S, $this, other, combine), dart.gFnType((T2, S) => {
      let StreamOfT2 = () => (StreamOfT2 = dart.constFn(async.Stream$(T2)))();
      let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
      let FutureOrOfS = () => (FutureOrOfS = dart.constFn(async.FutureOr$(S)))();
      return [StreamOfS(), [StreamOfT2(), dart.fnType(FutureOrOfS(), [T, T2])]];
    }));
  };
  combine_latest['CombineLatest|combineLatestAll'] = function CombineLatest$124combineLatestAll(T, $this, others) {
    return $this.transform(core.List$(T), new (combine_latest._CombineLatestAll$(T)).new(others));
  };
  combine_latest['CombineLatest|get#combineLatestAll'] = function CombineLatest$124get$35combineLatestAll(T, $this) {
    return dart.fn(others => combine_latest['CombineLatest|combineLatestAll'](T, $this, others), dart.fnType(async.Stream$(core.List$(T)), [core.Iterable$(async.Stream$(T))]));
  };
  const _trigger$0 = dart.privateName(take_until, "_trigger");
  const _is__TakeUntil_default = Symbol('_is__TakeUntil_default');
  take_until._TakeUntil$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class _TakeUntil extends async.StreamTransformerBase$(T, T) {
      bind(values) {
        StreamOfT()._check(values);
        let controller = dart.test(values.isBroadcast) ? StreamControllerOfT().broadcast({sync: true}) : StreamControllerOfT().new({sync: true});
        let subscription = null;
        let isDone = false;
        this[_trigger$0].then(core.Null, dart.fn(_ => {
          let t21;
          if (isDone) return;
          isDone = true;
          t21 = subscription;
          t21 == null ? null : t21.cancel();
          controller.close();
        }, voidToNull()));
        controller.onListen = dart.fn(() => {
          let t21;
          if (isDone) return;
          subscription = values.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
              if (isDone) return;
              isDone = true;
              controller.close();
            }, VoidToNull())});
          if (!dart.test(values.isBroadcast)) {
            t21 = controller;
            t21.onPause = dart.bind(subscription, 'pause');
            t21.onResume = dart.bind(subscription, 'resume');
            t21;
          }
          controller.onCancel = dart.fn(() => {
            if (isDone) return null;
            let toCancel = subscription;
            subscription = null;
            return toCancel.cancel();
          }, VoidToFuture());
        }, VoidToNull());
        return controller.stream;
      }
    }
    (_TakeUntil.new = function(_trigger) {
      this[_trigger$0] = _trigger;
      _TakeUntil.__proto__.new.call(this);
      ;
    }).prototype = _TakeUntil.prototype;
    dart.addTypeTests(_TakeUntil);
    _TakeUntil.prototype[_is__TakeUntil_default] = true;
    dart.setMethodSignature(_TakeUntil, () => ({
      __proto__: dart.getMethods(_TakeUntil.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(_TakeUntil, "package:stream_transform/src/take_until.dart");
    dart.setFieldSignature(_TakeUntil, () => ({
      __proto__: dart.getFields(_TakeUntil.__proto__),
      [_trigger$0]: dart.finalFieldType(async.Future$(dart.void))
    }));
    return _TakeUntil;
  });
  take_until._TakeUntil = take_until._TakeUntil$();
  dart.addTypeTests(take_until._TakeUntil, _is__TakeUntil_default);
  take_until['TakeUntil|takeUntil'] = function TakeUntil$124takeUntil(T, $this, trigger) {
    return $this.transform(T, new (take_until._TakeUntil$(T)).new(trigger));
  };
  take_until['TakeUntil|get#takeUntil'] = function TakeUntil$124get$35takeUntil(T, $this) {
    return dart.fn(trigger => take_until['TakeUntil|takeUntil'](T, $this, trigger), dart.fnType(async.Stream$(T), [FutureOfvoid()]));
  };
  const _others$0 = dart.privateName(merge, "_others");
  const _is__Merge_default = Symbol('_is__Merge_default');
  merge._Merge$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let JSArrayOfStreamOfT = () => (JSArrayOfStreamOfT = dart.constFn(_interceptors.JSArray$(StreamOfT())))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let JSArrayOfStreamSubscriptionOfT = () => (JSArrayOfStreamSubscriptionOfT = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfT())))();
    let StreamSubscriptionOfTToFuture = () => (StreamSubscriptionOfTToFuture = dart.constFn(dart.fnType(async.Future, [StreamSubscriptionOfT()])))();
    class _Merge extends async.StreamTransformerBase$(T, T) {
      bind(first) {
        StreamOfT()._check(first);
        let controller = dart.test(first.isBroadcast) ? StreamControllerOfT().broadcast({sync: true}) : StreamControllerOfT().new({sync: true});
        let allStreams = (() => {
          let t23 = JSArrayOfStreamOfT().of([]);
          t23[$add](first);
          for (let other of this[_others$0])
            t23[$add](!dart.test(first.isBroadcast) || dart.test(other.isBroadcast) ? other : other.asBroadcastStream());
          return t23;
        })();
        controller.onListen = dart.fn(() => {
          let t24;
          let subscriptions = JSArrayOfStreamSubscriptionOfT().of([]);
          for (let stream of allStreams) {
            let subscription = stream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError')});
            subscription.onDone(dart.fn(() => {
              subscriptions[$remove](subscription);
              if (dart.test(subscriptions[$isEmpty])) controller.close();
            }, VoidToNull()));
            subscriptions[$add](subscription);
          }
          if (!dart.test(first.isBroadcast)) {
            t24 = controller;
            t24.onPause = dart.fn(() => {
              for (let subscription of subscriptions) {
                subscription.pause();
              }
            }, VoidToNull());
            t24.onResume = dart.fn(() => {
              for (let subscription of subscriptions) {
                subscription.resume();
              }
            }, VoidToNull());
            t24;
          }
          controller.onCancel = dart.fn(() => {
            if (dart.test(subscriptions[$isEmpty])) return null;
            return async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(s => s.cancel(), StreamSubscriptionOfTToFuture())));
          }, VoidToFutureOfList());
        }, VoidToNull());
        return controller.stream;
      }
    }
    (_Merge.new = function(_others) {
      this[_others$0] = _others;
      _Merge.__proto__.new.call(this);
      ;
    }).prototype = _Merge.prototype;
    dart.addTypeTests(_Merge);
    _Merge.prototype[_is__Merge_default] = true;
    dart.setMethodSignature(_Merge, () => ({
      __proto__: dart.getMethods(_Merge.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(_Merge, "package:stream_transform/src/merge.dart");
    dart.setFieldSignature(_Merge, () => ({
      __proto__: dart.getFields(_Merge.__proto__),
      [_others$0]: dart.finalFieldType(core.Iterable$(async.Stream$(T)))
    }));
    return _Merge;
  });
  merge._Merge = merge._Merge$();
  dart.addTypeTests(merge._Merge, _is__Merge_default);
  const _is__MergeExpanded_default = Symbol('_is__MergeExpanded_default');
  merge._MergeExpanded$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamOfStreamOfT = () => (StreamOfStreamOfT = dart.constFn(async.Stream$(StreamOfT())))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let StreamOfTToNull = () => (StreamOfTToNull = dart.constFn(dart.fnType(core.Null, [StreamOfT()])))();
    class _MergeExpanded extends async.StreamTransformerBase$(async.Stream$(T), T) {
      bind(streams) {
        StreamOfStreamOfT()._check(streams);
        let controller = dart.test(streams.isBroadcast) ? StreamControllerOfT().broadcast({sync: true}) : StreamControllerOfT().new({sync: true});
        controller.onListen = dart.fn(() => {
          let t24;
          let subscriptions = JSArrayOfStreamSubscription().of([]);
          let outerSubscription = streams.listen(dart.fn(inner => {
            if (dart.test(streams.isBroadcast) && !dart.test(inner.isBroadcast)) {
              inner = inner.asBroadcastStream();
            }
            let subscription = inner.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError')});
            subscription.onDone(dart.fn(() => {
              subscriptions[$remove](subscription);
              if (dart.test(subscriptions[$isEmpty])) controller.close();
            }, VoidToNull()));
            subscriptions[$add](subscription);
          }, StreamOfTToNull()), {onError: dart.bind(controller, 'addError')});
          outerSubscription.onDone(dart.fn(() => {
            subscriptions[$remove](outerSubscription);
            if (dart.test(subscriptions[$isEmpty])) controller.close();
          }, VoidToNull()));
          subscriptions[$add](outerSubscription);
          if (!dart.test(streams.isBroadcast)) {
            t24 = controller;
            t24.onPause = dart.fn(() => {
              for (let subscription of subscriptions) {
                subscription.pause();
              }
            }, VoidToNull());
            t24.onResume = dart.fn(() => {
              for (let subscription of subscriptions) {
                subscription.resume();
              }
            }, VoidToNull());
            t24;
          }
          controller.onCancel = dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(s => s.cancel(), StreamSubscriptionToFuture()))), VoidToFutureOfList());
        }, VoidToNull());
        return controller.stream;
      }
    }
    (_MergeExpanded.new = function() {
      _MergeExpanded.__proto__.new.call(this);
      ;
    }).prototype = _MergeExpanded.prototype;
    dart.addTypeTests(_MergeExpanded);
    _MergeExpanded.prototype[_is__MergeExpanded_default] = true;
    dart.setMethodSignature(_MergeExpanded, () => ({
      __proto__: dart.getMethods(_MergeExpanded.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(_MergeExpanded, "package:stream_transform/src/merge.dart");
    return _MergeExpanded;
  });
  merge._MergeExpanded = merge._MergeExpanded$();
  dart.addTypeTests(merge._MergeExpanded, _is__MergeExpanded_default);
  merge['Merge|merge'] = function Merge$124merge(T, $this, other) {
    return $this.transform(T, new (merge._Merge$(T)).new(_interceptors.JSArray$(async.Stream$(T)).of([other])));
  };
  merge['Merge|get#merge'] = function Merge$124get$35merge(T, $this) {
    return dart.fn(other => merge['Merge|merge'](T, $this, other), dart.fnType(async.Stream$(T), [async.Stream$(T)]));
  };
  merge['Merge|mergeAll'] = function Merge$124mergeAll(T, $this, others) {
    return $this.transform(T, new (merge._Merge$(T)).new(others));
  };
  merge['Merge|get#mergeAll'] = function Merge$124get$35mergeAll(T, $this) {
    return dart.fn(others => merge['Merge|mergeAll'](T, $this, others), dart.fnType(async.Stream$(T), [core.Iterable$(async.Stream$(T))]));
  };
  merge['Merge|concurrentAsyncExpand'] = function Merge$124concurrentAsyncExpand(T, S, $this, convert) {
    return $this.map(async.Stream$(S), convert).transform(S, new (merge._MergeExpanded$(S)).new());
  };
  merge['Merge|get#concurrentAsyncExpand'] = function Merge$124get$35concurrentAsyncExpand(T, $this) {
    return dart.fn((S, convert) => merge['Merge|concurrentAsyncExpand'](T, S, $this, convert), dart.gFnType(S => {
      let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
      return [StreamOfS(), [dart.fnType(StreamOfS(), [T])]];
    }));
  };
  const _is__SwitchTransformer_default = Symbol('_is__SwitchTransformer_default');
  $switch._SwitchTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamOfStreamOfT = () => (StreamOfStreamOfT = dart.constFn(async.Stream$(StreamOfT())))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let StreamOfTToNull = () => (StreamOfTToNull = dart.constFn(dart.fnType(core.Null, [StreamOfT()])))();
    class _SwitchTransformer extends async.StreamTransformerBase$(async.Stream$(T), T) {
      bind(outer) {
        StreamOfStreamOfT()._check(outer);
        let controller = dart.test(outer.isBroadcast) ? StreamControllerOfT().broadcast({sync: true}) : StreamControllerOfT().new({sync: true});
        let outerSubscription = null;
        controller.onListen = dart.fn(() => {
          let t30;
          if (!(outerSubscription == null)) dart.assertFailed(null, "org-dartlang-app:///packages/stream_transform/src/switch.dart", 47, 14, "outerSubscription == null");
          let innerSubscription = null;
          let outerStreamDone = false;
          outerSubscription = outer.listen(dart.fn(innerStream => {
            let t30;
            t30 = innerSubscription;
            t30 == null ? null : t30.cancel();
            innerSubscription = innerStream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                innerSubscription = null;
                if (outerStreamDone) controller.close();
              }, VoidToNull())});
          }, StreamOfTToNull()), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
              outerStreamDone = true;
              if (innerSubscription == null) controller.close();
            }, VoidToNull())});
          if (!dart.test(outer.isBroadcast)) {
            t30 = controller;
            t30.onPause = dart.fn(() => {
              let t31;
              t31 = innerSubscription;
              t31 == null ? null : t31.pause();
              outerSubscription.pause();
            }, VoidToNull());
            t30.onResume = dart.fn(() => {
              let t31;
              t31 = innerSubscription;
              t31 == null ? null : t31.resume();
              outerSubscription.resume();
            }, VoidToNull());
            t30;
          }
          controller.onCancel = dart.fn(() => {
            let toCancel = JSArrayOfStreamSubscriptionOfvoid().of([]);
            if (!outerStreamDone) toCancel[$add](outerSubscription);
            if (innerSubscription != null) {
              toCancel[$add](innerSubscription);
            }
            outerSubscription = null;
            innerSubscription = null;
            if (dart.test(toCancel[$isEmpty])) return null;
            return async.Future.wait(dart.dynamic, toCancel[$map](async.Future, dart.fn(s => s.cancel(), StreamSubscriptionOfvoidToFuture())));
          }, VoidToFutureOfList());
        }, VoidToNull());
        return controller.stream;
      }
    }
    (_SwitchTransformer.new = function() {
      _SwitchTransformer.__proto__.new.call(this);
      ;
    }).prototype = _SwitchTransformer.prototype;
    dart.addTypeTests(_SwitchTransformer);
    _SwitchTransformer.prototype[_is__SwitchTransformer_default] = true;
    dart.setMethodSignature(_SwitchTransformer, () => ({
      __proto__: dart.getMethods(_SwitchTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(_SwitchTransformer, "package:stream_transform/src/switch.dart");
    return _SwitchTransformer;
  });
  $switch._SwitchTransformer = $switch._SwitchTransformer$();
  dart.addTypeTests($switch._SwitchTransformer, _is__SwitchTransformer_default);
  $switch['Switch|switchMap'] = function Switch$124switchMap(T, S, $this, convert) {
    return $switch['SwitchLatest|switchLatest'](S, $this.map(async.Stream$(S), convert));
  };
  $switch['Switch|get#switchMap'] = function Switch$124get$35switchMap(T, $this) {
    return dart.fn((S, convert) => $switch['Switch|switchMap'](T, S, $this, convert), dart.gFnType(S => {
      let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
      return [StreamOfS(), [dart.fnType(StreamOfS(), [T])]];
    }));
  };
  $switch['SwitchLatest|switchLatest'] = function SwitchLatest$124switchLatest(T, $this) {
    return $this.transform(T, new ($switch._SwitchTransformer$(T)).new());
  };
  $switch['SwitchLatest|get#switchLatest'] = function SwitchLatest$124get$35switchLatest(T, $this) {
    return dart.fn(() => $switch['SwitchLatest|switchLatest'](T, $this), dart.fnType(async.Stream$(T), []));
  };
  scan['Scan|scan'] = function Scan$124scan(T, S, $this, initialValue, combine) {
    let accumulated = initialValue;
    return $this.asyncMap(S, dart.fn(value => {
      let result = combine(accumulated, value);
      if (async.Future$(S).is(result)) {
        return result.then(S, dart.fn(r => accumulated = r, dart.fnType(S, [S])));
      } else {
        return accumulated = S.as(result);
      }
    }, dart.fnType(async.FutureOr$(S), [T])));
  };
  scan['Scan|get#scan'] = function Scan$124get$35scan(T, $this) {
    return dart.fn((S, initialValue, combine) => scan['Scan|scan'](T, S, $this, initialValue, combine), dart.gFnType(S => {
      let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
      let FutureOrOfS = () => (FutureOrOfS = dart.constFn(async.FutureOr$(S)))();
      return [StreamOfS(), [S, dart.fnType(FutureOrOfS(), [S, T])]];
    }));
  };
  const _next$ = dart.privateName(concatenate, "_next");
  const _is__FollowedBy_default = Symbol('_is__FollowedBy_default');
  concatenate._FollowedBy$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class _FollowedBy extends async.StreamTransformerBase$(T, T) {
      bind(first) {
        StreamOfT()._check(first);
        let controller = dart.test(first.isBroadcast) ? StreamControllerOfT().broadcast({sync: true}) : StreamControllerOfT().new({sync: true});
        let next = dart.test(first.isBroadcast) && !dart.test(this[_next$].isBroadcast) ? this[_next$].asBroadcastStream() : this[_next$];
        let subscription = null;
        let currentStream = first;
        let firstDone = false;
        let secondDone = false;
        let currentDoneHandler = null;
        function listen() {
          subscription = currentStream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => dart.dcall(currentDoneHandler, []), VoidTodynamic())});
        }
        dart.fn(listen, VoidToNull());
        function onSecondDone() {
          secondDone = true;
          controller.close();
        }
        dart.fn(onSecondDone, VoidToNull());
        function onFirstDone() {
          firstDone = true;
          currentStream = next;
          currentDoneHandler = onSecondDone;
          listen();
        }
        dart.fn(onFirstDone, VoidToNull());
        currentDoneHandler = onFirstDone;
        controller.onListen = dart.fn(() => {
          let t36;
          if (!(subscription == null)) dart.assertFailed(null, "org-dartlang-app:///packages/stream_transform/src/concatenate.dart", 98, 14, "subscription == null");
          listen();
          if (!dart.test(first.isBroadcast)) {
            t36 = controller;
            t36.onPause = dart.fn(() => {
              if (!firstDone || !dart.test(next.isBroadcast)) return subscription.pause();
              subscription.cancel();
              subscription = null;
            }, VoidTovoid());
            t36.onResume = dart.fn(() => {
              if (!firstDone || !dart.test(next.isBroadcast)) return subscription.resume();
              listen();
            }, VoidTovoid());
            t36;
          }
          controller.onCancel = dart.fn(() => {
            if (secondDone) return null;
            let toCancel = subscription;
            subscription = null;
            return toCancel.cancel();
          }, VoidToFuture());
        }, VoidToNull());
        return controller.stream;
      }
    }
    (_FollowedBy.new = function(_next) {
      this[_next$] = _next;
      _FollowedBy.__proto__.new.call(this);
      ;
    }).prototype = _FollowedBy.prototype;
    dart.addTypeTests(_FollowedBy);
    _FollowedBy.prototype[_is__FollowedBy_default] = true;
    dart.setMethodSignature(_FollowedBy, () => ({
      __proto__: dart.getMethods(_FollowedBy.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(_FollowedBy, "package:stream_transform/src/concatenate.dart");
    dart.setFieldSignature(_FollowedBy, () => ({
      __proto__: dart.getFields(_FollowedBy.__proto__),
      [_next$]: dart.finalFieldType(async.Stream$(T))
    }));
    return _FollowedBy;
  });
  concatenate._FollowedBy = concatenate._FollowedBy$();
  dart.addTypeTests(concatenate._FollowedBy, _is__FollowedBy_default);
  concatenate['Concatenate|followedBy'] = function Concatenate$124followedBy(T, $this, next) {
    return $this.transform(T, new (concatenate._FollowedBy$(T)).new(next));
  };
  concatenate['Concatenate|get#followedBy'] = function Concatenate$124get$35followedBy(T, $this) {
    return dart.fn(next => concatenate['Concatenate|followedBy'](T, $this, next), dart.fnType(async.Stream$(T), [async.Stream$(T)]));
  };
  concatenate['Concatenate|startWith'] = function Concatenate$124startWith(T, $this, initial) {
    return concatenate['Concatenate|startWithStream'](T, $this, async.Future$(T).value(initial).asStream());
  };
  concatenate['Concatenate|get#startWith'] = function Concatenate$124get$35startWith(T, $this) {
    return dart.fn(initial => concatenate['Concatenate|startWith'](T, $this, initial), dart.fnType(async.Stream$(T), [T]));
  };
  concatenate['Concatenate|startWithMany'] = function Concatenate$124startWithMany(T, $this, initial) {
    return concatenate['Concatenate|startWithStream'](T, $this, async.Stream$(T).fromIterable(initial));
  };
  concatenate['Concatenate|get#startWithMany'] = function Concatenate$124get$35startWithMany(T, $this) {
    return dart.fn(initial => concatenate['Concatenate|startWithMany'](T, $this, initial), dart.fnType(async.Stream$(T), [core.Iterable$(T)]));
  };
  concatenate['Concatenate|startWithStream'] = function Concatenate$124startWithStream(T, $this, initial) {
    if (dart.test($this.isBroadcast) && !dart.test(initial.isBroadcast)) {
      initial = initial.asBroadcastStream();
    }
    return concatenate['Concatenate|followedBy'](T, initial, $this);
  };
  concatenate['Concatenate|get#startWithStream'] = function Concatenate$124get$35startWithStream(T, $this) {
    return dart.fn(initial => concatenate['Concatenate|startWithStream'](T, $this, initial), dart.fnType(async.Stream$(T), [async.Stream$(T)]));
  };
  let C6;
  async_map['AsyncMap|asyncMapBuffer'] = function AsyncMap$124asyncMapBuffer(T, S, $this, convert) {
    let t45;
    let workFinished = (t45 = StreamControllerOfvoid().new(), t45.add(null), t45);
    return rate_limit['RateLimit|buffer'](T, $this, workFinished.stream).transform(S, async_map._asyncMapThen(core.List$(T), S, convert, dart.bind(workFinished, 'add')));
  };
  async_map['AsyncMap|get#asyncMapBuffer'] = function AsyncMap$124get$35asyncMapBuffer(T, $this) {
    return dart.fn((S, convert) => async_map['AsyncMap|asyncMapBuffer'](T, S, $this, convert), dart.gFnType(S => {
      let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
      let FutureOfS = () => (FutureOfS = dart.constFn(async.Future$(S)))();
      return [StreamOfS(), [dart.fnType(FutureOfS(), [core.List$(T)])]];
    }));
  };
  async_map['AsyncMap|asyncMapSample'] = function AsyncMap$124asyncMapSample(T, S, $this, convert) {
    let t47;
    let workFinished = (t47 = StreamControllerOfvoid().new(), t47.add(null), t47);
    return $this.transform(T, new (aggregate_sample.AggregateSample$(T, T)).new(workFinished.stream, dart.gbind(C6 || CT.C6, T))).transform(S, async_map._asyncMapThen(T, S, convert, dart.bind(workFinished, 'add')));
  };
  async_map['AsyncMap|get#asyncMapSample'] = function AsyncMap$124get$35asyncMapSample(T, $this) {
    return dart.fn((S, convert) => async_map['AsyncMap|asyncMapSample'](T, S, $this, convert), dart.gFnType(S => {
      let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
      let FutureOfS = () => (FutureOfS = dart.constFn(async.Future$(S)))();
      return [StreamOfS(), [dart.fnType(FutureOfS(), [T])]];
    }));
  };
  async_map['AsyncMap|concurrentAsyncMap'] = function AsyncMap$124concurrentAsyncMap(T, S, $this, convert) {
    let valuesWaiting = 0;
    let sourceDone = false;
    return $this.transform(S, from_handlers.fromHandlers(T, S, {handleData: dart.fn((element, sink) => {
        valuesWaiting = valuesWaiting + 1;
        dart.fn(() => async.async(core.Null, function*() {
          try {
            sink.add(yield convert(element));
          } catch (e$) {
            let e = dart.getThrown(e$);
            let st = dart.stackTrace(e$);
            sink.addError(e, st);
          }
          valuesWaiting = valuesWaiting - 1;
          if (valuesWaiting <= 0 && sourceDone) sink.close();
        }), VoidToFutureOfNull())();
      }, dart.fnType(core.Null, [T, async.EventSink$(S)])), handleDone: dart.fn(sink => {
        sourceDone = true;
        if (valuesWaiting <= 0) sink.close();
      }, dart.fnType(core.Null, [async.EventSink$(S)]))}));
  };
  async_map['AsyncMap|get#concurrentAsyncMap'] = function AsyncMap$124get$35concurrentAsyncMap(T, $this) {
    return dart.fn((S, convert) => async_map['AsyncMap|concurrentAsyncMap'](T, S, $this, convert), dart.gFnType(S => {
      let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
      let FutureOrOfS = () => (FutureOrOfS = dart.constFn(async.FutureOr$(S)))();
      return [StreamOfS(), [dart.fnType(FutureOrOfS(), [T])]];
    }));
  };
  async_map._dropPrevious = function _dropPrevious$(T, event, _) {
    return event;
  };
  async_map._asyncMapThen = function _asyncMapThen(S, T, convert, then) {
    let pendingEvent = null;
    return from_handlers.fromHandlers(S, T, {handleData: dart.fn((event, sink) => {
        pendingEvent = convert(event).then(dart.void, dart.bind(sink, 'add')).catchError(dart.bind(sink, 'addError')).then(dart.void, then);
      }, dart.fnType(core.Null, [S, async.EventSink$(T)])), handleDone: dart.fn(sink => {
        if (pendingEvent != null) {
          pendingEvent.then(dart.void, dart.fn(_ => sink.close(), voidTovoid()));
        } else {
          sink.close();
        }
      }, dart.fnType(core.Null, [async.EventSink$(T)]))});
  };
  tap['Tap|tap'] = function Tap$124tap(T, $this, onValue, opts) {
    let onError = opts && 'onError' in opts ? opts.onError : null;
    let onDone = opts && 'onDone' in opts ? opts.onDone : null;
    return $this.transform(T, from_handlers.fromHandlers(T, T, {handleData: dart.fn((value, sink) => {
        let t52;
        try {
          t52 = onValue;
          t52 == null ? null : t52(value);
        } catch (e) {
          let _ = dart.getThrown(e);
        }
        sink.add(value);
      }, dart.fnType(core.Null, [T, async.EventSink$(T)])), handleError: dart.fn((error, stackTrace, sink) => {
        let t53;
        try {
          t53 = onError;
          t53 == null ? null : t53(error, stackTrace);
        } catch (e) {
          let _ = dart.getThrown(e);
        }
        sink.addError(error, stackTrace);
      }, dart.fnType(core.Null, [core.Object, core.StackTrace, async.EventSink$(T)])), handleDone: dart.fn(sink => {
        let t54;
        try {
          t54 = onDone;
          t54 == null ? null : t54();
        } catch (e) {
          let _ = dart.getThrown(e);
        }
        sink.close();
      }, dart.fnType(core.Null, [async.EventSink$(T)]))}));
  };
  tap['Tap|get#tap'] = function Tap$124get$35tap(T, $this) {
    return dart.fn((onValue, opts) => {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onDone = opts && 'onDone' in opts ? opts.onDone : null;
      return tap['Tap|tap'](T, $this, onValue, {onError: onError, onDone: onDone});
    }, dart.fnType(async.Stream$(T), [dart.fnType(dart.void, [T])], {onDone: VoidTovoid(), onError: ObjectAndStackTraceTovoid()}, {}));
  };
  dart.trackLibraries("packages/stream_transform/src/aggregate_sample", {
    "package:stream_transform/src/where.dart": where,
    "package:stream_transform/src/from_handlers.dart": from_handlers,
    "package:stream_transform/src/aggregate_sample.dart": aggregate_sample,
    "package:stream_transform/src/rate_limit.dart": rate_limit,
    "package:stream_transform/src/combine_latest.dart": combine_latest,
    "package:stream_transform/src/take_until.dart": take_until,
    "package:stream_transform/src/merge.dart": merge,
    "package:stream_transform/src/switch.dart": $switch,
    "package:stream_transform/src/scan.dart": scan,
    "package:stream_transform/src/concatenate.dart": concatenate,
    "package:stream_transform/src/async_map.dart": async_map,
    "package:stream_transform/stream_transform.dart": stream_transform,
    "package:stream_transform/src/tap.dart": tap
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["where.dart","from_handlers.dart","aggregate_sample.dart","rate_limit.dart","combine_latest.dart","take_until.dart","merge.dart","switch.dart","scan.dart","concatenate.dart","async_map.dart","tap.dart"],"names":[],"mappings":"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","file":"aggregate_sample.ddc.js"}');
  // Exports:
  return {
    src__where: where,
    src__from_handlers: from_handlers,
    src__aggregate_sample: aggregate_sample,
    src__rate_limit: rate_limit,
    src__combine_latest: combine_latest,
    src__take_until: take_until,
    src__merge: merge,
    src__switch: $switch,
    src__scan: scan,
    src__concatenate: concatenate,
    src__async_map: async_map,
    stream_transform: stream_transform,
    src__tap: tap
  };
});

//# sourceMappingURL=aggregate_sample.ddc.js.map
