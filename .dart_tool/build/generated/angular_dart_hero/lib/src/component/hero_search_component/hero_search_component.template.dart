// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'hero_search_component.dart';
export 'hero_search_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'hero_search_service.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_dart_hero/src/commom/route_paths.template.dart' as _ref2;
import 'package:angular_dart_hero/src/model/hero.template.dart' as _ref3;
import 'package:angular_router/angular_router.template.dart' as _ref4;
import 'package:angular_dart_hero/src/component/hero_search_component/hero_search_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'hero_search_component.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'package:angular/src/common/pipes/async_pipe.dart' as import5;
import 'dart:html' as import6;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import7;
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import12;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import14;
import 'package:angular/src/runtime/text_binding.dart' as import15;
import 'package:angular/src/runtime/interpolate.dart' as import16;
import 'package:angular/src/di/errors.dart' as import17;
import 'hero_search_service.dart' as import18;
import 'package:http/src/client.dart' as import19;
import 'package:angular_router/src/router/router.dart' as import20;

final List<dynamic> styles$HeroSearchComponent = [import0.styles];

class ViewHeroSearchComponent0 extends AppView<import2.HeroSearchComponent> {
  ViewContainer _appEl_5;
  import4.NgFor _NgFor_5_9;
  var _expr_0;
  import5.AsyncPipe _pipe_async_0;
  import6.InputElement _el_3;
  static import7.ComponentStyles _componentStyles;
  ViewHeroSearchComponent0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import6.document.createElement('hero-search');
  }
  static String get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:angular_dart_hero/lib/src/component/hero_search_component/hero_search_component.dart' : null);
  }

  @override
  ComponentRef<import2.HeroSearchComponent> build() {
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import6.document;
    final _el_0 = import12.appendDiv(doc, parentRenderNode);
    import12.setAttribute(_el_0, 'id', 'search-component');
    addShimC(_el_0);
    final _el_1 = import12.appendElement(doc, _el_0, 'h4');
    addShimE(_el_1);
    final _text_2 = import12.appendText(_el_1, 'Hero Search');
    _el_3 = import12.appendElement(doc, _el_0, 'input');
    import12.setAttribute(_el_3, 'id', 'search-box');
    addShimC(_el_3);
    final _el_4 = import12.appendDiv(doc, _el_0);
    addShimC(_el_4);
    final _anchor_5 = import12.appendAnchor(_el_4);
    _appEl_5 = ViewContainer(5, 4, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_HeroSearchComponent1);
    _NgFor_5_9 = import4.NgFor(_appEl_5, _TemplateRef_5_8);
    _el_3.addEventListener('change', eventHandler1(_handle_change_3_0));
    _el_3.addEventListener('keyup', eventHandler1(_handle_keyup_3_1));
    _pipe_async_0 = import5.AsyncPipe(this);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _pipe_async_0.transform(_ctx.heros);
    if (import14.checkBinding(_expr_0, currVal_0)) {
      _NgFor_5_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if ((!import14.AppViewUtils.throwOnChanges)) {
      _NgFor_5_9.ngDoCheck();
    }
    _appEl_5.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_5.destroyNestedViews();
    _pipe_async_0.ngOnDestroy();
  }

  void _handle_change_3_0($event) {
    final local_searchBox = _el_3;
    final _ctx = ctx;
    _ctx.search(local_searchBox.value);
  }

  void _handle_keyup_3_1($event) {
    final local_searchBox = _el_3;
    final _ctx = ctx;
    _ctx.search(local_searchBox.value);
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import7.ComponentStyles.scoped(styles$HeroSearchComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.HeroSearchComponent> _HeroSearchComponentNgFactory = const ComponentFactory('hero-search', viewFactory_HeroSearchComponentHost0);
ComponentFactory<import2.HeroSearchComponent> get HeroSearchComponentNgFactory {
  return _HeroSearchComponentNgFactory;
}

class _ViewHeroSearchComponent1 extends AppView<import2.HeroSearchComponent> {
  final import15.TextBinding _textBinding_1 = import15.TextBinding();
  _ViewHeroSearchComponent1(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.HeroSearchComponent> build() {
    final doc = import6.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'search-result');
    addShimC(_el_0);
    _el_0.append(_textBinding_1.element);
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_hero = locals['\$implicit'];
    _textBinding_1.updateText(import16.interpolate0(local_hero.name));
  }

  void _handle_click_0_0($event) {
    final local_hero = locals['\$implicit'];
    final _ctx = ctx;
    _ctx.gotoDetail(local_hero);
  }
}

AppView<void> viewFactory_HeroSearchComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewHeroSearchComponent1(parentView, parentIndex);
}

final List<dynamic> styles$HeroSearchComponentHost = const [];

class _ViewHeroSearchComponentHost0 extends AppView<import2.HeroSearchComponent> {
  ViewHeroSearchComponent0 _compView_0;
  dynamic _HeroSearchService_0_5;
  import2.HeroSearchComponent _HeroSearchComponent_0_6;
  _ViewHeroSearchComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.HeroSearchComponent> build() {
    _compView_0 = ViewHeroSearchComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HeroSearchService_0_5 = (import10.isDevMode
        ? import17.debugInjectorWrap(import18.HeroSearchService, () {
            return import18.HeroSearchService(this.injectorGet(import19.Client, viewData.parentIndex));
          })
        : import18.HeroSearchService(this.injectorGet(import19.Client, viewData.parentIndex)));
    _HeroSearchComponent_0_6 = (import10.isDevMode
        ? import17.debugInjectorWrap(import2.HeroSearchComponent, () {
            return import2.HeroSearchComponent(_HeroSearchService_0_5, this.injectorGet(import20.Router, viewData.parentIndex));
          })
        : import2.HeroSearchComponent(_HeroSearchService_0_5, this.injectorGet(import20.Router, viewData.parentIndex)));
    _compView_0.create(_HeroSearchComponent_0_6, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _HeroSearchComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import18.HeroSearchService) && (0 == nodeIndex))) {
      return _HeroSearchService_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (((!import14.AppViewUtils.throwOnChanges) && firstCheck)) {
      _HeroSearchComponent_0_6.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import2.HeroSearchComponent> viewFactory_HeroSearchComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewHeroSearchComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HeroSearchComponent, HeroSearchComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
