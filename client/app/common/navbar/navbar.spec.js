import NavbarModule     from './navbar';
import NavbarController from './navbar.controller';
import NavbarComponent  from './navbar.component';
import NavbarTemplate   from './navbar.html';

describe('Navbar', () => {
  let makeController;

  beforeEach(window.module(NavbarModule.name));
  beforeEach(inject(() => {
    makeController = () => {
      return new NavbarController();
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
      expect(NavbarTemplate).toMatch(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = NavbarComponent;

    it('includes the intended template', () => {
      expect(component.template).toEqual(NavbarTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component.controllerAs).toBeDefined();
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(NavbarController);
    });
  });
});
