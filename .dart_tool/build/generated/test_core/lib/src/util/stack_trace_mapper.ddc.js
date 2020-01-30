define(['dart_sdk', 'packages/source_maps/builder', 'packages/source_map_stack_trace/source_map_stack_trace', 'packages/package_resolver/package_resolver', 'packages/test_api/src/backend/closed_exception'], function(dart_sdk, packages__source_maps__builder, packages__source_map_stack_trace__source_map_stack_trace, packages__package_resolver__package_resolver, packages__test_api__src__backend__closed_exception) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const parser = packages__source_maps__builder.parser;
  const source_map_stack_trace = packages__source_map_stack_trace__source_map_stack_trace.source_map_stack_trace;
  const package_root_resolver = packages__package_resolver__package_resolver.src__package_root_resolver;
  const package_config_resolver = packages__package_resolver__package_resolver.src__package_config_resolver;
  const sync_package_resolver = packages__package_resolver__package_resolver.src__sync_package_resolver;
  const stack_trace_mapper = packages__test_api__src__backend__closed_exception.src__util__stack_trace_mapper;
  const stack_trace_mapper$ = Object.create(dart.library);
  const $_get = dartx._get;
  const $isNotEmpty = dartx.isNotEmpty;
  const $cast = dartx.cast;
  const $map = dartx.map;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let MapEntryOfString$String = () => (MapEntryOfString$String = dart.constFn(core.MapEntry$(core.String, core.String)))();
  let StringAndUriToMapEntryOfString$String = () => (StringAndUriToMapEntryOfString$String = dart.constFn(dart.fnType(MapEntryOfString$String(), [core.String, core.Uri])))();
  let MapEntryOfString$Uri = () => (MapEntryOfString$Uri = dart.constFn(core.MapEntry$(core.String, core.Uri)))();
  let StringAndStringToMapEntryOfString$Uri = () => (StringAndStringToMapEntryOfString$Uri = dart.constFn(dart.fnType(MapEntryOfString$Uri(), [core.String, core.String])))();
  const CT = Object.create(null);
  const _mapping = dart.privateName(stack_trace_mapper$, "_mapping");
  const _mapContents$ = dart.privateName(stack_trace_mapper$, "_mapContents");
  const _mapUrl = dart.privateName(stack_trace_mapper$, "_mapUrl");
  const _packageResolver = dart.privateName(stack_trace_mapper$, "_packageResolver");
  const _sdkRoot = dart.privateName(stack_trace_mapper$, "_sdkRoot");
  stack_trace_mapper$.JSStackTraceMapper = class JSStackTraceMapper extends stack_trace_mapper.StackTraceMapper {
    mapStackTrace(trace) {
      this[_mapping] == null ? this[_mapping] = parser.parseExtended(this[_mapContents$], {mapUrl: this[_mapUrl]}) : null;
      return source_map_stack_trace.mapStackTrace(this[_mapping], trace, {packageResolver: this[_packageResolver], sdkRoot: this[_sdkRoot]});
    }
    serialize() {
      let t0, t0$, t0$0;
      return new (IdentityMapOfString$dynamic()).from(["mapContents", this[_mapContents$], "sdkRoot", (t0 = this[_sdkRoot], t0 == null ? null : dart.toString(t0)), "packageConfigMap", stack_trace_mapper$.JSStackTraceMapper._serializePackageConfigMap(this[_packageResolver].packageConfigMap), "packageRoot", (t0$ = this[_packageResolver].packageRoot, t0$ == null ? null : dart.toString(t0$)), "mapUrl", (t0$0 = this[_mapUrl], t0$0 == null ? null : dart.toString(t0$0))]);
    }
    static deserialize(serialized) {
      let t0;
      if (serialized == null) return null;
      let packageRoot = (t0 = core.String.as(serialized[$_get]("packageRoot")), t0 == null ? "" : t0);
      return new stack_trace_mapper$.JSStackTraceMapper.new(core.String.as(serialized[$_get]("mapContents")), {sdkRoot: core.Uri.parse(core.String.as(serialized[$_get]("sdkRoot"))), packageResolver: packageRoot[$isNotEmpty] ? new package_root_resolver.PackageRootResolver.new(core.Uri.parse(core.String.as(serialized[$_get]("packageRoot")))) : new package_config_resolver.PackageConfigResolver.new(stack_trace_mapper$.JSStackTraceMapper._deserializePackageConfigMap(core.Map.as(serialized[$_get]("packageConfigMap"))[$cast](core.String, core.String))), mapUrl: core.Uri.parse(core.String.as(serialized[$_get]("mapUrl")))});
    }
    static _serializePackageConfigMap(packageConfigMap) {
      if (packageConfigMap == null) return null;
      return packageConfigMap[$map](core.String, core.String, dart.fn((key, value) => new (MapEntryOfString$String()).__(key, dart.str(value)), StringAndUriToMapEntryOfString$String()));
    }
    static _deserializePackageConfigMap(serialized) {
      if (serialized == null) return null;
      return serialized[$map](core.String, core.Uri, dart.fn((key, value) => new (MapEntryOfString$Uri()).__(key, core.Uri.parse(value)), StringAndStringToMapEntryOfString$Uri()));
    }
  };
  (stack_trace_mapper$.JSStackTraceMapper.new = function(_mapContents, opts) {
    let mapUrl = opts && 'mapUrl' in opts ? opts.mapUrl : null;
    let packageResolver = opts && 'packageResolver' in opts ? opts.packageResolver : null;
    let sdkRoot = opts && 'sdkRoot' in opts ? opts.sdkRoot : null;
    this[_mapping] = null;
    this[_mapContents$] = _mapContents;
    this[_mapUrl] = mapUrl;
    this[_packageResolver] = packageResolver;
    this[_sdkRoot] = sdkRoot;
    ;
  }).prototype = stack_trace_mapper$.JSStackTraceMapper.prototype;
  dart.addTypeTests(stack_trace_mapper$.JSStackTraceMapper);
  dart.setMethodSignature(stack_trace_mapper$.JSStackTraceMapper, () => ({
    __proto__: dart.getMethods(stack_trace_mapper$.JSStackTraceMapper.__proto__),
    mapStackTrace: dart.fnType(core.StackTrace, [core.StackTrace]),
    serialize: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(stack_trace_mapper$.JSStackTraceMapper, "package:test_core/src/util/stack_trace_mapper.dart");
  dart.setFieldSignature(stack_trace_mapper$.JSStackTraceMapper, () => ({
    __proto__: dart.getFields(stack_trace_mapper$.JSStackTraceMapper.__proto__),
    [_mapping]: dart.fieldType(parser.Mapping),
    [_packageResolver]: dart.finalFieldType(sync_package_resolver.SyncPackageResolver),
    [_sdkRoot]: dart.finalFieldType(core.Uri),
    [_mapContents$]: dart.finalFieldType(core.String),
    [_mapUrl]: dart.finalFieldType(core.Uri)
  }));
  dart.trackLibraries("packages/test_core/src/util/stack_trace_mapper", {
    "package:test_core/src/util/stack_trace_mapper.dart": stack_trace_mapper$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["stack_trace_mapper.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;kBAmCsC;AACuB,MAAzD,AAAS,kBAAA,OAAT,iBAAa,qBAAc,8BAAsB,kBAAxC;AACT,YAAO,sCAAqB,gBAAU,KAAK,oBACtB,iCAA2B;IAClD;;;AAIE,YAAO,2CACL,eAAe,qBACf,8CAAW,OAAU,oBACrB,oBACI,kEAA2B,AAAiB,0CAChD,sBAAe,AAAiB,kDAAA,OAAa,qBAC7C,gDAAU,OAAS;IAEvB;uBAIwC;;AACtC,UAAI,AAAW,UAAD,IAAI,MAAM,MAAO;AACxB,yBAAkD,KAAV,eAA1B,AAAU,UAAA,QAAC,uBAAe,OAAa;AAC5D,YAAO,gDAA6C,eAA1B,AAAU,UAAA,QAAC,2BACpB,eAA4B,eAAtB,AAAU,UAAA,QAAC,+BACb,AAAY,WAAD,gBACF,kDACd,eAAgC,eAA1B,AAAU,UAAA,QAAC,oBACH,sDAAO,oEACO,AAC3B,YADJ,AAAU,UAAA,QAAC,iEAER,eAA2B,eAArB,AAAU,UAAA,QAAC;IACnC;sCAKqB;AACnB,UAAI,AAAiB,gBAAD,IAAI,MAAM,MAAO;AACrC,YAAO,AAAiB,iBAAD,iCAAK,SAAC,KAAK,UAAU,mCAAS,GAAG,EAAU,SAAN,KAAK;IACnE;wCAKwB;AACtB,UAAI,AAAW,UAAD,IAAI,MAAM,MAAO;AAC/B,YAAO,AAAW,WAAD,8BAAK,SAAC,KAAK,UAAU,gCAAS,GAAG,EAAM,eAAM,KAAK;IACrE;;yDAvDwB;QACf;QAA4B;QAAqB;IAflD;IAcgB;IAEV,gBAAE,MAAM;IACC,yBAAE,eAAe;IACzB,iBAAE,OAAO","file":"stack_trace_mapper.ddc.js"}');
  // Exports:
  return {
    src__util__stack_trace_mapper: stack_trace_mapper$
  };
});

//# sourceMappingURL=stack_trace_mapper.ddc.js.map
