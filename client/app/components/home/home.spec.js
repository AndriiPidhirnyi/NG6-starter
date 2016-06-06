import HomeModule     from './home';
import HomeController from './home.controller';
import HomeComponent  from './home.component';
import HomeTemplate   from './home.html';

describe('Home', () => {
  let makeController;

  beforeEach(window.module(HomeModule.name));
  beforeEach(inject(() => {
    makeController = () => {
      return new HomeController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller.name).toBeDefined();
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(HomeTemplate).toMatch(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = HomeComponent;

    it('includes the intended template', () => {
      expect(component.template).toEqual(HomeTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component.controllerAs).toBeDefined();
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(HomeController);
    });
  });
});
