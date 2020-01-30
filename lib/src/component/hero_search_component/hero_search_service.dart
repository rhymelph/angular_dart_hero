

import 'dart:convert';

import 'package:angular/angular.dart';
import 'package:angular_dart_hero/src/model/hero.dart';
import 'package:http/http.dart';

@Injectable()
class HeroSearchService {
  final Client _http;

  HeroSearchService(this._http);

  Future<List<Hero>> search(String team)async{
    try{
      final response = await _http.get('app/heros/?name=$team');
      return (_extractData(response) as List)
      .map((json)=>Hero.fromJson(json))
      .toList();
    }catch(e){
      throw _handleError(e);
    }
  }

    Exception _handleError(dynamic e){
    print(e);
    return Exception('Service error ,case: $e');
  }

  dynamic _extractData(Response rep) =>json.decode(rep.body)['data'];

}