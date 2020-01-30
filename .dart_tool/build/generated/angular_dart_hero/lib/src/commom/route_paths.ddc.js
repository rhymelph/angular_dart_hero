define(['dart_sdk', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/http/src/base_client', 'packages/stream_transform/src/aggregate_sample', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/runtime/text_binding', 'packages/angular_router/angular_router.template', 'packages/angular_router/src/constants', 'packages/angular/src/runtime/interpolate', 'packages/angular/angular.template', 'packages/angular_forms/src/directives', 'packages/angular_forms/angular_forms.template', 'packages/angular/src/runtime/proxies'], function(dart_sdk, packages__angular_router__src__directives__router_outlet_directive, packages__http__src__base_client, packages__stream_transform__src__aggregate_sample, packages__angular__src__core__change_detection__change_detection, packages__angular__src__bootstrap__modules, packages__angular__src__runtime__text_binding, packages__angular_router__angular_router$46template, packages__angular_router__src__constants, packages__angular__src__runtime__interpolate, packages__angular__angular$46template, packages__angular_forms__src__directives, packages__angular_forms__angular_forms$46template, packages__angular__src__runtime__proxies) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const lifecycle = packages__angular_router__src__directives__router_outlet_directive.src__lifecycle;
  const router_state = packages__angular_router__src__directives__router_outlet_directive.src__router__router_state;
  const location = packages__angular_router__src__directives__router_outlet_directive.src__location__location;
  const route_path = packages__angular_router__src__directives__router_outlet_directive.src__route_path;
  const router = packages__angular_router__src__directives__router_outlet_directive.src__router__router;
  const location_strategy = packages__angular_router__src__directives__router_outlet_directive.src__location__location_strategy;
  const route_definition = packages__angular_router__src__directives__router_outlet_directive.src__route_definition;
  const response = packages__http__src__base_client.src__response;
  const client = packages__http__src__base_client.src__client;
  const $switch = packages__stream_transform__src__aggregate_sample.src__switch;
  const rate_limit = packages__stream_transform__src__aggregate_sample.src__rate_limit;
  const lifecycle_hooks = packages__angular__src__core__change_detection__change_detection.src__core__metadata__lifecycle_hooks;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const async_pipe = packages__angular__src__bootstrap__modules.src__common__pipes__async_pipe;
  const ng_if = packages__angular__src__bootstrap__modules.src__common__directives__ng_if;
  const uppercase_pipe = packages__angular__src__bootstrap__modules.src__common__pipes__uppercase_pipe;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const router_link_directive$46template = packages__angular_router__angular_router$46template.src__directives__router_link_directive$46template;
  const angular_router$46template = packages__angular_router__angular_router$46template.angular_router$46template;
  const router_link_directive = packages__angular_router__src__constants.src__directives__router_link_directive;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const default_value_accessor = packages__angular_forms__src__directives.src__directives__default_value_accessor;
  const control_value_accessor = packages__angular_forms__src__directives.src__directives__control_value_accessor;
  const ng_model = packages__angular_forms__src__directives.src__directives__ng_model;
  const ng_control = packages__angular_forms__src__directives.src__directives__ng_control;
  const angular_forms$46template = packages__angular_forms__angular_forms$46template.angular_forms$46template;
  const proxies = packages__angular__src__runtime__proxies.src__runtime__proxies;
  const heros_component$46css$46shim = Object.create(dart.library);
  const hero_component = Object.create(dart.library);
  const hero$ = Object.create(dart.library);
  const hero_service = Object.create(dart.library);
  const route_paths = Object.create(dart.library);
  const hero_search_component = Object.create(dart.library);
  const hero_search_service = Object.create(dart.library);
  const dashboard_component$46template = Object.create(dart.library);
  const hero_search_component$46template = Object.create(dart.library);
  const hero_search_component$46css$46shim = Object.create(dart.library);
  const hero$46template = Object.create(dart.library);
  const route_paths$46template = Object.create(dart.library);
  const hero_search_service$46template = Object.create(dart.library);
  const dashboard_component = Object.create(dart.library);
  const dashboard_component$46css$46shim = Object.create(dart.library);
  const hero_service$46template = Object.create(dart.library);
  const hero_component$46css$46shim = Object.create(dart.library);
  const heros_component = Object.create(dart.library);
  const hero_component$46template = Object.create(dart.library);
  const heros_component$46template = Object.create(dart.library);
  const routes = Object.create(dart.library);
  const $_get = dartx._get;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $isEmpty = dartx.isEmpty;
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $skip = dartx.skip;
  const $take = dartx.take;
  const $addEventListener = dartx.addEventListener;
  const $trim = dartx.trim;
  const $add = dartx.add;
  const $remove = dartx.remove;
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let MapOfString$Object = () => (MapOfString$Object = dart.constFn(core.Map$(core.String, core.Object)))();
  let dynamicToHero = () => (dynamicToHero = dart.constFn(dart.fnType(hero$.Hero, [dart.dynamic])))();
  let ListOfHero = () => (ListOfHero = dart.constFn(core.List$(hero$.Hero)))();
  let FutureOfListOfHero = () => (FutureOfListOfHero = dart.constFn(async.Future$(ListOfHero())))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let JSArrayOfHero = () => (JSArrayOfHero = dart.constFn(_interceptors.JSArray$(hero$.Hero)))();
  let StreamControllerOfString = () => (StreamControllerOfString = dart.constFn(async.StreamController$(core.String)))();
  let StreamOfListOfHero = () => (StreamOfListOfHero = dart.constFn(async.Stream$(ListOfHero())))();
  let JSArrayOfListOfHero = () => (JSArrayOfListOfHero = dart.constFn(_interceptors.JSArray$(ListOfHero())))();
  let StringToStreamOfListOfHero = () => (StringToStreamOfListOfHero = dart.constFn(dart.fnType(StreamOfListOfHero(), [core.String])))();
  let ObjectTovoid = () => (ObjectTovoid = dart.constFn(dart.fnType(dart.void, [core.Object])))();
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [app_view.AppView, core.int])))();
  let VoidToHeroSearchService = () => (VoidToHeroSearchService = dart.constFn(dart.fnType(hero_search_service.HeroSearchService, [])))();
  let VoidToHeroSearchComponent = () => (VoidToHeroSearchComponent = dart.constFn(dart.fnType(hero_search_component.HeroSearchComponent, [])))();
  let ListOfHeroToNull = () => (ListOfHeroToNull = dart.constFn(dart.fnType(core.Null, [ListOfHero()])))();
  let VoidToRouterLink = () => (VoidToRouterLink = dart.constFn(dart.fnType(router_link_directive.RouterLink, [])))();
  let VoidToHeroService = () => (VoidToHeroService = dart.constFn(dart.fnType(hero_service.HeroService, [])))();
  let ComponentRefOfDashboardComponent = () => (ComponentRefOfDashboardComponent = dart.constFn(component_factory.ComponentRef$(dashboard_component.DashboardComponent)))();
  let ComponentFactoryOfDashboardComponent = () => (ComponentFactoryOfDashboardComponent = dart.constFn(component_factory.ComponentFactory$(dashboard_component.DashboardComponent)))();
  let AppViewOfDashboardComponent = () => (AppViewOfDashboardComponent = dart.constFn(app_view.AppView$(dashboard_component.DashboardComponent)))();
  let AppViewAndintToAppViewOfDashboardComponent = () => (AppViewAndintToAppViewOfDashboardComponent = dart.constFn(dart.fnType(AppViewOfDashboardComponent(), [app_view.AppView, core.int])))();
  let IterableOfObject = () => (IterableOfObject = dart.constFn(core.Iterable$(core.Object)))();
  let ComponentRefOfHeroSearchComponent = () => (ComponentRefOfHeroSearchComponent = dart.constFn(component_factory.ComponentRef$(hero_search_component.HeroSearchComponent)))();
  let ComponentFactoryOfHeroSearchComponent = () => (ComponentFactoryOfHeroSearchComponent = dart.constFn(component_factory.ComponentFactory$(hero_search_component.HeroSearchComponent)))();
  let AppViewOfHeroSearchComponent = () => (AppViewOfHeroSearchComponent = dart.constFn(app_view.AppView$(hero_search_component.HeroSearchComponent)))();
  let AppViewAndintToAppViewOfHeroSearchComponent = () => (AppViewAndintToAppViewOfHeroSearchComponent = dart.constFn(dart.fnType(AppViewOfHeroSearchComponent(), [app_view.AppView, core.int])))();
  let ClientToHeroSearchService = () => (ClientToHeroSearchService = dart.constFn(dart.fnType(hero_search_service.HeroSearchService, [client.Client])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let ClientToHeroService = () => (ClientToHeroService = dart.constFn(dart.fnType(hero_service.HeroService, [client.Client])))();
  let JSArrayOfControlValueAccessor = () => (JSArrayOfControlValueAccessor = dart.constFn(_interceptors.JSArray$(control_value_accessor.ControlValueAccessor)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let StreamSubscriptionOfvoid = () => (StreamSubscriptionOfvoid = dart.constFn(async.StreamSubscription$(dart.void)))();
  let JSArrayOfStreamSubscriptionOfvoid = () => (JSArrayOfStreamSubscriptionOfvoid = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfvoid())))();
  let MultiTokenOfControlValueAccessor = () => (MultiTokenOfControlValueAccessor = dart.constFn(opaque_token.MultiToken$(control_value_accessor.ControlValueAccessor)))();
  let VoidToLocation = () => (VoidToLocation = dart.constFn(dart.fnType(location.Location, [])))();
  let ComponentRefOfHeroComponent = () => (ComponentRefOfHeroComponent = dart.constFn(component_factory.ComponentRef$(hero_component.HeroComponent)))();
  let ComponentFactoryOfHeroComponent = () => (ComponentFactoryOfHeroComponent = dart.constFn(component_factory.ComponentFactory$(hero_component.HeroComponent)))();
  let AppViewOfHeroComponent = () => (AppViewOfHeroComponent = dart.constFn(app_view.AppView$(hero_component.HeroComponent)))();
  let AppViewAndintToAppViewOfHeroComponent = () => (AppViewAndintToAppViewOfHeroComponent = dart.constFn(dart.fnType(AppViewOfHeroComponent(), [app_view.AppView, core.int])))();
  let VoidToHerosComponent = () => (VoidToHerosComponent = dart.constFn(dart.fnType(heros_component.HerosComponent, [])))();
  let ComponentRefOfHerosComponent = () => (ComponentRefOfHerosComponent = dart.constFn(component_factory.ComponentRef$(heros_component.HerosComponent)))();
  let ComponentFactoryOfHerosComponent = () => (ComponentFactoryOfHerosComponent = dart.constFn(component_factory.ComponentFactory$(heros_component.HerosComponent)))();
  let AppViewOfHerosComponent = () => (AppViewOfHerosComponent = dart.constFn(app_view.AppView$(heros_component.HerosComponent)))();
  let AppViewAndintToAppViewOfHerosComponent = () => (AppViewAndintToAppViewOfHerosComponent = dart.constFn(dart.fnType(AppViewOfHerosComponent(), [app_view.AppView, core.int])))();
  let JSArrayOfRouteDefinition = () => (JSArrayOfRouteDefinition = dart.constFn(_interceptors.JSArray$(route_definition.RouteDefinition)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constMap(core.String, core.String, ["content-type", "application/json"]);
    },
    get C1() {
      return C1 = dart.fn(core.print, ObjectTovoid());
    },
    get C2() {
      return C2 = dart.fn(dashboard_component$46template.viewFactory_DashboardComponent1, AppViewAndintToAppViewOfvoid());
    },
    get C4() {
      return C4 = dart.fn(dashboard_component$46template.viewFactory_DashboardComponentHost0, AppViewAndintToAppViewOfDashboardComponent());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ComponentFactoryOfDashboardComponent().prototype,
        [ComponentFactory__viewFactory]: C4 || CT.C4,
        [ComponentFactory_selector]: "my-dashboard"
      });
    },
    get C5() {
      return C5 = dart.constList([], dart.dynamic);
    },
    get C6() {
      return C6 = dart.fn(hero_search_component$46template.viewFactory_HeroSearchComponent1, AppViewAndintToAppViewOfvoid());
    },
    get C8() {
      return C8 = dart.fn(hero_search_component$46template.viewFactory_HeroSearchComponentHost0, AppViewAndintToAppViewOfHeroSearchComponent());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ComponentFactoryOfHeroSearchComponent().prototype,
        [ComponentFactory__viewFactory]: C8 || CT.C8,
        [ComponentFactory_selector]: "hero-search"
      });
    },
    get C11() {
      return C11 = dart.wrapType(client.Client);
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11], core.Object);
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10], ListOfObject());
    },
    get C12() {
      return C12 = dart.fn(hero_component$46template.viewFactory_HeroComponent1, AppViewAndintToAppViewOfvoid());
    },
    get C13() {
      return C13 = dart.const({
        __proto__: MultiTokenOfControlValueAccessor().prototype,
        [OpaqueToken__uniqueName]: "NgValueAccessor"
      });
    },
    get C15() {
      return C15 = dart.fn(hero_component$46template.viewFactory_HeroComponentHost0, AppViewAndintToAppViewOfHeroComponent());
    },
    get C14() {
      return C14 = dart.const({
        __proto__: ComponentFactoryOfHeroComponent().prototype,
        [ComponentFactory__viewFactory]: C15 || CT.C15,
        [ComponentFactory_selector]: "my-hero"
      });
    },
    get C16() {
      return C16 = dart.fn(heros_component$46template.viewFactory_HerosComponent1, AppViewAndintToAppViewOfvoid());
    },
    get C17() {
      return C17 = dart.fn(heros_component$46template.viewFactory_HerosComponent2, AppViewAndintToAppViewOfvoid());
    },
    get C19() {
      return C19 = dart.fn(heros_component$46template.viewFactory_HerosComponentHost0, AppViewAndintToAppViewOfHerosComponent());
    },
    get C18() {
      return C18 = dart.const({
        __proto__: ComponentFactoryOfHerosComponent().prototype,
        [ComponentFactory__viewFactory]: C19 || CT.C19,
        [ComponentFactory_selector]: "my-heros"
      });
    }
  });
  dart.defineLazy(heros_component$46css$46shim, {
    /*heros_component$46css$46shim.styles*/get styles() {
      return [".selected._ngcontent-%ID%{background-color:#CFD8DC!important;color:white}.heros._ngcontent-%ID%{margin:0 0 2em 0;list-style-type:none;padding:0;width:15em}.heros._ngcontent-%ID% li._ngcontent-%ID%{cursor:pointer;position:relative;left:0;background-color:#EEE;margin:.5em;padding:.3em 0;height:1.6em;border-radius:4px}.heros._ngcontent-%ID% li:hover._ngcontent-%ID%{color:#607D8B;background-color:#EEE;left:.1em}.heros._ngcontent-%ID% li.selected:hover._ngcontent-%ID%{background-color:#BBD8DC!important;color:white}.heros._ngcontent-%ID% .text._ngcontent-%ID%{position:relative;top:-3px}.heros._ngcontent-%ID% .badge._ngcontent-%ID%{display:inline-block;font-size:small;color:white;padding:0.8em .7em 0 .7em;background-color:#607D8B;line-height:1em;position:relative;left:-1px;top:-4px;height:1.8em;margin-right:.8em;border-radius:4px 0 0 4px}button._ngcontent-%ID%{font-family:Arial;background-color:#eee;border:none;padding:5px 10px;border-radius:4px;cursor:pointer;cursor:hand}button:hover._ngcontent-%ID%{background-color:#cfd8dc}button.delete._ngcontent-%ID%{float:right;margin-top:2px;margin-right:.8em;background-color:gray!important;color:white}"];
    }
  });
  const _heroService$ = dart.privateName(hero_component, "_heroService");
  const _location$ = dart.privateName(hero_component, "_location");
  const hero = dart.privateName(hero_component, "HeroComponent.hero");
  hero_component.HeroComponent = class HeroComponent extends core.Object {
    get hero() {
      return this[hero];
    }
    set hero(value) {
      this[hero] = value;
    }
    onActivate(previous, current) {
      return async.async(dart.void, (function* onActivate() {
        let id = this.getId(current.parameters);
        if (id != null) this.hero = (yield this[_heroService$].get(id));
      }).bind(this));
    }
    getId(parameters) {
      let id = parameters[$_get]("id");
      return id == null ? null : core.int.parse(id);
    }
    goBack() {
      return this[_location$].back();
    }
    save() {
      this[_heroService$].update(this.hero);
      this.goBack();
    }
  };
  (hero_component.HeroComponent.new = function(_heroService, _location) {
    this[hero] = null;
    this[_heroService$] = _heroService;
    this[_location$] = _location;
    ;
  }).prototype = hero_component.HeroComponent.prototype;
  dart.addTypeTests(hero_component.HeroComponent);
  hero_component.HeroComponent[dart.implements] = () => [lifecycle.OnActivate];
  dart.setMethodSignature(hero_component.HeroComponent, () => ({
    __proto__: dart.getMethods(hero_component.HeroComponent.__proto__),
    onActivate: dart.fnType(dart.void, [router_state.RouterState, router_state.RouterState]),
    getId: dart.fnType(core.int, [core.Map$(core.String, core.String)]),
    goBack: dart.fnType(dart.void, []),
    save: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(hero_component.HeroComponent, "package:angular_dart_hero/src/component/hero_component/hero_component.dart");
  dart.setFieldSignature(hero_component.HeroComponent, () => ({
    __proto__: dart.getFields(hero_component.HeroComponent.__proto__),
    hero: dart.fieldType(hero$.Hero),
    [_heroService$]: dart.finalFieldType(hero_service.HeroService),
    [_location$]: dart.finalFieldType(location.Location)
  }));
  const id$ = dart.privateName(hero$, "Hero.id");
  const name$ = dart.privateName(hero$, "Hero.name");
  hero$.Hero = class Hero extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    static fromJson(json) {
      return new hero$.Hero.new({id: hero$._toInt(json[$_get]("id")), name: core.String._check(json[$_get]("name"))});
    }
    toJson() {
      return new (IdentityMapOfString$Object()).from(["id", this.id, "name", this.name]);
    }
  };
  (hero$.Hero.new = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let name = opts && 'name' in opts ? opts.name : null;
    this[id$] = id;
    this[name$] = name;
    ;
  }).prototype = hero$.Hero.prototype;
  dart.addTypeTests(hero$.Hero);
  dart.setMethodSignature(hero$.Hero, () => ({
    __proto__: dart.getMethods(hero$.Hero.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(hero$.Hero, "package:angular_dart_hero/src/model/hero.dart");
  dart.setFieldSignature(hero$.Hero, () => ({
    __proto__: dart.getFields(hero$.Hero.__proto__),
    id: dart.finalFieldType(core.int),
    name: dart.fieldType(core.String)
  }));
  hero$._toInt = function _toInt(id) {
    return core.int.is(id) ? id : core.int.parse(core.String._check(id));
  };
  const _http$ = dart.privateName(hero_service, "_http");
  const _extractData = dart.privateName(hero_service, "_extractData");
  const _handleError = dart.privateName(hero_service, "_handleError");
  hero_service.HeroService = class HeroService extends core.Object {
    getAll() {
      return async.async(ListOfHero(), (function* getAll() {
        try {
          let response = (yield this[_http$].get("api/heros"));
          let heros = core.List.as(this[_extractData](response))[$map](hero$.Hero, dart.fn(json => hero$.Hero.fromJson(MapOfString$Object()._check(json)), dynamicToHero()))[$toList]();
          return heros;
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(this[_handleError](e));
        }
      }).bind(this));
    }
    getAllSlowly() {
      return async.async(ListOfHero(), (function* getAllSlowly() {
        return FutureOfListOfHero().delayed(new core.Duration.new({seconds: 2}), dart.bind(this, 'getAll'));
      }).bind(this));
    }
    get(id) {
      return async.async(hero$.Hero, (function* get() {
        try {
          let response = (yield this[_http$].get("api/heros" + "/" + dart.str(id)));
          return hero$.Hero.fromJson(MapOfString$Object()._check(this[_extractData](response)));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(this[_handleError](e));
        }
      }).bind(this));
    }
    update(hero) {
      return async.async(hero$.Hero, (function* update() {
        try {
          let url = "api/heros" + "/" + dart.str(hero.id);
          let response = (yield this[_http$].put(url, {headers: hero_service._headers, body: convert.json.encode(hero)}));
          return hero$.Hero.fromJson(MapOfString$Object()._check(this[_extractData](response)));
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(this[_handleError](e));
        }
      }).bind(this));
    }
    create(heroName) {
      return async.async(hero$.Hero, (function* create() {
        try {
          let response = (yield this[_http$].post("api/heros", {headers: hero_service._headers, body: convert.json.encode(new (IdentityMapOfString$String()).from(["name", heroName]))}));
          return hero$.Hero.fromJson(MapOfString$Object()._check(this[_extractData](response)));
        } catch (e$) {
          let e = dart.getThrown(e$);
          this[_handleError](e);
        }
      }).bind(this));
    }
    delete(id) {
      return async.async(dart.void, (function* $delete() {
        try {
          yield this[_http$].delete("api/heros" + "/" + dart.str(id));
        } catch (e$) {
          let e = dart.getThrown(e$);
          this[_handleError](e);
        }
      }).bind(this));
    }
    [_handleError](e) {
      core.print(e);
      return core.Exception.new("Service error ,case: " + dart.str(e));
    }
    [_extractData](rep) {
      return dart.dsend(convert.json.decode(rep.body), '_get', ["data"]);
    }
  };
  (hero_service.HeroService.new = function(_http) {
    this[_http$] = _http;
    ;
  }).prototype = hero_service.HeroService.prototype;
  dart.addTypeTests(hero_service.HeroService);
  dart.setMethodSignature(hero_service.HeroService, () => ({
    __proto__: dart.getMethods(hero_service.HeroService.__proto__),
    getAll: dart.fnType(async.Future$(core.List$(hero$.Hero)), []),
    getAllSlowly: dart.fnType(async.Future$(core.List$(hero$.Hero)), []),
    get: dart.fnType(async.Future$(hero$.Hero), [core.int]),
    update: dart.fnType(async.Future$(hero$.Hero), [hero$.Hero]),
    create: dart.fnType(async.Future$(hero$.Hero), [core.String]),
    delete: dart.fnType(async.Future$(dart.void), [core.int]),
    [_handleError]: dart.fnType(core.Exception, [dart.dynamic]),
    [_extractData]: dart.fnType(dart.dynamic, [response.Response])
  }));
  dart.setLibraryUri(hero_service.HeroService, "package:angular_dart_hero/src/component/hero_component/hero_service.dart");
  dart.setFieldSignature(hero_service.HeroService, () => ({
    __proto__: dart.getFields(hero_service.HeroService.__proto__),
    [_http$]: dart.finalFieldType(client.Client)
  }));
  let C0;
  dart.defineLazy(hero_service, {
    /*hero_service.mockHeroes*/get mockHeroes() {
      return JSArrayOfHero().of([new hero$.Hero.new({id: 11, name: "Mr. Nice"}), new hero$.Hero.new({id: 12, name: "Narco"}), new hero$.Hero.new({id: 13, name: "Bombasto"}), new hero$.Hero.new({id: 14, name: "Celeritas"}), new hero$.Hero.new({id: 15, name: "Magneta"}), new hero$.Hero.new({id: 16, name: "RubberMan"}), new hero$.Hero.new({id: 17, name: "Dynama"}), new hero$.Hero.new({id: 18, name: "Dr IQ"}), new hero$.Hero.new({id: 19, name: "Magma"}), new hero$.Hero.new({id: 20, name: "Tornado"})]);
    },
    /*hero_service._heroUrl*/get _heroUrl() {
      return "api/heros";
    },
    /*hero_service._headers*/get _headers() {
      return C0 || CT.C0;
    }
  });
  route_paths.RoutePaths = class RoutePaths extends core.Object {};
  (route_paths.RoutePaths.new = function() {
    ;
  }).prototype = route_paths.RoutePaths.prototype;
  dart.addTypeTests(route_paths.RoutePaths);
  dart.setLibraryUri(route_paths.RoutePaths, "package:angular_dart_hero/src/commom/route_paths.dart");
  dart.defineLazy(route_paths.RoutePaths, {
    /*route_paths.RoutePaths.heros*/get heros() {
      return new route_path.RoutePath.new({path: "heros"});
    },
    /*route_paths.RoutePaths.dashboard*/get dashboard() {
      return new route_path.RoutePath.new({path: "dashboard"});
    },
    /*route_paths.RoutePaths.hero*/get hero() {
      return new route_path.RoutePath.new({path: dart.str(route_paths.RoutePaths.heros.path) + "/:" + "id"});
    }
  });
  dart.defineLazy(route_paths, {
    /*route_paths.idParam*/get idParam() {
      return "id";
    }
  });
  const _searchTerms = dart.privateName(hero_search_component, "_searchTerms");
  const _searchService$ = dart.privateName(hero_search_component, "_searchService");
  const _router$ = dart.privateName(hero_search_component, "_router");
  let C1;
  const _heroUrl = dart.privateName(hero_search_component, "_heroUrl");
  const heros = dart.privateName(hero_search_component, "HeroSearchComponent.heros");
  hero_search_component.HeroSearchComponent = class HeroSearchComponent extends core.Object {
    get heros() {
      return this[heros];
    }
    set heros(value) {
      this[heros] = value;
    }
    search(keywork) {
      this[_searchTerms].add(keywork);
    }
    ngOnInit() {
      this.heros = $switch['Switch|switchMap'](core.String, ListOfHero(), rate_limit['RateLimit|debounce'](core.String, this[_searchTerms].stream, new core.Duration.new({milliseconds: 300})).distinct(), dart.fn(term => term[$isEmpty] ? StreamOfListOfHero().fromIterable(JSArrayOfListOfHero().of([JSArrayOfHero().of([])])) : this[_searchService$].search(term).asStream(), StringToStreamOfListOfHero())).handleError(C1 || CT.C1);
    }
    [_heroUrl](id) {
      return route_paths.RoutePaths.hero.toUrl({parameters: new (IdentityMapOfString$String()).from(["id", dart.str(id)])});
    }
    gotoDetail(hero) {
      return this[_router$].navigate(this[_heroUrl](hero.id));
    }
  };
  (hero_search_component.HeroSearchComponent.new = function(_searchService, _router) {
    this[heros] = null;
    this[_searchTerms] = StreamControllerOfString().broadcast();
    this[_searchService$] = _searchService;
    this[_router$] = _router;
    ;
  }).prototype = hero_search_component.HeroSearchComponent.prototype;
  dart.addTypeTests(hero_search_component.HeroSearchComponent);
  hero_search_component.HeroSearchComponent[dart.implements] = () => [lifecycle_hooks.OnInit];
  dart.setMethodSignature(hero_search_component.HeroSearchComponent, () => ({
    __proto__: dart.getMethods(hero_search_component.HeroSearchComponent.__proto__),
    search: dart.fnType(dart.void, [core.String]),
    ngOnInit: dart.fnType(dart.void, []),
    [_heroUrl]: dart.fnType(core.String, [core.int]),
    gotoDetail: dart.fnType(async.Future$(router.NavigationResult), [hero$.Hero])
  }));
  dart.setLibraryUri(hero_search_component.HeroSearchComponent, "package:angular_dart_hero/src/component/hero_search_component/hero_search_component.dart");
  dart.setFieldSignature(hero_search_component.HeroSearchComponent, () => ({
    __proto__: dart.getFields(hero_search_component.HeroSearchComponent.__proto__),
    [_searchService$]: dart.finalFieldType(hero_search_service.HeroSearchService),
    [_router$]: dart.fieldType(router.Router),
    heros: dart.fieldType(async.Stream$(core.List$(hero$.Hero))),
    [_searchTerms]: dart.fieldType(async.StreamController$(core.String))
  }));
  const _http$0 = dart.privateName(hero_search_service, "_http");
  const _extractData$ = dart.privateName(hero_search_service, "_extractData");
  const _handleError$ = dart.privateName(hero_search_service, "_handleError");
  hero_search_service.HeroSearchService = class HeroSearchService extends core.Object {
    search(team) {
      return async.async(ListOfHero(), (function* search() {
        try {
          let response = (yield this[_http$0].get("app/heros/?name=" + dart.str(team)));
          return core.List.as(this[_extractData$](response))[$map](hero$.Hero, dart.fn(json => hero$.Hero.fromJson(MapOfString$Object()._check(json)), dynamicToHero()))[$toList]();
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw(this[_handleError$](e));
        }
      }).bind(this));
    }
    [_handleError$](e) {
      core.print(e);
      return core.Exception.new("Service error ,case: " + dart.str(e));
    }
    [_extractData$](rep) {
      return dart.dsend(convert.json.decode(rep.body), '_get', ["data"]);
    }
  };
  (hero_search_service.HeroSearchService.new = function(_http) {
    this[_http$0] = _http;
    ;
  }).prototype = hero_search_service.HeroSearchService.prototype;
  dart.addTypeTests(hero_search_service.HeroSearchService);
  dart.setMethodSignature(hero_search_service.HeroSearchService, () => ({
    __proto__: dart.getMethods(hero_search_service.HeroSearchService.__proto__),
    search: dart.fnType(async.Future$(core.List$(hero$.Hero)), [core.String]),
    [_handleError$]: dart.fnType(core.Exception, [dart.dynamic]),
    [_extractData$]: dart.fnType(dart.dynamic, [response.Response])
  }));
  dart.setLibraryUri(hero_search_service.HeroSearchService, "package:angular_dart_hero/src/component/hero_search_component/hero_search_service.dart");
  dart.setFieldSignature(hero_search_service.HeroSearchService, () => ({
    __proto__: dart.getFields(hero_search_service.HeroSearchService.__proto__),
    [_http$0]: dart.finalFieldType(client.Client)
  }));
  const _appEl_3 = dart.privateName(dashboard_component$46template, "_appEl_3");
  const _NgFor_3_9 = dart.privateName(dashboard_component$46template, "_NgFor_3_9");
  const _compView_4 = dart.privateName(dashboard_component$46template, "_compView_4");
  const _HeroSearchService_4_5 = dart.privateName(dashboard_component$46template, "_HeroSearchService_4_5");
  const _HeroSearchComponent_4_6 = dart.privateName(dashboard_component$46template, "_HeroSearchComponent_4_6");
  const _expr_0 = dart.privateName(dashboard_component$46template, "_expr_0");
  let C2;
  const _heroService$0 = dart.privateName(dashboard_component, "_heroService");
  const heros$ = dart.privateName(dashboard_component, "DashboardComponent.heros");
  dashboard_component.DashboardComponent = class DashboardComponent extends core.Object {
    get heros() {
      return this[heros$];
    }
    set heros(value) {
      this[heros$] = value;
    }
    ngOnInit() {
      this[_heroService$0].getAll().then(core.Null, dart.fn(data => {
        this.heros = data[$skip](1)[$take](4)[$toList]();
      }, ListOfHeroToNull()));
    }
    heroUrl(id) {
      return route_paths.RoutePaths.hero.toUrl({parameters: new (IdentityMapOfString$String()).from(["id", dart.str(id)])});
    }
  };
  (dashboard_component.DashboardComponent.new = function(_heroService) {
    this[heros$] = null;
    this[_heroService$0] = _heroService;
    ;
  }).prototype = dashboard_component.DashboardComponent.prototype;
  dart.addTypeTests(dashboard_component.DashboardComponent);
  dashboard_component.DashboardComponent[dart.implements] = () => [lifecycle_hooks.OnInit];
  dart.setMethodSignature(dashboard_component.DashboardComponent, () => ({
    __proto__: dart.getMethods(dashboard_component.DashboardComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    heroUrl: dart.fnType(core.String, [core.int])
  }));
  dart.setLibraryUri(dashboard_component.DashboardComponent, "package:angular_dart_hero/src/component/dashboard_component/dashboard_component.dart");
  dart.setFieldSignature(dashboard_component.DashboardComponent, () => ({
    __proto__: dart.getFields(dashboard_component.DashboardComponent.__proto__),
    heros: dart.fieldType(core.List$(hero$.Hero)),
    [_heroService$0]: dart.finalFieldType(hero_service.HeroService)
  }));
  dashboard_component$46template.ViewDashboardComponent0 = class ViewDashboardComponent0 extends app_view.AppView$(dashboard_component.DashboardComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_dart_hero/lib/src/component/dashboard_component/dashboard_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = dom_helpers.appendElement(doc, parentRenderNode, "h3");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "Top Heros");
      let _el_2 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_2, "grid grid-pad");
      this.addShimC(_el_2);
      let _anchor_3 = dom_helpers.appendAnchor(_el_2);
      this[_appEl_3] = new view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new template_ref.TemplateRef.new(this[_appEl_3], C2 || CT.C2);
      this[_NgFor_3_9] = new ng_for.NgFor.new(this[_appEl_3], _TemplateRef_3_8);
      this[_compView_4] = new hero_search_component$46template.ViewHeroSearchComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootEl;
      parentRenderNode[$append](_el_4);
      this.addShimC(_el_4);
      this[_HeroSearchService_4_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(hero_search_service.HeroSearchService, dart.wrapType(hero_search_service.HeroSearchService), dart.fn(() => new hero_search_service.HeroSearchService.new(client.Client._check(this.parentView.injectorGet(dart.wrapType(client.Client), this.viewData.parentIndex))), VoidToHeroSearchService())) : new hero_search_service.HeroSearchService.new(client.Client._check(this.parentView.injectorGet(dart.wrapType(client.Client), this.viewData.parentIndex)));
      this[_HeroSearchComponent_4_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(hero_search_component.HeroSearchComponent, dart.wrapType(hero_search_component.HeroSearchComponent), dart.fn(() => new hero_search_component.HeroSearchComponent.new(hero_search_service.HeroSearchService._check(this[_HeroSearchService_4_5]), router.Router._check(this.parentView.injectorGet(dart.wrapType(router.Router), this.viewData.parentIndex))), VoidToHeroSearchComponent())) : new hero_search_component.HeroSearchComponent.new(hero_search_service.HeroSearchService._check(this[_HeroSearchService_4_5]), router.Router._check(this.parentView.injectorGet(dart.wrapType(router.Router), this.viewData.parentIndex)));
      this[_compView_4].create0(this[_HeroSearchComponent_4_6]);
      this.init0();
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(hero_search_service.HeroSearchService) && 4 === nodeIndex) {
        return this[_HeroSearchService_4_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_0 = _ctx.heros;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_NgFor_3_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_3_9].ngDoCheck();
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_HeroSearchComponent_4_6].ngOnInit();
      }
      this[_appEl_3].detectChangesInNestedViews();
      this[_compView_4].detectChanges();
    }
    destroyInternal() {
      this[_appEl_3].destroyNestedViews();
      this[_compView_4].destroyInternalState();
    }
    initComponentStyles() {
      let styles = dashboard_component$46template.ViewDashboardComponent0._componentStyles;
      if (styles == null) {
        dashboard_component$46template.ViewDashboardComponent0._componentStyles = styles = dashboard_component$46template.ViewDashboardComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(dashboard_component$46template.styles$DashboardComponent, dashboard_component$46template.ViewDashboardComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (dashboard_component$46template.ViewDashboardComponent0.new = function(parentView, parentIndex) {
    this[_appEl_3] = null;
    this[_NgFor_3_9] = null;
    this[_compView_4] = null;
    this[_HeroSearchService_4_5] = null;
    this[_HeroSearchComponent_4_6] = null;
    this[_expr_0] = null;
    dashboard_component$46template.ViewDashboardComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("my-dashboard"));
  }).prototype = dashboard_component$46template.ViewDashboardComponent0.prototype;
  dart.addTypeTests(dashboard_component$46template.ViewDashboardComponent0);
  dart.setMethodSignature(dashboard_component$46template.ViewDashboardComponent0, () => ({
    __proto__: dart.getMethods(dashboard_component$46template.ViewDashboardComponent0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(dashboard_component$46template.ViewDashboardComponent0, "package:angular_dart_hero/src/component/dashboard_component/dashboard_component.template.dart");
  dart.setFieldSignature(dashboard_component$46template.ViewDashboardComponent0, () => ({
    __proto__: dart.getFields(dashboard_component$46template.ViewDashboardComponent0.__proto__),
    [_appEl_3]: dart.fieldType(view_container.ViewContainer),
    [_NgFor_3_9]: dart.fieldType(ng_for.NgFor),
    [_compView_4]: dart.fieldType(hero_search_component$46template.ViewHeroSearchComponent0),
    [_HeroSearchService_4_5]: dart.fieldType(dart.dynamic),
    [_HeroSearchComponent_4_6]: dart.fieldType(hero_search_component.HeroSearchComponent),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(dashboard_component$46template.ViewDashboardComponent0, {
    /*dashboard_component$46template.ViewDashboardComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _textBinding_3 = dart.privateName(dashboard_component$46template, "_textBinding_3");
  const _RouterLink_0_5 = dart.privateName(dashboard_component$46template, "_RouterLink_0_5");
  const _el_0 = dart.privateName(dashboard_component$46template, "_el_0");
  dashboard_component$46template._ViewDashboardComponent1 = class _ViewDashboardComponent1 extends app_view.AppView$(dashboard_component.DashboardComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.AnchorElement._check(doc[$createElement]("a"));
      this.updateChildClass(this[_el_0], "col-1-4");
      this.addShimC(this[_el_0]);
      this[_RouterLink_0_5] = new router_link_directive$46template.RouterLinkNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(router_link_directive.RouterLink, dart.wrapType(router_link_directive.RouterLink), dart.fn(() => new router_link_directive.RouterLink.new(router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(router.Router), this.parentView.viewData.parentIndex)), location.Location._check(this.parentView.parentView.injectorGet(dart.wrapType(location.Location), this.parentView.viewData.parentIndex)), null, this[_el_0]), VoidToRouterLink())) : new router_link_directive.RouterLink.new(router.Router._check(this.parentView.parentView.injectorGet(dart.wrapType(router.Router), this.parentView.viewData.parentIndex)), location.Location._check(this.parentView.parentView.injectorGet(dart.wrapType(location.Location), this.parentView.viewData.parentIndex)), null, this[_el_0]));
      let _el_1 = dom_helpers.appendDiv(doc, this[_el_0]);
      this.updateChildClass(_el_1, "module hero");
      this.addShimC(_el_1);
      let _el_2 = dom_helpers.appendElement(doc, _el_1, "h4");
      this.addShimE(_el_2);
      _el_2[$append](this[_textBinding_3].element);
      this[_el_0][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_0_5].instance, 'onClick')));
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_hero = optimizations.unsafeCast(hero$.Hero, this.locals[$_get]("$implicit"));
      let currVal_0 = _ctx.heroUrl(local_hero.id);
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_RouterLink_0_5].instance.routerLink = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_RouterLink_0_5].detectHostChanges(this, this[_el_0]);
      this[_textBinding_3].updateText(interpolate.interpolateString0(local_hero.name));
    }
    destroyInternal() {
      this[_RouterLink_0_5].instance.ngOnDestroy();
    }
  };
  (dashboard_component$46template._ViewDashboardComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_3] = new text_binding.TextBinding.new();
    this[_RouterLink_0_5] = null;
    this[_expr_0] = null;
    this[_el_0] = null;
    dashboard_component$46template._ViewDashboardComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = dashboard_component$46template._ViewDashboardComponent1.prototype;
  dart.addTypeTests(dashboard_component$46template._ViewDashboardComponent1);
  dart.setLibraryUri(dashboard_component$46template._ViewDashboardComponent1, "package:angular_dart_hero/src/component/dashboard_component/dashboard_component.template.dart");
  dart.setFieldSignature(dashboard_component$46template._ViewDashboardComponent1, () => ({
    __proto__: dart.getFields(dashboard_component$46template._ViewDashboardComponent1.__proto__),
    [_textBinding_3]: dart.finalFieldType(text_binding.TextBinding),
    [_RouterLink_0_5]: dart.fieldType(router_link_directive$46template.RouterLinkNgCd),
    [_expr_0]: dart.fieldType(core.String),
    [_el_0]: dart.fieldType(html.AnchorElement)
  }));
  const _compView_0 = dart.privateName(dashboard_component$46template, "_compView_0");
  const _HeroService_0_5 = dart.privateName(dashboard_component$46template, "_HeroService_0_5");
  const _DashboardComponent_0_6 = dart.privateName(dashboard_component$46template, "_DashboardComponent_0_6");
  dashboard_component$46template._ViewDashboardComponentHost0 = class _ViewDashboardComponentHost0 extends app_view.AppView$(dashboard_component.DashboardComponent) {
    build() {
      this[_compView_0] = new dashboard_component$46template.ViewDashboardComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HeroService_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(hero_service.HeroService, dart.wrapType(hero_service.HeroService), dart.fn(() => new hero_service.HeroService.new(client.Client._check(this.injectorGet(dart.wrapType(client.Client), this.viewData.parentIndex))), VoidToHeroService())) : new hero_service.HeroService.new(client.Client._check(this.injectorGet(dart.wrapType(client.Client), this.viewData.parentIndex)));
      this[_DashboardComponent_0_6] = new dashboard_component.DashboardComponent.new(hero_service.HeroService._check(this[_HeroService_0_5]));
      this[_compView_0].create(this[_DashboardComponent_0_6], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfDashboardComponent()).new(0, this, this.rootEl, this[_DashboardComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(hero_service.HeroService) && 0 === nodeIndex) {
        return this[_HeroService_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DashboardComponent_0_6].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (dashboard_component$46template._ViewDashboardComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HeroService_0_5] = null;
    this[_DashboardComponent_0_6] = null;
    dashboard_component$46template._ViewDashboardComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = dashboard_component$46template._ViewDashboardComponentHost0.prototype;
  dart.addTypeTests(dashboard_component$46template._ViewDashboardComponentHost0);
  dart.setMethodSignature(dashboard_component$46template._ViewDashboardComponentHost0, () => ({
    __proto__: dart.getMethods(dashboard_component$46template._ViewDashboardComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(dashboard_component$46template._ViewDashboardComponentHost0, "package:angular_dart_hero/src/component/dashboard_component/dashboard_component.template.dart");
  dart.setFieldSignature(dashboard_component$46template._ViewDashboardComponentHost0, () => ({
    __proto__: dart.getFields(dashboard_component$46template._ViewDashboardComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(dashboard_component$46template.ViewDashboardComponent0),
    [_HeroService_0_5]: dart.fieldType(dart.dynamic),
    [_DashboardComponent_0_6]: dart.fieldType(dashboard_component.DashboardComponent)
  }));
  dashboard_component$46template.viewFactory_DashboardComponent1 = function viewFactory_DashboardComponent1(parentView, parentIndex) {
    return new dashboard_component$46template._ViewDashboardComponent1.new(parentView, parentIndex);
  };
  dashboard_component$46template.viewFactory_DashboardComponentHost0 = function viewFactory_DashboardComponentHost0(parentView, parentIndex) {
    return new dashboard_component$46template._ViewDashboardComponentHost0.new(parentView, parentIndex);
  };
  dashboard_component$46template.initReflector = function initReflector() {
    if (dart.test(dashboard_component$46template._visited)) {
      return;
    }
    dashboard_component$46template._visited = true;
    reflector.registerComponent(dart.wrapType(dashboard_component.DashboardComponent), dashboard_component$46template.DashboardComponentNgFactory);
    angular$46template.initReflector();
    route_paths$46template.initReflector();
    hero_service$46template.initReflector();
    hero_search_component$46template.initReflector();
    hero$46template.initReflector();
    angular_router$46template.initReflector();
  };
  dart.copyProperties(dashboard_component$46template, {
    get DashboardComponentNgFactory() {
      return dashboard_component$46template._DashboardComponentNgFactory;
    }
  });
  let C4;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C3;
  let C5;
  dart.defineLazy(dashboard_component$46template, {
    /*dashboard_component$46template.styles$DashboardComponent*/get styles$DashboardComponent() {
      return [dashboard_component$46css$46shim.styles];
    },
    /*dashboard_component$46template._DashboardComponentNgFactory*/get _DashboardComponentNgFactory() {
      return C3 || CT.C3;
    },
    /*dashboard_component$46template.styles$DashboardComponentHost*/get styles$DashboardComponentHost() {
      return C5 || CT.C5;
    },
    /*dashboard_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  const _appEl_5 = dart.privateName(hero_search_component$46template, "_appEl_5");
  const _NgFor_5_9 = dart.privateName(hero_search_component$46template, "_NgFor_5_9");
  const _expr_0$ = dart.privateName(hero_search_component$46template, "_expr_0");
  const _pipe_async_0 = dart.privateName(hero_search_component$46template, "_pipe_async_0");
  const _el_3 = dart.privateName(hero_search_component$46template, "_el_3");
  let C6;
  const _handle_change_3_0 = dart.privateName(hero_search_component$46template, "_handle_change_3_0");
  const _handle_keyup_3_1 = dart.privateName(hero_search_component$46template, "_handle_keyup_3_1");
  hero_search_component$46template.ViewHeroSearchComponent0 = class ViewHeroSearchComponent0 extends app_view.AppView$(hero_search_component.HeroSearchComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_dart_hero/lib/src/component/hero_search_component/hero_search_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      dom_helpers.setAttribute(_el_0, "id", "search-component");
      this.addShimC(_el_0);
      let _el_1 = dom_helpers.appendElement(doc, _el_0, "h4");
      this.addShimE(_el_1);
      let _text_2 = dom_helpers.appendText(_el_1, "Hero Search");
      this[_el_3] = html.InputElement._check(dom_helpers.appendElement(doc, _el_0, "input"));
      dom_helpers.setAttribute(this[_el_3], "id", "search-box");
      this.addShimC(this[_el_3]);
      let _el_4 = dom_helpers.appendDiv(doc, _el_0);
      this.addShimC(_el_4);
      let _anchor_5 = dom_helpers.appendAnchor(_el_4);
      this[_appEl_5] = new view_container.ViewContainer.new(5, 4, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C6 || CT.C6);
      this[_NgFor_5_9] = new ng_for.NgFor.new(this[_appEl_5], _TemplateRef_5_8);
      this[_el_3][$addEventListener]("change", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_change_3_0)));
      this[_el_3][$addEventListener]("keyup", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_keyup_3_1)));
      this[_pipe_async_0] = new async_pipe.AsyncPipe.new(this);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = this[_pipe_async_0].transform(_ctx.heros);
      if (dart.test(app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_NgFor_5_9].ngForOf = IterableOfObject()._check(currVal_0);
        this[_expr_0$] = currVal_0;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_5_9].ngDoCheck();
      }
      this[_appEl_5].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_5].destroyNestedViews();
      this[_pipe_async_0].ngOnDestroy();
    }
    [_handle_change_3_0]($36event) {
      let local_searchBox = this[_el_3];
      let _ctx = this.ctx;
      _ctx.search(local_searchBox.value);
    }
    [_handle_keyup_3_1]($36event) {
      let local_searchBox = this[_el_3];
      let _ctx = this.ctx;
      _ctx.search(local_searchBox.value);
    }
    initComponentStyles() {
      let styles = hero_search_component$46template.ViewHeroSearchComponent0._componentStyles;
      if (styles == null) {
        hero_search_component$46template.ViewHeroSearchComponent0._componentStyles = styles = hero_search_component$46template.ViewHeroSearchComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(hero_search_component$46template.styles$HeroSearchComponent, hero_search_component$46template.ViewHeroSearchComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (hero_search_component$46template.ViewHeroSearchComponent0.new = function(parentView, parentIndex) {
    this[_appEl_5] = null;
    this[_NgFor_5_9] = null;
    this[_expr_0$] = null;
    this[_pipe_async_0] = null;
    this[_el_3] = null;
    hero_search_component$46template.ViewHeroSearchComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("hero-search"));
  }).prototype = hero_search_component$46template.ViewHeroSearchComponent0.prototype;
  dart.addTypeTests(hero_search_component$46template.ViewHeroSearchComponent0);
  dart.setMethodSignature(hero_search_component$46template.ViewHeroSearchComponent0, () => ({
    __proto__: dart.getMethods(hero_search_component$46template.ViewHeroSearchComponent0.__proto__),
    [_handle_change_3_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_keyup_3_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(hero_search_component$46template.ViewHeroSearchComponent0, "package:angular_dart_hero/src/component/hero_search_component/hero_search_component.template.dart");
  dart.setFieldSignature(hero_search_component$46template.ViewHeroSearchComponent0, () => ({
    __proto__: dart.getFields(hero_search_component$46template.ViewHeroSearchComponent0.__proto__),
    [_appEl_5]: dart.fieldType(view_container.ViewContainer),
    [_NgFor_5_9]: dart.fieldType(ng_for.NgFor),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_pipe_async_0]: dart.fieldType(async_pipe.AsyncPipe),
    [_el_3]: dart.fieldType(html.InputElement)
  }));
  dart.defineLazy(hero_search_component$46template.ViewHeroSearchComponent0, {
    /*hero_search_component$46template.ViewHeroSearchComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _textBinding_1 = dart.privateName(hero_search_component$46template, "_textBinding_1");
  const _handle_click_0_0 = dart.privateName(hero_search_component$46template, "_handle_click_0_0");
  hero_search_component$46template._ViewHeroSearchComponent1 = class _ViewHeroSearchComponent1 extends app_view.AppView$(hero_search_component.HeroSearchComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "search-result");
      this.addShimC(html.HtmlElement._check(_el_0));
      _el_0[$append](this[_textBinding_1].element);
      _el_0[$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0)));
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let local_hero = this.locals[$_get]("$implicit");
      this[_textBinding_1].updateText(core.String._check(interpolate.interpolate0(dart.dload(local_hero, 'name'))));
    }
    [_handle_click_0_0]($36event) {
      let local_hero = this.locals[$_get]("$implicit");
      let _ctx = this.ctx;
      _ctx.gotoDetail(hero$.Hero._check(local_hero));
    }
  };
  (hero_search_component$46template._ViewHeroSearchComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_1] = new text_binding.TextBinding.new();
    hero_search_component$46template._ViewHeroSearchComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = hero_search_component$46template._ViewHeroSearchComponent1.prototype;
  dart.addTypeTests(hero_search_component$46template._ViewHeroSearchComponent1);
  dart.setMethodSignature(hero_search_component$46template._ViewHeroSearchComponent1, () => ({
    __proto__: dart.getMethods(hero_search_component$46template._ViewHeroSearchComponent1.__proto__),
    [_handle_click_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(hero_search_component$46template._ViewHeroSearchComponent1, "package:angular_dart_hero/src/component/hero_search_component/hero_search_component.template.dart");
  dart.setFieldSignature(hero_search_component$46template._ViewHeroSearchComponent1, () => ({
    __proto__: dart.getFields(hero_search_component$46template._ViewHeroSearchComponent1.__proto__),
    [_textBinding_1]: dart.finalFieldType(text_binding.TextBinding)
  }));
  const _compView_0$ = dart.privateName(hero_search_component$46template, "_compView_0");
  const _HeroSearchService_0_5 = dart.privateName(hero_search_component$46template, "_HeroSearchService_0_5");
  const _HeroSearchComponent_0_6 = dart.privateName(hero_search_component$46template, "_HeroSearchComponent_0_6");
  hero_search_component$46template._ViewHeroSearchComponentHost0 = class _ViewHeroSearchComponentHost0 extends app_view.AppView$(hero_search_component.HeroSearchComponent) {
    build() {
      this[_compView_0$] = new hero_search_component$46template.ViewHeroSearchComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_HeroSearchService_0_5] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(hero_search_service.HeroSearchService, dart.wrapType(hero_search_service.HeroSearchService), dart.fn(() => new hero_search_service.HeroSearchService.new(client.Client._check(this.injectorGet(dart.wrapType(client.Client), this.viewData.parentIndex))), VoidToHeroSearchService())) : new hero_search_service.HeroSearchService.new(client.Client._check(this.injectorGet(dart.wrapType(client.Client), this.viewData.parentIndex)));
      this[_HeroSearchComponent_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(hero_search_component.HeroSearchComponent, dart.wrapType(hero_search_component.HeroSearchComponent), dart.fn(() => new hero_search_component.HeroSearchComponent.new(hero_search_service.HeroSearchService._check(this[_HeroSearchService_0_5]), router.Router._check(this.injectorGet(dart.wrapType(router.Router), this.viewData.parentIndex))), VoidToHeroSearchComponent())) : new hero_search_component.HeroSearchComponent.new(hero_search_service.HeroSearchService._check(this[_HeroSearchService_0_5]), router.Router._check(this.injectorGet(dart.wrapType(router.Router), this.viewData.parentIndex)));
      this[_compView_0$].create(this[_HeroSearchComponent_0_6], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfHeroSearchComponent()).new(0, this, this.rootEl, this[_HeroSearchComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(hero_search_service.HeroSearchService) && 0 === nodeIndex) {
        return this[_HeroSearchService_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_HeroSearchComponent_0_6].ngOnInit();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
    }
  };
  (hero_search_component$46template._ViewHeroSearchComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_HeroSearchService_0_5] = null;
    this[_HeroSearchComponent_0_6] = null;
    hero_search_component$46template._ViewHeroSearchComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = hero_search_component$46template._ViewHeroSearchComponentHost0.prototype;
  dart.addTypeTests(hero_search_component$46template._ViewHeroSearchComponentHost0);
  dart.setMethodSignature(hero_search_component$46template._ViewHeroSearchComponentHost0, () => ({
    __proto__: dart.getMethods(hero_search_component$46template._ViewHeroSearchComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(hero_search_component$46template._ViewHeroSearchComponentHost0, "package:angular_dart_hero/src/component/hero_search_component/hero_search_component.template.dart");
  dart.setFieldSignature(hero_search_component$46template._ViewHeroSearchComponentHost0, () => ({
    __proto__: dart.getFields(hero_search_component$46template._ViewHeroSearchComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(hero_search_component$46template.ViewHeroSearchComponent0),
    [_HeroSearchService_0_5]: dart.fieldType(dart.dynamic),
    [_HeroSearchComponent_0_6]: dart.fieldType(hero_search_component.HeroSearchComponent)
  }));
  hero_search_component$46template.viewFactory_HeroSearchComponent1 = function viewFactory_HeroSearchComponent1(parentView, parentIndex) {
    return new hero_search_component$46template._ViewHeroSearchComponent1.new(parentView, parentIndex);
  };
  hero_search_component$46template.viewFactory_HeroSearchComponentHost0 = function viewFactory_HeroSearchComponentHost0(parentView, parentIndex) {
    return new hero_search_component$46template._ViewHeroSearchComponentHost0.new(parentView, parentIndex);
  };
  hero_search_component$46template.initReflector = function initReflector$() {
    if (dart.test(hero_search_component$46template._visited)) {
      return;
    }
    hero_search_component$46template._visited = true;
    reflector.registerComponent(dart.wrapType(hero_search_component.HeroSearchComponent), hero_search_component$46template.HeroSearchComponentNgFactory);
    hero_search_service$46template.initReflector();
    angular$46template.initReflector();
    route_paths$46template.initReflector();
    hero$46template.initReflector();
    angular_router$46template.initReflector();
  };
  dart.copyProperties(hero_search_component$46template, {
    get HeroSearchComponentNgFactory() {
      return hero_search_component$46template._HeroSearchComponentNgFactory;
    }
  });
  let C8;
  let C7;
  dart.defineLazy(hero_search_component$46template, {
    /*hero_search_component$46template.styles$HeroSearchComponent*/get styles$HeroSearchComponent() {
      return [hero_search_component$46css$46shim.styles];
    },
    /*hero_search_component$46template._HeroSearchComponentNgFactory*/get _HeroSearchComponentNgFactory() {
      return C7 || CT.C7;
    },
    /*hero_search_component$46template.styles$HeroSearchComponentHost*/get styles$HeroSearchComponentHost() {
      return C5 || CT.C5;
    },
    /*hero_search_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.defineLazy(hero_search_component$46css$46shim, {
    /*hero_search_component$46css$46shim.styles*/get styles() {
      return [".search-result._ngcontent-%ID%{border-bottom:1px solid gray;border-left:1px solid gray;border-right:1px solid gray;width:195px;height:20px;padding:5px;background-color:white;cursor:pointer}#search-box._ngcontent-%ID%{width:200px;height:20px}"];
    }
  });
  hero$46template.initReflector = function initReflector$0() {
  };
  route_paths$46template.initReflector = function initReflector$1() {
    if (dart.test(route_paths$46template._visited)) {
      return;
    }
    route_paths$46template._visited = true;
    angular_router$46template.initReflector();
  };
  dart.defineLazy(route_paths$46template, {
    /*route_paths$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let C11;
  let C10;
  let C9;
  hero_search_service$46template.initReflector = function initReflector$2() {
    if (dart.test(hero_search_service$46template._visited)) {
      return;
    }
    hero_search_service$46template._visited = true;
    reflector.registerFactory(dart.wrapType(hero_search_service.HeroSearchService), dart.fn(p0 => new hero_search_service.HeroSearchService.new(p0), ClientToHeroSearchService()));
    reflector.registerDependencies(dart.wrapType(hero_search_service.HeroSearchService), C9 || CT.C9);
    angular$46template.initReflector();
    hero$46template.initReflector();
  };
  dart.defineLazy(hero_search_service$46template, {
    /*hero_search_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.defineLazy(dashboard_component$46css$46shim, {
    /*dashboard_component$46css$46shim.styles*/get styles() {
      return ["[class*=\"col-\"]._ngcontent-%ID%{float:left;padding-left:20px;padding-bottom:20px}[class*=\"col-\"]:last-of-type._ngcontent-%ID%{padding-right:0}a._ngcontent-%ID%{text-decoration:none}*._ngcontent-%ID%,*._ngcontent-%ID%:after,*._ngcontent-%ID%:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}h3._ngcontent-%ID%{text-align:center;margin-bottom:0}h4._ngcontent-%ID%{position:relative}.grid._ngcontent-%ID%{margin:0}.col-1-4._ngcontent-%ID%{width:25%}.module._ngcontent-%ID%{padding:20px;text-align:center;color:#eee;max-height:120px;min-width:120px;background-color:#607D8B;border-radius:2px}.module:hover._ngcontent-%ID%{background-color:#eee;cursor:pointer;color:#607d8b}.grid-pad._ngcontent-%ID%{padding:10px,0}.grid-pad._ngcontent-%ID% > [class*=\"col-\"]:last-of-type._ngcontent-%ID%{padding-right:20px}@media (max-width:600px){.module._ngcontent-%ID%{font-size:10px;max-height:75px}}@media (max-width:1024px){.grid._ngcontent-%ID%{margin:0}.module._ngcontent-%ID%{min-width:60px}}"];
    }
  });
  hero_service$46template.initReflector = function initReflector$3() {
    if (dart.test(hero_service$46template._visited)) {
      return;
    }
    hero_service$46template._visited = true;
    reflector.registerFactory(dart.wrapType(hero_service.HeroService), dart.fn(p0 => new hero_service.HeroService.new(p0), ClientToHeroService()));
    reflector.registerDependencies(dart.wrapType(hero_service.HeroService), C9 || CT.C9);
    angular$46template.initReflector();
    hero$46template.initReflector();
  };
  dart.defineLazy(hero_service$46template, {
    /*hero_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.defineLazy(hero_component$46css$46shim, {
    /*hero_component$46css$46shim.styles*/get styles() {
      return ["label._ngcontent-%ID%{display:inline-block;width:3em;margin:.5em 0;color:#607D8B;font-weight:bold}input._ngcontent-%ID%{height:2em;font-size:1em;padding-left:.4em}button._ngcontent-%ID%{margin-top:20px;font-family:Arial;background-color:#eee;border:none;padding:5px 10px;border-radius:4px;cursor:pointer;cursor:hand}button:hover._ngcontent-%ID%{background-color:#cfd8dc}button:disabled._ngcontent-%ID%{background-color:#eee;color:#ccc;cursor:auto}"];
    }
  });
  const _heroService$1 = dart.privateName(heros_component, "_heroService");
  const _router$0 = dart.privateName(heros_component, "_router");
  const _getHeros = dart.privateName(heros_component, "_getHeros");
  const _heroUrl$ = dart.privateName(heros_component, "_heroUrl");
  const heros$0 = dart.privateName(heros_component, "HerosComponent.heros");
  const selected = dart.privateName(heros_component, "HerosComponent.selected");
  heros_component.HerosComponent = class HerosComponent extends core.Object {
    get heros() {
      return this[heros$0];
    }
    set heros(value) {
      this[heros$0] = value;
    }
    get selected() {
      return this[selected];
    }
    set selected(value) {
      this[selected] = value;
    }
    onSelect(hero) {
      this.selected = hero;
    }
    [_getHeros]() {
      return async.async(dart.void, (function* _getHeros() {
        this.heros = (yield this[_heroService$1].getAll());
      }).bind(this));
    }
    add(heroName) {
      return async.async(dart.void, (function* add() {
        heroName = heroName[$trim]();
        if (heroName[$isEmpty]) return null;
        this.heros[$add](yield this[_heroService$1].create(heroName));
        this.selected = null;
      }).bind(this));
    }
    delete(hero) {
      return async.async(dart.void, (function* $delete() {
        yield this[_heroService$1].delete(hero.id);
        this.heros[$remove](hero);
        if (dart.equals(this.selected, hero)) this.selected = null;
      }).bind(this));
    }
    [_heroUrl$](id) {
      return route_paths.RoutePaths.hero.toUrl({parameters: new (IdentityMapOfString$String()).from(["id", dart.str(id)])});
    }
    gotoDetail() {
      return this[_router$0].navigate(this[_heroUrl$](this.selected.id));
    }
    ngOnInit() {
      this[_getHeros]();
    }
  };
  (heros_component.HerosComponent.new = function(_heroService, _router) {
    this[heros$0] = null;
    this[selected] = null;
    this[_heroService$1] = _heroService;
    this[_router$0] = _router;
    ;
  }).prototype = heros_component.HerosComponent.prototype;
  dart.addTypeTests(heros_component.HerosComponent);
  heros_component.HerosComponent[dart.implements] = () => [lifecycle_hooks.OnInit];
  dart.setMethodSignature(heros_component.HerosComponent, () => ({
    __proto__: dart.getMethods(heros_component.HerosComponent.__proto__),
    onSelect: dart.fnType(dart.void, [hero$.Hero]),
    [_getHeros]: dart.fnType(dart.void, []),
    add: dart.fnType(async.Future$(dart.void), [core.String]),
    delete: dart.fnType(async.Future$(dart.void), [hero$.Hero]),
    [_heroUrl$]: dart.fnType(core.String, [core.int]),
    gotoDetail: dart.fnType(async.Future$(router.NavigationResult), []),
    ngOnInit: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(heros_component.HerosComponent, "package:angular_dart_hero/src/component/heros_component/heros_component.dart");
  dart.setFieldSignature(heros_component.HerosComponent, () => ({
    __proto__: dart.getFields(heros_component.HerosComponent.__proto__),
    heros: dart.fieldType(core.List$(hero$.Hero)),
    [_heroService$1]: dart.fieldType(hero_service.HeroService),
    [_router$0]: dart.finalFieldType(router.Router),
    selected: dart.fieldType(hero$.Hero)
  }));
  const _appEl_0 = dart.privateName(hero_component$46template, "_appEl_0");
  const _NgIf_0_9 = dart.privateName(hero_component$46template, "_NgIf_0_9");
  let C12;
  hero_component$46template.ViewHeroComponent0 = class ViewHeroComponent0 extends app_view.AppView$(hero_component.HeroComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_dart_hero/lib/src/component/hero_component/hero_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_0] = new view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new template_ref.TemplateRef.new(this[_appEl_0], C12 || CT.C12);
      this[_NgIf_0_9] = new ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.hero != null;
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = hero_component$46template.ViewHeroComponent0._componentStyles;
      if (styles == null) {
        hero_component$46template.ViewHeroComponent0._componentStyles = styles = hero_component$46template.ViewHeroComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(hero_component$46template.styles$HeroComponent, hero_component$46template.ViewHeroComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (hero_component$46template.ViewHeroComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgIf_0_9] = null;
    hero_component$46template.ViewHeroComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("my-hero"));
  }).prototype = hero_component$46template.ViewHeroComponent0.prototype;
  dart.addTypeTests(hero_component$46template.ViewHeroComponent0);
  dart.setLibraryUri(hero_component$46template.ViewHeroComponent0, "package:angular_dart_hero/src/component/hero_component/hero_component.template.dart");
  dart.setFieldSignature(hero_component$46template.ViewHeroComponent0, () => ({
    __proto__: dart.getFields(hero_component$46template.ViewHeroComponent0.__proto__),
    [_appEl_0]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_0_9]: dart.fieldType(ng_if.NgIf)
  }));
  dart.defineLazy(hero_component$46template.ViewHeroComponent0, {
    /*hero_component$46template.ViewHeroComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _textBinding_2 = dart.privateName(hero_component$46template, "_textBinding_2");
  const _textBinding_6 = dart.privateName(hero_component$46template, "_textBinding_6");
  const _textBinding_10 = dart.privateName(hero_component$46template, "_textBinding_10");
  const _DefaultValueAccessor_15_5 = dart.privateName(hero_component$46template, "_DefaultValueAccessor_15_5");
  const _NgValueAccessor_15_6 = dart.privateName(hero_component$46template, "_NgValueAccessor_15_6");
  const _NgModel_15_7 = dart.privateName(hero_component$46template, "_NgModel_15_7");
  const _handle_input_15_2 = dart.privateName(hero_component$46template, "_handle_input_15_2");
  const _handle_ngModelChange_15_0 = dart.privateName(hero_component$46template, "_handle_ngModelChange_15_0");
  const OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  let C13;
  hero_component$46template._ViewHeroComponent1 = class _ViewHeroComponent1 extends app_view.AppView$(hero_component.HeroComponent) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _el_1 = dom_helpers.appendElement(doc, _el_0, "h2");
      this.addShimE(_el_1);
      _el_1[$append](this[_textBinding_2].element);
      let _el_3 = dom_helpers.appendDiv(doc, _el_0);
      this.addShimC(_el_3);
      let _el_4 = dom_helpers.appendElement(doc, _el_3, "label");
      this.addShimE(_el_4);
      let _text_5 = dom_helpers.appendText(_el_4, "id:");
      _el_3[$append](this[_textBinding_6].element);
      let _el_7 = dom_helpers.appendDiv(doc, _el_0);
      this.addShimC(_el_7);
      let _el_8 = dom_helpers.appendElement(doc, _el_7, "label");
      this.addShimE(_el_8);
      let _text_9 = dom_helpers.appendText(_el_8, "name:");
      _el_7[$append](this[_textBinding_10].element);
      let _el_11 = dom_helpers.appendDiv(doc, _el_0);
      this.addShimC(_el_11);
      let _el_12 = dom_helpers.appendElement(doc, _el_11, "label");
      this.addShimE(_el_12);
      let _text_13 = dom_helpers.appendText(_el_12, "name:");
      let _text_14 = dom_helpers.appendText(_el_11, " ");
      let _el_15 = dom_helpers.appendElement(doc, _el_11, "input");
      dom_helpers.setAttribute(_el_15, "placeholder", "name");
      this.addShimC(html.HtmlElement._check(_el_15));
      this[_DefaultValueAccessor_15_5] = new default_value_accessor.DefaultValueAccessor.new(html.HtmlElement._check(_el_15));
      this[_NgValueAccessor_15_6] = JSArrayOfControlValueAccessor().of([this[_DefaultValueAccessor_15_5]]);
      this[_NgModel_15_7] = new ng_model.NgModel.new(null, this[_NgValueAccessor_15_6]);
      let _el_16 = dom_helpers.appendElement(doc, _el_0, "button");
      this.addShimC(html.HtmlElement._check(_el_16));
      let _text_17 = dom_helpers.appendText(_el_16, "Back");
      let _text_18 = dom_helpers.appendText(_el_0, " ");
      let _el_19 = dom_helpers.appendElement(doc, _el_0, "button");
      this.addShimC(html.HtmlElement._check(_el_19));
      let _text_20 = dom_helpers.appendText(_el_19, "Save");
      _el_15[$addEventListener]("blur", this.eventHandler0(html.Event, dart.bind(this[_DefaultValueAccessor_15_5], 'touchHandler')));
      _el_15[$addEventListener]("input", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_input_15_2)));
      let subscription_0 = this[_NgModel_15_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_15_0)));
      _el_16[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'goBack')));
      _el_19[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'save')));
      this.init(JSArrayOfObject().of([_el_0]), JSArrayOfStreamSubscriptionOfvoid().of([subscription_0]));
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (15 === nodeIndex) {
        if (token === (C13 || CT.C13)) {
          return this[_NgValueAccessor_15_6];
        }
        if (token === dart.wrapType(ng_model.NgModel) || token === dart.wrapType(ng_control.NgControl)) {
          return this[_NgModel_15_7];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_15_7].model = _ctx.hero.name;
      this[_NgModel_15_7].ngAfterChanges();
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_15_7].ngOnInit();
      }
      this[_textBinding_2].updateText(interpolate.interpolateString0(_ctx.hero.name));
      this[_textBinding_6].updateText(core.String._check(interpolate.interpolate0(_ctx.hero.id)));
      this[_textBinding_10].updateText(interpolate.interpolateString0(_ctx.hero.name));
    }
    [_handle_ngModelChange_15_0]($36event) {
      let _ctx = this.ctx;
      _ctx.hero.name = core.String._check($36event);
    }
    [_handle_input_15_2]($36event) {
      this[_DefaultValueAccessor_15_5].handleChange(core.String._check(dart.dload(dart.dload($36event, 'target'), 'value')));
    }
  };
  (hero_component$46template._ViewHeroComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_2] = new text_binding.TextBinding.new();
    this[_textBinding_6] = new text_binding.TextBinding.new();
    this[_textBinding_10] = new text_binding.TextBinding.new();
    this[_DefaultValueAccessor_15_5] = null;
    this[_NgValueAccessor_15_6] = null;
    this[_NgModel_15_7] = null;
    hero_component$46template._ViewHeroComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = hero_component$46template._ViewHeroComponent1.prototype;
  dart.addTypeTests(hero_component$46template._ViewHeroComponent1);
  dart.setMethodSignature(hero_component$46template._ViewHeroComponent1, () => ({
    __proto__: dart.getMethods(hero_component$46template._ViewHeroComponent1.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    [_handle_ngModelChange_15_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_input_15_2]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(hero_component$46template._ViewHeroComponent1, "package:angular_dart_hero/src/component/hero_component/hero_component.template.dart");
  dart.setFieldSignature(hero_component$46template._ViewHeroComponent1, () => ({
    __proto__: dart.getFields(hero_component$46template._ViewHeroComponent1.__proto__),
    [_textBinding_2]: dart.finalFieldType(text_binding.TextBinding),
    [_textBinding_6]: dart.finalFieldType(text_binding.TextBinding),
    [_textBinding_10]: dart.finalFieldType(text_binding.TextBinding),
    [_DefaultValueAccessor_15_5]: dart.fieldType(default_value_accessor.DefaultValueAccessor),
    [_NgValueAccessor_15_6]: dart.fieldType(core.List$(control_value_accessor.ControlValueAccessor)),
    [_NgModel_15_7]: dart.fieldType(ng_model.NgModel)
  }));
  const _compView_0$0 = dart.privateName(hero_component$46template, "_compView_0");
  const _HeroService_0_5$ = dart.privateName(hero_component$46template, "_HeroService_0_5");
  const _Location_0_6 = dart.privateName(hero_component$46template, "_Location_0_6");
  const _HeroComponent_0_7 = dart.privateName(hero_component$46template, "_HeroComponent_0_7");
  hero_component$46template._ViewHeroComponentHost0 = class _ViewHeroComponentHost0 extends app_view.AppView$(hero_component.HeroComponent) {
    build() {
      this[_compView_0$0] = new hero_component$46template.ViewHeroComponent0.new(this, 0);
      this.rootEl = this[_compView_0$0].rootEl;
      this[_HeroService_0_5$] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(hero_service.HeroService, dart.wrapType(hero_service.HeroService), dart.fn(() => new hero_service.HeroService.new(client.Client._check(this.injectorGet(dart.wrapType(client.Client), this.viewData.parentIndex))), VoidToHeroService())) : new hero_service.HeroService.new(client.Client._check(this.injectorGet(dart.wrapType(client.Client), this.viewData.parentIndex)));
      this[_Location_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(location.Location, dart.wrapType(location.Location), dart.fn(() => new location.Location.new(location_strategy.LocationStrategy._check(this.injectorGet(dart.wrapType(location_strategy.LocationStrategy), this.viewData.parentIndex))), VoidToLocation())) : new location.Location.new(location_strategy.LocationStrategy._check(this.injectorGet(dart.wrapType(location_strategy.LocationStrategy), this.viewData.parentIndex)));
      this[_HeroComponent_0_7] = new hero_component.HeroComponent.new(hero_service.HeroService._check(this[_HeroService_0_5$]), location.Location._check(this[_Location_0_6]));
      this[_compView_0$0].create(this[_HeroComponent_0_7], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfHeroComponent()).new(0, this, this.rootEl, this[_HeroComponent_0_7]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (0 === nodeIndex) {
        if (token === dart.wrapType(hero_service.HeroService)) {
          return this[_HeroService_0_5$];
        }
        if (token === dart.wrapType(location.Location)) {
          return this[_Location_0_6];
        }
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$0].destroyInternalState();
    }
  };
  (hero_component$46template._ViewHeroComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_HeroService_0_5$] = null;
    this[_Location_0_6] = null;
    this[_HeroComponent_0_7] = null;
    hero_component$46template._ViewHeroComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = hero_component$46template._ViewHeroComponentHost0.prototype;
  dart.addTypeTests(hero_component$46template._ViewHeroComponentHost0);
  dart.setMethodSignature(hero_component$46template._ViewHeroComponentHost0, () => ({
    __proto__: dart.getMethods(hero_component$46template._ViewHeroComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(hero_component$46template._ViewHeroComponentHost0, "package:angular_dart_hero/src/component/hero_component/hero_component.template.dart");
  dart.setFieldSignature(hero_component$46template._ViewHeroComponentHost0, () => ({
    __proto__: dart.getFields(hero_component$46template._ViewHeroComponentHost0.__proto__),
    [_compView_0$0]: dart.fieldType(hero_component$46template.ViewHeroComponent0),
    [_HeroService_0_5$]: dart.fieldType(dart.dynamic),
    [_Location_0_6]: dart.fieldType(dart.dynamic),
    [_HeroComponent_0_7]: dart.fieldType(hero_component.HeroComponent)
  }));
  hero_component$46template.viewFactory_HeroComponent1 = function viewFactory_HeroComponent1(parentView, parentIndex) {
    return new hero_component$46template._ViewHeroComponent1.new(parentView, parentIndex);
  };
  hero_component$46template.viewFactory_HeroComponentHost0 = function viewFactory_HeroComponentHost0(parentView, parentIndex) {
    return new hero_component$46template._ViewHeroComponentHost0.new(parentView, parentIndex);
  };
  hero_component$46template.initReflector = function initReflector$4() {
    if (dart.test(hero_component$46template._visited)) {
      return;
    }
    hero_component$46template._visited = true;
    reflector.registerComponent(dart.wrapType(hero_component.HeroComponent), hero_component$46template.HeroComponentNgFactory);
    angular$46template.initReflector();
    route_paths$46template.initReflector();
    hero_service$46template.initReflector();
    hero$46template.initReflector();
    angular_forms$46template.initReflector();
    angular_router$46template.initReflector();
  };
  dart.copyProperties(hero_component$46template, {
    get HeroComponentNgFactory() {
      return hero_component$46template._HeroComponentNgFactory;
    }
  });
  let C15;
  let C14;
  dart.defineLazy(hero_component$46template, {
    /*hero_component$46template.styles$HeroComponent*/get styles$HeroComponent() {
      return [hero_component$46css$46shim.styles];
    },
    /*hero_component$46template._HeroComponentNgFactory*/get _HeroComponentNgFactory() {
      return C14 || CT.C14;
    },
    /*hero_component$46template.styles$HeroComponentHost*/get styles$HeroComponentHost() {
      return C5 || CT.C5;
    },
    /*hero_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  const _appEl_8 = dart.privateName(heros_component$46template, "_appEl_8");
  const _NgFor_8_9 = dart.privateName(heros_component$46template, "_NgFor_8_9");
  const _appEl_10 = dart.privateName(heros_component$46template, "_appEl_10");
  const _NgIf_10_9 = dart.privateName(heros_component$46template, "_NgIf_10_9");
  const _expr_0$0 = dart.privateName(heros_component$46template, "_expr_0");
  const _pipe_uppercase_0 = dart.privateName(heros_component$46template, "_pipe_uppercase_0");
  const _el_3$ = dart.privateName(heros_component$46template, "_el_3");
  let C16;
  let C17;
  const _handle_click_5_0 = dart.privateName(heros_component$46template, "_handle_click_5_0");
  heros_component$46template.ViewHerosComponent0 = class ViewHerosComponent0 extends app_view.AppView$(heros_component.HerosComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:angular_dart_hero/lib/src/component/heros_component/heros_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.addShimC(_el_0);
      let _el_1 = dom_helpers.appendElement(doc, _el_0, "label");
      this.addShimE(_el_1);
      let _text_2 = dom_helpers.appendText(_el_1, "Hero name:");
      this[_el_3$] = html.InputElement._check(dom_helpers.appendElement(doc, _el_0, "input"));
      this.addShimC(this[_el_3$]);
      let _text_4 = dom_helpers.appendText(_el_0, " ");
      let _el_5 = dom_helpers.appendElement(doc, _el_0, "button");
      this.addShimC(html.HtmlElement._check(_el_5));
      let _text_6 = dom_helpers.appendText(_el_5, "Add");
      let _el_7 = dom_helpers.appendElement(doc, parentRenderNode, "ul");
      this.updateChildClass(html.HtmlElement._check(_el_7), "heros");
      this.addShimC(html.HtmlElement._check(_el_7));
      let _anchor_8 = dom_helpers.appendAnchor(_el_7);
      this[_appEl_8] = new view_container.ViewContainer.new(8, 7, this, _anchor_8);
      let _TemplateRef_8_8 = new template_ref.TemplateRef.new(this[_appEl_8], C16 || CT.C16);
      this[_NgFor_8_9] = new ng_for.NgFor.new(this[_appEl_8], _TemplateRef_8_8);
      let _text_9 = dom_helpers.appendText(parentRenderNode, " ");
      let _anchor_10 = dom_helpers.appendAnchor(parentRenderNode);
      this[_appEl_10] = new view_container.ViewContainer.new(10, null, this, _anchor_10);
      let _TemplateRef_10_8 = new template_ref.TemplateRef.new(this[_appEl_10], C17 || CT.C17);
      this[_NgIf_10_9] = new ng_if.NgIf.new(this[_appEl_10], _TemplateRef_10_8);
      _el_5[$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_5_0)));
      this[_pipe_uppercase_0] = new uppercase_pipe.UpperCasePipe.new();
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.heros;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        this[_NgFor_8_9].ngForOf = currVal_0;
        this[_expr_0$0] = currVal_0;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_8_9].ngDoCheck();
      }
      this[_NgIf_10_9].ngIf = _ctx.selected != null;
      this[_appEl_8].detectChangesInNestedViews();
      this[_appEl_10].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_8].destroyNestedViews();
      this[_appEl_10].destroyNestedViews();
    }
    [_handle_click_5_0]($36event) {
      let local_heroName = this[_el_3$];
      let _ctx = this.ctx;
      _ctx.add(local_heroName.value);
      local_heroName.value = "";
    }
    initComponentStyles() {
      let styles = heros_component$46template.ViewHerosComponent0._componentStyles;
      if (styles == null) {
        heros_component$46template.ViewHerosComponent0._componentStyles = styles = heros_component$46template.ViewHerosComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(heros_component$46template.styles$HerosComponent, heros_component$46template.ViewHerosComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (heros_component$46template.ViewHerosComponent0.new = function(parentView, parentIndex) {
    this[_appEl_8] = null;
    this[_NgFor_8_9] = null;
    this[_appEl_10] = null;
    this[_NgIf_10_9] = null;
    this[_expr_0$0] = null;
    this[_pipe_uppercase_0] = null;
    this[_el_3$] = null;
    heros_component$46template.ViewHerosComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("my-heros"));
  }).prototype = heros_component$46template.ViewHerosComponent0.prototype;
  dart.addTypeTests(heros_component$46template.ViewHerosComponent0);
  dart.setMethodSignature(heros_component$46template.ViewHerosComponent0, () => ({
    __proto__: dart.getMethods(heros_component$46template.ViewHerosComponent0.__proto__),
    [_handle_click_5_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(heros_component$46template.ViewHerosComponent0, "package:angular_dart_hero/src/component/heros_component/heros_component.template.dart");
  dart.setFieldSignature(heros_component$46template.ViewHerosComponent0, () => ({
    __proto__: dart.getFields(heros_component$46template.ViewHerosComponent0.__proto__),
    [_appEl_8]: dart.fieldType(view_container.ViewContainer),
    [_NgFor_8_9]: dart.fieldType(ng_for.NgFor),
    [_appEl_10]: dart.fieldType(view_container.ViewContainer),
    [_NgIf_10_9]: dart.fieldType(ng_if.NgIf),
    [_expr_0$0]: dart.fieldType(dart.dynamic),
    [_pipe_uppercase_0]: dart.fieldType(uppercase_pipe.UpperCasePipe),
    [_el_3$]: dart.fieldType(html.InputElement)
  }));
  dart.defineLazy(heros_component$46template.ViewHerosComponent0, {
    /*heros_component$46template.ViewHerosComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _textBinding_2$ = dart.privateName(heros_component$46template, "_textBinding_2");
  const _textBinding_3$ = dart.privateName(heros_component$46template, "_textBinding_3");
  const _el_0$ = dart.privateName(heros_component$46template, "_el_0");
  const _handle_click_0_0$ = dart.privateName(heros_component$46template, "_handle_click_0_0");
  const _handle_click_6_0 = dart.privateName(heros_component$46template, "_handle_click_6_0");
  heros_component$46template._ViewHerosComponent1 = class _ViewHerosComponent1 extends app_view.AppView$(heros_component.HerosComponent) {
    build() {
      let doc = html.document;
      this[_el_0$] = doc[$createElement]("li");
      this.addShimE(this[_el_0$]);
      let _el_1 = dom_helpers.appendSpan(doc, this[_el_0$]);
      this.updateChildClass(_el_1, "badge");
      this.addShimE(_el_1);
      _el_1[$append](this[_textBinding_2$].element);
      this[_el_0$][$append](this[_textBinding_3$].element);
      let _text_4 = dom_helpers.appendText(this[_el_0$], " ");
      let _text_5 = dom_helpers.appendText(this[_el_0$], " ");
      let _el_6 = dom_helpers.appendElement(doc, this[_el_0$], "button");
      this.updateChildClass(html.HtmlElement._check(_el_6), "delete");
      this.addShimC(html.HtmlElement._check(_el_6));
      let _text_7 = dom_helpers.appendText(_el_6, "x");
      this[_el_0$][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0$)));
      _el_6[$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_6_0)));
      this.init1(this[_el_0$]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_hero = optimizations.unsafeCast(hero$.Hero, this.locals[$_get]("$implicit"));
      let currVal_0 = local_hero == _ctx.selected;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        dom_helpers.updateClassBinding(html.HtmlElement._check(this[_el_0$]), "selected", currVal_0);
        this[_expr_0$0] = currVal_0;
      }
      this[_textBinding_2$].updateText(core.String._check(interpolate.interpolate0(local_hero.id)));
      this[_textBinding_3$].updateText(interpolate.interpolateString0(local_hero.name));
    }
    [_handle_click_0_0$]($36event) {
      let local_hero = optimizations.unsafeCast(hero$.Hero, this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.onSelect(local_hero);
    }
    [_handle_click_6_0]($36event) {
      let local_hero = optimizations.unsafeCast(hero$.Hero, this.locals[$_get]("$implicit"));
      let _ctx = this.ctx;
      _ctx.delete(local_hero);
      dart.dsend($36event, 'stopPropagetion', []);
    }
  };
  (heros_component$46template._ViewHerosComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_2$] = new text_binding.TextBinding.new();
    this[_textBinding_3$] = new text_binding.TextBinding.new();
    this[_expr_0$0] = null;
    this[_el_0$] = null;
    heros_component$46template._ViewHerosComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = heros_component$46template._ViewHerosComponent1.prototype;
  dart.addTypeTests(heros_component$46template._ViewHerosComponent1);
  dart.setMethodSignature(heros_component$46template._ViewHerosComponent1, () => ({
    __proto__: dart.getMethods(heros_component$46template._ViewHerosComponent1.__proto__),
    [_handle_click_0_0$]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_6_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(heros_component$46template._ViewHerosComponent1, "package:angular_dart_hero/src/component/heros_component/heros_component.template.dart");
  dart.setFieldSignature(heros_component$46template._ViewHerosComponent1, () => ({
    __proto__: dart.getFields(heros_component$46template._ViewHerosComponent1.__proto__),
    [_textBinding_2$]: dart.finalFieldType(text_binding.TextBinding),
    [_textBinding_3$]: dart.finalFieldType(text_binding.TextBinding),
    [_expr_0$0]: dart.fieldType(core.bool),
    [_el_0$]: dart.fieldType(html.Element)
  }));
  const _pipe_uppercase_0_0 = dart.privateName(heros_component$46template, "_pipe_uppercase_0_0");
  heros_component$46template._ViewHerosComponent2 = class _ViewHerosComponent2 extends app_view.AppView$(heros_component.HerosComponent) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _el_1 = dom_helpers.appendElement(doc, _el_0, "h2");
      this.addShimE(_el_1);
      _el_1[$append](this[_textBinding_2$].element);
      let _text_3 = dom_helpers.appendText(_el_1, " is my hero");
      let _el_4 = dom_helpers.appendElement(doc, _el_0, "button");
      this.addShimC(html.HtmlElement._check(_el_4));
      let _text_5 = dom_helpers.appendText(_el_4, "View Details");
      _el_4[$addEventListener]("click", this.eventHandler0(html.Event, dart.bind(_ctx, 'gotoDetail')));
      this[_pipe_uppercase_0_0] = proxies.pureProxy1(core.String, core.String, dart.bind(optimizations.unsafeCast(heros_component$46template.ViewHerosComponent0, this.parentView)[_pipe_uppercase_0], 'transform'));
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_2$].updateText(core.String._check(interpolate.interpolate0(this[_pipe_uppercase_0_0](_ctx.selected.name))));
    }
  };
  (heros_component$46template._ViewHerosComponent2.new = function(parentView, parentIndex) {
    this[_textBinding_2$] = new text_binding.TextBinding.new();
    this[_pipe_uppercase_0_0] = null;
    heros_component$46template._ViewHerosComponent2.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = heros_component$46template._ViewHerosComponent2.prototype;
  dart.addTypeTests(heros_component$46template._ViewHerosComponent2);
  dart.setLibraryUri(heros_component$46template._ViewHerosComponent2, "package:angular_dart_hero/src/component/heros_component/heros_component.template.dart");
  dart.setFieldSignature(heros_component$46template._ViewHerosComponent2, () => ({
    __proto__: dart.getFields(heros_component$46template._ViewHerosComponent2.__proto__),
    [_textBinding_2$]: dart.finalFieldType(text_binding.TextBinding),
    [_pipe_uppercase_0_0]: dart.fieldType(dart.fnType(core.String, [core.String]))
  }));
  const _compView_0$1 = dart.privateName(heros_component$46template, "_compView_0");
  const _HeroService_0_5$0 = dart.privateName(heros_component$46template, "_HeroService_0_5");
  const _HerosComponent_0_6 = dart.privateName(heros_component$46template, "_HerosComponent_0_6");
  heros_component$46template._ViewHerosComponentHost0 = class _ViewHerosComponentHost0 extends app_view.AppView$(heros_component.HerosComponent) {
    build() {
      this[_compView_0$1] = new heros_component$46template.ViewHerosComponent0.new(this, 0);
      this.rootEl = this[_compView_0$1].rootEl;
      this[_HeroService_0_5$0] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(hero_service.HeroService, dart.wrapType(hero_service.HeroService), dart.fn(() => new hero_service.HeroService.new(client.Client._check(this.injectorGet(dart.wrapType(client.Client), this.viewData.parentIndex))), VoidToHeroService())) : new hero_service.HeroService.new(client.Client._check(this.injectorGet(dart.wrapType(client.Client), this.viewData.parentIndex)));
      this[_HerosComponent_0_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(heros_component.HerosComponent, dart.wrapType(heros_component.HerosComponent), dart.fn(() => new heros_component.HerosComponent.new(hero_service.HeroService._check(this[_HeroService_0_5$0]), router.Router._check(this.injectorGet(dart.wrapType(router.Router), this.viewData.parentIndex))), VoidToHerosComponent())) : new heros_component.HerosComponent.new(hero_service.HeroService._check(this[_HeroService_0_5$0]), router.Router._check(this.injectorGet(dart.wrapType(router.Router), this.viewData.parentIndex)));
      this[_compView_0$1].create(this[_HerosComponent_0_6], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfHerosComponent()).new(0, this, this.rootEl, this[_HerosComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(hero_service.HeroService) && 0 === nodeIndex) {
        return this[_HeroService_0_5$0];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_HerosComponent_0_6].ngOnInit();
      }
      this[_compView_0$1].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$1].destroyInternalState();
    }
  };
  (heros_component$46template._ViewHerosComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$1] = null;
    this[_HeroService_0_5$0] = null;
    this[_HerosComponent_0_6] = null;
    heros_component$46template._ViewHerosComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = heros_component$46template._ViewHerosComponentHost0.prototype;
  dart.addTypeTests(heros_component$46template._ViewHerosComponentHost0);
  dart.setMethodSignature(heros_component$46template._ViewHerosComponentHost0, () => ({
    __proto__: dart.getMethods(heros_component$46template._ViewHerosComponentHost0.__proto__),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic])
  }));
  dart.setLibraryUri(heros_component$46template._ViewHerosComponentHost0, "package:angular_dart_hero/src/component/heros_component/heros_component.template.dart");
  dart.setFieldSignature(heros_component$46template._ViewHerosComponentHost0, () => ({
    __proto__: dart.getFields(heros_component$46template._ViewHerosComponentHost0.__proto__),
    [_compView_0$1]: dart.fieldType(heros_component$46template.ViewHerosComponent0),
    [_HeroService_0_5$0]: dart.fieldType(dart.dynamic),
    [_HerosComponent_0_6]: dart.fieldType(heros_component.HerosComponent)
  }));
  heros_component$46template.viewFactory_HerosComponent1 = function viewFactory_HerosComponent1(parentView, parentIndex) {
    return new heros_component$46template._ViewHerosComponent1.new(parentView, parentIndex);
  };
  heros_component$46template.viewFactory_HerosComponent2 = function viewFactory_HerosComponent2(parentView, parentIndex) {
    return new heros_component$46template._ViewHerosComponent2.new(parentView, parentIndex);
  };
  heros_component$46template.viewFactory_HerosComponentHost0 = function viewFactory_HerosComponentHost0(parentView, parentIndex) {
    return new heros_component$46template._ViewHerosComponentHost0.new(parentView, parentIndex);
  };
  heros_component$46template.initReflector = function initReflector$5() {
    if (dart.test(heros_component$46template._visited)) {
      return;
    }
    heros_component$46template._visited = true;
    reflector.registerComponent(dart.wrapType(heros_component.HerosComponent), heros_component$46template.HerosComponentNgFactory);
    angular$46template.initReflector();
    route_paths$46template.initReflector();
    hero_service$46template.initReflector();
    hero$46template.initReflector();
    angular_router$46template.initReflector();
  };
  dart.copyProperties(heros_component$46template, {
    get HerosComponentNgFactory() {
      return heros_component$46template._HerosComponentNgFactory;
    }
  });
  let C19;
  let C18;
  dart.defineLazy(heros_component$46template, {
    /*heros_component$46template.styles$HerosComponent*/get styles$HerosComponent() {
      return [heros_component$46css$46shim.styles];
    },
    /*heros_component$46template._HerosComponentNgFactory*/get _HerosComponentNgFactory() {
      return C18 || CT.C18;
    },
    /*heros_component$46template.styles$HerosComponentHost*/get styles$HerosComponentHost() {
      return C5 || CT.C5;
    },
    /*heros_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  routes.Routes = class Routes extends core.Object {};
  (routes.Routes.new = function() {
    ;
  }).prototype = routes.Routes.prototype;
  dart.addTypeTests(routes.Routes);
  dart.setLibraryUri(routes.Routes, "package:angular_dart_hero/src/commom/routes.dart");
  dart.defineLazy(routes.Routes, {
    /*routes.Routes.heros*/get heros() {
      return new route_definition.ComponentRouteDefinition.__({routePath: route_paths.RoutePaths.heros, component: heros_component$46template.HerosComponentNgFactory});
    },
    /*routes.Routes.dashboard*/get dashboard() {
      return new route_definition.ComponentRouteDefinition.__({routePath: route_paths.RoutePaths.dashboard, component: dashboard_component$46template.DashboardComponentNgFactory});
    },
    /*routes.Routes.hero*/get hero() {
      return new route_definition.ComponentRouteDefinition.__({routePath: route_paths.RoutePaths.hero, component: hero_component$46template.HeroComponentNgFactory});
    },
    /*routes.Routes.all*/get all() {
      return JSArrayOfRouteDefinition().of([routes.Routes.dashboard, routes.Routes.heros, new route_definition.RedirectRouteDefinition.__({path: "", redirectTo: route_paths.RoutePaths.dashboard.toUrl()}), routes.Routes.hero]);
    }
  });
  dart.trackLibraries("packages/angular_dart_hero/src/commom/route_paths", {
    "package:angular_dart_hero/src/component/heros_component/heros_component.css.shim.dart": heros_component$46css$46shim,
    "package:angular_dart_hero/src/component/hero_component/hero_component.dart": hero_component,
    "package:angular_dart_hero/src/model/hero.dart": hero$,
    "package:angular_dart_hero/src/component/hero_component/hero_service.dart": hero_service,
    "package:angular_dart_hero/src/commom/route_paths.dart": route_paths,
    "package:angular_dart_hero/src/component/hero_search_component/hero_search_component.dart": hero_search_component,
    "package:angular_dart_hero/src/component/hero_search_component/hero_search_service.dart": hero_search_service,
    "package:angular_dart_hero/src/component/dashboard_component/dashboard_component.template.dart": dashboard_component$46template,
    "package:angular_dart_hero/src/component/hero_search_component/hero_search_component.template.dart": hero_search_component$46template,
    "package:angular_dart_hero/src/component/hero_search_component/hero_search_component.css.shim.dart": hero_search_component$46css$46shim,
    "package:angular_dart_hero/src/model/hero.template.dart": hero$46template,
    "package:angular_dart_hero/src/commom/route_paths.template.dart": route_paths$46template,
    "package:angular_dart_hero/src/component/hero_search_component/hero_search_service.template.dart": hero_search_service$46template,
    "package:angular_dart_hero/src/component/dashboard_component/dashboard_component.dart": dashboard_component,
    "package:angular_dart_hero/src/component/dashboard_component/dashboard_component.css.shim.dart": dashboard_component$46css$46shim,
    "package:angular_dart_hero/src/component/hero_component/hero_service.template.dart": hero_service$46template,
    "package:angular_dart_hero/src/component/hero_component/hero_component.css.shim.dart": hero_component$46css$46shim,
    "package:angular_dart_hero/src/component/heros_component/heros_component.dart": heros_component,
    "package:angular_dart_hero/src/component/hero_component/hero_component.template.dart": hero_component$46template,
    "package:angular_dart_hero/src/component/heros_component/heros_component.template.dart": heros_component$46template,
    "package:angular_dart_hero/src/commom/routes.dart": routes
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../component/heros_component/heros_component.css.shim.dart","../component/hero_component/hero_component.dart","../model/hero.dart","../component/hero_component/hero_service.dart","route_paths.dart","../component/hero_search_component/hero_search_component.dart","../component/hero_search_component/hero_search_service.dart","../component/dashboard_component/dashboard_component.dart","../component/dashboard_component/dashboard_component.template.dart","../component/hero_search_component/hero_search_component.template.dart","../component/hero_search_component/hero_search_component.css.shim.dart","../model/hero.template.dart","route_paths.template.dart","../component/hero_search_component/hero_search_service.template.dart","../component/dashboard_component/dashboard_component.css.shim.dart","../component/hero_component/hero_service.template.dart","../component/hero_component/hero_component.css.shim.dart","../component/heros_component/heros_component.dart","../component/hero_component/hero_component.template.dart","../component/heros_component/heros_component.template.dart","routes.dart"],"names":[],"mappings":"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","file":"route_paths.ddc.js"}');
  // Exports:
  return {
    src__component__heros_component__heros_component$46css$46shim: heros_component$46css$46shim,
    src__component__hero_component__hero_component: hero_component,
    src__model__hero: hero$,
    src__component__hero_component__hero_service: hero_service,
    src__commom__route_paths: route_paths,
    src__component__hero_search_component__hero_search_component: hero_search_component,
    src__component__hero_search_component__hero_search_service: hero_search_service,
    src__component__dashboard_component__dashboard_component$46template: dashboard_component$46template,
    src__component__hero_search_component__hero_search_component$46template: hero_search_component$46template,
    src__component__hero_search_component__hero_search_component$46css$46shim: hero_search_component$46css$46shim,
    src__model__hero$46template: hero$46template,
    src__commom__route_paths$46template: route_paths$46template,
    src__component__hero_search_component__hero_search_service$46template: hero_search_service$46template,
    src__component__dashboard_component__dashboard_component: dashboard_component,
    src__component__dashboard_component__dashboard_component$46css$46shim: dashboard_component$46css$46shim,
    src__component__hero_component__hero_service$46template: hero_service$46template,
    src__component__hero_component__hero_component$46css$46shim: hero_component$46css$46shim,
    src__component__heros_component__heros_component: heros_component,
    src__component__hero_component__hero_component$46template: hero_component$46template,
    src__component__heros_component__heros_component$46template: heros_component$46template,
    src__commom__routes: routes
  };
});

//# sourceMappingURL=route_paths.ddc.js.map
