define(['dart_sdk', 'packages/package_resolver/package_resolver', 'packages/stack_trace/src/chain', 'packages/path/path'], function(dart_sdk, packages__package_resolver__package_resolver, packages__stack_trace__src__chain, packages__path__path) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const package_root_resolver = packages__package_resolver__package_resolver.src__package_root_resolver;
  const chain = packages__stack_trace__src__chain.src__chain;
  const trace$ = packages__stack_trace__src__chain.src__trace;
  const frame$ = packages__stack_trace__src__chain.src__frame;
  const path = packages__path__path.path;
  const source_map_stack_trace = Object.create(dart.library);
  const $map = dartx.map;
  const $keys = dartx.keys;
  const $_get = dartx._get;
  const $where = dartx.where;
  const $replaceAll = dartx.replaceAll;
  const $times = dartx['*'];
  const $replaceAllMapped = dartx.replaceAllMapped;
  let TraceToTrace = () => (TraceToTrace = dart.constFn(dart.fnType(trace$.Trace, [trace$.Trace])))();
  let FrameToFrame = () => (FrameToFrame = dart.constFn(dart.fnType(frame$.Frame, [frame$.Frame])))();
  let FrameTobool = () => (FrameTobool = dart.constFn(dart.fnType(core.bool, [frame$.Frame])))();
  let MatchToString = () => (MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))();
  const CT = Object.create(null);
  source_map_stack_trace.mapStackTrace = function mapStackTrace(sourceMap, stackTrace, opts) {
    let minified = opts && 'minified' in opts ? opts.minified : false;
    let packageResolver = opts && 'packageResolver' in opts ? opts.packageResolver : null;
    let sdkRoot = opts && 'sdkRoot' in opts ? opts.sdkRoot : null;
    let packageRoot = opts && 'packageRoot' in opts ? opts.packageRoot : null;
    if (packageRoot != null) {
      if (packageResolver != null) {
        dart.throw(new core.ArgumentError.new("packageResolver and packageRoot may not both be passed."));
      }
      packageResolver = new package_root_resolver.PackageRootResolver.new(packageRoot);
    }
    if (chain.Chain.is(stackTrace)) {
      return new chain.Chain.new(stackTrace.traces[$map](trace$.Trace, dart.fn(trace => trace$.Trace.from(source_map_stack_trace.mapStackTrace(sourceMap, trace, {minified: minified, packageResolver: packageResolver, sdkRoot: sdkRoot})), TraceToTrace())));
    }
    if (sdkRoot != null && !(typeof sdkRoot == 'string') && !core.Uri.is(sdkRoot)) {
      dart.throw(new core.ArgumentError.new("sdkRoot must be a String or a Uri, was \"" + dart.str(sdkRoot) + "\"."));
    }
    let sdkLib = sdkRoot == null ? null : dart.str(sdkRoot) + "/lib";
    let trace = trace$.Trace.from(stackTrace);
    return new trace$.Trace.new(trace.frames[$map](frame$.Frame, dart.fn(frame => {
      let t0;
      if (frame.line == null) return null;
      let column = frame.column == null ? 0 : frame.column;
      let span = sourceMap.spanFor(dart.notNull(frame.line) - 1, dart.notNull(column) - 1, {uri: (t0 = frame.uri, t0 == null ? null : dart.toString(t0))});
      if (span == null) return null;
      let sourceUrl = dart.toString(span.sourceUrl);
      if (sdkRoot != null && dart.test(path.url.isWithin(sdkLib, sourceUrl))) {
        sourceUrl = "dart:" + dart.notNull(path.url.relative(sourceUrl, {from: sdkLib}));
      } else if (packageResolver != null) {
        if (packageResolver.packageRoot != null && dart.test(path.url.isWithin(dart.toString(packageResolver.packageRoot), sourceUrl))) {
          sourceUrl = "package:" + dart.notNull(path.url.relative(sourceUrl, {from: dart.toString(packageResolver.packageRoot)}));
        } else if (packageResolver.packageConfigMap != null) {
          for (let $package of packageResolver.packageConfigMap[$keys]) {
            let packageUrl = dart.toString(packageResolver.packageConfigMap[$_get]($package));
            if (!dart.test(path.url.isWithin(packageUrl, sourceUrl))) continue;
            sourceUrl = "package:" + dart.str($package) + "/" + dart.notNull(path.url.relative(sourceUrl, {from: packageUrl}));
            break;
          }
        }
      }
      return new frame$.Frame.new(core.Uri.parse(sourceUrl), dart.notNull(span.start.line) + 1, dart.notNull(span.start.column) + 1, dart.test(minified) ? dart.test(span.isIdentifier) ? span.text : frame.member : source_map_stack_trace._prettifyMember(frame.member));
    }, FrameToFrame()))[$where](dart.fn(frame => frame != null, FrameTobool())));
  };
  source_map_stack_trace._prettifyMember = function _prettifyMember(member) {
    return member[$replaceAll](core.RegExp.new("/?<$"), "")[$replaceAll](core.RegExp.new("\\$\\d+(\\$[a-zA-Z_0-9]+)*$"), "")[$replaceAllMapped](core.RegExp.new("(_+)closure\\d*\\.call$"), dart.fn(match => ".<fn>"[$times](match._get(1).length), MatchToString()))[$replaceAll](core.RegExp.new("\\.call$"), "")[$replaceAll](core.RegExp.new("^dart\\."), "")[$replaceAll](core.RegExp.new("[a-zA-Z_0-9]+\\$"), "")[$replaceAll](core.RegExp.new("^[a-zA-Z_0-9]+.(static|dart)."), "")[$replaceAllMapped](core.RegExp.new("([a-zA-Z0-9]+)_"), dart.fn(match => dart.notNull(match._get(1)) + ".", MatchToString()));
  };
  dart.trackLibraries("packages/source_map_stack_trace/source_map_stack_trace", {
    "package:source_map_stack_trace/source_map_stack_trace.dart": source_map_stack_trace
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["source_map_stack_trace.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;gEAwBiC,WAAsB;QAC7C;QACc;QACpB;QAC0D;AAC5D,QAAI,WAAW,IAAI;AACjB,UAAI,eAAe,IAAI;AAEyC,QAD9D,WAAU,2BACN;;AAGqD,MAA3D,kBAAsB,kDAAyB,WAAW;;AAG5D,QAAe,eAAX,UAAU;AACZ,YAAW,qBAAM,AAAW,AAAO,UAAR,4BAAY,QAAC,SAC3B,kBAAW,qCAAc,SAAS,EAAE,KAAK,aACtC,QAAQ,mBACD,eAAe,WACvB,OAAO;;AAIxB,QAAI,OAAO,IAAI,UAAgB,OAAR,OAAO,kBAAuB,YAAR,OAAO;AAEO,MADzD,WAAU,2BACN,AAAoD,uDAAV,OAAO;;AAGnD,iBAAS,AAAQ,OAAD,IAAI,OAAO,OAAqB,SAAZ,OAAO;AAE3C,gBAAY,kBAAW,UAAU;AACrC,UAAW,sBAAM,AAAM,AAAO,AAgD3B,KAhDmB,4BAAY,QAAC;;AAGjC,UAAI,AAAM,AAAK,KAAN,SAAS,MAAM,MAAO;AAG3B,mBAAS,AAAM,AAAO,KAAR,WAAW,OAAO,IAAI,AAAM,KAAD;AAIzC,iBAAO,AAAU,SAAD,SAAoB,aAAX,AAAM,KAAD,SAAQ,GAAU,aAAP,MAAM,IAAG,eAC7C,AAAM,KAAD,mBAAC,OAAK;AAIpB,UAAI,AAAK,IAAD,IAAI,MAAM,MAAO;AAErB,sBAA2B,cAAf,AAAK,IAAD;AACpB,UAAI,OAAO,IAAI,kBAAU,AAAI,kBAAS,MAAM,EAAE,SAAS;AACQ,QAA7D,YAAY,AAAQ,uBAAI,AAAI,kBAAS,SAAS,SAAQ,MAAM;YACvD,KAAI,eAAe,IAAI;AAC5B,YAAI,AAAgB,eAAD,gBAAgB,kBAC7B,AAAI,kBAAqC,cAA5B,AAAgB,eAAD,eAAyB,SAAS;AAGb,UAFrD,YAAY,AAAW,0BACjB,AAAI,kBAAS,SAAS,SACc,cAA5B,AAAgB,eAAD;cACxB,KAAI,AAAgB,eAAD,qBAAqB;AAC7C,mBAAS,WAAW,AAAgB,AAAiB,gBAAlB;AAC7B,6BAAuD,cAA1C,AAAgB,AAAgB,eAAjB,yBAAkB;AAClD,2BAAO,AAAI,kBAAS,UAAU,EAAE,SAAS,IAAG;AAGyB,YADrE,YACI,AAAoB,sBAAV,YAAO,mBAAO,AAAI,kBAAS,SAAS,SAAQ,UAAU;AACpE;;;;AAKN,YAAW,sBACH,eAAM,SAAS,GACH,aAAhB,AAAK,AAAM,IAAP,eAAc,GACA,aAAlB,AAAK,AAAM,IAAP,iBAAgB,aAIpB,QAAQ,cACD,AAAK,IAAD,iBAAgB,AAAK,IAAD,QAAQ,AAAM,KAAD,UACtC,uCAAgB,AAAM,KAAD;gCACxB,QAAC,SAAU,AAAM,KAAD,IAAI;EAC/B;oEAG8B;AAC5B,UAAO,AAEF,AAEA,AAEA,AAMA,AAEA,AAEA,AAGA,AAIA,OAvBQ,cAEO,gBAAO,SAAU,iBAEjB,gBAAO,gCAA8B,uBAG7C,gBAAO,4BAGX,QAAC,SAAU,AAAQ,gBAAE,AAAK,AAAI,KAAJ,MAAC,2CAEf,gBAAO,aAAa,iBAEpB,gBAAO,aAAa,iBAEpB,gBAAO,qBAAqB,iBAG5B,gBAAO,kCAAmC,uBAKlD,gBAAO,oBAAqB,QAAC,SAAmB,aAAT,AAAK,KAAA,MAAC,MAAK;EAChE","file":"source_map_stack_trace.ddc.js"}');
  // Exports:
  return {
    source_map_stack_trace: source_map_stack_trace
  };
});

//# sourceMappingURL=source_map_stack_trace.ddc.js.map
