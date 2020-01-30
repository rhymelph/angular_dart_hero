define(['dart_sdk', 'packages/source_span/source_span'], function(dart_sdk, packages__source_span__source_span) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const location = packages__source_span__source_span.src__location;
  const span = packages__source_span__source_span.src__span;
  const span_with_context = packages__source_span__source_span.src__span_with_context;
  const file = packages__source_span__source_span.src__file;
  const source_map_span = Object.create(dart.library);
  const vlq = Object.create(dart.library);
  const utils = Object.create(dart.library);
  const $toString = dartx.toString;
  const $replaceAll = dartx.replaceAll;
  const $noSuchMethod = dartx.noSuchMethod;
  const $compareTo = dartx.compareTo;
  const $rightShift = dartx['>>'];
  const $_get = dartx._get;
  const $add = dartx.add;
  const $containsKey = dartx.containsKey;
  const $leftShift = dartx['<<'];
  const $_set = dartx._set;
  const $length = dartx.length;
  const $first = dartx.first;
  const $last = dartx.last;
  const $truncate = dartx.truncate;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let IdentityMapOfString$int = () => (IdentityMapOfString$int = dart.constFn(_js_helper.IdentityMap$(core.String, core.int)))();
  let MapOfString$int = () => (MapOfString$int = dart.constFn(core.Map$(core.String, core.int)))();
  let VoidToMapOfString$int = () => (VoidToMapOfString$int = dart.constFn(dart.fnType(MapOfString$int(), [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const(new _js_helper.PrivateSymbol.new('_context', _context));
    }
  });
  const isIdentifier$ = dart.privateName(source_map_span, "SourceMapSpan.isIdentifier");
  source_map_span.SourceMapSpan = class SourceMapSpan extends span.SourceSpanBase {
    get isIdentifier() {
      return this[isIdentifier$];
    }
    set isIdentifier(value) {
      super.isIdentifier = value;
    }
  };
  (source_map_span.SourceMapSpan.new = function(start, end, text, opts) {
    let isIdentifier = opts && 'isIdentifier' in opts ? opts.isIdentifier : false;
    this[isIdentifier$] = isIdentifier;
    source_map_span.SourceMapSpan.__proto__.new.call(this, start, end, text);
    ;
  }).prototype = source_map_span.SourceMapSpan.prototype;
  (source_map_span.SourceMapSpan.identifier = function(start, text) {
    source_map_span.SourceMapSpan.new.call(this, start, new location.SourceLocation.new(dart.notNull(start.offset) + text.length, {sourceUrl: start.sourceUrl, line: start.line, column: dart.notNull(start.column) + text.length}), text, {isIdentifier: true});
  }).prototype = source_map_span.SourceMapSpan.prototype;
  dart.addTypeTests(source_map_span.SourceMapSpan);
  dart.setLibraryUri(source_map_span.SourceMapSpan, "package:source_maps/src/source_map_span.dart");
  dart.setFieldSignature(source_map_span.SourceMapSpan, () => ({
    __proto__: dart.getFields(source_map_span.SourceMapSpan.__proto__),
    isIdentifier: dart.finalFieldType(core.bool)
  }));
  const _inner$ = dart.privateName(source_map_span, "_inner");
  const _context = dart.privateName(source_map_span, "_context");
  let C0;
  const _context$ = dart.privateName(span_with_context, "_context");
  const isIdentifier$0 = dart.privateName(source_map_span, "SourceMapFileSpan.isIdentifier");
  source_map_span.SourceMapFileSpan = class SourceMapFileSpan extends core.Object {
    get isIdentifier() {
      return this[isIdentifier$0];
    }
    set isIdentifier(value) {
      super.isIdentifier = value;
    }
    get file() {
      return this[_inner$].file;
    }
    get start() {
      return this[_inner$].start;
    }
    get end() {
      return this[_inner$].end;
    }
    get text() {
      return this[_inner$].text;
    }
    get context() {
      return this[_inner$].context;
    }
    get sourceUrl() {
      return this[_inner$].sourceUrl;
    }
    get length() {
      return this[_inner$].length;
    }
    compareTo(other) {
      span.SourceSpan._check(other);
      return this[_inner$].compareTo(other);
    }
    highlight(opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      return this[_inner$].highlight({color: color});
    }
    union(other) {
      return this[_inner$].union(other);
    }
    expand(other) {
      return this[_inner$].expand(other);
    }
    message(message, opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      return this[_inner$].message(message, {color: color});
    }
    toString() {
      return dart.toString(this[_inner$])[$replaceAll]("FileSpan", "SourceMapFileSpan");
    }
    get [_context$]() {
      return core.String._check(this[$noSuchMethod](new core._Invocation.getter(C0 || CT.C0)));
    }
  };
  (source_map_span.SourceMapFileSpan.new = function(_inner, opts) {
    let isIdentifier = opts && 'isIdentifier' in opts ? opts.isIdentifier : false;
    this[_inner$] = _inner;
    this[isIdentifier$0] = isIdentifier;
    ;
  }).prototype = source_map_span.SourceMapFileSpan.prototype;
  dart.addTypeTests(source_map_span.SourceMapFileSpan);
  source_map_span.SourceMapFileSpan[dart.implements] = () => [source_map_span.SourceMapSpan, file.FileSpan];
  dart.setMethodSignature(source_map_span.SourceMapFileSpan, () => ({
    __proto__: dart.getMethods(source_map_span.SourceMapFileSpan.__proto__),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object]),
    highlight: dart.fnType(core.String, [], {color: dart.dynamic}, {}),
    union: dart.fnType(span.SourceSpan, [span.SourceSpan]),
    expand: dart.fnType(file.FileSpan, [file.FileSpan]),
    message: dart.fnType(core.String, [core.String], {color: dart.dynamic}, {})
  }));
  dart.setGetterSignature(source_map_span.SourceMapFileSpan, () => ({
    __proto__: dart.getGetters(source_map_span.SourceMapFileSpan.__proto__),
    file: file.SourceFile,
    start: file.FileLocation,
    end: file.FileLocation,
    text: core.String,
    context: core.String,
    sourceUrl: core.Uri,
    length: core.int,
    [_context$]: core.String
  }));
  dart.setLibraryUri(source_map_span.SourceMapFileSpan, "package:source_maps/src/source_map_span.dart");
  dart.setFieldSignature(source_map_span.SourceMapFileSpan, () => ({
    __proto__: dart.getFields(source_map_span.SourceMapFileSpan.__proto__),
    [_inner$]: dart.finalFieldType(file.FileSpan),
    isIdentifier: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(source_map_span.SourceMapFileSpan, ['compareTo', 'toString']);
  vlq.encodeVlq = function encodeVlq(value) {
    if (dart.notNull(value) < dart.notNull(vlq.MIN_INT32) || dart.notNull(value) > dart.notNull(vlq.MAX_INT32)) {
      dart.throw(new core.ArgumentError.new("expected 32 bit int, got: " + dart.str(value)));
    }
    let res = JSArrayOfString().of([]);
    let signBit = 0;
    if (dart.notNull(value) < 0) {
      signBit = 1;
      value = -dart.notNull(value);
    }
    value = (dart.notNull(value) << 1 | signBit) >>> 0;
    do {
      let digit = (dart.notNull(value) & 31) >>> 0;
      value = value[$rightShift](5);
      if (dart.notNull(value) > 0) {
        digit = (digit | 32) >>> 0;
      }
      res[$add](vlq.BASE64_DIGITS[$_get](digit));
    } while (dart.notNull(value) > 0);
    return res;
  };
  vlq.decodeVlq = function decodeVlq(chars) {
    let result = 0;
    let stop = false;
    let shift = 0;
    while (!stop) {
      if (!dart.test(chars.moveNext())) dart.throw(new core.StateError.new("incomplete VLQ value"));
      let char = chars.current;
      if (!dart.test(vlq._digits[$containsKey](char))) {
        dart.throw(new core.FormatException.new("invalid character in VLQ encoding: " + dart.str(char)));
      }
      let digit = vlq._digits[$_get](char);
      stop = (dart.notNull(digit) & 32) === 0;
      digit = (dart.notNull(digit) & 31) >>> 0;
      result = result + digit[$leftShift](shift);
      shift = shift + 5;
    }
    let negate = (result & 1) === 1;
    result = result[$rightShift](1);
    result = negate ? -result : result;
    if (result < dart.notNull(vlq.MIN_INT32) || result > dart.notNull(vlq.MAX_INT32)) {
      dart.throw(new core.FormatException.new("expected an encoded 32 bit int, but we got: " + dart.str(result)));
    }
    return result;
  };
  dart.defineLazy(vlq, {
    /*vlq.VLQ_BASE_SHIFT*/get VLQ_BASE_SHIFT() {
      return 5;
    },
    /*vlq.VLQ_BASE_MASK*/get VLQ_BASE_MASK() {
      return 31;
    },
    /*vlq.VLQ_CONTINUATION_BIT*/get VLQ_CONTINUATION_BIT() {
      return 32;
    },
    /*vlq.VLQ_CONTINUATION_MASK*/get VLQ_CONTINUATION_MASK() {
      return 32;
    },
    /*vlq.BASE64_DIGITS*/get BASE64_DIGITS() {
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    },
    /*vlq._digits*/get _digits() {
      return dart.fn(() => {
        let map = new (IdentityMapOfString$int()).new();
        for (let i = 0; i < 64; i = i + 1) {
          map[$_set](vlq.BASE64_DIGITS[$_get](i), i);
        }
        return map;
      }, VoidToMapOfString$int())();
    },
    /*vlq.MAX_INT32*/get MAX_INT32() {
      return dart.asInt(math.pow(2, 31) - 1);
    },
    /*vlq.MIN_INT32*/get MIN_INT32() {
      return dart.asInt(-math.pow(2, 31));
    }
  });
  utils.binarySearch = function binarySearch(list, matches) {
    if (list[$length] === 0) return -1;
    if (dart.test(matches(list[$first]))) return 0;
    if (!dart.test(matches(list[$last]))) return list[$length];
    let min = 0;
    let max = dart.notNull(list[$length]) - 1;
    while (min < max) {
      let half = min + ((max - min) / 2)[$truncate]();
      if (dart.test(matches(list[$_get](half)))) {
        max = half;
      } else {
        min = half + 1;
      }
    }
    return max;
  };
  dart.trackLibraries("packages/source_maps/src/source_map_span", {
    "package:source_maps/src/source_map_span.dart": source_map_span,
    "package:source_maps/src/vlq.dart": vlq,
    "package:source_maps/src/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["source_map_span.dart","vlq.dart","utils.dart"],"names":[],"mappings":"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","file":"source_map_span.ddc.js"}');
  // Exports:
  return {
    src__source_map_span: source_map_span,
    src__vlq: vlq,
    src__utils: utils
  };
});

//# sourceMappingURL=source_map_span.ddc.js.map
