define(['dart_sdk', 'packages/http/src/base_client'], function(dart_sdk, packages__http__src__base_client) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const request$ = packages__http__src__base_client.src__request;
  const streamed_response = packages__http__src__base_client.src__streamed_response;
  const byte_stream = packages__http__src__base_client.src__byte_stream;
  const base_request = packages__http__src__base_client.src__base_request;
  const base_client = packages__http__src__base_client.src__base_client;
  const mock_client = Object.create(dart.library);
  const testing = Object.create(dart.library);
  const $addAll = dartx.addAll;
  let FutureOfStreamedResponse = () => (FutureOfStreamedResponse = dart.constFn(async.Future$(streamed_response.StreamedResponse)))();
  let BaseRequestAndByteStreamToFutureOfStreamedResponse = () => (BaseRequestAndByteStreamToFutureOfStreamedResponse = dart.constFn(dart.fnType(FutureOfStreamedResponse(), [base_request.BaseRequest, byte_stream.ByteStream])))();
  const CT = Object.create(null);
  const _handler$ = dart.privateName(mock_client, "_handler");
  mock_client.MockClient = class MockClient extends base_client.BaseClient {
    send(request) {
      return async.async(streamed_response.StreamedResponse, (function* send() {
        let bodyStream = request.finalize();
        return yield this[_handler$](request, bodyStream);
      }).bind(this));
    }
  };
  (mock_client.MockClient.__ = function(_handler) {
    this[_handler$] = _handler;
    ;
  }).prototype = mock_client.MockClient.prototype;
  (mock_client.MockClient.new = function(fn) {
    mock_client.MockClient.__.call(this, dart.fn((baseRequest, bodyStream) => async.async(streamed_response.StreamedResponse, function*() {
      let t0;
      let bodyBytes = (yield bodyStream.toBytes());
      let request = (t0 = new request$.Request.new(baseRequest.method, baseRequest.url), t0.persistentConnection = baseRequest.persistentConnection, t0.followRedirects = baseRequest.followRedirects, t0.maxRedirects = baseRequest.maxRedirects, t0.headers[$addAll](baseRequest.headers), t0.bodyBytes = bodyBytes, t0.finalize(), t0);
      let response = (yield fn(request));
      return new streamed_response.StreamedResponse.new(byte_stream.ByteStream.fromBytes(response.bodyBytes), response.statusCode, {contentLength: response.contentLength, request: baseRequest, headers: response.headers, isRedirect: response.isRedirect, persistentConnection: response.persistentConnection, reasonPhrase: response.reasonPhrase});
    }), BaseRequestAndByteStreamToFutureOfStreamedResponse()));
  }).prototype = mock_client.MockClient.prototype;
  (mock_client.MockClient.streaming = function(fn) {
    mock_client.MockClient.__.call(this, dart.fn((request, bodyStream) => async.async(streamed_response.StreamedResponse, function*() {
      let response = (yield fn(request, bodyStream));
      return new streamed_response.StreamedResponse.new(response.stream, response.statusCode, {contentLength: response.contentLength, request: request, headers: response.headers, isRedirect: response.isRedirect, persistentConnection: response.persistentConnection, reasonPhrase: response.reasonPhrase});
    }), BaseRequestAndByteStreamToFutureOfStreamedResponse()));
  }).prototype = mock_client.MockClient.prototype;
  dart.addTypeTests(mock_client.MockClient);
  dart.setMethodSignature(mock_client.MockClient, () => ({
    __proto__: dart.getMethods(mock_client.MockClient.__proto__),
    send: dart.fnType(async.Future$(streamed_response.StreamedResponse), [base_request.BaseRequest])
  }));
  dart.setLibraryUri(mock_client.MockClient, "package:http/src/mock_client.dart");
  dart.setFieldSignature(mock_client.MockClient, () => ({
    __proto__: dart.getFields(mock_client.MockClient.__proto__),
    [_handler$]: dart.finalFieldType(dart.fnType(async.Future$(streamed_response.StreamedResponse), [base_request.BaseRequest, byte_stream.ByteStream]))
  }));
  dart.trackLibraries("packages/http/src/mock_client", {
    "package:http/src/mock_client.dart": mock_client,
    "package:http/testing.dart": testing
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["mock_client.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;SAoE4C;AAAb;AACvB,yBAAa,AAAQ,OAAD;AACxB,cAAO,OAAM,gBAAS,OAAO,EAAE,UAAU;MAC3C;;;;IA5CkB;;EAAS;yCAIE;yCAChB,SAAC,aAAa;;AACb,uBAAY,MAAM,AAAW,UAAD;AAC9B,0BAAU,yBAAQ,AAAY,WAAD,SAAS,AAAY,WAAD,OACjD,0BAAuB,AAAY,WAAD,uBAClC,qBAAkB,AAAY,WAAD,kBAC7B,kBAAe,AAAY,WAAD,eAC1B,AAAQ,oBAAO,AAAY,WAAD,WAC1B,eAAY,SAAS,EACrB;AAEE,sBAAW,MAAM,AAAE,EAAA,CAAC,OAAO;AACjC,YAAO,4CACQ,iCAAU,AAAS,QAAD,aAAa,AAAS,QAAD,6BACnC,AAAS,QAAD,yBACd,WAAW,WACX,AAAS,QAAD,sBACL,AAAS,QAAD,mCACE,AAAS,QAAD,qCAChB,AAAS,QAAD;IAC3B;EAAC;+CAIqC;yCAChC,SAAC,SAAS;AACT,sBAAW,MAAM,AAAE,EAAA,CAAC,OAAO,EAAE,UAAU;AAC7C,YAAO,4CAAiB,AAAS,QAAD,SAAS,AAAS,QAAD,6BAC9B,AAAS,QAAD,yBACd,OAAO,WACP,AAAS,QAAD,sBACL,AAAS,QAAD,mCACE,AAAS,QAAD,qCAChB,AAAS,QAAD;IAC3B;EAAC","file":"mock_client.ddc.js"}');
  // Exports:
  return {
    src__mock_client: mock_client,
    testing: testing
  };
});

//# sourceMappingURL=mock_client.ddc.js.map
