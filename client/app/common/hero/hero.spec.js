import HeroModule     from './hero';
import HeroController from './hero.controller';
import HeroComponent  from './hero.component';
import HeroTemplate   from './hero.html';

describe('Hero', () => {
  let makeController;

  beforeEach(window.module(HeroModule.name));
  beforeEach(inject(() => {
    makeController = () => {
      return new HeroController();
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
      expect(HeroTemplate).toMatch(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = HeroComponent;

    it('includes the intended template', () => {
      expect(component.template).toEqual(HeroTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component.controllerAs).toBeDefined();
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(HeroController);
    });
  });
});
