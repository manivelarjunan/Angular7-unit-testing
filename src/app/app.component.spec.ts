import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserAsyncComponent } from './user-async/user-async.component';


describe('App component', () => {
  beforeEach(async(() => {
    // The TestBed is the most important of the Angular testing utilities.
    // The TestBed creates a dynamically-constructed Angular test module that emulates an Angular @NgModule.
    // The TestBed.configureTestingModule() method takes a metadata object that can have most of the properties of an @NgModule.
    TestBed.configureTestingModule({
      declarations: [AppComponent, UserComponent, UserAsyncComponent]
    }).compileComponents();
  }));

  describe(':', () => {

    // Begin by putting re-usable, preparatory code in a setup function instead of beforeEach().
    // The setup() function returns an object literal with the variables, such as app, that a test might reference.
    // You don't define semi-global variables (e.g., let app,fixture ) in the body of the describe().
    // Then each test invokes setup() in its first line, before continuing with steps that
    // manipulate the test subject and assert expectations.

    function setup() {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      return { fixture, app };
    }

    it('should create the app', async(() => {
      const { app } = setup();
      expect(app).toBeTruthy();
    }));

    it('should have title as \'Angular7-unit-testing!\'', async(() => {
      const { app } = setup();
      expect(app.title).toBe('Angular7-unit-testing!');
    }));

    it('should have h1 tag as \'Welcome Angulat7-unit-testing!\'', async(() => {
      const { app, fixture } = setup();
      fixture.detectChanges();
      const compile = fixture.debugElement.nativeElement;
      const h1tag = compile.querySelector('h1');
      expect(h1tag.textContent).toBe(' Welcome to Angular7-unit-testing!! ');
    }));
  });
});

/*
describe('App component', () => {
  beforeEach(async(() => {
    // The TestBed is the most important of the Angular testing utilities.
    // The TestBed creates a dynamically-constructed Angular test module that emulates an Angular @NgModule.
    // The TestBed.configureTestingModule() method takes a metadata object that can have most of the properties of an @NgModule.
    TestBed.configureTestingModule({
      declarations: [AppComponent, UserComponent, UserAsyncComponent]
    }).compileComponents();
  }));

  describe(':', () => {
    let fixture, app;
    // Most test suites in this guide call beforeEach() to set the preconditions for each it()
    // test and rely on the TestBed to create classes and inject services.
    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.debugElement.componentInstance;
    });

    it('should create the app', async(() => {
      expect(app).toBeTruthy();
    }));

    it('should have title as \'Angular7-unit-testing!\'', async(() => {
      expect(app.title).toBe('Angular7-unit-testing!');
    }));

    it('should have h1 tag as \'Welcome Angulat7-unit-testing!\'', async(() => {
      fixture.detectChanges();
      const compile = fixture.debugElement.nativeElement;
      const h1tag = compile.querySelector('h1');
      expect(h1tag.textContent).toBe(' Welcome to Angular7-unit-testing!! ');
    }));
  });
});

*/
