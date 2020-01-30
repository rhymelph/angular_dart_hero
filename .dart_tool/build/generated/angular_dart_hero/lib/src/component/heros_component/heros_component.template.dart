// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'heros_component.dart';
export 'heros_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_dart_hero/src/commom/route_paths.template.dart' as _ref1;
import 'package:angular_dart_hero/src/component/hero_component/hero_service.template.dart' as _ref2;
import 'package:angular_dart_hero/src/model/hero.template.dart' as _ref3;
import 'package:angular_router/angular_router.template.dart' as _ref4;
import 'package:angular_dart_hero/src/component/heros_component/heros_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'heros_component.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/common/pipes/uppercase_pipe.dart' as import6;
import 'dart:html' as import7;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import8;
import 'package:angular/src/core/linker/view_type.dart' as import9;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import13;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import15;
import 'package:angular/src/runtime/text_binding.dart' as import16;
import '../../model/hero.dart' as import17;
import 'package:angular/src/runtime/interpolate.dart' as import18;
import 'dart:core';
import 'package:angular/src/runtime/proxies.dart' as import20;
import 'package:angular/src/di/errors.dart' as import21;
import '../hero_component/hero_service.dart' as import22;
import 'package:http/src/client.dart' as import23;
import 'package:angular_router/src/router/router.dart' as import24;

final List<dynamic> styles$HerosComponent = [import0.styles];

class ViewHerosComponent0 extends AppView<import2.HerosComponent> {
  ViewContainer _appEl_8;
  import4.NgFor _NgFor_8_9;
  ViewContainer _appEl_10;
  NgIf _NgIf_10_9;
  var _expr_0;
  import6.UpperCasePipe _pipe_uppercase_0;
  import7.InputElement _el_3;
  static import8.ComponentStyles _componentStyles;
  ViewHerosComponent0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import7.document.createElement('my-heros');
  }
  static String get _debugComponentUrl {
    return (import11.isDevMode ? 'asset:angular_dart_hero/lib/src/component/heros_component/heros_component.dart' : null);
  }

  @override
  ComponentRef<import2.HerosComponent> build() {
    final _rootEl = rootEl;
    final import7.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import7.document;
    final _el_0 = import13.appendDiv(doc, parentRenderNode);
    addShimC(_el_0);
    final _el_1 = import13.appendElement(doc, _el_0, 'label');
    addShimE(_el_1);
    final _text_2 = import13.appendText(_el_1, 'Hero name:');
    _el_3 = import13.appendElement(doc, _el_0, 'input');
    addShimC(_el_3);
    final _text_4 = import13.appendText(_el_0, ' ');
    final _el_5 = import13.appendElement(doc, _el_0, 'button');
    addShimC(_el_5);
    final _text_6 = import13.appendText(_el_5, 'Add');
    final _el_7 = import13.appendElement(doc, parentRenderNode, 'ul');
    this.updateChildClass(_el_7, 'heros');
    addShimC(_el_7);
    final _anchor_8 = import13.appendAnchor(_el_7);
    _appEl_8 = ViewContainer(8, 7, this, _anchor_8);
    TemplateRef _TemplateRef_8_8 = TemplateRef(_appEl_8, viewFactory_HerosComponent1);
    _NgFor_8_9 = import4.NgFor(_appEl_8, _TemplateRef_8_8);
    final _text_9 = import13.appendText(parentRenderNode, ' ');
    final _anchor_10 = import13.appendAnchor(parentRenderNode);
    _appEl_10 = ViewContainer(10, null, this, _anchor_10);
    TemplateRef _TemplateRef_10_8 = TemplateRef(_appEl_10, viewFactory_HerosComponent2);
    _NgIf_10_9 = NgIf(_appEl_10, _TemplateRef_10_8);
    _el_5.addEventListener('click', eventHandler1(_handle_click_5_0));
    _pipe_uppercase_0 = import6.UpperCasePipe();
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final currVal_0 = _ctx.heros;
    if (import15.checkBinding(_expr_0, currVal_0)) {
      _NgFor_8_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if ((!import15.AppViewUtils.throwOnChanges)) {
      _NgFor_8_9.ngDoCheck();
    }
    _NgIf_10_9.ngIf = (_ctx.selected != null);
    _appEl_8.detectChangesInNestedViews();
    _appEl_10.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_8.destroyNestedViews();
    _appEl_10.destroyNestedViews();
  }

  void _handle_click_5_0($event) {
    final local_heroName = _el_3;
    final _ctx = ctx;
    _ctx.add(local_heroName.value);
    local_heroName.value = '';
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import8.ComponentStyles.scoped(styles$HerosComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.HerosComponent> _HerosComponentNgFactory = const ComponentFactory('my-heros', viewFactory_HerosComponentHost0);
ComponentFactory<import2.HerosComponent> get HerosComponentNgFactory {
  return _HerosComponentNgFactory;
}

class _ViewHerosComponent1 extends AppView<import2.HerosComponent> {
  final import16.TextBinding _textBinding_2 = import16.TextBinding();
  final import16.TextBinding _textBinding_3 = import16.TextBinding();
  bool _expr_0;
  import7.Element _el_0;
  _ViewHerosComponent1(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.HerosComponent> build() {
    final doc = import7.document;
    _el_0 = doc.createElement('li');
    addShimE(_el_0);
    final _el_1 = import13.appendSpan(doc, _el_0);
    this.updateChildClass(_el_1, 'badge');
    addShimE(_el_1);
    _el_1.append(_textBinding_2.element);
    _el_0.append(_textBinding_3.element);
    final _text_4 = import13.appendText(_el_0, ' ');
    final _text_5 = import13.appendText(_el_0, ' ');
    final _el_6 = import13.appendElement(doc, _el_0, 'button');
    this.updateChildClass(_el_6, 'delete');
    addShimC(_el_6);
    final _text_7 = import13.appendText(_el_6, 'x');
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_0));
    _el_6.addEventListener('click', eventHandler1(_handle_click_6_0));
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    final local_hero = import11.unsafeCast<import17.Hero>(locals['\$implicit']);
    final currVal_0 = identical(local_hero, _ctx.selected);
    if (import15.checkBinding(_expr_0, currVal_0)) {
      import13.updateClassBinding(_el_0, 'selected', currVal_0);
      _expr_0 = currVal_0;
    }
    _textBinding_2.updateText(import18.interpolate0(local_hero.id));
    _textBinding_3.updateText(import18.interpolateString0(local_hero.name));
  }

  void _handle_click_0_0($event) {
    final local_hero = import11.unsafeCast<import17.Hero>(locals['\$implicit']);
    final _ctx = ctx;
    _ctx.onSelect(local_hero);
  }

  void _handle_click_6_0($event) {
    final local_hero = import11.unsafeCast<import17.Hero>(locals['\$implicit']);
    final _ctx = ctx;
    _ctx.delete(local_hero);
    $event.stopPropagetion();
  }
}

AppView<void> viewFactory_HerosComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewHerosComponent1(parentView, parentIndex);
}

class _ViewHerosComponent2 extends AppView<import2.HerosComponent> {
  final import16.TextBinding _textBinding_2 = import16.TextBinding();
  String Function(String) _pipe_uppercase_0_0;
  _ViewHerosComponent2(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.HerosComponent> build() {
    final _ctx = ctx;
    final doc = import7.document;
    final _el_0 = doc.createElement('div');
    addShimC(_el_0);
    final _el_1 = import13.appendElement(doc, _el_0, 'h2');
    addShimE(_el_1);
    _el_1.append(_textBinding_2.element);
    final _text_3 = import13.appendText(_el_1, ' is my hero');
    final _el_4 = import13.appendElement(doc, _el_0, 'button');
    addShimC(_el_4);
    final _text_5 = import13.appendText(_el_4, 'View Details');
    _el_4.addEventListener('click', eventHandler0(_ctx.gotoDetail));
    _pipe_uppercase_0_0 = import20.pureProxy1(import11.unsafeCast<ViewHerosComponent0>(parentView)._pipe_uppercase_0.transform);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_2.updateText(import18.interpolate0(_pipe_uppercase_0_0(_ctx.selected.name)));
  }
}

AppView<void> viewFactory_HerosComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewHerosComponent2(parentView, parentIndex);
}

final List<dynamic> styles$HerosComponentHost = const [];

class _ViewHerosComponentHost0 extends AppView<import2.HerosComponent> {
  ViewHerosComponent0 _compView_0;
  dynamic _HeroService_0_5;
  import2.HerosComponent _HerosComponent_0_6;
  _ViewHerosComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import9.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.HerosComponent> build() {
    _compView_0 = ViewHerosComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HeroService_0_5 = (import11.isDevMode
        ? import21.debugInjectorWrap(import22.HeroService, () {
            return import22.HeroService(this.injectorGet(import23.Client, viewData.parentIndex));
          })
        : import22.HeroService(this.injectorGet(import23.Client, viewData.parentIndex)));
    _HerosComponent_0_6 = (import11.isDevMode
        ? import21.debugInjectorWrap(import2.HerosComponent, () {
            return import2.HerosComponent(_HeroService_0_5, this.injectorGet(import24.Router, viewData.parentIndex));
          })
        : import2.HerosComponent(_HeroService_0_5, this.injectorGet(import24.Router, viewData.parentIndex)));
    _compView_0.create(_HerosComponent_0_6, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _HerosComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import22.HeroService) && (0 == nodeIndex))) {
      return _HeroService_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (((!import15.AppViewUtils.throwOnChanges) && firstCheck)) {
      _HerosComponent_0_6.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import2.HerosComponent> viewFactory_HerosComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewHerosComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HerosComponent, HerosComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
