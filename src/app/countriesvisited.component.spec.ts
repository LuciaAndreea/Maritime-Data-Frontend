import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountriesvisitedComponent } from './countriesvisited.component';
import { CommonModule } from '@angular/common';
import { provideMockStore } from '@ngrx/store/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('CountriesvisitedComponent', () => {
  let component: CountriesvisitedComponent;
  let fixture: ComponentFixture<CountriesvisitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesvisitedComponent],
      providers: [provideMockStore(), provideHttpClientTesting()]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesvisitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
