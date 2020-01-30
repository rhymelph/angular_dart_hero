define(['dart_sdk', 'packages/http/src/base_client', 'packages/angular_dart_hero/src/commom/route_paths', 'packages/http/src/mock_client'], function(dart_sdk, packages__http__src__base_client, packages__angular_dart_hero__src__commom__route_paths, packages__http__src__mock_client) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const response = packages__http__src__base_client.src__response;
  const request = packages__http__src__base_client.src__request;
  const hero = packages__angular_dart_hero__src__commom__route_paths.src__model__hero;
  const mock_client = packages__http__src__mock_client.src__mock_client;
  const in_memory_data_service = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $fold = dartx.fold;
  const $last = dartx.last;
  const $firstWhere = dartx.firstWhere;
  const $_get = dartx._get;
  const $contains = dartx.contains;
  const $where = dartx.where;
  const $add = dartx.add;
  const $removeWhere = dartx.removeWhere;
  let FutureOfResponse = () => (FutureOfResponse = dart.constFn(async.Future$(response.Response)))();
  let RequestToFutureOfResponse = () => (RequestToFutureOfResponse = dart.constFn(dart.fnType(FutureOfResponse(), [request.Request])))();
  let MapOfString$Object = () => (MapOfString$Object = dart.constFn(core.Map$(core.String, core.Object)))();
  let MapOfString$ObjectToHero = () => (MapOfString$ObjectToHero = dart.constFn(dart.fnType(hero.Hero, [MapOfString$Object()])))();
  let HeroToint = () => (HeroToint = dart.constFn(dart.fnType(core.int, [hero.Hero])))();
  let TAndTToT = () => (TAndTToT = dart.constFn(dart.gFnType(T => [T, [T, T]], T => [core.num])))();
  let HeroTobool = () => (HeroTobool = dart.constFn(dart.fnType(core.bool, [hero.Hero])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let JSArrayOfMapOfString$Object = () => (JSArrayOfMapOfString$Object = dart.constFn(_interceptors.JSArray$(MapOfString$Object())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(in_memory_data_service.InMemoryDataService._handler, RequestToFutureOfResponse());
    },
    get C1() {
      return C1 = dart.fn(math.max, TAndTToT());
    }
  });
  let C0;
  let C1;
  in_memory_data_service.InMemoryDataService = class InMemoryDataService extends mock_client.MockClient {
    static resetDb() {
      in_memory_data_service.InMemoryDataService._herosDb = in_memory_data_service.InMemoryDataService._initialHeroes[$map](hero.Hero, dart.fn(json => hero.Hero.fromJson(json), MapOfString$ObjectToHero()))[$toList]();
      in_memory_data_service.InMemoryDataService._nextId = dart.notNull(in_memory_data_service.InMemoryDataService._herosDb[$map](core.int, dart.fn(hero => hero.id, HeroToint()))[$fold](core.int, 0, dart.gbind(C1 || CT.C1, core.int))) + 1;
    }
    static _handler(request) {
      return async.async(response.Response, function* _handler() {
        let t0, t0$;
        if (in_memory_data_service.InMemoryDataService._herosDb == null) in_memory_data_service.InMemoryDataService.resetDb();
        let data = null;
        switch (request.method) {
          case "GET":
          {
            let id = core.int.tryParse(request.url.pathSegments[$last]);
            if (id != null) {
              data = in_memory_data_service.InMemoryDataService._herosDb[$firstWhere](dart.fn(hero => hero.id == id, HeroTobool()));
            } else {
              let preFix = (t0 = request.url.queryParameters[$_get]("name"), t0 == null ? "" : t0);
              let regExp = core.RegExp.new(preFix, {caseSensitive: false});
              data = in_memory_data_service.InMemoryDataService._herosDb[$where](dart.fn(hero => hero.name[$contains](regExp), HeroTobool()))[$toList]();
            }
            break;
          }
          case "PUT":
          {
            let heroChanges = hero.Hero.fromJson(MapOfString$Object()._check(convert.json.decode(request.body)));
            let targetHero = in_memory_data_service.InMemoryDataService._herosDb[$firstWhere](dart.fn(he => he.id == heroChanges.id, HeroTobool()));
            targetHero.name = heroChanges.name;
            data = targetHero;
            break;
          }
          case "POST":
          {
            let name = dart.dsend(convert.json.decode(request.body), '_get', ["name"]);
            let newHero = new hero.Hero.new({id: (t0$ = in_memory_data_service.InMemoryDataService._nextId, in_memory_data_service.InMemoryDataService._nextId = dart.notNull(t0$) + 1, t0$), name: core.String._check(name)});
            in_memory_data_service.InMemoryDataService._herosDb[$add](newHero);
            data = newHero;
            break;
          }
          case "DELETE":
          {
            let id = core.int.parse(request.url.pathSegments[$last]);
            in_memory_data_service.InMemoryDataService._herosDb[$removeWhere](dart.fn(hero => hero.id == id, HeroTobool()));
            break;
          }
        }
        return new response.Response.new(convert.json.encode(new (IdentityMapOfString$dynamic()).from(["data", data])), 200, {headers: new (IdentityMapOfString$String()).from(["content-type", "application/json"])});
      });
    }
  };
  (in_memory_data_service.InMemoryDataService.new = function() {
    in_memory_data_service.InMemoryDataService.__proto__.new.call(this, C0 || CT.C0);
    ;
  }).prototype = in_memory_data_service.InMemoryDataService.prototype;
  dart.addTypeTests(in_memory_data_service.InMemoryDataService);
  dart.setLibraryUri(in_memory_data_service.InMemoryDataService, "package:angular_dart_hero/src/commom/in_memory_data_service.dart");
  dart.defineLazy(in_memory_data_service.InMemoryDataService, {
    /*in_memory_data_service.InMemoryDataService._initialHeroes*/get _initialHeroes() {
      return JSArrayOfMapOfString$Object().of([new (IdentityMapOfString$Object()).from(["id", 11, "name", "Mr. Nice"]), new (IdentityMapOfString$Object()).from(["id", 12, "name", "Narco"]), new (IdentityMapOfString$Object()).from(["id", 13, "name", "Bombasto"]), new (IdentityMapOfString$Object()).from(["id", 14, "name", "Celeritas"]), new (IdentityMapOfString$Object()).from(["id", 15, "name", "Magneta"]), new (IdentityMapOfString$Object()).from(["id", 16, "name", "RubberMan"]), new (IdentityMapOfString$Object()).from(["id", 17, "name", "Dynama"]), new (IdentityMapOfString$Object()).from(["id", 18, "name", "Dr IQ"]), new (IdentityMapOfString$Object()).from(["id", 19, "name", "Magma"]), new (IdentityMapOfString$Object()).from(["id", 20, "name", "Tornado"])]);
    },
    /*in_memory_data_service.InMemoryDataService._herosDb*/get _herosDb() {
      return null;
    },
    set _herosDb(_) {},
    /*in_memory_data_service.InMemoryDataService._nextId*/get _nextId() {
      return null;
    },
    set _nextId(_) {}
  });
  dart.trackLibraries("packages/angular_dart_hero/src/commom/in_memory_data_service", {
    "package:angular_dart_hero/src/commom/in_memory_data_service.dart": in_memory_data_service
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["in_memory_data_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4BsE,MAAlE,sDAAU,AAAe,AAAiC,2EAA7B,QAAC,QAAY,mBAAS,IAAI;AACF,MAArD,qDAAmD,aAA1C,AAAS,AAAqB,oEAAjB,QAAC,QAAO,AAAK,IAAD,oCAAU,GAAG,sCAAK;IACtD;oBAGyC;AAAT;;AAC9B,YAAG,AAAS,uDAAG,MAAM,AAAS;AAC1B;AACJ,gBAAO,AAAQ,OAAD;;;AAEJ,qBAAQ,kBAAS,AAAQ,AAAI,AAAa,OAAlB;AAC9B,gBAAG,EAAE,IAAE;AAG6B,cADlC,OAAO,AACN,iEAAW,QAAC,QAAO,AAAK,AAAG,IAAJ,OAAO,EAAE;;AAG3B,4BAA4C,KAAnC,AAAQ,AAAI,AAAe,OAApB,4BAAqB,eAAD,OAAU;AAC9C,2BAAS,gBAAO,MAAM,kBAAe;AACuB,cAAlE,OAAO,AAAS,AAA0C,4DAApC,QAAC,QAAO,AAAK,AAAK,IAAN,iBAAe,MAAM;;AAE3D;;;;AAGQ,8BAAmB,+CAAS,AAAK,oBAAO,AAAQ,OAAD;AAC/C,6BAAa,AAAS,iEAAW,QAAC,MAAK,AAAG,AAAG,EAAJ,OAAO,AAAY,WAAD;AAC9B,YAAjC,AAAW,UAAD,QAAO,AAAY,WAAD;AACX,YAAjB,OAAO,UAAU;AACnB;;;;AAGI,uBAAgC,WAAzB,AAAK,oBAAO,AAAQ,OAAD,iBAAO;AACjC,0BAAU,wBACD,MAAP,6HAAO,kCACL,IAAI;AAES,YAArB,AAAS,0DAAI,OAAO;AACN,YAAd,OAAO,OAAO;AACd;;;;AAEI,qBAAS,eAAM,AAAQ,AAAI,AAAa,OAAlB;AACe,YAAzC,AAAS,kEAAY,QAAC,QAAO,AAAK,AAAE,IAAH,OAAK,EAAE;AACxC;;;AAGJ,cAAO,2BAAS,AAAK,oBAAO,0CAAC,QAAO,IAAI,KAAI,eACnC,yCAAC,gBAAe;MAC3B;;;;AAjEwB;;EAAe;;;;MAC1B,yDAAc;YAAG,mCAC5B,yCAAC,MAAM,IAAI,QAAQ,cACnB,yCAAC,MAAM,IAAI,QAAQ,WACnB,yCAAC,MAAM,IAAI,QAAQ,cACnB,yCAAC,MAAM,IAAI,QAAQ,eACnB,yCAAC,MAAM,IAAI,QAAQ,aACnB,yCAAC,MAAM,IAAI,QAAQ,eACnB,yCAAC,MAAM,IAAI,QAAQ,YACnB,yCAAC,MAAM,IAAI,QAAQ,WACnB,yCAAC,MAAM,IAAI,QAAQ,WACnB,yCAAC,MAAM,IAAI,QAAQ;;MAGH,mDAAQ;;;;MACf,kDAAO","file":"in_memory_data_service.ddc.js"}');
  // Exports:
  return {
    src__commom__in_memory_data_service: in_memory_data_service
  };
});

//# sourceMappingURL=in_memory_data_service.ddc.js.map
