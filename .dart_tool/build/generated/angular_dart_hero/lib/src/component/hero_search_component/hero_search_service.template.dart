// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'hero_search_service.dart';
export 'hero_search_service.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_dart_hero/src/model/hero.template.dart' as _ref1;
import 'package:http/src/client.dart' as _i1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(HeroSearchService, (_i1.Client p0) => HeroSearchService(p0));
  _ngRef.registerDependencies(HeroSearchService, const [
    [_i1.Client]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
}
