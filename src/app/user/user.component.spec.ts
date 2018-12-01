import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { setupMaster } from 'cluster';
import { UserService } from './user.service';

describe('UserComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    });

    // compileComponents(); - compileComponent is not required when using weback why? When application is
    // created with CLI  and uses Web pack. it uses different workflow and build process.
  }));

  describe(':', () => {

    function setup() {
      const fixture = TestBed.createComponent(UserComponent);
      const component = fixture.componentInstance;
      const userService = fixture.debugElement.injector.get(UserService);

      return { fixture, component, userService };
    }

    it('should create app component', () => {
      const { component } = setup();
      expect(component).toBeTruthy();
    });

    it('should display logged-in user name', () => {
      const { fixture, component, userService } = setup();
      const mockUser = { name: 'Mannie' };
      spyOn(userService, 'getUser').and.returnValue(mockUser);

      fixture.detectChanges();
      const compile = fixture.debugElement.nativeElement;
      const loggedInUser = compile.querySelector('p');
      expect(loggedInUser.textContent).toBe(' Welcome Mannie ');
    });

    it('should display user is NOT logged in message', () => {
      const { fixture, component, userService } = setup();
      spyOn(userService, 'getUser').and.returnValue(undefined);
      fixture.detectChanges();

      const compile = fixture.debugElement.nativeElement;
      const loggedInUser = compile.querySelector('p');
      expect(loggedInUser.textContent).toBe(' user is NOT logged In. ');
    });
  });
});
