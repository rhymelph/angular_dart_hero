import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_dart_hero/src/commom/route_paths.dart';
import 'package:angular_dart_hero/src/commom/routes.dart';

// AngularDart info: https://angulardart.dev
// Components info: https://angulardart.dev/components


@Component(
  selector: 'my-app',
  styleUrls: ['app_component.css'],
  templateUrl: 'app_component.html',
  directives: [routerDirectives],
  exports: [
    RoutePaths,
    Routes,
  ]
)
class AppComponent  implements OnInit{
  final String name = 'Tour of Heros';

  @override
  void ngOnInit() {
  }
}
