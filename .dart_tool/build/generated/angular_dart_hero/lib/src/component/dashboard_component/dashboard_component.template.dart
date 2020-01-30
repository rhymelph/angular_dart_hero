// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'dashboard_component.dart';
export 'dashboard_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_dart_hero/src/commom/route_paths.template.dart' as _ref1;
import 'package:angular_dart_hero/src/component/hero_component/hero_service.template.dart' as _ref2;
import 'package:angular_dart_hero/src/component/hero_search_component/hero_search_component.template.dart' as _ref3;
import 'package:angular_dart_hero/src/model/hero.template.dart' as _ref4;
import 'package:angular_router/angular_router.template.dart' as _ref5;
import 'package:angular_dart_hero/src/component/dashboard_component/dashboard_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'dashboard_component.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import '../hero_search_component/hero_search_component.template.dart' as import5;
import '../hero_search_component/hero_search_component.dart' as import6;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import7;
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import10;
import 'package:angular/src/runtime.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import13;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/di/errors.dart' as import15;
import '../hero_search_component/hero_search_service.dart' as import16;
import 'package:http/src/client.dart' as import17;
import 'package:angular_router/src/router/router.dart' as import18;
import 'package:angular/src/core/linker/app_view_utils.dart' as import19;
import 'package:angular/src/runtime/text_binding.dart' as import20;
import 'package:angular_router/src/directives/router_link_directive.template.dart' as import21;
import 'package:angular_router/src/directives/router_link_directive.dart' as import22;
import 'package:angular_router/src/location/location.dart' as import23;
import '../../model/hero.dart' as import24;
import 'package:angular/src/runtime/interpolate.dart' as import25;
import '../hero_component/hero_service.dart' as import26;

final List<dynamic> styles$DashboardComponent = [import0.styles];

class ViewDashboardComponent0 extends AppView<import2.DashboardComponent> {
  ViewContainer _appEl_3;
  import4.NgFor _NgFor_3_9;
  import5.ViewHeroSearchComponent0 _compView_4;
  dynamic _HeroSearchService_4_5;
  import6.HeroSearchComponent _HeroSearchComponent_4_6;
  var _expr_0;
  static import7.ComponentStyles _componentStyles;
  ViewDashboardComponent0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import10.document.createElement('my-dashboard');
  }
  static String get _debugComponentUrl {
    return (import11.isDevMode ? 'asset:angular_dart_hero/lib/src/component/dashboard_component/dashboard_component.dart' : null);
  }

  @override
  ComponentRef<import2.DashboardComponent> build() {
    final _rootEl = rootEl;
    final import10.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import10.document;
    final _el_0 = import13.appendElement(doc, parentRenderNode, 'h3');
    addShimE(_el_0);
    final _text_1 = import13.appendText(_el_0, 'Top Heros');
    final _el_2 = import13.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_2, 'grid grid-pad');
    addShimC(_el_2);
    final _anchor_3 = import13.appendAnchor(_el_2);
    _appEl_3 = ViewContainer(3, 2, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = TemplateRef(_appEl_3, viewFactory_DashboardComponent1);
    _NgFor_3_9 = import4.NgFor(_appEl_3, _TemplateRef_3_8);
    _compView_4 = import5.ViewHeroSearchComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    parentRenderNode.append(_el_4);
    addShimC(_el_4);
    _HeroSearchService_4_5 = (import11.isDevMode
        ? import15.debugInjectorWrap(import16.HeroSearchService, () {
            return import16.HeroSearchService(parentView.injectorGet(import17.Client, viewData.parentIndex));
          })
        : import16.HeroSearchService(parentView.injectorGet(import17.Client, viewData.parentIndex)));
    _HeroSearchComponent_4_6 = (import11.isDevMode
        ? import15.debugInjectorWrap(import6.HeroSearchComponent, () {
            return import6.HeroSearchComponent(_HeroSearchService_4_5, parentView.injectorGet(import18.Router, viewData.parentIndex));
          })
        : import6.HeroSearchComponent(_HeroSearchService_4_5, parentView.injectorGet(import18.Router, viewData.parentIndex)));
    _compView_4.create0(_HeroSearchComponent_4_6);
    init0();
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import16.HeroSearchService) && (4 == nodeIndex))) {
      return _HeroSearchService_4_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_0 = _ctx.heros;
    if (import19.checkBinding(_expr_0, currVal_0)) {
      _NgFor_3_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if ((!import19.AppViewUtils.throwOnChanges)) {
      _NgFor_3_9.ngDoCheck();
    }
    if (((!import19.AppViewUtils.throwOnChanges) && firstCheck)) {
      _HeroSearchComponent_4_6.ngOnInit();
    }
    _appEl_3.detectChangesInNestedViews();
    _compView_4.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_3.destroyNestedViews();
    _compView_4.destroyInternalState();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import7.ComponentStyles.scoped(styles$DashboardComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.DashboardComponent> _DashboardComponentNgFactory = const ComponentFactory('my-dashboard', viewFactory_DashboardComponentHost0);
ComponentFactory<import2.DashboardComponent> get DashboardComponentNgFactory {
  return _DashboardComponentNgFactory;
}

class _ViewDashboardComponent1 extends AppView<import2.DashboardComponent> {
  final import20.TextBinding _textBinding_3 = import20.TextBinding();
  import21.RouterLinkNgCd _RouterLink_0_5;
  String _expr_0;
  import10.AnchorElement _el_0;
  _ViewDashboardComponent1(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.DashboardComponent> build() {
    final doc = import10.document;
    _el_0 = doc.createElement('a');
    this.updateChildClass(_el_0, 'col-1-4');
    addShimC(_el_0);
    _RouterLink_0_5 = import21.RouterLinkNgCd((import11.isDevMode
        ? import15.debugInjectorWrap(import22.RouterLink, () {
            return import22.RouterLink(parentView.parentView.injectorGet(import18.Router, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import23.Location, parentView.viewData.parentIndex), null, _el_0);
          })
        : import22.RouterLink(parentView.parentView.injectorGet(import18.Router, parentView.viewData.parentIndex), parentView.parentView.injectorGet(import23.Location, parentView.viewData.parentIndex), null, _el_0)));
    final _el_1 = import13.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'module hero');
    addShimC(_el_1);
    final _el_2 = import13.appendElement(doc, _el_1, 'h4');
    addShimE(_el_2);
    _el_2.append(_textBinding_3.element);
    _el_0.addEventListener('click', eventHandler1(_RouterLink_0_5.instance.onClick));
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final local_hero = import11.unsafeCast<import24.Hero>(locals['\$implicit']);
    final currVal_0 = _ctx.heroUrl(local_hero.id);
    if (import19.checkBinding(_expr_0, currVal_0)) {
      _RouterLink_0_5.instance.routerLink = currVal_0;
      _expr_0 = currVal_0;
    }
    _RouterLink_0_5.detectHostChanges(this, _el_0);
    _textBinding_3.updateText(import25.interpolateString0(local_hero.name));
  }

  @override
  void destroyInternal() {
    _RouterLink_0_5.instance.ngOnDestroy();
  }
}

AppView<void> viewFactory_DashboardComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDashboardComponent1(parentView, parentIndex);
}

final List<dynamic> styles$DashboardComponentHost = const [];

class _ViewDashboardComponentHost0 extends AppView<import2.DashboardComponent> {
  ViewDashboardComponent0 _compView_0;
  dynamic _HeroService_0_5;
  import2.DashboardComponent _DashboardComponent_0_6;
  _ViewDashboardComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.DashboardComponent> build() {
    _compView_0 = ViewDashboardComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HeroService_0_5 = (import11.isDevMode
        ? import15.debugInjectorWrap(import26.HeroService, () {
            return import26.HeroService(this.injectorGet(import17.Client, viewData.parentIndex));
          })
        : import26.HeroService(this.injectorGet(import17.Client, viewData.parentIndex)));
    _DashboardComponent_0_6 = import2.DashboardComponent(_HeroService_0_5);
    _compView_0.create(_DashboardComponent_0_6, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _DashboardComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import26.HeroService) && (0 == nodeIndex))) {
      return _HeroService_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (((!import19.AppViewUtils.throwOnChanges) && firstCheck)) {
      _DashboardComponent_0_6.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import2.DashboardComponent> viewFactory_DashboardComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDashboardComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(DashboardComponent, DashboardComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
