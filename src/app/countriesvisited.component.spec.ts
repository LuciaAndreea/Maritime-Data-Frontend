import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesvisitedComponent } from './countriesvisited.component';

describe('CountriesvisitedComponent', () => {
  let component: CountriesvisitedComponent;
  let fixture: ComponentFixture<CountriesvisitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesvisitedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesvisitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
