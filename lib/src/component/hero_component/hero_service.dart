


import 'dart:convert';
import 'package:angular/angular.dart';
import 'package:angular_dart_hero/src/model/hero.dart';
import 'package:http/http.dart';

final mockHeroes = <Hero>[
  Hero(id: 11, name: 'Mr. Nice'),
  Hero(id: 12, name: 'Narco'),
  Hero(id: 13, name: 'Bombasto'),
  Hero(id: 14, name: 'Celeritas'),
  Hero(id: 15, name: 'Magneta'),
  Hero(id: 16, name: 'RubberMan'),
  Hero(id: 17, name: 'Dynama'),
  Hero(id: 18, name: 'Dr IQ'),
  Hero(id: 19, name: 'Magma'),
  Hero(id: 20, name: 'Tornado')
];

const _heroUrl = 'api/heros';

const _headers = {
    'content-type':'application/json'
};

@Injectable()
class HeroService{

  final Client _http;

  HeroService(this._http);

  // Future<List<Hero>> getAll()  async=>mockHeroes;
  Future<List<Hero>> getAll()  async{
    try{
    final response =await _http.get(_heroUrl);

    final heros =(_extractData(response) as List)
    .map((json)=>Hero.fromJson(json)).toList();
    return heros;
    }catch(e){
      throw _handleError(e);
    }
  }


  Future<List<Hero>> getAllSlowly()  async=>Future.delayed(Duration(seconds: 2),getAll);

  // Future<Hero> get(int id) async =>(await getAll()).where((data)=>data.id==id).first;
  Future<Hero> get(int id) async{
    try{
        final response  = await _http.get('${_heroUrl}/$id');
        return Hero.fromJson(_extractData(response));
    }catch(e){
      throw _handleError(e);
    }
  }

  Future<Hero> update(Hero hero) async {
    try{
      final url = '$_heroUrl/${hero.id}';
      final response = 
      await _http.put(url, headers: _headers,body: json.encode(hero));
      return Hero.fromJson(_extractData(response));
    }catch(e){
      throw _handleError(e);
    }
  }

  Future<Hero> create(String heroName) async{
      try{
        final response = await _http.post(_heroUrl,
        headers: _headers, body: json.encode({"name":heroName}));
        return Hero.fromJson(_extractData(response));
      }catch(e){
        _handleError(e);
      }
  }

  Future<void> delete(int id) async{
    try{
      await _http.delete('${_heroUrl}/$id');
    }catch(e){
      _handleError(e);
    }
  }

  Exception _handleError(dynamic e){
    print(e);
    return Exception('Service error ,case: $e');
  }

  dynamic _extractData(Response rep) =>json.decode(rep.body)['data'];

}