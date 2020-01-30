define(['dart_sdk', 'packages/test_core/src/runner/plugin/remote_platform_helpers', 'packages/test_core/src/util/stack_trace_mapper', 'packages/stream_channel/stream_channel'], function(dart_sdk, packages__test_core__src__runner__plugin__remote_platform_helpers, packages__test_core__src__util__stack_trace_mapper, packages__stream_channel__stream_channel) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const js_util = dart_sdk.js_util;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const remote_platform_helpers = packages__test_core__src__runner__plugin__remote_platform_helpers.src__runner__plugin__remote_platform_helpers;
  const stack_trace_mapper = packages__test_core__src__util__stack_trace_mapper.src__util__stack_trace_mapper;
  const stream_channel_controller = packages__stream_channel__stream_channel.src__stream_channel_controller;
  const browser = Object.create(dart.library);
  const post_message_channel = Object.create(dart.library);
  const browser$ = Object.create(dart.library);
  const $onMessage = dartx.onMessage;
  const $origin = dartx.origin;
  const $location = dartx.location;
  const $data = dartx.data;
  const $first = dartx.first;
  const $postMessage = dartx.postMessage;
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let MessageEventTobool = () => (MessageEventTobool = dart.constFn(dart.fnType(core.bool, [html.MessageEvent])))();
  let MessageEventToNull = () => (MessageEventToNull = dart.constFn(dart.fnType(core.Null, [html.MessageEvent])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  const CT = Object.create(null);
  browser.internalBootstrapBrowserTest = function internalBootstrapBrowserTest(getMain) {
    let channel = remote_platform_helpers.serializeSuite(getMain, {hidePrints: false, beforeLoad: dart.fn(() => async.async(core.Null, function*() {
        let serialized = core.Map.as(yield remote_platform_helpers.suiteChannel("test.browser.mapper").stream.first);
        if (serialized == null) return;
        remote_platform_helpers.setStackTraceMapper(stack_trace_mapper.JSStackTraceMapper.deserialize(serialized));
      }), VoidToFutureOfNull())});
    post_message_channel.postMessageChannel().pipe(channel);
  };
  post_message_channel.postMessageChannel = function postMessageChannel() {
    let controller = new stream_channel_controller.StreamChannelController.new({sync: true});
    html.window[$onMessage].firstWhere(dart.fn(message => message.origin == html.window[$location][$origin] && dart.equals(message[$data], "port"), MessageEventTobool())).then(core.Null, dart.fn(message => {
      let port = message.ports[$first];
      let portSubscription = port[$onMessage].listen(dart.fn(message => {
        controller.local.sink.add(message[$data]);
      }, MessageEventToNull()));
      controller.local.stream.listen(dart.fn(data => {
        port[$postMessage](new (IdentityMapOfString$dynamic()).from(["data", data]));
      }, dynamicToNull()), {onDone: dart.fn(() => {
          port[$postMessage](new (IdentityMapOfString$String()).from(["event", "done"]));
          portSubscription.cancel();
        }, VoidToNull())});
    }, MessageEventToNull()));
    dart.global.window.parent.postMessage(js_util.jsify(new (IdentityMapOfString$Object()).from(["href", html.window[$location].href, "ready", true])), html.window[$location][$origin]);
    return controller.foreign;
  };
  dart.trackLibraries("packages/test/bootstrap/browser", {
    "package:test/src/bootstrap/browser.dart": browser,
    "package:test/src/runner/browser/post_message_channel.dart": post_message_channel,
    "package:test/bootstrap/browser.dart": browser$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../src/bootstrap/browser.dart","../src/runner/browser/post_message_channel.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;+EAU2C;AACrC,kBACA,uCAAe,OAAO,eAAc,mBAAmB;AACrD,yBACuD,YAAvD,MAAM,AAAoC,AAAO,qCAA9B;AACvB,YAAI,AAAW,UAAD,IAAI,MAAM;AACuC,QAA/D,4CAAuC,kDAAY,UAAU;MAC9D;AACiC,IAAlC,AAAqB,+CAAK,OAAO;EACnC;;ACCM,qBAAa,iEAA8B;AAwB7C,IAlBF,AAAO,AAAU,AAMd,mCANyB,QAAC,WAKpB,AAAQ,AAAO,AAA0B,OAAlC,WAAW,AAAO,AAAS,mCAAuB,YAAb,AAAQ,OAAD,SAAS,gDAC7D,QAAC;AACH,iBAAO,AAAQ,AAAM,OAAP;AACd,6BAAmB,AAAK,AAAU,IAAX,oBAAkB,QAAC;AACL,QAAvC,AAAW,AAAM,AAAK,UAAZ,gBAAgB,AAAQ,OAAD;;AAQjC,MALF,AAAW,AAAM,AAAO,UAAd,qBAAqB,QAAC;AACE,QAAhC,AAAK,IAAD,eAAa,0CAAC,QAAQ,IAAI;oCACrB;AAC0B,UAAnC,AAAK,IAAD,eAAa,yCAAC,SAAS;AACF,UAAzB,AAAiB,gBAAD;;;AAQO,IAD3B,sCAAmB,cAAM,yCAAC,QAAQ,AAAO,AAAS,6BAAM,SAAS,SAC7D,AAAO,AAAS;AAEpB,UAAO,AAAW,WAAD;EACnB","file":"browser.ddc.js"}');
  // Exports:
  return {
    src__bootstrap__browser: browser,
    src__runner__browser__post_message_channel: post_message_channel,
    bootstrap__browser: browser$
  };
});

//# sourceMappingURL=browser.ddc.js.map
