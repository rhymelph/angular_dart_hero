define(['dart_sdk', 'packages/http/http', 'packages/package_config/packages_file', 'packages/path/path', 'packages/collection/collection'], function(dart_sdk, packages__http__http, packages__package_config__packages_file, packages__path__path, packages__collection__collection) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const http = packages__http__http.http;
  const packages_file = packages__package_config__packages_file.packages_file;
  const path = packages__path__path.path;
  const functions = packages__collection__collection.src__functions;
  const current_isolate_resolver_stub = Object.create(dart.library);
  const package_resolver = Object.create(dart.library);
  const sync_package_resolver = Object.create(dart.library);
  const utils = Object.create(dart.library);
  const utils_isolate_stub = Object.create(dart.library);
  const utils_io_stub = Object.create(dart.library);
  const package_root_resolver = Object.create(dart.library);
  const async_package_resolver = Object.create(dart.library);
  const package_config_resolver = Object.create(dart.library);
  const no_package_resolver = Object.create(dart.library);
  const package_resolver$ = Object.create(dart.library);
  const $toString = dartx.toString;
  const $isEmpty = dartx.isEmpty;
  const $last = dartx.last;
  const $toList = dartx.toList;
  const $add = dartx.add;
  const $contains = dartx.contains;
  const $first = dartx.first;
  const $_get = dartx._get;
  const $removeLast = dartx.removeLast;
  const $length = dartx.length;
  const $skip = dartx.skip;
  const $addAll = dartx.addAll;
  const $keys = dartx.keys;
  let MapOfString$Uri = () => (MapOfString$Uri = dart.constFn(core.Map$(core.String, core.Uri)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let UnmodifiableMapViewOfString$Uri = () => (UnmodifiableMapViewOfString$Uri = dart.constFn(collection.UnmodifiableMapView$(core.String, core.Uri)))();
  let dynamicAnddynamicToUri = () => (dynamicAnddynamicToUri = dart.constFn(dart.fnType(core.Uri, [dart.dynamic, dart.dynamic])))();
  const CT = Object.create(null);
  current_isolate_resolver_stub.currentIsolateResolver = function currentIsolateResolver() {
    return dart.throw(new core.UnsupportedError.new("No current isolate support on this platform"));
  };
  package_resolver.PackageResolver = class PackageResolver extends core.Object {
    static loadConfig(uri, opts) {
      let client = opts && 'client' in opts ? opts.client : null;
      return async.async(package_resolver.PackageResolver, function* loadConfig() {
        let resolver = (yield sync_package_resolver.SyncPackageResolver.loadConfig(uri, {client: client}));
        return resolver.asAsync;
      });
    }
    static config(packageConfigMap, opts) {
      let uri = opts && 'uri' in opts ? opts.uri : null;
      return new package_config_resolver.PackageConfigResolver.new(packageConfigMap, {uri: uri}).asAsync;
    }
    static root(packageRoot) {
      return new package_root_resolver.PackageRootResolver.new(packageRoot).asAsync;
    }
  };
  (package_resolver.PackageResolver[dart.mixinNew] = function() {
  }).prototype = package_resolver.PackageResolver.prototype;
  dart.addTypeTests(package_resolver.PackageResolver);
  dart.setLibraryUri(package_resolver.PackageResolver, "package:package_resolver/src/package_resolver.dart");
  dart.defineLazy(package_resolver.PackageResolver, {
    /*package_resolver.PackageResolver.current*/get current() {
      return current_isolate_resolver_stub.currentIsolateResolver();
    },
    /*package_resolver.PackageResolver.none*/get none() {
      return sync_package_resolver.SyncPackageResolver.none.asAsync;
    }
  });
  sync_package_resolver.SyncPackageResolver = class SyncPackageResolver extends core.Object {
    static loadConfig(uri, opts) {
      let client = opts && 'client' in opts ? opts.client : null;
      return async.async(sync_package_resolver.SyncPackageResolver, function* loadConfig() {
        uri = utils.asUri(uri, "uri");
        return new package_config_resolver.PackageConfigResolver.new(yield utils.loadConfigMap(core.Uri._check(uri), {client: client}), {uri: uri});
      });
    }
  };
  (sync_package_resolver.SyncPackageResolver[dart.mixinNew] = function() {
  }).prototype = sync_package_resolver.SyncPackageResolver.prototype;
  dart.addTypeTests(sync_package_resolver.SyncPackageResolver);
  dart.setLibraryUri(sync_package_resolver.SyncPackageResolver, "package:package_resolver/src/sync_package_resolver.dart");
  dart.defineLazy(sync_package_resolver.SyncPackageResolver, {
    /*sync_package_resolver.SyncPackageResolver.current*/get current() {
      return package_resolver.PackageResolver.current.asSync;
    },
    /*sync_package_resolver.SyncPackageResolver.none*/get none() {
      return new no_package_resolver.NoPackageResolver.new();
    }
  });
  utils.loadConfigMap = function loadConfigMap(uri, opts) {
    let client = opts && 'client' in opts ? opts.client : null;
    return async.async(MapOfString$Uri(), function* loadConfigMap() {
      let resolved = core.Uri.base.resolveUri(uri);
      let text = null;
      if (resolved.scheme === "http") {
        text = (yield client == null ? http.read(resolved) : client.read(resolved));
      } else if (resolved.scheme === "file") {
        text = (yield utils_io_stub.readFileAsString(resolved));
      } else if (resolved.scheme === "data") {
        text = resolved.data.contentAsString();
      } else if (resolved.scheme === "package") {
        return utils.loadConfigMap(yield utils_isolate_stub.resolvePackageUri(uri), {client: client});
      } else {
        dart.throw(new core.UnsupportedError.new("PackageInfo.loadConfig doesn't support URI scheme \"" + dart.str(uri.scheme) + ":\"."));
      }
      return packages_file.parse(convert.utf8.encode(core.String._check(text)), resolved);
    });
  };
  utils.asPackageUri = function asPackageUri(uri, name) {
    uri = utils.asUri(uri, name);
    if (!dart.equals(dart.dload(uri, 'scheme'), "package")) {
      dart.throw(new core.FormatException.new("Can only resolve a package: URI.", dart.toString(uri), 0));
    } else if (dart.dtest(dart.dload(dart.dload(uri, 'pathSegments'), 'isEmpty'))) {
      dart.throw(new core.FormatException.new("Expected package name.", dart.toString(uri), "package:".length));
    }
    return core.Uri._check(uri);
  };
  utils.asUri = function asUri(uri, name) {
    if (core.Uri.is(uri)) return uri;
    if (typeof uri == 'string') return core.Uri.parse(uri);
    dart.throw(new core.ArgumentError.value(uri, name, "Must be a String or a Uri."));
  };
  utils.ensureTrailingSlash = function ensureTrailingSlash(uri) {
    let t0;
    if (dart.test(uri.pathSegments[$isEmpty])) return uri.replace({path: "/"});
    if (uri.pathSegments[$last][$isEmpty]) return uri;
    return uri.replace({pathSegments: (t0 = uri.pathSegments[$toList](), t0[$add](""), t0)});
  };
  utils.packagePathForRoot = function packagePathForRoot($package, root) {
    return utils_io_stub.packagePathForRoot($package, root);
  };
  utils_isolate_stub.resolvePackageUri = function resolvePackageUri(packageUri) {
    return dart.throw(new core.UnsupportedError.new("May not use a package URI"));
  };
  utils_io_stub.readFileAsString = function readFileAsString(uri) {
    return dart.throw(new core.UnsupportedError.new("Reading files is only supported where dart:io is available."));
  };
  utils_io_stub.packagePathForRoot = function packagePathForRoot$($package, root) {
    return dart.throw(new core.UnsupportedError.new("Computing package paths from a root is only supported where dart:io is " + "available."));
  };
  const packageConfigMap = dart.privateName(package_root_resolver, "PackageRootResolver.packageConfigMap");
  const packageConfigUri = dart.privateName(package_root_resolver, "PackageRootResolver.packageConfigUri");
  const packageRoot$ = dart.privateName(package_root_resolver, "PackageRootResolver.packageRoot");
  package_root_resolver.PackageRootResolver = class PackageRootResolver extends core.Object {
    get packageConfigMap() {
      return this[packageConfigMap];
    }
    set packageConfigMap(value) {
      super.packageConfigMap = value;
    }
    get packageConfigUri() {
      return this[packageConfigUri];
    }
    set packageConfigUri(value) {
      super.packageConfigUri = value;
    }
    get packageRoot() {
      return this[packageRoot$];
    }
    set packageRoot(value) {
      super.packageRoot = value;
    }
    get asAsync() {
      return new async_package_resolver.AsyncPackageResolver.new(this);
    }
    get processArgument() {
      return "--package-root=" + dart.str(this.packageRoot);
    }
    resolveUri(packageUri) {
      packageUri = utils.asPackageUri(packageUri, "packageUri");
      if (dart.equals(dart.dload(dart.dload(packageUri, 'pathSegments'), 'length'), 1)) return null;
      return this.packageRoot.resolve(core.String._check(dart.dload(packageUri, 'path')));
    }
    urlFor($package, path) {
      if (path === void 0) path = null;
      let result = this.packageRoot.resolve(dart.str($package) + "/");
      return path == null ? result : result.resolve(path);
    }
    packageUriFor(url) {
      let packageRootString = dart.toString(this.packageRoot);
      url = dart.toString(utils.asUri(url, "url"));
      if (!dart.test(path.url.isWithin(packageRootString, core.String._check(url)))) return null;
      let relative = path.url.relative(core.String._check(url), {from: packageRootString});
      if (!relative[$contains]("/")) relative = dart.notNull(relative) + "/";
      return core.Uri.parse("package:" + dart.str(relative));
    }
    packagePath($package) {
      return utils.packagePathForRoot($package, this.packageRoot);
    }
  };
  (package_root_resolver.PackageRootResolver.new = function(packageRoot) {
    this[packageConfigMap] = null;
    this[packageConfigUri] = null;
    this[packageRoot$] = utils.ensureTrailingSlash(utils.asUri(packageRoot, "packageRoot"));
    ;
  }).prototype = package_root_resolver.PackageRootResolver.prototype;
  dart.addTypeTests(package_root_resolver.PackageRootResolver);
  package_root_resolver.PackageRootResolver[dart.implements] = () => [sync_package_resolver.SyncPackageResolver];
  dart.setMethodSignature(package_root_resolver.PackageRootResolver, () => ({
    __proto__: dart.getMethods(package_root_resolver.PackageRootResolver.__proto__),
    resolveUri: dart.fnType(core.Uri, [dart.dynamic]),
    urlFor: dart.fnType(core.Uri, [core.String], [core.String]),
    packageUriFor: dart.fnType(core.Uri, [dart.dynamic]),
    packagePath: dart.fnType(core.String, [core.String])
  }));
  dart.setGetterSignature(package_root_resolver.PackageRootResolver, () => ({
    __proto__: dart.getGetters(package_root_resolver.PackageRootResolver.__proto__),
    asAsync: package_resolver.PackageResolver,
    processArgument: core.String
  }));
  dart.setLibraryUri(package_root_resolver.PackageRootResolver, "package:package_resolver/src/package_root_resolver.dart");
  dart.setFieldSignature(package_root_resolver.PackageRootResolver, () => ({
    __proto__: dart.getFields(package_root_resolver.PackageRootResolver.__proto__),
    packageConfigMap: dart.finalFieldType(core.Map$(core.String, core.Uri)),
    packageConfigUri: dart.finalFieldType(core.Uri),
    packageRoot: dart.finalFieldType(core.Uri)
  }));
  const _inner$ = dart.privateName(async_package_resolver, "_inner");
  async_package_resolver.AsyncPackageResolver = class AsyncPackageResolver extends core.Object {
    get packageConfigMap() {
      return async.async(MapOfString$Uri(), (function* packageConfigMap() {
        return this[_inner$].packageConfigMap;
      }).bind(this));
    }
    get packageConfigUri() {
      return async.async(core.Uri, (function* packageConfigUri() {
        return this[_inner$].packageConfigUri;
      }).bind(this));
    }
    get packageRoot() {
      return async.async(core.Uri, (function* packageRoot() {
        return this[_inner$].packageRoot;
      }).bind(this));
    }
    get asSync() {
      return async.async(sync_package_resolver.SyncPackageResolver, (function* asSync() {
        return this[_inner$];
      }).bind(this));
    }
    get processArgument() {
      return async.async(core.String, (function* processArgument() {
        return this[_inner$].processArgument;
      }).bind(this));
    }
    resolveUri(packageUri) {
      return async.async(core.Uri, (function* resolveUri() {
        return this[_inner$].resolveUri(packageUri);
      }).bind(this));
    }
    urlFor($package, path) {
      if (path === void 0) path = null;
      return async.async(core.Uri, (function* urlFor() {
        return this[_inner$].urlFor($package, path);
      }).bind(this));
    }
    packageUriFor(url) {
      return async.async(core.Uri, (function* packageUriFor() {
        return this[_inner$].packageUriFor(url);
      }).bind(this));
    }
    packagePath($package) {
      return async.async(core.String, (function* packagePath() {
        return this[_inner$].packagePath($package);
      }).bind(this));
    }
  };
  (async_package_resolver.AsyncPackageResolver.new = function(_inner) {
    this[_inner$] = _inner;
    ;
  }).prototype = async_package_resolver.AsyncPackageResolver.prototype;
  dart.addTypeTests(async_package_resolver.AsyncPackageResolver);
  async_package_resolver.AsyncPackageResolver[dart.implements] = () => [package_resolver.PackageResolver];
  dart.setMethodSignature(async_package_resolver.AsyncPackageResolver, () => ({
    __proto__: dart.getMethods(async_package_resolver.AsyncPackageResolver.__proto__),
    resolveUri: dart.fnType(async.Future$(core.Uri), [dart.dynamic]),
    urlFor: dart.fnType(async.Future$(core.Uri), [core.String], [core.String]),
    packageUriFor: dart.fnType(async.Future$(core.Uri), [dart.dynamic]),
    packagePath: dart.fnType(async.Future$(core.String), [core.String])
  }));
  dart.setGetterSignature(async_package_resolver.AsyncPackageResolver, () => ({
    __proto__: dart.getGetters(async_package_resolver.AsyncPackageResolver.__proto__),
    packageConfigMap: async.Future$(core.Map$(core.String, core.Uri)),
    packageConfigUri: async.Future$(core.Uri),
    packageRoot: async.Future$(core.Uri),
    asSync: async.Future$(sync_package_resolver.SyncPackageResolver),
    processArgument: async.Future$(core.String)
  }));
  dart.setLibraryUri(async_package_resolver.AsyncPackageResolver, "package:package_resolver/src/async_package_resolver.dart");
  dart.setFieldSignature(async_package_resolver.AsyncPackageResolver, () => ({
    __proto__: dart.getFields(async_package_resolver.AsyncPackageResolver.__proto__),
    [_inner$]: dart.finalFieldType(sync_package_resolver.SyncPackageResolver)
  }));
  const _uri = dart.privateName(package_config_resolver, "_uri");
  const packageRoot = dart.privateName(package_config_resolver, "PackageConfigResolver.packageRoot");
  const packageConfigMap$ = dart.privateName(package_config_resolver, "PackageConfigResolver.packageConfigMap");
  package_config_resolver.PackageConfigResolver = class PackageConfigResolver extends core.Object {
    get packageRoot() {
      return this[packageRoot];
    }
    set packageRoot(value) {
      super.packageRoot = value;
    }
    get packageConfigMap() {
      return this[packageConfigMap$];
    }
    set packageConfigMap(value) {
      super.packageConfigMap = value;
    }
    get packageConfigUri() {
      if (this[_uri] != null) return this[_uri];
      let buffer = new core.StringBuffer.new();
      packages_file.write(buffer, this.packageConfigMap, {comment: ""});
      this[_uri] = core.UriData.fromString(buffer.toString(), {parameters: new (IdentityMapOfString$String()).from(["charset", "utf-8"])}).uri;
      return this[_uri];
    }
    get asAsync() {
      return new async_package_resolver.AsyncPackageResolver.new(this);
    }
    get processArgument() {
      return "--packages=" + dart.str(this.packageConfigUri);
    }
    static _normalizeMap(map) {
      return new (UnmodifiableMapViewOfString$Uri()).new(functions.mapMap(core.String, core.Uri, core.String, core.Uri, map, {value: dart.fn((_, uri) => utils.ensureTrailingSlash(core.Uri._check(uri)), dynamicAnddynamicToUri())}));
    }
    resolveUri(packageUri) {
      let t0;
      let uri = utils.asPackageUri(packageUri, "packageUri");
      let baseUri = this.packageConfigMap[$_get](uri.pathSegments[$first]);
      if (baseUri == null) return null;
      let segments = (t0 = baseUri.pathSegments[$toList](), t0[$removeLast](), t0);
      if (uri.pathSegments[$length] === 1) return null;
      segments[$addAll](uri.pathSegments[$skip](1));
      return baseUri.replace({pathSegments: segments});
    }
    urlFor($package, path) {
      if (path === void 0) path = null;
      let baseUri = this.packageConfigMap[$_get]($package);
      if (baseUri == null) return null;
      if (path == null) return baseUri;
      return baseUri.resolve(path);
    }
    packageUriFor(url) {
      url = dart.toString(utils.asUri(url, "url"));
      let nested = path.url.join(core.String._check(url), "_");
      for (let $package of this.packageConfigMap[$keys]) {
        let base = dart.toString(this.packageConfigMap[$_get]($package));
        if (!dart.test(path.url.isWithin(base, nested))) continue;
        let relative = path.url.relative(core.String._check(url), {from: base});
        if (relative === ".") relative = "";
        return core.Uri.parse("package:" + dart.str($package) + "/" + dart.str(relative));
      }
      return null;
    }
    packagePath($package) {
      let lib = this.packageConfigMap[$_get]($package);
      if (lib == null) return null;
      if (lib.scheme !== "file") return null;
      return path.dirname(path.fromUri(lib));
    }
  };
  (package_config_resolver.PackageConfigResolver.new = function(packageConfigMap, opts) {
    let uri = opts && 'uri' in opts ? opts.uri : null;
    this[packageRoot] = null;
    this[packageConfigMap$] = package_config_resolver.PackageConfigResolver._normalizeMap(packageConfigMap);
    this[_uri] = uri == null ? null : utils.asUri(uri, "uri");
    ;
  }).prototype = package_config_resolver.PackageConfigResolver.prototype;
  dart.addTypeTests(package_config_resolver.PackageConfigResolver);
  package_config_resolver.PackageConfigResolver[dart.implements] = () => [sync_package_resolver.SyncPackageResolver];
  dart.setMethodSignature(package_config_resolver.PackageConfigResolver, () => ({
    __proto__: dart.getMethods(package_config_resolver.PackageConfigResolver.__proto__),
    resolveUri: dart.fnType(core.Uri, [dart.dynamic]),
    urlFor: dart.fnType(core.Uri, [core.String], [core.String]),
    packageUriFor: dart.fnType(core.Uri, [dart.dynamic]),
    packagePath: dart.fnType(core.String, [core.String])
  }));
  dart.setGetterSignature(package_config_resolver.PackageConfigResolver, () => ({
    __proto__: dart.getGetters(package_config_resolver.PackageConfigResolver.__proto__),
    packageConfigUri: core.Uri,
    asAsync: package_resolver.PackageResolver,
    processArgument: core.String
  }));
  dart.setLibraryUri(package_config_resolver.PackageConfigResolver, "package:package_resolver/src/package_config_resolver.dart");
  dart.setFieldSignature(package_config_resolver.PackageConfigResolver, () => ({
    __proto__: dart.getFields(package_config_resolver.PackageConfigResolver.__proto__),
    packageRoot: dart.finalFieldType(core.Uri),
    packageConfigMap: dart.finalFieldType(core.Map$(core.String, core.Uri)),
    [_uri]: dart.fieldType(core.Uri)
  }));
  no_package_resolver.NoPackageResolver = class NoPackageResolver extends core.Object {
    get packageConfigMap() {
      return null;
    }
    get packageConfigUri() {
      return null;
    }
    get packageRoot() {
      return null;
    }
    get processArgument() {
      return null;
    }
    get asAsync() {
      return new async_package_resolver.AsyncPackageResolver.new(this);
    }
    resolveUri(packageUri) {
      utils.asPackageUri(packageUri, "packageUri");
      return null;
    }
    urlFor($package, path) {
      if (path === void 0) path = null;
      return null;
    }
    packageUriFor(url) {
      utils.asUri(url, "url");
      return null;
    }
    packagePath($package) {
      return null;
    }
  };
  (no_package_resolver.NoPackageResolver.new = function() {
    ;
  }).prototype = no_package_resolver.NoPackageResolver.prototype;
  dart.addTypeTests(no_package_resolver.NoPackageResolver);
  no_package_resolver.NoPackageResolver[dart.implements] = () => [sync_package_resolver.SyncPackageResolver];
  dart.setMethodSignature(no_package_resolver.NoPackageResolver, () => ({
    __proto__: dart.getMethods(no_package_resolver.NoPackageResolver.__proto__),
    resolveUri: dart.fnType(core.Uri, [dart.dynamic]),
    urlFor: dart.fnType(core.Uri, [core.String], [core.String]),
    packageUriFor: dart.fnType(core.Uri, [dart.dynamic]),
    packagePath: dart.fnType(core.String, [core.String])
  }));
  dart.setGetterSignature(no_package_resolver.NoPackageResolver, () => ({
    __proto__: dart.getGetters(no_package_resolver.NoPackageResolver.__proto__),
    packageConfigMap: core.Map$(core.String, core.Uri),
    packageConfigUri: core.Uri,
    packageRoot: core.Uri,
    processArgument: core.String,
    asAsync: package_resolver.PackageResolver
  }));
  dart.setLibraryUri(no_package_resolver.NoPackageResolver, "package:package_resolver/src/no_package_resolver.dart");
  dart.trackLibraries("packages/package_resolver/package_resolver", {
    "package:package_resolver/src/current_isolate_resolver_stub.dart": current_isolate_resolver_stub,
    "package:package_resolver/src/package_resolver.dart": package_resolver,
    "package:package_resolver/src/sync_package_resolver.dart": sync_package_resolver,
    "package:package_resolver/src/utils.dart": utils,
    "package:package_resolver/src/utils_isolate_stub.dart": utils_isolate_stub,
    "package:package_resolver/src/utils_io_stub.dart": utils_io_stub,
    "package:package_resolver/src/package_root_resolver.dart": package_root_resolver,
    "package:package_resolver/src/async_package_resolver.dart": async_package_resolver,
    "package:package_resolver/src/package_config_resolver.dart": package_config_resolver,
    "package:package_resolver/src/no_package_resolver.dart": no_package_resolver,
    "package:package_resolver/package_resolver.dart": package_resolver$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/current_isolate_resolver_stub.dart","src/package_resolver.dart","src/sync_package_resolver.dart","src/utils.dart","src/utils_isolate_stub.dart","src/utils_io_stub.dart","src/package_root_resolver.dart","src/async_package_resolver.dart","src/package_config_resolver.dart","src/no_package_resolver.dart"],"names":[],"mappings":"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","file":"package_resolver.ddc.js"}');
  // Exports:
  return {
    src__current_isolate_resolver_stub: current_isolate_resolver_stub,
    src__package_resolver: package_resolver,
    src__sync_package_resolver: sync_package_resolver,
    src__utils: utils,
    src__utils_isolate_stub: utils_isolate_stub,
    src__utils_io_stub: utils_io_stub,
    src__package_root_resolver: package_root_resolver,
    src__async_package_resolver: async_package_resolver,
    src__package_config_resolver: package_config_resolver,
    src__no_package_resolver: no_package_resolver,
    package_resolver: package_resolver$
  };
});

//# sourceMappingURL=package_resolver.ddc.js.map
