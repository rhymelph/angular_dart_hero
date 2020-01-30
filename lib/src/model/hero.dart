

class Hero {
  final int id;
   String name;

  Hero({this.id, this.name});

  static Hero fromJson(Map<String, Object> json) {
    return Hero(
      id: _toInt(json['id']),
      name: json['name'],
    );
    
  }

  Map<String,Object> toJson(){
    return {
      'id': id,
      'name':name,
    };
    
  }
}

int _toInt(id)=>id is int ?id :int.parse(id);