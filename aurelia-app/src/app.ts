import {PLATFORM} from 'aurelia-pal';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    console.log('im alive');
    config.title = 'Aurelia';
    config.options.pushState = true;
    config.map([
      {
        route: ['', 'welcome'],
        name: 'welcome',
        moduleId: PLATFORM.moduleName('./welcome'),
        title: 'Welcome'
      },
      {
        route: 'calendar',
        name: 'calendar',
        moduleId: PLATFORM.moduleName('./calendar/calendar'),
        title: 'Calendar'
      },
      {
        route: 'todo',
        name: 'todo',
        moduleId: PLATFORM.moduleName('./todo/todo'),
        title: 'TODO'
      }
    ]);

    this.router = router;
  }
}
