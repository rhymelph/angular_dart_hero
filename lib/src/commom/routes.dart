


import 'package:angular_router/angular_router.dart';
import 'package:angular_dart_hero/src/commom/route_paths.dart';
import 'package:angular_dart_hero/src/component/dashboard_component/dashboard_component.template.dart' as dashboard_component;
import 'package:angular_dart_hero/src/component/hero_component/hero_component.template.dart' as hero_component;
import 'package:angular_dart_hero/src/component/heros_component/heros_component.template.dart' as heros_component;

class Routes{
  static final heros = RouteDefinition(
    routePath: RoutePaths.heros,
    component: heros_component.HerosComponentNgFactory,
  );
static final dashboard = RouteDefinition(
    routePath: RoutePaths.dashboard,
    component: dashboard_component.DashboardComponentNgFactory,
  );
  static final hero = RouteDefinition(
    routePath: RoutePaths.hero,
    component: hero_component.HeroComponentNgFactory,
  );

  static final all = <RouteDefinition>[
    dashboard,
    heros,
    //重定向
    RouteDefinition.redirect(
      path:  '',
      redirectTo: RoutePaths.dashboard.toUrl(),
    ),
    hero,
  ];
}