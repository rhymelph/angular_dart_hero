


import 'package:angular_router/angular_router.dart';

const idParam = 'id';

class RoutePaths{
  static final heros =RoutePath(path:'heros');
  static final dashboard = RoutePath(path: 'dashboard');
  static final hero = RoutePath(path: '${heros.path}/:$idParam');

}