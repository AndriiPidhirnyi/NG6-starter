import AboutModule     from './about';
import AboutController from './about.controller';
import AboutComponent  from './about.component';
import AboutTemplate   from './about.html';

describe('About', () => {
  let makeController;

  beforeEach(window.module(AboutModule.name));
  beforeEach(inject(() => {
    makeController = () => {
      return new AboutController();
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
      expect(AboutTemplate).toMatch(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = AboutComponent;

    it('includes the intended template', () => {
      expect(component.template).toEqual(AboutTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component.controllerAs).toBeDefined();
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(AboutController);
    });
  });
});
