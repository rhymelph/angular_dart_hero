define(['dart_sdk', 'packages/async/async'], function(dart_sdk, packages__async__async) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const single_subscription_transformer = packages__async__async.src__single_subscription_transformer;
  const stream_sink_transformer = packages__async__async.src__stream_sink_transformer;
  const stream = packages__async__async.src__delegate__stream;
  const stream_sink = packages__async__async.src__delegate__stream_sink;
  const stream_transformer_wrapper = packages__async__async.src__stream_sink_transformer__stream_transformer_wrapper;
  const stream_completer = packages__async__async.src__stream_completer;
  const stream_sink_completer = packages__async__async.src__stream_sink_completer;
  const null_stream_sink = packages__async__async.src__null_stream_sink;
  const async_memoizer = packages__async__async.src__async_memoizer;
  const guarantee_channel = Object.create(dart.library);
  const stream_channel = Object.create(dart.library);
  const stream_channel_transformer = Object.create(dart.library);
  const stream_channel_controller = Object.create(dart.library);
  const stream_channel_completer = Object.create(dart.library);
  const multi_channel = Object.create(dart.library);
  const json_document_transformer = Object.create(dart.library);
  const disconnector = Object.create(dart.library);
  const delegating_stream_channel = Object.create(dart.library);
  const close_guarantee_channel = Object.create(dart.library);
  const $_set = dartx._set;
  const $putIfAbsent = dartx.putIfAbsent;
  const $_get = dartx._get;
  const $containsKey = dartx.containsKey;
  const $remove = dartx.remove;
  const $isEmpty = dartx.isEmpty;
  const $values = dartx.values;
  const $clear = dartx.clear;
  const $noSuchMethod = dartx.noSuchMethod;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $add = dartx.add;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let _IdentityHashSetOfint = () => (_IdentityHashSetOfint = dart.constFn(collection._IdentityHashSet$(core.int)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let StreamChannelOfString = () => (StreamChannelOfString = dart.constFn(stream_channel.StreamChannel$(core.String)))();
  let ObjectAndObjectToObject = () => (ObjectAndObjectToObject = dart.constFn(dart.fnType(core.Object, [core.Object, core.Object])))();
  let String__Todynamic = () => (String__Todynamic = dart.constFn(dart.fnType(dart.dynamic, [core.String], {reviver: ObjectAndObjectToObject()}, {})))();
  let StreamSinkTransformerOfObject$String = () => (StreamSinkTransformerOfObject$String = dart.constFn(stream_sink_transformer.StreamSinkTransformer$(core.Object, core.String)))();
  let EventSinkOfString = () => (EventSinkOfString = dart.constFn(async.EventSink$(core.String)))();
  let ObjectAndEventSinkOfStringToNull = () => (ObjectAndEventSinkOfStringToNull = dart.constFn(dart.fnType(core.Null, [core.Object, EventSinkOfString()])))();
  let StreamChannelOfObject = () => (StreamChannelOfObject = dart.constFn(stream_channel.StreamChannel$(core.Object)))();
  let StreamTransformerOfString$Object = () => (StreamTransformerOfString$Object = dart.constFn(async.StreamTransformer$(core.String, core.Object)))();
  let ListOfvoid = () => (ListOfvoid = dart.constFn(core.List$(dart.void)))();
  let FutureOfListOfvoid = () => (FutureOfListOfvoid = dart.constFn(async.Future$(ListOfvoid())))();
  let VoidToFutureOfListOfvoid = () => (VoidToFutureOfListOfvoid = dart.constFn(dart.fnType(FutureOfListOfvoid(), [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(convert.jsonDecode, String__Todynamic());
    },
    get C1() {
      return C1 = dart.const(new _js_helper.PrivateSymbol.new('_sinkTransformer', _sinkTransformer$0));
    },
    get C2() {
      return C2 = dart.const(new _js_helper.PrivateSymbol.new('_streamTransformer', _streamTransformer$0));
    },
    get C3() {
      return C3 = dart.const({
        __proto__: json_document_transformer._JsonDocument.prototype
      });
    },
    get C4() {
      return C4 = dart.const(new _js_helper.PrivateSymbol.new('_sinkTransformer', _sinkTransformer$1));
    },
    get C5() {
      return C5 = dart.const(new _js_helper.PrivateSymbol.new('_streamTransformer', _streamTransformer$1));
    }
  });
  const _sink = dart.privateName(guarantee_channel, "_sink");
  const _streamController = dart.privateName(guarantee_channel, "_streamController");
  const _subscription = dart.privateName(guarantee_channel, "_subscription");
  const _disconnected = dart.privateName(guarantee_channel, "_disconnected");
  const _onStreamDisconnected = dart.privateName(guarantee_channel, "_onStreamDisconnected");
  const _onSinkDisconnected = dart.privateName(guarantee_channel, "_onSinkDisconnected");
  const _is_StreamChannelMixin_default = Symbol('_is_StreamChannelMixin_default');
  stream_channel.StreamChannelMixin$ = dart.generic(T => {
    let StreamChannelOfT = () => (StreamChannelOfT = dart.constFn(stream_channel.StreamChannel$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    let StreamSinkTransformerOfT$T = () => (StreamSinkTransformerOfT$T = dart.constFn(stream_sink_transformer.StreamSinkTransformer$(T, T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamOfTToStreamOfT = () => (StreamOfTToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [StreamOfT()])))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    let StreamSinkOfTToStreamSinkOfT = () => (StreamSinkOfTToStreamSinkOfT = dart.constFn(dart.fnType(StreamSinkOfT(), [StreamSinkOfT()])))();
    class StreamChannelMixin extends core.Object {
      pipe(other) {
        StreamChannelOfT()._check(other);
        this.stream.pipe(other.sink);
        other.stream.pipe(this.sink);
      }
      transform(S, transformer) {
        stream_channel_transformer.StreamChannelTransformer$(S, T)._check(transformer);
        return transformer.bind(this);
      }
      transformStream(transformer) {
        StreamTransformerOfT$T()._check(transformer);
        return this.changeStream(dart.bind(transformer, 'bind'));
      }
      transformSink(transformer) {
        StreamSinkTransformerOfT$T()._check(transformer);
        return this.changeSink(dart.bind(transformer, 'bind'));
      }
      changeStream(change) {
        StreamOfTToStreamOfT()._check(change);
        return StreamChannelOfT().withCloseGuarantee(change(this.stream), this.sink);
      }
      changeSink(change) {
        StreamSinkOfTToStreamSinkOfT()._check(change);
        return StreamChannelOfT().withCloseGuarantee(this.stream, change(this.sink));
      }
      cast(S) {
        return stream_channel.StreamChannel$(S).new(stream.DelegatingStream.typed(S, this.stream), stream_sink.DelegatingStreamSink.typed(S, this.sink));
      }
    }
    (StreamChannelMixin.new = function() {
      ;
    }).prototype = StreamChannelMixin.prototype;
    dart.addTypeTests(StreamChannelMixin);
    StreamChannelMixin.prototype[_is_StreamChannelMixin_default] = true;
    StreamChannelMixin[dart.implements] = () => [stream_channel.StreamChannel$(T)];
    dart.setMethodSignature(StreamChannelMixin, () => ({
      __proto__: dart.getMethods(StreamChannelMixin.__proto__),
      pipe: dart.fnType(dart.void, [core.Object]),
      transform: dart.gFnType(S => [stream_channel.StreamChannel$(S), [core.Object]]),
      transformStream: dart.fnType(stream_channel.StreamChannel$(T), [core.Object]),
      transformSink: dart.fnType(stream_channel.StreamChannel$(T), [core.Object]),
      changeStream: dart.fnType(stream_channel.StreamChannel$(T), [core.Object]),
      changeSink: dart.fnType(stream_channel.StreamChannel$(T), [core.Object]),
      cast: dart.gFnType(S => [stream_channel.StreamChannel$(S), []])
    }));
    dart.setLibraryUri(StreamChannelMixin, "package:stream_channel/stream_channel.dart");
    return StreamChannelMixin;
  });
  stream_channel.StreamChannelMixin = stream_channel.StreamChannelMixin$();
  dart.addTypeTests(stream_channel.StreamChannelMixin, _is_StreamChannelMixin_default);
  const _is_GuaranteeChannel_default = Symbol('_is_GuaranteeChannel_default');
  guarantee_channel.GuaranteeChannel$ = dart.generic(T => {
    let _GuaranteeSinkOfT = () => (_GuaranteeSinkOfT = dart.constFn(guarantee_channel._GuaranteeSink$(T)))();
    let SingleSubscriptionTransformerOfT$T = () => (SingleSubscriptionTransformerOfT$T = dart.constFn(single_subscription_transformer.SingleSubscriptionTransformer$(T, T)))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class GuaranteeChannel extends stream_channel.StreamChannelMixin$(T) {
      get stream() {
        return this[_streamController].stream;
      }
      get sink() {
        return this[_sink];
      }
      [_onSinkDisconnected]() {
        this[_disconnected] = true;
        if (this[_subscription] != null) this[_subscription].cancel();
        this[_streamController].close();
      }
    }
    (GuaranteeChannel.new = function(innerStream, innerSink, opts) {
      let allowSinkErrors = opts && 'allowSinkErrors' in opts ? opts.allowSinkErrors : true;
      this[_sink] = null;
      this[_streamController] = null;
      this[_subscription] = null;
      this[_disconnected] = false;
      this[_sink] = new (_GuaranteeSinkOfT()).new(innerSink, this, {allowErrors: allowSinkErrors});
      if (dart.test(innerStream.isBroadcast)) {
        innerStream = innerStream.transform(T, new (SingleSubscriptionTransformerOfT$T()).new());
      }
      this[_streamController] = StreamControllerOfT().new({onListen: dart.fn(() => {
          if (dart.test(this[_disconnected])) return;
          this[_subscription] = innerStream.listen(dart.bind(this[_streamController], 'add'), {onError: dart.bind(this[_streamController], 'addError'), onDone: dart.fn(() => {
              this[_sink][_onStreamDisconnected]();
              this[_streamController].close();
            }, VoidToNull())});
        }, VoidToNull()), sync: true});
    }).prototype = GuaranteeChannel.prototype;
    dart.addTypeTests(GuaranteeChannel);
    GuaranteeChannel.prototype[_is_GuaranteeChannel_default] = true;
    dart.setMethodSignature(GuaranteeChannel, () => ({
      __proto__: dart.getMethods(GuaranteeChannel.__proto__),
      [_onSinkDisconnected]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(GuaranteeChannel, () => ({
      __proto__: dart.getGetters(GuaranteeChannel.__proto__),
      stream: async.Stream$(T),
      sink: async.StreamSink$(T)
    }));
    dart.setLibraryUri(GuaranteeChannel, "package:stream_channel/src/guarantee_channel.dart");
    dart.setFieldSignature(GuaranteeChannel, () => ({
      __proto__: dart.getFields(GuaranteeChannel.__proto__),
      [_sink]: dart.fieldType(guarantee_channel._GuaranteeSink$(T)),
      [_streamController]: dart.fieldType(async.StreamController$(T)),
      [_subscription]: dart.fieldType(async.StreamSubscription$(T)),
      [_disconnected]: dart.fieldType(core.bool)
    }));
    return GuaranteeChannel;
  });
  guarantee_channel.GuaranteeChannel = guarantee_channel.GuaranteeChannel$();
  dart.addTypeTests(guarantee_channel.GuaranteeChannel, _is_GuaranteeChannel_default);
  const _doneCompleter = dart.privateName(guarantee_channel, "_doneCompleter");
  const _closed = dart.privateName(guarantee_channel, "_closed");
  const _addStreamSubscription = dart.privateName(guarantee_channel, "_addStreamSubscription");
  const _addStreamCompleter = dart.privateName(guarantee_channel, "_addStreamCompleter");
  const _inner$ = dart.privateName(guarantee_channel, "_inner");
  const _channel$ = dart.privateName(guarantee_channel, "_channel");
  const _allowErrors = dart.privateName(guarantee_channel, "_allowErrors");
  const _inAddStream = dart.privateName(guarantee_channel, "_inAddStream");
  const _addError = dart.privateName(guarantee_channel, "_addError");
  const _is__GuaranteeSink_default = Symbol('_is__GuaranteeSink_default');
  guarantee_channel._GuaranteeSink$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class _GuaranteeSink extends core.Object {
      get done() {
        return this[_doneCompleter].future;
      }
      get [_inAddStream]() {
        return this[_addStreamSubscription] != null;
      }
      add(data) {
        T._check(data);
        if (dart.test(this[_closed])) dart.throw(new core.StateError.new("Cannot add event after closing."));
        if (dart.test(this[_inAddStream])) {
          dart.throw(new core.StateError.new("Cannot add event while adding stream."));
        }
        if (dart.test(this[_disconnected])) return;
        this[_inner$].add(data);
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_closed])) dart.throw(new core.StateError.new("Cannot add event after closing."));
        if (dart.test(this[_inAddStream])) {
          dart.throw(new core.StateError.new("Cannot add event while adding stream."));
        }
        if (dart.test(this[_disconnected])) return;
        this[_addError](error, stackTrace);
      }
      [_addError](error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_allowErrors])) {
          this[_inner$].addError(error, stackTrace);
          return;
        }
        this[_doneCompleter].completeError(error, stackTrace);
        this[_onStreamDisconnected]();
        this[_channel$][_onSinkDisconnected]();
        this[_inner$].close().catchError(dart.fn(_ => {
        }, dynamicToNull()));
      }
      addStream(stream) {
        StreamOfT()._check(stream);
        if (dart.test(this[_closed])) dart.throw(new core.StateError.new("Cannot add stream after closing."));
        if (dart.test(this[_inAddStream])) {
          dart.throw(new core.StateError.new("Cannot add stream while adding stream."));
        }
        if (dart.test(this[_disconnected])) return FutureOfvoid().value();
        this[_addStreamCompleter] = async.Completer.sync();
        this[_addStreamSubscription] = stream.listen(dart.bind(this[_inner$], 'add'), {onError: dart.bind(this, _addError), onDone: dart.bind(this[_addStreamCompleter], 'complete')});
        return this[_addStreamCompleter].future.then(dart.void, dart.fn(_ => {
          this[_addStreamCompleter] = null;
          this[_addStreamSubscription] = null;
        }, dynamicToNull()));
      }
      close() {
        if (dart.test(this[_inAddStream])) {
          dart.throw(new core.StateError.new("Cannot close sink while adding stream."));
        }
        if (dart.test(this[_closed])) return this.done;
        this[_closed] = true;
        if (!dart.test(this[_disconnected])) {
          this[_channel$][_onSinkDisconnected]();
          this[_doneCompleter].complete(this[_inner$].close());
        }
        return this.done;
      }
      [_onStreamDisconnected]() {
        this[_disconnected] = true;
        if (!dart.test(this[_doneCompleter].isCompleted)) this[_doneCompleter].complete();
        if (!dart.test(this[_inAddStream])) return;
        this[_addStreamCompleter].complete(this[_addStreamSubscription].cancel());
        this[_addStreamCompleter] = null;
        this[_addStreamSubscription] = null;
      }
    }
    (_GuaranteeSink.new = function(_inner, _channel, opts) {
      let allowErrors = opts && 'allowErrors' in opts ? opts.allowErrors : true;
      this[_doneCompleter] = async.Completer.new();
      this[_disconnected] = false;
      this[_closed] = false;
      this[_addStreamSubscription] = null;
      this[_addStreamCompleter] = null;
      this[_inner$] = _inner;
      this[_channel$] = _channel;
      this[_allowErrors] = allowErrors;
      ;
    }).prototype = _GuaranteeSink.prototype;
    dart.addTypeTests(_GuaranteeSink);
    _GuaranteeSink.prototype[_is__GuaranteeSink_default] = true;
    _GuaranteeSink[dart.implements] = () => [async.StreamSink$(T)];
    dart.setMethodSignature(_GuaranteeSink, () => ({
      __proto__: dart.getMethods(_GuaranteeSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      [_addError]: dart.fnType(dart.void, [dart.dynamic], [core.StackTrace]),
      addStream: dart.fnType(async.Future$(dart.void), [core.Object]),
      close: dart.fnType(async.Future$(dart.void), []),
      [_onStreamDisconnected]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(_GuaranteeSink, () => ({
      __proto__: dart.getGetters(_GuaranteeSink.__proto__),
      done: async.Future$(dart.void),
      [_inAddStream]: core.bool
    }));
    dart.setLibraryUri(_GuaranteeSink, "package:stream_channel/src/guarantee_channel.dart");
    dart.setFieldSignature(_GuaranteeSink, () => ({
      __proto__: dart.getFields(_GuaranteeSink.__proto__),
      [_inner$]: dart.finalFieldType(async.StreamSink$(T)),
      [_channel$]: dart.finalFieldType(guarantee_channel.GuaranteeChannel$(T)),
      [_doneCompleter]: dart.finalFieldType(async.Completer),
      [_disconnected]: dart.fieldType(core.bool),
      [_closed]: dart.fieldType(core.bool),
      [_addStreamSubscription]: dart.fieldType(async.StreamSubscription$(T)),
      [_addStreamCompleter]: dart.fieldType(async.Completer),
      [_allowErrors]: dart.finalFieldType(core.bool)
    }));
    return _GuaranteeSink;
  });
  guarantee_channel._GuaranteeSink = guarantee_channel._GuaranteeSink$();
  dart.addTypeTests(guarantee_channel._GuaranteeSink, _is__GuaranteeSink_default);
  const _is_StreamChannel_default = Symbol('_is_StreamChannel_default');
  stream_channel.StreamChannel$ = dart.generic(T => {
    class StreamChannel extends core.Object {
      static new(stream, sink) {
        return new (stream_channel._StreamChannel$(T)).new(stream, sink);
      }
      static withGuarantees(stream, sink, opts) {
        let allowSinkErrors = opts && 'allowSinkErrors' in opts ? opts.allowSinkErrors : true;
        return new (guarantee_channel.GuaranteeChannel$(T)).new(stream, sink, {allowSinkErrors: allowSinkErrors});
      }
      static withCloseGuarantee(stream, sink) {
        return new (close_guarantee_channel.CloseGuaranteeChannel$(T)).new(stream, sink);
      }
    }
    (StreamChannel[dart.mixinNew] = function() {
    }).prototype = StreamChannel.prototype;
    dart.addTypeTests(StreamChannel);
    StreamChannel.prototype[_is_StreamChannel_default] = true;
    dart.setLibraryUri(StreamChannel, "package:stream_channel/stream_channel.dart");
    return StreamChannel;
  });
  stream_channel.StreamChannel = stream_channel.StreamChannel$();
  dart.addTypeTests(stream_channel.StreamChannel, _is_StreamChannel_default);
  const _is__StreamChannel_default = Symbol('_is__StreamChannel_default');
  stream_channel._StreamChannel$ = dart.generic(T => {
    class _StreamChannel extends stream_channel.StreamChannelMixin$(T) {}
    (_StreamChannel.new = function(stream, sink) {
      this.stream = stream;
      this.sink = sink;
      ;
    }).prototype = _StreamChannel.prototype;
    dart.addTypeTests(_StreamChannel);
    _StreamChannel.prototype[_is__StreamChannel_default] = true;
    dart.setLibraryUri(_StreamChannel, "package:stream_channel/stream_channel.dart");
    dart.setFieldSignature(_StreamChannel, () => ({
      __proto__: dart.getFields(_StreamChannel.__proto__),
      stream: dart.finalFieldType(async.Stream$(T)),
      sink: dart.finalFieldType(async.StreamSink$(T))
    }));
    return _StreamChannel;
  });
  stream_channel._StreamChannel = stream_channel._StreamChannel$();
  dart.addTypeTests(stream_channel._StreamChannel, _is__StreamChannel_default);
  const _streamTransformer = dart.privateName(stream_channel_transformer, "_streamTransformer");
  const _sinkTransformer = dart.privateName(stream_channel_transformer, "_sinkTransformer");
  const _is_StreamChannelTransformer_default = Symbol('_is_StreamChannelTransformer_default');
  const _streamTransformer$ = dart.privateName(stream_channel_transformer, "StreamChannelTransformer._streamTransformer");
  const _sinkTransformer$ = dart.privateName(stream_channel_transformer, "StreamChannelTransformer._sinkTransformer");
  stream_channel_transformer.StreamChannelTransformer$ = dart.generic((S, T) => {
    let StreamTransformerWrapperOfS$T = () => (StreamTransformerWrapperOfS$T = dart.constFn(stream_transformer_wrapper.StreamTransformerWrapper$(S, T)))();
    let StreamChannelOfS = () => (StreamChannelOfS = dart.constFn(stream_channel.StreamChannel$(S)))();
    let StreamChannelOfT = () => (StreamChannelOfT = dart.constFn(stream_channel.StreamChannel$(T)))();
    class StreamChannelTransformer extends core.Object {
      get [_streamTransformer]() {
        return this[_streamTransformer$];
      }
      set [_streamTransformer](value) {
        super[_streamTransformer] = value;
      }
      get [_sinkTransformer]() {
        return this[_sinkTransformer$];
      }
      set [_sinkTransformer](value) {
        super[_sinkTransformer] = value;
      }
      bind(channel) {
        StreamChannelOfT()._check(channel);
        return StreamChannelOfS().withCloseGuarantee(channel.stream.transform(S, this[_streamTransformer]), this[_sinkTransformer].bind(channel.sink));
      }
    }
    (StreamChannelTransformer.new = function(_streamTransformer, _sinkTransformer) {
      this[_streamTransformer$] = _streamTransformer;
      this[_sinkTransformer$] = _sinkTransformer;
      ;
    }).prototype = StreamChannelTransformer.prototype;
    (StreamChannelTransformer.fromCodec = function(codec) {
      StreamChannelTransformer.new.call(this, codec.decoder, new (StreamTransformerWrapperOfS$T()).new(codec.encoder));
    }).prototype = StreamChannelTransformer.prototype;
    dart.addTypeTests(StreamChannelTransformer);
    StreamChannelTransformer.prototype[_is_StreamChannelTransformer_default] = true;
    dart.setMethodSignature(StreamChannelTransformer, () => ({
      __proto__: dart.getMethods(StreamChannelTransformer.__proto__),
      bind: dart.fnType(stream_channel.StreamChannel$(S), [core.Object])
    }));
    dart.setLibraryUri(StreamChannelTransformer, "package:stream_channel/src/stream_channel_transformer.dart");
    dart.setFieldSignature(StreamChannelTransformer, () => ({
      __proto__: dart.getFields(StreamChannelTransformer.__proto__),
      [_streamTransformer]: dart.finalFieldType(async.StreamTransformer$(T, S)),
      [_sinkTransformer]: dart.finalFieldType(stream_sink_transformer.StreamSinkTransformer$(S, T))
    }));
    return StreamChannelTransformer;
  });
  stream_channel_transformer.StreamChannelTransformer = stream_channel_transformer.StreamChannelTransformer$();
  dart.addTypeTests(stream_channel_transformer.StreamChannelTransformer, _is_StreamChannelTransformer_default);
  const _local = dart.privateName(stream_channel_controller, "_local");
  const _foreign = dart.privateName(stream_channel_controller, "_foreign");
  const _is_StreamChannelController_default = Symbol('_is_StreamChannelController_default');
  stream_channel_controller.StreamChannelController$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let StreamChannelOfT = () => (StreamChannelOfT = dart.constFn(stream_channel.StreamChannel$(T)))();
    class StreamChannelController extends core.Object {
      get local() {
        return this[_local];
      }
      get foreign() {
        return this[_foreign];
      }
    }
    (StreamChannelController.new = function(opts) {
      let allowForeignErrors = opts && 'allowForeignErrors' in opts ? opts.allowForeignErrors : true;
      let sync = opts && 'sync' in opts ? opts.sync : false;
      this[_local] = null;
      this[_foreign] = null;
      let localToForeignController = StreamControllerOfT().new({sync: sync});
      let foreignToLocalController = StreamControllerOfT().new({sync: sync});
      this[_local] = StreamChannelOfT().withGuarantees(foreignToLocalController.stream, localToForeignController.sink);
      this[_foreign] = StreamChannelOfT().withGuarantees(localToForeignController.stream, foreignToLocalController.sink, {allowSinkErrors: allowForeignErrors});
    }).prototype = StreamChannelController.prototype;
    dart.addTypeTests(StreamChannelController);
    StreamChannelController.prototype[_is_StreamChannelController_default] = true;
    dart.setGetterSignature(StreamChannelController, () => ({
      __proto__: dart.getGetters(StreamChannelController.__proto__),
      local: stream_channel.StreamChannel$(T),
      foreign: stream_channel.StreamChannel$(T)
    }));
    dart.setLibraryUri(StreamChannelController, "package:stream_channel/src/stream_channel_controller.dart");
    dart.setFieldSignature(StreamChannelController, () => ({
      __proto__: dart.getFields(StreamChannelController.__proto__),
      [_local]: dart.fieldType(stream_channel.StreamChannel$(T)),
      [_foreign]: dart.fieldType(stream_channel.StreamChannel$(T))
    }));
    return StreamChannelController;
  });
  stream_channel_controller.StreamChannelController = stream_channel_controller.StreamChannelController$();
  dart.addTypeTests(stream_channel_controller.StreamChannelController, _is_StreamChannelController_default);
  const _streamCompleter = dart.privateName(stream_channel_completer, "_streamCompleter");
  const _sinkCompleter = dart.privateName(stream_channel_completer, "_sinkCompleter");
  const _channel = dart.privateName(stream_channel_completer, "_channel");
  const _set = dart.privateName(stream_channel_completer, "_set");
  const _is_StreamChannelCompleter_default = Symbol('_is_StreamChannelCompleter_default');
  stream_channel_completer.StreamChannelCompleter$ = dart.generic(T => {
    let StreamCompleterOfT = () => (StreamCompleterOfT = dart.constFn(stream_completer.StreamCompleter$(T)))();
    let StreamSinkCompleterOfT = () => (StreamSinkCompleterOfT = dart.constFn(stream_sink_completer.StreamSinkCompleter$(T)))();
    let StreamChannelOfT = () => (StreamChannelOfT = dart.constFn(stream_channel.StreamChannel$(T)))();
    let NullStreamSinkOfT = () => (NullStreamSinkOfT = dart.constFn(null_stream_sink.NullStreamSink$(T)))();
    class StreamChannelCompleter extends core.Object {
      get channel() {
        return this[_channel];
      }
      static fromFuture(channelFuture) {
        let completer = new stream_channel_completer.StreamChannelCompleter.new();
        channelFuture.then(dart.void, dart.bind(completer, 'setChannel'), {onError: dart.bind(completer, 'setError')});
        return completer.channel;
      }
      setChannel(channel) {
        StreamChannelOfT()._check(channel);
        if (dart.test(this[_set])) dart.throw(new core.StateError.new("The channel has already been set."));
        this[_set] = true;
        this[_streamCompleter].setSourceStream(channel.stream);
        this[_sinkCompleter].setDestinationSink(channel.sink);
      }
      setError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_set])) dart.throw(new core.StateError.new("The channel has already been set."));
        this[_set] = true;
        this[_streamCompleter].setError(error, stackTrace);
        this[_sinkCompleter].setDestinationSink(new (NullStreamSinkOfT()).new());
      }
    }
    (StreamChannelCompleter.new = function() {
      this[_streamCompleter] = new (StreamCompleterOfT()).new();
      this[_sinkCompleter] = new (StreamSinkCompleterOfT()).new();
      this[_channel] = null;
      this[_set] = false;
      this[_channel] = StreamChannelOfT().new(this[_streamCompleter].stream, this[_sinkCompleter].sink);
    }).prototype = StreamChannelCompleter.prototype;
    dart.addTypeTests(StreamChannelCompleter);
    StreamChannelCompleter.prototype[_is_StreamChannelCompleter_default] = true;
    dart.setMethodSignature(StreamChannelCompleter, () => ({
      __proto__: dart.getMethods(StreamChannelCompleter.__proto__),
      setChannel: dart.fnType(dart.void, [core.Object]),
      setError: dart.fnType(dart.void, [dart.dynamic], [core.StackTrace])
    }));
    dart.setGetterSignature(StreamChannelCompleter, () => ({
      __proto__: dart.getGetters(StreamChannelCompleter.__proto__),
      channel: stream_channel.StreamChannel$(T)
    }));
    dart.setLibraryUri(StreamChannelCompleter, "package:stream_channel/src/stream_channel_completer.dart");
    dart.setFieldSignature(StreamChannelCompleter, () => ({
      __proto__: dart.getFields(StreamChannelCompleter.__proto__),
      [_streamCompleter]: dart.finalFieldType(stream_completer.StreamCompleter$(T)),
      [_sinkCompleter]: dart.finalFieldType(stream_sink_completer.StreamSinkCompleter$(T)),
      [_channel]: dart.fieldType(stream_channel.StreamChannel$(T)),
      [_set]: dart.fieldType(core.bool)
    }));
    return StreamChannelCompleter;
  });
  stream_channel_completer.StreamChannelCompleter = stream_channel_completer.StreamChannelCompleter$();
  dart.addTypeTests(stream_channel_completer.StreamChannelCompleter, _is_StreamChannelCompleter_default);
  const _is_MultiChannel_default = Symbol('_is_MultiChannel_default');
  multi_channel.MultiChannel$ = dart.generic(T => {
    class MultiChannel extends core.Object {
      static new(inner) {
        return new (multi_channel._MultiChannel$(T)).new(inner);
      }
    }
    (MultiChannel[dart.mixinNew] = function() {
    }).prototype = MultiChannel.prototype;
    dart.addTypeTests(MultiChannel);
    MultiChannel.prototype[_is_MultiChannel_default] = true;
    MultiChannel[dart.implements] = () => [stream_channel.StreamChannel$(T)];
    dart.setLibraryUri(MultiChannel, "package:stream_channel/src/multi_channel.dart");
    return MultiChannel;
  });
  multi_channel.MultiChannel = multi_channel.MultiChannel$();
  dart.addTypeTests(multi_channel.MultiChannel, _is_MultiChannel_default);
  const _innerStreamSubscription = dart.privateName(multi_channel, "_innerStreamSubscription");
  const _mainController = dart.privateName(multi_channel, "_mainController");
  const _controllers = dart.privateName(multi_channel, "_controllers");
  const _pendingIds = dart.privateName(multi_channel, "_pendingIds");
  const _closedIds = dart.privateName(multi_channel, "_closedIds");
  const _nextId = dart.privateName(multi_channel, "_nextId");
  const _inner$0 = dart.privateName(multi_channel, "_inner");
  const _closeChannel = dart.privateName(multi_channel, "_closeChannel");
  const _closeInnerChannel = dart.privateName(multi_channel, "_closeInnerChannel");
  const _is__MultiChannel_default = Symbol('_is__MultiChannel_default');
  multi_channel._MultiChannel$ = dart.generic(T => {
    let StreamChannelControllerOfT = () => (StreamChannelControllerOfT = dart.constFn(stream_channel_controller.StreamChannelController$(T)))();
    let IdentityMapOfint$StreamChannelControllerOfT = () => (IdentityMapOfint$StreamChannelControllerOfT = dart.constFn(_js_helper.IdentityMap$(core.int, StreamChannelControllerOfT())))();
    let TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    let VoidToStreamChannelControllerOfT = () => (VoidToStreamChannelControllerOfT = dart.constFn(dart.fnType(StreamChannelControllerOfT(), [])))();
    let VirtualChannelOfT = () => (VirtualChannelOfT = dart.constFn(multi_channel.VirtualChannel$(T)))();
    let _EmptyStreamOfT = () => (_EmptyStreamOfT = dart.constFn(async._EmptyStream$(T)))();
    let NullStreamSinkOfT = () => (NullStreamSinkOfT = dart.constFn(null_stream_sink.NullStreamSink$(T)))();
    class _MultiChannel extends stream_channel.StreamChannelMixin$(T) {
      get stream() {
        return this[_mainController].foreign.stream;
      }
      get sink() {
        return this[_mainController].foreign.sink;
      }
      virtualChannel(id) {
        if (id === void 0) id = null;
        let inputId = null;
        let outputId = null;
        if (id != null) {
          inputId = id;
          outputId = dart.notNull(id) + 1;
        } else {
          inputId = dart.notNull(this[_nextId]) + 1;
          outputId = this[_nextId];
          this[_nextId] = dart.notNull(this[_nextId]) + 2;
        }
        if (this[_inner$0] == null) {
          return new (VirtualChannelOfT()).__(this, inputId, new (_EmptyStreamOfT()).new(), new (NullStreamSinkOfT()).new());
        }
        let controller = null;
        if (dart.test(this[_pendingIds].remove(inputId))) {
          controller = this[_controllers][$_get](inputId);
        } else if (dart.test(this[_controllers][$containsKey](inputId)) || dart.test(this[_closedIds].contains(inputId))) {
          dart.throw(new core.ArgumentError.new("A virtual channel with id " + dart.str(id) + " already exists."));
        } else {
          controller = new (StreamChannelControllerOfT()).new({sync: true});
          this[_controllers][$_set](inputId, controller);
        }
        controller.local.stream.listen(dart.fn(message => this[_inner$0].sink.add(JSArrayOfObject().of([outputId, message])), TTovoid()), {onDone: dart.fn(() => this[_closeChannel](inputId, outputId), VoidTovoid())});
        return new (VirtualChannelOfT()).__(this, outputId, controller.foreign.stream, controller.foreign.sink);
      }
      [_closeChannel](inputId, outputId) {
        this[_closedIds].add(inputId);
        let controller = this[_controllers][$remove](inputId);
        controller.local.sink.close();
        if (this[_inner$0] == null) return;
        this[_inner$0].sink.add(JSArrayOfint().of([outputId]));
        if (dart.test(this[_controllers][$isEmpty])) this[_closeInnerChannel]();
      }
      [_closeInnerChannel]() {
        this[_inner$0].sink.close();
        this[_innerStreamSubscription].cancel();
        this[_inner$0] = null;
        for (let controller of core.List.from(this[_controllers][$values])) {
          dart.dsend(dart.dload(dart.dload(controller, 'local'), 'sink'), 'close', []);
        }
        this[_controllers][$clear]();
      }
    }
    (_MultiChannel.new = function(_inner) {
      this[_innerStreamSubscription] = null;
      this[_mainController] = new (StreamChannelControllerOfT()).new({sync: true});
      this[_controllers] = new (IdentityMapOfint$StreamChannelControllerOfT()).new();
      this[_pendingIds] = new (_IdentityHashSetOfint()).new();
      this[_closedIds] = new (_IdentityHashSetOfint()).new();
      this[_nextId] = 1;
      this[_inner$0] = _inner;
      this[_controllers][$_set](0, this[_mainController]);
      this[_mainController].local.stream.listen(dart.fn(message => this[_inner$0].sink.add(JSArrayOfObject().of([0, message])), TTovoid()), {onDone: dart.fn(() => this[_closeChannel](0, 0), VoidTovoid())});
      this[_innerStreamSubscription] = this[_inner$0].stream.listen(dart.fn(message => {
        let id = dart.dsend(message, '_get', [0]);
        if (dart.test(this[_closedIds].contains(id))) return;
        let controller = this[_controllers][$putIfAbsent](core.int._check(id), dart.fn(() => {
          this[_pendingIds].add(core.int._check(id));
          return new (StreamChannelControllerOfT()).new({sync: true});
        }, VoidToStreamChannelControllerOfT()));
        if (dart.dtest(dart.dsend(dart.dload(message, 'length'), '>', [1]))) {
          controller.local.sink.add(T._check(dart.dsend(message, '_get', [1])));
        } else {
          controller.local.sink.close();
        }
      }, dynamicToNull()), {onDone: dart.bind(this, _closeInnerChannel), onError: dart.bind(this[_mainController].local.sink, 'addError')});
    }).prototype = _MultiChannel.prototype;
    dart.addTypeTests(_MultiChannel);
    _MultiChannel.prototype[_is__MultiChannel_default] = true;
    _MultiChannel[dart.implements] = () => [multi_channel.MultiChannel$(T)];
    dart.setMethodSignature(_MultiChannel, () => ({
      __proto__: dart.getMethods(_MultiChannel.__proto__),
      virtualChannel: dart.fnType(multi_channel.VirtualChannel$(T), [], [core.int]),
      [_closeChannel]: dart.fnType(dart.void, [core.int, core.int]),
      [_closeInnerChannel]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(_MultiChannel, () => ({
      __proto__: dart.getGetters(_MultiChannel.__proto__),
      stream: async.Stream$(T),
      sink: async.StreamSink$(T)
    }));
    dart.setLibraryUri(_MultiChannel, "package:stream_channel/src/multi_channel.dart");
    dart.setFieldSignature(_MultiChannel, () => ({
      __proto__: dart.getFields(_MultiChannel.__proto__),
      [_inner$0]: dart.fieldType(stream_channel.StreamChannel),
      [_innerStreamSubscription]: dart.fieldType(async.StreamSubscription),
      [_mainController]: dart.finalFieldType(stream_channel_controller.StreamChannelController$(T)),
      [_controllers]: dart.finalFieldType(core.Map$(core.int, stream_channel_controller.StreamChannelController$(T))),
      [_pendingIds]: dart.finalFieldType(core.Set$(core.int)),
      [_closedIds]: dart.finalFieldType(core.Set$(core.int)),
      [_nextId]: dart.fieldType(core.int)
    }));
    return _MultiChannel;
  });
  multi_channel._MultiChannel = multi_channel._MultiChannel$();
  dart.addTypeTests(multi_channel._MultiChannel, _is__MultiChannel_default);
  const _parent$ = dart.privateName(multi_channel, "_parent");
  const _is_VirtualChannel_default = Symbol('_is_VirtualChannel_default');
  const id$ = dart.privateName(multi_channel, "VirtualChannel.id");
  const stream$ = dart.privateName(multi_channel, "VirtualChannel.stream");
  const sink$ = dart.privateName(multi_channel, "VirtualChannel.sink");
  multi_channel.VirtualChannel$ = dart.generic(T => {
    class VirtualChannel extends stream_channel.StreamChannelMixin$(T) {
      get id() {
        return this[id$];
      }
      set id(value) {
        super.id = value;
      }
      get stream() {
        return this[stream$];
      }
      set stream(value) {
        super.stream = value;
      }
      get sink() {
        return this[sink$];
      }
      set sink(value) {
        super.sink = value;
      }
      virtualChannel(id) {
        if (id === void 0) id = null;
        return this[_parent$].virtualChannel(id);
      }
    }
    (VirtualChannel.__ = function(_parent, id, stream, sink) {
      this[_parent$] = _parent;
      this[id$] = id;
      this[stream$] = stream;
      this[sink$] = sink;
      ;
    }).prototype = VirtualChannel.prototype;
    dart.addTypeTests(VirtualChannel);
    VirtualChannel.prototype[_is_VirtualChannel_default] = true;
    VirtualChannel[dart.implements] = () => [multi_channel.MultiChannel$(T)];
    dart.setMethodSignature(VirtualChannel, () => ({
      __proto__: dart.getMethods(VirtualChannel.__proto__),
      virtualChannel: dart.fnType(multi_channel.VirtualChannel$(T), [], [core.int])
    }));
    dart.setLibraryUri(VirtualChannel, "package:stream_channel/src/multi_channel.dart");
    dart.setFieldSignature(VirtualChannel, () => ({
      __proto__: dart.getFields(VirtualChannel.__proto__),
      [_parent$]: dart.finalFieldType(multi_channel.MultiChannel$(T)),
      id: dart.finalFieldType(core.int),
      stream: dart.finalFieldType(async.Stream$(T)),
      sink: dart.finalFieldType(async.StreamSink$(T))
    }));
    return VirtualChannel;
  });
  multi_channel.VirtualChannel = multi_channel.VirtualChannel$();
  dart.addTypeTests(multi_channel.VirtualChannel, _is_VirtualChannel_default);
  let C0;
  const _sinkTransformer$0 = dart.privateName(json_document_transformer, "_sinkTransformer");
  let C1;
  const _streamTransformer$0 = dart.privateName(json_document_transformer, "_streamTransformer");
  let C2;
  json_document_transformer._JsonDocument = class _JsonDocument extends core.Object {
    bind(channel) {
      StreamChannelOfString()._check(channel);
      let stream = channel.stream.map(dart.dynamic, C0 || CT.C0);
      let sink = StreamSinkTransformerOfObject$String().fromHandlers({handleData: dart.fn((data, sink) => {
          sink.add(convert.jsonEncode(data));
        }, ObjectAndEventSinkOfStringToNull())}).bind(channel.sink);
      return StreamChannelOfObject().withCloseGuarantee(stream, sink);
    }
    get [_sinkTransformer]() {
      return StreamSinkTransformerOfObject$String()._check(this[$noSuchMethod](new core._Invocation.getter(C1 || CT.C1)));
    }
    get [_streamTransformer]() {
      return StreamTransformerOfString$Object()._check(this[$noSuchMethod](new core._Invocation.getter(C2 || CT.C2)));
    }
  };
  (json_document_transformer._JsonDocument.new = function() {
    ;
  }).prototype = json_document_transformer._JsonDocument.prototype;
  dart.addTypeTests(json_document_transformer._JsonDocument);
  json_document_transformer._JsonDocument[dart.implements] = () => [stream_channel_transformer.StreamChannelTransformer$(core.Object, core.String)];
  dart.setMethodSignature(json_document_transformer._JsonDocument, () => ({
    __proto__: dart.getMethods(json_document_transformer._JsonDocument.__proto__),
    bind: dart.fnType(stream_channel.StreamChannel$(core.Object), [core.Object])
  }));
  dart.setGetterSignature(json_document_transformer._JsonDocument, () => ({
    __proto__: dart.getGetters(json_document_transformer._JsonDocument.__proto__),
    [_sinkTransformer]: stream_sink_transformer.StreamSinkTransformer$(core.Object, core.String),
    [_streamTransformer]: async.StreamTransformer$(core.String, core.Object)
  }));
  dart.setLibraryUri(json_document_transformer._JsonDocument, "package:stream_channel/src/json_document_transformer.dart");
  let C3;
  dart.defineLazy(json_document_transformer, {
    /*json_document_transformer.jsonDocument*/get jsonDocument() {
      return C3 || CT.C3;
    }
  });
  const _sinks = dart.privateName(disconnector, "_sinks");
  const _disconnectMemo = dart.privateName(disconnector, "_disconnectMemo");
  const _disconnect = dart.privateName(disconnector, "_disconnect");
  const _sinkTransformer$1 = dart.privateName(disconnector, "_sinkTransformer");
  let C4;
  const _streamTransformer$1 = dart.privateName(disconnector, "_streamTransformer");
  let C5;
  const _is_Disconnector_default = Symbol('_is_Disconnector_default');
  disconnector.Disconnector$ = dart.generic(T => {
    let _DisconnectorSinkOfT = () => (_DisconnectorSinkOfT = dart.constFn(disconnector._DisconnectorSink$(T)))();
    let JSArrayOf_DisconnectorSinkOfT = () => (JSArrayOf_DisconnectorSinkOfT = dart.constFn(_interceptors.JSArray$(_DisconnectorSinkOfT())))();
    let _DisconnectorSinkOfTToFutureOfvoid = () => (_DisconnectorSinkOfTToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [_DisconnectorSinkOfT()])))();
    let StreamChannelOfT = () => (StreamChannelOfT = dart.constFn(stream_channel.StreamChannel$(T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    let StreamSinkOfTTo_DisconnectorSinkOfT = () => (StreamSinkOfTTo_DisconnectorSinkOfT = dart.constFn(dart.fnType(_DisconnectorSinkOfT(), [StreamSinkOfT()])))();
    let StreamSinkTransformerOfT$T = () => (StreamSinkTransformerOfT$T = dart.constFn(stream_sink_transformer.StreamSinkTransformer$(T, T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class Disconnector extends core.Object {
      get isDisconnected() {
        return this[_disconnectMemo].hasRun;
      }
      disconnect() {
        return this[_disconnectMemo].runOnce(dart.fn(() => {
          let futures = this[_sinks][$map](FutureOfvoid(), dart.fn(sink => sink[_disconnect](), _DisconnectorSinkOfTToFutureOfvoid()))[$toList]();
          this[_sinks][$clear]();
          return async.Future.wait(dart.void, futures, {eagerError: true});
        }, VoidToFutureOfListOfvoid()));
      }
      bind(channel) {
        StreamChannelOfT()._check(channel);
        return channel.changeSink(dart.fn(innerSink => {
          let sink = new (_DisconnectorSinkOfT()).new(innerSink);
          if (dart.test(this.isDisconnected)) {
            sink[_disconnect]().catchError(dart.fn(_ => {
            }, dynamicToNull()));
          } else {
            this[_sinks][$add](sink);
          }
          return sink;
        }, StreamSinkOfTTo_DisconnectorSinkOfT()));
      }
      get [_sinkTransformer]() {
        return StreamSinkTransformerOfT$T()._check(this[$noSuchMethod](new core._Invocation.getter(C4 || CT.C4)));
      }
      get [_streamTransformer]() {
        return StreamTransformerOfT$T()._check(this[$noSuchMethod](new core._Invocation.getter(C5 || CT.C5)));
      }
    }
    (Disconnector.new = function() {
      this[_sinks] = JSArrayOf_DisconnectorSinkOfT().of([]);
      this[_disconnectMemo] = new async_memoizer.AsyncMemoizer.new();
      ;
    }).prototype = Disconnector.prototype;
    dart.addTypeTests(Disconnector);
    Disconnector.prototype[_is_Disconnector_default] = true;
    Disconnector[dart.implements] = () => [stream_channel_transformer.StreamChannelTransformer$(T, T)];
    dart.setMethodSignature(Disconnector, () => ({
      __proto__: dart.getMethods(Disconnector.__proto__),
      disconnect: dart.fnType(async.Future$(dart.void), []),
      bind: dart.fnType(stream_channel.StreamChannel$(T), [core.Object])
    }));
    dart.setGetterSignature(Disconnector, () => ({
      __proto__: dart.getGetters(Disconnector.__proto__),
      isDisconnected: core.bool,
      [_sinkTransformer]: stream_sink_transformer.StreamSinkTransformer$(T, T),
      [_streamTransformer]: async.StreamTransformer$(T, T)
    }));
    dart.setLibraryUri(Disconnector, "package:stream_channel/src/disconnector.dart");
    dart.setFieldSignature(Disconnector, () => ({
      __proto__: dart.getFields(Disconnector.__proto__),
      [_sinks]: dart.finalFieldType(core.List$(disconnector._DisconnectorSink$(T))),
      [_disconnectMemo]: dart.finalFieldType(async_memoizer.AsyncMemoizer)
    }));
    return Disconnector;
  });
  disconnector.Disconnector = disconnector.Disconnector$();
  dart.addTypeTests(disconnector.Disconnector, _is_Disconnector_default);
  const _isDisconnected = dart.privateName(disconnector, "_isDisconnected");
  const _closed$ = dart.privateName(disconnector, "_closed");
  const _addStreamSubscription$ = dart.privateName(disconnector, "_addStreamSubscription");
  const _addStreamCompleter$ = dart.privateName(disconnector, "_addStreamCompleter");
  const _inner$1 = dart.privateName(disconnector, "_inner");
  const _inAddStream$ = dart.privateName(disconnector, "_inAddStream");
  const _is__DisconnectorSink_default = Symbol('_is__DisconnectorSink_default');
  disconnector._DisconnectorSink$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class _DisconnectorSink extends core.Object {
      get done() {
        return this[_inner$1].done;
      }
      get [_inAddStream$]() {
        return this[_addStreamSubscription$] != null;
      }
      add(data) {
        T._check(data);
        if (dart.test(this[_closed$])) dart.throw(new core.StateError.new("Cannot add event after closing."));
        if (dart.test(this[_inAddStream$])) {
          dart.throw(new core.StateError.new("Cannot add event while adding stream."));
        }
        if (dart.test(this[_isDisconnected])) return;
        this[_inner$1].add(data);
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_closed$])) dart.throw(new core.StateError.new("Cannot add event after closing."));
        if (dart.test(this[_inAddStream$])) {
          dart.throw(new core.StateError.new("Cannot add event while adding stream."));
        }
        if (dart.test(this[_isDisconnected])) return;
        this[_inner$1].addError(error, stackTrace);
      }
      addStream(stream) {
        StreamOfT()._check(stream);
        if (dart.test(this[_closed$])) dart.throw(new core.StateError.new("Cannot add stream after closing."));
        if (dart.test(this[_inAddStream$])) {
          dart.throw(new core.StateError.new("Cannot add stream while adding stream."));
        }
        if (dart.test(this[_isDisconnected])) return FutureOfvoid().value();
        this[_addStreamCompleter$] = async.Completer.sync();
        this[_addStreamSubscription$] = stream.listen(dart.bind(this[_inner$1], 'add'), {onError: dart.bind(this[_inner$1], 'addError'), onDone: dart.bind(this[_addStreamCompleter$], 'complete')});
        return this[_addStreamCompleter$].future.then(dart.void, dart.fn(_ => {
          this[_addStreamCompleter$] = null;
          this[_addStreamSubscription$] = null;
        }, dynamicToNull()));
      }
      close() {
        if (dart.test(this[_inAddStream$])) {
          dart.throw(new core.StateError.new("Cannot close sink while adding stream."));
        }
        this[_closed$] = true;
        return this[_inner$1].close();
      }
      [_disconnect]() {
        this[_isDisconnected] = true;
        let future = this[_inner$1].close();
        if (dart.test(this[_inAddStream$])) {
          this[_addStreamCompleter$].complete(this[_addStreamSubscription$].cancel());
          this[_addStreamCompleter$] = null;
          this[_addStreamSubscription$] = null;
        }
        return future;
      }
    }
    (_DisconnectorSink.new = function(_inner) {
      this[_isDisconnected] = false;
      this[_closed$] = false;
      this[_addStreamSubscription$] = null;
      this[_addStreamCompleter$] = null;
      this[_inner$1] = _inner;
      ;
    }).prototype = _DisconnectorSink.prototype;
    dart.addTypeTests(_DisconnectorSink);
    _DisconnectorSink.prototype[_is__DisconnectorSink_default] = true;
    _DisconnectorSink[dart.implements] = () => [async.StreamSink$(T)];
    dart.setMethodSignature(_DisconnectorSink, () => ({
      __proto__: dart.getMethods(_DisconnectorSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future$(dart.void), [core.Object]),
      close: dart.fnType(async.Future$(dart.void), []),
      [_disconnect]: dart.fnType(async.Future$(dart.void), [])
    }));
    dart.setGetterSignature(_DisconnectorSink, () => ({
      __proto__: dart.getGetters(_DisconnectorSink.__proto__),
      done: async.Future$(dart.void),
      [_inAddStream$]: core.bool
    }));
    dart.setLibraryUri(_DisconnectorSink, "package:stream_channel/src/disconnector.dart");
    dart.setFieldSignature(_DisconnectorSink, () => ({
      __proto__: dart.getFields(_DisconnectorSink.__proto__),
      [_inner$1]: dart.finalFieldType(async.StreamSink$(T)),
      [_isDisconnected]: dart.fieldType(core.bool),
      [_closed$]: dart.fieldType(core.bool),
      [_addStreamSubscription$]: dart.fieldType(async.StreamSubscription$(T)),
      [_addStreamCompleter$]: dart.fieldType(async.Completer)
    }));
    return _DisconnectorSink;
  });
  disconnector._DisconnectorSink = disconnector._DisconnectorSink$();
  dart.addTypeTests(disconnector._DisconnectorSink, _is__DisconnectorSink_default);
  const _inner$2 = dart.privateName(delegating_stream_channel, "_inner");
  const _is_DelegatingStreamChannel_default = Symbol('_is_DelegatingStreamChannel_default');
  delegating_stream_channel.DelegatingStreamChannel$ = dart.generic(T => {
    class DelegatingStreamChannel extends stream_channel.StreamChannelMixin$(T) {
      get stream() {
        return this[_inner$2].stream;
      }
      get sink() {
        return this[_inner$2].sink;
      }
    }
    (DelegatingStreamChannel.new = function(_inner) {
      this[_inner$2] = _inner;
      ;
    }).prototype = DelegatingStreamChannel.prototype;
    dart.addTypeTests(DelegatingStreamChannel);
    DelegatingStreamChannel.prototype[_is_DelegatingStreamChannel_default] = true;
    dart.setGetterSignature(DelegatingStreamChannel, () => ({
      __proto__: dart.getGetters(DelegatingStreamChannel.__proto__),
      stream: async.Stream$(T),
      sink: async.StreamSink$(T)
    }));
    dart.setLibraryUri(DelegatingStreamChannel, "package:stream_channel/src/delegating_stream_channel.dart");
    dart.setFieldSignature(DelegatingStreamChannel, () => ({
      __proto__: dart.getFields(DelegatingStreamChannel.__proto__),
      [_inner$2]: dart.finalFieldType(stream_channel.StreamChannel$(T))
    }));
    return DelegatingStreamChannel;
  });
  delegating_stream_channel.DelegatingStreamChannel = delegating_stream_channel.DelegatingStreamChannel$();
  dart.addTypeTests(delegating_stream_channel.DelegatingStreamChannel, _is_DelegatingStreamChannel_default);
  const _stream = dart.privateName(close_guarantee_channel, "_stream");
  const _sink$ = dart.privateName(close_guarantee_channel, "_sink");
  const _disconnected$ = dart.privateName(close_guarantee_channel, "_disconnected");
  const _subscription$ = dart.privateName(close_guarantee_channel, "_subscription");
  const _is_CloseGuaranteeChannel_default = Symbol('_is_CloseGuaranteeChannel_default');
  const _subscription$0 = dart.privateName(close_guarantee_channel, "CloseGuaranteeChannel._subscription");
  close_guarantee_channel.CloseGuaranteeChannel$ = dart.generic(T => {
    let _CloseGuaranteeSinkOfT = () => (_CloseGuaranteeSinkOfT = dart.constFn(close_guarantee_channel._CloseGuaranteeSink$(T)))();
    let _CloseGuaranteeStreamOfT = () => (_CloseGuaranteeStreamOfT = dart.constFn(close_guarantee_channel._CloseGuaranteeStream$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    class CloseGuaranteeChannel extends stream_channel.StreamChannelMixin$(T) {
      get [_subscription$]() {
        return this[_subscription$0];
      }
      set [_subscription$](value) {
        this[_subscription$0] = StreamSubscriptionOfT()._check(value);
      }
      get stream() {
        return this[_stream];
      }
      get sink() {
        return this[_sink$];
      }
    }
    (CloseGuaranteeChannel.new = function(innerStream, innerSink) {
      this[_stream] = null;
      this[_sink$] = null;
      this[_subscription$0] = null;
      this[_disconnected$] = false;
      this[_sink$] = new (_CloseGuaranteeSinkOfT()).new(innerSink, this);
      this[_stream] = new (_CloseGuaranteeStreamOfT()).new(innerStream, this);
    }).prototype = CloseGuaranteeChannel.prototype;
    dart.addTypeTests(CloseGuaranteeChannel);
    CloseGuaranteeChannel.prototype[_is_CloseGuaranteeChannel_default] = true;
    dart.setGetterSignature(CloseGuaranteeChannel, () => ({
      __proto__: dart.getGetters(CloseGuaranteeChannel.__proto__),
      stream: async.Stream$(T),
      sink: async.StreamSink$(T)
    }));
    dart.setLibraryUri(CloseGuaranteeChannel, "package:stream_channel/src/close_guarantee_channel.dart");
    dart.setFieldSignature(CloseGuaranteeChannel, () => ({
      __proto__: dart.getFields(CloseGuaranteeChannel.__proto__),
      [_stream]: dart.fieldType(close_guarantee_channel._CloseGuaranteeStream$(T)),
      [_sink$]: dart.fieldType(close_guarantee_channel._CloseGuaranteeSink$(T)),
      [_subscription$]: dart.fieldType(async.StreamSubscription$(T)),
      [_disconnected$]: dart.fieldType(core.bool)
    }));
    return CloseGuaranteeChannel;
  });
  close_guarantee_channel.CloseGuaranteeChannel = close_guarantee_channel.CloseGuaranteeChannel$();
  dart.addTypeTests(close_guarantee_channel.CloseGuaranteeChannel, _is_CloseGuaranteeChannel_default);
  const _inner$3 = dart.privateName(close_guarantee_channel, "_inner");
  const _channel$0 = dart.privateName(close_guarantee_channel, "_channel");
  const _is__CloseGuaranteeStream_default = Symbol('_is__CloseGuaranteeStream_default');
  close_guarantee_channel._CloseGuaranteeStream$ = dart.generic(T => {
    class _CloseGuaranteeStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (dart.test(this[_channel$0][_disconnected$])) {
          onData = null;
          onError = null;
        }
        let subscription = this[_inner$3].listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
        if (!dart.test(this[_channel$0][_disconnected$])) {
          this[_channel$0][_subscription$] = subscription;
        }
        return subscription;
      }
    }
    (_CloseGuaranteeStream.new = function(_inner, _channel) {
      this[_inner$3] = _inner;
      this[_channel$0] = _channel;
      _CloseGuaranteeStream.__proto__.new.call(this);
      ;
    }).prototype = _CloseGuaranteeStream.prototype;
    dart.addTypeTests(_CloseGuaranteeStream);
    _CloseGuaranteeStream.prototype[_is__CloseGuaranteeStream_default] = true;
    dart.setMethodSignature(_CloseGuaranteeStream, () => ({
      __proto__: dart.getMethods(_CloseGuaranteeStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}, {})
    }));
    dart.setLibraryUri(_CloseGuaranteeStream, "package:stream_channel/src/close_guarantee_channel.dart");
    dart.setFieldSignature(_CloseGuaranteeStream, () => ({
      __proto__: dart.getFields(_CloseGuaranteeStream.__proto__),
      [_inner$3]: dart.finalFieldType(async.Stream$(T)),
      [_channel$0]: dart.finalFieldType(close_guarantee_channel.CloseGuaranteeChannel$(T))
    }));
    return _CloseGuaranteeStream;
  });
  close_guarantee_channel._CloseGuaranteeStream = close_guarantee_channel._CloseGuaranteeStream$();
  dart.addTypeTests(close_guarantee_channel._CloseGuaranteeStream, _is__CloseGuaranteeStream_default);
  const _is__CloseGuaranteeSink_default = Symbol('_is__CloseGuaranteeSink_default');
  close_guarantee_channel._CloseGuaranteeSink$ = dart.generic(T => {
    class _CloseGuaranteeSink extends stream_sink.DelegatingStreamSink$(T) {
      close() {
        let done = super.close();
        this[_channel$0][_disconnected$] = true;
        if (this[_channel$0][_subscription$] != null) {
          this[_channel$0][_subscription$].onData(null);
          this[_channel$0][_subscription$].onError(null);
        }
        return done;
      }
    }
    (_CloseGuaranteeSink.new = function(inner, _channel) {
      this[_channel$0] = _channel;
      _CloseGuaranteeSink.__proto__.new.call(this, inner);
      ;
    }).prototype = _CloseGuaranteeSink.prototype;
    dart.addTypeTests(_CloseGuaranteeSink);
    _CloseGuaranteeSink.prototype[_is__CloseGuaranteeSink_default] = true;
    dart.setMethodSignature(_CloseGuaranteeSink, () => ({
      __proto__: dart.getMethods(_CloseGuaranteeSink.__proto__),
      close: dart.fnType(async.Future$(dart.void), [])
    }));
    dart.setLibraryUri(_CloseGuaranteeSink, "package:stream_channel/src/close_guarantee_channel.dart");
    dart.setFieldSignature(_CloseGuaranteeSink, () => ({
      __proto__: dart.getFields(_CloseGuaranteeSink.__proto__),
      [_channel$0]: dart.finalFieldType(close_guarantee_channel.CloseGuaranteeChannel$(T))
    }));
    return _CloseGuaranteeSink;
  });
  close_guarantee_channel._CloseGuaranteeSink = close_guarantee_channel._CloseGuaranteeSink$();
  dart.addTypeTests(close_guarantee_channel._CloseGuaranteeSink, _is__CloseGuaranteeSink_default);
  dart.trackLibraries("packages/stream_channel/stream_channel", {
    "package:stream_channel/src/guarantee_channel.dart": guarantee_channel,
    "package:stream_channel/stream_channel.dart": stream_channel,
    "package:stream_channel/src/stream_channel_transformer.dart": stream_channel_transformer,
    "package:stream_channel/src/stream_channel_controller.dart": stream_channel_controller,
    "package:stream_channel/src/stream_channel_completer.dart": stream_channel_completer,
    "package:stream_channel/src/multi_channel.dart": multi_channel,
    "package:stream_channel/src/json_document_transformer.dart": json_document_transformer,
    "package:stream_channel/src/disconnector.dart": disconnector,
    "package:stream_channel/src/delegating_stream_channel.dart": delegating_stream_channel,
    "package:stream_channel/src/close_guarantee_channel.dart": close_guarantee_channel
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["stream_channel.dart","src/guarantee_channel.dart","src/stream_channel_transformer.dart","src/stream_channel_controller.dart","src/stream_channel_completer.dart","src/multi_channel.dart","src/json_document_transformer.dart","src/disconnector.dart","src/delegating_stream_channel.dart","src/close_guarantee_channel.dart"],"names":[],"mappings":"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","file":"stream_channel.ddc.js"}');
  // Exports:
  return {
    src__guarantee_channel: guarantee_channel,
    stream_channel: stream_channel,
    src__stream_channel_transformer: stream_channel_transformer,
    src__stream_channel_controller: stream_channel_controller,
    src__stream_channel_completer: stream_channel_completer,
    src__multi_channel: multi_channel,
    src__json_document_transformer: json_document_transformer,
    src__disconnector: disconnector,
    src__delegating_stream_channel: delegating_stream_channel,
    src__close_guarantee_channel: close_guarantee_channel
  };
});

//# sourceMappingURL=stream_channel.ddc.js.map
