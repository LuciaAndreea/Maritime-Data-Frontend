import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VoyagesChartComponent } from './voyages-chart.component';
import { provideMockStore } from '@ngrx/store/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('VoyagesChartComponent', () => {
  let component: VoyagesChartComponent;
  let fixture: ComponentFixture<VoyagesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoyagesChartComponent, HttpClientTestingModule],
      providers: [provideMockStore()]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyagesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});