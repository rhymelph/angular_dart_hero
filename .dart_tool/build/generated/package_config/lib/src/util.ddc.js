define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const util = Object.create(dart.library);
  const $codeUnitAt = dartx.codeUnitAt;
  const $startsWith = dartx.startsWith;
  const $indexOf = dartx.indexOf;
  const $substring = dartx.substring;
  const $isEmpty = dartx.isEmpty;
  const $toRadixString = dartx.toRadixString;
  const $padLeft = dartx.padLeft;
  const $_get = dartx._get;
  const CT = Object.create(null);
  util.isValidPackageName = function isValidPackageName(string) {
    return dart.notNull(util._findInvalidCharacter(string)) < 0;
  };
  util._findInvalidCharacter = function _findInvalidCharacter(string) {
    let nonDot = 0;
    for (let i = 0; i < string.length; i = i + 1) {
      let c = string[$codeUnitAt](i);
      if (c > 127 || util._validPackageNameCharacters[$codeUnitAt](c) <= 32) {
        return i;
      }
      nonDot = nonDot + ((c ^ 46) >>> 0);
    }
    if (nonDot === 0) return string.length;
    return -1;
  };
  util.checkValidPackageUri = function checkValidPackageUri(packageUri) {
    if (packageUri.scheme !== "package") {
      dart.throw(new core.ArgumentError.value(packageUri, "packageUri", "Not a package: URI"));
    }
    if (dart.test(packageUri.hasAuthority)) {
      dart.throw(new core.ArgumentError.value(packageUri, "packageUri", "Package URIs must not have a host part"));
    }
    if (dart.test(packageUri.hasQuery)) {
      dart.throw(new core.ArgumentError.value(packageUri, "packageUri", "Package URIs must not have a query part"));
    }
    if (dart.test(packageUri.hasFragment)) {
      dart.throw(new core.ArgumentError.value(packageUri, "packageUri", "Package URIs must not have a fragment part"));
    }
    if (packageUri.path[$startsWith]("/")) {
      dart.throw(new core.ArgumentError.value(packageUri, "packageUri", "Package URIs must not start with a '/'"));
    }
    let firstSlash = packageUri.path[$indexOf]("/");
    if (firstSlash === -1) {
      dart.throw(new core.ArgumentError.value(packageUri, "packageUri", "Package URIs must start with the package name followed by a '/'"));
    }
    let packageName = packageUri.path[$substring](0, firstSlash);
    let badIndex = util._findInvalidCharacter(packageName);
    if (dart.notNull(badIndex) >= 0) {
      if (packageName[$isEmpty]) {
        dart.throw(new core.ArgumentError.value(packageUri, "packageUri", "Package names mus be non-empty"));
      }
      if (badIndex === packageName.length) {
        dart.throw(new core.ArgumentError.value(packageUri, "packageUri", "Package names must contain at least one non-'.' character"));
      }
      if (!(dart.notNull(badIndex) < packageName.length)) dart.assertFailed(null, "org-dartlang-app:///packages/package_config/src/util.dart", 86, 12, "badIndex < packageName.length");
      let badCharCode = packageName[$codeUnitAt](badIndex);
      let badChar = "U+" + badCharCode[$toRadixString](16)[$padLeft](4, "0");
      if (badCharCode >= 32 && badCharCode <= 126) {
        badChar = "'" + packageName[$_get](badIndex) + "' (" + badChar + ")";
      }
      dart.throw(new core.ArgumentError.value(packageUri, "packageUri", "Package names must not contain " + badChar));
    }
    return packageName;
  };
  dart.defineLazy(util, {
    /*util._validPackageNameCharacters*/get _validPackageNameCharacters() {
      return "                                 !  $ &'()*+,-. 0123456789 ; =  @ABCDEFGHIJKLMNOPQRSTUVWXYZ    _ abcdefghijklmnopqrstuvwxyz   ~ ";
    }
  });
  dart.trackLibraries("packages/package_config/src/util", {
    "package:package_config/src/util.dart": util
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["util.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;wDAgB+B;AAC7B,UAAqC,cAA9B,2BAAsB,MAAM,KAAI;EACzC;8DAUiC;AAE3B,iBAAS;AACb,aAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAO,MAAD,SAAS,IAAA,AAAC,CAAA;AAC9B,cAAI,AAAO,MAAD,cAAY,CAAC;AAC3B,UAAI,AAAE,CAAD,GAAG,OAAQ,AAA4B,AAAc,8CAAH,CAAC;AACtD,cAAO,EAAC;;AAEQ,MAAlB,SAAA,AAAO,MAAD,IAAM,CAAF,CAAC;;AAEb,QAAI,AAAO,MAAD,KAAI,GAAG,MAAO,AAAO,OAAD;AAC9B,UAAO,EAAC;EACV;4DAGgC;AAC9B,QAAI,AAAW,UAAD,YAAW;AAE4B,MADnD,WAAU,6BACN,UAAU,EAAE,cAAc;;AAEhC,kBAAI,AAAW,UAAD;AAE2D,MADvE,WAAU,6BACN,UAAU,EAAE,cAAc;;AAEhC,kBAAI,AAAW,UAAD;AAG4D,MADxE,WAAU,6BACN,UAAU,EAAE,cAAc;;AAEhC,kBAAI,AAAW,UAAD;AAM+D,MAD3E,WAAU,6BACN,UAAU,EAAE,cAAc;;AAEhC,QAAI,AAAW,AAAK,UAAN,mBAAiB;AAE0C,MADvE,WAAU,6BACN,UAAU,EAAE,cAAc;;AAE5B,qBAAa,AAAW,AAAK,UAAN,gBAAc;AACzC,QAAI,AAAW,UAAD,KAAI,CAAC;AAEqD,MADtE,WAAU,6BAAoB,UAAU,EAAE,cACtC;;AAEC,sBAAc,AAAW,AAAK,UAAN,kBAAgB,GAAG,UAAU;AACxD,mBAAW,2BAAsB,WAAW;AAChD,QAAa,aAAT,QAAQ,KAAI;AACd,UAAI,AAAY,WAAD;AAEkD,QAD/D,WAAU,6BACN,UAAU,EAAE,cAAc;;AAEhC,UAAI,AAAS,QAAD,KAAI,AAAY,WAAD;AAEuC,QADhE,WAAU,6BAAoB,UAAU,EAAE,cACtC;;AAEN,YAAgB,aAAT,QAAQ,IAAG,AAAY,WAAD;AACzB,wBAAc,AAAY,WAAD,cAAY,QAAQ;AAC7C,oBAAU,AAAK,OAAE,AAAY,AAAkB,WAAnB,iBAAe,cAAY,GAAG;AAC9D,UAAI,AAAY,WAAD,IAAI,MAAQ,AAAY,WAAD,IAAI;AAES,QAAjD,UAAU,AAAuC,MAAnC,AAAW,WAAA,QAAC,QAAQ,IAAE,QAAI,OAAO;;AAGuB,MADxE,WAAU,6BACN,UAAU,EAAE,cAAc,AAAyC,oCAAR,OAAO;;AAExE,UAAO,YAAW;EACpB;;MArFa,gCAA2B","file":"util.ddc.js"}');
  // Exports:
  return {
    src__util: util
  };
});

//# sourceMappingURL=util.ddc.js.map
