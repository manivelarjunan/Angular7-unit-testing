import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SharedService } from './sharedService.service';


describe('Shared service:', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedService],
      imports: [HttpClientTestingModule]
    });
  });
    describe(':', () => {

      function setup() {
        const sharedService = TestBed.get(SharedService);
        const httpTestingController = TestBed.get(HttpTestingController);
        return { sharedService, httpTestingController };
      }

      it('should call the google\'s map data', () => {
        const { sharedService, httpTestingController } = setup();
        sharedService.getGoogleMapData().subscribe(data => {
          expect(data.mapData).toBe('USA');
        });

        const req = httpTestingController.expectOne('https:www.google.com/googleMapData');

        expect(req.request.method).toBe('GET');

        req.flush({
          mapData: 'USA'
        });
      });

      afterEach(() => {
        const { httpTestingController } = setup();
        httpTestingController.verify();
      });
    });
});
