define(['dart_sdk', 'packages/collection/src/canonicalized_map'], function(dart_sdk, packages__collection__src__canonicalized_map) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const unmodifiable_wrappers = packages__collection__src__canonicalized_map.src__unmodifiable_wrappers;
  const iterable_set = Object.create(dart.library);
  const $length = dartx.length;
  const $iterator = dartx.iterator;
  const $contains = dartx.contains;
  const $firstWhere = dartx.firstWhere;
  const $toSet = dartx.toSet;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  const _base$ = dart.privateName(iterable_set, "_base");
  const _is_IterableSet_default = Symbol('_is_IterableSet_default');
  iterable_set.IterableSet$ = dart.generic(E => {
    let ETobool = () => (ETobool = dart.constFn(dart.fnType(core.bool, [E])))();
    const SetMixin_UnmodifiableSetMixin$36 = class SetMixin_UnmodifiableSetMixin extends collection.SetMixin$(E) {};
    (SetMixin_UnmodifiableSetMixin$36.new = function() {
    }).prototype = SetMixin_UnmodifiableSetMixin$36.prototype;
    dart.applyMixin(SetMixin_UnmodifiableSetMixin$36, unmodifiable_wrappers.UnmodifiableSetMixin$(E));
    class IterableSet extends SetMixin_UnmodifiableSetMixin$36 {
      get length() {
        return this[_base$][$length];
      }
      get iterator() {
        return this[_base$][$iterator];
      }
      contains(element) {
        return this[_base$][$contains](element);
      }
      lookup(needle) {
        return this[_base$][$firstWhere](dart.fn(element => dart.equals(element, needle), ETobool()), {orElse: dart.fn(() => null, VoidToNull())});
      }
      toSet() {
        return this[_base$][$toSet]();
      }
    }
    (IterableSet.new = function(_base) {
      this[_base$] = _base;
      ;
    }).prototype = IterableSet.prototype;
    dart.addTypeTests(IterableSet);
    IterableSet.prototype[_is_IterableSet_default] = true;
    dart.setMethodSignature(IterableSet, () => ({
      __proto__: dart.getMethods(IterableSet.__proto__),
      contains: dart.fnType(core.bool, [core.Object]),
      [$contains]: dart.fnType(core.bool, [core.Object]),
      lookup: dart.fnType(E, [core.Object]),
      toSet: dart.fnType(core.Set$(E), []),
      [$toSet]: dart.fnType(core.Set$(E), [])
    }));
    dart.setGetterSignature(IterableSet, () => ({
      __proto__: dart.getGetters(IterableSet.__proto__),
      length: core.int,
      [$length]: core.int,
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E)
    }));
    dart.setLibraryUri(IterableSet, "package:test_api/src/util/iterable_set.dart");
    dart.setFieldSignature(IterableSet, () => ({
      __proto__: dart.getFields(IterableSet.__proto__),
      [_base$]: dart.finalFieldType(core.Iterable$(E))
    }));
    dart.defineExtensionMethods(IterableSet, ['contains', 'toSet']);
    dart.defineExtensionAccessors(IterableSet, ['length', 'iterator']);
    return IterableSet;
  });
  iterable_set.IterableSet = iterable_set.IterableSet$();
  dart.addTypeTests(iterable_set.IterableSet, _is_IterableSet_default);
  dart.trackLibraries("packages/test_api/src/util/iterable_set", {
    "package:test_api/src/util/iterable_set.dart": iterable_set
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["iterable_set.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;AAqBoB,cAAA,AAAM;MAAM;;AAEF,cAAA,AAAM;MAAQ;eAKrB;AAAY,cAAA,AAAM,yBAAS,OAAO;MAAC;aAExC;AACZ,cAAA,AAAM,2BAAW,QAAC,WAAoB,YAAR,OAAO,EAAI,MAAM,wBAAU,cAAM;MAAK;;AAEtD,cAAA,AAAM;MAAO;;;MAPd;;IAAM","file":"iterable_set.ddc.js"}');
  // Exports:
  return {
    src__util__iterable_set: iterable_set
  };
});

//# sourceMappingURL=iterable_set.ddc.js.map
