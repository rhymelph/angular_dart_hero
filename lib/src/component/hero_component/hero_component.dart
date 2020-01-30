

import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_dart_hero/src/commom/route_paths.dart';
import 'package:angular_dart_hero/src/component/hero_component/hero_service.dart';
import 'package:angular_dart_hero/src/model/hero.dart';

@Component(
  selector: 'my-hero',
  directives: [
    formDirectives,
    NgIf,
  ],
  styleUrls: [
    'hero_component.css'
  ],
  providers: [
    ClassProvider(HeroService),
    ClassProvider(Location)
  ],
  templateUrl: 'hero_component.html'
)
class HeroComponent implements OnActivate{
  // @Input() 通过组件传递值 <my-hero [hero] ="selected"></my-hero>
  // Hero hero;
    Hero hero;

    final HeroService _heroService;
    //用于导航，返回，前进
    final Location _location;
  HeroComponent(this._heroService, this._location);

  @override
  void onActivate(RouterState previous, RouterState current)  async{
    // 获取路由传值
      final id = getId(current.parameters);
      if(id != null) hero = await (_heroService.get(id));
  }

//获取id
  int getId(Map<String,String> parameters){
    final id = parameters[idParam];
    return id == null ? null: int.parse(id);
  }

  void goBack() =>_location.back();


//保存英雄
  void save(){
    _heroService.update(hero);
    goBack();
  }
}