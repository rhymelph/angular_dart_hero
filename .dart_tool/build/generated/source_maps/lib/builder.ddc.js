define(['dart_sdk', 'packages/source_maps/src/source_map_span', 'packages/source_span/source_span'], function(dart_sdk, packages__source_maps__src__source_map_span, packages__source_span__source_span) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const source_map_span = packages__source_maps__src__source_map_span.src__source_map_span;
  const vlq = packages__source_maps__src__source_map_span.src__vlq;
  const utils = packages__source_maps__src__source_map_span.src__utils;
  const location$ = packages__source_span__source_span.src__location;
  const file = packages__source_span__source_span.src__file;
  const span = packages__source_span__source_span.src__span;
  const parser = Object.create(dart.library);
  const builder = Object.create(dart.library);
  const $add = dartx.add;
  const $_get = dartx._get;
  const $length = dartx.length;
  const $runtimeType = dartx.runtimeType;
  const $_set = dartx._set;
  const $values = dartx.values;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $containsKey = dartx.containsKey;
  const $codeUnitAt = dartx.codeUnitAt;
  const $substring = dartx.substring;
  const $contains = dartx.contains;
  const $isEmpty = dartx.isEmpty;
  const $forEach = dartx.forEach;
  const $sort = dartx.sort;
  const $toString = dartx.toString;
  const $putIfAbsent = dartx.putIfAbsent;
  const $keys = dartx.keys;
  const $last = dartx.last;
  const $compareTo = dartx.compareTo;
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let JSArrayOfMapping = () => (JSArrayOfMapping = dart.constFn(_interceptors.JSArray$(parser.Mapping)))();
  let IdentityMapOfString$SingleMapping = () => (IdentityMapOfString$SingleMapping = dart.constFn(_js_helper.IdentityMap$(core.String, parser.SingleMapping)))();
  let SingleMappingToMap = () => (SingleMappingToMap = dart.constFn(dart.fnType(core.Map, [parser.SingleMapping])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let ListOfSourceFile = () => (ListOfSourceFile = dart.constFn(core.List$(file.SourceFile)))();
  let JSArrayOfTargetLineEntry = () => (JSArrayOfTargetLineEntry = dart.constFn(_interceptors.JSArray$(parser.TargetLineEntry)))();
  let JSArrayOfTargetEntry = () => (JSArrayOfTargetEntry = dart.constFn(_interceptors.JSArray$(parser.TargetEntry)))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let IdentityMapOfString$int = () => (IdentityMapOfString$int = dart.constFn(_js_helper.IdentityMap$(core.String, core.int)))();
  let IdentityMapOfint$SourceFile = () => (IdentityMapOfint$SourceFile = dart.constFn(_js_helper.IdentityMap$(core.int, file.SourceFile)))();
  let VoidToint = () => (VoidToint = dart.constFn(dart.fnType(core.int, [])))();
  let VoidToSourceFile = () => (VoidToSourceFile = dart.constFn(dart.fnType(file.SourceFile, [])))();
  let intToSourceFile = () => (intToSourceFile = dart.constFn(dart.fnType(file.SourceFile, [core.int])))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let SourceFileToString = () => (SourceFileToString = dart.constFn(dart.fnType(core.String, [file.SourceFile])))();
  let StringAnddynamicTodynamic = () => (StringAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.String, dart.dynamic])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let JSArrayOfEntry = () => (JSArrayOfEntry = dart.constFn(_interceptors.JSArray$(builder.Entry)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], dart.dynamic);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: parser._TokenKind.prototype,
        [isEof$]: false,
        [isNewSegment$]: false,
        [isNewLine$]: true
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: parser._TokenKind.prototype,
        [isEof$]: false,
        [isNewSegment$]: true,
        [isNewLine$]: false
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: parser._TokenKind.prototype,
        [isEof$]: true,
        [isNewSegment$]: false,
        [isNewLine$]: false
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: parser._TokenKind.prototype,
        [isEof$]: false,
        [isNewSegment$]: false,
        [isNewLine$]: false
      });
    }
  });
  parser.Mapping = class Mapping extends core.Object {
    spanForLocation(location, opts) {
      let t0;
      let files = opts && 'files' in opts ? opts.files : null;
      return this.spanFor(location.line, location.column, {uri: (t0 = location.sourceUrl, t0 == null ? null : dart.toString(t0)), files: files});
    }
  };
  (parser.Mapping.new = function() {
    ;
  }).prototype = parser.Mapping.prototype;
  dart.addTypeTests(parser.Mapping);
  dart.setMethodSignature(parser.Mapping, () => ({
    __proto__: dart.getMethods(parser.Mapping.__proto__),
    spanForLocation: dart.fnType(source_map_span.SourceMapSpan, [location$.SourceLocation], {files: core.Map$(core.String, file.SourceFile)}, {})
  }));
  dart.setLibraryUri(parser.Mapping, "package:source_maps/parser.dart");
  const _lineStart = dart.privateName(parser, "_lineStart");
  const _columnStart = dart.privateName(parser, "_columnStart");
  const _maps = dart.privateName(parser, "_maps");
  const _indexFor = dart.privateName(parser, "_indexFor");
  parser.MultiSectionMapping = class MultiSectionMapping extends parser.Mapping {
    [_indexFor](line, column) {
      for (let i = 0; i < dart.notNull(this[_lineStart][$length]); i = i + 1) {
        if (dart.dtest(dart.dsend(line, '<', [this[_lineStart][$_get](i)]))) return i - 1;
        if (dart.equals(line, this[_lineStart][$_get](i)) && dart.dtest(dart.dsend(column, '<', [this[_columnStart][$_get](i)]))) return i - 1;
      }
      return dart.notNull(this[_lineStart][$length]) - 1;
    }
    spanFor(line, column, opts) {
      let files = opts && 'files' in opts ? opts.files : null;
      let uri = opts && 'uri' in opts ? opts.uri : null;
      let index = this[_indexFor](line, column);
      return this[_maps][$_get](index).spanFor(dart.notNull(line) - dart.notNull(this[_lineStart][$_get](index)), dart.notNull(column) - dart.notNull(this[_columnStart][$_get](index)), {files: files});
    }
    toString() {
      let t0;
      let buff = new core.StringBuffer.new(dart.str(this[$runtimeType]) + " : [");
      for (let i = 0; i < dart.notNull(this[_lineStart][$length]); i = i + 1) {
        t0 = buff;
        t0.write("(");
        t0.write(this[_lineStart][$_get](i));
        t0.write(",");
        t0.write(this[_columnStart][$_get](i));
        t0.write(":");
        t0.write(this[_maps][$_get](i));
        t0.write(")");
        t0;
      }
      buff.write("]");
      return buff.toString();
    }
  };
  (parser.MultiSectionMapping.fromJson = function(sections, otherMaps, opts) {
    let mapUrl = opts && 'mapUrl' in opts ? opts.mapUrl : null;
    this[_lineStart] = JSArrayOfint().of([]);
    this[_columnStart] = JSArrayOfint().of([]);
    this[_maps] = JSArrayOfMapping().of([]);
    for (let section of sections) {
      let offset = dart.dsend(section, '_get', ["offset"]);
      if (offset == null) dart.throw(new core.FormatException.new("section missing offset"));
      let line = dart.dsend(dart.dsend(section, '_get', ["offset"]), '_get', ["line"]);
      if (line == null) dart.throw(new core.FormatException.new("offset missing line"));
      let column = dart.dsend(dart.dsend(section, '_get', ["offset"]), '_get', ["column"]);
      if (column == null) dart.throw(new core.FormatException.new("offset missing column"));
      this[_lineStart][$add](core.int._check(line));
      this[_columnStart][$add](core.int._check(column));
      let url = dart.dsend(section, '_get', ["url"]);
      let map = dart.dsend(section, '_get', ["map"]);
      if (url != null && map != null) {
        dart.throw(new core.FormatException.new("section can't use both url and map entries"));
      } else if (url != null) {
        if (otherMaps == null || otherMaps[$_get](url) == null) {
          dart.throw(new core.FormatException.new("section contains refers to " + dart.str(url) + ", but no map was " + "given for it. Make sure a map is passed in \"otherMaps\""));
        }
        this[_maps][$add](parser.parseJson(otherMaps[$_get](url), {otherMaps: otherMaps, mapUrl: url}));
      } else if (map != null) {
        this[_maps][$add](parser.parseJson(core.Map._check(map), {otherMaps: otherMaps, mapUrl: mapUrl}));
      } else {
        dart.throw(new core.FormatException.new("section missing url or map"));
      }
    }
    if (this[_lineStart][$length] === 0) {
      dart.throw(new core.FormatException.new("expected at least one section"));
    }
  }).prototype = parser.MultiSectionMapping.prototype;
  dart.addTypeTests(parser.MultiSectionMapping);
  dart.setMethodSignature(parser.MultiSectionMapping, () => ({
    __proto__: dart.getMethods(parser.MultiSectionMapping.__proto__),
    [_indexFor]: dart.fnType(core.int, [dart.dynamic, dart.dynamic]),
    spanFor: dart.fnType(source_map_span.SourceMapSpan, [core.int, core.int], {files: core.Map$(core.String, file.SourceFile), uri: core.String}, {})
  }));
  dart.setLibraryUri(parser.MultiSectionMapping, "package:source_maps/parser.dart");
  dart.setFieldSignature(parser.MultiSectionMapping, () => ({
    __proto__: dart.getFields(parser.MultiSectionMapping.__proto__),
    [_lineStart]: dart.finalFieldType(core.List$(core.int)),
    [_columnStart]: dart.finalFieldType(core.List$(core.int)),
    [_maps]: dart.finalFieldType(core.List$(parser.Mapping))
  }));
  dart.defineExtensionMethods(parser.MultiSectionMapping, ['toString']);
  const _mappings = dart.privateName(parser, "_mappings");
  parser.MappingBundle = class MappingBundle extends parser.Mapping {
    addMapping(mapping) {
      this[_mappings][$_set](mapping.targetUrl, mapping);
    }
    toJson() {
      return this[_mappings][$values][$map](core.Map, dart.fn(v => v.toJson(), SingleMappingToMap()))[$toList]();
    }
    toString() {
      let buff = new core.StringBuffer.new();
      for (let map of this[_mappings][$values]) {
        buff.write(dart.toString(map));
      }
      return buff.toString();
    }
    containsMapping(url) {
      return this[_mappings][$containsKey](url);
    }
    spanFor(line, column, opts) {
      let files = opts && 'files' in opts ? opts.files : null;
      let uri = opts && 'uri' in opts ? opts.uri : null;
      if (uri == null) {
        dart.throw(new core.ArgumentError.notNull("uri"));
      }
      let onBoundary = true;
      let separatorCodeUnits = JSArrayOfint().of(["/"[$codeUnitAt](0), ":"[$codeUnitAt](0)]);
      for (let i = 0; i < uri.length; i = i + 1) {
        if (dart.test(onBoundary)) {
          let candidate = uri[$substring](i);
          if (dart.test(this[_mappings][$containsKey](candidate))) {
            return this[_mappings][$_get](candidate).spanFor(line, column, {files: files, uri: candidate});
          }
        }
        onBoundary = separatorCodeUnits[$contains](uri[$codeUnitAt](i));
      }
      let offset = dart.notNull(line) * 1000000 + dart.notNull(column);
      let location = new location$.SourceLocation.new(offset, {line: line, column: column, sourceUrl: core.Uri.parse(uri)});
      return new source_map_span.SourceMapSpan.new(location, location, "");
    }
  };
  (parser.MappingBundle.new = function() {
    this[_mappings] = new (IdentityMapOfString$SingleMapping()).new();
  }).prototype = parser.MappingBundle.prototype;
  (parser.MappingBundle.fromJson = function(json, opts) {
    let mapUrl = opts && 'mapUrl' in opts ? opts.mapUrl : null;
    this[_mappings] = new (IdentityMapOfString$SingleMapping()).new();
    for (let map of json) {
      this.addMapping(parser.SingleMapping.as(parser.parseJson(core.Map._check(map), {mapUrl: mapUrl})));
    }
  }).prototype = parser.MappingBundle.prototype;
  dart.addTypeTests(parser.MappingBundle);
  dart.setMethodSignature(parser.MappingBundle, () => ({
    __proto__: dart.getMethods(parser.MappingBundle.__proto__),
    addMapping: dart.fnType(dart.dynamic, [parser.SingleMapping]),
    toJson: dart.fnType(core.List, []),
    containsMapping: dart.fnType(core.bool, [core.String]),
    spanFor: dart.fnType(source_map_span.SourceMapSpan, [core.int, core.int], {files: core.Map$(core.String, file.SourceFile), uri: core.String}, {})
  }));
  dart.setLibraryUri(parser.MappingBundle, "package:source_maps/parser.dart");
  dart.setFieldSignature(parser.MappingBundle, () => ({
    __proto__: dart.getFields(parser.MappingBundle.__proto__),
    [_mappings]: dart.fieldType(core.Map$(core.String, parser.SingleMapping))
  }));
  dart.defineExtensionMethods(parser.MappingBundle, ['toString']);
  const _mapUrl = dart.privateName(parser, "_mapUrl");
  let C0;
  const _consumeNewLine = dart.privateName(parser, "_consumeNewLine");
  const _segmentError = dart.privateName(parser, "_segmentError");
  const _consumeValue = dart.privateName(parser, "_consumeValue");
  const _consumeNewSegment = dart.privateName(parser, "_consumeNewSegment");
  const _findLine = dart.privateName(parser, "_findLine");
  const _findColumn = dart.privateName(parser, "_findColumn");
  const urls$ = dart.privateName(parser, "SingleMapping.urls");
  const names$ = dart.privateName(parser, "SingleMapping.names");
  const files$ = dart.privateName(parser, "SingleMapping.files");
  const lines$ = dart.privateName(parser, "SingleMapping.lines");
  const targetUrl$ = dart.privateName(parser, "SingleMapping.targetUrl");
  const sourceRoot = dart.privateName(parser, "SingleMapping.sourceRoot");
  const extensions = dart.privateName(parser, "SingleMapping.extensions");
  parser.SingleMapping = class SingleMapping extends parser.Mapping {
    get urls() {
      return this[urls$];
    }
    set urls(value) {
      super.urls = value;
    }
    get names() {
      return this[names$];
    }
    set names(value) {
      super.names = value;
    }
    get files() {
      return this[files$];
    }
    set files(value) {
      super.files = value;
    }
    get lines() {
      return this[lines$];
    }
    set lines(value) {
      super.lines = value;
    }
    get targetUrl() {
      return this[targetUrl$];
    }
    set targetUrl(value) {
      this[targetUrl$] = value;
    }
    get sourceRoot() {
      return this[sourceRoot];
    }
    set sourceRoot(value) {
      this[sourceRoot] = value;
    }
    get extensions() {
      return this[extensions];
    }
    set extensions(value) {
      super.extensions = value;
    }
    static fromEntries(entries, fileUrl) {
      let t0;
      if (fileUrl === void 0) fileUrl = null;
      let sourceEntries = (t0 = core.List.from(entries), t0[$sort](), t0);
      let lines = JSArrayOfTargetLineEntry().of([]);
      let urls = new (IdentityMapOfString$int()).new();
      let names = new (IdentityMapOfString$int()).new();
      let files = new (IdentityMapOfint$SourceFile()).new();
      let lineNum = null;
      let targetEntries = null;
      for (let sourceEntry of sourceEntries) {
        if (lineNum == null || dart.dtest(dart.dsend(dart.dload(dart.dload(sourceEntry, 'target'), 'line'), '>', [lineNum]))) {
          lineNum = dart.dload(dart.dload(sourceEntry, 'target'), 'line');
          targetEntries = JSArrayOfTargetEntry().of([]);
          lines[$add](new parser.TargetLineEntry.new(core.int._check(lineNum), targetEntries));
        }
        if (dart.dload(sourceEntry, 'source') == null) {
          targetEntries[$add](new parser.TargetEntry.new(core.int._check(dart.dload(dart.dload(sourceEntry, 'target'), 'column'))));
        } else {
          let sourceUrl = dart.dload(dart.dload(sourceEntry, 'source'), 'sourceUrl');
          let urlId = urls[$putIfAbsent](sourceUrl == null ? "" : dart.toString(sourceUrl), dart.fn(() => urls[$length], VoidToint()));
          if (file.FileLocation.is(dart.dload(sourceEntry, 'source'))) {
            files[$putIfAbsent](urlId, dart.fn(() => file.FileLocation.as(dart.dload(sourceEntry, 'source')).file, VoidToSourceFile()));
          }
          let srcNameId = dart.dload(sourceEntry, 'identifierName') == null ? null : names[$putIfAbsent](core.String._check(dart.dload(sourceEntry, 'identifierName')), dart.fn(() => names[$length], VoidToint()));
          targetEntries[$add](new parser.TargetEntry.new(core.int._check(dart.dload(dart.dload(sourceEntry, 'target'), 'column')), urlId, core.int._check(dart.dload(dart.dload(sourceEntry, 'source'), 'line')), core.int._check(dart.dload(dart.dload(sourceEntry, 'source'), 'column')), srcNameId));
        }
      }
      return new parser.SingleMapping.__(fileUrl, urls[$values][$map](file.SourceFile, dart.fn(i => files[$_get](i), intToSourceFile()))[$toList](), urls[$keys][$toList](), names[$keys][$toList](), lines);
    }
    toJson(opts) {
      let includeSourceContents = opts && 'includeSourceContents' in opts ? opts.includeSourceContents : false;
      let buff = new core.StringBuffer.new();
      let line = 0;
      let column = 0;
      let srcLine = 0;
      let srcColumn = 0;
      let srcUrlId = 0;
      let srcNameId = 0;
      let first = true;
      for (let entry of this.lines) {
        let nextLine = entry.line;
        if (dart.notNull(nextLine) > dart.notNull(line)) {
          for (let i = line; dart.notNull(i) < dart.notNull(nextLine); i = dart.notNull(i) + 1) {
            buff.write(";");
          }
          line = nextLine;
          column = 0;
          first = true;
        }
        for (let segment of entry.entries) {
          if (!first) buff.write(",");
          first = false;
          column = parser.SingleMapping._append(buff, column, segment.column);
          let newUrlId = segment.sourceUrlId;
          if (newUrlId == null) continue;
          srcUrlId = parser.SingleMapping._append(buff, srcUrlId, newUrlId);
          srcLine = parser.SingleMapping._append(buff, srcLine, segment.sourceLine);
          srcColumn = parser.SingleMapping._append(buff, srcColumn, segment.sourceColumn);
          if (segment.sourceNameId == null) continue;
          srcNameId = parser.SingleMapping._append(buff, srcNameId, segment.sourceNameId);
        }
      }
      let result = new (IdentityMapOfString$Object()).from(["version", 3, "sourceRoot", this.sourceRoot == null ? "" : this.sourceRoot, "sources", this.urls, "names", this.names, "mappings", buff.toString()]);
      if (this.targetUrl != null) result[$_set]("file", this.targetUrl);
      if (dart.test(includeSourceContents)) {
        result[$_set]("sourcesContent", this.files[$map](core.String, dart.fn(file => {
          let t0;
          t0 = file;
          return t0 == null ? null : t0.getText(0);
        }, SourceFileToString()))[$toList]());
      }
      this.extensions[$forEach](dart.fn((name, value) => {
        let t2, t1, t0;
        t0 = result;
        t1 = name;
        t2 = value;
        t0[$_set](t1, t2);
        return t2;
      }, StringAnddynamicTodynamic()));
      return result;
    }
    static _append(buff, oldValue, newValue) {
      buff.writeAll(vlq.encodeVlq(dart.notNull(newValue) - dart.notNull(oldValue)));
      return newValue;
    }
    [_segmentError](seen, line) {
      return new core.StateError.new("Invalid entry in sourcemap, expected 1, 4, or 5" + " values, but got " + dart.str(seen) + ".\ntargeturl: " + dart.str(this.targetUrl) + ", line: " + dart.str(line));
    }
    [_findLine](line) {
      let index = utils.binarySearch(this.lines, dart.fn(e => core.bool._check(dart.dsend(dart.dload(e, 'line'), '>', [line])), dynamicTobool()));
      return dart.notNull(index) <= 0 ? null : this.lines[$_get](dart.notNull(index) - 1);
    }
    [_findColumn](line, column, lineEntry) {
      if (lineEntry == null || lineEntry.entries[$length] === 0) return null;
      if (lineEntry.line != line) return lineEntry.entries[$last];
      let entries = lineEntry.entries;
      let index = utils.binarySearch(entries, dart.fn(e => core.bool._check(dart.dsend(dart.dload(e, 'column'), '>', [column])), dynamicTobool()));
      return dart.notNull(index) <= 0 ? null : entries[$_get](dart.notNull(index) - 1);
    }
    spanFor(line, column, opts) {
      let files = opts && 'files' in opts ? opts.files : null;
      let uri = opts && 'uri' in opts ? opts.uri : null;
      let entry = this[_findColumn](line, column, this[_findLine](line));
      if (entry == null || entry.sourceUrlId == null) return null;
      let url = this.urls[$_get](entry.sourceUrlId);
      if (this.sourceRoot != null) {
        url = dart.str(this.sourceRoot) + dart.str(url);
      }
      if (files != null && files[$_get](url) != null) {
        let file = files[$_get](url);
        let start = file.getOffset(entry.sourceLine, entry.sourceColumn);
        if (entry.sourceNameId != null) {
          let text = this.names[$_get](entry.sourceNameId);
          return new source_map_span.SourceMapFileSpan.new(files[$_get](url).span(start, dart.notNull(start) + text.length), {isIdentifier: true});
        } else {
          return new source_map_span.SourceMapFileSpan.new(files[$_get](url).location(start).pointSpan());
        }
      } else {
        let start = new location$.SourceLocation.new(0, {sourceUrl: this[_mapUrl] == null ? url : this[_mapUrl].resolve(url), line: entry.sourceLine, column: entry.sourceColumn});
        if (entry.sourceNameId != null) {
          return new source_map_span.SourceMapSpan.identifier(start, this.names[$_get](entry.sourceNameId));
        } else {
          return new source_map_span.SourceMapSpan.new(start, start, "");
        }
      }
    }
    toString() {
      let t0;
      return (t0 = new core.StringBuffer.new(dart.str(this[$runtimeType]) + " : ["), t0.write("targetUrl: "), t0.write(this.targetUrl), t0.write(", sourceRoot: "), t0.write(this.sourceRoot), t0.write(", urls: "), t0.write(this.urls), t0.write(", names: "), t0.write(this.names), t0.write(", lines: "), t0.write(this.lines), t0.write("]"), t0).toString();
    }
    get debugString() {
      let t0, t0$, t0$0;
      let buff = new core.StringBuffer.new();
      for (let lineEntry of this.lines) {
        let line = lineEntry.line;
        for (let entry of lineEntry.entries) {
          t0 = buff;
          t0.write(this.targetUrl);
          t0.write(": ");
          t0.write(line);
          t0.write(":");
          t0.write(entry.column);
          t0;
          if (entry.sourceUrlId != null) {
            t0$ = buff;
            t0$.write("   -->   ");
            t0$.write(this.sourceRoot);
            t0$.write(this.urls[$_get](entry.sourceUrlId));
            t0$.write(": ");
            t0$.write(entry.sourceLine);
            t0$.write(":");
            t0$.write(entry.sourceColumn);
            t0$;
          }
          if (entry.sourceNameId != null) {
            t0$0 = buff;
            t0$0.write(" (");
            t0$0.write(this.names[$_get](entry.sourceNameId));
            t0$0.write(")");
            t0$0;
          }
          buff.write("\n");
        }
      }
      return buff.toString();
    }
  };
  (parser.SingleMapping.__ = function(targetUrl, files, urls, names, lines) {
    this[sourceRoot] = null;
    this[targetUrl$] = targetUrl;
    this[files$] = files;
    this[urls$] = urls;
    this[names$] = names;
    this[lines$] = lines;
    this[_mapUrl] = null;
    this[extensions] = new (IdentityMapOfString$dynamic()).new();
    ;
  }).prototype = parser.SingleMapping.prototype;
  (parser.SingleMapping.fromJson = function(map, opts) {
    let mapUrl = opts && 'mapUrl' in opts ? opts.mapUrl : null;
    this[targetUrl$] = core.String._check(map[$_get]("file"));
    this[urls$] = ListOfString().from(core.Iterable._check(map[$_get]("sources")));
    this[names$] = ListOfString().from(core.Iterable._check(map[$_get]("names")));
    this[files$] = ListOfSourceFile().new(core.int._check(dart.dload(map[$_get]("sources"), 'length')));
    this[sourceRoot] = core.String._check(map[$_get]("sourceRoot"));
    this[lines$] = JSArrayOfTargetLineEntry().of([]);
    this[_mapUrl] = core.Uri._check(typeof mapUrl == 'string' ? core.Uri.parse(mapUrl) : mapUrl);
    this[extensions] = new (IdentityMapOfString$dynamic()).new();
    let sourcesContent = map[$_get]("sourcesContent") == null ? C0 || CT.C0 : ListOfString().from(core.Iterable._check(map[$_get]("sourcesContent")));
    for (let i = 0; i < dart.notNull(this.urls[$length]) && i < dart.notNull(sourcesContent[$length]); i = i + 1) {
      let source = sourcesContent[$_get](i);
      if (source == null) continue;
      this.files[$_set](i, new file.SourceFile.fromString(core.String._check(source), {url: this.urls[$_get](i)}));
    }
    let line = 0;
    let column = 0;
    let srcUrlId = 0;
    let srcLine = 0;
    let srcColumn = 0;
    let srcNameId = 0;
    let tokenizer = new parser._MappingTokenizer.new(core.String._check(map[$_get]("mappings")));
    let entries = JSArrayOfTargetEntry().of([]);
    while (dart.test(tokenizer.hasTokens)) {
      if (dart.test(tokenizer.nextKind.isNewLine)) {
        if (!dart.test(entries[$isEmpty])) {
          this.lines[$add](new parser.TargetLineEntry.new(line, entries));
          entries = JSArrayOfTargetEntry().of([]);
        }
        line = line + 1;
        column = 0;
        tokenizer[_consumeNewLine]();
        continue;
      }
      if (dart.test(tokenizer.nextKind.isNewSegment)) dart.throw(this[_segmentError](0, line));
      column = column + dart.notNull(tokenizer[_consumeValue]());
      if (!dart.test(tokenizer.nextKind.isValue)) {
        entries[$add](new parser.TargetEntry.new(column));
      } else {
        srcUrlId = srcUrlId + dart.notNull(tokenizer[_consumeValue]());
        if (srcUrlId >= dart.notNull(this.urls[$length])) {
          dart.throw(new core.StateError.new("Invalid source url id. " + dart.str(this.targetUrl) + ", " + dart.str(line) + ", " + dart.str(srcUrlId)));
        }
        if (!dart.test(tokenizer.nextKind.isValue)) dart.throw(this[_segmentError](2, line));
        srcLine = srcLine + dart.notNull(tokenizer[_consumeValue]());
        if (!dart.test(tokenizer.nextKind.isValue)) dart.throw(this[_segmentError](3, line));
        srcColumn = srcColumn + dart.notNull(tokenizer[_consumeValue]());
        if (!dart.test(tokenizer.nextKind.isValue)) {
          entries[$add](new parser.TargetEntry.new(column, srcUrlId, srcLine, srcColumn));
        } else {
          srcNameId = srcNameId + dart.notNull(tokenizer[_consumeValue]());
          if (srcNameId >= dart.notNull(this.names[$length])) {
            dart.throw(new core.StateError.new("Invalid name id: " + dart.str(this.targetUrl) + ", " + dart.str(line) + ", " + dart.str(srcNameId)));
          }
          entries[$add](new parser.TargetEntry.new(column, srcUrlId, srcLine, srcColumn, srcNameId));
        }
      }
      if (dart.test(tokenizer.nextKind.isNewSegment)) tokenizer[_consumeNewSegment]();
    }
    if (!dart.test(entries[$isEmpty])) {
      this.lines[$add](new parser.TargetLineEntry.new(line, entries));
    }
    map[$forEach](dart.fn((name, value) => {
      if (dart.dtest(dart.dsend(name, 'startsWith', ["x_"]))) this.extensions[$_set](core.String._check(name), value);
    }, dynamicAnddynamicToNull()));
  }).prototype = parser.SingleMapping.prototype;
  dart.addTypeTests(parser.SingleMapping);
  dart.setMethodSignature(parser.SingleMapping, () => ({
    __proto__: dart.getMethods(parser.SingleMapping.__proto__),
    toJson: dart.fnType(core.Map, [], {includeSourceContents: core.bool}, {}),
    [_segmentError]: dart.fnType(dart.dynamic, [core.int, core.int]),
    [_findLine]: dart.fnType(parser.TargetLineEntry, [core.int]),
    [_findColumn]: dart.fnType(parser.TargetEntry, [core.int, core.int, parser.TargetLineEntry]),
    spanFor: dart.fnType(source_map_span.SourceMapSpan, [core.int, core.int], {files: core.Map$(core.String, file.SourceFile), uri: core.String}, {})
  }));
  dart.setGetterSignature(parser.SingleMapping, () => ({
    __proto__: dart.getGetters(parser.SingleMapping.__proto__),
    debugString: core.String
  }));
  dart.setLibraryUri(parser.SingleMapping, "package:source_maps/parser.dart");
  dart.setFieldSignature(parser.SingleMapping, () => ({
    __proto__: dart.getFields(parser.SingleMapping.__proto__),
    urls: dart.finalFieldType(core.List$(core.String)),
    names: dart.finalFieldType(core.List$(core.String)),
    files: dart.finalFieldType(core.List$(file.SourceFile)),
    lines: dart.finalFieldType(core.List$(parser.TargetLineEntry)),
    targetUrl: dart.fieldType(core.String),
    sourceRoot: dart.fieldType(core.String),
    [_mapUrl]: dart.finalFieldType(core.Uri),
    extensions: dart.finalFieldType(core.Map$(core.String, dart.dynamic))
  }));
  dart.defineExtensionMethods(parser.SingleMapping, ['toString']);
  const line$ = dart.privateName(parser, "TargetLineEntry.line");
  const entries$ = dart.privateName(parser, "TargetLineEntry.entries");
  parser.TargetLineEntry = class TargetLineEntry extends core.Object {
    get line() {
      return this[line$];
    }
    set line(value) {
      super.line = value;
    }
    get entries() {
      return this[entries$];
    }
    set entries(value) {
      this[entries$] = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + ": " + dart.str(this.line) + " " + dart.str(this.entries);
    }
  };
  (parser.TargetLineEntry.new = function(line, entries) {
    this[line$] = line;
    this[entries$] = entries;
    ;
  }).prototype = parser.TargetLineEntry.prototype;
  dart.addTypeTests(parser.TargetLineEntry);
  dart.setLibraryUri(parser.TargetLineEntry, "package:source_maps/parser.dart");
  dart.setFieldSignature(parser.TargetLineEntry, () => ({
    __proto__: dart.getFields(parser.TargetLineEntry.__proto__),
    line: dart.finalFieldType(core.int),
    entries: dart.fieldType(core.List$(parser.TargetEntry))
  }));
  dart.defineExtensionMethods(parser.TargetLineEntry, ['toString']);
  const column$ = dart.privateName(parser, "TargetEntry.column");
  const sourceUrlId$ = dart.privateName(parser, "TargetEntry.sourceUrlId");
  const sourceLine$ = dart.privateName(parser, "TargetEntry.sourceLine");
  const sourceColumn$ = dart.privateName(parser, "TargetEntry.sourceColumn");
  const sourceNameId$ = dart.privateName(parser, "TargetEntry.sourceNameId");
  parser.TargetEntry = class TargetEntry extends core.Object {
    get column() {
      return this[column$];
    }
    set column(value) {
      super.column = value;
    }
    get sourceUrlId() {
      return this[sourceUrlId$];
    }
    set sourceUrlId(value) {
      super.sourceUrlId = value;
    }
    get sourceLine() {
      return this[sourceLine$];
    }
    set sourceLine(value) {
      super.sourceLine = value;
    }
    get sourceColumn() {
      return this[sourceColumn$];
    }
    set sourceColumn(value) {
      super.sourceColumn = value;
    }
    get sourceNameId() {
      return this[sourceNameId$];
    }
    set sourceNameId(value) {
      super.sourceNameId = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + ": " + "(" + dart.str(this.column) + ", " + dart.str(this.sourceUrlId) + ", " + dart.str(this.sourceLine) + ", " + dart.str(this.sourceColumn) + ", " + dart.str(this.sourceNameId) + ")";
    }
  };
  (parser.TargetEntry.new = function(column, sourceUrlId, sourceLine, sourceColumn, sourceNameId) {
    if (sourceUrlId === void 0) sourceUrlId = null;
    if (sourceLine === void 0) sourceLine = null;
    if (sourceColumn === void 0) sourceColumn = null;
    if (sourceNameId === void 0) sourceNameId = null;
    this[column$] = column;
    this[sourceUrlId$] = sourceUrlId;
    this[sourceLine$] = sourceLine;
    this[sourceColumn$] = sourceColumn;
    this[sourceNameId$] = sourceNameId;
    ;
  }).prototype = parser.TargetEntry.prototype;
  dart.addTypeTests(parser.TargetEntry);
  dart.setLibraryUri(parser.TargetEntry, "package:source_maps/parser.dart");
  dart.setFieldSignature(parser.TargetEntry, () => ({
    __proto__: dart.getFields(parser.TargetEntry.__proto__),
    column: dart.finalFieldType(core.int),
    sourceUrlId: dart.finalFieldType(core.int),
    sourceLine: dart.finalFieldType(core.int),
    sourceColumn: dart.finalFieldType(core.int),
    sourceNameId: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(parser.TargetEntry, ['toString']);
  const _internal = dart.privateName(parser, "_internal");
  const _length = dart.privateName(parser, "_length");
  parser._MappingTokenizer = class _MappingTokenizer extends core.Object {
    moveNext() {
      return (this.index = dart.notNull(this.index) + 1) < dart.notNull(this[_length]);
    }
    get current() {
      return dart.notNull(this.index) >= 0 && dart.notNull(this.index) < dart.notNull(this[_length]) ? this[_internal][$_get](this.index) : null;
    }
    get hasTokens() {
      return dart.notNull(this.index) < dart.notNull(this[_length]) - 1 && dart.notNull(this[_length]) > 0;
    }
    get nextKind() {
      if (!dart.test(this.hasTokens)) return parser._TokenKind.EOF;
      let next = this[_internal][$_get](dart.notNull(this.index) + 1);
      if (next === ";") return parser._TokenKind.LINE;
      if (next === ",") return parser._TokenKind.SEGMENT;
      return parser._TokenKind.VALUE;
    }
    [_consumeValue]() {
      return vlq.decodeVlq(this);
    }
    [_consumeNewLine]() {
      this.index = dart.notNull(this.index) + 1;
    }
    [_consumeNewSegment]() {
      this.index = dart.notNull(this.index) + 1;
    }
    toString() {
      let buff = new core.StringBuffer.new();
      for (let i = 0; i < dart.notNull(this.index); i = i + 1) {
        buff.write(this[_internal][$_get](i));
      }
      buff.write("[31m");
      buff.write(this.current == null ? "" : this.current);
      buff.write("[0m");
      for (let i = dart.notNull(this.index) + 1; i < this[_internal].length; i = i + 1) {
        buff.write(this[_internal][$_get](i));
      }
      buff.write(" (" + dart.str(this.index) + ")");
      return buff.toString();
    }
  };
  (parser._MappingTokenizer.new = function(internal) {
    this.index = -1;
    this[_internal] = internal;
    this[_length] = internal.length;
    ;
  }).prototype = parser._MappingTokenizer.prototype;
  dart.addTypeTests(parser._MappingTokenizer);
  parser._MappingTokenizer[dart.implements] = () => [core.Iterator$(core.String)];
  dart.setMethodSignature(parser._MappingTokenizer, () => ({
    __proto__: dart.getMethods(parser._MappingTokenizer.__proto__),
    moveNext: dart.fnType(core.bool, []),
    [_consumeValue]: dart.fnType(core.int, []),
    [_consumeNewLine]: dart.fnType(dart.void, []),
    [_consumeNewSegment]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(parser._MappingTokenizer, () => ({
    __proto__: dart.getGetters(parser._MappingTokenizer.__proto__),
    current: core.String,
    hasTokens: core.bool,
    nextKind: parser._TokenKind
  }));
  dart.setLibraryUri(parser._MappingTokenizer, "package:source_maps/parser.dart");
  dart.setFieldSignature(parser._MappingTokenizer, () => ({
    __proto__: dart.getFields(parser._MappingTokenizer.__proto__),
    [_internal]: dart.finalFieldType(core.String),
    [_length]: dart.finalFieldType(core.int),
    index: dart.fieldType(core.int)
  }));
  dart.defineExtensionMethods(parser._MappingTokenizer, ['toString']);
  const isNewLine$ = dart.privateName(parser, "_TokenKind.isNewLine");
  const isNewSegment$ = dart.privateName(parser, "_TokenKind.isNewSegment");
  const isEof$ = dart.privateName(parser, "_TokenKind.isEof");
  let C1;
  let C2;
  let C3;
  let C4;
  parser._TokenKind = class _TokenKind extends core.Object {
    get isNewLine() {
      return this[isNewLine$];
    }
    set isNewLine(value) {
      super.isNewLine = value;
    }
    get isNewSegment() {
      return this[isNewSegment$];
    }
    set isNewSegment(value) {
      super.isNewSegment = value;
    }
    get isEof() {
      return this[isEof$];
    }
    set isEof(value) {
      super.isEof = value;
    }
    get isValue() {
      return !dart.test(this.isNewLine) && !dart.test(this.isNewSegment) && !dart.test(this.isEof);
    }
  };
  (parser._TokenKind.new = function(opts) {
    let isNewLine = opts && 'isNewLine' in opts ? opts.isNewLine : false;
    let isNewSegment = opts && 'isNewSegment' in opts ? opts.isNewSegment : false;
    let isEof = opts && 'isEof' in opts ? opts.isEof : false;
    this[isNewLine$] = isNewLine;
    this[isNewSegment$] = isNewSegment;
    this[isEof$] = isEof;
    ;
  }).prototype = parser._TokenKind.prototype;
  dart.addTypeTests(parser._TokenKind);
  dart.setGetterSignature(parser._TokenKind, () => ({
    __proto__: dart.getGetters(parser._TokenKind.__proto__),
    isValue: core.bool
  }));
  dart.setLibraryUri(parser._TokenKind, "package:source_maps/parser.dart");
  dart.setFieldSignature(parser._TokenKind, () => ({
    __proto__: dart.getFields(parser._TokenKind.__proto__),
    isNewLine: dart.finalFieldType(core.bool),
    isNewSegment: dart.finalFieldType(core.bool),
    isEof: dart.finalFieldType(core.bool)
  }));
  dart.defineLazy(parser._TokenKind, {
    /*parser._TokenKind.LINE*/get LINE() {
      return C1 || CT.C1;
    },
    /*parser._TokenKind.SEGMENT*/get SEGMENT() {
      return C2 || CT.C2;
    },
    /*parser._TokenKind.EOF*/get EOF() {
      return C3 || CT.C3;
    },
    /*parser._TokenKind.VALUE*/get VALUE() {
      return C4 || CT.C4;
    }
  });
  parser.parse = function parse(jsonMap, opts) {
    let otherMaps = opts && 'otherMaps' in opts ? opts.otherMaps : null;
    let mapUrl = opts && 'mapUrl' in opts ? opts.mapUrl : null;
    return parser.parseJson(core.Map._check(convert.jsonDecode(jsonMap)), {otherMaps: otherMaps, mapUrl: mapUrl});
  };
  parser.parseExtended = function parseExtended(jsonMap, opts) {
    let otherMaps = opts && 'otherMaps' in opts ? opts.otherMaps : null;
    let mapUrl = opts && 'mapUrl' in opts ? opts.mapUrl : null;
    return parser.parseJsonExtended(convert.jsonDecode(jsonMap), {otherMaps: otherMaps, mapUrl: mapUrl});
  };
  parser.parseJsonExtended = function parseJsonExtended(json, opts) {
    let otherMaps = opts && 'otherMaps' in opts ? opts.otherMaps : null;
    let mapUrl = opts && 'mapUrl' in opts ? opts.mapUrl : null;
    if (core.List.is(json)) {
      return new parser.MappingBundle.fromJson(json, {mapUrl: core.String._check(mapUrl)});
    }
    return parser.parseJson(core.Map.as(json));
  };
  parser.parseJson = function parseJson(map, opts) {
    let otherMaps = opts && 'otherMaps' in opts ? opts.otherMaps : null;
    let mapUrl = opts && 'mapUrl' in opts ? opts.mapUrl : null;
    if (!dart.equals(map[$_get]("version"), 3)) {
      dart.throw(new core.ArgumentError.new("unexpected source map version: " + dart.str(map[$_get]("version")) + ". " + "Only version 3 is supported."));
    }
    if (dart.test(map[$containsKey]("sections"))) {
      if (dart.test(map[$containsKey]("mappings")) || dart.test(map[$containsKey]("sources")) || dart.test(map[$containsKey]("names"))) {
        dart.throw(new core.FormatException.new("map containing \"sections\" " + "cannot contain \"mappings\", \"sources\", or \"names\"."));
      }
      return new parser.MultiSectionMapping.fromJson(core.List._check(map[$_get]("sections")), otherMaps, {mapUrl: mapUrl});
    }
    return new parser.SingleMapping.fromJson(map, {mapUrl: mapUrl});
  };
  const _entries = dart.privateName(builder, "_entries");
  builder.SourceMapBuilder = class SourceMapBuilder extends core.Object {
    addFromOffset(source, targetFile, targetOffset, identifier) {
      if (targetFile == null) {
        dart.throw(new core.ArgumentError.new("targetFile cannot be null"));
      }
      this[_entries][$add](new builder.Entry.new(source, targetFile.location(targetOffset), identifier));
    }
    addSpan(source, target, opts) {
      let isIdentifier = opts && 'isIdentifier' in opts ? opts.isIdentifier : null;
      if (isIdentifier == null) {
        isIdentifier = source_map_span.SourceMapSpan.is(source) ? source.isIdentifier : false;
      }
      let name = dart.test(isIdentifier) ? source.text : null;
      this[_entries][$add](new builder.Entry.new(source.start, target.start, name));
    }
    addLocation(source, target, identifier) {
      this[_entries][$add](new builder.Entry.new(source, target, identifier));
    }
    build(fileUrl) {
      return parser.SingleMapping.fromEntries(this[_entries], fileUrl).toJson();
    }
    toJson(fileUrl) {
      return convert.jsonEncode(this.build(fileUrl));
    }
  };
  (builder.SourceMapBuilder.new = function() {
    this[_entries] = JSArrayOfEntry().of([]);
    ;
  }).prototype = builder.SourceMapBuilder.prototype;
  dart.addTypeTests(builder.SourceMapBuilder);
  dart.setMethodSignature(builder.SourceMapBuilder, () => ({
    __proto__: dart.getMethods(builder.SourceMapBuilder.__proto__),
    addFromOffset: dart.fnType(dart.void, [location$.SourceLocation, file.SourceFile, core.int, core.String]),
    addSpan: dart.fnType(dart.void, [span.SourceSpan, span.SourceSpan], {isIdentifier: core.bool}, {}),
    addLocation: dart.fnType(dart.void, [location$.SourceLocation, location$.SourceLocation, core.String]),
    build: dart.fnType(core.Map, [core.String]),
    toJson: dart.fnType(core.String, [core.String])
  }));
  dart.setLibraryUri(builder.SourceMapBuilder, "package:source_maps/builder.dart");
  dart.setFieldSignature(builder.SourceMapBuilder, () => ({
    __proto__: dart.getFields(builder.SourceMapBuilder.__proto__),
    [_entries]: dart.finalFieldType(core.List$(builder.Entry))
  }));
  const source$ = dart.privateName(builder, "Entry.source");
  const target$ = dart.privateName(builder, "Entry.target");
  const identifierName$ = dart.privateName(builder, "Entry.identifierName");
  builder.Entry = class Entry extends core.Object {
    get source() {
      return this[source$];
    }
    set source(value) {
      super.source = value;
    }
    get target() {
      return this[target$];
    }
    set target(value) {
      super.target = value;
    }
    get identifierName() {
      return this[identifierName$];
    }
    set identifierName(value) {
      super.identifierName = value;
    }
    compareTo(other) {
      builder.Entry._check(other);
      let res = this.target.compareTo(other.target);
      if (res !== 0) return res;
      res = dart.toString(this.source.sourceUrl)[$compareTo](dart.toString(other.source.sourceUrl));
      if (res !== 0) return res;
      return this.source.compareTo(other.source);
    }
  };
  (builder.Entry.new = function(source, target, identifierName) {
    this[source$] = source;
    this[target$] = target;
    this[identifierName$] = identifierName;
    ;
  }).prototype = builder.Entry.prototype;
  dart.addTypeTests(builder.Entry);
  builder.Entry[dart.implements] = () => [core.Comparable$(builder.Entry)];
  dart.setMethodSignature(builder.Entry, () => ({
    __proto__: dart.getMethods(builder.Entry.__proto__),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object])
  }));
  dart.setLibraryUri(builder.Entry, "package:source_maps/builder.dart");
  dart.setFieldSignature(builder.Entry, () => ({
    __proto__: dart.getFields(builder.Entry.__proto__),
    source: dart.finalFieldType(location$.SourceLocation),
    target: dart.finalFieldType(location$.SourceLocation),
    identifierName: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(builder.Entry, ['compareTo']);
  dart.trackLibraries("packages/source_maps/builder", {
    "package:source_maps/parser.dart": parser,
    "package:source_maps/builder.dart": builder
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["parser.dart","builder.dart"],"names":[],"mappings":"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","file":"builder.ddc.js"}');
  // Exports:
  return {
    parser: parser,
    builder: builder
  };
});

//# sourceMappingURL=builder.ddc.js.map
