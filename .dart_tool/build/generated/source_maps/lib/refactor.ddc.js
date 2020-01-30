define(['dart_sdk', 'packages/source_maps/printer', 'packages/source_span/source_span'], function(dart_sdk, packages__source_maps__printer, packages__source_span__source_span) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const printer$ = packages__source_maps__printer.printer;
  const location = packages__source_span__source_span.src__location;
  const file = packages__source_span__source_span.src__file;
  const refactor = Object.create(dart.library);
  const $length = dartx.length;
  const $add = dartx.add;
  const $sort = dartx.sort;
  const $substring = dartx.substring;
  const $compareTo = dartx.compareTo;
  const $codeUnitAt = dartx.codeUnitAt;
  let JSArrayOf_TextEdit = () => (JSArrayOf_TextEdit = dart.constFn(_interceptors.JSArray$(refactor._TextEdit)))();
  const CT = Object.create(null);
  const _edits = dart.privateName(refactor, "_edits");
  const _loc = dart.privateName(refactor, "_loc");
  const file$ = dart.privateName(refactor, "TextEditTransaction.file");
  const original$ = dart.privateName(refactor, "TextEditTransaction.original");
  refactor.TextEditTransaction = class TextEditTransaction extends core.Object {
    get file() {
      return this[file$];
    }
    set file(value) {
      super.file = value;
    }
    get original() {
      return this[original$];
    }
    set original(value) {
      super.original = value;
    }
    get hasEdits() {
      return dart.notNull(this[_edits][$length]) > 0;
    }
    edit(begin, end, replacement) {
      this[_edits][$add](new refactor._TextEdit.new(begin, end, replacement));
    }
    [_loc](offset) {
      return this.file != null ? this.file.location(offset) : null;
    }
    commit() {
      let t0, t0$, t0$0, t0$1;
      let printer = new printer$.NestedPrinter.new();
      if (this[_edits][$length] === 0) {
        t0 = printer;
        t0.add(this.original, {location: this[_loc](0), isOriginal: true});
        return t0;
      }
      this[_edits][$sort]();
      let consumed = 0;
      for (let edit of this[_edits]) {
        if (dart.notNull(consumed) > dart.notNull(edit.begin)) {
          let sb = new core.StringBuffer.new();
          t0$ = sb;
          t0$.write(this.file.location(edit.begin).toolString);
          t0$.write(": overlapping edits. Insert at offset ");
          t0$.write(edit.begin);
          t0$.write(" but have consumed ");
          t0$.write(consumed);
          t0$.write(" input characters. List of edits:");
          t0$;
          for (let e of this[_edits]) {
            t0$0 = sb;
            t0$0.write("\n    ");
            t0$0.write(e);
            t0$0;
          }
          dart.throw(new core.UnsupportedError.new(sb.toString()));
        }
        let betweenEdits = this.original[$substring](consumed, edit.begin);
        t0$1 = printer;
        t0$1.add(betweenEdits, {location: this[_loc](consumed), isOriginal: true});
        t0$1.add(edit.replace, {location: this[_loc](edit.begin)});
        t0$1;
        consumed = edit.end;
      }
      printer.add(this.original[$substring](consumed), {location: this[_loc](consumed), isOriginal: true});
      return printer;
    }
  };
  (refactor.TextEditTransaction.new = function(original, file) {
    this[_edits] = JSArrayOf_TextEdit().of([]);
    this[original$] = original;
    this[file$] = file;
    ;
  }).prototype = refactor.TextEditTransaction.prototype;
  dart.addTypeTests(refactor.TextEditTransaction);
  dart.setMethodSignature(refactor.TextEditTransaction, () => ({
    __proto__: dart.getMethods(refactor.TextEditTransaction.__proto__),
    edit: dart.fnType(dart.void, [core.int, core.int, dart.dynamic]),
    [_loc]: dart.fnType(location.SourceLocation, [core.int]),
    commit: dart.fnType(printer$.NestedPrinter, [])
  }));
  dart.setGetterSignature(refactor.TextEditTransaction, () => ({
    __proto__: dart.getGetters(refactor.TextEditTransaction.__proto__),
    hasEdits: core.bool
  }));
  dart.setLibraryUri(refactor.TextEditTransaction, "package:source_maps/refactor.dart");
  dart.setFieldSignature(refactor.TextEditTransaction, () => ({
    __proto__: dart.getFields(refactor.TextEditTransaction.__proto__),
    file: dart.finalFieldType(file.SourceFile),
    original: dart.finalFieldType(core.String),
    [_edits]: dart.finalFieldType(core.List$(refactor._TextEdit))
  }));
  refactor._TextEdit = class _TextEdit extends core.Object {
    get length() {
      return dart.notNull(this.end) - dart.notNull(this.begin);
    }
    toString() {
      return "(Edit @ " + dart.str(this.begin) + "," + dart.str(this.end) + ": \"" + dart.str(this.replace) + "\")";
    }
    compareTo(other) {
      refactor._TextEdit._check(other);
      let diff = dart.notNull(this.begin) - dart.notNull(other.begin);
      if (diff !== 0) return diff;
      return dart.notNull(this.end) - dart.notNull(other.end);
    }
  };
  (refactor._TextEdit.new = function(begin, end, replace) {
    this.begin = begin;
    this.end = end;
    this.replace = replace;
    ;
  }).prototype = refactor._TextEdit.prototype;
  dart.addTypeTests(refactor._TextEdit);
  refactor._TextEdit[dart.implements] = () => [core.Comparable$(refactor._TextEdit)];
  dart.setMethodSignature(refactor._TextEdit, () => ({
    __proto__: dart.getMethods(refactor._TextEdit.__proto__),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object])
  }));
  dart.setGetterSignature(refactor._TextEdit, () => ({
    __proto__: dart.getGetters(refactor._TextEdit.__proto__),
    length: core.int
  }));
  dart.setLibraryUri(refactor._TextEdit, "package:source_maps/refactor.dart");
  dart.setFieldSignature(refactor._TextEdit, () => ({
    __proto__: dart.getFields(refactor._TextEdit.__proto__),
    begin: dart.finalFieldType(core.int),
    end: dart.finalFieldType(core.int),
    replace: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(refactor._TextEdit, ['toString', 'compareTo']);
  refactor.guessIndent = function guessIndent(code, charOffset) {
    let lineStart = 0;
    for (let i = dart.notNull(charOffset) - 1; i >= 0; i = i - 1) {
      let c = code[$codeUnitAt](i);
      if (c === 10 || c === 13) {
        lineStart = i + 1;
        break;
      }
    }
    let whitespaceEnd = code.length;
    for (let i = lineStart; i < code.length; i = i + 1) {
      let c = code[$codeUnitAt](i);
      if (c !== 32 && c !== 9) {
        whitespaceEnd = i;
        break;
      }
    }
    return code[$substring](lineStart, whitespaceEnd);
  };
  dart.defineLazy(refactor, {
    /*refactor._CR*/get _CR() {
      return 13;
    },
    /*refactor._LF*/get _LF() {
      return 10;
    },
    /*refactor._TAB*/get _TAB() {
      return 9;
    },
    /*refactor._SPACE*/get _SPACE() {
      return 32;
    }
  });
  dart.trackLibraries("packages/source_maps/refactor", {
    "package:source_maps/refactor.dart": refactor
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["refactor.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;IAmBmB;;;;;;IACJ;;;;;;;AAMQ,YAAc,cAAd,AAAO,yBAAS;IAAC;SAKxB,OAAW,KAAK;AACsB,MAAlD,AAAO,mBAAQ,2BAAU,KAAK,EAAE,GAAG,EAAE,WAAW;IAClD;WAGwB;AACpB,YAAA,AAAK,cAAG,OAAO,AAAK,mBAAS,MAAM,IAAI;IAAI;;;AAUzC,oBAAc;AAClB,UAAI,AAAO,AAAO,0BAAG;AACnB,aAAO,OAAO;QAAE,OAAI,0BAAoB,WAAK,gBAAgB;;;AAIlD,MAAb,AAAO;AAEH,qBAAW;AACf,eAAS,OAAQ;AACf,YAAa,aAAT,QAAQ,iBAAG,AAAK,IAAD;AACb,mBAAS;AAOiC,gBAN9C,EAAE;UACE,UAAM,AAAK,AAAqB,mBAAZ,AAAK,IAAD;UACxB,UAAM;UACN,UAAM,AAAK,IAAD;UACV,UAAM;UACN,UAAM,QAAQ;UACd,UAAM;;AACV,mBAAS,IAAK,eAAqC;mBAA7B,EAAE;YAAE,WAAM;YAAW,WAAM,CAAC;;;AACT,UAAzC,WAAU,8BAAiB,AAAG,EAAD;;AAK3B,2BAAe,AAAS,0BAAU,QAAQ,EAAE,AAAK,IAAD;AAGH,eAFjD,OAAO;QACH,SAAI,YAAY,aAAY,WAAK,QAAQ,eAAe;QACxD,SAAI,AAAK,IAAD,qBAAoB,WAAK,AAAK,IAAD;;AACtB,QAAnB,WAAW,AAAK,IAAD;;AAK8B,MAD/C,AAAQ,OAAD,KAAK,AAAS,0BAAU,QAAQ,cACzB,WAAK,QAAQ,eAAe;AAC1C,YAAO,QAAO;IAChB;;+CA3DyB,UAAe;IAHlC,eAAoB;IAGD;IAAe;;EAAK;;;;;;;;;;;;;;;;;;;;;AAuE3B,YAAI,cAAJ,yBAAM;IAAK;;AAER,YAAA,AAAkC,uBAAxB,cAAK,eAAE,YAAG,kBAAI,gBAAO;IAAG;cAE/B;;AAClB,iBAAa,aAAN,2BAAQ,AAAM,KAAD;AACxB,UAAI,IAAI,KAAI,GAAG,MAAO,KAAI;AAC1B,YAAW,cAAJ,yBAAM,AAAM,KAAD;IACpB;;qCAVe,OAAY,KAAU;IAAtB;IAAY;IAAU;;EAAQ;;;;;;;;;;;;;;;;;;;;8CAcrB,MAAU;AAE9B,oBAAY;AAChB,aAAS,IAAe,aAAX,UAAU,IAAG,GAAG,AAAE,CAAD,IAAI,GAAG,IAAA,AAAC,CAAA;AAChC,cAAI,AAAK,IAAD,cAAY,CAAC;AACzB,UAAI,AAAE,CAAD,WAAW,AAAE,CAAD;AACE,QAAjB,YAAY,AAAE,CAAD,GAAG;AAChB;;;AAKA,wBAAgB,AAAK,IAAD;AACxB,aAAS,IAAI,SAAS,EAAE,AAAE,CAAD,GAAG,AAAK,IAAD,SAAS,IAAA,AAAC,CAAA;AACpC,cAAI,AAAK,IAAD,cAAY,CAAC;AACzB,UAAI,CAAC,WAAc,CAAC;AACD,QAAjB,gBAAgB,CAAC;AACjB;;;AAIJ,UAAO,AAAK,KAAD,aAAW,SAAS,EAAE,aAAa;EAChD;;MAEU,YAAG;;;MACH,YAAG;;;MACH,aAAI;;;MACJ,eAAM","file":"refactor.ddc.js"}');
  // Exports:
  return {
    refactor: refactor
  };
});

//# sourceMappingURL=refactor.ddc.js.map
