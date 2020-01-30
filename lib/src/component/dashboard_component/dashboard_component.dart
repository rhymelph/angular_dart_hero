


import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_dart_hero/src/commom/route_paths.dart';
import 'package:angular_dart_hero/src/component/hero_component/hero_service.dart';
import 'package:angular_dart_hero/src/component/hero_search_component/hero_search_component.dart';
import 'package:angular_dart_hero/src/model/hero.dart';

@Component(
  selector: 'my-dashboard',
  templateUrl: 'dashboard_component.html',
  styleUrls: [
    'dashboard_component.css',
  ],
  directives: [
    NgFor,
    routerDirectives,
    HeroSearchComponent,
  ],
  providers: [
    ClassProvider(HeroService),
  ]
)
class DashboardComponent implements OnInit{
  List<Hero> heros;
  final HeroService _heroService;

  DashboardComponent(this._heroService);
  @override
  void ngOnInit() {
   _heroService.getAll().then((data){
     heros =( data.skip(1)).take(4).toList();
   });
  }


//指向于英雄
  String heroUrl(int id) =>RoutePaths.hero.toUrl(parameters: {idParam:'$id'});

}