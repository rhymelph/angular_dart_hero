// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'app_component.dart';
export 'app_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_dart_hero/src/commom/route_paths.template.dart' as _ref1;
import 'package:angular_dart_hero/src/commom/routes.template.dart' as _ref2;
import 'package:angular_router/angular_router.template.dart' as _ref3;
import 'package:angular_dart_hero/app_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import2;
import 'package:angular_router/src/directives/router_link_directive.template.dart' as import3;
import 'package:angular_router/src/directives/router_link_active_directive.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular_router/src/directives/router_outlet_directive.dart' as import6;
import 'dart:html' as import7;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import8;
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import13;
import 'package:angular/src/runtime/interpolate.dart' as import14;
import 'package:angular/src/di/errors.dart' as import15;
import 'package:angular_router/src/directives/router_link_directive.dart' as import16;
import 'package:angular_router/src/router/router.dart' as import17;
import 'package:angular_router/src/location/location.dart' as import18;
import 'package:angular_router/src/router/router_outlet_token.dart' as import19;
import 'package:angular_router/src/router_hook.dart' as import20;
import 'src/commom/route_paths.dart' as import21;
import 'package:angular/src/core/linker/app_view_utils.dart' as import22;
import 'src/commom/routes.dart' as import23;

final List<dynamic> styles$AppComponent = [import0.styles];

class ViewAppComponent0 extends AppView<import2.AppComponent> {
  import3.RouterLinkNgCd _RouterLink_3_5;
  import4.RouterLinkActive _RouterLinkActive_3_6;
  import3.RouterLinkNgCd _RouterLink_6_5;
  import4.RouterLinkActive _RouterLinkActive_6_6;
  ViewContainer _appEl_8;
  import6.RouterOutlet _RouterOutlet_8_8;
  String _expr_0;
  String _expr_2;
  import7.AnchorElement _el_3;
  import7.AnchorElement _el_6;
  static import8.ComponentStyles _componentStyles;
  ViewAppComponent0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import7.document.createElement('my-app');
  }
  static String get _debugComponentUrl {
    return (import11.isDevMode ? 'asset:angular_dart_hero/lib/app_component.dart' : null);
  }

  @override
  ComponentRef<import2.AppComponent> build() {
    final _ctx = ctx;
    final _rootEl = rootEl;
    final import7.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import7.document;
    final _el_0 = import13.appendElement(doc, parentRenderNode, 'h1');
    addShimE(_el_0);
    final _text_1 = import13.appendText(_el_0, import14.interpolateString0(_ctx.name));
    final _el_2 = import13.appendElement(doc, parentRenderNode, 'nav');
    addShimE(_el_2);
    _el_3 = import13.appendElement(doc, _el_2, 'a');
    addShimC(_el_3);
    _RouterLink_3_5 = import3.RouterLinkNgCd((import11.isDevMode
        ? import15.debugInjectorWrap(import16.RouterLink, () {
            return import16.RouterLink(parentView.injectorGet(import17.Router, viewData.parentIndex), parentView.injectorGet(import18.Location, viewData.parentIndex), null, _el_3);
          })
        : import16.RouterLink(parentView.injectorGet(import17.Router, viewData.parentIndex), parentView.injectorGet(import18.Location, viewData.parentIndex), null, _el_3)));
    _RouterLinkActive_3_6 = (import11.isDevMode
        ? import15.debugInjectorWrap(import4.RouterLinkActive, () {
            return import4.RouterLinkActive(_el_3, parentView.injectorGet(import17.Router, viewData.parentIndex));
          })
        : import4.RouterLinkActive(_el_3, parentView.injectorGet(import17.Router, viewData.parentIndex)));
    final _text_4 = import13.appendText(_el_3, 'DashBoard');
    _RouterLinkActive_3_6.links = [_RouterLink_3_5.instance];
    final _text_5 = import13.appendText(_el_2, ' ');
    _el_6 = import13.appendElement(doc, _el_2, 'a');
    addShimC(_el_6);
    _RouterLink_6_5 = import3.RouterLinkNgCd((import11.isDevMode
        ? import15.debugInjectorWrap(import16.RouterLink, () {
            return import16.RouterLink(parentView.injectorGet(import17.Router, viewData.parentIndex), parentView.injectorGet(import18.Location, viewData.parentIndex), null, _el_6);
          })
        : import16.RouterLink(parentView.injectorGet(import17.Router, viewData.parentIndex), parentView.injectorGet(import18.Location, viewData.parentIndex), null, _el_6)));
    _RouterLinkActive_6_6 = (import11.isDevMode
        ? import15.debugInjectorWrap(import4.RouterLinkActive, () {
            return import4.RouterLinkActive(_el_6, parentView.injectorGet(import17.Router, viewData.parentIndex));
          })
        : import4.RouterLinkActive(_el_6, parentView.injectorGet(import17.Router, viewData.parentIndex)));
    final _text_7 = import13.appendText(_el_6, 'Heros');
    _RouterLinkActive_6_6.links = [_RouterLink_6_5.instance];
    final _el_8 = import13.appendElement(doc, parentRenderNode, 'router-outlet');
    addShimE(_el_8);
    _appEl_8 = ViewContainer(8, null, this, _el_8);
    _RouterOutlet_8_8 = (import11.isDevMode
        ? import15.debugInjectorWrap(import6.RouterOutlet, () {
            return import6.RouterOutlet(parentView.injectorGetOptional(import19.RouterOutletToken, viewData.parentIndex), _appEl_8, parentView.injectorGet(import17.Router, viewData.parentIndex), parentView.injectorGetOptional(import20.RouterHook, viewData.parentIndex));
          })
        : import6.RouterOutlet(parentView.injectorGetOptional(import19.RouterOutletToken, viewData.parentIndex), _appEl_8, parentView.injectorGet(import17.Router, viewData.parentIndex), parentView.injectorGetOptional(import20.RouterHook, viewData.parentIndex)));
    _el_3.addEventListener('click', eventHandler1(_RouterLink_3_5.instance.onClick));
    _el_6.addEventListener('click', eventHandler1(_RouterLink_6_5.instance.onClick));
    init0();
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    final currVal_0 = import21.RoutePaths.dashboard.toUrl();
    if (import22.checkBinding(_expr_0, currVal_0)) {
      _RouterLink_3_5.instance.routerLink = currVal_0;
      _expr_0 = currVal_0;
    }
    if (firstCheck) {
      (_RouterLinkActive_3_6.routerLinkActive = 'active');
    }
    final currVal_2 = import21.RoutePaths.heros.toUrl();
    if (import22.checkBinding(_expr_2, currVal_2)) {
      _RouterLink_6_5.instance.routerLink = currVal_2;
      _expr_2 = currVal_2;
    }
    if (firstCheck) {
      _RouterLinkActive_6_6.routerLinkActive = 'active';
      if (!identical(import23.Routes.all, null)) {
        (_RouterOutlet_8_8.routes = import23.Routes.all);
      }
    }
    if (((!import22.AppViewUtils.throwOnChanges) && firstCheck)) {
      _RouterOutlet_8_8.ngOnInit();
    }
    _appEl_8.detectChangesInNestedViews();
    _RouterLink_3_5.detectHostChanges(this, _el_3);
    _RouterLink_6_5.detectHostChanges(this, _el_6);
    if ((!import22.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _RouterLinkActive_3_6.ngAfterViewInit();
        _RouterLinkActive_6_6.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_8.destroyNestedViews();
    _RouterLink_3_5.instance.ngOnDestroy();
    _RouterLinkActive_3_6.ngOnDestroy();
    _RouterLink_6_5.instance.ngOnDestroy();
    _RouterLinkActive_6_6.ngOnDestroy();
    _RouterOutlet_8_8.ngOnDestroy();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import8.ComponentStyles.scoped(styles$AppComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.AppComponent> _AppComponentNgFactory = const ComponentFactory('my-app', viewFactory_AppComponentHost0);
ComponentFactory<import2.AppComponent> get AppComponentNgFactory {
  return _AppComponentNgFactory;
}

final List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<import2.AppComponent> {
  ViewAppComponent0 _compView_0;
  import2.AppComponent _AppComponent_0_5;
  _ViewAppComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppComponent_0_5 = import2.AppComponent();
    _compView_0.create(_AppComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _AppComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (((!import22.AppViewUtils.throwOnChanges) && firstCheck)) {
      _AppComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppComponent, AppComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
