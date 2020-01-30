

import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_dart_hero/src/commom/route_paths.dart';
import 'package:angular_dart_hero/src/model/hero.dart';
import 'package:stream_transform/stream_transform.dart';
import 'hero_search_service.dart';

@Component(
  selector: 'hero-search',
  templateUrl: 'hero_search_component.html',
  styleUrls: [
    'hero_search_component.css'
  ],
  directives: [
    NgFor,
  ],
  pipes: [
    commonPipes
  ],
  providers: [
    ClassProvider(HeroSearchService)
  ]
)
class  HeroSearchComponent  implements OnInit{
  final HeroSearchService _searchService;

  HeroSearchComponent(this._searchService,this._router);

  Router _router;

  Stream<List<Hero>> heros;
  StreamController<String> _searchTerms = StreamController<String>.broadcast();


  void search(String keywork){
    _searchTerms.add(keywork);
  }

  @override
  void ngOnInit() {
    heros = _searchTerms.stream
    .debounce(Duration(milliseconds: 300))
    // 确保仅在过滤文本更改的情况下发送请求
    .distinct()
    .switchMap((term)=>term.isEmpty?
    Stream<List<Hero>>.fromIterable([<Hero>[]])
    // //取消并放弃之前的请求，仅返回最新的搜索服务请求
    :_searchService.search((term)).asStream())
    .handleError(print);
    // heros = _searchTerms.stream
    // // .transform(debounce(, ))
    // .distinct() /
    // .transform(switchMap((term)=>term.isEmpty
    // ?Stream<List<Hero>>.fromIterable([<Hero>[]])
    // : _searchService.search(term).asStream()))
    // .handleError((e){
    //   print(e);
    // });
  }

  String _heroUrl(int id)=>RoutePaths.hero.toUrl(parameters: {idParam:'$id'});

  Future<NavigationResult> gotoDetail(Hero hero)=>
    _router.navigate(_heroUrl(hero.id));
}