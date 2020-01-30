


import 'package:angular_dart_hero/src/model/hero.dart';
import 'package:http/http.dart';
import 'package:http/testing.dart';
import 'dart:math';
import 'dart:convert';
//模拟web请求
class  InMemoryDataService extends MockClient {
  InMemoryDataService() : super(_handler);
  static final _initialHeroes = [
    {'id': 11, 'name': 'Mr. Nice'},
    {'id': 12, 'name': 'Narco'},
    {'id': 13, 'name': 'Bombasto'},
    {'id': 14, 'name': 'Celeritas'},
    {'id': 15, 'name': 'Magneta'},
    {'id': 16, 'name': 'RubberMan'},
    {'id': 17, 'name': 'Dynama'},
    {'id': 18, 'name': 'Dr IQ'},
    {'id': 19, 'name': 'Magma'},
    {'id': 20, 'name': 'Tornado'}
  ];

  static List<Hero> _herosDb;
  static int _nextId;

  static resetDb(){
    _herosDb =_initialHeroes.map((json)=>Hero.fromJson(json)).toList();
    _nextId =_herosDb.map((hero)=>hero.id).fold(0, max)+1;
  }


  static Future<Response> _handler(Request request) async{
    if(_herosDb == null) resetDb();
    var data;
    switch(request.method){
      case 'GET':
        final id =int.tryParse(request.url.pathSegments.last);
        if(id!=null){
          //根据id获取英雄
          data = _herosDb
          .firstWhere((hero)=>hero.id == id);
        }else{
          //获取所有匹配名字的英雄
          final preFix = request.url.queryParameters['name']??'';
          final regExp = RegExp(preFix,caseSensitive:false);
          data = _herosDb.where((hero)=>hero.name.contains(regExp)).toList();
        }
      break;
      case 'PUT':
      //更改英雄名字
          var heroChanges = Hero.fromJson(json.decode(request.body));
          var targetHero = _herosDb.firstWhere((he)=>he.id == heroChanges.id);
          targetHero.name =heroChanges.name;
          data = targetHero;
        break;
      case 'POST':
      //添加英雄
        var name = json.decode(request.body)['name'];
        var newHero = Hero(
          id: _nextId++,
          name: name,
        );
        _herosDb.add(newHero);
        data = newHero;
        break;
        case 'DELETE':
        var id = int.parse(request.url.pathSegments.last);
        _herosDb.removeWhere((hero)=>hero.id==id);
        break;
    }

    return Response(json.encode({'data':data}), 200,
    headers: {'content-type':'application/json'});
  }
}