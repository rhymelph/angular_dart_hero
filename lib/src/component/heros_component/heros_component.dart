import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_dart_hero/src/commom/route_paths.dart';
import 'package:angular_dart_hero/src/component/hero_component/hero_service.dart';
import 'package:angular_dart_hero/src/model/hero.dart';

// AngularDart info: https://angulardart.dev
// Components info: https://angulardart.dev/components

@Component(
    selector: 'my-heros',
    styleUrls: ['heros_component.css'],
    templateUrl: 'heros_component.html',
    directives: [
      NgFor,
      NgIf,
      // HeroComponent,
    ],
    pipes: [
      commonPipes,
    ],
    providers: [ClassProvider(HeroService)])
class HerosComponent implements OnInit {
  List<Hero> heros;
  HeroService _heroService;
  final Router _router;

  HerosComponent(this._heroService,this._router);
  Hero selected;

//选中英雄
  void onSelect(Hero hero) {
    selected = hero;
  }

//获取英雄
  void _getHeros() async {
    heros = await _heroService.getAll();
  }

//添加英雄
  Future<void> add(String heroName)async{
    heroName = heroName.trim();
    if(heroName.isEmpty) return null;
    heros.add(await _heroService.create(heroName));
    selected = null;
    
  }

//删除英雄
  Future<void> delete(Hero hero) async{
    await _heroService.delete(hero.id);
    heros.remove(hero);
    if(selected == hero) selected =null;
  }
  String _heroUrl(int id) =>RoutePaths.hero.toUrl(parameters: {idParam:'$id'});


  Future<NavigationResult> gotoDetail() =>_router.navigate(_heroUrl(selected.id));

  @override
  void ngOnInit() {
    _getHeros();
  }
}
