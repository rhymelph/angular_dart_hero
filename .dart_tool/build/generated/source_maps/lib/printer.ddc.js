define(['dart_sdk', 'packages/source_maps/builder', 'packages/source_span/source_span', 'packages/source_maps/src/source_map_span'], function(dart_sdk, packages__source_maps__builder, packages__source_span__source_span, packages__source_maps__src__source_map_span) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const builder = packages__source_maps__builder.builder;
  const file$ = packages__source_span__source_span.src__file;
  const location = packages__source_span__source_span.src__location;
  const span = packages__source_span__source_span.src__span;
  const source_map_span = packages__source_maps__src__source_map_span.src__source_map_span;
  const printer$ = Object.create(dart.library);
  const $runes = dartx.runes;
  const $toList = dartx.toList;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $add = dartx.add;
  const CT = Object.create(null);
  const _buff = dart.privateName(printer$, "_buff");
  const _maps = dart.privateName(printer$, "_maps");
  const _loc = dart.privateName(printer$, "_loc");
  const _line = dart.privateName(printer$, "_line");
  const _column = dart.privateName(printer$, "_column");
  const filename$ = dart.privateName(printer$, "Printer.filename");
  printer$.Printer = class Printer extends core.Object {
    get filename() {
      return this[filename$];
    }
    set filename(value) {
      super.filename = value;
    }
    get text() {
      return dart.toString(this[_buff]);
    }
    get map() {
      return this[_maps].toJson(this.filename);
    }
    add(str, opts) {
      let projectMarks = opts && 'projectMarks' in opts ? opts.projectMarks : false;
      let chars = str[$runes][$toList]();
      let length = chars[$length];
      for (let i = 0; i < dart.notNull(length); i = i + 1) {
        let c = chars[$_get](i);
        if (c === 10 || c === 13 && (i + 1 === length || chars[$_get](i + 1) !== 10)) {
          this[_line] = dart.notNull(this[_line]) + 1;
          this[_column] = 0;
          if (dart.dtest(projectMarks) && this[_loc] != null) {
            if (file$.FileLocation.is(this[_loc])) {
              let file = file$.FileLocation.as(this[_loc]).file;
              this.mark(file.location(file.getOffset(dart.notNull(this[_loc].line) + 1)));
            } else {
              this.mark(new location.SourceLocation.new(0, {sourceUrl: this[_loc].sourceUrl, line: dart.notNull(this[_loc].line) + 1, column: 0}));
            }
          }
        } else {
          this[_column] = dart.notNull(this[_column]) + 1;
        }
      }
      this[_buff].write(str);
    }
    addSpaces(total) {
      for (let i = 0; i < dart.notNull(total); i = i + 1)
        this[_buff].write(" ");
      this[_column] = dart.notNull(this[_column]) + dart.notNull(total);
    }
    mark(mark) {
      let loc = null;
      let identifier = null;
      if (location.SourceLocation.is(mark)) {
        loc = mark;
      } else if (span.SourceSpan.is(mark)) {
        loc = mark.start;
        if (source_map_span.SourceMapSpan.is(mark) && dart.test(mark.isIdentifier)) identifier = mark.text;
      }
      this[_maps].addLocation(location.SourceLocation._check(loc), new location.SourceLocation.new(this[_buff].length, {line: this[_line], column: this[_column]}), core.String._check(identifier));
      this[_loc] = location.SourceLocation._check(loc);
    }
  };
  (printer$.Printer.new = function(filename) {
    this[_buff] = new core.StringBuffer.new();
    this[_maps] = new builder.SourceMapBuilder.new();
    this[_loc] = null;
    this[_line] = 0;
    this[_column] = 0;
    this[filename$] = filename;
    ;
  }).prototype = printer$.Printer.prototype;
  dart.addTypeTests(printer$.Printer);
  dart.setMethodSignature(printer$.Printer, () => ({
    __proto__: dart.getMethods(printer$.Printer.__proto__),
    add: dart.fnType(dart.void, [core.String], {projectMarks: dart.dynamic}, {}),
    addSpaces: dart.fnType(dart.void, [core.int]),
    mark: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(printer$.Printer, () => ({
    __proto__: dart.getGetters(printer$.Printer.__proto__),
    text: core.String,
    map: core.String
  }));
  dart.setLibraryUri(printer$.Printer, "package:source_maps/printer.dart");
  dart.setFieldSignature(printer$.Printer, () => ({
    __proto__: dart.getFields(printer$.Printer.__proto__),
    filename: dart.finalFieldType(core.String),
    [_buff]: dart.finalFieldType(core.StringBuffer),
    [_maps]: dart.finalFieldType(builder.SourceMapBuilder),
    [_loc]: dart.fieldType(location.SourceLocation),
    [_line]: dart.fieldType(core.int),
    [_column]: dart.fieldType(core.int)
  }));
  const _items = dart.privateName(printer$, "_items");
  const _flush = dart.privateName(printer$, "_flush");
  const _appendString = dart.privateName(printer$, "_appendString");
  const _indent = dart.privateName(printer$, "_indent");
  const indent$ = dart.privateName(printer$, "NestedPrinter.indent");
  const printer = dart.privateName(printer$, "NestedPrinter.printer");
  printer$.NestedPrinter = class NestedPrinter extends core.Object {
    get indent() {
      return this[indent$];
    }
    set indent(value) {
      this[indent$] = value;
    }
    get printer() {
      return this[printer];
    }
    set printer(value) {
      this[printer] = value;
    }
    add(object, opts) {
      let location = opts && 'location' in opts ? opts.location : null;
      let span = opts && 'span' in opts ? opts.span : null;
      let isOriginal = opts && 'isOriginal' in opts ? opts.isOriginal : false;
      if (!(typeof object == 'string') || location != null || span != null || dart.test(isOriginal)) {
        this[_flush]();
        if (!(location == null || span == null)) dart.assertFailed(null, "org-dartlang-app:///packages/source_maps/printer.dart", 139, 14, "location == null || span == null");
        if (location != null) this[_items][$add](location);
        if (span != null) this[_items][$add](span);
        if (dart.test(isOriginal)) this[_items][$add](printer$.NestedPrinter._ORIGINAL);
      }
      if (typeof object == 'string') {
        this[_appendString](object);
      } else {
        this[_items][$add](object);
      }
    }
    insertIndent() {
      return this[_indent](this.indent);
    }
    addLine(line, opts) {
      let location = opts && 'location' in opts ? opts.location : null;
      let span = opts && 'span' in opts ? opts.span : null;
      if (location != null || span != null) {
        this[_flush]();
        if (!(location == null || span == null)) dart.assertFailed(null, "org-dartlang-app:///packages/source_maps/printer.dart", 168, 14, "location == null || span == null");
        if (location != null) this[_items][$add](location);
        if (span != null) this[_items][$add](span);
      }
      if (line == null) return;
      if (line !== "") {
        this[_indent](this.indent);
        this[_appendString](line);
      }
      this[_appendString]("\n");
    }
    [_appendString](s) {
      if (this[_buff] == null) this[_buff] = new core.StringBuffer.new();
      this[_buff].write(s);
    }
    [_flush]() {
      if (this[_buff] != null) {
        this[_items][$add](dart.toString(this[_buff]));
        this[_buff] = null;
      }
    }
    [_indent](indent) {
      for (let i = 0; i < dart.notNull(indent); i = i + 1)
        this[_appendString]("  ");
    }
    toString() {
      let t0;
      this[_flush]();
      return (t0 = new core.StringBuffer.new(), t0.writeAll(this[_items]), t0).toString();
    }
    get text() {
      return this.printer.text;
    }
    get map() {
      return this.printer.map;
    }
    build(filename) {
      this.writeTo(this.printer = new printer$.Printer.new(filename));
    }
    writeTo(printer) {
      this[_flush]();
      let propagate = false;
      for (let item of this[_items]) {
        if (printer$.NestedItem.is(item)) {
          item.writeTo(printer);
        } else if (typeof item == 'string') {
          printer.add(item, {projectMarks: propagate});
          propagate = false;
        } else if (location.SourceLocation.is(item) || span.SourceSpan.is(item)) {
          printer.mark(item);
        } else if (dart.equals(item, printer$.NestedPrinter._ORIGINAL)) {
          propagate = true;
        } else {
          dart.throw(new core.UnsupportedError.new("Unknown item type: " + dart.str(item)));
        }
      }
    }
  };
  (printer$.NestedPrinter.new = function(indent) {
    if (indent === void 0) indent = 0;
    this[_items] = [];
    this[_buff] = null;
    this[printer] = null;
    this[indent$] = indent;
    ;
  }).prototype = printer$.NestedPrinter.prototype;
  dart.addTypeTests(printer$.NestedPrinter);
  printer$.NestedPrinter[dart.implements] = () => [printer$.NestedItem];
  dart.setMethodSignature(printer$.NestedPrinter, () => ({
    __proto__: dart.getMethods(printer$.NestedPrinter.__proto__),
    add: dart.fnType(dart.void, [dart.dynamic], {isOriginal: core.bool, location: location.SourceLocation, span: span.SourceSpan}, {}),
    insertIndent: dart.fnType(dart.void, []),
    addLine: dart.fnType(dart.void, [core.String], {location: location.SourceLocation, span: span.SourceSpan}, {}),
    [_appendString]: dart.fnType(dart.void, [core.String]),
    [_flush]: dart.fnType(dart.void, []),
    [_indent]: dart.fnType(dart.void, [core.int]),
    build: dart.fnType(dart.void, [core.String]),
    writeTo: dart.fnType(dart.void, [printer$.Printer])
  }));
  dart.setGetterSignature(printer$.NestedPrinter, () => ({
    __proto__: dart.getGetters(printer$.NestedPrinter.__proto__),
    text: core.String,
    map: core.String
  }));
  dart.setLibraryUri(printer$.NestedPrinter, "package:source_maps/printer.dart");
  dart.setFieldSignature(printer$.NestedPrinter, () => ({
    __proto__: dart.getFields(printer$.NestedPrinter.__proto__),
    [_items]: dart.fieldType(core.List),
    [_buff]: dart.fieldType(core.StringBuffer),
    indent: dart.fieldType(core.int),
    printer: dart.fieldType(printer$.Printer)
  }));
  dart.defineExtensionMethods(printer$.NestedPrinter, ['toString']);
  dart.defineLazy(printer$.NestedPrinter, {
    /*printer$.NestedPrinter._ORIGINAL*/get _ORIGINAL() {
      return new core.Object.new();
    }
  });
  printer$.NestedItem = class NestedItem extends core.Object {};
  (printer$.NestedItem.new = function() {
    ;
  }).prototype = printer$.NestedItem.prototype;
  dart.addTypeTests(printer$.NestedItem);
  dart.setLibraryUri(printer$.NestedItem, "package:source_maps/printer.dart");
  dart.defineLazy(printer$, {
    /*printer$._LF*/get _LF() {
      return 10;
    },
    /*printer$._CR*/get _CR() {
      return 13;
    }
  });
  dart.trackLibraries("packages/source_maps/printer", {
    "package:source_maps/printer.dart": printer$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["printer.dart"],"names":[],"mappings":"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","file":"printer.ddc.js"}');
  // Exports:
  return {
    printer: printer$
  };
});

//# sourceMappingURL=printer.ddc.js.map
