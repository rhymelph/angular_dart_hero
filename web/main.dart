import 'package:angular/angular.dart';
import 'package:angular_dart_hero/app_component.template.dart' as ng;
import 'package:angular_router/angular_router.dart';
import 'package:angular_dart_hero/src/commom/in_memory_data_service.dart';
import 'package:http/browser_client.dart';
import 'package:http/http.dart';
import 'main.template.dart' as self;
@GenerateInjector([
  routerProvidersHash,
  // ClassProvider(BrowserClient),
  ClassProvider(Client,useClass:InMemoryDataService)
])
final InjectorFactory injector = self.injector$Injector;

void main() {
  runApp(ng.AppComponentNgFactory,createInjector: injector);
}
