define(['dart_sdk', 'packages/async/async', 'packages/stack_trace/src/chain'], function(dart_sdk, packages__async__async, packages__stack_trace__src__chain) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const async_memoizer = packages__async__async.src__async_memoizer;
  const restartable_timer = packages__async__async.src__restartable_timer;
  const future_group = packages__async__async.src__future_group;
  const chain = packages__stack_trace__src__chain.src__chain;
  const pool = Object.create(dart.library);
  const $isNotEmpty = dartx.isNotEmpty;
  const $iterator = dartx.iterator;
  const $map = dartx.map;
  const $length = dartx.length;
  const $isEmpty = dartx.isEmpty;
  let CompleterOfPoolResource = () => (CompleterOfPoolResource = dart.constFn(async.Completer$(pool.PoolResource)))();
  let ListQueueOfCompleterOfPoolResource = () => (ListQueueOfCompleterOfPoolResource = dart.constFn(collection.ListQueue$(CompleterOfPoolResource())))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let ListQueueOfVoidTovoid = () => (ListQueueOfVoidTovoid = dart.constFn(collection.ListQueue$(VoidTovoid())))();
  let FutureOfPoolResource = () => (FutureOfPoolResource = dart.constFn(async.Future$(pool.PoolResource)))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let intToFutureOfvoid = () => (intToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [core.int])))();
  let IterableOfint = () => (IterableOfint = dart.constFn(core.Iterable$(core.int)))();
  let VoidToFutureOfvoid = () => (VoidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureOfList = () => (FutureOfList = dart.constFn(async.Future$(core.List)))();
  let VoidToFutureOfList = () => (VoidToFutureOfList = dart.constFn(dart.fnType(FutureOfList(), [])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  const CT = Object.create(null);
  const _requestedResources = dart.privateName(pool, "_requestedResources");
  const _onReleaseCallbacks = dart.privateName(pool, "_onReleaseCallbacks");
  const _onReleaseCompleters = dart.privateName(pool, "_onReleaseCompleters");
  const _allocatedResources = dart.privateName(pool, "_allocatedResources");
  const _timer = dart.privateName(pool, "_timer");
  const _closeGroup = dart.privateName(pool, "_closeGroup");
  const _closeMemo = dart.privateName(pool, "_closeMemo");
  const _maxAllocatedResources$ = dart.privateName(pool, "_maxAllocatedResources");
  const _timeout = dart.privateName(pool, "_timeout");
  const _onTimeout = dart.privateName(pool, "_onTimeout");
  const _runOnRelease = dart.privateName(pool, "_runOnRelease");
  const _resetTimer = dart.privateName(pool, "_resetTimer");
  const _onResourceReleased = dart.privateName(pool, "_onResourceReleased");
  const _onResourceReleaseAllowed = dart.privateName(pool, "_onResourceReleaseAllowed");
  pool.Pool = class Pool extends core.Object {
    get isClosed() {
      return this[_closeMemo].hasRun;
    }
    get done() {
      return this[_closeMemo].future;
    }
    request() {
      if (dart.test(this.isClosed)) {
        dart.throw(new core.StateError.new("request() may not be called on a closed Pool."));
      }
      if (dart.notNull(this[_allocatedResources]) < dart.notNull(this[_maxAllocatedResources$])) {
        this[_allocatedResources] = dart.notNull(this[_allocatedResources]) + 1;
        return FutureOfPoolResource().value(new pool.PoolResource.__(this));
      } else if (dart.test(this[_onReleaseCallbacks][$isNotEmpty])) {
        return this[_runOnRelease](this[_onReleaseCallbacks].removeFirst());
      } else {
        let completer = CompleterOfPoolResource().new();
        this[_requestedResources].add(completer);
        this[_resetTimer]();
        return completer.future;
      }
    }
    withResource(T, callback) {
      return async.async(T, (function* withResource() {
        if (dart.test(this.isClosed)) {
          dart.throw(new core.StateError.new("withResource() may not be called on a closed Pool."));
        }
        let resource = (yield this.request());
        try {
          return yield callback();
        } finally {
          resource.release();
        }
      }).bind(this));
    }
    forEach(S, T, elements, action, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      onError == null ? onError = dart.fn((item, e, s) => true, dart.fnType(core.bool, [S, core.Object, core.StackTrace])) : null;
      let cancelPending = false;
      let resumeCompleter = null;
      let controller = null;
      let iterator = null;
      const run = i => {
        return async.async(dart.void, (function* run() {
          let t0;
          while (dart.test(iterator.moveNext())) {
            let current = iterator.current;
            this[_resetTimer]();
            yield (t0 = resumeCompleter, t0 == null ? null : t0.future);
            if (cancelPending) {
              break;
            }
            let value = null;
            try {
              value = (yield action(current));
            } catch (e$) {
              let e = dart.getThrown(e$);
              let stack = dart.stackTrace(e$);
              if (dart.test(onError(current, e, stack))) {
                controller.addError(e, stack);
              }
              continue;
            }
            controller.add(value);
          }
        }).bind(this));
      };
      dart.fn(run, intToFutureOfvoid());
      let doneFuture = null;
      const onListen = () => {
        if (!(iterator == null)) dart.assertFailed(null, "org-dartlang-app:///packages/pool/pool.dart", 195, 14, "iterator == null");
        iterator = elements[$iterator];
        if (!(doneFuture == null)) dart.assertFailed(null, "org-dartlang-app:///packages/pool/pool.dart", 198, 14, "doneFuture == null");
        doneFuture = async.Future.wait(dart.void, IterableOfint().generate(this[_maxAllocatedResources$])[$map](FutureOfvoid(), dart.fn(i => this.withResource(dart.void, dart.fn(() => run(i), VoidToFutureOfvoid())), intToFutureOfvoid())), {eagerError: true}).catchError(dart.bind(controller, 'addError'));
        doneFuture.whenComplete(dart.bind(controller, 'close'));
      };
      dart.fn(onListen, VoidTovoid());
      controller = async.StreamController$(T).new({sync: true, onListen: onListen, onCancel: dart.fn(() => async.async(core.Null, function*() {
          if (!!cancelPending) dart.assertFailed(null, "org-dartlang-app:///packages/pool/pool.dart", 212, 16, "!cancelPending");
          cancelPending = true;
          yield doneFuture;
        }), VoidToFutureOfNull()), onPause: dart.fn(() => {
          if (!(resumeCompleter == null)) dart.assertFailed(null, "org-dartlang-app:///packages/pool/pool.dart", 217, 16, "resumeCompleter == null");
          resumeCompleter = async.Completer.new();
        }, VoidToNull()), onResume: dart.fn(() => {
          if (!(resumeCompleter != null)) dart.assertFailed(null, "org-dartlang-app:///packages/pool/pool.dart", 221, 16, "resumeCompleter != null");
          resumeCompleter.complete();
          resumeCompleter = null;
        }, VoidToNull())});
      return controller.stream;
    }
    close() {
      return this[_closeMemo].runOnce(dart.fn(() => {
        if (this[_closeGroup] != null) return this[_closeGroup].future;
        this[_resetTimer]();
        this[_closeGroup] = new future_group.FutureGroup.new();
        for (let callback of this[_onReleaseCallbacks]) {
          this[_closeGroup].add(async.Future.sync(callback));
        }
        this[_allocatedResources] = dart.notNull(this[_allocatedResources]) - dart.notNull(this[_onReleaseCallbacks][$length]);
        this[_onReleaseCallbacks].clear();
        if (this[_allocatedResources] === 0) this[_closeGroup].close();
        return this[_closeGroup].future;
      }, VoidToFutureOfList()));
    }
    [_onResourceReleased]() {
      this[_resetTimer]();
      if (dart.test(this[_requestedResources][$isNotEmpty])) {
        let pending = this[_requestedResources].removeFirst();
        pending.complete(new pool.PoolResource.__(this));
      } else {
        this[_allocatedResources] = dart.notNull(this[_allocatedResources]) - 1;
        if (dart.test(this.isClosed) && this[_allocatedResources] === 0) this[_closeGroup].close();
      }
    }
    [_onResourceReleaseAllowed](onRelease) {
      this[_resetTimer]();
      if (dart.test(this[_requestedResources][$isNotEmpty])) {
        let pending = this[_requestedResources].removeFirst();
        pending.complete(this[_runOnRelease](onRelease));
      } else if (dart.test(this.isClosed)) {
        this[_closeGroup].add(async.Future.sync(onRelease));
        this[_allocatedResources] = dart.notNull(this[_allocatedResources]) - 1;
        if (this[_allocatedResources] === 0) this[_closeGroup].close();
      } else {
        let zone = async.Zone.current;
        let registered = zone.registerCallback(dart.dynamic, onRelease);
        this[_onReleaseCallbacks].add(dart.fn(() => zone.run(dart.void, registered), VoidTovoid()));
      }
    }
    [_runOnRelease](onRelease) {
      async.Future.sync(onRelease).then(core.Null, dart.fn(value => {
        this[_onReleaseCompleters].removeFirst().complete(new pool.PoolResource.__(this));
      }, dynamicToNull())).catchError(dart.fn((error, stackTrace) => {
        this[_onReleaseCompleters].removeFirst().completeError(error, stackTrace);
      }, dynamicAndStackTraceToNull()));
      let completer = CompleterOfPoolResource().sync();
      this[_onReleaseCompleters].add(completer);
      return completer.future;
    }
    [_resetTimer]() {
      if (this[_timer] == null) return;
      if (dart.test(this[_requestedResources][$isEmpty])) {
        this[_timer].cancel();
      } else {
        this[_timer].reset();
      }
    }
    [_onTimeout]() {
      for (let completer of this[_requestedResources]) {
        completer.completeError(new async.TimeoutException.new("Pool deadlock: all resources have been " + "allocated for too long.", this[_timeout]), chain.Chain.current());
      }
      this[_requestedResources].clear();
      this[_timer] = null;
    }
  };
  (pool.Pool.new = function(_maxAllocatedResources, opts) {
    let t0;
    let timeout = opts && 'timeout' in opts ? opts.timeout : null;
    this[_requestedResources] = new (ListQueueOfCompleterOfPoolResource()).new();
    this[_onReleaseCallbacks] = new (ListQueueOfVoidTovoid()).new();
    this[_onReleaseCompleters] = new (ListQueueOfCompleterOfPoolResource()).new();
    this[_allocatedResources] = 0;
    this[_timer] = null;
    this[_closeGroup] = null;
    this[_closeMemo] = new async_memoizer.AsyncMemoizer.new();
    this[_maxAllocatedResources$] = _maxAllocatedResources;
    this[_timeout] = timeout;
    if (dart.notNull(this[_maxAllocatedResources$]) <= 0) {
      dart.throw(new core.ArgumentError.value(this[_maxAllocatedResources$], "maxAllocatedResources", "Must be greater than zero."));
    }
    if (timeout != null) {
      this[_timer] = (t0 = new restartable_timer.RestartableTimer.new(timeout, dart.bind(this, _onTimeout)), t0.cancel(), t0);
    }
  }).prototype = pool.Pool.prototype;
  dart.addTypeTests(pool.Pool);
  dart.setMethodSignature(pool.Pool, () => ({
    __proto__: dart.getMethods(pool.Pool.__proto__),
    request: dart.fnType(async.Future$(pool.PoolResource), []),
    withResource: dart.gFnType(T => [async.Future$(T), [dart.fnType(async.FutureOr$(T), [])]]),
    forEach: dart.gFnType((S, T) => [async.Stream$(T), [core.Iterable$(S), dart.fnType(async.FutureOr$(T), [S])], {onError: dart.fnType(core.bool, [S, core.Object, core.StackTrace])}, {}]),
    close: dart.fnType(async.Future, []),
    [_onResourceReleased]: dart.fnType(dart.void, []),
    [_onResourceReleaseAllowed]: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [])]),
    [_runOnRelease]: dart.fnType(async.Future$(pool.PoolResource), [dart.fnType(dart.dynamic, [])]),
    [_resetTimer]: dart.fnType(dart.void, []),
    [_onTimeout]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(pool.Pool, () => ({
    __proto__: dart.getGetters(pool.Pool.__proto__),
    isClosed: core.bool,
    done: async.Future
  }));
  dart.setLibraryUri(pool.Pool, "package:pool/pool.dart");
  dart.setFieldSignature(pool.Pool, () => ({
    __proto__: dart.getFields(pool.Pool.__proto__),
    [_requestedResources]: dart.finalFieldType(collection.Queue$(async.Completer$(pool.PoolResource))),
    [_onReleaseCallbacks]: dart.finalFieldType(collection.Queue$(dart.fnType(dart.void, []))),
    [_onReleaseCompleters]: dart.finalFieldType(collection.Queue$(async.Completer$(pool.PoolResource))),
    [_maxAllocatedResources$]: dart.finalFieldType(core.int),
    [_allocatedResources]: dart.fieldType(core.int),
    [_timer]: dart.fieldType(restartable_timer.RestartableTimer),
    [_timeout]: dart.finalFieldType(core.Duration),
    [_closeGroup]: dart.fieldType(future_group.FutureGroup),
    [_closeMemo]: dart.finalFieldType(async_memoizer.AsyncMemoizer)
  }));
  const _released = dart.privateName(pool, "_released");
  const _pool$ = dart.privateName(pool, "_pool");
  pool.PoolResource = class PoolResource extends core.Object {
    release() {
      if (dart.test(this[_released])) {
        dart.throw(new core.StateError.new("A PoolResource may only be released once."));
      }
      this[_released] = true;
      this[_pool$][_onResourceReleased]();
    }
    allowRelease(onRelease) {
      if (dart.test(this[_released])) {
        dart.throw(new core.StateError.new("A PoolResource may only be released once."));
      }
      this[_released] = true;
      this[_pool$][_onResourceReleaseAllowed](onRelease);
    }
  };
  (pool.PoolResource.__ = function(_pool) {
    this[_released] = false;
    this[_pool$] = _pool;
    ;
  }).prototype = pool.PoolResource.prototype;
  dart.addTypeTests(pool.PoolResource);
  dart.setMethodSignature(pool.PoolResource, () => ({
    __proto__: dart.getMethods(pool.PoolResource.__proto__),
    release: dart.fnType(dart.void, []),
    allowRelease: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [])])
  }));
  dart.setLibraryUri(pool.PoolResource, "package:pool/pool.dart");
  dart.setFieldSignature(pool.PoolResource, () => ({
    __proto__: dart.getFields(pool.PoolResource.__proto__),
    [_pool$]: dart.finalFieldType(pool.Pool),
    [_released]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/pool/pool", {
    "package:pool/pool.dart": pool
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["pool.dart"],"names":[],"mappings":"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","file":"pool.ddc.js"}');
  // Exports:
  return {
    pool: pool
  };
});

//# sourceMappingURL=pool.ddc.js.map
