// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'hero_component.dart';
export 'hero_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_dart_hero/src/commom/route_paths.template.dart' as _ref1;
import 'package:angular_dart_hero/src/component/hero_component/hero_service.template.dart' as _ref2;
import 'package:angular_dart_hero/src/model/hero.template.dart' as _ref3;
import 'package:angular_forms/angular_forms.template.dart' as _ref4;
import 'package:angular_router/angular_router.template.dart' as _ref5;
import 'package:angular_dart_hero/src/component/hero_component/hero_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'hero_component.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/runtime/text_binding.dart' as import13;
import 'package:angular_forms/src/directives/default_value_accessor.dart' as import14;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import15;
import 'package:angular_forms/src/directives/ng_model.dart' as import16;
import 'package:angular/src/core/di/opaque_token.dart' as import17;
import 'package:angular_forms/src/directives/control_value_accessor.dart' as import18;
import 'package:angular_forms/src/directives/ng_control.dart' as import19;
import 'package:angular/src/core/linker/app_view_utils.dart' as import20;
import 'package:angular/src/runtime/interpolate.dart' as import21;
import 'package:angular/src/di/errors.dart' as import22;
import 'hero_service.dart' as import23;
import 'package:http/src/client.dart' as import24;
import 'package:angular_router/src/location/location.dart' as import25;
import 'package:angular_router/src/location/location_strategy.dart' as import26;

final List<dynamic> styles$HeroComponent = [import0.styles];

class ViewHeroComponent0 extends AppView<import2.HeroComponent> {
  ViewContainer _appEl_0;
  NgIf _NgIf_0_9;
  static import5.ComponentStyles _componentStyles;
  ViewHeroComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import8.document.createElement('my-hero');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:angular_dart_hero/lib/src/component/hero_component/hero_component.dart' : null);
  }

  @override
  ComponentRef<import2.HeroComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = import11.appendAnchor(parentRenderNode);
    _appEl_0 = ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = TemplateRef(_appEl_0, viewFactory_HeroComponent1);
    _NgIf_0_9 = NgIf(_appEl_0, _TemplateRef_0_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _NgIf_0_9.ngIf = (_ctx.hero != null);
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0.destroyNestedViews();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$HeroComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.HeroComponent> _HeroComponentNgFactory = const ComponentFactory('my-hero', viewFactory_HeroComponentHost0);
ComponentFactory<import2.HeroComponent> get HeroComponentNgFactory {
  return _HeroComponentNgFactory;
}

class _ViewHeroComponent1 extends AppView<import2.HeroComponent> {
  final import13.TextBinding _textBinding_2 = import13.TextBinding();
  final import13.TextBinding _textBinding_6 = import13.TextBinding();
  final import13.TextBinding _textBinding_10 = import13.TextBinding();
  import14.DefaultValueAccessor _DefaultValueAccessor_15_5;
  List<import15.ControlValueAccessor<dynamic>> _NgValueAccessor_15_6;
  import16.NgModel _NgModel_15_7;
  _ViewHeroComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.HeroComponent> build() {
    final _ctx = ctx;
    final doc = import8.document;
    final _el_0 = doc.createElement('div');
    addShimC(_el_0);
    final _el_1 = import11.appendElement(doc, _el_0, 'h2');
    addShimE(_el_1);
    _el_1.append(_textBinding_2.element);
    final _el_3 = import11.appendDiv(doc, _el_0);
    addShimC(_el_3);
    final _el_4 = import11.appendElement(doc, _el_3, 'label');
    addShimE(_el_4);
    final _text_5 = import11.appendText(_el_4, 'id:');
    _el_3.append(_textBinding_6.element);
    final _el_7 = import11.appendDiv(doc, _el_0);
    addShimC(_el_7);
    final _el_8 = import11.appendElement(doc, _el_7, 'label');
    addShimE(_el_8);
    final _text_9 = import11.appendText(_el_8, 'name:');
    _el_7.append(_textBinding_10.element);
    final _el_11 = import11.appendDiv(doc, _el_0);
    addShimC(_el_11);
    final _el_12 = import11.appendElement(doc, _el_11, 'label');
    addShimE(_el_12);
    final _text_13 = import11.appendText(_el_12, 'name:');
    final _text_14 = import11.appendText(_el_11, ' ');
    final _el_15 = import11.appendElement(doc, _el_11, 'input');
    import11.setAttribute(_el_15, 'placeholder', 'name');
    addShimC(_el_15);
    _DefaultValueAccessor_15_5 = import14.DefaultValueAccessor(_el_15);
    _NgValueAccessor_15_6 = [_DefaultValueAccessor_15_5];
    _NgModel_15_7 = import16.NgModel(null, _NgValueAccessor_15_6);
    final _el_16 = import11.appendElement(doc, _el_0, 'button');
    addShimC(_el_16);
    final _text_17 = import11.appendText(_el_16, 'Back');
    final _text_18 = import11.appendText(_el_0, ' ');
    final _el_19 = import11.appendElement(doc, _el_0, 'button');
    addShimC(_el_19);
    final _text_20 = import11.appendText(_el_19, 'Save');
    _el_15.addEventListener('blur', eventHandler0(_DefaultValueAccessor_15_5.touchHandler));
    _el_15.addEventListener('input', eventHandler1(_handle_input_15_2));
    final subscription_0 = _NgModel_15_7.update.listen(eventHandler1(_handle_ngModelChange_15_0));
    _el_16.addEventListener('click', eventHandler0(_ctx.goBack));
    _el_19.addEventListener('click', eventHandler0(_ctx.save));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((15 == nodeIndex)) {
      if (identical(token, const import17.MultiToken<import18.ControlValueAccessor<dynamic>>('NgValueAccessor'))) {
        return _NgValueAccessor_15_6;
      }
      if ((identical(token, import16.NgModel) || identical(token, import19.NgControl))) {
        return _NgModel_15_7;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    _NgModel_15_7.model = _ctx.hero.name;
    _NgModel_15_7.ngAfterChanges();
    if (((!import20.AppViewUtils.throwOnChanges) && firstCheck)) {
      _NgModel_15_7.ngOnInit();
    }
    _textBinding_2.updateText(import21.interpolateString0(_ctx.hero.name));
    _textBinding_6.updateText(import21.interpolate0(_ctx.hero.id));
    _textBinding_10.updateText(import21.interpolateString0(_ctx.hero.name));
  }

  void _handle_ngModelChange_15_0($event) {
    final _ctx = ctx;
    _ctx.hero.name = $event;
  }

  void _handle_input_15_2($event) {
    _DefaultValueAccessor_15_5.handleChange($event.target.value);
  }
}

AppView<void> viewFactory_HeroComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewHeroComponent1(parentView, parentIndex);
}

final List<dynamic> styles$HeroComponentHost = const [];

class _ViewHeroComponentHost0 extends AppView<import2.HeroComponent> {
  ViewHeroComponent0 _compView_0;
  dynamic _HeroService_0_5;
  dynamic _Location_0_6;
  import2.HeroComponent _HeroComponent_0_7;
  _ViewHeroComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.HeroComponent> build() {
    _compView_0 = ViewHeroComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HeroService_0_5 = (import9.isDevMode
        ? import22.debugInjectorWrap(import23.HeroService, () {
            return import23.HeroService(this.injectorGet(import24.Client, viewData.parentIndex));
          })
        : import23.HeroService(this.injectorGet(import24.Client, viewData.parentIndex)));
    _Location_0_6 = (import9.isDevMode
        ? import22.debugInjectorWrap(import25.Location, () {
            return import25.Location(this.injectorGet(import26.LocationStrategy, viewData.parentIndex));
          })
        : import25.Location(this.injectorGet(import26.LocationStrategy, viewData.parentIndex)));
    _HeroComponent_0_7 = import2.HeroComponent(_HeroService_0_5, _Location_0_6);
    _compView_0.create(_HeroComponent_0_7, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _HeroComponent_0_7);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((0 == nodeIndex)) {
      if (identical(token, import23.HeroService)) {
        return _HeroService_0_5;
      }
      if (identical(token, import25.Location)) {
        return _Location_0_6;
      }
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import2.HeroComponent> viewFactory_HeroComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewHeroComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HeroComponent, HeroComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
