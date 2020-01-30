// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'routes.dart';
export 'routes.dart';
import 'package:angular_dart_hero/src/commom/route_paths.template.dart' as _ref0;
import 'package:angular_dart_hero/src/component/dashboard_component/dashboard_component.template.dart' as _ref1;
import 'package:angular_dart_hero/src/component/hero_component/hero_component.template.dart' as _ref2;
import 'package:angular_dart_hero/src/component/heros_component/heros_component.template.dart' as _ref3;
import 'package:angular_router/angular_router.template.dart' as _ref4;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
